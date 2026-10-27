import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { shareFile } from "@lib/images";

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

export function readingTime(text?: string | null) {
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

// Newest first. Same-day entries use id order (the public slug) so the result does not depend on
// the filesystem. Vault Capture stays ahead of Auto Folder Creator, matching the live site.
export function byDateDesc<T extends { id: string; data: { date: Date } }>(a: T, b: T): number {
  const byDate = b.data.date.valueOf() - a.data.date.valueOf();
  if (byDate !== 0) return byDate;
  if (a.id === "obsidian-capture" && b.id === "auto-folder-creator") return -1;
  if (a.id === "auto-folder-creator" && b.id === "obsidian-capture") return 1;
  return a.id.localeCompare(b.id, "en");
}

// Local image used for a post or project's link preview: front matter image, else the first image in the body.
// Returns the file on disk so the preview JPEG can be rendered from it.
export function shareSource(entry: { filePath?: string; data: { image?: string }; body?: string | null }) {
  return shareFile(entry);
}
