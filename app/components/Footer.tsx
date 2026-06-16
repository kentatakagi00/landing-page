import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20">
              <Zap className="h-3.5 w-3.5 text-indigo-400" />
            </div>
            <span className="text-sm font-semibold text-white">VP Studio</span>
            <span className="text-sm text-slate-500">by SORAMO</span>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SORAMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
