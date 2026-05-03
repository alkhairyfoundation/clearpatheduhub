"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Heart,
  Palette,
  Shield,
  Rocket,
  Code2,
  TrendingUp,
  BarChart3,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/page-hero";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } as const },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── Elementary Pillars ─── */
const elementaryPillars = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "We provide a rich, well-structured curriculum that builds strong literacy, numeracy, and science skills while encouraging curiosity and critical thinking from an early age. Every child is given the foundation they need to succeed academically.",
  },
  {
    icon: Heart,
    title: "Strong Islamic Foundation",
    desc: "Children are nurtured with love for Allah and His Messenger (ﷺ), through daily Qur'an sessions, Hadith stories, Salah practice, and a values-based Islamic learning approach. Faith is woven into every aspect of the school day.",
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking & Creativity",
    desc: "Our classrooms are lively and inquiry-based, encouraging children to ask questions, explore solutions, and express their ideas confidently—both in academics and life. We believe every child is naturally curious, and we protect that curiosity.",
  },
  {
    icon: Shield,
    title: "Character Education",
    desc: "Through daily routines, guided behavior modeling, and thematic lessons, we help pupils build adab, empathy, resilience, and responsibility. Character isn't an add-on—it's the core of everything we do.",
  },
  {
    icon: Users,
    title: "Individualized Support",
    desc: "We recognize that every child learns differently. Our teachers provide personalized attention and support, ensuring no child is left behind. Small class sizes and dedicated staff make this possible.",
  },
  {
    icon: Palette,
    title: "Holistic Development",
    desc: "Beyond academics, we nurture the whole child through physical education, creative arts, Arabic language, Qur'anic studies, and social development activities. Every facet of growth matters.",
  },
];

/* ─── College Features ─── */
const collegeFeatures = [
  {
    title: "Cambridge International Curriculum",
    desc: "Students follow the globally recognized Cambridge pathway, including Checkpoint, IGCSE, and Advanced levels. This opens doors to universities worldwide and ensures our students meet international academic standards.",
  },
  {
    title: "Nigerian National Curriculum (NERDC)",
    desc: "Alongside Cambridge, students are prepared for national examinations including BECE and WAEC. This dual-track approach ensures students are competitive both locally and globally.",
  },
  {
    title: "Islamic Education Integration",
    desc: "Islamic values and teachings are integrated seamlessly into daily school life—through Qur'an classes, Hadith studies, character development sessions, and spiritual mentoring. Students are encouraged to live Islam authentically and proudly.",
  },
  {
    title: "Leadership Development",
    desc: "Our students are prepared for leadership, not just through titles, but by cultivating responsibility, initiative, and decision-making through leadership clubs, debate teams, and mentorship programs.",
  },
  {
    title: "Technology Integration",
    desc: "From interactive whiteboards to student learning portals, we leverage technology to enhance learning and prepare students for digital fluency in the modern world. Technology is a tool, not a replacement for great teaching.",
  },
  {
    title: "Entrepreneurship Training",
    desc: "Through workshops, simulations, and real-life projects, our students explore business ideas and financial literacy, learning to turn creativity into action. We want every graduate to be a creator, not just a consumer.",
  },
];

/* ─── Advanced School Features ─── */
const advancedSchoolFeatures = [
  {
    icon: Code2,
    title: "Industry-Relevant Curriculum",
    desc: "Our programs are designed to provide students with the skills and knowledge needed to succeed in their chosen careers. From coding and digital marketing to data analysis and more, our curriculum is regularly updated to reflect industry trends and demands.",
  },
  {
    icon: Heart,
    title: "Faith-Based Learning",
    desc: "We believe that faith and learning are intertwined. Our programs help students develop a deeper understanding of their faith and its application in everyday life, nurturing spiritual growth alongside professional development.",
  },
  {
    icon: Shield,
    title: "Values-Based Education",
    desc: "Our values-based education approach emphasizes the importance of integrity, compassion, and respect. We believe these values are essential for building strong relationships, achieving personal growth, and making a positive impact in the world.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    desc: "You'll be part of a vibrant community of like-minded individuals who share your passion for learning and faith. Our supportive environment encourages collaboration, creativity, and growth, while our faculty and staff are dedicated to helping you achieve your goals.",
  },
];

const advancedPathways = [
  {
    icon: BarChart3,
    title: "STEM",
    desc: "Science, Technology, Engineering, and Mathematics pathways that prepare students for university degrees and careers in tech, medicine, engineering, and research.",
  },
  {
    icon: BookOpen,
    title: "Humanities",
    desc: "Explore the richness of Islamic scholarship, law, history, and the social sciences—building critical thinkers who understand the world and their place in it.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurial Development",
    desc: "Turn ideas into action. Learn business planning, financial literacy, digital marketing, and leadership skills that empower you to build and lead ventures.",
  },
];

const advancedSkills = [
  "Coding & Software Development",
  "Digital Marketing & Media",
  "Data Analysis & Visualization",
  "Career Guidance & Mentorship",
  "University Preparation",
  "Financial Literacy",
  "Leadership & Personal Development",
  "Community Impact Projects",
];

const studentLife = [
  "Leadership Clubs",
  "Qur'an Recitation Competitions",
  "Sports and Fitness Programmes",
  "STEM Challenges",
  "Community Service Projects",
  "Public Speaking and Debates",
  "Career Fairs and Excursions",
  "Drama and Creative Arts",
];

const facilities = [
  "Well-equipped science and computer laboratories",
  "Quiet reading nooks and resource-rich library",
  "Safe, monitored classrooms and outdoor play zones",
  "Gender-conscious, faith-sensitive policies for student comfort and safety",
];

export default function SchoolPage() {
  return (
    <>
      <PageHero
        badge="The School"
        title="Nurturing Minds."
        titleAccent="Guiding Hearts. Shaping Futures."
        subtitle="From early years through post-secondary education, ClearPath provides a structured, faith-centered environment where every learner thrives. Our school combines academic rigor with Islamic values to develop well-rounded individuals prepared for both this world and the hereafter."
      />

      {/* ─── About the School ─── */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              About the School
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Founded in 2016, ClearPath has spent a decade building a school
              culture rooted in academic excellence, Islamic values, and character
              development. Our learning environment is structured, secure, and
              filled with purpose—designed to support collaboration, creativity,
              and focus. We believe that education is not just about passing
              exams; it is about raising a generation of conscious, competent, and
              principled individuals who are prepared to lead and serve.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                value: "EYFS – Post-Secondary",
                label: "Complete School Pathway",
              },
              {
                value: "Cambridge + NERDC",
                label: "Dual Curriculum",
              },
              {
                value: "3 Schools",
                label: "Elementary, College & Advanced",
              },
              {
                value: "10 Years",
                label: "Of Proven Excellence",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-cp-cream rounded-2xl p-6 text-center"
              >
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Elementary School ─── */}
      <section id="elementary" className="py-20 sm:py-28 bg-cp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="text-emerald-700 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                EYFS – Grade 6
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Elementary School
            </h2>
            <p className="text-foreground/70 max-w-3xl leading-relaxed">
              ClearPath Elementary meets each child at the start of their journey,
              building strong academic and Islamic foundations that shape character
              and inspire lifelong excellence. Our approach is age-appropriate,
              nurturing, and designed to develop the whole child—academically,
              spiritually, socially, and emotionally.
            </p>
          </motion.div>

          {/* Age Groups */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                title: "Early Years Foundation Stage",
                features: [
                  "Age-appropriate learning environment",
                  "Early reading and writing skills",
                  "Play-based learning approach",
                  "Social development focus",
                  "Basic Islamic knowledge",
                  "Motor skills development",
                ],
              },
              {
                title: "Nursery Program",
                features: [
                  "Structured learning introduction",
                  "Basic numeracy and literacy",
                  "Islamic values integration",
                  "Physical development",
                  "Creative expression",
                  "Social interaction",
                ],
              },
              {
                title: "Primary Education (Grades 1–6)",
                features: [
                  "Strong academic curriculum",
                  "Character development",
                  "Critical thinking skills",
                  "Physical education",
                  "Arabic language",
                  "Qur'anic studies",
                ],
              },
            ].map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-3">
              Our Core Pillars
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Six foundational pillars guide our elementary program, ensuring
              every child receives a well-rounded, intentional education.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {elementaryPillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                  <p.icon className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-semibold text-cp-green mb-2">{p.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── College ─── */}
      <section id="college" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cp-green/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cp-green" />
              </div>
              <span className="text-cp-green font-semibold text-sm bg-cp-green/5 px-3 py-1 rounded-full">
                Grade 7–12
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              College — JSS/SSS
            </h2>
            <p className="text-foreground/70 max-w-3xl leading-relaxed">
              ClearPath College shapes tomorrow&apos;s leaders through a blend of
              academic rigor, Islamic values, leadership training, and
              future-driven skills in technology and entrepreneurship. Built on
              strong Islamic values and academic excellence, the college provides a
              dynamic learning environment for students in Grades 7–12 (Junior &
              Senior Secondary).
            </p>
          </motion.div>

          {/* Academic Programmes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-6">
              Academic Programmes
            </h3>
            <p className="text-foreground/70 max-w-3xl leading-relaxed mb-8">
              We offer a rich blend of the Cambridge International Curriculum and
              the Nigerian National Curriculum, delivered by passionate educators
              who understand how to bridge local relevance with global standards.
              Students benefit from:
            </p>
            <ul className="space-y-3 max-w-3xl">
              {[
                "A well-structured timetable that balances core academic subjects with electives",
                "Progressive and critical thinking learning approaches",
                "Regular internal assessments, mock exams, and external examinations (BECE, WAEC, Checkpoint, IGCSE)",
                "Integration of Islamic education across all levels and subjects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/75">
                  <CheckCircle2 className="w-5 h-5 text-cp-green mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Holistic Development Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {collegeFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-cp-cream rounded-2xl p-6 border border-cp-cream-dark hover:shadow-lg hover:shadow-cp-green/[0.03] transition-all duration-400 hover:-translate-y-0.5"
              >
                <h4 className="font-[family-name:var(--font-playfair)] font-bold text-cp-green mb-2">
                  {f.title}
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Environment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-cp-cream rounded-3xl p-8 sm:p-10 mb-16"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-4">
              Learning Environment
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              We&apos;ve built a school that feels like a second home—structured,
              secure, and filled with purpose. Our learning spaces are designed to
              support collaboration, creativity, and focus.
            </p>
            <ul className="space-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground/75">
                  <CheckCircle2 className="w-5 h-5 text-cp-green mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Student Life */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-4">
              Student Life
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              From sports to coding, drama to dawah, our co-curricular offerings
              are tailored to awaken every child&apos;s potential. We encourage
              participation in:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {studentLife.map((item) => (
                <div
                  key={item}
                  className="bg-cp-cream border border-cp-cream-dark rounded-xl px-4 py-3 text-sm text-cp-green font-medium text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Advanced School ─── */}
      <section id="advanced" className="py-20 sm:py-28 bg-cp-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cp-gold/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cp-gold" />
              </div>
              <span className="text-cp-gold font-semibold text-sm bg-cp-gold/5 px-3 py-1 rounded-full">
                Post-Secondary
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-cp-green mb-4">
              Advanced School &amp; Gap Year Programs
            </h2>
            <p className="text-foreground/70 max-w-3xl leading-relaxed">
              At ClearPath Advanced School, we empower secondary school graduates
              with the skills and knowledge needed to succeed in their chosen
              careers. Our programs provide hands-on experience and industry
              insights, preparing you for a seamless transition to university and
              beyond. This is where potential meets purpose—bridging the gap
              between secondary education and the real world with faith, skill,
              and intentionality.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Our Mission
              </h3>
              <p className="text-foreground/65 text-sm leading-relaxed">
                Empowering secondary school graduates with industry-relevant
                skills, knowledge, and experiences to succeed in their chosen
                careers and make a meaningful impact in their communities. We
                provide a holistic education that integrates Islamic values and
                principles with industry-relevant skills, empowering students to
                become knowledgeable, righteous, and responsible individuals who
                contribute positively to society.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 border border-gray-100"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-3">
                Our Vision
              </h3>
              <p className="text-foreground/65 text-sm leading-relaxed">
                To be a leading institution of Islamic-based education, fostering
                a community of learners who embody the values of Islam, excel in
                their chosen fields, and become beacons of light in their
                communities—illuminating the path to success and righteousness. A
                community of innovative, creative, and critically thinking
                individuals equipped to thrive in an ever-changing world.
              </p>
            </motion.div>
          </motion.div>

          {/* Why Choose Advanced School */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-3">
              Why Choose ClearPath Advanced School?
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We combine industry-relevant training with faith-based values to
              create a unique post-secondary experience that prepares you for
              success in every dimension of life.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {advancedSchoolFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-cp-gold/[0.05] transition-all duration-400 hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 bg-cp-gold/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-cp-gold/15 transition-colors">
                  <f.icon className="w-5 h-5 text-cp-gold" />
                </div>
                <h4 className="font-semibold text-cp-green mb-2">{f.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pathways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-cp-green mb-3">
              Learning Pathways
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Preparation for post-secondary success with specialized pathways
              into high-impact fields, backed by mentorship and a growth-oriented
              mindset.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {advancedPathways.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100 group hover:border-cp-gold/20 transition-colors"
              >
                <div className="w-12 h-12 bg-cp-green/[0.06] rounded-xl flex items-center justify-center mb-4 group-hover:bg-cp-gold/10 transition-colors">
                  <p.icon className="w-6 h-6 text-cp-green group-hover:text-cp-gold transition-colors" />
                </div>
                <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-cp-green mb-2">
                  {p.title}
                </h4>
                <p className="text-foreground/65 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-cp-green mb-4">
              Skills You&apos;ll Develop
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Our hands-on programs equip you with practical, in-demand skills
              that bridge learning with real-world opportunities:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {advancedSkills.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-cp-green font-medium text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Admissions ─── */}
      <section id="admissions" className="py-20 sm:py-28 section-gradient-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-7 h-7 text-cp-gold" />
            </div>
            <span className="inline-block text-cp-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Admissions 2026/2027
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-5">
              Now Accepting Applications
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              ClearPath Edu Hub is now accepting applications for the
              2026/2027 Academic Session across all three schools—Elementary,
              College, and Advanced. Entrance assessments begin May 9th.
              Schedule your preferred date and take the first step toward a
              transformative educational journey.
            </p>
            <div className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-lg mx-auto mb-8 text-left">
              <h3 className="text-white font-semibold mb-3">How to Apply</h3>
              <ul className="space-y-2.5">
                {[
                  "Obtain the application form in-person at the Client Service Office or online via our admissions portal",
                  "Complete and submit the application form with required documents",
                  "Schedule your entrance assessment date from May 9th onwards",
                  "Await assessment results and admission offer",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="w-6 h-6 bg-cp-gold/20 text-cp-gold rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cp-gold hover:bg-cp-gold-light text-white font-semibold rounded-full px-8 group"
              >
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
              >
                <a href="tel:08064270291">Call: 0806 427 0291</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
