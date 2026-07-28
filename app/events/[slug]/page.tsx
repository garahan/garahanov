import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllEvents, getEventBySlug, getAdjacentEvents } from "@/lib/events";
import EventDetailClient from "./event-detail-client";

export function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Not Found" };

  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      type: "article",
      publishedTime: event.date,
      tags: event.tags,
      images: event.image ? [event.image] : ["/images/Garahanov.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.excerpt,
    },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const { prev, next } = getAdjacentEvents(slug);

  // Article structured data for rich search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: event.title,
    datePublished: event.date,
    dateModified: event.date,
    description: event.excerpt,
    keywords: event.tags.join(", "),
    wordCount: event.wordCount,
    author: {
      "@type": "Person",
      name: "Begench Garahanov",
      url: "https://garahanov.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Begench Garahanov",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://garahanov.vercel.app/events/${event.slug}`,
    },
    ...(event.image ? { image: `https://garahanov.vercel.app${event.image}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventDetailClient event={event} prev={prev} next={next} />
    </>
  );
}
