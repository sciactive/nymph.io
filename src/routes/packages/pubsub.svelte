<svelte:head>
  <title>PubSub Server - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">PubSub Server</h1>
    <p>
      Check out the <a
        href="https://github.com/sciactive/nymphjs/tree/master/packages/pubsub#readme"
        >README</a
      >.
    </p>
  </header>

  <p>
    The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/pubsub`} />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import github from 'svelte-highlight/src/styles/github';
</script>
