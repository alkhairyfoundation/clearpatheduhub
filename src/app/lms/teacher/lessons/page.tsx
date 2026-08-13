import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { db } from "@/lib/db";
import { requireTeacherOrAdmin } from "@/lib/session";
import LmsHeader from "@/components/lms/LmsHeader";
import LessonAuthoring from "@/components/lms/LessonAuthoring";

export const dynamic = "force-dynamic";

export default async function ManageLessonsPage() {
  const user = await requireTeacherOrAdmin();

  const courses = await db.course.findMany({
    where: user.role === "ADMIN" ? undefined : { authorId: user.id },
    include: {
      lessons: {
        include: { _count: { select: { checkpoints: true } } },
        orderBy: { order: "asc" },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return (
    <>
      <LmsHeader title="Manage Lessons" subtitle={user.name} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/lms/teacher"
          className="inline-flex items-center gap-2 text-sm text-cp-green/70 hover:text-cp-green mb-5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to monitoring
        </Link>
        <LessonAuthoring
          courses={courses.map((c) => ({
            id: c.id,
            title: c.title,
            description: c.description,
            lessons: c.lessons.map((l) => ({
              id: l.id,
              order: l.order,
              title: l.title,
              gated: l.gated,
              _count: l._count,
            })),
          }))}
          initialCourseId={courses[0]?.id ?? null}
        />
      </main>
    </>
  );
}
