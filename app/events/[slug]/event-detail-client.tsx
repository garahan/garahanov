"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { CATEGORY_COLORS, formatLongDate } from "@/lib/format";
import type { EventPost } from "@/lib/events";

const FADE = 1.2;

export default function EventDetailClient({
  event,
  prev,
  next,
}: {
  event: EventPost;
  prev: EventPost | null;
  next: EventPost | null;
}) {
  // Reading-progress bar driven by scroll position.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const accent = CATEGORY_COLORS[event.category] ?? CATEGORY_COLORS.general;

  return (
    <>
      {/* Reading progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: progress, backgroundColor: accent }}
        aria-hidden="true"
      />

      <SiteNav />

      <article className="qg-pl-safe qg-pr-safe min-h-dvh px-4 pt-24 sm:px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: FADE, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <Link
            href="/events"
            className="group qg-tap inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#8A8A8E] transition-colors duration-500 hover:text-[#F5F5F0] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            All events
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="mx-auto mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FADE, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: accent }}
                aria-hidden="true"
              />
              {event.category}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
              <Calendar className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              <time dateTime={event.date} className="tabular-nums">
                {formatLongDate(event.date)}
              </time>
            </span>
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
              <Clock className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              <span className="tabular-nums">{event.readingTime} min read</span>
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight text-[#F5F5F0] sm:text-5xl">
            {event.title}
          </h1>

          {event.location && (
            <p className="mt-4 flex items-center gap-1.5 text-sm text-[#8A8A8E]">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {event.location}
            </p>
          )}

          {event.image && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </motion.header>

        {/* Content — pre-rendered on the server so crawlers see it. */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FADE, delay: 0.6, ease: "easeOut" }}
        >
          <div
            className="prose-qg"
            dangerouslySetInnerHTML={{ __html: event.html }}
          />

          {event.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8A8A8E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Prev / next navigation */}
        {(prev || next) && (
          <nav
            aria-label="Event navigation"
            className="mx-auto mt-20 max-w-3xl border-t border-white/5 pt-10 pb-24"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/events/${prev.slug}`}
                  className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60"
                >
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    <ArrowLeft
                      className="h-3 w-3 transition-transform duration-500 group-hover:-translate-x-1"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    Newer
                  </span>
                  <span className="text-sm font-light leading-snug text-[#F5F5F0]">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}

              {next && (
                <Link
                  href={`/events/${next.slug}`}
                  className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur-2xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0A84FF]/60 sm:col-start-2"
                >
                  <span className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
                    Older
                    <ArrowRight
                      className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-light leading-snug text-[#F5F5F0]">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>

      <Footer />
    </>
  );
}
