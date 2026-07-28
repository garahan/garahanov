import type { Metadata } from "next";
import { getAllEvents, getCategories } from "@/lib/events";
import EventsListClient from "./events-list-client";

export const metadata: Metadata = {
  title: "Events & Journal",
  description:
    "Events, milestones, and reflections from Begench Garahanov — research, running, and life in Tokyo.",
};

export default function EventsPage() {
  const events = getAllEvents();
  const categories = getCategories();
  return <EventsListClient events={events} categories={categories} />;
}
