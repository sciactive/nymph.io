<svelte:head>
  <title>PubSub Server - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">PubSub Server</h1>
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

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is <strong
      >absolutely required</strong
    > to have a working PubSub system.
  </p>

  <Highlight
    language={typescript}
    code={`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  entries: ['ws://yourpubsubserver.tld:8080/'], // This should be set to your PubSub server URL(s).
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  })
);
PubSub.initPublisher(pubSubConfig, nymph);`}
  />

  <p>
    Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.
  </p>

  <Highlight
    language={typescript}
    code={`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import createServer, { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  originIsAllowed: (origin) => {
    // Your logic to determine allowed origins goes here.
    return true;
  },
  entries: ['ws://yourpubsubserver.tld:8080/'],
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  })
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

const pubsub = createServer(8080, pubSubConfig, nymph);`}
  />

  <p>
    If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.
  </p>

  <Highlight
    language={typescript}
    code={`import http from 'http';
import { server as WebSocketServer } from 'websocket';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  originIsAllowed: (origin) => {
    // Your logic to determine allowed origins goes here.
    return true;
  },
  entries: ['ws://yourpubsubserver.tld:8080/'],
};

// Set up Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  })
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

// Set up the PubSub server.
const port = 8080;
const server = http.createServer((_request, response) => {
  response.writeHead(404);
  response.end();
});
const listener = server.listen(port, () => {
  console.log(
    new Date().toISOString(),
    \`Nymph-PubSub server started listening on port \${port}.\`
  );
});
const wsServer = new WebSocketServer({
  httpServer: listener,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

const pubsub = new PubSub(pubSubConfig, nymph, wsServer);`}
  />

  <header class="major">
    <h2>Options</h2>
  </header>

  <p>
    See the <a
      href="https://github.com/sciactive/nymphjs/tree/master/packages/pubsub/src/conf/d.ts"
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
