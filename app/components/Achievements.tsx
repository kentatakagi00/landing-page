"use client";

import { motion, useInView } from "motion/react";
import { Crown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ---- Count-up hook (unchanged) ---- */
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
      const eased = 1 - Math.pow(1 - progress, 3);
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

/* ---- Stat counter (unchanged) ---- */
function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
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

/* ---- Laurel wreath SVGs ---- */
function LaurelLeft({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="44" height="88" viewBox="0 0 44 88" aria-hidden="true" className={className} style={style}>
      {/* stem */}
      <path d="M32 4 Q31 44 32 84" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* leaves, angled outward to the left */}
      <ellipse cx="18" cy="12" rx="11" ry="3.8" transform="rotate(-55 18 12)" fill="currentColor" />
      <ellipse cx="14" cy="25" rx="11" ry="3.8" transform="rotate(-43 14 25)" fill="currentColor" />
      <ellipse cx="11" cy="38" rx="11" ry="3.8" transform="rotate(-30 11 38)" fill="currentColor" />
      <ellipse cx="11" cy="52" rx="11" ry="3.8" transform="rotate(-15 11 52)" fill="currentColor" />
      <ellipse cx="13" cy="65" rx="11" ry="3.8" transform="rotate(-5 13 65)" fill="currentColor" />
      <ellipse cx="18" cy="77" rx="11" ry="3.8" transform="rotate(8 18 77)" fill="currentColor" />
    </svg>
  );
}

function LaurelRight({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="44" height="88" viewBox="0 0 44 88" aria-hidden="true" className={className} style={style}>
      {/* stem */}
      <path d="M12 4 Q13 44 12 84" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* leaves, angled outward to the right (mirror of left) */}
      <ellipse cx="26" cy="12" rx="11" ry="3.8" transform="rotate(55 26 12)" fill="currentColor" />
      <ellipse cx="30" cy="25" rx="11" ry="3.8" transform="rotate(43 30 25)" fill="currentColor" />
      <ellipse cx="33" cy="38" rx="11" ry="3.8" transform="rotate(30 33 38)" fill="currentColor" />
      <ellipse cx="33" cy="52" rx="11" ry="3.8" transform="rotate(15 33 52)" fill="currentColor" />
      <ellipse cx="31" cy="65" rx="11" ry="3.8" transform="rotate(5 31 65)" fill="currentColor" />
      <ellipse cx="26" cy="77" rx="11" ry="3.8" transform="rotate(-8 26 77)" fill="currentColor" />
    </svg>
  );
}

/* ---- Award badge ---- */
type AwardData = {
  eventName: string;
  year: string;
  prize: string;
};

const GOLD = "#D4AF37";
const GOLD_DARK = "#B8860B";

function AwardBadge({ award, delay }: { award: AwardData; delay: number }) {
  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden rounded-3xl px-8 py-10 text-center"
      style={{
        border: `1px solid ${GOLD}44`,
        background: `radial-gradient(ellipse at 50% 0%, ${GOLD}14 0%, transparent 65%), #0d0d18`,
        boxShadow: `0 0 50px ${GOLD}22, inset 0 1px 0 ${GOLD}33`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Top corner accents */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-20 w-20 rounded-tl-3xl opacity-20"
        style={{ background: `linear-gradient(135deg, ${GOLD}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-tr-3xl opacity-20"
        style={{ background: `linear-gradient(225deg, ${GOLD}, transparent)` }}
      />

      {/* Crown + Laurel row */}
      <div className="mb-5 flex items-center gap-3">
        <LaurelLeft style={{ color: GOLD, filter: `drop-shadow(0 0 4px ${GOLD}88)` }} />
        <Crown
          className="h-10 w-10 shrink-0"
          style={{ color: GOLD, filter: `drop-shadow(0 0 10px ${GOLD})` }}
        />
        <LaurelRight style={{ color: GOLD, filter: `drop-shadow(0 0 4px ${GOLD}88)` }} />
      </div>

      {/* Line 1: award name + year */}
      <p
        className="mb-0.5 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: `${GOLD}bb` }}
      >
        {award.eventName}
      </p>
      <p
        className="mb-4 text-2xl font-bold tracking-widest"
        style={{ color: GOLD }}
      >
        {award.year}
      </p>

      {/* Divider */}
      <div
        className="mb-4 h-px w-24"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}66, transparent)` }}
      />

      {/* Line 2: prize name (large, emphasized) */}
      <p
        className="text-3xl font-extrabold tracking-wide md:text-4xl"
        style={{
          color: "#fff",
          textShadow: `0 0 20px ${GOLD}99, 0 0 40px ${GOLD_DARK}66`,
        }}
      >
        {award.prize}
      </p>
    </motion.div>
  );
}

/* ---- Data ---- */
const awards: AwardData[] = [
  { eventName: "PLATEAU AWARD", year: "2025", prize: "グランプリ" },
  { eventName: "アーバンデータチャレンジ", year: "2025", prize: "土木学会賞" },
];

const stats = [
  { value: 4, suffix: "", label: "シミュレーション項目" },
  { value: 2, suffix: "", label: "国内受賞実績" },
  { value: 1, suffix: "本", label: "一気通貫ワークフロー" },
];

/* ---- Section ---- */
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

        {/* Award badges —横並び(PC) / 縦並び(Mobile) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {awards.map((a, i) => (
            <AwardBadge key={a.prize} award={a} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
