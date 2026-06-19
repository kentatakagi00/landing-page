"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#challenges", label: "課題" },
  { href: "#features",   label: "機能" },
  { href: "#report",     label: "レポート" },
  { href: "#contact",    label: "お問い合わせ" },
  { href: "#project",    label: "プロジェクト" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const updateHeaderVisibility = () => {
      const challenges = document.getElementById("challenges");
      const threshold = challenges ? Math.max(0, challenges.offsetTop - 180) : window.innerHeight * 0.85;
      const shouldShow = window.scrollY >= threshold;

      setShowHeader(shouldShow);
      if (!shouldShow) {
        setMenuOpen(false);
      }
    };

    updateHeaderVisibility();
    window.addEventListener("scroll", updateHeaderVisibility, { passive: true });
    window.addEventListener("resize", updateHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", updateHeaderVisibility);
      window.removeEventListener("resize", updateHeaderVisibility);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full ${showHeader ? "pointer-events-auto" : "pointer-events-none"}`}
      initial={false}
      animate={{ y: showHeader ? 0 : -80, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="w-full border-b border-white/[0.08] bg-white/[0.04] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* ---- Logos ---- */}
            <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3" aria-label="トップへ戻る">
              {/* VP Studio ロゴ */}
              <Image
                src="/images/logo-vpstudio.png"
                alt="VP Studio"
                width={1585}
                height={270}
                className="h-7 w-auto shrink-0"
                priority
              />
              <span className="h-5 w-px shrink-0 bg-white/20" aria-hidden="true" />
              {/* SORAMO ロゴ */}
              <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                <span className="text-xs text-slate-500">by</span>
                <Image
                  src="/images/logo-soramo.png"
                  alt="SORAMO"
                  width={1224}
                  height={226}
                  className="h-5 w-auto shrink-0"
                />
              </div>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-1 border-t border-white/[0.08] pt-3 pb-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
