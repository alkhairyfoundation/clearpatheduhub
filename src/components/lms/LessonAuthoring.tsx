"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, BookOpen, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type CheckpointDraft = {
  timeSeconds: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  requiresPass: boolean;
};

type CourseWithLessons = {
  id: string;
  title: string;
  description: string | null;
  lessons: {
    id: string;
    order: number;
    title: string;
    gated: boolean;
    _count: { checkpoints: number };
  }[];
};

function parseTime(value: string): number {
  const v = value.trim();
  if (!v) return 0;
  if (v.includes(":")) {
    const [m, s] = v.split(":").map((n) => Number(n) || 0);
    return m * 60 + s;
  }
  return Number(v) || 0;
}

export default function LessonAuthoring({
  courses,
  initialCourseId,
}: {
  courses: CourseWithLessons[];
  initialCourseId: string | null;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const [mode, setMode] = useState<"list" | "new">("list");
  const [courseMode, setCourseMode] = useState<"existing" | "new">("existing");
  const [courseId, setCourseId] = useState(initialCourseId ?? courses[0]?.id ?? "");
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [notesHtml, setNotesHtml] = useState("");
  const [gated, setGated] = useState(true);
  const [checkpoints, setCheckpoints] = useState<CheckpointDraft[]>([]);
  const [saving, setSaving] = useState(false);

  function addCheckpoint() {
    setCheckpoints((prev) => [
      ...prev,
      { timeSeconds: 0, prompt: "", options: ["", "", "", ""], correctIndex: 0, requiresPass: true },
    ]);
  }

  function updateCheckpoint(index: number, patch: Partial<CheckpointDraft>) {
    setCheckpoints((prev) =>
      prev.map((c, i) => (i === index ? { ...c, ...patch } : c))
    );
  }

  function updateOption(index: number, optIndex: number, value: string) {
    setCheckpoints((prev) =>
      prev.map((c, i) =>
        i === index
          ? { ...c, options: c.options.map((o, oi) => (oi === optIndex ? value : o)) }
          : c
      )
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !videoUrl.trim()) {
      toast({ title: "Lesson title and video URL are required.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/lms/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: courseMode === "existing" ? courseId : undefined,
          courseTitle: courseMode === "new" ? newCourseTitle : undefined,
          title,
          videoUrl,
          durationSeconds: duration ? Number(duration) : undefined,
          notesHtml,
          gated,
          checkpoints: checkpoints.filter(
            (c) => c.prompt.trim() && c.options.filter((o) => o.trim()).length >= 2
          ),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({ title: data.error || "Could not create the lesson.", variant: "destructive" });
        return;
      }
      toast({
        title: "Lesson created.",
        description: `${data.checkpointCount} checkpoint${data.checkpointCount === 1 ? "" : "s"} added.`,
      });
      setMode("list");
      setTitle("");
      setVideoUrl("");
      setDuration("");
      setNotesHtml("");
      setCheckpoints([]);
      setGated(true);
      router.refresh();
    } catch {
      toast({ title: "Could not create the lesson.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  if (mode === "new") {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-cp-green text-lg">New lesson</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => setMode("list")}>
            <X className="w-4 h-4 mr-1" /> Cancel
          </Button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                checked={courseMode === "existing"}
                onChange={() => setCourseMode("existing")}
              />
              Add to existing course
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                checked={courseMode === "new"}
                onChange={() => setCourseMode("new")}
              />
              Create new course
            </label>
          </div>
          {courseMode === "existing" ? (
            <div>
              <label className="block text-sm font-medium mb-1">Course</label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-1">New course title</label>
              <input
                value={newCourseTitle}
                onChange={(e) => setNewCourseTitle(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g. Mathematics Fundamentals"
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <h3 className="font-semibold text-cp-green">Lesson details</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Lesson title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g. Introduction to Fractions"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Video URL *</label>
            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              placeholder="https://…/lesson.mp4"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration (seconds)</label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              inputMode="numeric"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g. 600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lesson notes (markdown)</label>
            <textarea
              value={notesHtml}
              onChange={(e) => setNotesHtml(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none"
              placeholder={"# Key points\n- Point one\n- Point two"}
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={gated}
              onChange={(e) => setGated(e.target.checked)}
            />
            Students must complete this lesson before the next one unlocks
          </label>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-cp-green">
              Checkpoints{" "}
              <span className="text-xs font-normal text-muted-foreground">
                (optional — if none, students watch freely)
              </span>
            </h3>
            <Button type="button" variant="outline" size="sm" onClick={addCheckpoint}>
              <Plus className="w-4 h-4 mr-1" /> Add checkpoint
            </Button>
          </div>

          {checkpoints.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No checkpoints — students will watch the video freely from start to finish.
            </p>
          ) : (
            checkpoints.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-cp-cream/40 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Checkpoint {i + 1}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setCheckpoints((prev) => prev.filter((_, pi) => pi !== i))
                    }
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Time in the video (mm:ss or seconds)
                  </label>
                  <input
                    value={c.timeSeconds ? String(c.timeSeconds) : ""}
                    onChange={(e) =>
                      updateCheckpoint(i, { timeSeconds: parseTime(e.target.value) })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    placeholder="e.g. 1:30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Question</label>
                  <input
                    value={c.prompt}
                    onChange={(e) => updateCheckpoint(i, { prompt: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    placeholder="e.g. What happens next?"
                  />
                </div>
                {c.options.map((opt, oi) => (
                  <div key={oi} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`cp-${i}-correct`}
                      checked={c.correctIndex === oi}
                      onChange={() => updateCheckpoint(i, { correctIndex: oi })}
                    />
                    <input
                      value={opt}
                      onChange={(e) => updateOption(i, oi, e.target.value)}
                      className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm"
                      placeholder={`Option ${oi + 1}${oi === 0 ? " (mark the correct one)" : ""}`}
                    />
                  </div>
                ))}
                <label className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={c.requiresPass}
                    onChange={(e) => updateCheckpoint(i, { requiresPass: e.target.checked })}
                  />
                  Must answer correctly to continue
                </label>
              </div>
            ))
          )}
        </div>

        <Button
          type="submit"
          disabled={saving}
          className="bg-cp-green hover:bg-cp-green-light text-white font-semibold"
        >
          {saving ? "Creating…" : "Create lesson"}
        </Button>
      </form>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-cp-green text-lg">Lessons</h2>
        <Button
          onClick={() => setMode("new")}
          className="bg-cp-green hover:bg-cp-green-light text-white font-semibold"
        >
          <Plus className="w-4 h-4 mr-1" /> New lesson
        </Button>
      </div>

      {courses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-muted-foreground">
          No courses yet. Create your first lesson to get started.
        </div>
      ) : (
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-cp-green">{course.title}</h3>
                {course.description && (
                  <p className="text-xs text-muted-foreground mt-0.5">{course.description}</p>
                )}
              </div>
              <ul className="divide-y divide-gray-50">
                {course.lessons.length === 0 ? (
                  <li className="px-5 py-4 text-sm text-muted-foreground">
                    No lessons yet.
                  </li>
                ) : (
                  course.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className="px-5 py-3 flex items-center gap-3 text-sm"
                    >
                      <BookOpen className="w-4 h-4 text-cp-gold shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{lesson.title}</p>
                        <p className="text-[11px] text-muted-foreground flex items-center gap-3 mt-0.5">
                          <span>Lesson {lesson.order}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lesson._count.checkpoints} checkpoint
                            {lesson._count.checkpoints === 1 ? "" : "s"}
                          </span>
                          {lesson.gated && (
                            <span className="text-cp-green">gates next lesson</span>
                          )}
                        </p>
                      </div>
                      {lesson._count.checkpoints === 0 && (
                        <span className="text-[11px] text-muted-foreground bg-muted rounded-full px-2 py-0.5 shrink-0">
                          free watch
                        </span>
                      )}
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
