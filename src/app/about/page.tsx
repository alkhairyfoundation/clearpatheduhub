import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ClearPath Edu Hub — a decade of impact from 2016 to 2026. Learn about our story, the rebrand, our 3Cs DNA, and our vision for the next decade.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | ClearPath Edu Hub",
    description:
      "A decade of impact — our story, the rebrand, our 3Cs DNA, and our vision for the future.",
  },
};

export { default } from "./about-client";
