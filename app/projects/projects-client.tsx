"use client";

import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/content";

const FADE = 1.2;

const CATEGORIES = [
  "Academic Research",
  "Professional",
] as const;

const CATEGORY_ACCENT: Record<string, string> = {
  "Academic Research": "#0A84FF",
  Professional: "#FF9F0A",
};

export default function ProjectsClient() {
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
              "radial-gradient(50% 40% at 50% 30%, rgba(10,132,255,0.05), transparent 70%)",
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
            Projects
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-[#F5F5F0] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Projects &amp; Initiatives
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#8A8A8E] sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
          >
            Documented academic and professional work across quantitative
            research, engineering, and customer technology.
          </motion.p>
        </div>
      </section>

      {/* Project groups */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {CATEGORIES.map((category) => {
            const items = projects.filter((p) => p.category === category);
            if (items.length === 0) return null;
            const accent = CATEGORY_ACCENT[category];

            return (
              <div key={category} className="mb-20 last:mb-0">
                {/* Category label header */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: FADE, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <h2 className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]">
                    {category}
                  </h2>
                  <span className="h-px flex-1 bg-white/10" />
                </motion.div>

                {/* Project cards */}
                <div className="mt-8 flex flex-col gap-4">
                  {items.map((p, i) => (
                    <motion.article
                      key={p.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: FADE,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
                    >
                      <span
                        className="text-[10px] uppercase tracking-[0.3em]"
                        style={{ color: accent }}
                      >
                        {p.category}
                      </span>

                      <h3 className="text-2xl font-light leading-snug tracking-tight text-[#F5F5F0] sm:text-3xl">
                        {p.title}
                      </h3>

                      <p className="font-mono text-xs leading-relaxed text-[#8A8A8E]">
                        {p.meta}
                      </p>

                      <p className="text-sm leading-relaxed text-[#8A8A8E] sm:text-base">
                        {p.description}
                      </p>

                      <div className="mt-1 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#8A8A8E] backdrop-blur-2xl"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
