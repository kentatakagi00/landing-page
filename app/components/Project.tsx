"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BarChart2, Layout, Zap } from "lucide-react";

const strengths = [
  {
    icon: BarChart2,
    title: "航空/都市データの分析力",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-[0_0_24px_rgba(96,165,250,0.2)]",
  },
  {
    icon: Layout,
    title: "UI/UXを重視したアプリ開発力",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    glow: "hover:shadow-[0_0_24px_rgba(129,140,248,0.2)]",
  },
  {
    icon: Zap,
    title: "高速にアイデアを形にする実行力",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-[0_0_24px_rgba(167,139,250,0.2)]",
  },
];

const details = [
  { label: "プロジェクト名", value: "SORAMO" },
  { label: "設立", value: "2025年11月" },
  { label: "代表", value: "髙木 健太" },
  { label: "拠点", value: "神奈川県" },
  {
    label: "業務内容",
    value: "次世代モビリティ向けアプリケーションの企画/設計/開発コンサルティング",
  },
  { label: "E-Mail", value: "soramo.vp@gmail.com", isEmail: true },
];

export default function Project() {
  return (
    <section id="project" className="bg-[#0f0f1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            Project
          </div>

          {/* SORAMO logo large */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-soramo.png"
              alt="SORAMO"
              width={1224}
              height={226}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl">
            デジタル技術で
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              ドローン/eVTOLの普及を支えます。
            </span>
          </h2>
        </motion.div>

        {/* Strength cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className={`rounded-2xl border ${s.border} bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 ${s.glow} hover:bg-white/[0.07]`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`mb-4 w-fit rounded-xl ${s.iconBg} p-3`}>
                  <Icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Project details */}
        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <dl>
            {details.map((d, i) => (
              <div
                key={d.label}
                className={`flex flex-col gap-1 px-8 py-4 sm:flex-row sm:gap-0 ${
                  i !== details.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <dt className="w-36 shrink-0 text-sm text-slate-500">{d.label}</dt>
                <dd className="text-sm font-medium text-slate-200">
                  {d.isEmail ? (
                    <a
                      href={`mailto:${d.value}`}
                      className="text-blue-400 transition-colors hover:text-blue-300"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

      </div>
    </section>
  );
}
