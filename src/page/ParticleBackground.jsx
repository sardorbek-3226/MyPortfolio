// ParticleBackground.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    const tempParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 5 + Math.random() * 15,
      shape: Math.random() > 0.5 ? "circle" : "square",
      speedX: (Math.random() - 0.5) * 60,
      speedY: (Math.random() - 0.5) * 60,
      delay: Math.random() * 2,
    }));
    setParticles(tempParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={p.shape === "circle" ? "absolute rounded-full" : "absolute"}
          style={{
            width: p.size,
            height: p.size,
            border: "1px solid rgba(0,0,0,0.6)",    
            opacity: 0.6,
            top: p.y,
            left: p.x,
          }}
          animate={{
            x: [p.x, mouse.x + Math.sin(i) * 50, p.x],
            y: [p.y, mouse.y + Math.cos(i) * 50, p.y],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
