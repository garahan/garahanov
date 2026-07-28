"use client";

import { useEffect } from "react";
import { RotateCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="qg-pl-safe qg-pr-safe flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.4em] text-[#FF9F0A]/80">
        Something went wrong
      </p>
      <h1 className="mt-6 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
        An unexpected error occurred.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8A8A8E]">
        The page failed to render. Try again — if it keeps happening, the issue
        is on my side.
      </p>
      <button
        type="button"
        onClick={reset}
        className="group qg-tap mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60"
      >
        <RotateCw
          className="h-3.5 w-3.5 transition-transform duration-700 group-hover:rotate-180"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        Try again
      </button>
    </main>
  );
}
