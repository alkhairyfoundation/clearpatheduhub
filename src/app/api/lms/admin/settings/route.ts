import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { getSettings } from "@/lib/live/store";

export const runtime = "nodejs";

export async function GET() {
  const user = await requireRole(["ADMIN"]);
  const settings = await getSettings();
  return NextResponse.json({
    settings: {
      heartbeatTimeoutSeconds: settings.heartbeatTimeoutSeconds,
      hiddenRedSeconds: settings.hiddenRedSeconds,
      pausedYellowSeconds: settings.pausedYellowSeconds,
      idleYellowSeconds: settings.idleYellowSeconds,
      fullscreenYellowSeconds: settings.fullscreenYellowSeconds,
      repeatedSwitchCount: settings.repeatedSwitchCount,
      nudgeCooldownSeconds: settings.nudgeCooldownSeconds,
    },
  });
}

export async function PATCH(request: NextRequest) {
  const user = await requireRole(["ADMIN"]);
  try {
    const body = await request.json();
    const numeric = (v: unknown, fallback: number, min = 1, max = 600) => {
      const n = Number(v);
      if (!Number.isFinite(n)) return fallback;
      return Math.max(min, Math.min(max, Math.round(n)));
    };

    const existing = await getSettings();
    const data = {
      heartbeatTimeoutSeconds: numeric(body.heartbeatTimeoutSeconds, existing.heartbeatTimeoutSeconds),
      hiddenRedSeconds: numeric(body.hiddenRedSeconds, existing.hiddenRedSeconds),
      pausedYellowSeconds: numeric(body.pausedYellowSeconds, existing.pausedYellowSeconds),
      idleYellowSeconds: numeric(body.idleYellowSeconds, existing.idleYellowSeconds),
      fullscreenYellowSeconds: numeric(body.fullscreenYellowSeconds, existing.fullscreenYellowSeconds),
      repeatedSwitchCount: numeric(body.repeatedSwitchCount, existing.repeatedSwitchCount, 2, 20),
      nudgeCooldownSeconds: numeric(body.nudgeCooldownSeconds, existing.nudgeCooldownSeconds, 10, 600),
      updatedById: user.id,
    };

    await db.focusSettings.update({ where: { id: 1 }, data });
    return NextResponse.json({ ok: true, settings: data });
  } catch (error) {
    console.error("[lms] settings update error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
