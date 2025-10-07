// LandingPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMousePointer } from "react-icons/fa";

import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

// --- Orqa fon effekti ---
const BackgroundEffect = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const tempShapes = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 10 + Math.random() * 20,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      opacity: 0.2 + Math.random() * 0.3,
    }));
    setShapes(tempShapes);
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

// --- Cursor effekti ---
const CursorEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none text-black z-50"
      style={{ fontSize: 24, transform: "translate(-50%, -50%)" }}
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <FaMousePointer />
    </motion.div>
  );
};

// --- LandingPage ---
const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative scroll-smooth">
      {/* Orqa fon va cursor har doim sahifa bo‘ylab */}
      <BackgroundEffect />
      <CursorEffect />

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/mypro.png"
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <h1 className="text-2xl font-extrabold tracking-wide">
              My Portfolio
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:text-black/50 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-inner px-6 pb-4"
            >
              <ul className="flex flex-col gap-4 text-lg font-semibold">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 hover:text-black/40 transition"
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

      {/* Bo‘limlar */}
      <motion.section
        id="home"
        className="pt-10 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Home />
      </motion.section>

      <motion.section
        id="about"
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="works"
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Works />
      </motion.section>

      <motion.section
        id="contact"
        className="relative z-10 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Contact />
        <div className="flex justify-center mt-8">
          <a
            href="https://t.me/ibragimov_3226"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/80 text-white px-6 py-3 rounded-lg hover:bg-black/60 transition"
          >
            Message Me on Telegram
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
