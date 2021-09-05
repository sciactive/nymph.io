<svelte:head>
  <title>REST Server - Nymph</title>
</svelte:head>

<Header>REST Server</Header>

<section>
  <header class="major">
    <h2>REST Server</h2>
  </header>

  <p>
    The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.
  </p>
</section>

<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>
