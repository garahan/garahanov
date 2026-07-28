"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { useEffect, useState } from "react";
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

export default function EventDetailClient({ event }: { event: EventPost }) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    remark()
      .use(remarkHtml)
      .process(event.content)
      .then((file) => setHtml(String(file)))
      .catch(console.error);
  }, [event.content]);

  const accent = CATEGORY_COLORS[event.category] ?? "#8A8A8E";

  return (
    <>
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
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#8A8A8E] transition-colors duration-500 hover:text-[#F5F5F0]"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            All events
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mx-auto mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FADE, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <span
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: accent }}
              />
              {event.category}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8A8A8E]">
              <Calendar className="h-3 w-3" strokeWidth={1.5} />
              <span className="tabular-nums">{formatDate(event.date)}</span>
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight text-[#F5F5F0] sm:text-5xl">
            {event.title}
          </h1>

          {event.location && (
            <p className="mt-4 flex items-center gap-1.5 text-sm text-[#8A8A8E]">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              {event.location}
            </p>
          )}

          {event.image && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={event.image}
                alt={event.title}
                className="w-full"
              />
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl pb-24"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FADE, delay: 0.6, ease: "easeOut" }}
        >
          <div
            className="prose-qg"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Tags */}
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
      </article>

      <Footer />
    </>
  );
}
