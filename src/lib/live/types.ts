export type RosterStatus = "GREEN" | "YELLOW" | "RED" | "GRAY";

export type RosterEntry = {
  studentId: string;
  studentName: string;
  classId: string | null;
  sessionId: string | null;
  lessonId: string | null;
  lessonTitle: string | null;
  status: RosterStatus;
  statusChangedAt: number;
  lastHeartbeatAt: number;
  redReason: string | null;
  redDetail: string | null;
  totalActiveSeconds: number;
  playhead: number;
  checkpointsPassed: number;
  lastRedAckId: string | null;
};

export type AlertItem = {
  id: string;
  type: string;
  reason: string;
  detail: string | null;
  occurredAt: string;
  severity: string;
  student: { id: string; name: string; className: string | null };
  lessonTitle: string | null;
  sessionId: string;
};

export function formatWatchTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  if (m < 1) return `${Math.max(1, seconds)}s`;
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}
