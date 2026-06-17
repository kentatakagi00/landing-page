"use client";

import { motion } from "motion/react";
import Image from "next/image";

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
          {/* ---- Logos ----
              ロゴが暗い色で見えない場合は各Imageを
              <div className="bg-white rounded-lg px-3 py-1.5">...</div> で囲んでください
          ---- */}
          <div className="flex items-center gap-4">
            {/* VP Studio ロゴ (メイン) — /public/images/logo-vpstudio.png */}
            <Image
              src="/images/logo-vpstudio.png"
              alt="VP Studio"
              width={1585}
              height={270}
              className="h-7 w-auto"
              priority
            />
            <span className="h-5 w-px bg-white/20" aria-hidden="true" />
            {/* SORAMO ロゴ (補助) — /public/images/logo-soramo.png */}
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="text-xs text-slate-500">by</span>
              <Image
                src="/images/logo-soramo.png"
                alt="SORAMO"
                width={1224}
                height={226}
                className="h-5 w-auto"
              />
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#challenges" className="text-sm text-slate-400 transition-colors hover:text-white">
              課題
            </a>
            <a href="#features" className="text-sm text-slate-400 transition-colors hover:text-white">
              機能
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </motion.header>
  );
}
