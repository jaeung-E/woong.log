import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://blog.jaeung.dev",
  integrations: [react(), tailwind(), mdx(), sitemap()],
  vite: {
    plugins: [svgr()],
  },
});
