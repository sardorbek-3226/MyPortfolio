import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTelegram, FaGithub, FaCopy, FaCheck } from "react-icons/fa6";
import { HiEnvelope, HiPaperAirplane, HiSparkles } from "react-icons/hi2";
import { SiVercel, SiFreelancer } from "react-icons/si";

const SERVICE_ID = "service_44klwmf";
const TEMPLATE_ID = "template_ewx5ewd";
const PUBLIC_KEY = "SqU2gOx8Vy5Ueh7BZ";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = "ibrohimovsardor5525@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    toast.success("Email buferga nusxalandi! 📋");
    setTimeout(() => setCopied(false), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman 🚀");
        e.target.reset();
        setSending(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("Xabar yuborishda xatolik yuz berdi. Iltimos Telegram yoki email orqali yozing 😕");
        setSending(false);
      }
    );
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4"
        >
          <HiSparkles className="text-sm" />
          <span>Bog'lanish</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
        >
          Birgalikda Ajoyib Loyiha <span className="text-gradient-accent">Yaratamiz</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-neutral-400"
        >
          Qiziqarli loyihangiz, to'liq stavkali ish taklifingiz yoki frilans bo'yicha savollaringiz bormi? Xabar yuboring yoki to'g'ridan-to'g'ri bog'laning.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct info and quick channels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Quick Copy Email Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <HiEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  To'g'ridan-to'g'ri Email
                </h3>
                <p className="text-sm font-medium text-white truncate max-w-[220px] sm:max-w-none">
                  {myEmail}
                </p>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:text-white transition-all active:scale-98"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-400" />
                  <span className="text-emerald-400">Nusxalandi! 📋</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Emailni nusxalash</span>
                </>
              )}
            </button>
          </div>

          {/* Telegram Fast Chat */}
          <a
            href="https://t.me/ibragimov_3226"
            target="_blank"
            rel="noopener noreferrer"
            className="group block glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <FaTelegram className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Tezkor Muloqot
                  </h3>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    @ibragimov_3226
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                Yozish →
              </span>
            </div>
          </a>

          {/* Social Presence Hub */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Ijtimoiy Tarmoqlar
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/sardorbek-3226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 transition-all text-neutral-300 hover:text-white"
              >
                <FaGithub className="text-xl mb-1.5" />
                <span className="text-xs font-medium">GitHub</span>
              </a>

              <a
                href="https://vercel.com/sardorbeks-projects-2e09c199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 transition-all text-neutral-300 hover:text-white"
              >
                <SiVercel className="text-lg mb-1.5" />
                <span className="text-xs font-medium">Vercel</span>
              </a>

              <a
                href="https://www.freelancer.com/u/ibragimov3226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 transition-all text-neutral-300 hover:text-blue-400"
              >
                <SiFreelancer className="text-xl mb-1.5" />
                <span className="text-xs font-medium">Frilans</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Working Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                  Ismingiz
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Masalan: Sardor"
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                  Email Manzilingiz
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="ismingiz@kompaniya.uz"
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                Xabaringiz
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Loyihangiz, muddatlar yoki taklifingiz haqida yozing..."
                className="w-full bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Xabar yuborilmoqda...</span>
                </>
              ) : (
                <>
                  <span>Xabarni Yuborish</span>
                  <HiPaperAirplane className="text-base rotate-45" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

