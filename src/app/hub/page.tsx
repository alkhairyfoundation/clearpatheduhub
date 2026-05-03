import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hub",
  description:
    "ClearPath Hub transforms learning beyond the classroom through our LMS platform, training programs, radio, educational products, and membership access.",
  alternates: { canonical: "/hub" },
  openGraph: {
    title: "The Hub | ClearPath Edu Hub",
    description:
      "Transforming learning beyond the classroom — LMS platform, training programs, radio, educational products, and membership access.",
  },
};

export { default } from "./hub-client";
