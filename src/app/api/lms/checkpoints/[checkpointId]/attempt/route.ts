import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ checkpointId: string }> }
) {
  const user = await requireRole(["STUDENT"]);
  const { checkpointId } = await params;
  try {
    const body = await request.json();
    const answerIndex = Number(body.answerIndex);
    const sessionId = String(body.sessionId ?? "");

    if (!Number.isInteger(answerIndex) || answerIndex < 0) {
      return NextResponse.json({ error: "Invalid answer." }, { status: 400 });
    }

    const checkpoint = await db.lessonCheckpoint.findUnique({
      where: { id: checkpointId },
      include: { lesson: true },
    });
    if (!checkpoint) {
      return NextResponse.json({ error: "Checkpoint not found." }, { status: 404 });
    }

    if (sessionId) {
      const session = await db.studySession.findUnique({ where: { id: sessionId } });
      if (!session || session.studentId !== user.id) {
        return NextResponse.json(
          { error: "Session does not belong to this student." },
          { status: 403 }
        );
      }
      if (session.lessonId !== checkpoint.lessonId) {
        return NextResponse.json(
          { error: "Checkpoint does not belong to this lesson." },
          { status: 400 }
        );
      }
    } else {
      const enrolled = await db.enrollment.findFirst({
        where: { studentId: user.id, courseId: checkpoint.lesson.courseId },
      });
      if (!enrolled) {
        return NextResponse.json(
          { error: "You are not enrolled in this course." },
          { status: 403 }
        );
      }
    }

    const options = JSON.parse(checkpoint.options) as string[];
    const correct = answerIndex === checkpoint.correctIndex;

    await db.checkpointAttempt.create({
      data: {
        studentId: user.id,
        checkpointId: checkpoint.id,
        correct,
      },
    });

    return NextResponse.json({
      ok: true,
      correct,
      correctIndex: checkpoint.correctIndex,
      requiresPass: checkpoint.requiresPass,
      prompt: checkpoint.prompt,
      options,
    });
  } catch (error) {
    console.error("[lms] checkpoint attempt error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
