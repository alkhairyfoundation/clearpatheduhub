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
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Future Educators Academy - ClearPath Edu Hub",
  description:
    "ClearPath Edu Hub's Future Educators Academy prepares the next generation of teachers with 21st-century teaching methods, classroom technology, communication skills, and practical teaching strategies.",
  alternates: { canonical: "/hub/programs/future-educators" },
  openGraph: {
    title: "Future Educators Academy | ClearPath Edu Hub",
    description:
      "Prepare for a career in education with ClearPath's Future Educators Academy - learn modern teaching methods, classroom technology, and gain practical experience before university.",
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

export default function FutureEducatorsAcademyPage() {
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
            For the Next Generation of Teachers
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Are you planning to study Education at a university or college of education? Don't wait. Learn 21st-century teaching methods, classroom technology, communication skills, and practical teaching strategies before you even step into a lecture hall.
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
              <Link href="#about-program">
                About the Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="#who-it-is-for">
                Who It Is For
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ ABOUT THE PROGRAM ════════════════ */}
      <section id="about-program" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              About Future Educators Academy
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
              Summary: Are you planning to study Education at a university or college of education? Don't wait. Learn 21st-century teaching methods, classroom technology, communication skills, and practical teaching strategies before you even step into a lecture hall.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHO IT IS FOR ════════════════ */}
      <section id="who-it-is-for" className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Who It Is For
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Secondary school graduates */}
            <motion.div
              key="graduates"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Secondary school graduates
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recent graduates looking to gain a competitive edge before university education studies.
              </p>
            </motion.div>

            {/* Admission seekers */}
            <motion.div
              key="admission-seekers"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Admission seekers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students waiting for university admission who want to use their time productively.
              </p>
            </motion.div>

            {/* Young people interested in education fields */}
            <motion.div
              key="education-interested"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Young people interested in teaching, education, child development, school leadership, or e-learning
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Aspiring educators exploring their passion for teaching and learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ KEY SKILLS ════════════════ */}
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
              Key Skills You'll Develop
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Digital lesson planning */}
            <motion.div
              key="digital-lesson-planning"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Digital lesson planning
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn to create engaging, effective lesson plans using modern digital tools and platforms.
              </p>
            </motion.div>

            {/* EdTech tools */}
            <motion.div
              key="edtech-tools"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                EdTech tools
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Master educational technology tools that enhance teaching and learning in modern classrooms.
              </p>
            </motion.div>

            {/* Learner psychology */}
            <motion.div
              key="learner-psychology"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Learner psychology
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Understand how students learn and develop strategies to support diverse learning needs.
              </p>
            </motion.div>

            {/* Public speaking */}
            <motion.div
              key="public-speaking"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Public speaking
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Develop confidence and skills in presenting information clearly and engagingly to audiences.
              </p>
            </motion.div>

            {/* Classroom communication */}
            <motion.div
              key="classroom-communication"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Classroom communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn effective communication strategies for managing classrooms and interacting with students.
              </p>
            </motion.div>

            {/* Lesson presentation */}
            <motion.div
              key="lesson-presentation"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Lesson presentation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Practice delivering lessons with confidence, clarity, and student engagement.
              </p>
            </motion.div>

            {/* Online learning platforms */}
            <motion.div
              key="online-learning-platforms"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Online learning platforms
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Gain experience with global learning platforms like Coursera, Alison, and YouTube Learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PORTFOLIO OUTCOMES ════════════════ */}
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
              Portfolio Outcomes
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Lesson plan */}
            <motion.div
              key="lesson-plan"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Lesson plan
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Create comprehensive, standards-aligned lesson plans for various subjects and grade levels.
              </p>
            </motion.div>

            {/* Teaching presentation */}
            <motion.div
              key="teaching-presentation"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Teaching presentation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Develop and deliver engaging teaching presentations using modern presentation tools.
              </p>
            </motion.div>

            {/* Short teaching video */}
            <motion.div
              key="teaching-video"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Short teaching video
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Record and edit short teaching demonstrations showcasing your instructional skills.
              </p>
            </motion.div>

            {/* Online course certificate */}
            <motion.div
              key="online-course-certificate"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Online course certificate
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Earn certificates from global learning platforms demonstrating your commitment to professional development.
              </p>
            </motion.div>

            {/* Classroom reflection report */}
            <motion.div
              key="classroom-reflection-report"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Classroom reflection report
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Reflect on your teaching experiences and develop actionable plans for improvement.
              </p>
            </motion.div>

            {/* ClearPath certificate */}
            <motion.div
              key="clearpath-certificate"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                ClearPath certificate
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Receive official recognition from ClearPath Edu Hub for completing the Future Educators Academy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PROGRAM ENROLLMENT ════════════════ */}
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
              Ready to Begin Your Teaching Journey?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto>
              Join our Future Educators Academy and gain the skills, confidence, and portfolio you need to succeed in education studies and beyond.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="/contact">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/hub/programs">
                Explore Other Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}