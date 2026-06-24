import type { Metadata } from "next";
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import NewsListClient from "./NewsListClient";
import { ChevronLeft } from "@/app/components/icons/MaterialChevron";

export const metadata: Metadata = {
  title: "News | SORAMO VP Studio",
  description: "SORAMOの最新情報・受賞・イベント登壇情報をお届けします。",
};

export default function NewsPage() {
  const posts = getAllNews();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-100">
      {/* Header */}
      <header className="border-b border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-0.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ChevronLeft size={16} />
            vpstudio.app に戻る
          </Link>
        </div>
      </header>

      {/* Page title */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
          お知らせ
        </div>
        <h1 className="mb-2 text-5xl font-bold text-white">News</h1>
        <p className="text-slate-400">SORAMOの最新情報</p>
      </section>

      {/* Article list */}
      <NewsListClient posts={posts} />
    </main>
  );
}
