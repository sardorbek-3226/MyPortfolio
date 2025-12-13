// LandingPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

/* =========================
   BACKGROUND MOTION EFFECT
   Minimal, black & white
========================= */
const BackgroundEffect = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setShapes(temp);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes((prev) =>
        prev.map((s) => {
          let nx = s.x + s.dx;
          let ny = s.y + s.dy;

          if (nx < 0) nx = window.innerWidth;
          if (nx > window.innerWidth) nx = 0;
          if (ny < 0) ny = window.innerHeight;
          if (ny > window.innerHeight) ny = 0;

          return { ...s, x: nx, y: ny };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {shapes.map((s, i) => (
        <div
          key={i}
          className="absolute bg-black rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: s.y,
            left: s.x,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
};

/* =========================
   LANDING PAGE
========================= */
const LandingPage = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative scroll-smooth bg-white text-black">
      <BackgroundEffect />

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-black/10 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
  {/* Logo */}
  <img
    src="/mypro.png"  // Demo rasm, keyin o'zing logoni qo'yasan
    alt="Logo"
    className="w-10 h-10 rounded-full object-cover"
  />

  {/* Sarlavha */}
  <h1 className="text-xl font-bold tracking-wide">Portfolio</h1>
</div>

          <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden px-6 pb-6"
            >
              <ul className="flex flex-col gap-6 text-sm uppercase tracking-widest">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* SECTIONS */}
      <motion.section
        id="home"
        className="pt-32"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <Home />
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="works"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <Works />
      </motion.section>

      <motion.section
        id="contact"
        className="pb-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default LandingPage;