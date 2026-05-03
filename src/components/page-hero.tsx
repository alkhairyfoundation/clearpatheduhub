"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  arabic?: string;
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  arabic,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden section-gradient-green pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated decorative elements */}
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
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cp-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-gradient-gold">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        {arabic && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-cp-gold/80 text-base sm:text-lg mb-4"
          >
            {arabic}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
