import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_ITEMS = [
  { name: "Bosh sahifa", href: "#home" },
  { name: "Men haqimda", href: "#about" },
  { name: "Ko'nikmalar", href: "#skills" },
  { name: "Loyihalar", href: "#works" },
  { name: "Bog'lanish", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "works", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
            : "bg-neutral-900/60 backdrop-blur-md border border-white/10"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Status Badge */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#07090e] flex items-center justify-center text-xs font-bold font-mono-code text-white group-hover:scale-95 transition-transform">
                SI
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Sardor<span className="text-indigo-400">.dev</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-neutral-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Hamkorlikka ochiq
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.06]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action & Socials */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/sardorbek-3226"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-all"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://t.me/ibragimov_3226"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2 text-neutral-400 hover:text-cyan-400 rounded-full hover:bg-white/10 transition-all"
            >
              <FaTelegram className="text-base" />
            </a>
            

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Bog'lanish
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-500/20 text-indigo-300 font-semibold"
                          : "text-neutral-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10 px-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent("replay-timeline-scale"));
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/30"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                  <span>Vaqt Chizig'i</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/sardorbek-3226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-300 hover:text-white"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href="https://t.me/ibragimov_3226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-300 hover:text-cyan-400"
                  >
                    <FaTelegram className="text-lg" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-full"
                >
                  Bog'lanish
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;

