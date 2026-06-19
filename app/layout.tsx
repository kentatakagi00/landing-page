import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vpstudio.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SORAMO VP Studio | バーティポート選定・評価レポート支援",
  description:
    "SORAMO VP Studioは、空飛ぶクルマのバーティポート候補地を迅速に選定し、評価レポートを作成するWebアプリです。用地選定・安全評価・経路生成・騒音評価を一気通貫で支援します。",
  applicationName: "SORAMO VP Studio",
  keywords: [
    "SORAMO",
    "VP Studio",
    "SORAMO VP Studio",
    "バーティポート",
    "Vertiport",
    "空飛ぶクルマ",
    "離着陸場選定",
    "評価レポート",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SORAMO VP Studio | バーティポート選定・評価レポート支援",
    description:
      "SORAMO VP Studioは、空飛ぶクルマのバーティポート候補地を迅速に選定し、評価レポートを作成するWebアプリです。",
    url: "/",
    siteName: "SORAMO VP Studio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero-screenshot.png",
        width: 2304,
        height: 1296,
        alt: "SORAMO VP Studioの画面イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SORAMO VP Studio | バーティポート選定・評価レポート支援",
    description:
      "SORAMO VP Studioは、バーティポート候補地の選定と評価レポート作成を支援するWebアプリです。",
    images: ["/images/hero-screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="dark" className={inter.className}>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
