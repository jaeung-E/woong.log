import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.jaeung.codes",
  integrations: [react(), tailwind()],
  vite: {
    plugins: [svgr()],
  },
});
