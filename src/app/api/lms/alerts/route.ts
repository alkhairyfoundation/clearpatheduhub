import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const user = await requireRole(["TEACHER", "ADMIN"]);
  const classId = request.nextUrl.searchParams.get("classId") || "";

  try {
    const events = await db.focusEvent.findMany({
      where: {
        severity: "RED",
        ackStatus: "PENDING",
        student: classId ? { classId } : undefined,
        ...(user.role === "TEACHER"
          ? { student: { class: { teacherId: user.id } } }
          : {}),
      },
      include: {
        student: { include: { class: true } },
        session: { include: { lesson: true } },
      },
      orderBy: { occurredAt: "desc" },
      take: 200,
    });

    const alerts = events.map((e) => ({
      id: e.id,
      type: e.type,
      reason: e.reason,
      detail: e.detail,
      occurredAt: e.occurredAt,
      severity: e.severity,
      student: {
        id: e.studentId,
        name: e.student.name,
        className: e.student.class?.name ?? null,
      },
      lessonTitle: e.session.lesson?.title ?? null,
      sessionId: e.sessionId,
    }));

    return NextResponse.json({ alerts });
  } catch (error) {
    console.error("[lms] alerts error:", error);
    return NextResponse.json({ error: "Failed to load alerts." }, { status: 500 });
  }
}
