"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 bg-[#0a0a0f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            実績
          </div>
          <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl">
            受賞・実績
          </h2>
        </motion.div>

        {/* Award badge images */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/images/award-1.png"
              alt="PLATEAU AWARD 2025 グランプリ"
              width={1140}
              height={680}
              className="h-28 w-auto md:h-36"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/award-2.png"
              alt="アーバンデータチャレンジ 2025 土木学会賞"
              width={1150}
              height={682}
              className="h-28 w-auto md:h-36"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
