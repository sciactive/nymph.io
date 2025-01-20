<svelte:head>
  <title>Node Client - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Node Client</h1>
  </header>

  <p>
    This package is no longer needed, because Node.js since version 22 provides
    both <code>fetch</code> and <code>WebSocket</code>. Instead, use the
    <a
      href="https://www.npmjs.com/package/@nymphjs/client"
      target="_blank"
      rel="external">regular Nymph.js client package</a
    >.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
