"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { profile, education, experience, awards } from "@/lib/content";

const FADE = 1.2;

const sectionLabel = "text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]";
const sectionHeading =
  "mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl";
const card =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl";

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col justify-center px-4 pt-24 sm:px-6">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(10,132,255,0.05), transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: FADE, delay: 0.3, ease: "easeOut" }}
              className="flex-none"
            >
              <div className="rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-2xl">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  width={128}
                  height={128}
                  priority
                  className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                />
              </div>
            </motion.div>

            {/* Name + tagline */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: FADE, delay: 0.5, ease: "easeOut" }}
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#8A8A8E]">
                  {profile.nameKana}
                </p>
                <h1 className="mt-2 text-4xl font-light leading-[1.05] tracking-tight text-[#F5F5F0] sm:text-5xl md:text-6xl">
                  {profile.name}
                </h1>
              </motion.div>

              <motion.p
                className="max-w-xl text-base leading-relaxed text-[#8A8A8E] sm:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: FADE, delay: 0.8, ease: "easeOut" }}
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                className="flex flex-col gap-2 text-xs text-[#8A8A8E] sm:flex-row sm:gap-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
                  {profile.currentRole}
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5 text-[#FF9F0A]" strokeWidth={1.5} aria-hidden="true" />
                  {profile.currentStudy}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            className="mt-10 max-w-2xl text-sm leading-relaxed text-[#8A8A8E] sm:text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 1.2, ease: "easeOut" }}
          >
            {profile.bio}
          </motion.p>
        </div>
      </section>

      {/* Long bio */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>In Depth</p>
            <h2 className={sectionHeading}>
              The story behind the work.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-6">
            {profile.longBio.map((para, i) => (
              <motion.p
                key={i}
                className="max-w-2xl text-sm leading-relaxed text-[#8A8A8E] sm:text-base"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>Core Strengths</p>
            <h2 className={sectionHeading}>
              A toolkit built across disciplines.
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {profile.coreStrengths.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
                className={`${card} p-6 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]`}
              >
                <h3 className="text-base font-light text-[#F5F5F0]">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A8A8E]">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>Education</p>
            <h2 className={sectionHeading}>
              A decade of study, across borders.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.08, ease: "easeOut" }}
                className="group relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Year */}
                <div className="flex-none w-24 sm:w-28">
                  <span className="font-mono text-xs tabular-nums text-[#0A84FF] sm:text-sm">
                    {e.year}
                  </span>
                </div>

                {/* Line + dot */}
                <div className="relative flex-none">
                  <span className="mt-1.5 block h-2 w-2 rounded-full bg-[#0A84FF]/60 ring-4 ring-[#0A84FF]/10" />
                  {i < education.length - 1 && (
                    <span className="absolute left-1/2 top-3.5 h-full w-px -translate-x-1/2 bg-white/10" />
                  )}
                </div>

                {/* Event */}
                <p className="flex-1 text-sm leading-relaxed text-[#F5F5F0] sm:text-base">
                  {e.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>Experience</p>
            <h2 className={sectionHeading}>
              Where I've put it into practice.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {experience.map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.15, ease: "easeOut" }}
                className={`${card} p-6 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]`}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF9F0A]/80">
                  {x.period}
                </span>
                <h3 className="mt-3 text-lg font-light text-[#F5F5F0]">
                  {x.role}
                </h3>
                <p className="mt-1 text-sm text-[#8A8A8E]">{x.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>Awards</p>
            <h2 className={sectionHeading}>
              Recognition along the way.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-3">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: FADE, delay: i * 0.12, ease: "easeOut" }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Award
                  className="mt-0.5 h-4 w-4 flex-none text-[#FF9F0A]"
                  strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-light text-[#F5F5F0] sm:text-base">
                    {a.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#8A8A8E] sm:text-sm">
                    {a.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className={sectionLabel}>Contact</p>
            <h2 className={sectionHeading}>
              Let's talk.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, delay: 0.15, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4"
          >
            {/* Emails */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={`mailto:${profile.contact.emailAcademic}`}
                className="qg-tap group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 flex-none text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    Academic
                  </span>
                  <span className="text-sm font-light text-[#F5F5F0]">
                    {profile.contact.emailAcademic}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${profile.contact.emailPersonal}`}
                className="qg-tap group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 flex-none text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    Personal
                  </span>
                  <span className="text-sm font-light text-[#F5F5F0]">
                    {profile.contact.emailPersonal}
                  </span>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="qg-tap group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <ExternalLink className="h-4 w-4 flex-none text-[#32D74B]" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    GitHub
                  </span>
                  <span className="text-sm font-light text-[#F5F5F0]">
                    @garahan
                  </span>
                </div>
              </a>
              <a
                href={profile.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="qg-tap group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <ExternalLink className="h-4 w-4 flex-none text-[#0A84FF]" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    Twitter / X
                  </span>
                  <span className="text-sm font-light text-[#F5F5F0]">
                    @bega_garahan
                  </span>
                </div>
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="qg-tap group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <ExternalLink className="h-4 w-4 flex-none text-[#FF9F0A]" strokeWidth={1.5} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    LinkedIn
                  </span>
                  <span className="text-sm font-light text-[#F5F5F0]">
                    /in/bgarahanov
                  </span>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-1 pt-2 text-xs text-[#8A8A8E]">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {profile.location}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
