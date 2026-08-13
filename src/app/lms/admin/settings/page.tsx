import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { requireRole } from "@/lib/session";
import LmsHeader from "@/components/lms/LmsHeader";
import FocusSettingsForm from "@/components/lms/FocusSettingsForm";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  await requireRole(["ADMIN"]);
  return (
    <>
      <LmsHeader title="Focus Settings" subtitle="Administrator" />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/lms/teacher"
          className="inline-flex items-center gap-2 text-sm text-cp-green/70 hover:text-cp-green mb-5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to monitoring
        </Link>
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-1">
          Live monitoring thresholds
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          These rules decide when students are marked GREEN, YELLOW, or RED in the live zone.
        </p>
        <FocusSettingsForm />
      </main>
    </>
  );
}
