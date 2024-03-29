<svelte:head>
  <title>MySQL Driver - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">MySQL Driver</h1>
  </header>

  <p>
    The MySQL driver lets you configure Nymph to query and save data to a MySQL
    database.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/driver-mysql`}
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
import MySQLDriver from '@nymphjs/driver-mysql';

const mysqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new MySQLDriver(mysqlConfig));

// All done. Nymph is ready to use.`}
  />

  <header class="major">
    <h2>Options</h2>
  </header>

  <p>
    See the <a
      href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-mysql/src/conf/d.ts"
      target="_blank"
      rel="external">config declaration file</a
    >.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';
</script>
