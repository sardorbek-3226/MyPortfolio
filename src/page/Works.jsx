import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "NetChat",
    category: "Real-time chat app with secure auth and modern UI.",
    image: "/NetChat.png",
    link: "https://net-chat-five.vercel.app/",
  },
  {
    title: "Healthy Blog",
    category: "Blog platform with authentication and content management.",
    image: "/healthy.png",
    link: "https://end-exam.vercel.app/",
  },
  {
    title: "DiaNova",
    category: "Healthcare platform for diabetes monitoring.",
    image: "/deanova.jpg",
    link: "https://dea-nova.vercel.app/",
  },
  {
    title: "Portfolio",
    category: "Personal portfolio built with React & Tailwind.",
    image: "/mypro.png",
    link: "https://ibrohimovs.vercel.app/",
  },
  {
    title: "Ludish",
    category: "Fast, simple website with no registration required.",
    image: "/ludish.png",
    link: "https://ludish.vercel.app/",
  },
  {
    title: "Healthy Food",
    category: "Website about healthy nutrition and lifestyle.",
    image: "/endexam.png",
    link: "https://end-exam.vercel.app/",
  },
];

const Works = () => {
  return (
    <section className="min-h-screen bg-white px-6 md:px-12 py-24">
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Selected <span className="text-black/40">Works</span>
        </h1>
        <p className="mt-4 text-black/60 max-w-xl">
          A selection of projects showcasing my frontend skills and experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {works.map((work, i) => (
          <motion.a
            key={i}
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative border border-black/10 overflow-hidden"
          >
            {/* Image */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {work.title}
              </h2>
              <p className="text-white/80 text-sm mb-4">
                {work.desc}
              </p>

              <span className="inline-block w-fit border border-white px-4 py-2 text-white text-sm uppercase tracking-widest">
                View Project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Works;
