"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { CATEGORY_COLORS, formatShortDate, getYear } from "@/lib/format";
import type { EventPost } from "@/lib/events";

const FADE = 1.2;

export default function EventsListClient({
  events,
  categories,
}: {
  events: EventPost[];
  categories: { name: string; count: number }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? events.filter((e) => e.category === active) : events),
    [events, active],
  );

  // Group the filtered list by year for a timeline feel.
  const grouped = useMemo(() => {
    const map = new Map<string, EventPost[]>();
    for (const e of filtered) {
      const y = getYear(e.date) || "Undated";
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(e);
    }
    return [...map.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
  }, [filtered]);

  return (
    <>
      <SiteNav />

      {/* Header */}
      <section className="qg-pl-safe qg-pr-safe relative flex min-h-[70dvh] flex-col justify-center px-4 pt-28 sm:px-6">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 30%, rgba(255,159,10,0.04), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <motion.p
            className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8E]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 0.2, ease: "easeOut" }}
          >
            Events &amp; Journal
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-light leading-tight tracking-tight text-[#F5F5F0] sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            A record of moments,
            <br />
            <span className="text-[#8A8A8E]">milestones, and reflections.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#8A8A8E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: FADE, delay: 0.8, ease: "easeOut" }}
          >
            Events I attend, places I visit, races I run, and thoughts I write
            along the way.
          </motion.p>

          {/* Category filter */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: FADE, delay: 1, ease: "easeOut" }}
            role="group"
            aria-label="Filter events by category"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={[
                "qg-tap rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60",
                active === null
                  ? "border-white/30 bg-white/10 text-[#F5F5F0]"
                  : "border-white/10 bg-white/5 text-[#8A8A8E] hover:text-[#F5F5F0] active:bg-white/10",
              ].join(" ")}
            >
              All
              <span className="ml-2 tabular-nums opacity-60">
                {events.length}
              </span>
            </button>

            {categories.map((c) => {
              const color = CATEGORY_COLORS[c.name] ?? CATEGORY_COLORS.general;
              const on = active === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setActive(on ? null : c.name)}
                  aria-pressed={on}
                  className={[
                    "qg-tap flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60",
                    on
                      ? "border-white/30 bg-white/10 text-[#F5F5F0]"
                      : "border-white/10 bg-white/5 text-[#8A8A8E] hover:text-[#F5F5F0] active:bg-white/10",
                  ].join(" ")}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {c.name}
                  <span className="tabular-nums opacity-60">{c.count}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Events list, grouped by year */}
      <section className="qg-pl-safe qg-pr-safe px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-2xl">
              <p className="text-sm text-[#F5F5F0]">No events in this category.</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#0A84FF] transition-colors duration-500 hover:text-[#F5F5F0]"
              >
                Show all
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              <AnimatePresence mode="popLayout">
                {grouped.map(([year, items]) => (
                  <motion.div
                    key={year}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {/* Year marker */}
                    <div className="flex items-baseline gap-4 border-b border-white/5 pb-4">
                      <h2 className="font-mono text-3xl font-light tabular-nums text-[#F5F5F0]/20 sm:text-4xl">
                        {year}
                      </h2>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                        {items.length} {items.length === 1 ? "entry" : "entries"}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                      {items.map((event, i) => {
                        const accent =
                          CATEGORY_COLORS[event.category] ??
                          CATEGORY_COLORS.general;
                        return (
                          <motion.div
                            key={event.slug}
                            layout
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: FADE,
                              delay: i * 0.06,
                              ease: "easeOut",
                            }}
                          >
                            <Link
                              href={`/events/${event.slug}`}
                              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60 sm:flex-row sm:items-start sm:gap-6"
                            >
                              {/* Accent edge that grows on hover */}
                              <span
                                className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 transition-transform duration-700 group-hover:scale-y-100"
                                style={{ backgroundColor: accent }}
                                aria-hidden="true"
                              />

                              {/* Date column */}
                              <div className="flex flex-none flex-col gap-1.5 sm:w-32">
                                <time
                                  dateTime={event.date}
                                  className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8A8E] tabular-nums"
                                >
                                  {formatShortDate(event.date)}
                                </time>
                                <span
                                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em]"
                                  style={{ color: accent }}
                                >
                                  <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ backgroundColor: accent }}
                                    aria-hidden="true"
                                  />
                                  {event.category}
                                </span>
                              </div>

                              {/* Content */}
                              <div className="flex flex-1 flex-col gap-2">
                                <h3 className="text-lg font-light leading-snug text-[#F5F5F0] sm:text-xl">
                                  {event.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#8A8A8E]">
                                  {event.excerpt}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                                  {event.location && (
                                    <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8E]">
                                      <MapPin
                                        className="h-3 w-3"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                      />
                                      {event.location}
                                    </span>
                                  )}
                                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#8A8A8E]">
                                    <Clock
                                      className="h-3 w-3"
                                      strokeWidth={1.5}
                                      aria-hidden="true"
                                    />
                                    <span className="tabular-nums">
                                      {event.readingTime} min
                                    </span>
                                  </span>
                                </div>
                              </div>

                              <ArrowRight
                                className="hidden h-4 w-4 flex-none self-center text-[#8A8A8E] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5F5F0] sm:block"
                                strokeWidth={1.5}
                                aria-hidden="true"
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
