import type { Metadata } from "next";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Elementary School - ClearPath Edu Hub",
  description:
    "ClearPath Elementary provides a nurturing Islamic learning environment where young learners build confidence, literacy, numeracy, discipline, and curiosity from the earliest years.",
  alternates: { canonical: "/school/elementary" },
  openGraph: {
    title: "Elementary School | ClearPath Edu Hub",
    description:
      "ClearPath Elementary provides a nurturing Islamic learning environment focused on literacy, numeracy, Islamic values, confidence, and early learning habits.",
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } as const },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
            Building Strong Foundations for Life
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ClearPath Elementary provides a nurturing Islamic learning environment where young learners build confidence, literacy, numeracy, discipline, and curiosity from the earliest years.
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
              <Link href="#about-elementary">
                About ClearPath Elementary
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="#admissions-section">
                Apply to Elementary
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ABOUT CLEARPATH ELEMENTARY ════════════════ */}
      <section id="about-elementary" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              About ClearPath Elementary
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
              The elementary years are the foundation of every child's future. At ClearPath Elementary, we take this stage seriously. We do not only teach children to read, write, and calculate - we help them develop the right habits, values, confidence, and love for learning. Our elementary school was established to provide young learners with a strong start in an environment that is safe, caring, structured, and grounded in Islamic values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHAT WE FOCUS ON ════════════════ */}
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
              What We Focus On
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Strong literacy and reading culture */}
            <motion.div
              key="literacy"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Strong literacy and reading culture
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We build a strong foundation in literacy and reading, fostering a love for books and stories from an early age.
              </p>
            </motion.div>

            {/* Numeracy and problem-solving skills */}
            <motion.div
              key="numeracy"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Numeracy and problem-solving skills
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students develop strong mathematical thinking and problem-solving abilities through hands-on activities and real-world applications.
              </p>
            </motion.div>

            {/* Islamic values, manners, and discipline */}
            <motion.div
              key="islamic-values"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Islamic values, manners, and discipline
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We nurture love for Allah and His Messenger (ﷺ), teaching Islamic values, manners, and self-discipline through daily practice and positive role modeling.
              </p>
            </motion.div>

            {/* Confidence and communication */}
            <motion.div
              key="confidence"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Confidence and communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We help students build self-confidence and effective communication skills through presentations, group work, and public speaking opportunities.
              </p>
            </motion.div>

            {/* Creativity, curiosity, and guided exploration */}
            <motion.div
              key="creativity"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Creativity, curiosity, and guided exploration
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We encourage creativity and curiosity through art projects, science experiments, and guided exploration that allows students to discover and learn at their own pace.
              </p>
            </motion.div>

            {/* Early identification of learning gaps */}
            <motion.div
              key="learning-gaps"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Early identification of learning gaps
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use a structured diagnostic system to discover where each student needs support, ensuring no child falls behind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR LEARNING APPROACH ════════════════ */}
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
              Our Learning Approach
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
              At the elementary level, children need patient guidance and strong structure. Our teachers help pupils learn step by step while paying attention to their individual pace and needs. We combine classroom teaching, guided practice, simple projects, reading activities, numeracy development, and moral instruction to ensure that each child grows academically and personally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY PARENTS CHOOSE CLEARPATH ELEMENTARY ════════════════ */}
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
              Why Parents Choose ClearPath Elementary
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Safe and caring Islamic school environment */}
            <motion.div
              key="safe-environment"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                A safe and caring Islamic school environment
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our school provides a secure, nurturing environment where Islamic values are practiced and respected, giving parents peace of mind.
              </p>
            </motion.div>

            {/* Strong academic foundation from the early years */}
            <motion.div
              key="academic-foundation"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Strong academic foundation from the early years
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We build essential academic skills early, setting students up for success in their future educational journey.
              </p>
            </motion.div>

            {/* Attention to each child's learning needs */}
            <motion.div
              key="individual-attention"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Attention to each child's learning needs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We recognize that every child learns differently and provide personalized support to ensure each student reaches their full potential.
              </p>
            </motion.div>

            {/* Preparation for future success in secondary school */}
            <motion.div
              key="future-preparation"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Preparation for future success in secondary school
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our elementary program prepares students not just for the next grade, but for lifelong learning and success.
              </p>
            </motion.div>

            {/* Character-building alongside academics */}
            <motion.div
              key="character-building"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Character-building alongside academics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe that good results must be matched with good conduct, developing both academic excellence and strong character.
              </p>
            </motion.div>

            {/* Expected Outcomes */}
            <motion.div
              key="expected-outcomes"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Expected Outcomes
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By the end of their elementary journey, our pupils are expected to become confident, disciplined, curious, and prepared for the academic demands of secondary education. They become confident readers and communicators with stronger numeracy and reasoning skills, better manners and Islamic consciousness, and readiness for secondary school learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ELEMENTARY ADMISSION CTA ════════════════ */}
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
              <CheckCircle2 className="w-7 h-7 text-cp-gold" />
            </div>
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Elementary Admission
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-5">
              Give Your Child a Strong Foundation
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              Admissions are now open for the new session. Apply now to give your child the strong foundation they need for lifelong success.
            </p>
            <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-lg mx-auto mb-8 text-left">
              <h3 className="text-white font-semibold mb-3">How to Apply</h3>
              <ul className="space-y-2.5">
                {[
                  "Obtain the application form in-person at the Client Service Office or online via our admissions portal",
                  "Complete and submit the application form with required documents",
                  "Schedule your entrance assessment date from May 9th onwards",
                  "Await assessment results and admission offer",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="w-6 h-6 bg-cp-gold/20 text-cp-gold rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/contact">
                  Apply Now
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