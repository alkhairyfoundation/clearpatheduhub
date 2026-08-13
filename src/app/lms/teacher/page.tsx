import Link from "next/link";
import { BookOpen, Settings2 } from "lucide-react";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import LmsHeader from "@/components/lms/LmsHeader";
import LiveDashboard from "@/components/lms/LiveDashboard";

export const dynamic = "force-dynamic";

export default async function TeacherDashboardPage() {
  const user = await requireRole(["TEACHER", "ADMIN"]);

  const classes = await db.class.findMany({
    where: user.role === "TEACHER" ? { teacherId: user.id } : undefined,
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <LmsHeader title="Live Monitoring" subtitle={user.name} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-4">
          <Link
            href="/lms/teacher/lessons"
            className="inline-flex items-center gap-2 text-sm font-medium text-cp-green hover:text-cp-green-light"
          >
            <BookOpen className="w-4 h-4" /> Manage lessons
          </Link>
          {user.role === "ADMIN" && (
            <Link
              href="/lms/admin/settings"
              className="inline-flex items-center gap-2 text-sm font-medium text-cp-green hover:text-cp-green-light"
            >
              <Settings2 className="w-4 h-4" /> Focus settings
            </Link>
          )}
        </div>
      </div>
      {classes.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-muted-foreground">
          No classes assigned. Please contact the administrator.
        </div>
      ) : (
        <LiveDashboard classes={classes} />
      )}
    </>
  );
}
