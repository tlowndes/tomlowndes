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

// Newest first. Same-day entries use slug order so the result does not depend on
// the filesystem. Vault Capture stays ahead of Auto Folder Creator, matching the live site.
export function byDateDesc<T extends { slug: string; data: { date: Date } }>(a: T, b: T): number {
  const byDate = b.data.date.valueOf() - a.data.date.valueOf();
  if (byDate !== 0) return byDate;
  if (a.slug === "obsidian-capture" && b.slug === "auto-folder-creator") return -1;
  if (a.slug === "auto-folder-creator" && b.slug === "obsidian-capture") return 1;
  return a.slug.localeCompare(b.slug, "en");
}

// Local image used for a post or project's link preview: front matter image, else the first image in the body
export function shareSource(entry: { data: { image?: string }; body: string }) {
  const src = entry.data.image ?? entry.body.match(/!\[.*?\]\((\/[^)\s]+)\)/)?.[1];
  return src?.startsWith("/") ? src : undefined;
}
