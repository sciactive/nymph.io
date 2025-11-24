import{f as c,a,c as l}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as d,e as g,s as e,c as y,$ as f,n as v,a as S}from"../chunks/uMqmAk-V.js";import{h as w,g as P}from"../chunks/BSVgqX3x.js";import{h as j}from"../chunks/Dx1ptvL_.js";import{b as N}from"../chunks/c8uDcNtF.js";import{t as o}from"../chunks/Ce9AoNbY.js";import{H as r}from"../chunks/DZfDsH_2.js";var C=c(`<section><header class="major"><h1 style="font-size: 3em;">PubSub Server</h1></header> <p>The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is <strong>absolutely required</strong> to have a working PubSub system.</p> <!> <p>Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.</p> <!> <p>If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/pubsub/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function A(p){var t=C();j("1pw5vm",m=>{var u=l(),b=d(u);w(b,()=>P),g(()=>{f.title="PubSub Server - Packages - Nymph.js"}),a(m,u)});var s=e(y(t),6);r(s,{get language(){return N},code:"npm install --save @nymphjs/pubsub"});var n=e(s,6);r(n,{get language(){return o},code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  entries: ['ws://yourpubsubserver.tld:8080/'], // This should be set to your PubSub server URL(s).
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  }),
);
PubSub.initPublisher(pubSubConfig, nymph);`});var i=e(n,4);r(i,{get language(){return o},code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
  }),
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

const pubsub = createServer(8080, pubSubConfig, nymph);`});var h=e(i,4);r(h,{get language(){return o},code:`import http from 'node:http';
import ws from 'websocket';
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
  }),
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
    \`Nymph-PubSub server started listening on port \${port}.\`,
  );
});
const wsServer = new ws.server({
  httpServer: listener,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

const pubsub = new PubSub(pubSubConfig, nymph, wsServer);`}),v(4),S(t),a(p,t)}export{A as component};
