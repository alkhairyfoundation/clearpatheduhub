import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ClearPath Edu Hub Terms of Service — the terms and conditions governing your use of our website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the ClearPath Edu Hub website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, parents, students, and any other persons who access or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              2. Use of Our Services
            </h2>
            <p>
              You may use our website and services for lawful purposes only. You agree not to use our services in any way that could damage, disable, or impair the operation of our website, or interfere with any other party&apos;s use and enjoyment of our services. You must not attempt to gain unauthorized access to any part of our website or systems.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on the ClearPath Edu Hub website, including text, graphics, logos, images, and software, is the property of ClearPath Edu Hub and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              4. Admissions and Enrollment
            </h2>
            <p>
              Admission to ClearPath Edu Hub is subject to availability and the successful completion of our entrance assessment. Submission of an application does not guarantee admission. We reserve the right to modify admissions criteria, fees, and program availability at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              ClearPath Edu Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services. Our website and services are provided on an &ldquo;as is&rdquo; basis without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cp-green mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us at <a href="mailto:cpcibadan@gmail.com" className="text-cp-gold hover:underline">cpcibadan@gmail.com</a> or call <a href="tel:08064270291" className="text-cp-gold hover:underline">0806 427 0291</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
