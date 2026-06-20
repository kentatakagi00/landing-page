"use client";

import { motion } from "motion/react";
import { MapPin, AlertTriangle, Navigation, Volume2, type LucideIcon } from "lucide-react";

type Challenge = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
  border: string;
  glow: string;
};

const challenges: Challenge[] = [
  {
    icon: MapPin,
    title: "用地選定",
    description: "バーティポート整備指針に沿った土地・屋上の選定条件が複雑で、候補地の絞り込みに多大な時間がかかる",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-[0_0_28px_rgba(96,165,250,0.2)]",
  },
  {
    icon: AlertTriangle,
    title: "障害物チェック",
    description: "用地周辺の建物・構造物との安全な離着陸経路の確保。進入表面への干渉チェックに専門知識が必要",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-[0_0_28px_rgba(167,139,250,0.2)]",
  },
  {
    icon: Navigation,
    title: "経路作成",
    description: "目的地までの最適な飛行経路の設計。障害物回避と飛行距離の最短化を同時に満たす経路の算出が難しい",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    glow: "hover:shadow-[0_0_28px_rgba(129,140,248,0.2)]",
  },
  {
    icon: Volume2,
    title: "騒音チェック",
    description: "経路上での騒音影響の事前評価。周辺住民への影響を数値で示した合意形成資料の作成に手間がかかる",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "hover:shadow-[0_0_28px_rgba(192,132,252,0.2)]",
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="bg-[#0f0f1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-sm text-rose-400">
            課題
          </div>
          <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl">
            Vertiport整備が抱える
            <span className="block bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              4つの課題
            </span>
          </h2>
        </motion.div>

        {/* Cards — 2×2 grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={`rounded-2xl border ${item.border} bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 ${item.glow} hover:bg-white/[0.06]`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.07, type: "tween", ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className={`mb-5 w-fit rounded-xl ${item.iconBg} p-3`}>
                  <Icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge to features */}
        <motion.p
          className="mt-16 text-center text-xl font-semibold md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            これら4つの課題に、VP&nbsp;Studioが一気通貫で答えます。
          </span>
        </motion.p>
      </div>
    </section>
  );
}
