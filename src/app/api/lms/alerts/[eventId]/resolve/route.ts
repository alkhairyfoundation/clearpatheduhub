import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireTeacherOrAdmin } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ eventId: string }> }
) {
  const user = await requireTeacherOrAdmin();
  const { eventId } = await params;

  try {
    const body = await request.json().catch(() => ({}));
    const note = String(body.note ?? "").trim();

    const event = await db.focusEvent.findUnique({
      where: { id: eventId },
      include: { student: true },
    });
    if (!event) {
      return NextResponse.json({ error: "Alert not found." }, { status: 404 });
    }

    if (user.role === "TEACHER" && event.student.classId) {
      const cls = await db.class.findUnique({ where: { id: event.student.classId } });
      if (!cls || cls.teacherId !== user.id) {
        return NextResponse.json(
          { error: "You do not have access to this student." },
          { status: 403 }
        );
      }
    }

    await db.focusEvent.update({
      where: { id: event.id },
      data: {
        ackStatus: "RESOLVED",
        ackNote: note || null,
        acknowledgedById: user.id,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lms] resolve alert error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
