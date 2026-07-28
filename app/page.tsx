"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import DecisionConstellation from "@/components/DecisionConstellation";
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

      <section className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col justify-center overflow-hidden px-4 pb-12 pt-28 sm:px-6">
        <Starfield />
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 78% 45%, rgba(10,132,255,0.07), transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-[#A1A1A6]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: FADE, delay: 0.2, ease: "easeOut" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
                Tokyo, Japan
              </span>
              <span className="font-mono tabular-nums">
                {now ? formatTokyoTime(now) : "\u00A0"} JST
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 text-5xl font-light leading-[.98] tracking-[-0.045em] text-[#F5F5F0] sm:text-7xl lg:text-[5.5rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.4, ease: "easeOut" }}
            >
              Begench
              <br />
              <span className="text-[#77777D]">Garahanov</span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-[#D1D1D6] sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: FADE, delay: 0.75, ease: "easeOut" }}
            >
              I translate complex technical and quantitative evidence into
              clear decisions, stronger operations, and better customer outcomes.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.24em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
            >
              {profile.roles.map((role, index) => (
                <span key={role} className="contents">
                  {index > 0 && <span className="text-[#48484A]">·</span>}
                  <span className="text-[#A1A1A6]">{role}</span>
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: FADE, delay: 1.2, ease: "easeOut" }}
            >
              <span className="flex items-center gap-2 text-xs text-[#A1A1A6]">
                <Briefcase className="h-3.5 w-3.5 text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
                {profile.currentRole}
              </span>
              <span className="flex items-center gap-2 text-xs text-[#A1A1A6]">
                <GraduationCap className="h-3.5 w-3.5 text-[#FF9F0A]" strokeWidth={1.5} aria-hidden="true" />
                {profile.currentStudy}
              </span>
            </motion.div>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: FADE, delay: 1.4, ease: "easeOut" }}
            >
              <Link
                href="/projects"
                className="qg-tap group flex items-center gap-2 rounded-full bg-[#F5F5F0] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                See selected work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="qg-tap flex items-center rounded-full border border-white/15 bg-white/[0.035] px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-[#D1D1D6] backdrop-blur-xl transition-colors hover:border-white/30 hover:text-white"
              >
                View profile
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.55, ease: "easeOut" }}
              className="mt-10 lg:hidden"
            >
              <DecisionConstellation />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <DecisionConstellation />
          </motion.div>
        </div>
      </section>

      <section className="qg-pl-safe qg-pr-safe px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090C] sm:grid-cols-3">
          {[
            ["01", "Evidence", "Diagnose carefully", "#0A84FF"],
            ["02", "Clarity", "Make complexity usable", "#F5F5F0"],
            ["03", "Action", "Improve the outcome", "#FF9F0A"],
          ].map(([number, title, text, color], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="border-b border-white/10 p-6 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="font-mono text-[10px]" style={{ color }}>{number}</span>
              <h2 className="mt-5 text-xl font-light text-[#F5F5F0]">{title}</h2>
              <p className="mt-2 text-sm text-[#A1A1A6]">{text}</p>
            </motion.div>
          ))}
        </div>
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
              Selected work across research and practice.
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
