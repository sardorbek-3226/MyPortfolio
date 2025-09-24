import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "NetChat",
    desc: "Real-time chat app with modern UI, secure authentication, and smooth messaging.",
    image: "/NetChat.png",
  },
  {
    title: "User Dashboard",
    desc: "A responsive user management system with role-based access and clean analytics.",
    image: "/users.jpg",
  },
  {
    title: "Healthy Blog",
    desc: "Lifestyle & health blog platform with authentication and content management.",
    image: "/healthy.png",
  },
];

const Works = () => {
  return (
    <motion.section
      className="min-h-screen  bg-gradient-to-br from-blue-10 to-purple-100 py-16 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
        My <span className="text-black/60">Works</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {works.map((work, i) => (
          <motion.div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="h-56 overflow-hidden relative">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-black/70 transition">
                {work.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{work.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Works;
