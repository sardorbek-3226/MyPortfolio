import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMousePointer } from "react-icons/fa";

const CursorEffect = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
      <motion.div
        className="absolute pointer-events-none text-black"
        style={{
          fontSize: 24,
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)", // iconni markazlashtirish
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <FaMousePointer />
      </motion.div>
    );
  };

export default CursorEffect;
