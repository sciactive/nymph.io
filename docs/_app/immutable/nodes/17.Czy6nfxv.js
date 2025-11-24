import{f as h,a as o,c as l}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as d,e as c,s,c as u,$ as y,a as f}from"../chunks/uMqmAk-V.js";import{h as g,g as v}from"../chunks/BSVgqX3x.js";import{h as S}from"../chunks/Dx1ptvL_.js";import{b as T}from"../chunks/c8uDcNtF.js";import{t as j}from"../chunks/Ce9AoNbY.js";import{H as a}from"../chunks/DZfDsH_2.js";var w=h(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld Setup</h1></header> <p>The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.</p> <p>IMPORTANT: Within the setup app, Tilmeld <strong>does not</strong> check for
    XSRF tokens, so <strong>do not</strong> put your REST endpoint under the setup
    app's path, or you will be vulnerable to XSRF attacks!</p> <p>For this example, I'll use the SQLite3 driver with an in-memory database.</p> <!></section>`);function _(p){var e=w();S("1ciceoa",n=>{var r=l(),m=d(r);g(m,()=>v),c(()=>{y.title="Tilmeld Setup - Packages - Nymph.js"}),o(n,r)});var t=s(u(e),6);a(t,{get language(){return T},code:"npm install --save @nymphjs/tilmeld-setup"});var i=s(t,10);a(i,{get language(){return j},code:`import express from 'express';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { Tilmeld } from '@nymphjs/tilmeld';
import createServer from '@nymphjs/server';
import setup from '@nymphjs/tilmeld-setup';

// Import all the entities you will be using on the server.
import './entities/MyEntity';

// Configure Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
  new Tilmeld({
    appName: 'My App',
    appUrl: 'http://localhost',
    cookieDomain: 'localhost',
    cookiePath: '/',
    setupPath: '/user',
    verifyRedirect: 'http://localhost',
    verifyChangeRedirect: 'http://localhost',
    cancelChangeRedirect: 'http://localhost',
    jwtSecret: 'shhhhh',
  }),
);

// Create your Express app.
const app = express();

// Use the REST server.
app.use('/rest', createServer(nymph));

// Create Tilmeld setup app.
app.use(
  '/user',
  setup(
    {
      restUrl: 'http://localhost/rest',
    },
    nymph,
  ),
);

// Do anything else you need to do...

// Start your server.
app.listen(80);`}),f(e),o(p,e)}export{_ as component};
