import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  optimizeDeps: {
    include: ['highlight.js/lib/core']
  }
};

export default config;
