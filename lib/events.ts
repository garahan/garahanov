import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
}

const EVENTS_DIR = path.join(process.cwd(), "content", "events");

export function getAllEvents(): EventPost[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];

  const files = fs.readdirSync(EVENTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(EVENTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      location: data.location,
      image: data.image,
      excerpt: data.excerpt ?? content.slice(0, 120).replace(/[#*]/g, "").trim(),
      category: data.category ?? "general",
      tags: data.tags ?? [],
      content,
    } as EventPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEventBySlug(slug: string): EventPost | null {
  const filepath = path.join(EVENTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    location: data.location,
    image: data.image,
    excerpt: data.excerpt ?? content.slice(0, 120).replace(/[#*]/g, "").trim(),
    category: data.category ?? "general",
    tags: data.tags ?? [],
    content,
  };
}
