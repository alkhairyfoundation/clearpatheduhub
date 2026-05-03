"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageHero from "@/components/page-hero";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["0806 427 0291", "0816 255 4665"],
    href: "tel:08064270291",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["cpcibadan@gmail.com"],
    href: "mailto:cpcibadan@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Yanbule Street, Bashorun", "Ibadan, Oyo State, Nigeria"],
    href: null,
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday – Friday: 8:00 AM – 4:00 PM",
      "Saturday: 9:00 AM – 1:00 PM",
    ],
    href: null,
  },
];

const faqs = [
  {
    q: "How do I apply for admission?",
    a: "You can obtain the application form in-person at the Client Service Office or online via our admissions portal. Entrance assessments begin May 9th for the 2026/2027 academic session.",
  },
  {
    q: "What curriculum does ClearPath follow?",
    a: "We offer a dual curriculum: the Cambridge International Curriculum (Checkpoint, IGCSE) alongside the Nigerian National Curriculum (NERDC, BECE, WAEC). This ensures our students are competitive both locally and globally.",
  },
  {
    q: "Is Islamic education integrated into the curriculum?",
    a: "Yes, Islamic values and teachings are integrated seamlessly into daily school life—through Qur'an classes, Hadith studies, character development sessions, and spiritual mentoring across all levels.",
  },
  {
    q: "How can I access the LMS platform?",
    a: "The LMS platform is accessible through the Hub section of our website. Students, teachers, and parents each have dedicated dashboards. Login credentials are provided upon enrollment or registration.",
  },
  {
    q: "Does ClearPath offer programs for non-students?",
    a: "Yes! Through the Hub, we offer teacher training, parent workshops, professional development programs, radio programs, and educational products that are available to the broader community.",
  },
  {
    q: "What are the school fees?",
    a: "Please contact our admissions office directly at 0806 427 0291 or visit the school for detailed fee information. We strive to keep our programs accessible while maintaining the highest standards.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "", interest: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have questions about admissions, programs, or partnerships—reach out and let's start a conversation."
      />

      {/* ─── Contact Info Cards ─── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-cp-cream rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 bg-cp-green/[0.07] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-cp-green" />
                </div>
                <h3 className="font-semibold text-cp-green text-sm mb-2">
                  {item.title}
                </h3>
                {item.details.map((d, i) =>
                  item.href && i === 0 ? (
                    <a
                      key={d}
                      href={item.href}
                      className="block text-muted-foreground text-sm hover:text-cp-green transition-colors"
                    >
                      {d}
                    </a>
                  ) : (
                    <p key={d} className="text-muted-foreground text-sm">
                      {d}
                    </p>
                  )
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="section-gradient-green rounded-3xl p-8 sm:p-10 text-white mb-6">
                <MessageSquare className="w-8 h-8 text-cp-gold mb-4" />
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-3">
                  Send Us a Message
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Fill out the form and our team will get back to you within one
                  business day. For urgent enquiries, please call us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cp-gold" />
                    <span className="text-white/80 text-sm">
                      0806 427 0291 | 0816 255 4665
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cp-gold" />
                    <span className="text-white/80 text-sm">
                      cpcibadan@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-cp-gold mt-0.5" />
                    <span className="text-white/80 text-sm">
                      Yanbule Street, Bashorun, Ibadan
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-cp-green text-sm mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/clearpathcollegeIB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cp-green/[0.06] rounded-xl flex items-center justify-center hover:bg-cp-green/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-cp-green" />
                  </a>
                  <a
                    href="https://www.instagram.com/clearpathcollege"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cp-green/[0.06] rounded-xl flex items-center justify-center hover:bg-cp-green/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-cp-green" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-cp-green mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="rounded-xl border-gray-200 focus:border-cp-green focus:ring-cp-green/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cp-green mb-1.5">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                      className="rounded-xl border-gray-200 focus:border-cp-green focus:ring-cp-green/20"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-cp-green mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your email address"
                    className="rounded-xl border-gray-200 focus:border-cp-green focus:ring-cp-green/20"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-cp-green mb-1.5">
                    Interest
                  </label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, interest: value })
                    }
                  >
                    <SelectTrigger className="rounded-xl border-gray-200 focus:border-cp-green">
                      <SelectValue placeholder="What are you interested in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School Admissions</SelectItem>
                      <SelectItem value="hub">Hub Programs</SelectItem>
                      <SelectItem value="lms">LMS Platform</SelectItem>
                      <SelectItem value="training">
                        Training & Development
                      </SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-cp-green mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    className="rounded-xl border-gray-200 focus:border-cp-green focus:ring-cp-green/20 resize-none"
                    required
                  />
                </div>

                {submitError && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-3">
                    {submitError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-cp-green hover:bg-cp-green-light text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cp-green/15 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    "Message Sent Successfully!"
                  ) : submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              FAQs
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-4"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-cp-cream rounded-2xl p-6"
              >
                <h3 className="font-semibold text-cp-green mb-2 text-sm">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
