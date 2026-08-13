import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { ensurePresence, setSession, getPresence, persistAndBroadcast } from "@/lib/live/store";
import { isLessonLocked } from "@/lib/lms/progress";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const user = await requireRole(["STUDENT"]);
  try {
    const body = await request.json();
    const lessonId = String(body.lessonId ?? "");
    if (!lessonId) {
      return NextResponse.json({ error: "Lesson is required." }, { status: 400 });
    }

    const lesson = await db.lesson.findUnique({
      where: { id: lessonId },
      include: {
        course: { include: { lessons: { include: { sessions: true } } } },
      },
    });
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found." }, { status: 404 });
    }

    const enrollment = await db.enrollment.findFirst({
      where: { studentId: user.id, courseId: lesson.courseId },
    });
    if (!enrollment) {
      return NextResponse.json(
        { error: "You are not enrolled in this course." },
        { status: 403 }
      );
    }

    const ordered = [...lesson.course.lessons].sort((a, b) => a.order - b.order);
    const index = ordered.findIndex((l) => l.id === lesson.id);
    const previous = index > 0 ? ordered[index - 1] : null;
    if (isLessonLocked(previous)) {
      return NextResponse.json(
        { error: "Complete the previous lesson before continuing." },
        { status: 403 }
      );
    }

    const existing = await db.studySession.findFirst({
      where: { studentId: user.id, lessonId: lesson.id, status: "ACTIVE" },
    });
    const session =
      existing ??
      (await db.studySession.create({
        data: {
          studentId: user.id,
          lessonId: lesson.id,
          status: "ACTIVE",
        },
      }));

    const entry = ensurePresence(user.id, user.name, user.classId);
    setSession(user.id, {
      sessionId: session.id,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    });
    await persistAndBroadcast(
      entry,
      "SESSION_START",
      "Started lesson",
      lesson.title,
      "GREEN"
    );

    return NextResponse.json({ ok: true, sessionId: session.id });
  } catch (error) {
    console.error("[lms] session start error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
