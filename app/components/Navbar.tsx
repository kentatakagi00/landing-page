"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20">
              <Zap className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm font-bold text-white">VP Studio</span>
            <span className="hidden text-xs text-slate-500 sm:inline">by SORAMO</span>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#challenges" className="text-sm text-slate-400 transition-colors hover:text-white">
              課題
            </a>
            <a href="#features" className="text-sm text-slate-400 transition-colors hover:text-white">
              機能
            </a>
            <a href="#achievements" className="text-sm text-slate-400 transition-colors hover:text-white">
              実績
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </motion.header>
  );
}
