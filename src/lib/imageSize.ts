import path from "node:path";
import sharp from "sharp";

// Intrinsic size of a local /public image, so <img> can carry width/height and avoid layout shift
export async function imageSize(src?: string): Promise<{ width?: number; height?: number }> {
  if (!src?.startsWith("/")) return {};
  try {
    const { width, height } = await sharp(path.join(process.cwd(), "public", src)).metadata();
    return { width, height };
  } catch {
    return {};
  }
}
