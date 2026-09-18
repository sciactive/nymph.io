import{E as e,G as t,J as n,K as r,L as i,T as a,U as o,_ as s,ot as c,w as l,x as u}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as d}from"../chunks/D_gJAAal.js";import{t as f}from"../chunks/BF3MJUBc.js";import{t as p}from"../chunks/DDTgMnDM.js";import{t as m}from"../chunks/Ciszbs-_.js";var h=e(`<section><header class="major"><h1 style="font-size: 3em;">REST Server</h1></header> <p>The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.</p> <!> <p>You will need to import any entities you use on the server, so they are
    available to Nymph.</p> <p>Now you can configure your <strong>client</strong>, using your server's
    address (and the optional path, if set).</p> <!> <p>The REST server will authenticate for you using the Tilmeld auth cookie and
    XSRF token, but if you need to, you can authenticate in some other way (like
    OAuth2), and place the user in <code>response.locals.user</code>.</p> <!></section>`);function g(e){var g=h();s(`cg2dh6`,e=>{var t=a(),n=r(t);u(n,()=>m),i(()=>{o.title=`REST Server - Packages - Nymph.js`}),l(e,t)});var _=n(t(g),6);d(_,{get language(){return p},code:`npm install --save @nymphjs/server`});var v=n(_,6);d(v,{get language(){return f},code:`import express from 'express';
import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import createServer from '@nymphjs/server';

// Import all the entities you will be using on the server.
import MyEntityClass from './entities/MyEntity';

// Configure Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
);
const MyEntity = nymph.addEntityClass(MyEntityClass);

// Create your Express app.
const app = express();

// Create and use the REST server (with an optional path).
app.use('/rest', createServer(nymph));

// Do anything else you need to do...

// Start your server.
app.listen(80);`});var y=n(v,6);d(y,{get language(){return f},code:`import { Nymph } from '@nymphjs/client';

import MyEntityClass from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
const MyEntity = nymph.addEntityClass(MyEntityClass);`});var b=n(y,4);d(b,{get language(){return f},code:`import express from 'express';
import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Tilmeld } from '@nymphjs/tilmeld';
import createServer from '@nymphjs/server';
import setup from '@nymphjs/tilmeld-setup';

// Import all the entities you will be using on the server.
import MyEntityClass from './entities/MyEntity';

// Consfigure Tilmeld.
const tilmeld = new Tilmeld({
  appName: 'My Awesome App',
  appUrl: 'https://mydomain.tld',
  setupPath: '/user',
});

// Configure Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
  tilmeld,
);
const MyEntity = nymph.addEntityClass(MyEntityClass);

// Create your Express app.
const app = express();

// Authenticate the user manually.
app.use('/rest', async (request, response, next) => {
  const { User } = tilmeld;

  try {
    // Somehow authenticate the user...
    const user = await User.factoryUsername(username);

    if (user.guid != null && user.enabled) {
      response.locals.user = user;
    }

    next();
  } catch (e: any) {
    response.status(500);
    response.send('Internal server error.');
  }
});

// Create and use the REST server (with an optional path).
app.use('/rest', createServer(nymph));

// Create Tilmeld setup app.
app.user(
  '/user',
  setup(
    {
      restUrl: 'https://mydomain.tld/rest',
    },
    nymph,
  ),
);

// Do anything else you need to do...

// Start your server.
app.listen(80);`}),c(g),l(e,g)}export{g as component};