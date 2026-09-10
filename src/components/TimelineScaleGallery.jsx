import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PROJECTS } from "../data/projects";
import {
  HiSparkles,
  HiArrowTopRightOnSquare,
  HiChevronRight,
  HiChevronLeft,
  HiPlay,
  HiArrowPath,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

const TimelineScaleGallery = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Smooth GSAP ripple wave effect across the timeline thumbnails
  const { contextSafe } = useGSAP(
    () => {},
    { scope: containerRef }
  );

  const playScaleWave = contextSafe(() => {
    if (!trackRef.current) return;
    setIsPlaying(true);

    const thumbnails = gsap.utils.toArray(
      trackRef.current.querySelectorAll(".timeline-thumb")
    );

    if (timelineRef.current) timelineRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        setIsPlaying(false);
      },
    });
    timelineRef.current = tl;

    // Staggered wave scale animation across all project thumbnails
    tl.to(thumbnails, {
      keyframes: {
        "0%": { scale: 1 },
        "30%": { scale: 1.22, y: -8, ease: "power2.out" },
        "60%": { scale: 0.95, y: 2, ease: "power2.in" },
        "100%": { scale: 1, y: 0, ease: "power3.out" },
      },
      duration: 0.8,
      stagger: 0.08,
    });
  });

  const nextProject = () => {
    setActiveIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  };

  const current = PROJECTS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-6 sm:p-10 my-8 shadow-2xl"
    >
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-2">
            <HiSparkles className="text-sm" />
            <span>Interaktiv Vaqt Chizig'i</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Loyihalar Ko'rgazmasi • {PROJECTS.length} ta Loyiha
          </h3>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={playScaleWave}
            disabled={isPlaying}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
            title="To'lqinli masshtab animatsiyasini ijro etish"
          >
            <HiPlay className="text-sm" />
            <span>{isPlaying ? "Harakatlanmoqda..." : "To'lqin Animatsiyasi"}</span>
          </button>

          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("replay-timeline-scale"));
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all cursor-pointer"
            title="To'liq ekranda kirish animatsiyasini qayta ko'rish"
          >
            <HiArrowPath className="text-sm" />
            <span className="hidden sm:inline">Kirishni Ko'rish</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Side: Clean, Structured Details (No overlapping texts) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 font-semibold">
                Loyiha 0{activeIndex + 1} / {PROJECTS.length}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {current.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.06] text-neutral-300 border border-white/10">
                {current.categoryLabel}
              </span>
            </div>

            <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-1">
              {current.title}
            </h4>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {current.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Jonli Ko'rish</span>
              <HiArrowTopRightOnSquare className="text-sm" />
            </a>

            <a
              href={current.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all"
            >
              <FaGithub className="text-sm" />
              <span>GitHub Kod</span>
            </a>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white transition-all cursor-pointer"
                aria-label="Oldingi loyiha"
              >
                <HiChevronLeft className="text-base" />
              </button>
              <button
                onClick={nextProject}
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white transition-all cursor-pointer"
                aria-label="Keyingi loyiha"
              >
                <HiChevronRight className="text-base" />
              </button>
            </div>

            <span className="font-mono text-xs text-neutral-400">
              0{activeIndex + 1} / {PROJECTS.length} loyiha
            </span>
          </div>
        </div>

        {/* Right Side: Clean Featured Active Card (Crisp & Isolated) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-neutral-900 group">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                <p className="text-xs font-bold text-white">
                  {current.title}
                </p>
                <p className="text-[10px] text-indigo-300 font-mono">
                  {current.categoryLabel}
                </p>
              </div>

              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all"
              >
                <span>Ochish</span>
                <HiArrowTopRightOnSquare className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Horizontal Timeline Scale Thumbnail Filmstrip */}
      <div className="mt-10 pt-6 border-t border-white/[0.08]">
        <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          Loyihalar Vaqt Chizig'i (Barchasi {PROJECTS.length} ta):
        </p>

        <div
          ref={trackRef}
          className="flex items-center gap-3 overflow-x-auto pb-3 pt-2 scrollbar-thin no-scrollbar"
        >
          {PROJECTS.map((p, idx) => {
            const isCurr = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`timeline-thumb flex-shrink-0 relative w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isCurr
                    ? "border-indigo-400 ring-2 ring-indigo-500/50 scale-105 shadow-lg shadow-indigo-500/25"
                    : "border-white/10 opacity-60 hover:opacity-100 hover:scale-100"
                }`}
                title={p.title}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-white bg-black/80 px-1.5 py-0.5 rounded">
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineScaleGallery;
