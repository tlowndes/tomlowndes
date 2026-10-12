import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import path from "node:path";
import sharp from "sharp";
import { shareSource } from "@lib/utils";

// 1200x630 JPEG link-preview cards for posts and projects. LinkedIn, Slack and X
// ignore SVG and crop to 1.91:1, so source images are resized here: close-to-wide
// images are cropped to fill, anything taller or narrower sits on the paper colour.
const WIDTH = 1200;
const HEIGHT = 630;
const PAPER = { r: 250, g: 250, b: 249 };

export async function getStaticPaths() {
  const entries = [
    ...(await getCollection("blog")).map(e => ({ collection: "blog", e })),
    ...(await getCollection("projects")).map(e => ({ collection: "projects", e })),
  ];
  return entries
    .filter(({ e }) => !e.data.draft && shareSource(e))
    .map(({ collection, e }) => ({
      params: { collection, slug: e.slug },
      props: { src: shareSource(e)! },
    }));
}

export const GET: APIRoute = async ({ props }) => {
  const file = path.join(process.cwd(), "public", props.src);
  const input = sharp(file, { density: 300 });
  const { width = WIDTH, height = HEIGHT } = await input.metadata();
  const ratio = width / height;
  const fills = ratio >= 1.5 && ratio <= 2.3;

  const image = fills
    ? input.resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    : sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background: PAPER } })
        .composite([{
          input: await input
            .resize(WIDTH - 120, HEIGHT - 80, { fit: "inside" })
            .flatten({ background: PAPER })
            .toBuffer(),
        }]);

  const body = await image.flatten({ background: PAPER }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(body), { headers: { "Content-Type": "image/jpeg" } });
};
