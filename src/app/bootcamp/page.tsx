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
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "After School Advantage Bootcamp - ClearPath Edu Hub",
  description:
    "ClearPath Edu Hub's After School Advantage Bootcamp provides 4 weeks of direction, digital skills, confidence, and a head start on your future for secondary school graduates.",
  alternates: { canonical: "/bootcamp" },
  openGraph: {
    title: "Bootcamp | ClearPath Edu Hub",
    description:
      "Get direction, digital skills, confidence, and a head start on your future with ClearPath's After School Advantage Bootcamp.",
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

export default function BootcampPage() {
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
            The After School Advantage Bootcamp
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            4 Weeks of Direction, Digital Skills, Confidence, and a Head Start on Your Future.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="#bootcamp-details">
                Secure My Spot Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY THIS BOOTCAMP? ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              Why This Bootcamp?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <p className="text-muted-foreground text-sm leading-relaxed>
              The period between finishing secondary school and starting university is one of the most important stages in a young person's life. Many students waste this period because they do not know what to do next.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed>
              The After School Advantage Bootcamp helps students use this time wisely. Whether they are waiting for JAMB results, university admission, college of education, vocational training, or still deciding their path, this bootcamp gives them clarity, confidence, and a strong digital foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHAT STUDENTS WILL ACHIEVE IN 4 WEEKS ════════════════ */}
      <section id="what-students-will-achieve" className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              What Students Will Achieve in 4 Weeks
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Week 1: Self-Discovery and Career Mapping */}
            <motion.div
              key="week-1"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Week 1: Self-Discovery and Career Mapping
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Students discover their strengths, interests, and possible career directions. They learn how to choose a path with confidence instead of guessing.
              </p>
            </motion.div>

            {/* Week 2: The Digital Toolkit */}
            <motion.div
              key="week-2"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Week 2: The Digital Toolkit
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Students learn the basic digital tools every modern student and professional should know, including professional email, Google Docs, Google Sheets, Google Drive, Canva, online research, and safe internet use.
              </p>
            </motion.div>

            {/* Week 3: 21st-Century Communication */}
            <motion.div
              key="week-3"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Week 3: 21st-Century Communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Students learn how to speak with confidence, write clearly, present ideas, work in teams, and communicate like future leaders.
              </p>
            </motion.div>

            {/* Week 4: Global Learning and Mini Project */}
            <motion.div
              key="week-4"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Week 4: Global Learning and Mini Project
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Students are introduced to global learning platforms such as Coursera and Alison. They complete a mini project and prepare their first ClearPath portfolio item.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHO SHOULD ATTEND? ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              Who Should Attend?
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Recent secondary school graduates */}
            <motion.div
              key="recent-graduates"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Recent secondary school graduates
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Students waiting for university, polytechnic, or college of education admission */}
            <motion.div
              key="waiting-for-admission"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Students waiting for university, polytechnic, or college of education admission
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Young people looking for career direction */}
            <motion.div
              key="career-direction"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Young people looking for career direction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Aspiring entrepreneurs and vocational learners */}
            <motion.div
              key="entrepreneurs-learners"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Aspiring entrepreneurs and vocational learners
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Parents who want their children to use the waiting period productively */}
            <motion.div
              key="productive-parents"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Parents who want their children to use the waiting period productively
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ BOOTCAMP DETAILS ════════════════ */}
      <section id="bootcamp-details" className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              Bootcamp Details
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Duration */}
            <motion.div
              key="duration"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Duration
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                4 Weeks Intensive
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              key="location"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Location
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                ClearPath Edu Hub, [Insert Physical Address]
              </p>
            </motion.div>

            {/* Start Date */}
            <motion.div
              key="start-date"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Start Date
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                [Insert Date]
              </p>
            </motion.div>

            {/* Schedule */}
            <motion.div
              key="schedule"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Schedule
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                [Insert Days and Time]
              </p>
            </motion.div>

            {/* Learning Format */}
            <motion.div
              key="learning-format"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Learning Format
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Physical classes at the hub plus guided online learning activities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHAT STUDENTS GET AT GRADUATION ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              What Students Get at Graduation
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Certificate of Completion */}
            <motion.div
              key="certificate"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Certificate of Completion from ClearPath Edu Hub
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* The Advantage Portfolio */}
            <motion.div
              key="advantage-portfolio"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                The Advantage Portfolio: A digital folder containing their CV, career plan, digital skills project, and mini project
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Career Direction */}
            <motion.div
              key="career-direction"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Career Direction: A clearer understanding of what to do after secondary school
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>

            {/* Priority Access */}
            <motion.div
              key="priority-access"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                Priority Access: Bootcamp graduates can receive priority admission or discounts for specialized ClearPath programs such as Future Educators Academy, Skill-to-Enterprise Program, and Production and Export Starter Program
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ PRICING AND ENROLLMENT ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              Pricing and Enrollment
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <p className="text-muted-foreground text-sm leading-relaxed>
              Investment: [Insert Price].
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed>
              Early Bird Offer: Register before [Insert Date] and receive [Insert Discount or Bonus].
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
              <Link href="/contact">
                Secure My Spot Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/contact">
                Chat With Us on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CALL-TO-ACTION SECTION ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4>
              Ready to Secure Your Advantage?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto>
              Applications are open for our next cohort. Space is limited to ensure quality mentorship and practical support.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="/contact">
                Register Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 group"
            >
              <Link href="/contact">
                Speak With an Advisor
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}