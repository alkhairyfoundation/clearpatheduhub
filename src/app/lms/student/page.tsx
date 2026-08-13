import Link from "next/link";
import { BookOpen, CheckCircle2, Clock, Lock, PlayCircle, RotateCcw } from "lucide-react";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { isLessonComplete, isLessonLocked } from "@/lib/lms/progress";
import LmsHeader from "@/components/lms/LmsHeader";

export const dynamic = "force-dynamic";

function formatDuration(seconds: number | null): string {
  if (!seconds || seconds <= 0) return "Video lesson";
  const m = Math.round(seconds / 60);
  return m < 60 ? `${m} min` : `${Math.floor(m / 60)}h ${m % 60}m`;
}

export default async function StudentDashboardPage() {
  const user = await requireRole(["STUDENT"]);
  const enrollments = await db.enrollment.findMany({
    where: { studentId: user.id },
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
    },
  });

  if (enrollments.length === 0) {
    return (
      <>
        <LmsHeader title="My Lessons" subtitle={user.name} />
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <BookOpen className="w-12 h-12 text-cp-gold mx-auto mb-4" />
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-2">
              No courses yet
            </h1>
            <p className="text-muted-foreground">
              You have not been enrolled in any course. Please contact your teacher.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <LmsHeader title="My Lessons" subtitle={user.name} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {enrollments.map((enrollment) => {
          const lessons = enrollment.course.lessons;
          return (
            <section key={enrollment.course.id} className="mb-12">
              <div className="mb-6">
                <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green">
                  {enrollment.course.title}
                </h1>
                {enrollment.course.description && (
                  <p className="text-muted-foreground mt-1">
                    {enrollment.course.description}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const previous = index > 0 ? lessons[index - 1] : null;
                  const locked = isLessonLocked(previous);
                  const completed = isLessonComplete(
                    lesson.sessions[lesson.sessions.length - 1] ?? null,
                    lesson
                  );
                  const hasCheckpoints = lesson.checkpoints.length > 0;

                  return (
                    <div
                      key={lesson.id}
                      className={`rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 ${
                        locked
                          ? "bg-muted/40 border-border/60 opacity-80"
                          : "bg-white border-gray-100 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                            completed
                              ? "bg-cp-green-lighter text-cp-green"
                              : locked
                                ? "bg-muted text-muted-foreground"
                                : "bg-cp-gold/10 text-cp-gold"
                          }`}
                        >
                          {locked ? (
                            <Lock className="w-5 h-5" />
                          ) : completed ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <PlayCircle className="w-5 h-5" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              Lesson {lesson.order}
                            </span>
                            {completed && (
                              <span className="text-[11px] font-semibold text-cp-green bg-cp-green-lighter rounded-full px-2 py-0.5">
                                Completed
                              </span>
                            )}
                            {locked && (
                              <span className="text-[11px] font-semibold text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                                Locked
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-foreground truncate">
                            {lesson.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDuration(lesson.durationSeconds)}
                            </span>
                            {hasCheckpoints && (
                              <span>
                                {lesson.checkpoints.length} checkpoint
                                {lesson.checkpoints.length > 1 ? "s" : ""}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {locked ? (
                        <span className="text-sm text-muted-foreground text-center sm:text-right shrink-0">
                          Complete the previous lesson first
                        </span>
                      ) : (
                        <Link
                          href={`/lms/student/lessons/${lesson.id}`}
                          className="shrink-0 inline-flex items-center gap-2 justify-center rounded-full bg-cp-green hover:bg-cp-green-light text-white font-semibold px-5 py-2.5 text-sm transition-colors"
                        >
                          {completed ? (
                            <>
                              <RotateCcw className="w-4 h-4" /> Review lesson
                            </>
                          ) : (
                            <>
                              <PlayCircle className="w-4 h-4" /> Start lesson
                            </>
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
