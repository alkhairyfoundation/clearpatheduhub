"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Monitor,
  Lightbulb,
  Award,
  Users,
  GraduationCap,
  Eye,
  Target,
  Heart,
  Search,
  BarChart3,
  LifeBuoy,
  Rocket,
  ClipboardCheck,
  FileText,
  Megaphone,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── The Problem: Schooling vs Learning ─── */
const schoolingVsLearning = {
  schooling: [
    "Following the syllabus and covering topics",
    "Moving to the next class because the year ended",
    "Passing examinations",
    "Measuring what was taught, not what was learned",
  ],
  learning: [
    "Understanding deeply and truly",
    "Mastering each concept before moving forward",
    "Applying knowledge to real life",
    "Growing in consciousness, character, and competence",
  ],
};

/* ─── Our Promise ─── */
const promisePoints = [
  {
    icon: Search,
    title: "Known",
    description:
      "We begin with diagnostic assessment—discovering each learner's strengths, areas of mastery, and specific gaps.",
  },
  {
    icon: BarChart3,
    title: "Monitored",
    description:
      "We track progress continuously, not just at exam time, so no learner's growth goes unnoticed.",
  },
  {
    icon: LifeBuoy,
    title: "Supported",
    description:
      "Learning gaps are met with targeted support, intervention, or enrichment—teaching every child according to their needs.",
  },
  {
    icon: Rocket,
    title: "Developed",
    description:
      "Every learner grows in consciousness, character, and competence—ready for the next stage of life.",
  },
];

/* ─── The ClearPath Way ─── */
const clearPathWay = [
  {
    icon: Target,
    title: "Purpose",
    description: "To ensure that every child learns.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A generation of learners who know their Lord, understand themselves, think deeply, live responsibly, and contribute meaningfully to society.",
  },
  {
    icon: GraduationCap,
    title: "Mission",
    description:
      "To combine academic excellence with Islamic values, evidence-informed teaching, and personalised learning—so every student understands, masters, and applies what they learn.",
  },
  {
    icon: Heart,
    title: "Philosophy",
    description:
      "Every child can learn. Every teacher must grow. Every lesson must lead to learning.",
  },
];

/* ─── How Learning Happens ─── */
const learningCycle = [
  {
    icon: Search,
    step: "Diagnose",
    desc: "We begin where each learner is—strengths, mastery, and specific gaps.",
  },
  {
    icon: Compass,
    step: "Personalise",
    desc: "Instruction is tailored to each learner's needs—support, intervention, or enrichment.",
  },
  {
    icon: BookOpen,
    step: "Teach",
    desc: "Evidence-informed teaching meets learners where they are and moves them forward.",
  },
  {
    icon: BarChart3,
    step: "Monitor",
    desc: "Progress is tracked continuously, not just at exam time.",
  },
  {
    icon: Rocket,
    step: "Grow",
    desc: "Every learner grows in consciousness, character, and competence.",
  },
];

/* ─── Parent Partnership ─── */
const partnership = [
  {
    icon: ClipboardCheck,
    title: "Progress Updates",
    description: "Meaningful, regular updates on your child's learning journey.",
  },
  {
    icon: FileText,
    title: "Competency Reports",
    description: "Clear reports on what your child has mastered and what comes next.",
  },
  {
    icon: LifeBuoy,
    title: "Intervention Plans",
    description: "Targeted plans where learning gaps are identified.",
  },
  {
    icon: Users,
    title: "Engagement Meetings",
    description: "Real opportunities to partner with teachers and leadership.",
  },
];

/* ─── The ClearPath Graduate ─── */
const graduateValues = [
  {
    icon: Eye,
    title: "Consciousness",
    description:
      "Growing in awareness of Allah, understanding themselves, and living purposeful lives.",
  },
  {
    icon: Heart,
    title: "Character",
    description:
      "Developing integrity, discipline, compassion, resilience, and responsibility.",
  },
  {
    icon: Target,
    title: "Competence",
    description:
      "Building the knowledge, skills, and confidence needed to excel in higher education, leadership, and life.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient-blue overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" as const }}
            className="absolute -top-32 -right-32 w-96 h-96 border border-white/[0.04] rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" as const }}
            className="absolute -bottom-48 -left-48 w-[500px] h-[500px] border border-cp-gold/[0.06] rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" as const }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/[0.02] rounded-full"
          />
          <div className="absolute inset-0 pattern-dots opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* 3Cs Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cp-gold" />
            <span className="text-white/85 text-sm font-medium tracking-wider">
              Consciousness • Character • Competence
            </span>
          </motion.div>

          {/* Arabic */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-cp-gold text-lg sm:text-xl mb-5"
          >
            مدرسة المحجة البيضاء
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-7"
          >
            Where Learning
            <br />
            <span className="text-gradient-gold">Comes First.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/90 text-base sm:text-lg font-semibold max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Every child can learn. Every learner deserves to grow.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="text-white/75 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            At ClearPath, we believe the true purpose of school is learning.
            Everything we do—from teaching and assessment to culture and
            leadership—is designed to ensure that every student grows in
            consciousness, character, and competence. Because education is more
            than passing examinations. It is preparing young people to know
            their Lord, understand themselves, think deeply, live responsibly,
            and contribute meaningfully to society.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-cp-green hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-white/15 group"
            >
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="/contact">
                Book a School Tour
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ANNOUNCEMENT STRIP ════════════════ */}
      <section className="bg-cp-green border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4 text-center"
          >
            <span className="inline-flex items-center gap-2 text-cp-gold">
              <Megaphone className="w-4 h-4 shrink-0" />
              <span className="font-semibold text-sm">Summer Learning Programme begins Monday, 3 August 2026</span>
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="text-white/70 text-sm">
              Support • Intervention • Enrichment for every learner.
            </span>
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-white/85 hover:text-white font-semibold text-sm underline underline-offset-4 decoration-cp-gold/50"
            >
              Read the announcement
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ THE PROBLEM ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream pattern-islamic relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              The Problem
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Schooling Is Not the Same as Learning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Too many children pass through school without truly learning—covering
              topics they forget, moving up because the calendar moved, and
              graduating without the foundations they need. At ClearPath, we
              refuse to mistake attendance for understanding, or covering the
              curriculum for mastering it.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Schooling */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-muted-foreground">
                  Schooling
                </h3>
              </div>
              <ul className="space-y-4">
                {schoolingVsLearning.schooling.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 text-sm">
                    <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-muted-foreground text-xs font-bold shrink-0 mt-0.5">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Learning */}
            <motion.div
              variants={fadeUp}
              className="bg-cp-green rounded-3xl p-8 text-white shadow-xl shadow-cp-green/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-cp-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                  Learning
                </h3>
              </div>
              <ul className="space-y-4">
                {schoolingVsLearning.learning.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-cp-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR PROMISE ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Our Promise
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Every Child&apos;s Learning Will Be Known, Monitored, Supported, and Developed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We know every learner. We monitor every learner. We support every
              learner. We celebrate every learner&apos;s growth.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {promisePoints.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-cp-blue/10 transition-all duration-500 hover:-translate-y-1 hover:border-cp-blue/20"
              >
                <div className="w-12 h-12 bg-cp-blue-lighter rounded-xl flex items-center justify-center mb-4 group-hover:bg-cp-blue/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-cp-blue group-hover:text-cp-blue-light transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-cp-green text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ THE CLEARPATH WAY ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              The ClearPath Way
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Purpose, Vision, Mission, and Philosophy
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {clearPathWay.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 text-center border border-gray-50 hover:shadow-xl hover:shadow-cp-green/[0.04] transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-cp-green/[0.05] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-cp-green/10 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-cp-green group-hover:text-cp-gold transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ HOW LEARNING HAPPENS ════════════════ */}
      <section className="py-20 sm:py-28 section-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              How Learning Happens
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
              The ClearPath Learning Cycle
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Every learner follows one intentional cycle—personalised to their
              needs and designed to ensure real growth.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {learningCycle.map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-cp-gold" />
                  </div>
                  {i < learningCycle.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 items-center">
                      <ArrowRight className="w-4 h-4 text-cp-gold/40" />
                    </div>
                  )}
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 bg-cp-gold text-cp-green text-xs font-bold rounded-full mb-2">
                  {i + 1}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-2">
                  {item.step}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PARENT PARTNERSHIP ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Parent Partnership
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-5">
                Parents Are Partners, Not Spectators
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Parents receive meaningful progress updates, competency reports,
                intervention plans where needed, and regular opportunities to
                partner with teachers. Education is a shared journey between home
                and school—and we make sure you are never left guessing about how
                your child is learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-7 group"
                >
                  <Link href="/contact">
                    Partner With Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cp-blue/25 text-cp-blue hover:bg-cp-blue hover:text-white rounded-full px-7"
                >
                  <Link href="/news">Latest Updates</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {partnership.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-cp-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-blue/10 transition-all duration-400 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 bg-cp-blue-lighter rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-cp-blue" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-cp-green mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ THE CLEARPATH GRADUATE ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              The ClearPath Graduate
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Grown in Consciousness, Character, and Competence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students grow in three interconnected dimensions—so they leave
              ClearPath ready for higher education, leadership, and life.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {graduateValues.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-50 hover:shadow-xl hover:shadow-cp-green/[0.04] transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-cp-green/[0.05] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-cp-green/10 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-cp-green group-hover:text-cp-gold transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PROGRAMMES ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Programmes
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              One Institution. Pathways for Every Learner.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The School organizes learning. The Hub transforms learning. Both
              work together as one integrated system where every child learns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The School Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 section-gradient-green" />
              <div className="absolute inset-0 pattern-dots opacity-20" />
              <div className="relative p-8 sm:p-10 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <GraduationCap className="w-6 h-6 text-cp-gold" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-3">
                    The School
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-2">
                    Elementary through Advanced School—structured, faith-centred
                    education where every lesson leads to learning. Cambridge &
                    National Curriculum, Islamic values, and personalised support
                    from EYFS to post-secondary.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-fit mt-6 group/btn"
                >
                  <Link href="/school">
                    Explore The School
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* The Hub Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 hero-gradient-blue" />
              <div className="absolute inset-0 pattern-dots opacity-15" />
              <div className="relative p-8 sm:p-10 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <Monitor className="w-6 h-6 text-cp-gold" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-3">
                    The Hub
                  </h3>
                  <p className="text-white/85 leading-relaxed mb-2">
                    LMS platform, training programs, radio, educational products,
                    and membership access—extending the ClearPath learning
                    experience far beyond our walls.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-fit mt-6 group/btn"
                >
                  <Link href="/hub">
                    Explore The Hub
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section className="py-20 sm:py-24 hero-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Award className="w-12 h-12 text-cp-gold mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
              Give Your Child a School Where Learning Comes First
            </h2>
            <p className="text-white/80 mb-8 text-base sm:text-lg">
              Admissions for the 2026/2027 Academic Session are now open. Every
              child can learn—and at ClearPath, every child will.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-cp-green hover:bg-white/90 font-semibold rounded-full px-8 group"
              >
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/contact">Book a School Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
