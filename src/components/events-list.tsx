import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";
import { getEvents, sleep } from "@/lib/utils";
import { get } from "http";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px] ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
