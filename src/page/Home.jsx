import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 bg-gradient-to-br from-blue-10 to-purple-100 p-6 md:p-10 text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Text Block */}
      <motion.div
        className="max-w-xl md:max-w-2xl space-y-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I'm Sardor 👋
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Frontend Developer. I build modern and responsive web applications using{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">TailwindCSS</span>, and{" "}
          <span className="font-semibold">DaisyUI</span> with a focus on clean UI,
          usability, and interactivity. Passionate about creating dynamic features
          like filtering, animations, and state management to deliver smooth
          user experiences.
        </p>
      </motion.div>

      {/* Profile Image */}
      <motion.img
        src="/ormanchi.jpg"
        alt="Profile"
        className="rounded-full shadow-lg w-40 h-40 md:w-80 md:h-80 object-cover mb-6 md:mb-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}

      />
    </motion.section>
  );
};

export default Home;
