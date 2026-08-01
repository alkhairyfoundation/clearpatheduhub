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
  ShoppingCart,
  DollarSign,
  Banknote,
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

export default function SkillToEnterprisePage() {
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
              Consciousness • Character • Competence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Turn Your Trade into a Business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            This program is for students learning vocational skills such as tailoring, welding, catering, hairdressing, carpentry, phone repair, makeup, or fashion design. While artisans teach the practical trade, ClearPath teaches the business, digital, and entrepreneurial side.
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
              About Skill-to-Enterprise Program
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
              Summary: This program is for students learning vocational skills such as tailoring, welding, catering, hairdressing, carpentry, phone repair, makeup, or fashion design. While artisans teach the practical trade, ClearPath teaches the business, digital, and entrepreneurial side.
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
            {/* Apprentices */}
            <motion.div
              key="apprentices"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Apprentices
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students currently learning a trade through apprenticeship programs.
              </p>
            </motion.div>

            {/* Vocational learners */}
            <motion.div
              key="vocational-learners"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Vocational learners
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students enrolled in vocational training programs or technical colleges.
              </p>
            </motion.div>

            {/* Secondary school leavers */}
            <motion.div
              key="school-leavers"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Secondary school leavers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recent graduates who want to start working immediately in their chosen trade.
              </p>
            </motion.div>

            {/* Aspiring entrepreneurs */}
            <motion.div
              key="aspiring-entrepreneurs"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Young people who want to become self-employed
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Individuals with trade skills who dream of owning their own business.
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
            {/* Business management */}
            <motion.div
              key="business-management"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Business management
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn the fundamentals of running a successful business including operations, management, and growth strategies.
              </p>
            </motion.div>

            {/* Pricing */}
            <motion.div
              key="pricing"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Pricing
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develop effective pricing strategies that ensure profitability while remaining competitive in your market.
              </p>
            </motion.div>

            {/* Bookkeeping */}
            <motion.div
              key="bookkeeping"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Bookkeeping
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Master essential financial record-keeping practices to track income, expenses, and profitability.
              </p>
            </motion.div>

            {/* Customer service */}
            <motion.div
              key="customer-service"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Customer service
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn how to provide excellent customer service that builds loyalty and encourages repeat business.
              </p>
            </motion.div>

            {/* WhatsApp Business */}
            <motion.div
              key="whatsapp-business"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                WhatsApp Business
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leverage WhatsApp Business tools to connect with customers, showcase products, and manage orders efficiently.
              </p>
            </motion.div>

            {/* Social media marketing */}
            <motion.div
              key="social-media-marketing"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Social media marketing
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn to promote your business effectively on social media platforms to reach more customers and grow your brand.
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn techniques for taking professional-quality photos of your products to showcase them online and in marketing materials.
              </p>
            </motion.div>

            {/* Canva design */}
            <motion.div
              key="canva-design"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Canva design
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create professional marketing materials, social media posts, and business documents using Canva design tools.
              </p>
            </motion.div>

            {/* Personal branding */}
            <motion.div
              key="personal-branding"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Personal branding
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develop a strong personal brand that represents your business values and helps you stand out in your industry.
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
            {/* Business name */}
            <motion.div
              key="business-name"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Business name
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develop a unique, memorable business name that reflects your brand and services.
              </p>
            </motion.div>

            {/* Flyer */}
            <motion.div
              key="flyer"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Flyer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create professional promotional flyers to advertise your services and attract customers.
              </p>
            </motion.div>

            {/* Price list */}
            <motion.div
              key="price-list"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Price list
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develop clear, professional price lists that communicate your services and rates effectively.
              </p>
            </motion.div>

            {/* Customer record sheet */}
            <motion.div
              key="customer-record-sheet"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Customer record sheet
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create systems for tracking customer information, orders, and preferences to build lasting relationships.
              </p>
            </motion.div>

            {/* WhatsApp catalog or business page */}
            <motion.div
              key="whatsapp-catalog"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                WhatsApp catalog or business page
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Set up a professional WhatsApp Business profile or catalog to showcase your products and services.
              </p>
            </motion.div>

            {/* Simple business plan */}
            <motion.div
              key="business-plan"
              variants={fadeUp}
              className="bg-cp-cream rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Simple business plan
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create a basic business plan outlining your goals, strategies, and financial projections.
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive official recognition from ClearPath Edu Hub for completing the Skill-to-Enterprise Program.
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
              Ready to Turn Your Skills into a Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our Skill-to-Enterprise Program and learn how to transform your vocational skills into a thriving business venture.
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