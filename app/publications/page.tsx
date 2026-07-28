"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { publications, researchInterests } from "@/lib/content";

const FADE = 1.2;

const STAGGER = 0.15;

const cardMotion = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: FADE, delay: i * STAGGER, ease: "easeOut" as const },
});

function isJournal(type: string) {
  return /journal/i.test(type);
}

export default function PublicationsPage() {
  return (
    <>
      <SiteNav />

      {/* Page header */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col justify-center px-4 pt-24 sm:px-6">
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(255,159,10,0.04), transparent 70%)",
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
            Research Output
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-[#F5F5F0] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Publications
            <br />
            <span className="text-[#8A8A8E]">& Presentations</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#8A8A8E] sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
          >
            Peer-reviewed work and conference presentations spanning process
            simulation, energy systems, and policy science.
          </motion.p>
        </div>
      </section>

      {/* Publications list */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Selected Publications
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Research, on record.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {publications.map((pub, i) => {
              const journal = isJournal(pub.type);
              return (
                <motion.article
                  key={i}
                  {...cardMotion(i)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8"
                >
                  <span
                    className={[
                      "text-[10px] uppercase tracking-[0.3em]",
                      journal ? "text-[#FF9F0A]/80" : "text-[#0A84FF]/80",
                    ].join(" ")}
                  >
                    {pub.type}
                  </span>

                  <h3 className="mt-3 text-xl font-light leading-snug text-[#F5F5F0] sm:text-2xl">
                    {pub.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#8A8A8E]">
                    {pub.author}
                  </p>

                  <p className="mt-1 text-sm italic leading-relaxed text-[#8A8A8E]">
                    {pub.venue}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#8A8A8E]">
                    {pub.abstract}
                  </p>

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#0A84FF] transition-colors duration-500 hover:text-[#F5F5F0]"
                    >
                      DOI
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research interests */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Directions
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Research interests.
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4">
            {researchInterests.map((r, i) => (
              <motion.div
                key={i}
                {...cardMotion(i)}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8"
              >
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#0A84FF]" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-light text-[#F5F5F0]">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8A8A8E]">
                    {r.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works in progress */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
              Ongoing
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-[#F5F5F0] sm:text-3xl">
              Works in progress.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: FADE, ease: "easeOut" }}
            className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 flex-none rounded-full bg-[#32D74B]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#32D74B]/80">
                In Progress
              </span>
            </div>
            <h3 className="mt-3 text-xl font-light leading-snug text-[#F5F5F0] sm:text-2xl">
              Master&apos;s Thesis — Policy Science
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#8A8A8E]">
              Currently researching mathematical modeling for policy prediction
              using large-scale data at Waseda University&apos;s Graduate School
              of Social Sciences. The thesis applies econometric and machine
              learning techniques to forecast outcomes of policy interventions,
              with expected completion in March 2026.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
