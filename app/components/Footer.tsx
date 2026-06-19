import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0f0f1a] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-vpstudio.png"
              alt="VP Studio"
              width={1585}
              height={270}
              className="h-6 w-auto"
            />
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SORAMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
