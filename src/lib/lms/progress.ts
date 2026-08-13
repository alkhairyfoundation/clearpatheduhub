import type { Lesson, StudySession } from "@prisma/client";

export function isLessonComplete(
  session: Pick<StudySession, "status" | "maxPlayhead"> | null,
  lesson: Pick<Lesson, "durationSeconds">
): boolean {
  if (!session || session.status !== "ENDED") return false;
  const duration = lesson.durationSeconds;
  if (duration) {
    return session.maxPlayhead >= duration - 5;
  }
  return true;
}

/** Returns true when a lesson is currently locked behind an incomplete gated predecessor. */
export function isLessonLocked(
  previous: (Pick<Lesson, "id" | "gated" | "durationSeconds"> & {
    sessions: Pick<StudySession, "status" | "maxPlayhead">[];
  }) | null
): boolean {
  if (!previous || !previous.gated) return false;
  const lastSession = previous.sessions[previous.sessions.length - 1] ?? null;
  return !isLessonComplete(lastSession, previous);
}
