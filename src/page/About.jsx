import React from "react";
import { motion } from "framer-motion";

const AboutClean = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-white p-6 md:p-12  bg-gradient-to-br from-blue-10 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <div className="flex flex-col items-center md:items-start gap-10">
          <motion.div
            className="p-6 rounded-xl shadow-md bg-gray-50 "
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi 👋 I’m <span className="font-semibold">Sardor</span>, a{" "}
              <span className="font-semibold">Frontend Developer</span> who
              builds modern and responsive applications. Skilled in{" "}
              <span className="text-black font-bold">React</span>,{" "}
              <span className="text-black font-bold">TailwindCSS</span>, and{" "}
              <span className="text-black font-bold">DaisyUI</span>, I focus on
              clean UIs, usability, and performance.
            </p>
          </motion.div>

          <motion.figure
            className="flex items-center gap-4  bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/js.jpg"
              alt="JavaScript"
              className="w-16 h-16 object-contain rounded-lg shadow hover:scale-105 transition"
            />
            <figcaption className="text-gray-700 text-sm leading-relaxed max-w-xs">
              JavaScript is my{" "}
              <span className="font-semibold text-yellow-600">core tool</span>{" "}
              for building interactive UIs and managing application logic.
            </figcaption>
          </motion.figure>
        </div>

        <div className="flex flex-col items-center gap-10">
          <motion.div
            className="p-4 rounded-xl shadow-md bg-gray-50"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/man.jpg"
              alt="Sardor"
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            className="p-6 rounded-xl shadow-md bg-gray-50 max-w-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              JavaScript Skills
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm list-disc list-inside">
              <li>ES6+ modern syntax</li>
              <li>REST API integration</li>
              <li>Reusable components</li>
              <li>Performance optimization</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutClean;
