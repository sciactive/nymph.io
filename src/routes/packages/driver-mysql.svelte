<svelte:head>
  <title>MySQL Driver - Nymph</title>
</svelte:head>

<Header>MySQL Driver</Header>

<section>
  <header class="major">
    <h2>MySQL Driver</h2>
  </header>

  <p>
    The MySQL driver lets you configure Nymph to query and save data to a MySQL
    database.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/driver-mysql`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
