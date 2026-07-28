"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/events", label: "Events" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="qg-pt-safe qg-pl-safe qg-pr-safe fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-light tracking-tight text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 group-hover:border-white/30">
            BG
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-[#8A8A8E] transition-colors duration-500 group-hover:text-[#F5F5F0] sm:inline">
            Garahanov
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex max-w-[calc(100vw-4.5rem)] items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-[#0B0C10]/70 p-1 backdrop-blur-2xl"
        >
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "qg-tap flex-none rounded-full px-2.5 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 sm:px-3",
                  active
                    ? "bg-[#0A84FF]/15 text-[#F5F5F0]"
                    : "text-[#8A8A8E] hover:text-[#F5F5F0] active:text-[#F5F5F0]",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
