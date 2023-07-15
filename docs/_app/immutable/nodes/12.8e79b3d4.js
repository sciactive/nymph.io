import{s as re,I as ae,e as te,a as r,f as o,x as oe,J as ie,d as T,c as a,g as i,h as le,r as l,j as O,u as n,i as ne,v as pe}from"../chunks/scheduler.d7e45cc8.js";import{S as me,i as he,b as M,d as H,m as b,a as N,t as j,e as L}from"../chunks/index.77720afb.js";import{H as R,g as ue}from"../chunks/github.64534d2c.js";import{b as ye}from"../chunks/bash.7e4226ac.js";import{t as J}from"../chunks/typescript.09c48802.js";function de(se){let p,$,_,e,m,X='<h1 style="font-size: 3em;">REST Server</h1>',D,g,B=`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`,P,h,G="<h2>Installation</h2>",q,u,A,y,K="<h2>Usage</h2>",I,v,V=`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`,U,d,Q,E,W=`You will need to import any entities you use on the server, so they are
    available to Nymph.`,k,x,Z=`Now you can configure your <strong>client</strong> using your server&#39;s address
    (and the optional path, if set).`,Y,c,z,C,ee=`The REST server will authenticate for you using the Tilmeld auth cookie and
    XSRF token, but if you need to, you can authenticate in some other way (like
    OAuth2), and place the user in <code>response.locals.user</code>.`,F,f,S;return u=new R({props:{language:ye,code:"npm install --save @nymphjs/server"}}),d=new R({props:{language:J,code:`import express from 'express';
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
  })
);
const MyEntity = nymph.addEntityClass(MyEntityClass);

// Create your Express app.
const app = express();

// Create and use the REST server (with an optional path).
app.use('/rest', createServer(nymph));

// Do anything else you need to do...

// Start your server.
app.listen(80);`}}),c=new R({props:{language:J,code:`import { Nymph } from '@nymphjs/client';

import MyEntityClass from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
const MyEntity = nymph.addEntityClass(MyEntityClass);`}}),f=new R({props:{language:J,code:`import express from 'express';
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
  tilmeld
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
    nymph
  )
);

// Do anything else you need to do...

// Start your server.
app.listen(80);`}}),{c(){p=new ae(!1),$=te(),_=r(),e=o("section"),m=o("header"),m.innerHTML=X,D=r(),g=o("p"),g.textContent=B,P=r(),h=o("header"),h.innerHTML=G,q=r(),M(u.$$.fragment),A=r(),y=o("header"),y.innerHTML=K,I=r(),v=o("p"),v.textContent=V,U=r(),M(d.$$.fragment),Q=r(),E=o("p"),E.textContent=W,k=r(),x=o("p"),x.innerHTML=Z,Y=r(),M(c.$$.fragment),z=r(),C=o("p"),C.innerHTML=ee,F=r(),M(f.$$.fragment),this.h()},l(s){const w=oe("svelte-vfb9fs",document.head);p=ie(w,!1),$=te(),w.forEach(T),_=a(s),e=i(s,"SECTION",{});var t=le(e);m=i(t,"HEADER",{class:!0,"data-svelte-h":!0}),l(m)!=="svelte-n2t05f"&&(m.innerHTML=X),D=a(t),g=i(t,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1t43z4b"&&(g.textContent=B),P=a(t),h=i(t,"HEADER",{class:!0,"data-svelte-h":!0}),l(h)!=="svelte-1hx9pnb"&&(h.innerHTML=G),q=a(t),H(u.$$.fragment,t),A=a(t),y=i(t,"HEADER",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-n87w0o"&&(y.innerHTML=K),I=a(t),v=i(t,"P",{"data-svelte-h":!0}),l(v)!=="svelte-5fapv"&&(v.textContent=V),U=a(t),H(d.$$.fragment,t),Q=a(t),E=i(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-ihx1p9"&&(E.textContent=W),k=a(t),x=i(t,"P",{"data-svelte-h":!0}),l(x)!=="svelte-12qwq8h"&&(x.innerHTML=Z),Y=a(t),H(c.$$.fragment,t),z=a(t),C=i(t,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1f1uhip"&&(C.innerHTML=ee),F=a(t),H(f.$$.fragment,t),t.forEach(T),this.h()},h(){document.title="REST Server - Packages - Nymph.js",p.a=$,O(m,"class","major"),O(h,"class","major"),O(y,"class","major")},m(s,w){p.m(ue,document.head),n(document.head,$),ne(s,_,w),ne(s,e,w),n(e,m),n(e,D),n(e,g),n(e,P),n(e,h),n(e,q),b(u,e,null),n(e,A),n(e,y),n(e,I),n(e,v),n(e,U),b(d,e,null),n(e,Q),n(e,E),n(e,k),n(e,x),n(e,Y),b(c,e,null),n(e,z),n(e,C),n(e,F),b(f,e,null),S=!0},p:pe,i(s){S||(N(u.$$.fragment,s),N(d.$$.fragment,s),N(c.$$.fragment,s),N(f.$$.fragment,s),S=!0)},o(s){j(u.$$.fragment,s),j(d.$$.fragment,s),j(c.$$.fragment,s),j(f.$$.fragment,s),S=!1},d(s){s&&(p.d(),T(_),T(e)),T($),L(u),L(d),L(c),L(f)}}}class xe extends me{constructor(p){super(),he(this,p,null,de,re,{})}}export{xe as component};
