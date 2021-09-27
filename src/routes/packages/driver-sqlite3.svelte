<svelte:head>
  <title>SQLite3 Driver - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">SQLite3 Driver</h1>
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

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    Supply an instance of this driver with its configuration to Nymph's
    constructor.
  </p>

  <Highlight
    language={typescript}
    code={`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}
  />

  <header class="major">
    <h2>Options</h2>
  </header>

  <p>
    See the <a
      href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3/src/conf/d.ts"
      target="_blank"
      rel="external">config declaration file</a
    >.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';
</script>
