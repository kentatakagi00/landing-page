"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Search,
  Shield,
  Navigation,
  Activity,
  FileText,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  accent: string;          // Tailwind text color class
  accentBg: string;        // Tailwind bg class
  glowRgba: string;        // rgba for box-shadow / filter
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
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${feature.glowRgba} 0%, transparent 70%)` }}
      />
      {/* Frame */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/[0.12]"
        style={{ boxShadow: `0 0 60px ${feature.glowRgba}, 0 32px 64px rgba(0,0,0,0.6)` }}
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
          {/* Mobile: text first. Desktop: image col-1 (3fr), text col-2 (2fr). */}
          <div className="md:order-2">{textBlock}</div>
          <div className="md:order-1">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#0f0f1a]">

      {/* ---- Section 1 heading ---- */}
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            機能1
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            4つのシミュレーションで
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              候補地を多角的に評価
            </span>
          </h2>
        </motion.div>

        {/* Alternating feature rows */}
        <div className="divide-y divide-white/[0.05]">
          {simFeatures.map((f, i) => (
            <FeatureRow key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>

      {/* ---- Section 2: Report generation ---- */}
      <div className="bg-[#0a0a0f] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            id="report"
            className="mb-16 scroll-mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
              機能2
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              シミュレーション結果から
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                評価レポートを自動生成
              </span>
            </h2>
          </motion.div>

          {/* Large centered screenshot */}
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex items-start gap-4 text-center md:text-left">
              <div className="hidden shrink-0 rounded-xl bg-cyan-500/10 p-3 md:block">
                <FileText className="h-6 w-6 text-cyan-400" />
              </div>
              <p className="text-base leading-relaxed text-slate-400">
                4つのシミュレーション結果をもとに、候補地ごとの評価レポートを自動生成。AIによる編集アシスタントで内容の調整も可能です。
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl blur-3xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(34,211,238,0.2) 0%, transparent 70%)" }}
              />
              <div
                className="relative overflow-hidden rounded-2xl border border-white/[0.12]"
                style={{ boxShadow: "0 0 60px rgba(34,211,238,0.2), 0 32px 64px rgba(0,0,0,0.6)" }}
              >
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.04] to-transparent" />
                <Image
                  src="/images/feature-5.png"
                  alt="評価レポート生成の画面"
                  width={851}
                  height={479}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
