import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- EmailJS keys (EmailJS dashboard'dan oling) ---
const SERVICE_ID = "service_44klwmf";
const TEMPLATE_ID = "template_ewx5ewd";
const PUBLIC_KEY = "SqU2gOx8Vy5Ueh7BZ";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send message, try again.");
          setSending(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-white text-black px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h1 className="absolute text-[16vw] font-extrabold text-black/5 select-none pointer-events-none">
        CONTACT
      </h1>

      <motion.div
        variants={item}
        className="relative w-full max-w-xl border border-black/10 p-10 bg-white"
      >
        <h2 className="text-4xl font-bold mb-2">Let’s work together</h2>
        <p className="text-black/60 mb-8">
          Have a project or idea? Send me a message.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <motion.input
            variants={item}
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full border-b border-black/30 py-3 outline-none"
          />

          <motion.input
            variants={item}
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full border-b border-black/30 py-3 outline-none"
          />

          <motion.textarea
            variants={item}
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full border-b border-black/30 py-3 outline-none resize-none"
          />

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={sending}
            className="mt-6 border border-black px-8 py-3 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
