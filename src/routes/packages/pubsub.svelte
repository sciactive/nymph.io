<svelte:head>
  <title>PubSub Server - Nymph</title>
</svelte:head>

<Header>PubSub Server</Header>

<section>
  <header class="major">
    <h2>PubSub Server</h2>
  </header>

  <p>
    The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.
  </p>
</section>

<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>
