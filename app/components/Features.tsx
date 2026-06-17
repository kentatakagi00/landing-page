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
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  iconColor: string;
  iconBg: string;
  border: string;
  hoverGlow: string;
};

const simFeatures: Feature[] = [
  {
    icon: Search,
    title: "適地検索",
    description: "バーティポート整備指針に沿って、Vertiportを設置可能な土地・屋上を検索",
    imageSrc: "/images/feature-1.png",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.25)]",
  },
  {
    icon: Shield,
    title: "安全シミュレーション",
    description: "進入表面モデルと都市モデルとの接触をシミュレーションし、安全性を評価",
    imageSrc: "/images/feature-2.png",
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(16,185,129,0.25)]",
  },
  {
    icon: Navigation,
    title: "経路生成",
    description: "建物や地形などの障害物を回避し、目的地までの最短経路を自動検索",
    imageSrc: "/images/feature-3.png",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]",
  },
  {
    icon: Activity,
    title: "騒音シミュレーション",
    description: "距離による減衰、空気による減衰を考慮した騒音レベルをシミュレーション",
    imageSrc: "/images/feature-4.png",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.25)]",
  },
];

const reportFeature: Feature = {
  icon: FileText,
  title: "評価レポート生成",
  description:
    "4つのシミュレーション結果をもとに、候補地ごとの評価レポートを自動生成。AIによる編集アシスタントで内容の調整も可能です。",
  imageSrc: "/images/feature-5.png",
  iconColor: "text-cyan-400",
  iconBg: "bg-cyan-500/10",
  border: "border-cyan-500/20",
  hoverGlow: "hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]",
};

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      className={`group overflow-hidden rounded-2xl border ${feature.border} bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] ${feature.hoverGlow}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={feature.imageSrc}
          alt={`${feature.title}のスクリーンショット`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Icon + title + description */}
      <div className="p-6">
        <div className={`mb-3 w-fit rounded-xl ${feature.iconBg} p-3`}>
          <Icon className={`h-6 w-6 ${feature.iconColor}`} />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
      </div>
    </motion.div>
  );
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
      {label}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#0f0f1a] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ---- Section 1: 4 simulations ---- */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge label="機能1" />
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            4つのシミュレーションで
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              候補地を多角的に評価
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mb-24 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {simFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.1} />
          ))}
        </div>

        {/* ---- Section 2: Report generation ---- */}
        <motion.div
          id="report"
          className="mb-16 scroll-mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge label="機能2" />
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            シミュレーション結果から
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              評価レポートを自動生成
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <FeatureCard feature={reportFeature} delay={0} />
        </div>

      </div>
    </section>
  );
}
