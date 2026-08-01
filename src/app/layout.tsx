import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SiteNavigation from "@/components/site-navigation";
import SiteFooter from "@/components/site-footer";
import { Providers } from "@/components/providers";

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
    default: "ClearPath Edu Hub — Where Learning Comes First",
    template: "%s | ClearPath Edu Hub",
  },
  description:
    "ClearPath is a learning-centred school where every child learns. We know every learner, monitor every learner, support every learner, and celebrate every learner's growth in Consciousness, Character, and Competence.",
  keywords: [
    "ClearPath Edu Hub",
    "ClearPath College",
    "Where Learning Comes First",
    "Learning-centred school",
    "Every Child Can Learn",
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
    title: "ClearPath Edu Hub — Where Learning Comes First",
    description:
      "Every child can learn. Every learner deserves to grow. A learning-centred school combining academic excellence with Islamic values and personalised learning.",
    type: "website",
    locale: "en_NG",
    siteName: "ClearPath Edu Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearPath Edu Hub — Where Learning Comes First",
    description:
      "Every child can learn. Every learner deserves to grow. A learning-centred school combining academic excellence with Islamic values and personalised learning.",
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
        <Providers>
          <SiteNavigation />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
