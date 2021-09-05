<svelte:head>
  <title>SQLite3 Driver - Nymph</title>
</svelte:head>

<Header>SQLite3 Driver</Header>

<section>
  <header class="major">
    <h2>SQLite3 Driver</h2>
  </header>

  <p>
    The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/driver-sqlite3`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
