// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Shorter title for the <title> tag when the post title is long
    metaTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
  }),
});

const uses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    // Meta description; falls back to 'why'
    description: z.string().optional(),
    category: z.enum(["carry", "sensory", "utility", "digital", "security", "homelab"]),
    role: z.string(),
    badge: z.string(),
    why: z.string(),
    image: z.string().optional(),
    buyLink: z.string().optional(),  // <-- Optional Buy/Store URL
    buyLabel: z.string().optional(), // <-- Optional custom button text (e.g. "Buy on Amazon" or "Official Store")
    draft: z.boolean().optional(),
    date: z.coerce.date().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, uses };