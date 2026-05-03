import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ClearPath Edu Hub Privacy Policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              1. Information We Collect
            </h2>
            <p>
              ClearPath Edu Hub collects personal information that you voluntarily provide to us when you use our website, register for programs, apply for admission, or contact us. This information may include your name, email address, phone number, address, and any other details you choose to provide. We also collect non-personal information such as browser type, device information, and usage data to improve our website experience.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to process admissions applications, respond to your enquiries, deliver educational programs and services, send relevant communications about our programs and events, improve our website and services, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              3. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              4. Children&apos;s Privacy
            </h2>
            <p>
              As an educational institution serving children, we take children&apos;s privacy seriously. We collect personal information about students only with the consent of their parents or legal guardians. Student information is used solely for educational purposes, and we maintain strict access controls to ensure that student data is only accessible to authorized personnel.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:cpcibadan@gmail.com" className="text-cp-gold hover:underline">cpcibadan@gmail.com</a> or call <a href="tel:08064270291" className="text-cp-gold hover:underline">0806 427 0291</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
