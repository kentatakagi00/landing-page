import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import { ChevronLeft } from "@/app/components/icons/MaterialChevron";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | SORAMO VP Studio`,
    description: post.excerpt,
  };
}

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

const mdxComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-relaxed text-slate-300" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-white" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-100">
      {/* Header */}
      <header className="border-b border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto max-w-2xl px-6 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-0.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ChevronLeft size={16} />
            ニュース一覧に戻る
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border px-3 py-0.5 text-xs font-medium ${categoryClass(post.category)}`}
          >
            {post.category}
          </span>
          <time className="text-xs text-slate-500" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <h1 className="mb-10 text-3xl font-bold leading-snug text-white md:text-4xl">
          {post.title}
        </h1>

        {/* MDX content */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
          <MDXRemote source={post.content!} components={mdxComponents} />
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-0.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ChevronLeft size={16} />
            ニュース一覧に戻る
          </Link>
        </div>
      </article>
    </main>
  );
}
