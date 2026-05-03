"use client";

import Link from "next/link";
import { Facebook, Instagram, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "The School", href: "/school" },
  { label: "The Hub", href: "/hub" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const schoolLinks = [
  { label: "About the School", href: "/school#about" },
  { label: "Elementary School", href: "/school#elementary" },
  { label: "College (JSS/SSS)", href: "/school#college" },
  { label: "Advanced School", href: "/school#advanced" },
  { label: "Admissions", href: "/school#admissions" },
];

const hubLinks = [
  { label: "LMS Platform", href: "/hub#lms" },
  { label: "Training & Programs", href: "/hub#programs" },
  { label: "Radio Program", href: "/hub#radio" },
  { label: "Edu Hub Access", href: "/hub#access" },
  { label: "Products", href: "/hub#products" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-cp-green text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                  Clear<span className="text-cp-gold">Path</span>
                </span>
                <span className="text-cp-gold text-sm tracking-[0.2em] uppercase ml-2">
                  Edu Hub
                </span>
              </Link>
            </div>
            <p className="text-cp-gold/80 text-sm mb-3">مدرسة المحجة البيضاء</p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              We&apos;re raising a generation of Muslims who are ready to thrive in
              an ever-changing world. Consciousness • Competence • Character
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/clearpathcollegeIB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/clearpathcollege"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Phone className="w-3 h-3" />
                <a href="tel:08064270291" className="hover:text-white/80 transition-colors">0806 427 0291</a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Mail className="w-3 h-3" />
                <a href="mailto:cpcibadan@gmail.com" className="hover:text-white/80 transition-colors">cpcibadan@gmail.com</a>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-xs">
                <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                <span>Yanbule Street, Bashorun, Ibadan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-cp-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The School */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-cp-gold mb-5">
              The School
            </h4>
            <ul className="space-y-3">
              {schoolLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Hub */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-cp-gold mb-5">
              The Hub
            </h4>
            <ul className="space-y-3">
              {hubLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} ClearPath Edu Hub. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              variant="ghost"
              size="icon"
              className="text-white/30 hover:text-white hover:bg-white/10 rounded-full"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
