"use client";

import { motion } from "motion/react";
import { MapPin, AlertTriangle, Route, Volume2, type LucideIcon } from "lucide-react";

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
    description: "条件に沿った適切な土地・屋上の選定が難しい",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]",
  },
  {
    icon: AlertTriangle,
    title: "障害物チェック",
    description: "用地周辺の障害物との安全な離着陸経路の確保",
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]",
  },
  {
    icon: Route,
    title: "経路作成",
    description: "目的地までの最適な飛行経路の設計",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]",
  },
  {
    icon: Volume2,
    title: "騒音チェック",
    description: "経路上での騒音影響の事前評価",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]",
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="bg-[#0a0a0f] py-24">
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
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Vertiport整備が抱える
            <span className="block bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              4つの課題
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={`rounded-2xl border ${item.border} bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 ${item.glow}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`mb-4 w-fit rounded-xl ${item.iconBg} p-3`}>
                  <Icon className={`h-6 w-6 ${item.iconColor}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
