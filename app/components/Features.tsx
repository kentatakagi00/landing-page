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
  /** /public/images/feature-N.png */
  imageSrc: string;
  iconColor: string;
  iconBg: string;
  border: string;
  hoverGlow: string;
};

const features: Feature[] = [
  {
    icon: Search,
    title: "適地検索",
    description:
      "バーティポート整備指針に沿って、Vertiportを設置可能な土地・屋上を検索",
    imageSrc: "/images/feature-1.png",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]",
  },
  {
    icon: Shield,
    title: "安全シミュレーション",
    description:
      "進入表面モデルと都市モデルとの接触をシミュレーションし、安全性を評価",
    imageSrc: "/images/feature-2.png",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(139,92,246,0.25)]",
  },
  {
    icon: Navigation,
    title: "経路生成",
    description:
      "建物や地形などの障害物を回避し、目的地までの最短経路を自動検索",
    imageSrc: "/images/feature-3.png",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]",
  },
  {
    icon: Activity,
    title: "騒音シミュレーション",
    description:
      "距離による減衰、空気による減衰を考慮した騒音レベルをシミュレーション",
    imageSrc: "/images/feature-4.png",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.25)]",
  },
  {
    icon: FileText,
    title: "レポート生成",
    description:
      "4つのシミュレーション結果をインプットに、候補地の評価レポートを自動生成",
    imageSrc: "/images/feature-5.png",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverGlow: "hover:shadow-[0_0_32px_rgba(251,191,36,0.25)]",
  },
];

function FeatureCard({
  feature,
  delay,
}: {
  feature: Feature;
  delay: number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      className={`group overflow-hidden rounded-2xl border ${feature.border} bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] ${feature.hoverGlow}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Screenshot — aspect-video (16:9), images are 851×479 */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={feature.imageSrc}
          alt={`${feature.title}のスクリーンショット`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
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

export default function Features() {
  return (
    <section id="features" className="bg-[#0f0f1a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            機能
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            4つのシミュレーションで
            <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              候補地を多角的に評価
            </span>
          </h2>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.1} />
          ))}
        </div>

        {/* Row 2: 2 cards centered — PC: 1/3 width each, Mobile: full width */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          {features.slice(3).map((f, i) => (
            <div key={f.title} className="w-full md:w-1/3">
              <FeatureCard feature={f} delay={(i + 3) * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
