"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LmsHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/lms/auth/logout", { method: "POST" });
    router.push("/lms/login");
    router.refresh();
  }

  return (
    <header className="bg-cp-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors shrink-0"
            title="Back to website"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">Back to site</span>
          </Link>
          <div className="h-8 w-px bg-white/20" />
          <div className="min-w-0">
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white leading-tight block truncate">
              Clear<span className="text-cp-gold">Path</span> Learning Zone
            </span>
            <span className="text-cp-gold text-[10px] tracking-[0.18em] uppercase block">
              {title}
            </span>
          </div>
          {subtitle && (
            <span className="hidden md:inline text-white/50 text-sm truncate">
              • {subtitle}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-white/80 hover:text-white hover:bg-white/10 gap-2 shrink-0"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Log out</span>
        </Button>
      </div>
    </header>
  );
}
