"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import { profile, projects, publications } from "@/lib/content";

const FADE = 1.2;

function useNowClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatTokyoTime(d: Date): string {
  return d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo",
  });
}

export default function HomePage() {
  const now = useNowClock();
  const featuredProjects = projects.slice(0, 3);
  const featuredPubs = publications.slice(0, 2);

  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col justify-center overflow-hidden px-4 pt-24 sm:px-6">
        {/* Quiet starfield — the observatory signature */}
        <Starfield />

        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(10,132,255,0.05), transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Location + time */}
          <motion.div
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[#8A8A8E]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 0.3, ease: "easeOut" }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              Tokyo, Japan
            </span>
            <span className="font-mono tabular-nums">
              {now ? formatTokyoTime(now) : "\u00A0"} JST
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="mt-6 text-5xl font-light leading-[1.05] tracking-tight text-[#F5F5F0] sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Begench
            <br />
            <span className="text-[#8A8A8E]">Garahanov</span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm uppercase tracking-[0.25em] text-[#8A8A8E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
          >
            <span className="text-[#F5F5F0]">Researcher</span>
            <span className="text-[#48484a]">·</span>
            <span className="text-[#F5F5F0]">Engineer</span>
            <span className="text-[#48484a]">·</span>
            <span className="text-[#F5F5F0]">Leader</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#8A8A8E] sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 1.3, ease: "easeOut" }}
          >
            {profile.tagline} Applied Chemistry engineer turned policy scientist,
            currently at Apple Japan and Waseda University.
          </motion.p>

          {/* Current status */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 1.6, ease: "easeOut" }}
          >
            <span className="flex items-center gap-2 text-xs text-[#8A8A8E]">
              <Briefcase className="h-3.5 w-3.5 text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
              {profile.currentRole}
            </span>
            <span className="flex items-center gap-2 text-xs text-[#8A8A8E]">
              <GraduationCap className="h-3.5 w-3.5 text-[#FF9F0A]" strokeWidth={1.5} aria-hidden="true" />
              {profile.currentStudy}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 1.9, ease: "easeOut" }}
          >
            <Link
              href="/about"
              className="qg-tap group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 hover:border-white/30 hover:bg-white/10 active:bg-white/15"
            >
              About me
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link
              href="/events"
              className="qg-tap flex items-center gap-2 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#F5F5F0] backdrop-blur-2xl transition-colors duration-500 hover:border-[#0A84FF]/60 hover:bg-[#0A84FF]/20 active:bg-[#0A84FF]/25"
            >
              Events & Journal
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8A8A8E]">
            scroll
          </span>
        </motion.div>
      </section>

      {/* Featured work */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Selected Work
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Three things I&rsquo;m building right now.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
              >
                <Link
                  href="/projects"
                  className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] active:bg-white/10 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-light text-[#F5F5F0]">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#8A8A8E] line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="hidden h-4 w-4 flex-none text-[#8A8A8E] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5F5F0] sm:block"
                    strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications preview */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Publications
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Research, on record.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {featuredPubs.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF9F0A]/80">
                  {pub.type}
                </span>
                <h3 className="mt-3 text-lg font-light leading-snug text-[#F5F5F0]">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A8A8E]">
                  {pub.venue}
                </p>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-[#0A84FF] transition-colors duration-500 hover:text-[#F5F5F0]"
                  >
                    DOI →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
