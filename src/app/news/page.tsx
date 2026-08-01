import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Announcements - ClearPath Edu Hub",
  description:
    "Latest news and announcements from ClearPath Edu Hub — including our Summer Support, Enrichment & Intervention Programme, Computer-Based Diagnostic Assessments, and our commitment to where learning comes first.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News & Announcements | ClearPath Edu Hub",
    description:
      "Latest news and announcements from ClearPath Edu Hub — where learning comes first.",
  },
};

export { default } from "./news-client";
