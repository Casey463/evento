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
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events as EventoEvent[];
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
