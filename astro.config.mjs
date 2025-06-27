// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://djturner.github.io',
  redirects: {
    "/": {
      status: 302,
      destination: "/about"
    }
  }
});
