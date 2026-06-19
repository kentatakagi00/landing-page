import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0f0f1a] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
          {/* Logo */}
          <div className="flex items-end gap-3">
            <Image
              src="/images/logo-vpstudio.png"
              alt="VP Studio"
              width={1585}
              height={270}
              className="h-7 w-auto"
            />
            <span className="text-sm text-slate-500">by</span>
            <Image
              src="/images/logo-soramo.png"
              alt="SORAMO"
              width={1224}
              height={226}
              className="h-5 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              aria-label="SORAMO on X (Twitter)"
              className="transition-colors hover:text-slate-300"
            >
              X / Twitter
            </a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SORAMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
