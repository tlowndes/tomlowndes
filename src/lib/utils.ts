import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

export function readingTime(text: string) {
  const textOnly = (text ?? "").replace(/<[^>]+>/g, "").trim();
  const wordCount = textOnly ? textOnly.split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const format = (date: Date) =>
    date.toLocaleString("en-GB", { month: "short", year: "numeric" });
  const start = format(startDate);
  if (!endDate) return `${start} – Present`;
  const end = typeof endDate === "string" ? endDate : format(endDate);
  return `${start} – ${end}`;
}
