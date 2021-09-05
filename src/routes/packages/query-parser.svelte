<svelte:head>
  <title>Query Parser - Nymph</title>
</svelte:head>

<Header>Query Parser</Header>

<section>
  <header class="major">
    <h2>Query Parser</h2>
  </header>

  <p>
    The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/query-parser`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
