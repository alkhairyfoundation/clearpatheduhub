import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SiteNavigation from "@/components/site-navigation";
import SiteFooter from "@/components/site-footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ClearPath Edu Hub — Consciousness • Competence • Character",
    template: "%s | ClearPath Edu Hub",
  },
  description:
    "ClearPath Edu Hub is an integrated educational ecosystem—combining strong school structure with platform-enabled learning, training, media and educational products—guided by our DNA: Consciousness, Competence and Character.",
  keywords: [
    "ClearPath Edu Hub",
    "ClearPath College",
    "Islamic School",
    "Cambridge Curriculum",
    "Ibadan School",
    "مدرسة المحجة البيضاء",
    "Nigerian School",
    "Islamic Education",
    "LMS Platform",
    "Edu Hub",
  ],
  authors: [{ name: "ClearPath Edu Hub" }],
  creator: "ClearPath Edu Hub",
  publisher: "ClearPath Edu Hub",
  metadataBase: new URL("https://clearpathedu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ClearPath Edu Hub — A Decade of Excellence. A Future of Purpose.",
    description:
      "An integrated educational ecosystem combining strong school structure with platform-enabled learning, training, media and educational products.",
    type: "website",
    locale: "en_NG",
    siteName: "ClearPath Edu Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearPath Edu Hub — A Decade of Excellence. A Future of Purpose.",
    description:
      "An integrated educational ecosystem combining strong school structure with platform-enabled learning, training, media and educational products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-cp-cream text-foreground`}
      >
        <SiteNavigation />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
