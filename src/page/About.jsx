import React from "react";
import { motion } from "framer-motion";

const AboutClean = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:grid-cols-2 gap-12 max-w-6xl w-full items-start">
        {/* Left Column */}
        <div className="flex items-center md:items-start gap-6">
          {/* Profile Image Card */}
          <motion.div
            className="p-6 rounded-xl shadow-md bg-white w-[50%] h-50 hover:shadow-xl transition"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/man.jpg"
              alt="Sardor"
              className="w-[200px] h-10 md:w-40 md:h-40 object-cover rounded-full mx-auto"
            />
          </motion.div>

          {/* About Text Card */}
          <motion.div
            className="p-6 rounded-xl shadow-md bg-white w-full hover:shadow-xl transition"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi 👋 I’m <span className="font-semibold">Sardor</span>, a{" "}
              <span className="font-semibold">Frontend Developer</span>{" "}
              passionate about building clean, responsive, and modern web
              applications. Skilled in{" "}
              <span className="text-black font-bold">React</span>,{" "}
              <span className="text-black font-bold">TailwindCSS</span>, and{" "}
              <span className="text-black font-bold">DaisyUI</span>, focusing on
              usability, performance, and interactive UI.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 w-[100%] items-center md:items-start gap-6">
          {/* JS Figure Card */}
         <div className="flex flex-col gap-4 ">
         <motion.div
            className="flex items-center gap-4 p-6 rounded-xl shadow-md bg-white w-full hover:shadow-xl transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/js.jpg"
              alt="JavaScript"
              className="w-16 h-16 object-contain rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
              JavaScript is my{" "}
              <span className="font-semibold text-yellow-600">core tool</span>{" "}
              for building interactive UIs and managing application logic.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 rounded-xl shadow-md bg-white w-full hover:shadow-xl transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/react.svg"
              alt="React"
              className="w-16 h-16 object-contain rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
              React is my{" "}
              <span className="font-semibold text-blue-600">
                favorite library
              </span>{" "}
              for building fast, reusable, and dynamic user interfaces.
            </p>
          </motion.div>
         </div>

          {/* JS Skills Card */}
          <motion.div
            className="p-6 rounded-xl shadow-md bg-white w-full hover:shadow-xl transition"
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
