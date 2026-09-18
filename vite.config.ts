import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],

  optimizeDeps: {
    include: ['highlight.js/lib/core']
  },

  build: {
    target: 'baseline-widely-available'
    // Optional: Specify custom targets if needed
    // target: ['chrome107', 'firefox104', 'safari16', 'edge107']
  }
});
