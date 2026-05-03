import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ClearPath Edu Hub. Whether you have questions about admissions, programs, or partnerships, we'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | ClearPath Edu Hub",
    description:
      "Get in touch — admissions, programs, partnerships, and general enquiries.",
  },
};

export { default } from "./contact-client";
