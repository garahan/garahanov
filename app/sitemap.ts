import type { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";

const baseUrl = "https://garahanov.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/cv", "/projects", "/publications", "/events"];
  const eventRoutes = getAllEvents().map((event) => `/events/${event.slug}`);

  return [...staticRoutes, ...eventRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route.startsWith("/events/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
