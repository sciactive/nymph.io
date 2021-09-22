<svelte:head>
  <title>SQLite3 Driver - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">SQLite3 Driver</h1>
    <p>
      Check out the <a
        href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3#readme"
        >README</a
      >.
    </p>
  </header>

  <p>
    The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/driver-sqlite3`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import github from 'svelte-highlight/src/styles/github';
</script>
