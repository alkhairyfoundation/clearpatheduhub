"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  BarChart3,
  LifeBuoy,
  Rocket,
  ClipboardCheck,
  Calendar,
  Heart,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/page-hero";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } as const },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const summerProgrammes = [
  {
    icon: ClipboardCheck,
    title: "Support",
    description:
      "For learners who need to strengthen foundational knowledge and skills.",
  },
  {
    icon: LifeBuoy,
    title: "Intervention",
    description:
      "For learners with identified learning gaps requiring targeted instruction.",
  },
  {
    icon: Rocket,
    title: "Enrichment",
    description:
      "For learners who are ready to deepen their understanding and extend their learning.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        promise="Where Learning Comes First"
        badge="News & Announcements"
        title="Learning Comes First."
        titleAccent="In Everything We Share."
        subtitle="News, updates, and announcements from ClearPath Edu Hub—what we're doing to ensure that every child learns, and how you can be part of it."
        arabic="مدرسة المحجة البيضاء"
      />

      {/* ─── End of Session Letter ─── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-cp-cream rounded-3xl p-8 sm:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-cp-green/[0.06] rounded-xl flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-cp-green" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cp-gold uppercase tracking-wider">
                  Latest Announcement
                </span>
                <p className="text-sm text-muted-foreground">
                  End of Academic Session • Summer 2026
                </p>
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-5">
              Alhamdulillāh! Another Successful Academic Session Concludes
            </h2>

            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                As we bring another rewarding academic session to a close, we
                express our deepest gratitude to Allah (SWT) for His guidance,
                protection, and countless blessings. We also extend our sincere
                appreciation to our parents for their continued trust and
                partnership throughout the session.
              </p>
              <p>
                This term marks an important milestone in the journey of
                ClearPath. In line with our renewed commitment to becoming a
                learning-centred school, we introduced a{" "}
                <span className="font-semibold text-cp-green">
                  Computer-Based Diagnostic Assessment
                </span>{" "}
                alongside our regular end-of-term examinations. While promotional
                examinations measure what students have achieved during the term,
                diagnostic assessments help us identify each learner&apos;s
                strengths, areas of mastery, and specific learning gaps. The
                insights gained from this assessment will shape our approach to
                learning in the months ahead.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Summer Learning Programme ─── */}
      <section className="py-20 sm:py-24 section-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              <Calendar className="w-4 h-4" />
              Beginning Monday, 3 August 2026
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
              Summer Support, Enrichment &amp; Intervention Programme
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
              Rather than offering the same programme to every learner, students
              will receive learning experiences based on their individual needs.
              Our goal is to ensure that every child continues to make meaningful
              progress during the holiday and returns to school stronger, more
              confident, and better prepared for the new academic session.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {summerProgrammes.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-cp-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Baseline Assessment ─── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-cp-cream rounded-3xl p-8 sm:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-cp-blue-lighter rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-cp-blue" />
              </div>
              <span className="text-xs font-semibold text-cp-blue uppercase tracking-wider">
                Preparing for the New Session
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-5">
              Baseline Assessment When School Resumes
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              When school resumes, students will complete a Baseline Assessment.
              This is not an examination for promotion or ranking. Instead, it
              enables our teachers to determine each learner&apos;s current level
              of understanding so that instruction begins from where the child
              truly needs support.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              This reflects our commitment to teaching every child according to
              their learning needs rather than making assumptions about what they
              already know.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Looking Ahead ─── */}
      <section className="py-20 sm:py-24 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100"
          >
            <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6 text-cp-green" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-5">
              Looking Ahead
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed mb-8">
              <p>
                As ClearPath enters its second decade, our focus is clearer than
                ever. We are committed to ensuring that every learner grows in
                consciousness, character, and competence through meaningful
                learning.
              </p>
              <p>
                Because at ClearPath,{" "}
                <span className="font-bold text-cp-green">
                  learning comes first.
                </span>
              </p>
              <p>
                We look forward to sharing more about this exciting new direction
                during our forthcoming{" "}
                <span className="font-semibold text-cp-green">
                  Parent Engagement Meeting
                </span>
                , where we will present our vision for the next decade and
                strengthen our partnership with parents in helping every child
                succeed.
              </p>
              <p className="italic text-foreground/60">
                May Allah (SWT) continue to bless our children with beneficial
                knowledge, righteous character, and success in this world and the
                Hereafter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
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
                className="border-cp-green/20 text-cp-green hover:bg-cp-green hover:text-white rounded-full px-8"
              >
                <Link href="/contact">Book a School Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Commitment ─── */}
      <section className="py-16 sm:py-20 hero-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-10 h-10 text-cp-gold mx-auto mb-5" />
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-4">
              At ClearPath, Learning Comes First.
            </h2>
            <p className="text-white/80 mb-6">
              Every child can learn. Every learner deserves to grow.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cp-gold" /> Known
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cp-gold" /> Monitored
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cp-gold" /> Supported
              </span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cp-gold" /> Developed
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
