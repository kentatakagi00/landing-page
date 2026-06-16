"use client";

import { motion, useInView } from "motion/react";
import { Trophy, Award, type LucideIcon } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ---- Count-up hook ---- */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration]);

  return { count, ref };
}

/* ---- Stat counter ---- */
function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-1 text-5xl font-extrabold text-white md:text-6xl">
        <span ref={ref}>{count}</span>
        {suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

/* ---- Award data ---- */
type AwardItem = {
  icon: LucideIcon;
  name: string;
  prize: string;
  iconColor: string;
  border: string;
  bg: string;
  glow: string;
};

const awards: AwardItem[] = [
  {
    icon: Trophy,
    name: "PLATEAU AWARD 2025",
    prize: "グランプリ",
    iconColor: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/[0.08]",
    glow: "shadow-[0_0_40px_rgba(251,191,36,0.1)]",
  },
  {
    icon: Award,
    name: "アーバンデータチャレンジ2025",
    prize: "土木学会賞",
    iconColor: "text-indigo-400",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/[0.08]",
    glow: "shadow-[0_0_40px_rgba(99,102,241,0.1)]",
  },
];

const stats = [
  { value: 4, suffix: "", label: "シミュレーション項目" },
  { value: 2, suffix: "", label: "国内受賞実績" },
  { value: 1, suffix: "本", label: "一気通貫ワークフロー" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
            実績
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            実績・
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              受賞
            </span>
          </h2>
        </motion.div>

        {/* Stats count-up */}
        <div className="mb-16 grid grid-cols-3 gap-4 md:gap-12">
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.15} />
          ))}
        </div>

        {/* Award badges */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {awards.map((a, index) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.name}
                className={`flex items-center gap-5 rounded-2xl border ${a.border} ${a.bg} p-6 backdrop-blur-sm ${a.glow}`}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`shrink-0 rounded-2xl border ${a.border} p-4`}>
                  <Icon className={`h-8 w-8 ${a.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{a.name}</p>
                  <p className={`text-2xl font-bold ${a.iconColor}`}>{a.prize}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
