import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tomlowndes.co.uk",
  // Cloudflare Pages serves /page/index.html at /page/ and 308s /page to it,
  // so every internal link, canonical and sitemap URL uses the trailing slash.
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    sitemap({
      // Form confirmation page: only reached after sending a message.
      // Services is a draft until the freelance offer launches.
      filter: (page) => !page.includes("/contact/thanks/") && !page.includes("/services/"),
    }),
    tailwind(),
  ],
});
