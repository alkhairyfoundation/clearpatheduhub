import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireTeacherOrAdmin } from "@/lib/session";

export const runtime = "nodejs";

type CheckpointInput = {
  timeSeconds: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  requiresPass?: boolean;
};

export async function POST(request: NextRequest) {
  const user = await requireTeacherOrAdmin();
  try {
    const body = await request.json();
    const {
      courseId,
      courseTitle,
      title,
      videoUrl,
      durationSeconds,
      notesHtml,
      gated,
      checkpoints = [],
    } = body;

    if (!title || !videoUrl) {
      return NextResponse.json(
        { error: "Lesson title and video URL are required." },
        { status: 400 }
      );
    }

    let targetCourseId = courseId || null;
    if (!targetCourseId) {
      if (!courseTitle) {
        return NextResponse.json(
          { error: "Select a course or provide a new course title." },
          { status: 400 }
        );
      }
      const course = await db.course.create({
        data: { title: courseTitle, authorId: user.id },
      });
      targetCourseId = course.id;
    } else {
      const course = await db.course.findUnique({
        where: { id: targetCourseId },
      });
      if (!course) {
        return NextResponse.json(
          { error: "Course not found." },
          { status: 404 }
        );
      }
      if (course.authorId !== user.id && user.role !== "ADMIN") {
        return NextResponse.json(
          { error: "You do not have permission to add to this course." },
          { status: 403 }
        );
      }
    }

    const last = await db.lesson.findFirst({
      where: { courseId: targetCourseId },
      orderBy: { order: "desc" },
    });
    const order = (last?.order ?? 0) + 1;

    const validatedCheckpoints: CheckpointInput[] = Array.isArray(checkpoints)
      ? checkpoints
          .filter(
            (c: CheckpointInput) =>
              typeof c.timeSeconds === "number" &&
              typeof c.prompt === "string" &&
              c.prompt.trim() &&
              Array.isArray(c.options) &&
              c.options.length >= 2 &&
              typeof c.correctIndex === "number" &&
              c.correctIndex >= 0 &&
              c.correctIndex < c.options.length
          )
          .map((c: CheckpointInput) => ({
            timeSeconds: c.timeSeconds,
            prompt: String(c.prompt).trim(),
            options: c.options.map((o) => String(o)),
            correctIndex: c.correctIndex,
            requiresPass: c.requiresPass !== false,
          }))
      : [];

    const lesson = await db.lesson.create({
      data: {
        courseId: targetCourseId,
        order,
        title: String(title).trim(),
        videoUrl: String(videoUrl).trim(),
        durationSeconds: durationSeconds ? Number(durationSeconds) : null,
        notesHtml: notesHtml ? String(notesHtml) : null,
        gated: gated !== false,
        authorId: user.id,
      },
    });

    for (let i = 0; i < validatedCheckpoints.length; i++) {
      await db.lessonCheckpoint.create({
        data: {
          lessonId: lesson.id,
          order: i + 1,
          timeSeconds: validatedCheckpoints[i].timeSeconds,
          prompt: validatedCheckpoints[i].prompt,
          options: JSON.stringify(validatedCheckpoints[i].options),
          correctIndex: validatedCheckpoints[i].correctIndex,
          requiresPass: validatedCheckpoints[i].requiresPass,
        },
      });
    }

    return NextResponse.json(
      { ok: true, lessonId: lesson.id, checkpointCount: validatedCheckpoints.length },
      { status: 201 }
    );
  } catch (error) {
    console.error("[lms] create lesson error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
