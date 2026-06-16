"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f]">
      {/* ---- Animated gradient blobs ---- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob-1 absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
        <div
          className="blob-2 absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <div
          className="blob-3 absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full opacity-15 blur-[90px]"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        />
      </div>

      {/* ---- Subtle grid overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ---- 2-column content ---- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 pt-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Left: text */}
          <div className="text-center md:text-left">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              SORAMO が開発するWebアプリ
            </motion.div>

            <motion.h1
              className="mb-5 text-6xl font-extrabold tracking-tight md:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                VP Studio
              </span>
            </motion.h1>

            <motion.p
              className="mb-5 text-xl font-semibold leading-snug text-slate-200 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              空飛ぶクルマの離着陸場候補を、
              <br />
              スピーディーに選定・レポート
            </motion.p>

            <motion.p
              className="mb-10 text-sm leading-relaxed text-slate-400 md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              バーティポート整備指針に基づく用地選定から、安全・経路・騒音シミュレーション、
              評価レポート生成までを一気通貫で支援します。
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)]"
              >
                お問い合わせ
              </a>
              <a
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                機能を見る
              </a>
            </motion.div>
          </div>

          {/* Right: hero screenshot — /public/images/hero-screenshot.png (2304×1296) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Float animation wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow halo behind the image */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              />

              {/* Glassmorphism frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.15] shadow-[0_0_60px_rgba(99,102,241,0.2),0_30px_60px_rgba(0,0,0,0.6)]">
                {/* Subtle glass overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />
                <Image
                  src="/images/hero-screenshot.png"
                  alt="VP Studio アプリのスクリーンショット"
                  width={2304}
                  height={1296}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
