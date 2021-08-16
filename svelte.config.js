import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
			assets: 'docs',
    }),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#wrapper',
    paths: {
      base: '/sciactive-site',
      assets: 'https://sciactive.github.io/sciactive-site',
    },
    appDir: 'sveltekit-dist',
  }
};

export default config;
