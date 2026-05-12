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

export default function CambridgeApproachPage() {
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
              Consciousness • Competence • Character
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Global Standards. Local Relevance.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Four years ago, ClearPath took a bold step: we introduced the Cambridge learning approach. Today, it is the heartbeat of our academic excellence.
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
              <Link href="#what-it-means">
                What Does Cambridge Mean for Your Child?
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="#how-we-implement">
                How We Implement It
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHAT DOES THE CAMBRIDGE APPROACH MEAN FOR YOUR CHILD? ════════════════ */}
      <section id="what-it-means" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              What Does the Cambridge Approach Mean for Your Child?
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Moving Beyond Memorization
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Critical Thinking */}
            <motion.div
              key="critical-thinking"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Critical Thinking: Moving from "What" to "Why"
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                It means your child is not just "cramming" to pass WAEC. They are being trained to think globally.
              </p>
            </motion.div>

            {/* Application of Knowledge */}
            <motion.div
              key="application"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Application of Knowledge: Solving real-world problems
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students learn to apply their knowledge to solve authentic problems, preparing them for real-world challenges.
              </p>
            </motion.div>

            {/* Deep Understanding */}
            <motion.div
              key="deep-understanding"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Brain className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Deep Understanding: Mastering a concept before moving forward
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rather than rushing through topics, students build genuine competence step by step, ensuring true mastery.
              </p>
            </motion.div>

            {/* Global Competitiveness */}
            <motion.div
              key="global-competitiveness"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Global Competitiveness: Preparing for standard international benchmarks
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our students are equipped to compete with peers worldwide, opening doors to international universities and opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ INTEGRATING FAITH & GLOBAL EXCELLENCE ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Integrating Faith & Global Excellence
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              The Best of Both Worlds
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              At ClearPath, we believe that a student can be a devout Muslim and a globally competitive scholar. We combine the rigor of the Cambridge approach with the discipline of the Nigerian curriculum and the grounding of Islamic consciousness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ HOW WE IMPLEMENT IT ════════════════ */}
      <section id="how-we-implement" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              How We Implement It
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Our Approach to Excellence
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {/* Specialized Teacher Training */}
            <motion.div
              key="teacher-training"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                1. Specialized Teacher Training
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our teachers are trained to use inquiry-based methods that encourage students to ask questions, explore solutions, and develop critical thinking skills.
              </p>
            </motion.div>

            {/* Platform Learning */}
            <motion.div
              key="platform-learning"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                2. Platform Learning
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use digital tools to help students practice Cambridge-style assessments, providing immediate feedback and personalized learning paths.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Our success in the last 4 years has proven that this is the best path for students who want to lead in the 21st century.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="#application-process">
                Experience the Cambridge Advantage
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/admissions">
                Apply Now for the Next Session
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}