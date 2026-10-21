import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://tomlowndes.co.uk",
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes("/services") }), tailwind()],
});
