"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  X,
  CheckCircle2,
  BookOpen,
  Timer,
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLearningSession } from "@/hooks/use-learning-session";
import { useToast } from "@/hooks/use-toast";

export type PlayerCheckpoint = {
  id: string;
  order: number;
  timeSeconds: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  requiresPass: boolean;
};

type Props = {
  lesson: {
    id: string;
    title: string;
    videoUrl: string;
    durationSeconds: number | null;
    notesHtml: string | null;
    order: number;
    courseTitle: string;
  };
  checkpoints: PlayerCheckpoint[];
};

type Phase = "ready" | "learning" | "checkpoint" | "break" | "reflection" | "complete";

function formatTime(sec: number): string {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function LessonPlayer({ lesson, checkpoints }: Props) {
  const router = useRouter();
  const { toast } = useToast();

  const [phase, setPhase] = useState<Phase>("ready");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [goal, setGoal] = useState("");
  const [focusMinutes, setFocusMinutes] = useState(20);
  const [timerEnd, setTimerEnd] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(lesson.durationSeconds ?? 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Checkpoint dialog state
  const [cp, setCp] = useState<PlayerCheckpoint | null>(null);
  const [cpSelected, setCpSelected] = useState<number | null>(null);
  const [cpFeedback, setCpFeedback] = useState<"correct" | "wrong" | null>(null);
  const [cpAttempts, setCpAttempts] = useState(0);

  const { setVideoRef, videoEl, onNudge } = useLearningSession({
    sessionId,
    lessonId: lesson.id,
    enabled: phase === "learning" && sessionId !== null,
  });

  // Refs for values used inside event listeners
  const phaseRef = useRef<Phase>("ready");
  const answeredRef = useRef<Set<string>>(new Set());
  const checkpointsRef = useRef(checkpoints);
  const sessionIdRef = useRef<string | null>(null);
  const goalRef = useRef("");
  const timerEndRef = useRef<number | null>(null);

  phaseRef.current = phase;
  goalRef.current = goal;
  timerEndRef.current = timerEnd;

  const updateSessionRef = useCallback(
    (sid: string | null) => {
      sessionIdRef.current = sid;
      setSessionId(sid);
    },
    []
  );

  // ── Nudge handling (invisible source) ──
  onNudge((message) => {
    toast({
      title: message,
      variant: "default",
    });
  });

  // ── Focus timer ──
  useEffect(() => {
    if (phase !== "learning" || !timerEnd) return;
    const iv = setInterval(() => {
      const target = timerEndRef.current;
      if (target == null) return;
      const remaining = Math.max(0, Math.round((target - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(iv);
        setPhase("break");
        const v = videoEl.current;
        if (v) v.pause();
      }
    }, 1000);
    return () => clearInterval(iv);
  }, [phase, timerEnd, videoEl]);

  function checkCheckpointAt(time: number) {
    const cp = checkpointsRef.current.find(
      (c) =>
        !answeredRef.current.has(c.id) &&
        time >= c.timeSeconds &&
        Math.abs(time - c.timeSeconds) < 2
    );
    if (cp && phaseRef.current === "learning") {
      const v = videoEl.current;
      if (v) v.pause();
      setCp(cp);
      setCpSelected(null);
      setCpFeedback(null);
      setCpAttempts(0);
      setPhase("checkpoint");
    }
  }

  const onTime = useCallback(() => {
    const v = videoEl.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
    if (v.duration && Number.isFinite(v.duration)) {
      setDuration(v.duration);
    }
    checkCheckpointAt(v.currentTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoEl]);

  const onPlay = useCallback(() => setIsPlaying(true), []);
  const onPause = useCallback(() => setIsPlaying(false), []);
  const onEnded = useCallback(() => {
    setIsPlaying(false);
    const allRequired = checkpointsRef.current
      .filter((c) => c.requiresPass)
      .every((c) => answeredRef.current.has(c.id));
    if (allRequired) {
      setPhase("reflection");
    }
  }, []);

  const attachVideoRef = useCallback(
    (el: HTMLVideoElement | null) => {
      setVideoRef(el);
      if (el) {
        el.addEventListener("timeupdate", onTime);
        el.addEventListener("play", onPlay);
        el.addEventListener("pause", onPause);
        el.addEventListener("ended", onEnded);
      }
    },
    [setVideoRef, onTime, onPlay, onPause, onEnded]
  );

  function startLesson() {
    (async () => {
      try {
        const res = await fetch("/api/lms/session/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId: lesson.id }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Could not start the lesson.");
          return;
        }
        updateSessionRef(data.sessionId);
        setTimerEnd(Date.now() + focusMinutes * 60_000);
        setPhase("learning");
        setTimeout(() => {
          const v = videoEl.current;
          if (v) v.play().catch(() => {});
          enterFullscreen();
        }, 60);
      } catch {
        setError("Could not start the lesson. Please try again.");
      }
    })();
  }

  function enterFullscreen() {
    if (!document.fullscreenElement && (document.fullscreenEnabled ?? false)) {
      const root = document.getElementById("lesson-player-root");
      if (root?.requestFullscreen) {
        root.requestFullscreen().catch(() => {});
      }
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      enterFullscreen();
    }
  }

  useEffect(() => {
    const onFs = () => setIsFullscreen(document.fullscreenElement != null);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  function togglePlay() {
    const v = videoEl.current;
    if (!v) return;
    if (phase !== "learning") return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  function seekTo(seconds: number) {
    const v = videoEl.current;
    if (!v) return;
    // Lock forward seeking past unanswered required checkpoints
    const boundary = getLockedBoundary();
    const target = Math.max(0, Math.min(seconds, boundary));
    v.currentTime = target;
    setCurrentTime(target);
  }

  function getLockedBoundary(): number {
    const current = videoEl.current?.currentTime ?? 0;
    const unanswered = checkpointsRef.current
      .filter((c) => c.requiresPass && !answeredRef.current.has(c.id) && c.timeSeconds > current)
      .map((c) => c.timeSeconds);
    if (unanswered.length === 0) return duration;
    return Math.min(...unanswered);
  }

  function backTen() {
    const v = videoEl.current;
    if (!v) return;
    v.currentTime = Math.max(0, v.currentTime - 10);
  }

  function changeRate(rate: number) {
    const v = videoEl.current;
    if (!v) return;
    v.playbackRate = Math.max(0.75, Math.min(1.25, rate));
  }

  function toggleMute() {
    const v = videoEl.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  async function submitCheckpoint() {
    if (cpSelected === null || !cp) return;
    try {
      const res = await fetch(`/api/lms/checkpoints/${cp.id}/attempt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current, answerIndex: cpSelected }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not submit your answer.");
        return;
      }
      const attempts = cpAttempts + 1;
      setCpAttempts(attempts);
      if (data.correct) {
        answeredRef.current.add(cp.id);
        setCpFeedback("correct");
        setTimeout(() => {
          setCp(null);
          setCpFeedback(null);
          setCpSelected(null);
          if (phaseRef.current === "checkpoint") {
            setPhase("learning");
            const v = videoEl.current;
            if (v) v.play().catch(() => {});
          }
        }, 900);
      } else if (cp.requiresPass) {
        if (attempts >= 2) {
          setCpSelected(cp.correctIndex);
        }
        setCpFeedback("wrong");
      } else {
        answeredRef.current.add(cp.id);
        setCpFeedback("correct");
        setTimeout(() => {
          setCp(null);
          setCpFeedback(null);
          setCpSelected(null);
          if (phaseRef.current === "checkpoint") {
            setPhase("learning");
            const v = videoEl.current;
            if (v) v.play().catch(() => {});
          }
        }, 900);
      }
    } catch {
      setError("Could not submit your answer. Please try again.");
    }
  }

  function continueFromBreak() {
    setTimerEnd(Date.now() + focusMinutes * 60_000);
    setPhase("learning");
    const v = videoEl.current;
    if (v) v.play().catch(() => {});
  }

  async function finishLesson(reflection?: string) {
    if (!sessionIdRef.current) {
      router.push("/lms/student");
      return;
    }
    try {
      await fetch("/api/lms/session/end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reflection }),
      });
    } catch {
      // ignore
    }
    updateSessionRef(null);
    setPhase("complete");
  }

  async function exitLesson() {
    if (sessionIdRef.current) {
      await fetch("/api/lms/session/end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reflection: "" }),
      }).catch(() => {});
    }
    updateSessionRef(null);
    router.push("/lms/student");
  }

  // ── Render ──

  if (phase === "ready") {
    return (
      <div className="min-h-screen bg-cp-cream flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          <button
            onClick={() => router.push("/lms/student")}
            className="inline-flex items-center gap-2 text-cp-green/70 hover:text-cp-green mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to lessons
          </button>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cp-gold mb-2">
              <Timer className="w-4 h-4" /> Get ready
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-1">
              {lesson.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">{lesson.courseTitle}</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  What do you want to master in this lesson?
                </label>
                <input
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. I will explain mastery learning in my own words"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Focus session length
                </label>
                <div className="flex gap-2">
                  {[10, 20, 30, 40].map((m) => (
                    <button
                      key={m}
                      onClick={() => setFocusMinutes(m)}
                      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                        focusMinutes === m
                          ? "bg-cp-green text-white border-cp-green"
                          : "border-input hover:border-cp-green/50"
                      }`}
                    >
                      {m} min
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <Button
                onClick={startLesson}
                className="w-full bg-cp-green hover:bg-cp-green-light text-white font-semibold"
                size="lg"
              >
                <Play className="w-4 h-4 mr-2" /> Begin focus session
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Stay with this lesson from start to finish for the best learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="lesson-player-root"
      className="min-h-screen bg-[#0b1220] text-white flex flex-col"
    >
      {/* Player top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-black/40 border-b border-white/10">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={exitLesson}
            className="text-white/60 hover:text-white transition-colors"
            title="End session"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold uppercase tracking-wider text-cp-gold">
            Lesson {lesson.order}
          </span>
          <span className="text-sm font-medium text-white/90 truncate">{lesson.title}</span>
        </div>
        <div className="flex items-center gap-3">
          {timerEnd && (
            <span className="flex items-center gap-1.5 text-sm tabular-nums bg-white/10 rounded-full px-3 py-1">
              <Timer className="w-4 h-4 text-cp-gold" />
              {formatTime(timeLeft)}
            </span>
          )}
          <button
            onClick={() => setNotesOpen((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white bg-white/10 rounded-full px-3 py-1"
            title="Toggle notes"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Notes</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className="text-white/80 hover:text-white transition-colors"
            title="Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Video area */}
        <div className={`relative flex-1 flex flex-col ${notesOpen ? "hidden lg:flex" : "flex"}`}>
          <div className="relative flex-1 bg-black flex items-center justify-center">
            <video
              ref={attachVideoRef}
              src={lesson.videoUrl}
              className="max-h-full w-full object-contain"
              playsInline
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            />
            {phase === "break" && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20 p-6">
                <div className="text-center max-w-sm">
                  <Timer className="w-10 h-10 text-cp-gold mx-auto mb-4" />
                  <h2 className="text-xl font-bold mb-2">Time for a quick break</h2>
                  <p className="text-white/70 text-sm mb-6">
                    Stand up, stretch, and rest your eyes. Then continue when you are ready.
                  </p>
                  <Button
                    onClick={continueFromBreak}
                    className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold"
                  >
                    <Play className="w-4 h-4 mr-2" /> Continue lesson
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="bg-black/40 border-t border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={Math.max(1, duration)}
                step={0.5}
                value={Math.min(currentTime, duration)}
                onChange={(e) => seekTo(Number(e.target.value))}
                className="flex-1 accent-cp-gold h-1.5"
                disabled={phase === "checkpoint"}
              />
              <span className="text-xs text-white/70 tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  disabled={phase !== "learning"}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center disabled:opacity-40"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={backTen}
                  disabled={phase !== "learning"}
                  className="text-white/80 hover:text-white disabled:opacity-40"
                  title="Back 10 seconds"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button onClick={toggleMute} className="text-white/80 hover:text-white" title="Mute">
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-white/60">Speed</span>
                <select
                  defaultValue="1"
                  onChange={(e) => changeRate(Number(e.target.value))}
                  className="bg-white/10 text-white rounded-md px-2 py-1 text-xs"
                  disabled={phase !== "learning"}
                >
                  <option value="0.75">0.75x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notes panel */}
        {notesOpen && (
          <aside className="w-full lg:w-80 shrink-0 bg-[#0e1a2b] border-l border-white/10 overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cp-gold" /> Lesson notes
              </h3>
              <button
                onClick={() => setNotesOpen(false)}
                className="lg:hidden text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {checkpoints.length > 0 && (
              <div className="mb-4">
                <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2">
                  Checkpoints ({answeredRef.current.size}/{checkpoints.length})
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {checkpoints.map((c) => {
                    const done = answeredRef.current.has(c.id);
                    return (
                      <span
                        key={c.id}
                        title={`${formatTime(c.timeSeconds)} — ${c.prompt}`}
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          done
                            ? "bg-cp-green-lighter text-cp-green"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {done ? "✓" : formatTime(c.timeSeconds)}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="prose prose-sm prose-invert max-w-none text-white/85">
              {lesson.notesHtml ? (
                <ReactMarkdown>{lesson.notesHtml}</ReactMarkdown>
              ) : (
                <p className="text-sm text-white/50">
                  No notes for this lesson. Pause and write your own summary as you go.
                </p>
              )}
            </div>
          </aside>
        )}
      </div>

      {/* Checkpoint dialog */}
      {phase === "checkpoint" && cp && (
        <div className="fixed inset-0 z-30 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white text-foreground rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cp-gold mb-3">
              <Flag className="w-4 h-4" /> Checkpoint {cp.order} • {formatTime(cp.timeSeconds)}
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-4">
              {cp.prompt}
            </h2>
            <div className="space-y-2 mb-5">
              {cp.options.map((opt, i) => {
                const isCorrectPick = cpFeedback === "correct" && i === cp.correctIndex;
                const revealedWrong = cpFeedback === "wrong" && cpAttempts >= 2 && i === cp.correctIndex;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setCpSelected(i);
                      setCpFeedback(null);
                    }}
                    className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-colors ${
                      cpSelected === i
                        ? "border-cp-green bg-cp-green-lighter"
                        : revealedWrong
                          ? "border-cp-gold bg-cp-gold/10"
                          : "border-input hover:border-cp-green/50"
                    } ${isCorrectPick ? "border-cp-green bg-cp-green-lighter" : ""}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {cpFeedback === "correct" && (
              <p className="text-sm text-cp-green font-medium mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Correct! Great work.
              </p>
            )}
            {cpFeedback === "wrong" && (
              <p className="text-sm text-destructive font-medium mb-4">
                {cpAttempts >= 2
                  ? "The correct answer is highlighted in gold. Continue learning and retry."
                  : "Not quite. Review the video and try again."}
              </p>
            )}
            <Button
              onClick={submitCheckpoint}
              disabled={cpSelected === null}
              className="w-full bg-cp-green hover:bg-cp-green-light text-white font-semibold"
              size="lg"
            >
              Submit answer
            </Button>
          </div>
        </div>
      )}

      {/* Reflection */}
      {phase === "reflection" && (
        <div className="fixed inset-0 z-30 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white text-foreground rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cp-gold mb-3">
              <CheckCircle2 className="w-4 h-4" /> Lesson complete
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-2">
              Nice work finishing {lesson.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              In one or two sentences, what did you learn?
            </p>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              rows={4}
              placeholder="Today I learned…"
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm resize-none mb-5"
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => finishLesson()}
                className="flex-1 border-cp-green/30 text-cp-green hover:bg-cp-green hover:text-white"
              >
                Skip
              </Button>
              <Button
                onClick={() => finishLesson(goal)}
                className="flex-1 bg-cp-gold hover:bg-cp-gold-light text-white font-semibold"
              >
                <ArrowRight className="w-4 h-4 mr-2" /> Finish lesson
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Complete */}
      {phase === "complete" && (
        <div className="fixed inset-0 z-30 bg-black/80 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white text-foreground rounded-2xl p-8 shadow-2xl text-center">
            <CheckCircle2 className="w-12 h-12 text-cp-green mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-2">
              Lesson completed
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              You have completed {lesson.title}. Keep going — mastery comes step by step.
            </p>
            <Button
              onClick={() => router.push("/lms/student")}
              className="w-full bg-cp-green hover:bg-cp-green-light text-white font-semibold"
            >
              Back to lessons
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
