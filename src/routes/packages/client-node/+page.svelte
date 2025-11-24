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
    <a href="{base}/packages/client">regular Nymph.js client package</a>.
  </p>
</section>

<script lang="ts">
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
