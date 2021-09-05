<svelte:head>
  <title>Tilmeld Client - Nymph</title>
</svelte:head>

<Header>Tilmeld Client</Header>

<section>
  <header class="major">
    <h2>Tilmeld Client</h2>
  </header>

  <p>
    The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-client`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
