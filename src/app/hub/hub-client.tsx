"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Users,
  Radio,
  Key,
  Package,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Award,
  Headphones,
  Zap,
  Globe,
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

/* ─── Key Message ─── */
const keyMessage = {
  school: "The School organizes learning.",
  hub: "The Hub transforms learning.",
  together: "Both must work together.",
};

/* ─── Hub Programs ─── */
const hubPrograms = [
  {
    id: "lms",
    icon: Monitor,
    tag: "Platform",
    title: "LMS / Platform",
    accent: "from-blue-500/10 to-indigo-500/10",
    borderAccent: "border-blue-100",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    description:
      "Our Learning Management System delivers platform-enabled learning for students and educators—accessible, structured, and interactive. Whether you're a student accessing course materials, a teacher managing assignments, or a parent tracking progress, the LMS provides a seamless digital experience that extends learning beyond the classroom walls.",
    features: [
      "Course management and content delivery",
      "Assignment submission and grading",
      "Progress tracking and analytics",
      "Interactive learning resources",
      "Student and teacher dashboards",
      "Parent access and progress monitoring",
      "Mobile-friendly interface",
    ],
    cta: "Login to LMS",
    ctaExternal: true,
  },
  {
    id: "programs",
    icon: Users,
    tag: "Development",
    title: "Training & Programs",
    accent: "from-purple-500/10 to-violet-500/10",
    borderAccent: "border-purple-100",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    description:
      "Teacher training, parent workshops, and professional development programs designed to uplift educational standards across the community. We believe that investing in educators and parents is just as important as investing in students—when teachers grow, classrooms transform; when parents are equipped, homes become learning environments.",
    features: [
      "Teacher certification and professional development",
      "Parent engagement workshops",
      "Instructional design training",
      "Cambridge methodology workshops",
      "Islamic pedagogy seminars",
      "Educational leadership programs",
      "Community education initiatives",
    ],
    cta: "View Programs",
  },
  {
    id: "radio",
    icon: Radio,
    tag: "Media",
    title: "Radio Program",
    accent: "from-rose-500/10 to-pink-500/10",
    borderAccent: "border-rose-100",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-700",
    description:
      "Engaging discussions on education, faith, and community—broadcasting insights and inspiration for families and educators. Our radio program reaches beyond the school walls to impact the broader community, creating conversations that matter about raising the next generation with purpose, values, and excellence.",
    features: [
      "Weekly educational discussions",
      "Faith and family focused content",
      "Expert interviews and panels",
      "Community Q&A sessions",
      "Student spotlight segments",
      "Parenting tips and advice",
      "Partnership and sponsorship opportunities",
    ],
    cta: "Learn More",
  },
  {
    id: "access",
    icon: Key,
    tag: "Membership",
    title: "Edu Hub Access",
    accent: "from-amber-500/10 to-yellow-500/10",
    borderAccent: "border-amber-100",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    description:
      "Membership and subscription offerings with exclusive benefits, resources, and onboarding for the ClearPath ecosystem. Edu Hub Access is your gateway to premium content, priority enrollment, discounted programs, and a community of like-minded educators and parents committed to excellence.",
    features: [
      "Premium content library access",
      "Priority program enrollment",
      "Discounted training and workshops",
      "Exclusive community forums",
      "Early access to new products",
      "Monthly newsletter and insights",
      "Dedicated support channel",
    ],
    cta: "Get Access",
  },
  {
    id: "products",
    icon: Package,
    tag: "Resources",
    title: "Products",
    accent: "from-teal-500/10 to-cyan-500/10",
    borderAccent: "border-teal-100",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    description:
      "Learning resources, digital tools, and publications designed to support students, teachers, and the broader educational community. Every product we create carries the ClearPath standard—thoughtfully designed, practically useful, and aligned with our mission of Consciousness, Competence, and Character.",
    features: [
      "Curriculum-aligned study materials",
      "Digital learning tools and apps",
      "Teacher resource packs",
      "Islamic education publications",
      "Assessment preparation guides",
      "Professional development workbooks",
      "Educational merchandise",
    ],
    cta: "Browse Products",
  },
];

export default function HubPage() {
  return (
    <>
      <PageHero
        badge="The Hub"
        title="Transforming Learning"
        titleAccent="Beyond the Classroom"
        subtitle="The Hub transforms learning. Through our platform, programs, media, and products, we extend the ClearPath experience far beyond our walls—impacting communities and shaping futures at scale."
      />

      {/* ─── Key Message ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
              <span className="font-semibold text-cp-green">{keyMessage.school}</span>{" "}
              <span className="font-semibold text-cp-gold">{keyMessage.hub}</span>{" "}
              <span className="text-muted-foreground">{keyMessage.together}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Hub Sections ─── */}
      {hubPrograms.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 sm:py-24 ${index % 2 === 0 ? "bg-cp-cream" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col lg:flex-row gap-10 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 ${program.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <program.icon className={`w-5 h-5 ${program.iconColor}`} />
                  </div>
                  <span
                    className={`text-xs font-semibold ${program.iconColor} ${program.iconBg} px-3 py-1 rounded-full`}
                  >
                    {program.tag}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-4">
                  {program.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
                <Button
                  asChild
                  className={`${
                    program.ctaExternal
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-cp-green hover:bg-cp-green-light text-white"
                  } font-semibold rounded-full group/btn`}
                >
                  <Link href="/contact">
                    {program.cta}
                    {program.ctaExternal ? (
                      <ExternalLink className="w-4 h-4 ml-2" />
                    ) : (
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </Button>
              </div>

              {/* Features Side */}
              <div className="flex-1 w-full">
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
                  <h3 className="font-semibold text-cp-green mb-4 text-sm uppercase tracking-wider">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {program.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-foreground/75"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cp-green mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── Hub Ecosystem CTA ─── */}
      <section className="py-20 sm:py-24 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Join the ClearPath Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you&apos;re a parent looking for quality education, a teacher
              seeking professional growth, or an organization interested in
              partnership—there&apos;s a place for you in the Hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cp-green/20 text-cp-green hover:bg-cp-green hover:text-white rounded-full px-8"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
