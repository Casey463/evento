import React from "react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import { EventoEvent } from "./types";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

