import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface EventPost {
  slug: string;
  title: string;
  date: string;
  location?: string;
  image?: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
  /** Pre-rendered HTML (server-side, so crawlers see the content). */
  html: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
  /** Number of words in the body. */
  wordCount: number;
}

const EVENTS_DIR = path.join(process.cwd(), "content", "events");
const WORDS_PER_MINUTE = 200;

function renderMarkdown(content: string): string {
  return String(remark().use(remarkHtml, { sanitize: false }).processSync(content));
}

function countWords(content: string): number {
  return content.trim().split(/\s+/).filter(Boolean).length;
}

function buildPost(slug: string, raw: string): EventPost {
  const { data, content } = matter(raw);
  const wordCount = countWords(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    location: data.location,
    image: data.image,
    excerpt:
      data.excerpt ??
      content.slice(0, 160).replace(/[#*_>`[\]]/g, "").trim() + "…",
    category: data.category ?? "general",
    tags: data.tags ?? [],
    content,
    html: renderMarkdown(content),
    wordCount,
    readingTime: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
  };
}

export function getAllEvents(): EventPost[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];

  const files = fs.readdirSync(EVENTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(EVENTS_DIR, filename), "utf8");
    return buildPost(slug, raw);
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEventBySlug(slug: string): EventPost | null {
  const filepath = path.join(EVENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf8");
  return buildPost(slug, raw);
}

/** All distinct categories, with counts, sorted by frequency. */
export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const e of getAllEvents()) {
    counts.set(e.category, (counts.get(e.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** Previous / next post for in-article navigation. */
export function getAdjacentEvents(slug: string): {
  prev: EventPost | null;
  next: EventPost | null;
} {
  const all = getAllEvents();
  const idx = all.findIndex((e) => e.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    // `all` is newest-first, so "next" (older) is idx + 1.
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
