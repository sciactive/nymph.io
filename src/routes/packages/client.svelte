<svelte:head>
  <title>Client - Packages - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Client</h1>
  </header>

  <p>
    The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/client`} />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
</script>
