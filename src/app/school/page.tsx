import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The School - ClearPath Edu Hub",
  description:
    "ClearPath School provides structured, faith-centered education from EYFS through Grade 12 with Cambridge & National Curriculum, Islamic values, and leadership development. Explore our Elementary, College and Advanced School programs.",
  alternates: { canonical: "/school" },
  openGraph: {
    title: "The School | ClearPath Edu Hub",
    description:
      "From early years through secondary education — structured, faith-centered education with Cambridge & National Curriculum, Islamic values, and leadership development.",
  },
};

export { default } from "./school-client";