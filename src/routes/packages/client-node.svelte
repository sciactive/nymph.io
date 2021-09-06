<svelte:head>
  <title>Node Client - Packages - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Node Client</h1>
  </header>

  <p>
    The Nymph Node Client let's you do everything the Nymph Client does, but
    from Node.js instead of the browser.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/client-node`} />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
</script>
