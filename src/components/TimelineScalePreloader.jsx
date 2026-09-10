import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PROJECTS } from "../data/projects";

const PAD = 24;

const TimelineScalePreloader = ({ onAnimationDone }) => {
  const root = useRef(null);
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      const el = root.current;
      if (!el || !isVisible) return;

      const items = gsap.utils.toArray(el.querySelectorAll(".preloader-card"));
      if (!items.length) return;

      const firstItem = items[0];
      const notFirstItems = items.slice(1);
      const lastItem = items[items.length - 1];
      const notLastItems = items.slice(0, -1);

      const duration = 0.85;
      gsap.set(items, { x: 0, y: 0, scale: 0, opacity: 1 });
      gsap.set(el, { opacity: 1, display: "block" });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsCompleted(true);
          // Gracefully fade out and unmount the preloader overlay after animation ends
          gsap.to(el, {
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
            ease: "power2.out",
            onComplete: () => {
              setIsVisible(false);
              if (onAnimationDone) onAnimationDone();
            },
          });
        },
      });
      timelineRef.current = tl;

      // 1. First card scales up
      tl.to(firstItem, {
        scale: 1,
        duration: duration,
        ease: "power3.out",
      });

      // 2. Subsequent cards stagger scale up behind it
      tl.to(
        notFirstItems,
        {
          scale: 1,
          duration: duration,
          ease: "power3.out",
          stagger: 0.09,
        },
        `<${duration / 3}`
      );

      // 3. Compute delta position to the bottom-right
      let dx = 0;
      let dy = 0;
      tl.call(() => {
        const rect = firstItem.getBoundingClientRect();
        dx = window.innerWidth - rect.right - PAD;
        dy = window.innerHeight - rect.bottom - PAD;
      });

      const backdrop = el.querySelector(".preloader-backdrop");
      const totalMoveDuration = duration + 0.08 * (notLastItems.length - 1);

      // 4. Translate cards across the screen
      tl.to(notLastItems, {
        x: () => dx,
        y: () => dy,
        duration: duration,
        ease: "power2.inOut",
        stagger: 0.07,
      });

      // 5. Staggered keyframe scaling (zoom swell -> settle)
      tl.to(
        items,
        {
          keyframes: {
            "15%": { scale: 1.12, ease: "power2.in" },
            "45%": { scale: 1.35, ease: "power2.out" },
            "100%": { scale: 1, ease: "power3.inOut" },
          },
          duration: duration,
          stagger: 0.07,
        },
        "<"
      );

      // 6. Unveil preloader backdrop simultaneously (Hank-D-Tank curtain wipe)
      tl.to(
        backdrop,
        {
          height: "0%",
          duration: totalMoveDuration,
          ease: "power2.inOut",
        },
        "<"
      );

      // 7. Last item travels
      tl.to(
        lastItem,
        {
          x: () => dx,
          y: () => dy,
          duration: duration,
          ease: "power2.inOut",
        },
        `<${duration - 0.1}`
      );
    },
    { scope: root, dependencies: [isVisible] }
  );

  // Play / replay the full-screen intro animation cleanly
  const replay = contextSafe(() => {
    setIsVisible(true);
    setIsCompleted(false);
    if (root.current) {
      gsap.set(root.current, { opacity: 1, display: "block" });
      const backdrop = root.current.querySelector(".preloader-backdrop");
      if (backdrop) gsap.set(backdrop, { height: "100%" });
    }
  });

  const skip = contextSafe(() => {
    if (root.current) {
      gsap.to(root.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setIsVisible(false);
          setIsCompleted(true);
        },
      });
    }
  });

  useEffect(() => {
    const handleReplayEvent = () => replay();
    window.addEventListener("replay-timeline-scale", handleReplayEvent);
    return () => {
      window.removeEventListener("replay-timeline-scale", handleReplayEvent);
    };
  }, [replay]);

  if (!isVisible) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto bg-[#07090e]"
    >
      {/* Background Curtain (Curtain Reveal) */}
      <div
        className="preloader-backdrop absolute inset-x-0 bottom-0 bg-[#090d16] border-t border-indigo-500/20 shadow-2xl"
        style={{ height: "100%" }}
      >
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-16 left-0 right-0 h-px bg-white/15" />
          <div className="absolute top-0 bottom-0 left-16 w-px bg-white/15" />
          <div className="absolute bottom-16 left-0 right-0 h-px bg-white/15" />
          <div className="absolute top-0 bottom-0 right-16 w-px bg-white/15" />
        </div>

        {/* Ambient Top Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-5 md:px-16 md:pt-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
              Sardor Ibrohimov • Portfolio Vaqt Chizig'i
            </span>
          </div>

          <button
            onClick={skip}
            className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 transition-all cursor-pointer shadow-sm"
          >
            O'tkazib yuborish →
          </button>
        </div>

        {/* Central status message while intro runs */}
        <div className="absolute bottom-20 left-6 md:left-16 z-10 max-w-md pointer-events-none">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-indigo-400 mb-1.5">
            Loyihalar Vaqt Chizig'i • {PROJECTS.length} ta Loyiha
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            GSAP Timeline Animatsiyasi
          </h2>
        </div>
      </div>

      {/* Clean Stacked Project Cards (Pure visual previews without cluttering paragraphs) */}
      {PROJECTS.map((project, i) => (
        <div
          key={project.id}
          className="preloader-card absolute left-6 top-20 sm:left-16 sm:top-24 w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] origin-center scale-0 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/20 will-change-transform bg-neutral-900 pointer-events-none"
          style={{ zIndex: i + 10 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Minimalist, Clean Badge */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                0{i + 1} / {PROJECTS.length}
              </span>
              <h3 className="text-base font-bold text-white drop-shadow-sm">
                {project.title}
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
              {project.categoryLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineScalePreloader;
