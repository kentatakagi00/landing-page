"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0f0f1a] py-16 md:py-24">
      {/* Glow orb */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[500px] w-[900px] rounded-full opacity-[0.12] blur-[160px]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            Contact
          </div>

          <h2 className="mb-10 text-4xl font-bold leading-snug text-white md:text-5xl">
            Vertiport整備計画、
            <br />
            周辺住民との合意形成に
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              VP Studioをご活用ください
            </span>
          </h2>

          <motion.a
            href="mailto:soramo.vp@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-shadow duration-300 hover:shadow-[0_0_64px_rgba(99,102,241,0.65)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-5 w-5" />
            お問い合わせ
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
