"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
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
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-8xl sm:text-9xl font-bold text-white mb-4">
            4<span className="text-gradient-gold">0</span>4
          </h1>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on the right path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-cp-green hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-white/15 group"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base"
            >
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
