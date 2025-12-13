import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "NetChat",
    desc: "Real-time chat app with modern UI, secure authentication, and smooth messaging.",
    image: "/NetChat.png",
    href: "https://net-chat-five.vercel.app/",
  },
  {
    title: "Healthy Blog",
    desc: "Lifestyle & health blog platform with authentication and content management.",
    image: "/healthy.png",
    href: "https://end-exam.vercel.app/",
  },
  {
    title: "DiaNova Platformasi",
    desc: "Diabet nazorati, mahsulotlar monitoringi va sog‘liqni kuzatish uchun yagona platforma.",
    image: "/deanova.jpg",
    href: "https://dea-nova.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio with React, TailwindCSS, framer-motion, and EmailJS integration.",
    image: "/mypro.png",
    href: "https://ibrohimovs.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio with React, TailwindCSS, framer-motion, and EmailJS integration.",
    image: "/mypro.png",
    href: "https://ibrohimovs.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio with React, TailwindCSS, framer-motion, and EmailJS integration.",
    image: "/mypro.png",
    href: "https://ibrohimovs.vercel.app/"
  },
];

const Works = () => {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
        My <span className="text-purple-600">Works</span>
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {works.map((work, i) => (
          <motion.div
            key={i}
            className="relative bg-white/30 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden group cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-500"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <div className="h-64 md:h-72 overflow-hidden relative rounded-t-3xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {work.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{work.desc}</p>
            </div>

            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 ml-2 mb-2 mt-4 bg-purple-600 text-white font-semibold 
             rounded-lg shadow-md hover:bg-purple-700 hover:shadow-xl 
             transition-all duration-300 ease-in-out"
            >
              View
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Works;
