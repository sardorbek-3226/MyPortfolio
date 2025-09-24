import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center 
                bg-gradient-to-br from-blue-10 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-gray-900 mb-8 tracking-wide"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Contact Me
      </motion.h1>

      <motion.form
        className="bg-white rounded-2xl shadow-lg 
                   p-8 w-full max-w-md space-y-5"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 150 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-200 
                     bg-white 
                     text-gray-800 
                     rounded-lg px-4 py-2 outline-none 
                     focus:ring-2 focus:ring-black/20 
                     transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-200 
                     bg-white 
                     text-gray-800 
                     rounded-lg px-4 py-2 outline-none 
                     focus:ring-2 focus:ring-black/20 
                     transition"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-200 
                     bg-white 
                     text-gray-800 
                     rounded-lg px-4 py-2 outline-none 
                     focus:ring-2 focus:ring-black/20 
                     transition"
        />
        <motion.button
          type="submit"
          className="w-full bg-black/80 
                     text-white font-semibold rounded-lg py-2 
                     hover:bg-black/50 
                     transition"
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
