import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tomlowndes.co.uk",
  // Astro 7 defaults this to "jsx", which can glue words together. Keep full HTML compression.
  compressHTML: true,
  // Cloudflare Pages serves /page/index.html at /page/ and 308s /page to it,
  // so every internal link, canonical and sitemap URL uses the trailing slash.
  trailingSlash: "always",
  build: { format: "directory" },
  image: {
    // Markdown pictures become responsive WebP. Components add AVIF as well.
    layout: "constrained",
    responsiveStyles: true,
  },
  integrations: [
    mdx(),
    sitemap({
      // Form confirmation page: only reached after sending a message
      filter: (page) => !page.includes("/contact/thanks/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
