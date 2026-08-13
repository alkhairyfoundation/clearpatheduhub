import type { FocusSettings } from "@prisma/client";

export type PresenceStatus = "GREEN" | "YELLOW" | "RED" | "GRAY";

export type HeartbeatPayload = {
  sessionId: string | null;
  lessonId: string | null;
  visibility: "visible" | "hidden";
  visibilitySince: number;
  fullscreen: boolean;
  fullscreenSince: number;
  playing: boolean;
  pausedSince: number;
  idleMs: number;
  playhead: number;
};

export type PresenceEntry = {
  studentId: string;
  studentName: string;
  classId: string | null;
  sessionId: string | null;
  lessonId: string | null;
  lessonTitle: string | null;
  status: PresenceStatus;
  statusChangedAt: number;
  lastHeartbeatAt: number;
  redType: string | null;
  redReason: string | null;
  redDetail: string | null;
  lastRedAckId: string | null;
  pendingNudge: string | null;
  lastNudgeAt: number;
  startedAt: number;
  totalActiveSeconds: number;
  checkpointsPassed: number;
  visibility: string;
  fullscreen: boolean;
  idleMs: number;
  playhead: number;
  switchCount: number;
  stuckCount: number;
  lastPlayhead: number;
  lastSampleAt: number;
  lastVisibility: string;
  lastDBSyncAt: number;
};

export type RuleResult = {
  status: PresenceStatus;
  type: string | null;
  reason: string | null;
  detail: string | null;
};

type StoreShape = Map<string, PresenceEntry>;

function getStore(): StoreShape {
  const g = globalThis as unknown as { __clearpathPresence?: StoreShape };
  if (!g.__clearpathPresence) g.__clearpathPresence = new Map();
  return g.__clearpathPresence;
}

export function ensurePresence(
  studentId: string,
  studentName: string,
  classId: string | null
): PresenceEntry {
  const store = getStore();
  let entry = store.get(studentId);
  if (!entry) {
    entry = {
      studentId,
      studentName,
      classId,
      sessionId: null,
      lessonId: null,
      lessonTitle: null,
      status: "GRAY",
      statusChangedAt: Date.now(),
      lastHeartbeatAt: 0,
      redType: null,
      redReason: null,
      redDetail: null,
      lastRedAckId: null,
      pendingNudge: null,
      lastNudgeAt: 0,
      startedAt: 0,
      totalActiveSeconds: 0,
      checkpointsPassed: 0,
      visibility: "visible",
      fullscreen: false,
      idleMs: 0,
      playhead: 0,
      switchCount: 0,
      stuckCount: 0,
      lastPlayhead: 0,
      lastSampleAt: 0,
      lastVisibility: "visible",
      lastDBSyncAt: 0,
    };
    store.set(studentId, entry);
  }
  return entry;
}

export function getPresence(studentId: string): PresenceEntry | undefined {
  return getStore().get(studentId);
}

export function getAllPresence(): PresenceEntry[] {
  return Array.from(getStore().values());
}

export function getRoster(classId: string): PresenceEntry[] {
  return getAllPresence().filter(
    (e) => e.classId === classId || e.classId === null
  );
}

export function setSession(
  studentId: string,
  session: { sessionId: string; lessonId: string; lessonTitle: string }
) {
  const entry = getStore().get(studentId);
  if (!entry) return;
  entry.sessionId = session.sessionId;
  entry.lessonId = session.lessonId;
  entry.lessonTitle = session.lessonTitle;
  entry.startedAt = Date.now();
  entry.status = "GREEN";
  entry.statusChangedAt = Date.now();
  entry.redType = null;
  entry.redReason = null;
  entry.redDetail = null;
  entry.switchCount = 0;
  entry.stuckCount = 0;
  entry.lastPlayhead = 0;
}

export function endSession(studentId: string, reason = "Left the lesson") {
  const entry = getStore().get(studentId);
  if (!entry) return;
  entry.sessionId = null;
  entry.lessonId = null;
  entry.lessonTitle = null;
  entry.status = "GRAY";
  entry.statusChangedAt = Date.now();
  entry.redType = "LEFT_LESSON";
  entry.redReason = reason;
  entry.redDetail = null;
}

export function setNudge(studentId: string, message: string) {
  const entry = getStore().get(studentId);
  if (!entry) return;
  entry.pendingNudge = message;
}

export function consumeNudge(studentId: string): string | null {
  const entry = getStore().get(studentId);
  if (!entry) return null;
  const message = entry.pendingNudge;
  entry.pendingNudge = null;
  return message;
}

/**
 * Applies a heartbeat to the entry and returns the computed canonical status.
 * Rules are evaluated server-side; client hints are advisory only.
 */
export function applyHeartbeat(
  entry: PresenceEntry,
  payload: HeartbeatPayload,
  settings: FocusSettings
): RuleResult {
  const now = Date.now();

  entry.lastHeartbeatAt = now;
  entry.visibility = payload.visibility;
  entry.fullscreen = payload.fullscreen;
  entry.idleMs = payload.idleMs;
  entry.playhead = payload.playhead;
  entry.totalActiveSeconds = Math.round((now - entry.startedAt) / 1000);

  // Tab-switch counting: every visible→hidden or hidden→visible toggle counts.
  if (payload.visibility !== entry.lastVisibility) {
    if (entry.lastVisibility === "visible" && payload.visibility === "hidden") {
      entry.switchCount += 1;
    }
    if (entry.lastVisibility === "hidden" && payload.visibility === "visible") {
      entry.switchCount += 1;
    }
  }
  entry.lastVisibility = payload.visibility;

  const visibleHiddenFor =
    payload.visibility === "hidden"
      ? Math.max(0, now - payload.visibilitySince)
      : 0;
  const pausedFor =
    payload.playing === false ? Math.max(0, now - payload.pausedSince) : 0;
  const noFullscreenFor =
    payload.fullscreen === false
      ? Math.max(0, now - payload.fullscreenSince)
      : 0;

  // Playhead stuck detection
  if (payload.playing && entry.lastSampleAt > 0) {
    if (Math.abs(payload.playhead - entry.lastPlayhead) < 0.5) {
      entry.stuckCount += 1;
    } else {
      entry.stuckCount = 0;
    }
  } else {
    entry.stuckCount = 0;
  }
  entry.lastPlayhead = payload.playhead;
  entry.lastSampleAt = now;

  // ── Priority: RED > YELLOW > GREEN ──
  if (entry.sessionId === null) {
    return gray(entry);
  }

  if (visibleHiddenFor >= settings.hiddenRedSeconds * 1000) {
    return red(entry, "TAB_HIDDEN", "Switched tab / minimized window", `Window hidden for ${Math.round(visibleHiddenFor / 1000)}s.`);
  }

  if (entry.switchCount >= settings.repeatedSwitchCount) {
    return red(entry, "REPEATED_SWITCH", "Frequently switching tabs", `${entry.switchCount} tab switches detected — possible off-task behaviour.`);
  }

  if (entry.stuckCount >= 2) {
    return red(entry, "PLAYHEAD_STUCK", "Video is not advancing", "Video reports playing but the playhead is not moving — the student may have walked away.");
  }

  if (noFullscreenFor >= settings.fullscreenYellowSeconds * 1000) {
    if (noFullscreenFor >= settings.fullscreenYellowSeconds * 2000) {
      return red(entry, "FULLSCREEN_EXIT", "Left fullscreen", `Fullscreen exited for ${Math.round(noFullscreenFor / 1000)}s and not re-engaged.`);
    }
    return yellow(entry, "FULLSCREEN_EXIT", "Left fullscreen", "Fullscreen was exited — re-engage to keep learning.");
  }

  if (pausedFor >= settings.pausedYellowSeconds * 1000) {
    return yellow(entry, "PAUSED_LONG", "Video paused", "Video paused for a while — the student may be reviewing notes.");
  }

  if (payload.idleMs >= settings.idleYellowSeconds * 3000) {
    return red(entry, "IDLE", "No interaction for a long time", `No keyboard or mouse activity for ${Math.round(payload.idleMs / 1000)}s — the student may have left.`);
  }

  if (payload.idleMs >= settings.idleYellowSeconds * 1000) {
    return yellow(entry, "IDLE", "No interaction", `No keyboard or mouse activity for ${Math.round(payload.idleMs / 1000)}s.`);
  }

  return { status: "GREEN", type: null, reason: null, detail: null };
}

function red(
  entry: PresenceEntry,
  type: string,
  reason: string,
  detail: string
): RuleResult {
  entry.redType = type;
  entry.redReason = reason;
  entry.redDetail = detail;
  return { status: "RED", type, reason, detail };
}

function yellow(entry: PresenceEntry, type: string, reason: string, detail: string): RuleResult {
  return { status: "YELLOW", type, reason, detail };
}

function gray(_entry: PresenceEntry): RuleResult {
  return { status: "GRAY", type: null, reason: null, detail: null };
}

let sweepStarted = false;

/**
 * Marks stale sessions RED when heartbeats stop arriving.
 * Runs on an interval in the server process.
 */
export function startSweeper() {
  if (sweepStarted) return;
  sweepStarted = true;
  const g = globalThis as unknown as { __clearpathSweepStarted?: boolean };
  if (g.__clearpathSweepStarted) {
    sweepStarted = true;
    return;
  }
  g.__clearpathSweepStarted = true;
  setInterval(async () => {
    try {
      const settings = await getSettings();
      const now = Date.now();
      const timeoutMs = settings.heartbeatTimeoutSeconds * 1000;
      for (const entry of getAllPresence()) {
        if (!entry.sessionId) continue;
        if (now - entry.lastHeartbeatAt >= timeoutMs && entry.redType !== "HEARTBEAT_TIMEOUT") {
          entry.redType = "HEARTBEAT_TIMEOUT";
          entry.redReason = "Stopped responding";
          entry.redDetail = "No heartbeat received — the student may have left the device or closed the tab.";
          entry.status = "RED";
          entry.statusChangedAt = now;
          await persistAndBroadcast(entry, "HEARTBEAT_TIMEOUT", entry.redReason, entry.redDetail, "RED");
        }
      }
    } catch (e) {
      console.error("[lms] sweeper error:", e);
    }
  }, 10_000);
}

export async function getSettings(): Promise<FocusSettings> {
  const { db } = await import("@/lib/db");
  const existing = await db.focusSettings.findUnique({ where: { id: 1 } });
  if (existing) return existing;
  return db.focusSettings.create({ data: { id: 1 } });
}

// ── Persistence + broadcast ──

export function toRosterPayload(entry: PresenceEntry) {
  return {
    studentId: entry.studentId,
    studentName: entry.studentName,
    classId: entry.classId,
    sessionId: entry.sessionId,
    lessonId: entry.lessonId,
    lessonTitle: entry.lessonTitle,
    status: entry.status,
    statusChangedAt: entry.statusChangedAt,
    lastHeartbeatAt: entry.lastHeartbeatAt,
    redReason: entry.redReason,
    redDetail: entry.redDetail,
    totalActiveSeconds: entry.totalActiveSeconds,
    playhead: entry.playhead,
    checkpointsPassed: entry.checkpointsPassed,
    lastRedAckId: entry.lastRedAckId,
  };
}

/**
 * Persists a status transition as a FocusEvent (when a session exists) and
 * broadcasts the change to live subscribers. Called on status changes and
 * by the stale sweeper.
 */
export async function persistAndBroadcast(
  entry: PresenceEntry,
  type: string,
  reason: string,
  detail: string | null,
  status: PresenceStatus
) {
  entry.status = status;
  entry.statusChangedAt = Date.now();

  if (entry.sessionId) {
    try {
      const { db } = await import("@/lib/db");
      const severity =
        status === "RED" ? "RED" : status === "YELLOW" ? "YELLOW" : "INFO";
      const event = await db.focusEvent.create({
        data: {
          sessionId: entry.sessionId,
          studentId: entry.studentId,
          type,
          severity,
          reason,
          detail,
          ackStatus: severity === "RED" ? "PENDING" : "IGNORED",
        },
      });
      if (severity === "RED") {
        entry.lastRedAckId = event.id;
      }
    } catch (e) {
      console.error("[lms] persist focus event error:", e);
    }
  }

  const { broadcast } = await import("@/lib/live/hub");
  if (entry.classId) {
    broadcast(entry.classId, "status", toRosterPayload(entry));
  }
}
