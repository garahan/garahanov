"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const DESKTOP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Profile" },
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Work" },
  { href: "/publications", label: "Research" },
  { href: "/events", label: "Journal" },
] as const;

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/events", label: "Journal" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      className="qg-pt-safe qg-pl-safe qg-pr-safe fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Begench Garahanov — Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-[11px] font-medium tracking-tight text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 group-hover:border-[#0A84FF]/50">
            BG
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.32em] text-[#A1A1A6] transition-colors duration-500 group-hover:text-[#F5F5F0] sm:inline">
            Garahanov
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-black/65 p-1 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:flex"
        >
          {DESKTOP_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "qg-tap flex items-center rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-colors duration-500",
                  active
                    ? "bg-[#0A84FF]/15 text-[#F5F5F0]"
                    : "text-[#A1A1A6] hover:text-[#F5F5F0]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/65 p-1 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden">
          {MOBILE_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "qg-tap flex items-center rounded-full px-2.5 text-[9px] uppercase tracking-[0.16em]",
                  active ? "bg-[#0A84FF]/15 text-[#F5F5F0]" : "text-[#A1A1A6]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="qg-tap flex items-center justify-center rounded-full px-2 text-[#A1A1A6]"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="More navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#090A0D]/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {DESKTOP_LINKS.filter(
              (link) => !MOBILE_LINKS.some((mobile) => mobile.href === link.href),
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-sm text-[#D1D1D6] transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
                <span className="text-[10px] text-[#636366]" aria-hidden="true">↗</span>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
