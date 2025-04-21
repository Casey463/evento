import React from "react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import prisma from "./db";
import { EventoEvent } from "@prisma/client";
import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: { revalidate: 300 },
    }
  );
  const events: EventoEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: slug },
  });

  if (!event) {
    return notFound();
  }

  return event as EventoEvent;
}
