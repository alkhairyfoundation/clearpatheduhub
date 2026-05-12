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
  Palette,
  Video,
  MessageCircle,
  Layout,
  Edit,
  Share2,
  TrendingUp,
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

export default function CareerLabsPage() {
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
            Short Practical Courses for Immediate Skills
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Career Labs are short, intensive modules designed to give students immediate, employable, and practical skills. Each lab ends with a real project or portfolio item.
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
              <Link href="#digital-literacy-lab">
                Explore All Labs
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

      {/* ════════════════ ABOUT CAREER LABS ════════════════ */}
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
              About ClearPath Career Labs
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
              Title: Short Practical Courses for Immediate Skills.
              Career Labs are short, intensive modules designed to give students immediate, employable, and practical skills. Each lab ends with a real project or portfolio item.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CAREER LABS OVERVIEW ════════════════ */}
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
              Our Career Labs
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Digital Literacy Lab */}
            <motion.div
              key="digital-literacy-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Digital Literacy Lab
              </h3>
<p className="text-muted-foreground text-sm leading-relaxed">
                 Master Google Workspace, email, online research, Canva, and basic AI tools.
               </p>
            </motion.div>

            {/* Content Creation Lab */}
            <motion.div
              key="content-creation-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Content Creation Lab
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Learn video editing, captions, simple storytelling, and content planning for business and social media.
               </p>
            </motion.div>

            {/* Websites and Payments Lab */}
            <motion.div
              key="websites-payments-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Websites and Payments Lab
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Learn how to create simple landing pages, order forms, product catalogs, and understand basic payment tools.
               </p>
            </motion.div>

            {/* Job Readiness Lab */}
            <motion.div
              key="job-readiness-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Job Readiness Lab
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Learn CV writing, interview preparation, professional etiquette, communication, and workplace readiness.
               </p>
            </motion.div>

            {/* Social Media for Business Lab */}
            <motion.div
              key="social-media-business-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Social Media for Business Lab
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Learn how to create posts, manage pages, write captions, and promote small businesses online.
               </p>
            </motion.div>

            {/* Sales and Presentation Lab */}
            <motion.div
              key="sales-presentation-lab"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Sales and Presentation Lab
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Learn how to pitch ideas, present products, and communicate value with confidence.
               </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ DETAILED LABS ════════════════ */}
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
              Lab Details
            </h2>
          </motion.div>

          {/* Digital Literacy Lab Details */}
          <motion.div
            key="digital-literacy-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Digital Literacy Lab: Master Google Workspace, email, online research, Canva, and basic AI tools
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Students gain proficiency in essential digital productivity tools that are universally required in modern workplaces and academic settings.
            </p>
          </motion.div>

          {/* Content Creation Lab Details */}
          <motion.div
            key="content-creation-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Content Creation Lab: Learn video editing, captions, simple storytelling, and content planning for business and social media
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Develop skills to create engaging visual content that communicates effectively across digital platforms.
            </p>
          </motion.div>

          {/* Websites and Payments Lab Details */}
          <motion.div
            key="websites-payments-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Websites and Payments Lab: Learn how to create simple landing pages, order forms, product catalogs, and understand basic payment tools
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gain practical skills in creating basic online business presence and processing simple transactions.
            </p>
          </motion.div>

          {/* Job Readiness Lab Details */}
          <motion.div
            key="job-readiness-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Job Readiness Lab: Learn CV writing, interview preparation, professional etiquette, communication, and workplace readiness
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Prepare effectively for job applications and interviews with professional documents and interpersonal skills.
            </p>
          </motion.div>

          {/* Social Media for Business Lab Details */}
          <motion.div
            key="social-media-business-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Social Media for Business Lab: Learn how to create posts, manage pages, write captions, and promote small businesses online
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Build skills to leverage social media for business growth, customer engagement, and brand development.
            </p>
          </motion.div>

          {/* Sales and Presentation Lab Details */}
          <motion.div
            key="sales-presentation-details"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
              Sales and Presentation Lab: Learn how to pitch ideas, present products, and communicate value with confidence
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Develop confidence and skills in presenting ideas, showcasing products, and communicating value effectively to audiences.
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
                Recent graduates looking to gain practical skills while waiting for university admission or career decisions.
              </p>
            </motion.div>

            {/* Students waiting for admission */}
            <motion.div
              key="waiting-students"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Students waiting for university, polytechnic, or college of education admission
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Use the waiting period productively to gain skills that will give you an advantage in your future studies.
              </p>
            </motion.div>

            {/* Young people looking for career direction */}
            <motion.div
              key="career-seekers"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Young people looking for career direction
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Discover your strengths and interests through hands-on skill development in various practical areas.
              </p>
            </motion.div>

            {/* Aspiring entrepreneurs */}
            <motion.div
              key="aspiring-entrepreneurs"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Aspiring entrepreneurs and vocational learners
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gain practical business skills whether you have a trade skill or are looking to start a business venture.
              </p>
            </motion.div>

            {/* Parents wanting productive use of time */}
            <motion.div
              key="parents"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Parents who want their children to use the waiting period productively
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Give your teenager valuable skills and confidence while they wait for their next educational step.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CAREER LABS ENROLLMENT ════════════════ */}
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
              Ready to Gain Immediate Skills?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our Career Labs and walk away with practical skills, confidence, and portfolio items that demonstrate your abilities to employers and educational institutions.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="/contact">
                Enroll Now
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