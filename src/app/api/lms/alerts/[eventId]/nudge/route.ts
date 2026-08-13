import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireTeacherOrAdmin } from "@/lib/session";
import { setNudge } from "@/lib/live/store";

export const runtime = "nodejs";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ eventId: string }> }
) {
  const user = await requireTeacherOrAdmin();
  const { eventId } = await params;

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

  setNudge(event.studentId, "Please refocus on your lesson.");

  return NextResponse.json({ ok: true });
}
