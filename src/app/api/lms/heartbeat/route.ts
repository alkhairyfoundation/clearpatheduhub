import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import {
  ensurePresence,
  applyHeartbeat,
  setSession,
  consumeNudge,
  getSettings,
  startSweeper,
  persistAndBroadcast,
} from "@/lib/live/store";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const user = await requireRole(["STUDENT"]);
  try {
    const body = await request.json();
    const sessionId = String(body.sessionId ?? "");
    const lessonId = String(body.lessonId ?? "");

    startSweeper();

    if (!sessionId) {
      return NextResponse.json({ ok: true, nudge: null });
    }

    const session = await db.studySession.findUnique({
      where: { id: sessionId },
    });
    if (!session || session.studentId !== user.id || session.status !== "ACTIVE") {
      return NextResponse.json({ ok: true, nudge: null });
    }

    const entry = ensurePresence(user.id, user.name, user.classId);
    if (entry.sessionId !== session.id) {
      const lesson = lessonId
        ? await db.lesson.findUnique({ where: { id: lessonId } })
        : await db.lesson.findUnique({ where: { id: session.lessonId } });
      setSession(user.id, {
        sessionId: session.id,
        lessonId: lesson?.id ?? session.lessonId,
        lessonTitle: lesson?.title ?? "Lesson",
      });
    }

    const settings = await getSettings();
    const result = applyHeartbeat(
      entry,
      {
        sessionId: session.id,
        lessonId: session.lessonId,
        visibility: body.visibility === "hidden" ? "hidden" : "visible",
        visibilitySince: Number(body.visibilitySince) || Date.now(),
        fullscreen: Boolean(body.fullscreen),
        fullscreenSince: Number(body.fullscreenSince) || Date.now(),
        playing: Boolean(body.playing),
        pausedSince: Number(body.pausedSince) || Date.now(),
        idleMs: Number(body.idleMs) || 0,
        playhead: Number(body.playhead) || 0,
      },
      settings
    );

    if (result.status !== entry.status) {
      const type =
        result.type ?? (result.status === "GREEN" ? "BACK_ON_TASK" : "STATUS_CHANGE");
      const reason =
        result.reason ?? (result.status === "GREEN" ? "Returned to task" : "Status changed");
      await persistAndBroadcast(entry, type, reason, result.detail, result.status);
    }

    // Throttle session DB sync to every 30s per student.
    if (Date.now() - entry.lastDBSyncAt > 30_000) {
      await db.studySession.update({
        where: { id: session.id },
        data: {
          lastActiveAt: new Date(),
          totalActiveSeconds: entry.totalActiveSeconds,
          watchedSeconds: entry.playhead,
          maxPlayhead: Math.max(entry.playhead, session.maxPlayhead),
        },
      });
      entry.lastDBSyncAt = Date.now();
    }

    const nudge = consumeNudge(user.id);
    return NextResponse.json({ ok: true, nudge });
  } catch (error) {
    console.error("[lms] heartbeat error:", error);
    return NextResponse.json({ ok: true, nudge: null });
  }
}
