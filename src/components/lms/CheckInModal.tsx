"use client";

import { useEffect, useState } from "react";
import {
  X,
  User as UserIcon,
  MessageSquare,
  CheckCircle2,
  Timer,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { RosterEntry } from "@/lib/live/types";
import { formatWatchTime } from "@/lib/live/types";
import StatusBadge from "@/components/lms/StatusBadge";

type EventItem = {
  id: string;
  type: string;
  severity: string;
  reason: string;
  detail: string | null;
  occurredAt: string;
  ackStatus: string;
  ackNote: string | null;
  lessonTitle: string | null;
};

type CheckInModalProps = {
  studentId: string;
  entry: RosterEntry | null;
  initialAlertId: string | null;
  onClose: () => void;
  onResolved: (_alertId: string) => void;
  onNudged: (_alertId: string) => void;
};

export default function CheckInModal({
  studentId,
  entry,
  initialAlertId,
  onClose,
  onResolved,
  onNudged,
}: CheckInModalProps) {
  const { toast } = useToast();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    fetch(`/api/lms/events?studentId=${encodeURIComponent(studentId)}`)
      .then((r) => r.json())
      .then((data) => {
        setEvents(data.events ?? []);
        setStudentName(data.student?.name ?? "");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [studentId]);

  const alertId = entry?.lastRedAckId ?? initialAlertId;

  async function handleNudge() {
    if (!alertId) return;
    const res = await fetch(`/api/lms/alerts/${alertId}/nudge`, {
      method: "POST",
    });
    if (res.ok) {
      onNudged(alertId);
      toast({ title: "Nudge sent to student." });
    }
  }

  async function handleResolve() {
    if (!alertId) return;
    const res = await fetch(`/api/lms/alerts/${alertId}/resolve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    if (res.ok) {
      onResolved(alertId);
      toast({ title: "Alert resolved." });
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cp-green-lighter text-cp-green flex items-center justify-center">
              <UserIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-cp-green">{studentName || "Student"}</h3>
              <p className="text-xs text-muted-foreground">
                {entry?.classId ? "Checked in by the teacher" : "Student record"}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-5 flex-1">
          {entry && (
            <div className="rounded-xl border border-gray-100 bg-cp-cream/50 p-4 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge status={entry.status} />
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Timer className="w-3.5 h-3.5" /> {formatWatchTime(entry.totalActiveSeconds)}
                </span>
              </div>
              {entry.lessonTitle && (
                <p className="text-sm">
                  <span className="text-muted-foreground">Current lesson: </span>
                  <span className="font-medium">{entry.lessonTitle}</span>
                </p>
              )}
              {entry.redReason && (
                <p className="text-sm text-red-600 font-medium">
                  {entry.redReason}
                  {entry.redDetail && (
                    <span className="text-red-600/80 font-normal block mt-0.5">
                      {entry.redDetail}
                    </span>
                  )}
                </p>
              )}
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-cp-green mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Recent activity
            </h4>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : events.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity recorded yet.</p>
            ) : (
              <ul className="space-y-2">
                {events.slice(0, 12).map((e) => (
                  <li
                    key={e.id}
                    className="text-xs border border-gray-100 rounded-lg px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-semibold ${
                          e.severity === "RED"
                            ? "text-red-600"
                            : e.severity === "YELLOW"
                              ? "text-amber-600"
                              : "text-cp-green"
                        }`}
                      >
                        {e.reason}
                      </span>
                      <span className="text-muted-foreground shrink-0">
                        {new Date(e.occurredAt).toLocaleTimeString()}
                      </span>
                    </div>
                    {e.detail && (
                      <p className="text-muted-foreground mt-0.5">{e.detail}</p>
                    )}
                    {e.ackNote && (
                      <p className="text-cp-green mt-0.5">Teacher note: {e.ackNote}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 space-y-3">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="Note what you confirmed the student was doing…"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm resize-none"
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 border-cp-gold/40 text-cp-gold hover:bg-cp-gold hover:text-white"
              onClick={handleNudge}
            >
              <MessageSquare className="w-4 h-4 mr-2" /> Nudge
            </Button>
            <Button
              className="flex-1 bg-cp-green hover:bg-cp-green-light text-white font-semibold"
              onClick={handleResolve}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> Resolve alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
