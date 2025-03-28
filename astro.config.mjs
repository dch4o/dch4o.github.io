// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://dch4o.github.io",
  integrations: [preact()]
});