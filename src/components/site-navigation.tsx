"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "The School",
    href: "/school",
    children: [
      { label: "About the School", href: "/school#about" },
      { label: "Elementary", href: "/school#elementary" },
      { label: "College (JSS/SSS)", href: "/school#college" },
      { label: "Advanced School", href: "/school#advanced" },
      { label: "Admissions", href: "/school#admissions" },
    ],
  },
  {
    label: "The Hub",
    href: "/hub",
    children: [
      { label: "LMS Platform", href: "/hub#lms" },
      { label: "Training & Programs", href: "/hub#programs" },
      { label: "Radio Program", href: "/hub#radio" },
      { label: "Edu Hub Access", href: "/hub#access" },
      { label: "Products", href: "/hub#products" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on navigation via click handlers

  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-cp-green shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white tracking-tight">
                Clear<span className="text-cp-gold">Path</span>
              </span>
              <span className="text-cp-gold text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
                Edu Hub
              </span>
            </div>
            <span className="hidden lg:block text-white/70 text-sm font-light border-l border-white/20 pl-3 leading-relaxed">
              مدرسة المحجة البيضاء
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg flex items-center gap-1 ${
                      pathname.startsWith(link.href)
                        ? "text-cp-gold"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cp-green/5 hover:text-cp-green transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    pathname === link.href
                      ? "text-cp-gold"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:08064270291"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Button
              asChild
              className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cp-gold/25"
            >
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-cp-green border-cp-green-light w-80 p-0"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                      Clear<span className="text-cp-gold">Path</span>
                    </span>
                    <span className="text-cp-gold text-xs tracking-[0.2em] uppercase">
                      Edu Hub
                    </span>
                  </div>
                </div>
                {/* Mobile Nav Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  {navLinks.map((link) => (
                    <div key={link.href} className="mb-1">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          pathname === link.href || (link.children && pathname.startsWith(link.href))
                            ? "text-cp-gold bg-white/5"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <div className="ml-4 border-l border-white/10 pl-3 mt-1 mb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-white/60 hover:text-cp-gold transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                {/* Mobile CTA */}
                <div className="p-6 border-t border-white/10">
                  <Button
                    asChild
                    className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full w-full"
                  >
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

