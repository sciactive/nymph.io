<svelte:head>
  <title>Tilmeld Setup - Nymph</title>
</svelte:head>

<Header>Tilmeld Setup</Header>

<section>
  <header class="major">
    <h2>Tilmeld Setup</h2>
  </header>

  <p>
    The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-setup`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
