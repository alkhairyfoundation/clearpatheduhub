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
  Package,
  Truck,
  Factory,
  ChartIncreasing,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Production and Export Starter Program - ClearPath Edu Hub",
  description:
    "ClearPath Edu Hub's Production and Export Starter Program introduces young entrepreneurs to local production, packaging, branding, product quality, and export awareness for wider markets.",
  alternates: { canonical: "/hub/programs/production-export" },
  openGraph: {
    title: "Production and Export Starter Program | ClearPath Edu Hub",
    description:
      "Learn how to take local products to global markets with ClearPath's Production and Export Starter Program - covering production, packaging, branding, quality control, and export basics.",
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

export default function ProductionExportStarterPage() {
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
            Local Production. Global Thinking.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            This program introduces young entrepreneurs to the basics of local production, packaging, branding, product quality, and export awareness. Students learn how local products can be processed, packaged, branded, and prepared for wider markets.
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
              About Production and Export Starter Program
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
              Summary: This program introduces young entrepreneurs to the basics of local production, packaging, branding, product quality, and export awareness. Students learn how local products can be processed, packaged, branded, and prepared for wider markets.
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
            {/* Secondary school leavers */}
            <motion.div
              key="school-leavers"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Secondary school leavers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Recent graduates interested in starting production-based businesses.
              </p>
            </motion.div>

            {/* Vocational students */}
            <motion.div
              key="vocational-students"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Vocational students
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Students learning production-related trades who want to add business skills.
              </p>
            </motion.div>

            {/* Young entrepreneurs */}
            <motion.div
              key="young-entrepreneurs"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Young entrepreneurs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Individuals with business ideas looking for structured guidance and support.
              </p>
            </motion.div>

            {/* Agriculture/interested students */}
            <motion.div
              key="agriculture-interested"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Students interested in agriculture, production, packaging, and export
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Those passionate about farming, food production, or product creation looking to scale their ideas.
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
            {/* Product branding */}
            <motion.div
              key="product-branding"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Product branding
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn to create unique brand identities that resonate with your target audience and differentiate your products in the market.
              </p>
            </motion.div>

            {/* Packaging */}
            <motion.div
              key="packaging"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Packaging
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn effective packaging design that protects products, appeals to customers, and meets regulatory requirements.
              </p>
            </motion.div>

            {/* Value addition */}
            <motion.div
              key="value-addition"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Value addition
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn techniques to enhance product value through processing, formulation, or presentation that justifies premium pricing.
              </p>
            </motion.div>

            {/* Quality control */}
            <motion.div
              key="quality-control"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Quality control
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn quality assurance methods and testing procedures to ensure consistent product excellence and customer satisfaction.
              </p>
            </motion.div>

            {/* Product photography */}
            <motion.div
              key="product-photography"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Product photography
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn techniques for taking professional-quality photos of your products to showcase them online and in marketing materials.
              </p>
            </motion.div>

            {/* Local market research */}
            <motion.div
              key="local-market-research"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[font-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Local market research
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn how to research and understand local market needs, preferences, and competition to inform product development.
              </p>
            </motion.div>

            {/* Export basics */}
            <motion.div
              key="export-basics"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Export basics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Learn the fundamentals of international trade, including documentation, regulations, and logistics for exporting products.
              </p>
            </motion.div>

            {/* Sales planning */}
            <motion.div
              key="sales-planning"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Sales planning
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Develop effective sales strategies and plans to reach customers and achieve business goals.
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
            {/* Product concept */}
            <motion.div
              key="product-concept"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Product concept
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Develop and refine your product idea into a viable concept with clear value proposition and target market.
              </p>
            </motion.div>

            {/* Product label */}
            <motion.div
              key="product-label"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Product label
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Create professional product labels that include all required information and appeal to your target customers.
              </p>
            </motion.div>

            {/* Packaging idea */}
            <motion.div
              key="packaging-idea"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Packaging idea
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Develop innovative packaging concepts that protect your product, enhance shelf appeal, and align with your brand.
              </p>
            </motion.div>

            {/* Product photos or sample */}
            <motion.div
              key="product-photos-sample"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Product photos or sample
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Create product samples and professional photos to showcase your work and test market response.
              </p>
            </motion.div>

            {/* Basic sales plan */}
            <motion.div
              key="basic-sales-plan"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Basic sales plan
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Create a simple but effective sales plan outlining your target market, pricing strategy, and sales channels.
              </p>
            </motion.div>

            {/* ClearPath certificate */}
            <motion.div
              key="clearpath-certificate"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3>
                ClearPath certificate
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed>
                Receive official recognition from ClearPath Edu Hub for completing the Production and Export Starter Program.
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
              Ready to Start Your Production Journey?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto>
              Join our Production and Export Starter Program and learn how to transform local ideas into products ready for wider markets.
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