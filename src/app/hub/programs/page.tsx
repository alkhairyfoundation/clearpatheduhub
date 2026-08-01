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
  Sparkles,
  Brain,
  Globe,
  Palette,
  GraduationCap,
  Rocket,
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
    cta: "Explore LMS",
    ctaExternal: false,
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
    ctaExternal: false,
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
    ctaExternal: false,
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
    ctaExternal: false,
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
      "Learning resources, digital tools, and publications designed to support students, teachers, and the broader educational community. Every product we create carries the ClearPath standard—thoughtfully designed, practically useful, and aligned with our mission of Consciousness, Character, and Competence.",
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
    ctaExternal: false,
  },
];

export default function HubProgramsPage() {
  return (
    <>
      <PageHero
        badge="Hub Programs"
        title="Transform Your Skills"
        titleAccent="With Our Specialized Programs"
        subtitle="Explore our four specialized hub programs designed to transform learning beyond the classroom. From our cutting-edge LMS platform to hands-on training programs, we have something for every learner and educator."
      />

      {/* Key Message */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
              <span className="font-semibold text-cp-green">The School organizes learning.</span>{" "}
              <span className="font-semibold text-cp-gold">The Hub transforms learning.</span>{" "}
              <span className="text-muted-foreground">Both must work together.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hub Programs Grid */}
      <section className="py-20 sm:py-24 bg-cp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Our Hub Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Hub extends the ClearPath experience through four specialized programs, each designed to
              transform learning and empower our community with practical skills and knowledge.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {hubPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={fadeUp}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-cp-green/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-cp-gold/15"
              >
                <div className="mb-6">
                  <div className={`w-14 h-14 ${program.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-cp-green mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-cp-green mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  asChild
                  className={`mt-6 w-full ${
                    program.ctaExternal
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-cp-green hover:bg-cp-green-light text-white"
                  } font-semibold rounded-full py-3`}
                >
                  <Link href={`/hub#${program.id}`}>
                    {program.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Detail Section */}
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
              Specialized Training Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into our specialized training programs that offer hands-on experience,
              industry-relevant skills, and clear pathways to career advancement.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Future Educators Academy */}
            <motion.div
              key="future-educators"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="text-emerald-700 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                  Teacher Training
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Future Educators Academy
              </h3>
              <p className="text-foreground/70">
                Prepare for a career in education with our comprehensive teacher training program. Learn
                21st-century teaching methods, classroom technology, communication skills, and practical
                teaching strategies before you even step into a lecture hall.
              </p>
              <div className="mt-4">
                <Button asChild size="sm" className="bg-cp-green hover:bg-cp-green-light text-white font-semibold px-4 py-2 rounded-full">
                  <Link href="/hub/programs/future-educators">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Skill-to-Enterprise */}
            <motion.div
              key="skill-to-enterprise"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cp-green/10 rounded-xl flex items-center justify-center">
                  <Palette className="w-5 h-5 text-cp-green" />
                </div>
                <span className="text-cp-green font-semibold text-sm bg-cp-green/5 px-3 py-1 rounded-full">
                  Entrepreneurship
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Skill-to-Enterprise Program
              </h3>
              <p className="text-foreground/70">
                Turn your skills into a thriving business. Our entrepreneurship program teaches you how to
                develop business ideas, financial literacy, digital marketing, and leadership skills to build
                and lead ventures.
              </p>
              <div className="mt-4">
                <Button asChild size="sm" className="bg-cp-green hover:bg-cp-green-light text-white font-semibold px-4 py-2 rounded-full">
                  <Link href="/hub/programs/skill-to-enterprise">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Production & Export */}
            <motion.div
              key="production-export"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cp-gold/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-cp-gold" />
                </div>
                <span className="text-cp-gold font-semibold text-sm bg-cp-gold/5 px-3 py-1 rounded-full">
                  International Trade
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Production & Export Starter
              </h3>
              <p className="text-foreground/70">
                Learn the fundamentals of international trade and export business. From product development
                to market analysis, gain the skills needed to succeed in the global marketplace.
              </p>
              <div className="mt-4">
                <Button asChild size="sm" className="bg-cp-green hover:bg-cp-green-light text-white font-semibold px-4 py-2 rounded-full">
                  <Link href="/hub/programs/production-export">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Career Labs */}
            <motion.div
              key="career-labs"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cp-green/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-cp-green" />
                </div>
                <span className="text-cp-green font-semibold text-sm bg-cp-green/5 px-3 py-1 rounded-full">
                  Career Development
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Career Labs
              </h3>
              <p className="text-foreground/70">
                Gain practical, hands-on experience in high-demand fields. Our Career Labs provide
                industry-relevant training, mentorship, and real-world projects to prepare you for your
                chosen career path.
              </p>
              <div className="mt-4">
                <Button asChild size="sm" className="bg-cp-green hover:bg-cp-green-light text-white font-semibold px-4 py-2 rounded-full">
                  <Link href="/hub/programs/career-labs">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-cp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you're looking to start a career in education, launch your own business, or gain
              practical skills for the job market, our Hub programs have you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-green hover:bg-cp-green-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cp-green/20 text-cp-green hover:bg-cp-green hover:text-white rounded-full px-8"
              >
                <Link href="/hub">Back to Hub Overview</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}