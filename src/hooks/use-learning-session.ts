"use client";

import { useCallback, useEffect, useRef } from "react";

type FocusState = {
  visibility: "visible" | "hidden";
  visibilitySince: number;
  fullscreen: boolean;
  fullscreenSince: number;
  playing: boolean;
  pausedSince: number;
  idleMs: number;
  lastInputAt: number;
};

/**
 * Tracks a student's in-lesson focus signals (visibility, fullscreen, idle,
 * playback) and streams heartbeats to the server every 5 seconds.
 * The student is never told this is happening.
 */
export function useLearningSession({
  sessionId,
  lessonId,
  enabled,
}: {
  sessionId: string | null;
  lessonId: string;
  enabled: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stateRef = useRef<FocusState>({
    visibility: typeof document !== "undefined" && document.visibilityState === "hidden" ? "hidden" : "visible",
    visibilitySince: Date.now(),
    fullscreen: typeof document !== "undefined" && document.fullscreenElement != null,
    fullscreenSince: Date.now(),
    playing: false,
    pausedSince: Date.now(),
    idleMs: 0,
    lastInputAt: Date.now(),
  });

  const sessionRef = useRef(sessionId);
  const lessonRef = useRef(lessonId);
  const enabledRef = useRef(enabled);
  const onNudgeRef = useRef<(_message: string) => void>(() => {});

  useEffect(() => {
    sessionRef.current = sessionId;
    lessonRef.current = lessonId;
    enabledRef.current = enabled;
  }, [sessionId, lessonId, enabled]);

  useEffect(() => {
    if (!enabled || !sessionId) return;
    const state = stateRef.current;

    const send = async () => {
      if (!enabledRef.current || !sessionRef.current) return;
      const video = videoRef.current;
      const now = Date.now();
      const playing = video ? !video.paused && !video.ended : state.playing;
      if (playing !== state.playing) {
        state.playing = playing;
        state.pausedSince = now;
      }
      state.idleMs = Math.max(0, now - state.lastInputAt);

      try {
        const res = await fetch("/api/lms/heartbeat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            sessionId: sessionRef.current,
            lessonId: lessonRef.current,
            visibility: state.visibility,
            visibilitySince: state.visibilitySince,
            fullscreen: state.fullscreen,
            fullscreenSince: state.fullscreenSince,
            playing,
            pausedSince: state.pausedSince,
            idleMs: state.idleMs,
            playhead: video?.currentTime ?? 0,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (data?.nudge) {
          onNudgeRef.current(String(data.nudge));
        }
      } catch {
        // heartbeat is best-effort
      }
    };

    const resetInput = () => {
      state.lastInputAt = Date.now();
    };
    const handleVisibility = () => {
      const v: FocusState["visibility"] =
        document.visibilityState === "hidden" ? "hidden" : "visible";
      if (v !== state.visibility) {
        state.visibility = v;
        state.visibilitySince = Date.now();
      }
      send();
    };
    const handleFullscreen = () => {
      const f = document.fullscreenElement != null;
      if (f !== state.fullscreen) {
        state.fullscreen = f;
        state.fullscreenSince = Date.now();
      }
      send();
    };
    const handleBlur = () => send();
    const handleVideoPlay = () => {
      state.playing = true;
      state.pausedSince = Date.now();
    };
    const handleVideoPause = () => {
      state.playing = false;
      state.pausedSince = Date.now();
    };
    const handleVideoEnded = () => {
      state.playing = false;
      state.pausedSince = Date.now();
    };
    const handlePageHide = () => {
      const video = videoRef.current;
      const now = Date.now();
      const blob = new Blob(
        [
          JSON.stringify({
            sessionId: sessionRef.current,
            lessonId: lessonRef.current,
            visibility: "hidden",
            visibilitySince: now,
            fullscreen: false,
            fullscreenSince: now,
            playing: false,
            pausedSince: now,
            idleMs: Math.max(0, now - state.lastInputAt),
            playhead: video?.currentTime ?? 0,
          }),
        ],
        { type: "application/json" }
      );
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/lms/heartbeat", blob);
      }
    };

    window.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleVisibility);
    document.addEventListener("fullscreenchange", handleFullscreen);
    window.addEventListener("pointermove", resetInput);
    window.addEventListener("keydown", resetInput);
    window.addEventListener("pagehide", handlePageHide);

    const video = videoRef.current;
    if (video) {
      video.addEventListener("play", handleVideoPlay);
      video.addEventListener("pause", handleVideoPause);
      video.addEventListener("ended", handleVideoEnded);
    }

    const interval = setInterval(send, 5000);
    send();

    return () => {
      window.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleVisibility);
      document.removeEventListener("fullscreenchange", handleFullscreen);
      window.removeEventListener("pointermove", resetInput);
      window.removeEventListener("keydown", resetInput);
      window.removeEventListener("pagehide", handlePageHide);
      if (video) {
        video.removeEventListener("play", handleVideoPlay);
        video.removeEventListener("pause", handleVideoPause);
        video.removeEventListener("ended", handleVideoEnded);
      }
      clearInterval(interval);
    };
  }, [enabled, sessionId]);

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el && enabledRef.current && sessionRef.current) {
      const state = stateRef.current;
      const onPlay = () => {
        state.playing = true;
        state.pausedSince = Date.now();
      };
      const onPause = () => {
        state.playing = false;
        state.pausedSince = Date.now();
      };
      el.addEventListener("play", onPlay);
      el.addEventListener("pause", onPause);
      el.addEventListener("ended", onPause);
    }
  }, []);

  const onNudge = useCallback((fn: (_message: string) => void) => {
    onNudgeRef.current = fn;
  }, []);

  return { setVideoRef, videoEl: videoRef, onNudge };
}
