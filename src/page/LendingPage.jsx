// App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaDribbble,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Contact from "./Contact.jsx";
/** * =================================================================
 * I. CONFIGURATION & DATA
 * =================================================================
 */

const NAV_ITEMS = [
  { name: "01. Home", href: "#home" },
  { name: "02. About", href: "#about" },
  { name: "03. Works", href: "#works" },
  { name: "04. Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "NetChat",
    category: "Real-time chat app with secure auth and modern UI.",
    image: "/NetChat.png",
    link: "https://net-chat-five.vercel.app/",
  },
  {
    title: "Healthy Blog",
    category: "Blog platform with authentication and content management.",
    image: "/healthy.png",
    link: "https://end-exam.vercel.app/",
  },
  {
    title: "DiaNova",
    category: "Healthcare platform for diabetes monitoring.",
    image: "/deanova.jpg",
    link: "https://dea-nova.vercel.app/",
  },
  {
    title: "Portfolio",
    category: "Personal portfolio built with React & Tailwind.",
    image: "/mypro.png",
    link: "https://ibrohimovs.vercel.app/",
  },
  {
    title: "Ludish",
    category: "Fast, simple website with no registration required.",
    image: "/ludish.png",
    link: "https://ludish.vercel.app/",
  },
  {
    title: "Healthy Food",
    category: "Website about healthy nutrition and lifestyle.",
    image: "/endexam.png",
    link: "https://end-exam.vercel.app/",
  },
];

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Design Systems",
  "CI/CD",
  "Testing (Jest)",
];

/** * =================================================================
 * II. FRAMER MOTION VARIANTS
 * =================================================================
 */

// Global transition for all section components
const SECTION_TRANSITION_VARIANTS = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

// Home section stagger for cinematic title entrance
const HOME_STAGGER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const HOME_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

/** * =================================================================
 * III. CORE COMPONENT (App.jsx)
 * =================================================================
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- Utility Component: Section Wrapper ---
  // Applies consistent padding, ARIA roles, and Framer Motion view-based animation
  const SectionWrapper = ({ id, children, className = "" }) => (
    <motion.section
      id={id}
      className={`min-h-screen py-32 px-6 lg:px-20 ${className}`}
      variants={SECTION_TRANSITION_VARIANTS}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );

  // --- Utility Component: Fixed Header/Navbar ---
  const FixedHeader = () => (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between font-serif">
        {/* LOGO/TITLE */}
        <a
          href="#home"
          className="text-lg font-black uppercase tracking-widest text-black hover:text-gray-700 transition-colors duration-300"
        >
          SARDOR.DEV
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-12 text-sm font-medium uppercase tracking-wide">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative group text-gray-800 hover:text-black transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE BUTTON (A11y Compliant) */}
        <button
          className="md:hidden text-2xl z-50 text-black hover:text-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/95 border-t border-gray-100"
          >
            <ul className="flex flex-col p-8 space-y-4 text-xl font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:translate-x-1 transition-transform duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );

  // --- Utility Component: Scroll Indicator ---
  const ScrollProgressIndicator = () => (
    <motion.div
      className="fixed top-[65px] lg:top-[69px] left-0 right-0 h-[1.5px] bg-black z-40 origin-[0%]"
      style={{ scaleX }}
    />
  );

  // --- Section 1: Home ---
  const HomeSection = () => (
    <SectionWrapper
      id="home"
      className="min-h-[90vh] flex items-center pt-24 lg:pt-0"
    >
      <motion.div
        className="w-full"
        variants={HOME_STAGGER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        {/* LARGE TYPOGRAPHY HEADLINE */}
        <motion.h1
          className="text-[12vw] lg:text-[160px] leading-none uppercase tracking-tighter font-black text-black mt-15"
          variants={HOME_ITEM_VARIANTS}
        >
          SARDOR
        </motion.h1>

        <motion.h1
          className="text-[12vw] lg:text-[160px] leading-none uppercase tracking-tighter font-black pb-8 border-b mt-15 border-black/80 text-black"
          variants={HOME_ITEM_VARIANTS}
        >
          IBROHIMOV
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between pt-10 md:pt-16 text-xl font-light tracking-widest uppercase text-gray-700">
          {/* SUBTITLE */}
          <motion.p variants={HOME_ITEM_VARIANTS}>
            Junior Frontend Developer
          </motion.p>

          {/* CTA */}
          <motion.div variants={HOME_ITEM_VARIANTS} className="mt-8 md:mt-0">
            <a
              href="#works"
              className="group relative cursor-pointer text-base uppercase font-medium border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 ease-out"
            >
              View Selected Works
            </a>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );

  // --- Section 2: About ---
  const AboutSection = () => {
    const textFadeVariant = {
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.1 },
      },
    };

    return (
      <SectionWrapper id="about" className="bg-white">
        <h2 className="text-2xl font-normal uppercase tracking-widest text-gray-600 mb-16">
          02. Expertise & Philosophy
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black pt-12"
          variants={textFadeVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* EDITORIAL TEXT BLOCK */}
          <motion.div className="md:col-span-7" variants={textFadeVariant}>
            <h3 className="text-5xl lg:text-6xl font-extrabold leading-snug mb-8">
              Focused on performance, precision, and modern web architecture.
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              I am a dedicated Junior Frontend Engineer specializing in
              high-impact, scalable web solutions. My approach is heavily
              influenced by minimalist, Swiss design principles: prioritizing
              clarity, typography, and functional hierarchy over transient
              visual trends.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              My expertise lies in translating complex design systems into
              robust, component-driven applications using React and Next.js,
              ensuring pixel-perfect execution and superior Lighthouse
              performance scores.
            </p>
          </motion.div>

          {/* SKILLS COLUMN */}
          <div className="md:col-span-5">
            <motion.h4
              className="text-xl uppercase font-semibold mb-6 border-b border-black pb-2"
              variants={textFadeVariant}
            >
              Core Stack
            </motion.h4>
            <ul className="flex flex-wrap gap-2 text-md font-medium">
              {SKILLS.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="px-3 py-1 border border-gray-400 text-gray-800 hover:bg-black hover:text-white transition-all duration-300 cursor-default text-sm font-sans"
                  custom={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </SectionWrapper>
    );
  };

  // --- Section 3: Works ---
  const WorksSection = () => {
    return (
      <SectionWrapper
        id="works"
        className="bg-gray-50 border-t border-gray-100"
      >
        <h2 className="text-2xl font-normal uppercase tracking-widest text-gray-600 mb-20">
          03. Selected Projects
        </h2>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* IMAGE CONTAINER with grayscale filter */}
                <motion.div
                  className="relative overflow-hidden group bg-gray-200 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="w-full max-w-full max-h-48 md:max-h-60 lg:max-h-72 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-out rounded-t-2xl"
                  />

                  {/* TEXT OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl">
                    <span className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest">
                      DISCOVER
                    </span>
                  </div>
                </motion.div>

                {/* DETAILS */}
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <h3 className="text-4xl font-extrabold uppercase tracking-tight text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg font-light text-gray-600 mt-2">
                      {project.category}
                    </p>
                  </div>

                  {/* MINIMAL LINK */}
                  <div className="text-black text-lg flex items-center gap-2 border-b border-black pb-1 group-hover:border-gray-500 transition-colors">
                    View Project
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    );
  };

  // --- Section 4: Contact ---
  const ContactSection = () => {
    const linkVariants = {
      initial: { opacity: 0, x: -10 },
      animate: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.6 + i * 0.1 },
      }),
    };

    return (
      <SectionWrapper id="contact" className="bg-white">
        <h2 className="text-2xl font-normal uppercase tracking-widest text-gray-600 mb-16">
          04. Get In Touch
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black pt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={SECTION_TRANSITION_VARIANTS}
        >
          {/* CONTACT HEADING */}
          <div className="md:col-span-7">
            <h3 className="text-7xl lg:text-8xl font-black leading-tight mb-8">
              <span className="text-gray-400">READY TO</span> COLLABORATE.
            </h3>
            <p className="text-xl leading-relaxed text-gray-800 mb-10 max-w-lg">
              Let's discuss your next high-end project. I am available for
              junior contract roles and consulting on large-scale web
              architecture and design systems.
            </p>

            <a
              href="mailto:sardor.dev@example.com"
              className="text-2xl font-extrabold uppercase relative group inline-block text-black hover:text-gray-700 transition-colors duration-300"
            >
              <FaEnvelope className="inline-block mr-3 text-2xl" />{" "}
              ibrohimovsardor5525@gmail.com
              <span className="absolute left-0 -bottom-1 h-1 bg-black w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="md:col-span-5">
            <motion.h4 className="text-xl uppercase font-semibold mb-6 border-b border-black pb-2">
              Digital Presence
            </motion.h4>
            <ul className="space-y-4">
              {[
                { name: "Vercel", icon: FaDribbble, href: "https://vercel.com/sardorbeks-projects-2e09c199" },
                { name: "GitHub", icon: FaGithub, href: "https://github.com/sardorbek-3226" },
                { name: "Freelance", icon: FaEnvelope, href: "https://www.freelancer.com/u/ibragimov3226",
                }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  custom={index}
                  variants={linkVariants}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium relative group text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    <link.icon className="inline-block mr-3 text-2xl" />
                    {link.name}
                    <span className="absolute left-0 -bottom-px h-px w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </SectionWrapper>
    );
  };

  // --- Footer ---
  const Footer = () => (
    <footer className="text-center text-sm text-black/60 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 font-serif tracking-wider">
        <p>
          © {new Date().getFullYear()} Sardor Ibrohimov. All Rights Reserved.
          Built with React & Framer Motion.
        </p>
      </div>
    </footer>
  );

  // --- Main App Render ---
  return (
    <div
      className="relative bg-white text-black font-serif antialiased scroll-smooth"
      style={{ scrollPaddingTop: "80px" }}
    >
      <FixedHeader />
      <ScrollProgressIndicator />

      <main>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
