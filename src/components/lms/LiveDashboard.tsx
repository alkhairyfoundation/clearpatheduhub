"use client";

import { useEffect, useRef, useState } from "react";
import {
  RefreshCw,
  Users,
  BellRing,
  AlertTriangle,
  Wifi,
  WifiOff,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLiveRoster } from "@/hooks/use-live-roster";
import type { AlertItem } from "@/lib/live/types";
import { formatWatchTime } from "@/lib/live/types";
import StatusBadge from "@/components/lms/StatusBadge";
import CheckInModal from "@/components/lms/CheckInModal";

type LiveDashboardProps = {
  classes: { id: string; name: string }[];
};

function beep() {
  try {
    const Ctx = window.AudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.value = 0.08;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, 400);
  } catch {
    // audio not available
  }
}

export default function LiveDashboard({ classes }: LiveDashboardProps) {
  const { toast } = useToast();
  const [selectedClassId, setSelectedClassId] = useState(classes[0]?.id ?? "");
  const { roster, connected, setRoster } = useLiveRoster(selectedClassId);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [loadingAlerts, setLoadingAlerts] = useState(true);
  const [modal, setModal] = useState<{
    studentId: string;
    alertId: string | null;
  } | null>(null);

  const prevStatuses = useRef<Record<string, string>>({});
  const alertTimer = useRef<number | null>(null);

  const [refreshKey, setRefreshKey] = useState(0);

  const [prevClassId, setPrevClassId] = useState(selectedClassId);
  if (prevClassId !== selectedClassId) {
    setPrevClassId(selectedClassId);
    setLoadingAlerts(true);
  }

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/lms/alerts?classId=${encodeURIComponent(selectedClassId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAlerts(data.alerts ?? []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoadingAlerts(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedClassId, refreshKey]);

  // Detect transitions to RED and alert the teacher.
  useEffect(() => {
    const newRed = roster.filter((r) => {
      const prev = prevStatuses.current[r.studentId];
      return r.status === "RED" && prev !== "RED";
    });
    roster.forEach((r) => {
      prevStatuses.current[r.studentId] = r.status;
    });

    if (newRed.length > 0) {
      for (const r of newRed) {
        toast({
          title: `Check on ${r.studentName}`,
          description: r.redReason ?? "Off-task — please check the student.",
          variant: "destructive",
        });
      }
      beep();
      if (alertTimer.current) window.clearTimeout(alertTimer.current);
      alertTimer.current = window.setTimeout(() => {
        setRefreshKey((k) => k + 1);
      }, 600);
    }
  }, [roster, toast]);

  const redCount = roster.filter((r) => r.status === "RED").length;
  const activeCount = roster.filter((r) => r.status !== "GRAY").length;

  const modalEntry = modal
    ? roster.find((r) => r.studentId === modal.studentId) ?? null
    : null;

  function handleResolved(alertId: string) {
    setAlerts((prev) => prev.filter((a) => a.id !== alertId));
    setRoster((prev) =>
      prev.map((r) =>
        r.lastRedAckId === alertId ? { ...r, lastRedAckId: null } : r
      )
    );
  }

  function handleNudged() {
    // Keep the alert pending until the teacher resolves it.
  }

  return (
    <div className="bg-cp-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="rounded-lg border border-input bg-white px-3 py-2 text-sm font-medium"
            >
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 ${
                connected
                  ? "bg-cp-green-lighter text-cp-green"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {connected ? (
                <Wifi className="w-3.5 h-3.5" />
              ) : (
                <WifiOff className="w-3.5 h-3.5" />
              )}
              {connected ? "Live" : "Refreshing…"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">
              <strong className="text-cp-green">{activeCount}</strong> in session
            </span>
            <span className="text-red-600 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> {redCount} need attention
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setLoadingAlerts(true);
                setRefreshKey((k) => k + 1);
              }}
              className="gap-2 border-cp-green/30 text-cp-green"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh alerts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Roster */}
          <section className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-cp-green" />
              <h2 className="font-semibold text-cp-green">Students — live</h2>
            </div>
            {roster.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-muted-foreground">
                No students in this class yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roster.map((r) => (
                  <button
                    key={r.studentId}
                    onClick={() =>
                      setModal({ studentId: r.studentId, alertId: r.lastRedAckId })
                    }
                    className="text-left bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                            r.status === "RED"
                              ? "bg-red-100 text-red-600"
                              : r.status === "YELLOW"
                                ? "bg-amber-100 text-amber-700"
                                : r.status === "GREEN"
                                  ? "bg-emerald-100 text-emerald-600"
                                  : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {r.studentName.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm truncate">
                            {r.studentName}
                          </p>
                          <p className="text-[11px] text-muted-foreground truncate">
                            {r.lessonTitle ?? "No active lesson"}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    </div>
                    <div className="flex items-center justify-between">
                      <StatusBadge status={r.status} />
                      {r.status !== "GRAY" && (
                        <span className="text-[11px] text-muted-foreground">
                          {formatWatchTime(r.totalActiveSeconds)}
                        </span>
                      )}
                    </div>
                    {r.redReason && (
                      <p className="mt-2 text-[11px] text-red-600 bg-red-50 rounded-md px-2 py-1">
                        {r.redReason}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* Alerts */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <BellRing className="w-4 h-4 text-red-500" />
              <h2 className="font-semibold text-cp-green">Alerts</h2>
            </div>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {loadingAlerts ? (
                <div className="bg-white rounded-xl border border-gray-100 p-6 text-center text-sm text-muted-foreground">
                  Loading alerts…
                </div>
              ) : alerts.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-100 p-6 text-center text-sm text-muted-foreground">
                  No pending alerts. Students are on task. 🎉
                </div>
              ) : (
                alerts.map((a) => (
                  <div
                    key={a.id}
                    className="bg-white rounded-xl border border-red-100 shadow-sm p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-sm">{a.student.name}</p>
                      <span className="text-[11px] text-muted-foreground shrink-0">
                        {new Date(a.occurredAt).toLocaleTimeString()}
                      </span>
                    </div>
                    {a.student.className && (
                      <p className="text-[11px] text-muted-foreground">
                        {a.student.className}
                      </p>
                    )}
                    <p className="text-xs text-red-600 font-medium mt-1.5">
                      {a.reason}
                    </p>
                    {a.detail && (
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {a.detail}
                      </p>
                    )}
                    <div className="mt-3">
                      <Button
                        size="sm"
                        className="w-full bg-cp-green hover:bg-cp-green-light text-white text-xs"
                        onClick={() =>
                          setModal({ studentId: a.student.id, alertId: a.id })
                        }
                      >
                        Check on {a.student.name.split(" ")[0]}
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>

      {modal && (
        <CheckInModal
          key={modal.studentId}
          studentId={modal.studentId}
          entry={modalEntry}
          initialAlertId={modal.alertId}
          onClose={() => setModal(null)}
          onResolved={handleResolved}
          onNudged={handleNudged}
        />
      )}
    </div>
  );
}
