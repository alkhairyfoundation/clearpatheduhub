import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt as scryptCb } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCb);
const db = new PrismaClient();

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, 64);
  return `${salt}:${Buffer.from(derived).toString("hex")}`;
}

async function main() {
  const password = await hashPassword("password123");

  const admin = await db.user.upsert({
    where: { email: "admin@clearpath.edu" },
    update: {},
    create: {
      email: "admin@clearpath.edu",
      passwordHash: password,
      name: "Site Administrator",
      role: "ADMIN",
    },
  });

  const teacher = await db.user.upsert({
    where: { email: "teacher@clearpath.edu" },
    update: {},
    create: {
      email: "teacher@clearpath.edu",
      passwordHash: password,
      name: "Amina Okafor",
      role: "TEACHER",
    },
  });

  const parent = await db.user.upsert({
    where: { email: "parent@clearpath.edu" },
    update: {},
    create: {
      email: "parent@clearpath.edu",
      passwordHash: password,
      name: "Bashir Adewale",
      role: "PARENT",
    },
  });

  const studentNames = [
    "Fatima Bello",
    "Yusuf Ibrahim",
    "Aisha Mohammed",
    "Ibrahim Adeyemi",
    "Maryam Sanni",
  ];

  const students = [];
  for (let i = 0; i < studentNames.length; i++) {
    const email = `student${i + 1}@clearpath.edu`;
    const s = await db.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        passwordHash: password,
        name: studentNames[i],
        role: "STUDENT",
        parentId: i === 0 ? parent.id : undefined,
      },
    });
    students.push(s);
  }

  const cls = await db.class.upsert({
    where: { id: "demo-class" },
    update: {},
    create: {
      id: "demo-class",
      name: "Form 1 — Alpha",
      teacherId: teacher.id,
    },
  });

  await db.user.updateMany({
    where: { id: { in: students.map((s) => s.id) } },
    data: { classId: cls.id },
  });

  const course = await db.course.upsert({
    where: { id: "demo-course" },
    update: {},
    create: {
      id: "demo-course",
      title: "ClearPath Foundation",
      description: "Foundational lessons for every ClearPath learner.",
      authorId: teacher.id,
    },
  });

  const lessonsData = [
    {
      id: "demo-lesson-1",
      order: 1,
      title: "Welcome to the Learning Zone",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      durationSeconds: 596,
      notesHtml:
        "# Welcome to the Learning Zone\n\n- ClearPath learning is **personalised** and mastery-based.\n- You advance when you demonstrate real understanding.\n- Every lesson should lead to learning.\n",
      gated: true,
      checkpoints: [
        {
          order: 1,
          timeSeconds: 30,
          prompt: "When do you advance to the next concept at ClearPath?",
          options: JSON.stringify([
            "When the calendar says so",
            "When you demonstrate real understanding",
            "Never",
          ]),
          correctIndex: 1,
          requiresPass: true,
        },
        {
          order: 2,
          timeSeconds: 90,
          prompt: "What should every lesson lead to?",
          options: JSON.stringify(["Learning", "Grades", "Homework"]),
          correctIndex: 0,
          requiresPass: true,
        },
      ],
    },
    {
      id: "demo-lesson-2",
      order: 2,
      title: "Mastery Learning Explained",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      durationSeconds: 653,
      notesHtml:
        "# Mastery Learning Explained\n\n- Diagnosis comes first.\n- Instruction is tailored to your needs.\n- Progress is monitored continuously.\n",
      gated: true,
      checkpoints: [],
    },
  ];

  for (const ld of lessonsData) {
    await db.lesson.upsert({
      where: { id: ld.id },
      update: {},
      create: {
        id: ld.id,
        courseId: course.id,
        order: ld.order,
        title: ld.title,
        videoUrl: ld.videoUrl,
        durationSeconds: ld.durationSeconds,
        notesHtml: ld.notesHtml,
        gated: ld.gated,
        authorId: teacher.id,
      },
    });
    const existing = await db.lessonCheckpoint.findMany({
      where: { lessonId: ld.id },
    });
    if (existing.length === 0) {
      for (const cp of ld.checkpoints) {
        await db.lessonCheckpoint.create({
          data: { lessonId: ld.id, ...cp },
        });
      }
    }
  }

  for (const s of students) {
    await db.enrollment.upsert({
      where: { studentId_courseId: { studentId: s.id, courseId: course.id } },
      update: {},
      create: { studentId: s.id, courseId: course.id },
    });
  }

  const settings = await db.focusSettings.findUnique({ where: { id: 1 } });
  if (!settings) {
    await db.focusSettings.create({ data: { id: 1 } });
  }

  console.log("Seed complete.");
  console.log("Accounts (password: password123):");
  console.log(`  Admin   — admin@clearpath.edu`);
  console.log(`  Teacher — teacher@clearpath.edu`);
  console.log(`  Parent  — parent@clearpath.edu`);
  for (let i = 1; i <= students.length; i++) {
    console.log(`  Student — student${i}@clearpath.edu`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
