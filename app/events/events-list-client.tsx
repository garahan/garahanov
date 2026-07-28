"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import type { EventPost } from "@/lib/events";

const FADE = 1.2;

const CATEGORY_COLORS: Record<string, string> = {
  career: "#0A84FF",
  research: "#FF9F0A",
  reflection: "#32D74B",
  personal: "#FF9F0A",
  general: "#8A8A8E",
};

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventsListClient({ events }: { events: EventPost[] }) {
  return (
    <>
      <SiteNav />

      {/* Header */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-dvh flex-col justify-center px-4 pt-24 sm:px-6">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(255,159,10,0.04), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.p
            className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 0.3, ease: "easeOut" }}
          >
            Events & Journal
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-light leading-tight tracking-tight text-[#F5F5F0] sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            A record of moments,
            <br />
            <span className="text-[#8A8A8E]">milestones, and reflections.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#8A8A8E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
          >
            Events I attend, places I visit, races I run, and thoughts I write
            along the way.
          </motion.p>
        </div>
      </section>

      {/* Events list */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {events.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-2xl">
              <p className="text-sm text-[#F5F5F0]">No events yet.</p>
              <p className="mt-2 text-xs text-[#8A8A8E]">
                Check back soon — new entries will appear here.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {events.map((event, i) => {
                const accent = CATEGORY_COLORS[event.category] ?? "#8A8A8E";
                return (
                  <motion.div
                    key={event.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: FADE, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <Link
                      href={`/events/${event.slug}`}
                      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] active:bg-white/10 sm:flex-row sm:items-start sm:gap-6"
                    >
                      {/* Date column */}
                      <div className="flex flex-none flex-col gap-1 sm:w-32">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8A8E] tabular-nums">
                          {formatDate(event.date)}
                        </span>
                        <span
                          className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em]"
                          style={{ color: accent }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: accent }}
                          />
                          {event.category}
                        </span>
                      </div>

                      {/* Content column */}
                      <div className="flex flex-1 flex-col gap-2">
                        <h2 className="text-lg font-light leading-snug text-[#F5F5F0] transition-colors duration-500 group-hover:text-white sm:text-xl">
                          {event.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-[#8A8A8E] line-clamp-2">
                          {event.excerpt}
                        </p>
                        {event.location && (
                          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8E]">
                            <MapPin className="h-3 w-3" strokeWidth={1.5} />
                            {event.location}
                          </span>
                        )}
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {event.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#8A8A8E]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ArrowRight
                        className="hidden h-4 w-4 flex-none text-[#8A8A8E] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5F5F0] sm:block"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
