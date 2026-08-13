import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { endSession, getPresence, persistAndBroadcast } from "@/lib/live/store";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const user = await requireRole(["STUDENT"]);
  try {
    const body = await request.json();
    const sessionId = String(body.sessionId ?? "");
    const reflection = String(body.reflection ?? "").trim();

    if (!sessionId) {
      return NextResponse.json({ error: "Session is required." }, { status: 400 });
    }

    const session = await db.studySession.findUnique({
      where: { id: sessionId },
    });
    if (!session || session.studentId !== user.id) {
      return NextResponse.json(
        { error: "Session does not belong to this student." },
        { status: 403 }
      );
    }

    const entry = getPresence(user.id);

    const updated = await db.studySession.update({
      where: { id: session.id },
      data: {
        status: "ENDED",
        endedAt: new Date(),
        reflection: reflection || session.reflection,
        lastActiveAt: new Date(),
        totalActiveSeconds: entry?.totalActiveSeconds ?? session.totalActiveSeconds,
        watchedSeconds: entry?.playhead ?? session.watchedSeconds,
        maxPlayhead: Math.max(entry?.playhead ?? 0, session.maxPlayhead),
      },
    });

    const lesson = await db.lesson.findUnique({
      where: { id: session.lessonId },
      select: { durationSeconds: true },
    });

    await db.focusEvent.create({
      data: {
        sessionId: session.id,
        studentId: user.id,
        type: "SESSION_END",
        severity: "INFO",
        reason: "Ended lesson",
        detail: "The student ended the lesson session.",
        ackStatus: "IGNORED",
      },
    });

    endSession(user.id, "Left the lesson");
    if (entry?.classId) {
      const { broadcast } = await import("@/lib/live/hub");
      broadcast(entry.classId, "status", {
        studentId: user.id,
        status: "GRAY",
        statusChangedAt: Date.now(),
      });
    }

    const duration = lesson?.durationSeconds ?? 0;
    const lessonComplete =
      duration > 0 ? updated.maxPlayhead >= duration - 5 : true;

    return NextResponse.json({ ok: true, lessonComplete });
  } catch (error) {
    console.error("[lms] session end error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
