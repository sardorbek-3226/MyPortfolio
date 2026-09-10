import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FaGithub,
  FaTelegram,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiGit,
  SiVercel,
  SiNodedotjs,
  SiPostgresql,
  SiFreelancer,
} from "react-icons/si";
import {
  HiSparkles,
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiArrowTopRightOnSquare,
  HiArrowDownTray,
  HiBolt,
  HiCheckBadge,
} from "react-icons/hi2";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "./Contact.jsx";
import TimelineScalePreloader from "../components/TimelineScalePreloader.jsx";
import TimelineScaleGallery from "../components/TimelineScaleGallery.jsx";
import { PROJECTS } from "../data/projects";

const SKILL_CATEGORIES = [
  {
    title: "Asosiy Frontend",
    description: "Kengaytiriladigan, qulay va reaktiv foydalanuvchi interfeyslarini yaratish.",
    skills: [
      { name: "React", icon: SiReact, color: "#06b6d4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3b82f6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#eab308" },
    ],
  },
  {
    title: "Uslub va Animatsiya",
    description: "Silliq, jozibador va yuqori sifatli vizual tajribani shakllantirish.",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Framer Motion", icon: SiFramer, color: "#ec4899" },
      { name: "Moslashuvchan Tizimlar", icon: HiDevicePhoneMobile, color: "#818cf8" },
      { name: "Dizayn Tizimlari", icon: HiSparkles, color: "#a855f7" },
    ],
  },
  {
    title: "Vositalar va Ekotizim",
    description: "Zamonaviy ishlab chiquvchi muhiti, joylashtirish va server bilan ishlash.",
    skills: [
      { name: "Git & GitHub", icon: SiGit, color: "#f97316" },
      { name: "Vite", icon: SiVite, color: "#a855f7" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Node.js Asoslari", icon: SiNodedotjs, color: "#22c55e" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#3b82f6" },
    ],
  },
];

const STATS = [
  { value: "11+", label: "Yaratilgan Loyihalar", icon: HiCodeBracket },
  { value: "100%", label: "Moslashuvchan Dizayn", icon: HiDevicePhoneMobile },
  { value: "60 FPS", label: "Silliq Harakatlar", icon: HiBolt },
];

/**
 * =================================================================
 * II. ANIMATION VARIANTS
 * =================================================================
 */

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/**
 * =================================================================
 * III. AMBIENT BACKGROUND COMPONENT
 * =================================================================
 */

const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    {/* Radial Mesh Glows */}
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        x: [0, 30, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="absolute -top-[15%] left-[15%] w-[550px] h-[550px] rounded-full bg-indigo-600/15 blur-[150px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.25, 1],
        x: [0, -40, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[160px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="absolute -bottom-[10%] left-[25%] w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[150px]"
    />

    {/* Subtle Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

/**
 * =================================================================
 * IV. MAIN LANDING PAGE COMPONENT
 * =================================================================
 */

const LendingPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-neutral-100 selection:bg-indigo-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-50 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
        style={{ scaleX }}
      />

      <TimelineScalePreloader />
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* =========================================================
            SECTION 1: HERO
        ========================================================== */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Status Pill */}
              <motion.div variants={fadeIn} className="inline-flex items-center">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>To'liq stavka va frilans uchun ochiq</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeIn} className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.42em] text-indigo-400">
                  Frontend Dasturchi • UI Mutaxassis
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  Zamonaviy, tezkor va{" "}
                  <span className="text-gradient">interaktiv</span>{" "}
                  <span className="text-gradient-accent">veb-tajribalar</span> yarataman.
                </h1>
              </motion.div>

              {/* Brief Bio */}
              <motion.p
                variants={fadeIn}
                className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 border-l border-indigo-500/30 pl-4 sm:pl-5"
              >
                Salom, men <span className="text-white font-medium">Sardor Ibrohimov</span>man.
                <span className="text-indigo-300 font-medium"> React</span>,{" "}
                <span className="text-cyan-300 font-medium">Next.js</span>, hamda{" "}
                <span className="text-pink-300 font-medium">Framer Motion & GSAP</span> yordamida
                murakkab g'oyalarni chiroyli, qulay va 60fps tezlikdagi raqamli haqiqatga aylantiraman.
              </motion.p>

              {/* Action CTAs */}
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href="#works"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Loyihalarni Ko'rish</span>
                  <FaArrowDown className="text-xs" />
                </a>

                <button
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("replay-timeline-scale"))
                  }
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-indigo-300 bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-indigo-500/10"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  <span>Vaqt Chizig'i Animatsiyasi</span>
                </button>

                <a
                  href="/28-29-noyabr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-neutral-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:text-white transition-all hover:scale-105 active:scale-95"
                >
                  <HiArrowDownTray className="text-base text-indigo-400" />
                  <span>Rezyume (CV)</span>
                </a>
              </motion.div>

              {/* Social Links Row */}
              <motion.div
                variants={fadeIn}
                className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-neutral-400"
              >
                <span className="text-xs uppercase tracking-widest text-neutral-500 mr-2">
                  Ijtimoiy tarmoqlar:
                </span>
                <a
                  href="https://github.com/sardorbek-3226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="https://t.me/ibragimov_3226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:text-cyan-400 transition-all"
                  aria-label="Telegram"
                >
                  <FaTelegram className="text-base" />
                </a>
                <a
                  href="https://vercel.com/sardorbeks-projects-2e09c199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:text-white transition-all"
                  aria-label="Vercel"
                >
                  <SiVercel className="text-sm" />
                </a>
                <a
                  href="https://www.freelancer.com/u/ibragimov3226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:text-blue-400 transition-all"
                  aria-label="Freelancer Profile"
                >
                  <SiFreelancer className="text-base" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Hero Card / Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Glowing Outer Frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-xl opacity-70" />

                <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 overflow-hidden">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                        <img
                          src="/man.jpg"
                          alt="Sardor Ibrohimov"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Sardor Ibrohimov
                        </h3>
                        <p className="text-xs text-neutral-400 font-mono-code">
                          @sardor.dev
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
                      Frontend
                    </span>
                  </div>

                  {/* Code snippet illustration */}
                  <div className="my-6 p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono-code text-xs text-neutral-300 space-y-1.5">
                    <div className="flex items-center gap-1.5 pb-2 text-neutral-500 border-b border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="text-[10px] ml-1 text-neutral-500">
                        EngineerProfile.tsx
                      </span>
                    </div>
                    <p className="text-neutral-400">
                      <span className="text-pink-400">const</span> dasturchi = {"{"}
                    </p>
                    <p className="pl-4">
                      ism: <span className="text-emerald-300">"Sardor"</span>,
                    </p>
                    <p className="pl-4">
                      yonalish: <span className="text-emerald-300">"UI / UX & Animatsiyalar"</span>,
                    </p>
                    <p className="pl-4">
                      unumdorlik: <span className="text-cyan-300">"99/100"</span>,
                    </p>
                    <p className="pl-4">
                      qiziqish: <span className="text-amber-300">"Zamonaviy Veb"</span>
                    </p>
                    <p className="text-neutral-400">{"}"};</p>
                  </div>

                  {/* Floating Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <HiCheckBadge className="text-xl text-indigo-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">11+ Loyiha</div>
                        <div className="text-[10px] text-neutral-400">Tayyor dasturlar</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <HiBolt className="text-xl text-cyan-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">60 FPS</div>
                        <div className="text-[10px] text-neutral-400">Silliq animatsiya</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ABOUT & PHILOSOPHY
        ========================================================== */}
        <section
          id="about"
          className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
        >
          <div className="space-y-16">
            {/* Header */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4"
              >
                <HiSparkles className="text-sm" />
                <span>Men Haqimda & Falsafa</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                Raqamli tajribalarni <span className="text-gradient">aniqlik</span>, soddalik va maqsad bilan yarataman.
              </motion.h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Story Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 glass-panel rounded-3xl p-8 border border-white/10 space-y-4"
              >
                <h3 className="text-xl font-bold text-white">
                  Dizayn va muhandislik uyg'unligi
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Eng yaxshi raqamli mahsulotlar mustahkam kod arxitekturasi va estetik soddalik uyg'unligida tug'iladi deb hisoblayman. Toza dizayn va zamonaviy mikro-interaksiya tamoyillariga tayangan holda, vizual tartib, qulaylik va tabiiy aloqaga asosiy e'tibor qarataman.
                </p>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Real vaqtda ishlovchi messenjerlar yoki katta hajmdagi ma'lumotlarga ega tibbiyot tizimlarini yaratishda barcha qurilmalarga to'liq moslashuvchanlik, chaqqon tezlik va foydalanuvchi uchun yengil tajribani kafolatlayman.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Toza Kod",
                    "Modulli Arxitektura",
                    "Qulaylik va A11y",
                    "Tezlikni Optimallash",
                    "Mikro-Animatsiyalar",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-neutral-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between gap-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  Asosiy Ko'rsatkichlar
                </h3>
                <div className="space-y-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
                        <stat.icon />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: SKILLS & TECH STACK
        ========================================================== */}
        <section
          id="skills"
          className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
        >
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4"
              >
                <HiCodeBracket className="text-sm" />
                <span>Texnologiyalar & Vositalar</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
              >
                Men Mukammal Egallagan <span className="text-gradient-accent">Texnologiyalar</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-sm sm:text-base text-neutral-400"
              >
                Har kuni amaliyotda samarali qo'llaydigan zamonaviy dasturlash tillari, kutubxonalar va freymvorklar ekotizimi.
              </motion.p>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILL_CATEGORIES.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-indigo-500/30 transition-all group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <skill.icon
                              className="text-lg"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium text-neutral-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-indigo-400 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: FEATURED WORKS / PROJECTS
        ========================================================== */}
        <section
          id="works"
          className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
        >
          <div className="space-y-12">
            {/* Interactive GSAP Timeline Scale Reel */}
            <TimelineScaleGallery />

            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-4"
                >
                  <HiSparkles className="text-sm" />
                  <span>Portfolio Ko'rgazmasi</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
                >
                  Tanlangan <span className="text-gradient">Loyihalar</span>
                </motion.h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
                {[
                  { id: "all", label: "Barcha loyihalar (11)" },
                  { id: "fullstack", label: "Veb-ilovalar & Full-Stack" },
                  { id: "tools", label: "Mahsulotlar & Xizmatlar" },
                  { id: "content", label: "Portallar & Bloglar" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeFilter === tab.id
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-[0_10px_35px_rgba(99,102,241,0.15)] transition-all duration-300 group"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/[0.08]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                        {/* Top Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md text-white border border-white/15">
                            {project.categoryLabel}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>Jonli Ko'rish</span>
                        <HiArrowTopRightOnSquare className="text-sm" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Source Code`}
                        className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-all"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* GitHub & Vercel Global Hub Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <FaGithub className="text-sm" />
                  <span>Ochiq Kod & Bulutli Deploylar</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  GitHub & Vercelda 40+ Loyihalar bilan tanishing
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                  Barcha o'quv, tajriba va to'liq veb-ilovalarni GitHub profilingizdagi repozitoriyalar hamda Vercel deploymentlari orqali to'g'ridan-to'g'ri ko'rishingiz mumkin.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://github.com/sardorbek-3226?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all hover:scale-105 active:scale-95"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub Repozitoriyalar (40+)</span>
                  <HiArrowTopRightOnSquare className="text-xs" />
                </a>

                <a
                  href="https://vercel.com/sardorbeks-projects-2e09c199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <SiVercel className="text-sm" />
                  <span>Vercel Loyihalari</span>
                  <HiArrowTopRightOnSquare className="text-xs" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: PROCESS & PHILOSOPHY (HOW I WORK)
        ========================================================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-mono-code font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Toza Arxitektura</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Qayta ishlatiluvchi modulli React komponentlari, kengaytiriladigan holat boshqaruvi va barqaror struktura yaratish.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl font-mono-code font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Tabiiy Mikro-Harakat</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Framer Motion va GSAP yordamida diqqatni jalb qiluvchi, silliq 60fps tezlikdagi foydali animatsiyalar yaratish.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl font-mono-code font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Birinchi O'rinda Tezlik</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Lahzalik yuklanish, yengil kod hajmi, optimallashtirilgan tasvirlar va 95+ Lighthouse tezlik ko'rsatkichi.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: CONTACT
        ========================================================== */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default LendingPage;

