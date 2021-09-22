<svelte:head>
  <title>REST Server - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">REST Server</h1>
  </header>

  <p>
    The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/server`} />

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.
  </p>

  <Highlight
    language={typescript}
    code={`import express from 'express';
import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import createServer from '@nymphjs/server';

// Import all the entities you will be using on the server.
import MyEntity from './entities/MyEntity';

// Configure Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  })
);
nymph.setEntityClass(MyEntity.class, MyEntity);

// Create your Express app.
const app = express();

// Create and use the REST server (with an optional path).
app.use('/rest', createServer(nymph));

// Do anything else you need to do...

// Start your server.
app.listen(80);`}
  />

  <p>
    You will need to import any entities you use on the server, so they are
    available to Nymph.
  </p>

  <p>
    Now you can configure your client using your server's address (and the
    optional path, if set).
  </p>

  <Highlight
    language={typescript}
    code={`import { Nymph } from '@nymphjs/client';

import MyEntity from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
nymph.setEntityClass(MyEntity.class, MyEntity);`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';
</script>
