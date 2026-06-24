"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { NewsPost } from "@/lib/news";
import { ChevronRight } from "@/app/components/icons/MaterialChevron";

const CATEGORY_COLORS: Record<string, string> = {
  "受賞": "border-violet-500/30 bg-violet-500/10 text-violet-300",
  "登壇・イベント": "border-blue-500/30 bg-blue-500/10 text-blue-300",
};

function categoryClass(category: string) {
  return CATEGORY_COLORS[category] ?? "border-slate-500/30 bg-slate-500/10 text-slate-300";
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

interface Props {
  posts: NewsPost[];
}

export default function NewsListClient({ posts }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24">
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.28,
              delay: index * 0.07,
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ willChange: "transform, opacity" }}
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-[background-color,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-[0_4px_24px_rgba(99,102,241,0.1)]"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-0.5 text-xs font-medium ${categoryClass(post.category)}`}
              >
                {post.category}
              </span>
              <time className="text-xs text-slate-500" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>

            <h2 className="mb-2 text-lg font-bold text-white transition-colors duration-200 group-hover:text-blue-300 md:text-xl">
              {post.title}
            </h2>

            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
              {post.excerpt}
            </p>

            <Link
              href={`/news/${post.slug}`}
              className="inline-flex items-center gap-0.5 text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              続きを読む
              <ChevronRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
