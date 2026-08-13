import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/session";
import { getRoster, toRosterPayload } from "@/lib/live/store";

export const runtime = "nodejs";

async function assertClassAccess(userId: string, role: string, classId: string) {
  const cls = await db.class.findUnique({ where: { id: classId } });
  if (!cls) return false;
  if (role === "ADMIN") return true;
  return cls.teacherId === userId;
}

export async function GET(request: NextRequest) {
  const user = await requireRole(["TEACHER", "ADMIN"]);
  const classId = request.nextUrl.searchParams.get("classId") || "";

  if (!classId || !(await assertClassAccess(user.id, user.role, classId))) {
    return NextResponse.json({ error: "Class not found or access denied." }, { status: 403 });
  }

  const cls = await db.class.findUnique({
    where: { id: classId },
    include: {
      students: {
        include: { enrollments: { include: { course: true } } },
      },
      course: { include: { lessons: true } },
    },
  });
  if (!cls) {
    return NextResponse.json({ error: "Class not found." }, { status: 404 });
  }

  const live = new Map(
    getRoster(classId).map((e) => [e.studentId, toRosterPayload(e)])
  );

  const roster = cls.students.map((s) => {
    const entry = live.get(s.id);
    if (entry) return entry;
    return {
      studentId: s.id,
      studentName: s.name,
      classId: cls.id,
      sessionId: null,
      lessonId: null,
      lessonTitle: null,
      status: "GRAY",
      statusChangedAt: Date.now(),
      lastHeartbeatAt: 0,
      redReason: null,
      redDetail: null,
      totalActiveSeconds: 0,
      playhead: 0,
      checkpointsPassed: 0,
      lastRedAckId: null,
    };
  });

  const course = cls.course;
  const lessonCount = course?.lessons.length ?? 0;

  return NextResponse.json({ roster, classId, className: cls.name, courseId: course?.id ?? null, lessonCount });
}
