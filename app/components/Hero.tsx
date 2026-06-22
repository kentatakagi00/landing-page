"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const TARGET_BADGES = [
  "運航事業者",
  "自治体・都市計画担当者",
  "建設・不動産事業者",
];

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f]">
      {/* ---- Background video ---- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/movie/poster.jpg"
        onCanPlay={() => setVideoReady(true)}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
        src="/movie/movie.mp4"
      />

      {/* ---- Overlay: uniform on mobile, left-gradient on desktop ---- */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0f]/60 md:bg-gradient-to-r md:from-[#0a0a0f] md:via-[#0a0a0f]/60 md:to-[#0a0a0f]/20" />

      {/* ---- Color tint blobs over video ---- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
        <div
          className="absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full opacity-15 blur-[90px]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />
      </div>

      {/* ---- Subtle grid overlay ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 w-full px-8 py-32 md:pl-[8%] md:pr-16">
        <div className="flex flex-col items-center text-center md:w-1/3 md:min-w-[360px] md:items-start md:text-left">

          {/* 1. Logo */}
          <motion.div
            className="mb-4 w-[min(80vw,28rem)] md:w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/images/logo-vpstudio.png"
              alt="VP Studio"
              width={1585}
              height={270}
              className="h-auto w-full"
              priority
            />
          </motion.div>

          {/* 2. by SORAMO */}
          <motion.div
            className="mb-10 flex items-center gap-1.5 self-center md:self-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-sm text-slate-500">by</span>
            <Image
              src="/images/logo-soramo.png"
              alt="SORAMO"
              width={1224}
              height={226}
              className="h-4 w-auto opacity-60"
            />
          </motion.div>

          {/* 3. キャッチコピー */}
          <motion.p
            className="mb-4 text-2xl font-semibold leading-snug text-slate-100 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            空飛ぶクルマの離着陸場候補をスピーディーに選定・レポート
          </motion.p>

          {/* 4. サブコピー */}
          <motion.p
            className="mb-8 text-sm leading-relaxed text-slate-400 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            用地選定から安全・経路・騒音シミュレーション、評価レポート生成までを一気通貫で支援します。
          </motion.p>

          {/* 5. 対象ユーザーバッジ */}
          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-2 md:justify-start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {TARGET_BADGES.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/[0.15] bg-white/[0.07] px-4 py-1.5 text-xs text-slate-300 backdrop-blur-sm"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* 6. CTAボタン */}
          <motion.div
            className="flex flex-row flex-wrap items-center justify-center gap-3 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
          >
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(99,102,241,0.65)] sm:px-10 sm:py-4"
            >
              お問い合わせ
            </a>
            <a
              href="#features"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white sm:px-10 sm:py-4"
            >
              機能を見る
            </a>
          </motion.div>
        </div>
      </div>

      {/* 7. Scroll indicator (icon only) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500/65"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
