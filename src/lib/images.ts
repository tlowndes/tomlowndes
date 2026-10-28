import fs from "node:fs";
import path from "node:path";
import type { ImageMetadata } from "astro";

const modules = import.meta.glob<ImageMetadata>(
  "/src/assets/**/*.{webp,png,jpg,jpeg,avif}",
  { eager: true, import: "default" },
);

export function isLocalImageRef(ref?: string | null): ref is string {
  return !!ref && !/^https?:/i.test(ref) && /\.(webp|png|jpe?g|avif)$/i.test(ref);
}

function assetKey(fromFile: string, ref: string): string | undefined {
  const from = path.isAbsolute(fromFile) ? fromFile : path.join(process.cwd(), fromFile);
  const abs = path.resolve(path.dirname(from), ref);
  const rel = path.relative(process.cwd(), abs).split(path.sep).join("/");
  return rel.startsWith("src/assets/") ? `/${rel}` : undefined;
}

export function assetFor(fromFile: string | undefined, ref: string | undefined): ImageMetadata | undefined {
  if (!fromFile || !isLocalImageRef(ref)) return;
  const key = assetKey(fromFile, ref);
  return key ? modules[key] : undefined;
}

// First markdown image in the body that's a usable local image, skipping any
// remote or unsupported-format (e.g. SVG) images that appear before it.
function firstLocalBodyImage(body?: string | null): string | undefined {
  for (const match of body?.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g) ?? []) {
    if (isLocalImageRef(match[1])) return match[1];
  }
  return undefined;
}

// Front matter image, otherwise the first local picture in the markdown.
export function entryImage(entry: {
  filePath?: string;
  data: { image?: string };
  body?: string | null;
}): ImageMetadata | undefined {
  const ref = isLocalImageRef(entry.data.image) ? entry.data.image : firstLocalBodyImage(entry.body);
  if (!isLocalImageRef(ref)) return;
  return assetFor(entry.filePath, ref);
}

// Absolute path of the source file used for the link-preview JPEG.
export function shareFile(entry: {
  filePath?: string;
  data: { image?: string };
  body?: string | null;
}): string | undefined {
  const ref = isLocalImageRef(entry.data.image) ? entry.data.image : firstLocalBodyImage(entry.body);
  if (!entry.filePath || !isLocalImageRef(ref)) return;
  const from = path.isAbsolute(entry.filePath) ? entry.filePath : path.join(process.cwd(), entry.filePath);
  const abs = path.resolve(path.dirname(from), ref);
  return fs.existsSync(abs) ? abs : undefined;
}
