<svelte:head>
  <title>Tilmeld Setup - Packages - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld Setup</h1>
  </header>

  <p>
    The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-setup`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
</script>
