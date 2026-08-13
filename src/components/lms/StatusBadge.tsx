import type { RosterStatus } from "@/lib/live/types";

const config: Record<
  RosterStatus,
  { dot: string; text: string; label: string }
> = {
  GREEN: { dot: "bg-emerald-500", text: "text-emerald-600", label: "Actively watching" },
  YELLOW: { dot: "bg-amber-400", text: "text-amber-600", label: "Watching but passive" },
  RED: { dot: "bg-red-500 animate-pulse", text: "text-red-600", label: "Off-task — check student" },
  GRAY: { dot: "bg-gray-400", text: "text-gray-500", label: "Not started" },
};

export default function StatusBadge({ status }: { status: RosterStatus }) {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${c.text}`}
    >
      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
