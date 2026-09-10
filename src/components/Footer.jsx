import React from "react";
import { FaGithub, FaTelegram, FaArrowUp } from "react-icons/fa6";
import { SiVercel, SiFreelancer } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07090e] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white tracking-tight">
              Sardor<span className="text-indigo-400">.dev</span>
            </span>
            <span className="text-xs text-neutral-500">•</span>
            <span className="text-xs text-neutral-400">Frontend Dasturchi</span>
          </div>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Sardor Ibrohimov. Barcha huquqlar himoyalangan.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="https://github.com/sardorbek-3226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://t.me/ibragimov_3226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-2.5 rounded-full hover:text-cyan-400 hover:bg-white/[0.06] transition-all"
          >
            <FaTelegram className="text-base" />
          </a>
          <a
            href="https://vercel.com/sardorbeks-projects-2e09c199"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vercel"
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <SiVercel className="text-sm" />
          </a>
          <a
            href="https://www.freelancer.com/u/ibragimov3226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Freelancer"
            className="p-2.5 rounded-full hover:text-blue-400 hover:bg-white/[0.06] transition-all"
          >
            <SiFreelancer className="text-base" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Tepaga Qaytish</span>
          <FaArrowUp className="text-[10px]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

