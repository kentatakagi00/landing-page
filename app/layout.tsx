import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VP Studio — SORAMO",
  description:
    "空飛ぶクルマの離着陸場候補をスピーディーに選定・レポートするWebアプリ。バーティポート整備指針に基づく用地選定から評価レポート生成まで一気通貫で支援します。",
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
