import React from "react";
import { motion } from "framer-motion";

export const action = async () => {
  return null;
};

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center  bg-gradient-to-br from-blue-10 to-purple-100 text-center p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-2xl space-y-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Hi, I'm Sardor 👋</h1>
        <p className="text-base md:text-lg text-gray-700">
          Frontend Developer. I build modern and responsive web applications
          using <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">TailwindCSS</span>, and{" "}
          <span className="font-semibold">DaisyUI</span> with a focus on clean
          UI, usability, and interactivity. Passionate about creating dynamic
          features like filtering, animations, and state management to deliver
          smooth user experiences.
        </p>
      </motion.div>

      <motion.img
        src="/man.jpg"
        alt="Profile"
        className="mt-6 md:mt-8 rounded-full shadow-lg w-40 h-40 md:w-80 md:h-80 object-cover"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />
    </motion.div>
  );
};

export default Home;
