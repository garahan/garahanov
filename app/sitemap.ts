import type { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";

const BASE = "https://garahanov.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cv", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/publications", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/events", priority: 0.9, changeFrequency: "weekly" as const },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const eventRoutes = getAllEvents().map((e) => ({
    url: `${BASE}/events/${e.slug}`,
    lastModified: e.date ? new Date(`${e.date}T00:00:00`) : new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...eventRoutes];
}
