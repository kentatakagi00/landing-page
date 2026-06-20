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
  iconColor: string;
  iconBg: string;
  border: string;
  glow: string;
};

const simFeatures: Feature[] = [
  {
    num: "01",
    icon: Search,
    title: "適地検索",
    description: "バーティポート整備指針に沿って、Vertiportを設置可能な土地・屋上を検索",
    imageSrc: "/images/feature-1.png",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-[0_8px_32px_rgba(96,165,250,0.15)]",
  },
  {
    num: "02",
    icon: Shield,
    title: "安全シミュレーション",
    description: "進入表面モデルと都市モデルとの接触をシミュレーションし、安全性を評価",
    imageSrc: "/images/feature-2.png",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-[0_8px_32px_rgba(167,139,250,0.15)]",
  },
  {
    num: "03",
    icon: Navigation,
    title: "経路生成",
    description: "建物や地形などの障害物を回避し、目的地までの最短経路を自動検索",
    imageSrc: "/images/feature-3.png",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    glow: "hover:shadow-[0_8px_32px_rgba(129,140,248,0.15)]",
  },
  {
    num: "04",
    icon: Activity,
    title: "騒音シミュレーション",
    description: "距離による減衰、空気による減衰を考慮した騒音レベルをシミュレーション",
    imageSrc: "/images/feature-4.png",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "hover:shadow-[0_8px_32px_rgba(192,132,252,0.15)]",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-[#0f0f1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            機能
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            5つの機能で、選定からレポートまで
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              一気通貫
            </span>
          </h2>
        </motion.div>

        {/* Card grid: 2×2 for features 01-04, full-width for 05 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {simFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={`group rounded-2xl border ${feature.border} bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${feature.glow}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Header */}
                <div className="mb-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent">
                      {feature.num}
                    </span>
                    <div className={`rounded-xl ${feature.iconBg} p-2`}>
                      <Icon className={`h-4 w-4 ${feature.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </div>

                {/* Screenshot */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={feature.imageSrc}
                    alt={`${feature.title}の画面`}
                    width={851}
                    height={479}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Feature 05: wide card (col-span-2) */}
          <motion.div
            id="report"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] sm:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Card header */}
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xs font-bold tracking-[0.2em] text-transparent">
                  05
                </span>
                <div className="rounded-xl bg-indigo-400/10 p-2">
                  <FileText className="h-4 w-4 text-indigo-400" />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    すべての結果を評価レポートに集約
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-slate-400 md:text-right">
                  4つのシミュレーション結果をもとに、候補地ごとの評価レポートを自動生成。AIによる編集アシスタントで内容の調整も可能です。
                </p>
              </div>
            </div>

            {/* Full-width screenshot */}
            <div className="overflow-hidden">
              <Image
                src="/images/feature-5.png"
                alt="評価レポート生成の画面"
                width={851}
                height={479}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
