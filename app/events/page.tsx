import { getAllEvents } from "@/lib/events";
import EventsListClient from "./events-list-client";

export const metadata = {
  title: "Events & Journal",
};

export default function EventsPage() {
  const events = getAllEvents();
  return <EventsListClient events={events} />;
}
