"use client";

import { useEffect, useRef, useState } from "react";
import type { RosterEntry } from "@/lib/live/types";

/**
 * Connects the dashboard to a class's live presence via SSE, with a
 * polling fallback so updates keep flowing even if the stream drops.
 */
export function useLiveRoster(classId: string) {
  const [roster, setRoster] = useState<RosterEntry[]>([]);
  const [connected, setConnected] = useState(false);
  const rosterRef = useRef<RosterEntry[]>([]);

  const [prevClassId, setPrevClassId] = useState(classId);
  if (prevClassId !== classId) {
    setPrevClassId(classId);
    setRoster([]);
    setConnected(false);
  }

  useEffect(() => {
    rosterRef.current = roster;
  }, [roster]);

  useEffect(() => {
    if (!classId) return;
    let active = true;

    let source: EventSource | null = null;
    if (typeof EventSource !== "undefined") {
      source = new EventSource(`/api/lms/live/stream?classId=${encodeURIComponent(classId)}`);

      source.addEventListener("snapshot", (e) => {
        if (!active) return;
        try {
          const data = JSON.parse((e as MessageEvent).data) as RosterEntry[];
          setRoster(data);
          setConnected(true);
        } catch {
          // ignore malformed
        }
      });

      source.addEventListener("status", (e) => {
        if (!active) return;
        try {
          const update = JSON.parse((e as MessageEvent).data) as RosterEntry;
          setRoster((prev) => {
            const idx = prev.findIndex((r) => r.studentId === update.studentId);
            if (idx === -1) return [update, ...prev];
            const next = prev.slice();
            next[idx] = { ...next[idx], ...update };
            return next;
          });
        } catch {
          // ignore malformed
        }
      });

      source.onerror = () => {
        if (active) setConnected(false);
      };
      source.onopen = () => {
        if (active) setConnected(true);
      };
    }

    // Polling fallback — refreshes the full roster every 10s.
    const poll = setInterval(async () => {
      try {
        const res = await fetch(`/api/lms/live/roster?classId=${encodeURIComponent(classId)}`);
        if (!res.ok) return;
        const data = await res.json();
        if (!active) return;
        setRoster(data.roster);
        setConnected(true);
      } catch {
        if (active) setConnected(false);
      }
    }, 10_000);

    return () => {
      active = false;
      if (source) source.close();
      clearInterval(poll);
    };
  }, [classId]);

  return { roster, connected, setRoster };
}
