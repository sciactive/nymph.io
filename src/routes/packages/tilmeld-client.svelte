<svelte:head>
  <title>Tilmeld Client - Packages - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld Client</h1>
  </header>

  <p>
    The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-client`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
</script>
