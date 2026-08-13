import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import LmsHeader from "@/components/lms/LmsHeader";
import { Timer, CheckCircle2, AlertTriangle, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

function formatHours(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  if (h === 0) return `${m} min`;
  return `${h}h ${m}m`;
}

export default async function ParentReportsPage() {
  const user = await requireRole(["PARENT"]);
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const children = await db.user.findMany({
    where: { parentId: user.id },
    orderBy: { name: "asc" },
  });

  const reports = await Promise.all(
    children.map(async (child) => {
      const [redEvents, sessions, completed, checkpointPasses] = await Promise.all([
        db.focusEvent.count({
          where: { studentId: child.id, severity: "RED", occurredAt: { gte: since } },
        }),
        db.studySession.findMany({
          where: { studentId: child.id, startedAt: { gte: since } },
          include: { lesson: { select: { title: true } } },
          orderBy: { startedAt: "desc" },
        }),
        db.studySession.count({
          where: {
            studentId: child.id,
            status: "ENDED",
            startedAt: { gte: since },
          },
        }),
        db.checkpointAttempt.count({
          where: { studentId: child.id, correct: true, submittedAt: { gte: since } },
        }),
      ]);

      const totalActive = sessions.reduce((sum, s) => sum + s.totalActiveSeconds, 0);
      const lastSession = sessions[0] ?? null;

      return {
        child,
        totalActive,
        redEvents,
        completed,
        checkpointPasses,
        lastSessionTitle: lastSession?.lesson?.title ?? null,
        lastSessionAt: lastSession?.startedAt ?? null,
      };
    })
  );

  return (
    <>
      <LmsHeader title="Parent Reports" subtitle={user.name} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-1">
          Weekly focus report
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          A summary of your child's learning activity over the last 7 days.
        </p>

        {reports.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-muted-foreground">
            No children linked to this account yet.
          </div>
        ) : (
          <div className="space-y-6">
            {reports.map(({ child, totalActive, redEvents, completed, checkpointPasses, lastSessionTitle, lastSessionAt }) => (
              <div
                key={child.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h2 className="font-semibold text-cp-green text-lg">{child.name}</h2>
                    {lastSessionTitle && lastSessionAt && (
                      <p className="text-xs text-muted-foreground">
                        Last studied: <span className="text-foreground">{lastSessionTitle}</span>{" "}
                        on {new Date(lastSessionAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cp-green bg-cp-green-lighter rounded-full px-3 py-1">
                    <Timer className="w-4 h-4" /> {formatHours(totalActive)} studied
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-cp-cream/60 border border-gray-100 p-4">
                    <BookOpen className="w-5 h-5 text-cp-green mb-2" />
                    <p className="text-2xl font-bold text-cp-green">{completed}</p>
                    <p className="text-xs text-muted-foreground">Lessons completed</p>
                  </div>
                  <div className="rounded-xl bg-cp-cream/60 border border-gray-100 p-4">
                    <CheckCircle2 className="w-5 h-5 text-cp-gold mb-2" />
                    <p className="text-2xl font-bold text-cp-green">{checkpointPasses}</p>
                    <p className="text-xs text-muted-foreground">Checkpoints passed</p>
                  </div>
                  <div className="rounded-xl bg-cp-cream/60 border border-gray-100 p-4">
                    <AlertTriangle
                      className={`w-5 h-5 mb-2 ${redEvents > 0 ? "text-red-500" : "text-cp-green"}`}
                    />
                    <p className="text-2xl font-bold text-cp-green">{redEvents}</p>
                    <p className="text-xs text-muted-foreground">
                      Distraction incidents (last 7 days)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
