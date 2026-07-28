import { notFound } from "next/navigation";
import { getAllEvents, getEventBySlug } from "@/lib/events";
import EventDetailClient from "./event-detail-client";

export function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Not Found" };
  return {
    title: event.title,
    description: event.excerpt,
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
  return <EventDetailClient event={event} />;
}
