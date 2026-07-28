"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 50%, rgba(10,132,255,0.05), transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <motion.p
        className="relative font-mono text-7xl font-light tabular-nums text-[#F5F5F0]/15 sm:text-9xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        404
      </motion.p>

      <motion.h1
        className="relative mt-6 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        This page drifted out of orbit.
      </motion.h1>

      <motion.p
        className="relative mt-4 max-w-sm text-sm leading-relaxed text-[#8A8A8E]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      >
        The address you followed doesn&rsquo;t exist — or it moved somewhere
        quieter.
      </motion.p>

      <motion.div
        className="relative mt-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="group qg-tap inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          Back home
        </Link>
      </motion.div>
    </main>
  );
}
