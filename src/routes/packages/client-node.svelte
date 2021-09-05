<svelte:head>
  <title>Node Client - Nymph</title>
</svelte:head>

<Header>Node Client</Header>

<section>
  <header class="major">
    <h2>Node Client</h2>
  </header>

  <p>
    The Nymph Node Client let's you do everything the Nymph Client does, but
    from Node instead of the browser.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/client-node`} />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
