import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="container mx-auto py-4 px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.img
            src="/mypro.png"
            alt="logo"
            className="rounded-full shadow-lg w-15"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-black/70 transition"
          >
            My Portfolio
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-lg italic font-bold">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              className="cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={item.path} className="inline-block py-1 px-2">
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black/30 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/sardorbek-3226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              className="rounded-full cursor-pointer shadow-md w-15"
              src="/github.png"
              alt="GitHub"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
          </a>

          <a
            href="https://t.me/ibragimov_3226"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              className="rounded-full cursor-pointer shadow-md w-15"
              src="/tg.png"
              alt="Telegram"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <FaBars/>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <ul className="flex flex-col gap-3 text-base font-semibold">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 rounded-md hover:bg-black/5"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2">
                <div className="flex items-center gap-3 px-4">
                  <a
                    href="https://github.com/sardorbek-3226"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github.png"
                      alt="GitHub"
                      className="rounded-full w-10 cursor-pointer hover:scale-110 transition"
                    />
                  </a>

                  <a
                    href="https://t.me/ibragimov_3226"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/tg.png"
                      alt="Telegram"
                      className="rounded-full w-10 cursor-pointer hover:scale-110 transition"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
