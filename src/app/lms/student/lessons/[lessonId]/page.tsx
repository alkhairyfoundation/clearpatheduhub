import { redirect } from "next/navigation";
import Link from "next/link";
import { Lock } from "lucide-react";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { isLessonLocked } from "@/lib/lms/progress";
import LessonPlayer, { type PlayerCheckpoint } from "@/components/lms/LessonPlayer";

export const dynamic = "force-dynamic";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const user = await requireRole(["STUDENT"]);
  const { lessonId } = await params;

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      course: {
        include: {
          lessons: {
            include: {
              sessions: { where: { studentId: user.id } },
              checkpoints: true,
            },
            orderBy: { order: "asc" },
          },
        },
      },
      checkpoints: true,
    },
  });

  if (!lesson) redirect("/lms/student");

  const enrollment = await db.enrollment.findFirst({
    where: { studentId: user.id, courseId: lesson.courseId },
  });
  if (!enrollment) redirect("/lms/student");

  const ordered = lesson.course.lessons;
  const index = ordered.findIndex((l) => l.id === lesson.id);
  const previous = index > 0 ? ordered[index - 1] : null;
  if (isLessonLocked(previous)) {
    return (
      <div className="min-h-screen bg-cp-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Lock className="w-12 h-12 text-cp-gold mx-auto mb-4" />
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-2">
            Lesson locked
          </h1>
          <p className="text-muted-foreground mb-6">
            Complete the previous lesson before starting this one.
          </p>
          <Link
            href="/lms/student"
            className="inline-flex items-center rounded-full bg-cp-green hover:bg-cp-green-light text-white font-semibold px-6 py-2.5"
          >
            Back to lessons
          </Link>
        </div>
      </div>
    );
  }

  const checkpoints: PlayerCheckpoint[] = lesson.checkpoints
    .slice()
    .sort((a, b) => a.timeSeconds - b.timeSeconds)
    .map((c) => {
      let options: string[] = [];
      try {
        options = JSON.parse(c.options);
      } catch {
        options = [];
      }
      return {
        id: c.id,
        order: c.order,
        timeSeconds: c.timeSeconds,
        prompt: c.prompt,
        options,
        correctIndex: c.correctIndex,
        requiresPass: c.requiresPass,
      };
    });

  return (
    <LessonPlayer
      lesson={{
        id: lesson.id,
        title: lesson.title,
        videoUrl: lesson.videoUrl,
        durationSeconds: lesson.durationSeconds,
        notesHtml: lesson.notesHtml,
        order: lesson.order,
        courseTitle: lesson.course.title,
      }}
      checkpoints={checkpoints}
    />
  );
}
