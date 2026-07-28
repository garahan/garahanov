"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import {
  profile,
  education,
  experience,
  qualifications,
  awards,
  personalStatement,
} from "@/lib/content";

const FADE = 1.2;

export default function CVPage() {
  return (
    <>
      <SiteNav />

      {/* Page header */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-[70dvh] flex-col justify-center px-4 pb-12 pt-28 sm:px-6">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(255,159,10,0.05), transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.p
            className="text-[10px] uppercase tracking-[0.4em] text-[#8A8A8E]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 0.3, ease: "easeOut" }}
          >
            Curriculum Vitae
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-[#F5F5F0] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-3 text-sm font-light tracking-wide text-[#8A8A8E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 0.8, ease: "easeOut" }}
          >
            {profile.nameKana}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
          >
            <span className="flex items-center gap-2 text-xs text-[#8A8A8E]">
              <GraduationCap className="h-3.5 w-3.5 text-[#0A84FF]" strokeWidth={1.5} />
              <span>Waseda University master’s graduate</span>
            </span>
            <span className="flex items-center gap-2 text-xs text-[#8A8A8E]">
              <MapPin className="h-3.5 w-3.5 text-[#FF9F0A]" strokeWidth={1.5} />
              {profile.location}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Academic History */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Academic History
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Education, year by year.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            {/* Header row — desktop only */}
            <div className="hidden grid-cols-[140px_1fr] border-b border-white/10 sm:grid">
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Year
              </div>
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Event
              </div>
            </div>

            {education.map((row, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1 border-b border-white/5 px-5 py-4 last:border-0 sm:grid sm:grid-cols-[140px_1fr] sm:gap-0"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.08, ease: "easeOut" }}
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E] sm:text-sm sm:font-light sm:tracking-tight sm:text-[#F5F5F0]">
                  <span className="tabular-nums">{row.year}</span>
                </div>
                <div className="text-sm leading-relaxed text-[#F5F5F0]">
                  {row.event}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional History */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Professional History
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Roles and organizations.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            {/* Header row — desktop only */}
            <div className="hidden grid-cols-[180px_1fr_1fr] border-b border-white/10 sm:grid">
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Period
              </div>
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Role
              </div>
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Organization
              </div>
            </div>

            {experience.map((row, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1 border-b border-white/5 px-5 py-4 last:border-0 sm:grid sm:grid-cols-[180px_1fr_1fr] sm:gap-0"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E] sm:text-sm sm:font-light sm:tracking-tight sm:text-[#F5F5F0]">
                  <span className="tabular-nums">{row.period}</span>
                </div>
                <div className="text-sm leading-relaxed text-[#F5F5F0]">
                  {row.role}
                </div>
                <div className="text-sm leading-relaxed text-[#8A8A8E]">
                  {row.org}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Qualifications & Certifications */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Qualifications &amp; Certifications
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Tests, scores, and licenses.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            {/* Header row — desktop only */}
            <div className="hidden grid-cols-[80px_80px_1fr_120px] border-b border-white/10 sm:grid">
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Year
              </div>
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Month
              </div>
              <div className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Qualification
              </div>
              <div className="px-5 py-3 text-right text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                Score
              </div>
            </div>

            {qualifications.map((row, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-1 border-b border-white/5 px-5 py-4 last:border-0 sm:grid sm:grid-cols-[80px_80px_1fr_120px] sm:gap-0"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E] sm:text-sm sm:font-light sm:tracking-tight sm:text-[#F5F5F0]">
                  <span className="tabular-nums">{row.year}</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E] sm:text-sm sm:font-light sm:tracking-tight sm:text-[#F5F5F0]">
                  <span className="tabular-nums">{row.month}</span>
                </div>
                <div className="text-sm leading-relaxed text-[#F5F5F0]">
                  {row.name}
                </div>
                <div className="text-sm font-light text-[#32D74B] sm:text-right">
                  <span className="tabular-nums">{row.score}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scholarships & Awards */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Scholarships &amp; Awards
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Recognition and honors.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {awards.map((row, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
              >
                <Award
                  className="mt-0.5 h-4 w-4 flex-none text-[#FF9F0A]"
                  strokeWidth={1.5}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-light text-[#F5F5F0]">
                    {row.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8A8A8E]">
                    {row.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Personal Statement
            </p>
          </motion.div>

          <motion.div
            className="mt-6 rounded-2xl border border-white/10 border-l-2 border-l-[#FF9F0A]/60 bg-white/5 p-6 backdrop-blur-2xl sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-base leading-relaxed text-[#F5F5F0] sm:text-lg">
              {personalStatement}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
