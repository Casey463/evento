import "server-only";
import { EventoEvent } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(
  async (city: string, page: number = 1) => {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });

    let totalCount;
    if (city == "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(city),
        },
      });
    }

    return { events, totalCount } as {
      events: EventoEvent[];
      totalCount: number;
    };
  }
);
export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: slug },
  });

  if (!event) {
    return notFound();
  }

  return event as EventoEvent;
});
