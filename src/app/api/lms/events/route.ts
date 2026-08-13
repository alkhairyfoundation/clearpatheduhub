import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireTeacherOrAdmin } from "@/lib/session";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const user = await requireTeacherOrAdmin();
  const studentId = request.nextUrl.searchParams.get("studentId") || "";

  if (!studentId) {
    return NextResponse.json({ error: "studentId is required." }, { status: 400 });
  }

  const student = await db.user.findUnique({
    where: { id: studentId },
    include: { class: true },
  });
  if (!student) return NextResponse.json({ error: "Student not found." }, { status: 404 });

  if (user.role === "TEACHER" && student.classId) {
    const cls = await db.class.findUnique({ where: { id: student.classId } });
    if (!cls || cls.teacherId !== user.id) {
      return NextResponse.json({ error: "Access denied." }, { status: 403 });
    }
  }

  const events = await db.focusEvent.findMany({
    where: { studentId },
    include: { session: { include: { lesson: true } } },
    orderBy: { occurredAt: "desc" },
    take: 50,
  });

  const sessions = await db.studySession.findMany({
    where: { studentId },
    include: { lesson: true },
    orderBy: { startedAt: "desc" },
    take: 10,
  });

  return NextResponse.json({
    student: { id: student.id, name: student.name, className: student.class?.name ?? null },
    events: events.map((e) => ({
      id: e.id,
      type: e.type,
      severity: e.severity,
      reason: e.reason,
      detail: e.detail,
      occurredAt: e.occurredAt,
      ackStatus: e.ackStatus,
      ackNote: e.ackNote,
      lessonTitle: e.session.lesson?.title ?? null,
    })),
    sessions: sessions.map((s) => ({
      id: s.id,
      lessonTitle: s.lesson.title,
      startedAt: s.startedAt,
      endedAt: s.endedAt,
      status: s.status,
      totalActiveSeconds: s.totalActiveSeconds,
      maxPlayhead: s.maxPlayhead,
      reflection: s.reflection,
    })),
  });
}
