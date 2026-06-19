"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Search,
  Shield,
  Navigation,
  Activity,
  FileText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  accent: string;
  accentBg: string;
  glowRgba: string;
};

const simFeatures: Feature[] = [
  {
    num: "01",
    icon: Search,
    title: "適地検索",
    description:
      "バーティポート整備指針に沿って、Vertiportを設置可能な土地・屋上を検索",
    imageSrc: "/images/feature-1.png",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    glowRgba: "rgba(52,211,153,0.25)",
  },
  {
    num: "02",
    icon: Shield,
    title: "安全シミュレーション",
    description:
      "進入表面モデルと都市モデルとの接触をシミュレーションし、安全性を評価",
    imageSrc: "/images/feature-2.png",
    accent: "text-emerald-300",
    accentBg: "bg-emerald-500/10",
    glowRgba: "rgba(16,185,129,0.25)",
  },
  {
    num: "03",
    icon: Navigation,
    title: "経路生成",
    description:
      "建物や地形などの障害物を回避し、目的地までの最短経路を自動検索",
    imageSrc: "/images/feature-3.png",
    accent: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    glowRgba: "rgba(34,211,238,0.25)",
  },
  {
    num: "04",
    icon: Activity,
    title: "騒音シミュレーション",
    description:
      "距離による減衰、空気による減衰を考慮した騒音レベルをシミュレーション",
    imageSrc: "/images/feature-4.png",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    glowRgba: "rgba(52,211,153,0.25)",
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  const imageRight = index % 2 === 0;

  const textBlock = (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: imageRight ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className={`text-xs font-bold tracking-[0.2em] ${feature.accent}`}>
          {feature.num}
        </span>
        <span className="h-px w-8 bg-white/20" />
        <div className={`rounded-xl ${feature.accentBg} p-2.5`}>
          <Icon className={`h-5 w-5 ${feature.accent}`} />
        </div>
      </div>
      <h3 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
        {feature.title}
      </h3>
      <p className="text-base leading-relaxed text-slate-400">
        {feature.description}
      </p>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: imageRight ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.6)" }}
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.04] to-transparent" />
        <Image
          src={feature.imageSrc}
          alt={`${feature.title}の画面`}
          width={851}
          height={479}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>
    </motion.div>
  );

  const cols = imageRight
    ? "md:[grid-template-columns:2fr_3fr]"
    : "md:[grid-template-columns:3fr_2fr]";

  return (
    <div className={`grid grid-cols-1 items-center gap-10 py-16 md:gap-16 lg:py-20 ${cols}`}>
      {imageRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          <div className="md:order-2">{textBlock}</div>
          <div className="md:order-1">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-[#0f0f1a]">

      {/* ---- Section heading ---- */}
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            機能
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            5つの機能で、選定からレポートまで
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              一気通貫
            </span>
          </h2>
        </motion.div>

        {/* Features 01-04: alternating rows */}
        <div className="divide-y divide-white/[0.05]">
          {simFeatures.map((f, i) => (
            <FeatureRow key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>

      {/* ---- Feature 05: Report generation — full-width wide card ---- */}
      <div id="report" className="mt-8 scroll-mt-24 bg-[#0a0a0f] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Card header */}
            <div className="px-8 pt-10 pb-8 md:px-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">05</span>
                <span className="h-px w-8 bg-white/20" />
                <div className="rounded-xl bg-cyan-500/10 p-2.5">
                  <FileText className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
                    STEP 5
                  </p>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    すべての結果を評価レポートに集約
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-slate-400 md:text-right">
                  4つのシミュレーション結果をもとに、候補地ごとの評価レポートを自動生成。AIによる編集アシスタントで内容の調整も可能です。
                </p>
              </div>
            </div>

            {/* Full-width screenshot */}
            <div
              className="relative overflow-hidden"
              style={{ boxShadow: "inset 0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 to-transparent" />
              <Image
                src="/images/feature-5.png"
                alt="評価レポート生成の画面"
                width={851}
                height={479}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Sub-CTA ---- */}
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-10 backdrop-blur-sm">
            <p className="mb-6 text-base text-slate-300 md:text-lg">
              VP&nbsp;Studioについて詳しく知りたい方はこちら
            </p>
            <a
              href="mailto:soramo.vp@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(52,211,153,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(52,211,153,0.55)]"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
