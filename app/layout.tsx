import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A modern landing page built with Next.js, Motion, and DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light" className={`${geistSans.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
