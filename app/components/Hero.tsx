"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f]">
      {/* ---- Animated gradient blobs ---- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob-1 absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }}
        />
        <div
          className="blob-2 absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }}
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
        <div className="grid grid-cols-1 items-center gap-12 md:gap-8 md:[grid-template-columns:0.7fr_1.3fr]">

          {/* Left: text */}
          <div className="text-center md:text-left">
            <motion.div
              className="mb-10 flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-[min(88vw,32rem)] shrink-0 md:w-[min(44vw,32rem)]">
                <Image
                  src="/images/logo-vpstudio.png"
                  alt="VP Studio"
                  width={1585}
                  height={270}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </motion.div>

            <motion.p
              className="mb-5 text-xl font-semibold leading-snug text-slate-200 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              空飛ぶクルマの離着陸場候補を、
              <br />
              スピーディーに選定・レポート
            </motion.p>

            <motion.p
              className="mb-10 text-sm leading-relaxed text-slate-400 md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              用地選定から安全・経路・騒音シミュレーション、評価レポート生成までを一気通貫で支援します。
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(52,211,153,0.6)]"
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

            {/* Award badges */}
            <motion.div
              className="mt-7 flex items-center justify-center gap-7 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Image
                src="/images/award-1.png"
                alt="PLATEAU AWARD 2025 グランプリ"
                width={1140}
                height={680}
                className="h-24 w-auto"
              />
              <Image
                src="/images/award-2.png"
                alt="アーバンデータチャレンジ 2025 土木学会賞"
                width={1150}
                height={682}
                className="h-24 w-auto"
              />
            </motion.div>
          </div>

          {/* Right: hero screenshot — large, dramatic */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="relative md:-mr-10 lg:-mr-16"
          >
            {/* Screenshot */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.7)] md:ml-auto md:w-[125%]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.05] to-transparent" />
              <Image
                src="/images/hero-screenshot.png"
                alt="VP Studio アプリ画面"
                width={2304}
                height={1296}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
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
