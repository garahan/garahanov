"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="qg-pb-safe qg-pl-safe qg-pr-safe border-t border-white/5 px-4 py-12 sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-light text-[#F5F5F0] backdrop-blur-2xl">
            BG
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-light text-[#F5F5F0]">Begench Garahanov</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
            Tokyo, Japan · est. 1994
          </p>
        </div>
        <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-[#8A8A8E]">
          <Link href="/about" className="transition-colors duration-500 hover:text-[#F5F5F0]">About</Link>
          <Link href="/cv" className="transition-colors duration-500 hover:text-[#F5F5F0]">CV</Link>
          <Link href="/events" className="transition-colors duration-500 hover:text-[#F5F5F0]">Events</Link>
        </div>
        <p className="text-[10px] text-[#48484a]">
          © {new Date().getFullYear()} Begench Garahanov. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
