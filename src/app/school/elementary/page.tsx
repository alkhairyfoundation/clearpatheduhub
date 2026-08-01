"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Monitor,
  Lightbulb,
  Award,
  Users,
  GraduationCap,
  Eye,
  Target,
  Heart,
  Quote,
  Sparkles,
  Brain,
  Zap,
  Globe,
  Shield,
  CheckCircle2,
  FileText,
  School,
  Compass,
  MessageSquare,
  BarChart3,
  PenTool,
  Code2,
  Palette,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } as const },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const promises = [
  "Read confidently",
  "Think mathematically",
  "Ask thoughtful questions",
  "Communicate clearly",
  "Demonstrate integrity",
  "Love learning",
];

const whyFamilies = [
  {
    icon: Heart,
    title: "Faith & Character",
    desc: "Islamic values and character education are woven into every part of school life—not taught as a subject, but lived as a practice.",
  },
  {
    icon: Target,
    title: "Mastery Learning",
    desc: "Children advance when they demonstrate real understanding, not when the calendar says so. Every child masters each concept before moving forward.",
  },
  {
    icon: Globe,
    title: "Internationally Benchmarked Curriculum",
    desc: "Our curriculum draws on global best practices including Cambridge English, Singapore Mathematics, and inquiry-based science.",
  },
  {
    icon: BookOpen,
    title: "Strong Literacy & Numeracy",
    desc: "Reading and mathematics are the gateways to all learning. We invest deeply in ensuring every child builds strong foundations in both.",
  },
  {
    icon: Zap,
    title: "Future Skills & AI Readiness",
    desc: "We prepare children for a world shaped by technology—developing digital literacy, critical thinking, creativity, and adaptability from the earliest years.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    desc: "Parents are not just informed—they are involved. You receive regular updates, competency reports, and meaningful opportunities to partner with teachers.",
  },
];

const developmentalDomains = [
  {
    icon: Heart,
    title: "Faith, Character & Identity",
    desc: "Developing love for Allah, strong moral character, and a confident sense of self rooted in Islamic values.",
  },
  {
    icon: MessageSquare,
    title: "Language & Communication",
    desc: "Building strong oral language, reading, writing, and communication skills across English and Arabic.",
  },
  {
    icon: Brain,
    title: "Mathematical Thinking",
    desc: "Developing logical reasoning, problem-solving, and numerical fluency through Singapore Mathematics.",
  },
  {
    icon: Compass,
    title: "Scientific Discovery & Inquiry",
    desc: "Fostering curiosity, observation, and exploration through hands-on inquiry-based science.",
  },
  {
    icon: Users,
    title: "Personal, Social & Physical Development",
    desc: "Nurturing emotional intelligence, social skills, physical health, and personal responsibility.",
  },
  {
    icon: Rocket,
    title: "Creativity, Technology & Future Skills",
    desc: "Encouraging creative expression, digital literacy, and the adaptive skills needed for tomorrow's world.",
  },
];

const philosophyPrinciples = [
  "Every child can learn.",
  "Every child learns differently.",
  "Strong foundations matter more than early acceleration.",
  "Reading is the gateway to learning.",
  "Mathematics is a way of thinking.",
  "Assessment should improve learning.",
  "Parents are partners.",
  "Education prepares children for life, not only examinations.",
];

export default function ElementaryPage() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
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

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Building Strong Foundations for Lifelong Learning
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ClearPath Elementary is where learning comes first. Through our competency-based approach, we begin by discovering each child's learning level, then teach in the way each child learns best—building strong character, mastering essential skills, and growing in confidence for an ever-changing world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-cp-green hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-white/15 group"
            >
              <Link href="/contact">
                Book a School Tour
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 group"
            >
              <a href="/clearpath-application-form.pdf" target="_blank" rel="noopener noreferrer">
                Download Our Prospectus
                <FileText className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="/contact">
                Apply for Admission
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ EVERY CHILD DESERVES MORE THAN PROMOTION ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-6">
              Every Child Deserves More Than Promotion
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              At ClearPath, we believe children should move forward because they are ready—not simply because another school year has ended. We focus on mastery, curiosity, character, and confidence, ensuring every learner develops the strong foundations needed for lifelong success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR PROMISE ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Our Promise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every child who walks through our doors will:
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto"
          >
            {promises.map((promise) => (
              <motion.div
                key={promise}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-cp-green shrink-0" />
                <span className="text-foreground/80 text-sm font-medium">{promise}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY FAMILIES CHOOSE CLEARPATH ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Why Families Choose ClearPath
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyFamilies.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 bg-cp-green/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-cp-green" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ HOW LEARNING HAPPENS ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              How Learning Happens
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The ClearPath LEARN Model guides every child's learning journey:
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-5 max-w-4xl mx-auto"
          >
            {[
              { step: "Love Learning", desc: "Spark curiosity and a love for discovery" },
              { step: "Explore", desc: "Investigate ideas through guided inquiry" },
              { step: "Apply", desc: "Use knowledge in real-world contexts" },
              { step: "Reflect", desc: "Think about what was learned and how" },
              { step: "Next Challenge", desc: "Advance to the next level of mastery" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="font-bold text-cp-green text-lg">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-cp-green text-sm mb-1">{item.step}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR CURRICULUM ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Our Curriculum
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learning is organised around six developmental domains:
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {developmentalDomains.map((domain) => (
              <motion.div
                key={domain.title}
                variants={fadeUp}
                className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 bg-cp-green/10 rounded-xl flex items-center justify-center mb-4">
                  <domain.icon className="w-5 h-5 text-cp-green" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Early Years & Primary subsections */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 md:grid-cols-2 mt-12"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl p-7"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Early Years
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Playgroup through Nursery 3 is designed around child development and school readiness, ensuring children master foundational literacy, numeracy, language, social, and emotional skills before entering Grade 1.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl p-7"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Primary School
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Competency-based learning using internationally benchmarked resources including Cambridge English, Singapore Mathematics, inquiry-based science, Global Perspectives, and ClearPath-developed Faith &amp; Character.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR EDUCATIONAL PHILOSOPHY ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Our Educational Philosophy
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto"
          >
            {philosophyPrinciples.map((principle) => (
              <motion.div
                key={principle}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-cp-gold shrink-0" />
                <span className="text-foreground/80 text-sm">{principle}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PARENT PARTNERSHIP ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Parent Partnership
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Parents receive meaningful progress updates, competency reports, intervention plans where needed, and regular opportunities to partner with teachers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ADMISSIONS ════════════════ */}
      <section id="admissions-section" className="py-20 sm:py-28 section-gradient-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <School className="w-7 h-7 text-cp-gold" />
            </div>
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Elementary Admission
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-5">
              Start Your Child's Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              Our admissions process is simple, with a learner assessment focused on understanding each child's current stage and supporting their future growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/contact">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
              >
                <a href="tel:08064270291">Call: 0806 427 0291</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
