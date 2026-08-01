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
  ClipboardCheck,
  Activity,
  Moon,
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

export default function AdmissionsPage() {
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
            Join the ClearPath Family
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We are excited that you are considering ClearPath Edu Hub for your child's education.
            We offer a clear path for every child to grow in Consciousness, Character, and Competence.
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
              <Link href="#application-process">
                Start Your Application Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="/contact">
                Chat With Admissions on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ THE 4-STEP ADMISSION JOURNEY ════════════════ */}
      <section id="application-process" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              The 4-Step Admission Journey
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Your Path to ClearPath
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic Goal: To simplify the process for parents and create urgency/exclusivity.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Step 1: The Inquiry */}
            <motion.div
              key="step1"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Step 1: The Inquiry
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start by visiting us or contacting our admissions office. We love to show parents how our system works.
              </p>
            </motion.div>

            {/* Step 2: Entrance Examination/Assessment */}
            <motion.div
              key="step2"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <ClipboardCheck className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Step 2: Entrance Examination/Assessment
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every child is assessed to help us understand their current academic standing.
              </p>
            </motion.div>

            {/* Step 3: Diagnostic Feedback & Admission Offer */}
            <motion.div
              key="step3"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Activity className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Step 3: Diagnostic Feedback & Admission Offer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don't just give scores; we provide feedback on your child's learning needs. Successful applicants receive an admission offer.
              </p>
            </motion.div>

            {/* Step 4: The Holiday Preparation Programme */}
            <motion.div
              key="step4"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
                <Moon className="w-6 h-6 text-cp-green" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
                Step 4: The Holiday Preparation Programme
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This is a non-negotiable step for all new students. We introduce them to the Cambridge approach and our platforms before they resume, so they start Day 1 with 100% confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ADMISSIONS FAQ ════════════════ */}
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
              Admissions FAQ
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {/* FAQ Item 1 */}
            <motion.div
              key="faq1"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Q: What classes are open for enrollment?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A: We are currently accepting applications for the Elementary School, JSS1, and SS1.
              </p>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              key="faq2"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Q: Do you offer transport services?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A: Yes, we provide safe and structured transport for students within our catchment areas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ APPLICATION CTAs ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Ready to Start Your Application?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download our application form or chat with our admissions team to begin your journey.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="/clearpath-application-form.pdf">
                Download Application Form
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/contact">
                Chat With Admissions on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/contact">
                Book a Physical Tour
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}