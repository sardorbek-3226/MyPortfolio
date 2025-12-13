// About.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex items-center bg-white text-black px-6 md:px-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* subtle background typography */}
      <motion.h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-extrabold text-black/5 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        ABOUT
      </motion.h1>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div variants={item} className="space-y-8">
          <div className="overflow-hidden">
            <motion.h2
              className="text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
          </div>

          <motion.p variants={item} className="text-black/70 text-lg leading-relaxed max-w-xl">
            I’m <span className="font-semibold text-black">Sardor</span>, a frontend developer who
            builds visually clean, motion-driven, and performance-focused web
            experiences. I focus on minimal design with strong interaction.
          </motion.p>

          <motion.p variants={item} className="text-black/70 leading-relaxed max-w-xl">
            I work mainly with <span className="font-semibold">JavaScript</span>,
            <span className="font-semibold"> React</span>, and
            <span className="font-semibold"> Tailwind CSS</span>, using animation
            as a core part of user experience rather than decoration.
          </motion.p>

          <motion.div variants={item} className="flex gap-6 pt-4">
            <span className="text-sm uppercase tracking-widest border border-black px-4 py-2">Frontend</span>
            <span className="text-sm uppercase tracking-widest border border-black px-4 py-2">UI Motion</span>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={item} className="relative border border-black/10 p-10">
          <div className="absolute -top-4 -left-4 w-full h-full border border-black/20" />

          <div className="relative space-y-6">
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-widest text-sm">Core Skills</span>
              <span className="text-sm text-black/50">Focus Areas</span>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex justify-between items-center">
                <span>JavaScript (ES6+)</span>
                <span className="text-black/50">Logic & Architecture</span>
              </li>
              <li className="flex justify-between items-center">
                <span>React</span>
                <span className="text-black/50">Component Systems</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Tailwind CSS</span>
                <span className="text-black/50">Design Systems</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Framer Motion</span>
                <span className="text-black/50">Interaction Design</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
