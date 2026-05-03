"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageHero from "@/components/page-hero";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } as const },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const timelineEvents = [
  {
    year: "2016",
    title: "Founded",
    description:
      "ClearPath College opens its doors in Ibadan with a vision for faith-centered academic excellence. What begins as a single school with a handful of students and a big dream quickly establishes itself as a community committed to raising conscious, competent, and principled young Muslims.",
  },
  {
    year: "2018",
    title: "Growing Roots",
    description:
      "The school expands its curriculum to include Cambridge International alongside the Nigerian National Curriculum, signaling a commitment to global standards while maintaining local relevance. Student enrollment grows as word spreads about the ClearPath difference.",
  },
  {
    year: "2020",
    title: "Expanding Impact",
    description:
      "ClearPath expands to include Elementary education, creating a complete pathway from early years through secondary school. Despite global challenges, the school community grows stronger, demonstrating resilience and adaptability in delivering quality education.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description:
      "The school begins integrating technology more deeply into its learning approach, laying the groundwork for the LMS platform and project-based learning methodology. Teacher training programs are formalized to ensure every educator meets the ClearPath standard.",
  },
  {
    year: "2026",
    title: "Rebrand & Hub Launch",
    description:
      "Marking a decade of existence, ClearPath evolves into ClearPath Edu Hub—an integrated system that combines a strong academic school with a forward-thinking learning ecosystem. The Hub extends ClearPath's impact through platform-enabled learning, training, media, and products.",
  },
  {
    year: "2036",
    title: "Vision for the Next Decade",
    description:
      "Our vision for the next decade is bold: to become a leading educational ecosystem that impacts communities far beyond Ibadan. Through the Hub's platform, programs, and partnerships, we aim to transform education at scale—raising a generation that embodies Consciousness, Competence, and Character.",
  },
];

const threeCs = [
  {
    icon: Eye,
    title: "Consciousness",
    description:
      "Awareness of self, purpose, and responsibility to Allah and society. We cultivate minds that understand their role in the world and their duty to serve with intention and clarity. A conscious student doesn't just learn—they understand why they learn, and they use that knowledge with purpose.",
    aspects: [
      "Self-awareness and personal responsibility",
      "Spiritual consciousness and connection to Allah",
      "Social awareness and community responsibility",
      "Environmental stewardship",
    ],
  },
  {
    icon: Target,
    title: "Competence",
    description:
      "Mastery of knowledge and skills that create real value. We equip our students and community with the tools, training, and expertise needed to excel in an ever-evolving world. Competence isn't just about passing exams—it's about having the skills and confidence to solve real problems and create meaningful impact.",
    aspects: [
      "Academic mastery and critical thinking",
      "Technical and digital literacy",
      "Professional and career readiness",
      "Practical problem-solving skills",
    ],
  },
  {
    icon: Heart,
    title: "Character",
    description:
      "Integrity, adab, and moral excellence in all dealings. We believe that true success begins with character—grounded in Islamic values, expressed through dignity, respect, and responsibility. Character is the foundation upon which consciousness and competence are built. Without it, knowledge is dangerous and skills are misused.",
    aspects: [
      "Islamic values and adab in all interactions",
      "Honesty, integrity, and trustworthiness",
      "Respect for others and self-discipline",
      "Service orientation and compassion",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="A Decade of Impact."
        titleAccent="The Next Chapter Begins."
        subtitle="From a single college in 2016 to a comprehensive educational ecosystem in 2026—ClearPath has spent ten years building a legacy of faith-centered excellence. Now, we're stepping into a new era as ClearPath Edu Hub."
        arabic="مدرسة المحجة البيضاء"
      />

      {/* ─── Our Story ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                In 2016, ClearPath College opened its doors in Ibadan with a
                simple but powerful conviction: that Muslim children deserve an
                education that doesn't force them to choose between academic
                excellence and Islamic values. The founding team believed that
                both could coexist—and that, in fact, they must coexist for
                education to be truly transformative.
              </p>
              <p>
                What began as a single college with a handful of students has
                grown over ten years into a comprehensive educational
                institution. Along the way, we expanded to include elementary
                education, integrated the Cambridge International Curriculum,
                invested in teacher development, and built a school culture
                rooted in what we call the 3Cs: Consciousness, Competence, and
                Character.
              </p>
              <p>
                As we mark a decade of existence, we are not just celebrating
                the past—we are stepping into a new phase of growth, excellence,
                and purpose. ClearPath is evolving: we are now operating as
                ClearPath Edu Hub—an integrated system that combines a strong
                academic school with a forward-thinking learning ecosystem. The
                School organizes learning. The Hub transforms learning. Both
                must work together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Rebrand ─── */}
      <section className="py-16 sm:py-20 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-5">
              The Rebrand
            </span>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-cp-gold/20 rounded-3xl px-8 py-6 shadow-sm">
              <span className="font-[family-name:var(--font-playfair)] text-xl text-cp-green font-semibold">
                ClearPath College
              </span>
              <span className="text-cp-gold text-3xl">→</span>
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-[family-name:var(--font-playfair)] text-xl text-cp-green font-bold">
                  ClearPath Edu Hub
                </span>
                <span className="text-cp-gold text-sm">مدرسة المحجة البيضاء</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
              This is not just a name change—it is a statement of intent. ClearPath
              Edu Hub represents our evolution from a school to an ecosystem. We
              are building a system that will impact beyond our walls, by the
              permission of Allah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
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
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ten years of growth, impact, and purpose—and we&apos;re just getting
              started.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cp-green/20 via-cp-gold/30 to-cp-green/20 sm:-translate-x-px" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-10 ${
                    index % 2 !== 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-cp-green text-white font-[family-name:var(--font-playfair)] font-bold text-xs flex items-center justify-center shadow-lg shadow-cp-green/20">
                      {event.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      index % 2 === 0
                        ? "sm:pr-8 sm:text-right"
                        : "sm:pl-8 sm:text-left"
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The 3Cs ─── */}
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
              Our DNA
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              The 3Cs That Guide Everything
            </h2>
            <p className="text-cp-gold font-semibold tracking-wider text-sm uppercase">
              Consciousness • Competence • Character
            </p>
          </motion.div>

          <div className="space-y-10">
            {threeCs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-50 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-cp-green/[0.06] rounded-2xl flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-cp-green" />
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="lg:w-72 shrink-0">
                    <div className="bg-cp-cream rounded-2xl p-5">
                      <h4 className="text-sm font-semibold text-cp-green mb-3 uppercase tracking-wider">
                        Key Aspects
                      </h4>
                      <ul className="space-y-2">
                        {item.aspects.map((aspect) => (
                          <li
                            key={aspect}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <span className="w-1.5 h-1.5 bg-cp-gold rounded-full mt-1.5 shrink-0" />
                            <span>{aspect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Staff & Leadership Note ─── */}
      <section className="py-20 sm:py-24 section-gradient-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-5">
              Our Commitment
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              We are not just a school anymore. We are building a system that
              will impact beyond our walls. Let us step into the next decade
              with sincerity, consistency and measurable outcomes—by the
              permission of Allah.
            </p>
            <p className="text-white/70 text-sm italic mb-8">
              — Management, ClearPath Edu Hub
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full px-8 group"
            >
              <Link href="/contact">
                Join the ClearPath Family
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
