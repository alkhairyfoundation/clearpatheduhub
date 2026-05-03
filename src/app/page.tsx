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
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {target}{suffix}
    </motion.span>
  );
}

/* ─── Stat Items ─── */
const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "2", label: "Curriculum Tracks" },
  { value: "3", label: "Core Values (3Cs)" },
  { value: "5+", label: "Hub Programs" },
];

/* ─── Highlights ─── */
const highlights = [
  {
    icon: BookOpen,
    title: "Cambridge & National Curriculum",
    description: "A dual curriculum blending global standards with local relevance, preparing students for both national and international opportunities.",
  },
  {
    icon: Monitor,
    title: "LMS Platform",
    description: "Platform-enabled learning that makes education accessible, interactive, and structured—anytime, anywhere.",
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    description: "Hands-on, inquiry-driven approaches that build real-world skills, critical thinking, and creative problem-solving.",
  },
  {
    icon: Award,
    title: "3Cs Framework",
    description: "Consciousness, Competence, Character—the DNA that guides everything we do and shapes who our students become.",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    text: "ClearPath College has been an exceptional partner in my child's academic and moral growth. The Islamic foundation, combined with academic excellence, has given me peace of mind as a parent. I can confidently say my child is receiving a well-rounded education that prepares them for both this world and the hereafter. Alhamdulillah for ClearPath!",
    name: "Hajia Nafisah Banuso",
    role: "Parent",
  },
  {
    text: "ClearPath College stands out not just for its academic rigor but also for its focus on character development. I have seen significant improvements in my child's discipline, focus, and respect for others. The Cambridge curriculum integration is a welcome development, showing the school's readiness to provide global opportunities for our children.",
    name: "Dr. Raji",
    role: "Parent",
  },
  {
    text: "ClearPath College shaped me into the person I am today. Beyond academics, the school instilled in me discipline, confidence, and a strong moral compass. The teachers were more than educators; they were mentors who guided me every step of the way.",
    name: "Farhat Adedeji",
    role: "Alumnus",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HomePage() {
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
              Consciousness • Competence • Character
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
            A Decade of
            <br />
            <span className="text-gradient-gold">Excellence.</span> A Future of
            <br />
            Purpose.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            ClearPath Edu Hub is an integrated educational ecosystem—combining
            strong school structure with platform-enabled learning, training, media
            and educational products—guided by our DNA: Consciousness, Competence
            and Character.
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
              <Link href="/school">
                Explore The School
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold text-white hover:bg-cp-gold-light font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-cp-gold/25 group"
            >
              <Link href="/hub">
                Explore The Hub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ STATS BAR ════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="py-10 px-6 text-center"
              >
                <p className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ WHY CLEARPATH ════════════════ */}
      <section className="py-20 sm:py-28 bg-cp-cream pattern-islamic relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Why ClearPath Edu Hub
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              An Ecosystem Built for Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of proven excellence, now evolving into a comprehensive
              educational ecosystem that transforms learning both inside and
              beyond the classroom.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-cp-green/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-cp-gold/15"
              >
                <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-4 group-hover:bg-cp-green/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-cp-green group-hover:text-cp-gold transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-cp-green text-base mb-2">
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

      {/* ════════════════ TWO ARMS ════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Two Arms. One Institution.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The School organizes learning. The Hub transforms learning. Both
              work together as one integrated system.
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
                    Elementary through Advanced School—structured, faith-centered education
                    with Cambridge & National Curriculum, Islamic values, and
                    leadership development from EYFS to post-secondary.
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
              <div className="absolute inset-0 bg-gradient-to-br from-cp-gold via-cp-gold to-[#9a7d25]" />
              <div className="absolute inset-0 pattern-dots opacity-15" />
              <div className="relative p-8 sm:p-10 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-3">
                    The Hub
                  </h3>
                  <p className="text-white/85 leading-relaxed mb-2">
                    LMS platform, training programs, radio, educational products,
                    and membership access—extending the ClearPath experience far
                    beyond our walls.
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

      {/* ════════════════ THE 3Cs ════════════════ */}
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
              Our DNA
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              The 3Cs That Guide Us
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Eye,
                title: "Consciousness",
                desc: "Awareness of self, purpose, and responsibility to Allah and society. We cultivate minds that understand their role in the world and their duty to serve with intention and clarity.",
              },
              {
                icon: Target,
                title: "Competence",
                desc: "Mastery of knowledge and skills that create real value. We equip our students and community with the tools, training, and expertise needed to excel in an ever-evolving world.",
              },
              {
                icon: Heart,
                title: "Character",
                desc: "Integrity, adab, and moral excellence in all dealings. True success begins with character—grounded in Islamic values, expressed through dignity, respect, and responsibility.",
              },
            ].map((item, i) => (
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
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="py-20 sm:py-28 section-gradient-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
              What Our Community Says
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-7"
              >
                <Quote className="w-8 h-8 text-cp-gold/30 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-cp-gold text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="py-20 sm:py-24 bg-cp-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Ready to Join the ClearPath Family?
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Admissions for the 2026/2027 Academic Session are now open.
              Entrance assessments begin May 9th. Take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/school#admissions">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cp-green/20 text-cp-green hover:bg-cp-green hover:text-white rounded-full px-8"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
