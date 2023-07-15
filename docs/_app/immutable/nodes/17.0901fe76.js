import{s as G,I as K,e as q,a,f as o,x as V,J as Z,d as T,c as r,g as l,h as ee,r as c,j as M,u as n,i as F,v as te}from"../chunks/scheduler.d7e45cc8.js";import{S as ne,i as se,b as Q,d as O,m as X,a as z,t as J,e as W}from"../chunks/index.77720afb.js";import{H as Y,g as ae}from"../chunks/github.64534d2c.js";import{b as re}from"../chunks/bash.7e4226ac.js";import{t as oe}from"../chunks/typescript.09c48802.js";function le(B){let i,_,C,e,p,P='<h1 style="font-size: 3em;">Tilmeld Setup</h1>',w,f,k=`The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.`,$,h,N="<h2>Installation</h2>",E,m,H,d,A="<h2>Usage</h2>",j,g,D=`You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.`,R,y,I=`IMPORTANT: Within the setup app, Tilmeld <strong>does not</strong> check for
    XSRF tokens, so <strong>do not</strong> put your REST endpoint under the setup
    app&#39;s path, or you will be vulnerable to XSRF attacks!`,b,v,U="For this example, I'll use the SQLite3 driver with an in-memory database.",L,u,S;return m=new Y({props:{language:re,code:"npm install --save @nymphjs/tilmeld-setup"}}),u=new Y({props:{language:oe,code:`import express from 'express';
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
  })
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
    nymph
  )
);

// Do anything else you need to do...

// Start your server.
app.listen(80);`}}),{c(){i=new K(!1),_=q(),C=a(),e=o("section"),p=o("header"),p.innerHTML=P,w=a(),f=o("p"),f.textContent=k,$=a(),h=o("header"),h.innerHTML=N,E=a(),Q(m.$$.fragment),H=a(),d=o("header"),d.innerHTML=A,j=a(),g=o("p"),g.textContent=D,R=a(),y=o("p"),y.innerHTML=I,b=a(),v=o("p"),v.textContent=U,L=a(),Q(u.$$.fragment),this.h()},l(s){const x=V("svelte-k7q6er",document.head);i=Z(x,!1),_=q(),x.forEach(T),C=r(s),e=l(s,"SECTION",{});var t=ee(e);p=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),c(p)!=="svelte-osove8"&&(p.innerHTML=P),w=r(t),f=l(t,"P",{"data-svelte-h":!0}),c(f)!=="svelte-1w25xsb"&&(f.textContent=k),$=r(t),h=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),c(h)!=="svelte-1hx9pnb"&&(h.innerHTML=N),E=r(t),O(m.$$.fragment,t),H=r(t),d=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),c(d)!=="svelte-n87w0o"&&(d.innerHTML=A),j=r(t),g=l(t,"P",{"data-svelte-h":!0}),c(g)!=="svelte-1ym3n7x"&&(g.textContent=D),R=r(t),y=l(t,"P",{"data-svelte-h":!0}),c(y)!=="svelte-gwm2u9"&&(y.innerHTML=I),b=r(t),v=l(t,"P",{"data-svelte-h":!0}),c(v)!=="svelte-ar0pb9"&&(v.textContent=U),L=r(t),O(u.$$.fragment,t),t.forEach(T),this.h()},h(){document.title="Tilmeld Setup - Packages - Nymph.js",i.a=_,M(p,"class","major"),M(h,"class","major"),M(d,"class","major")},m(s,x){i.m(ae,document.head),n(document.head,_),F(s,C,x),F(s,e,x),n(e,p),n(e,w),n(e,f),n(e,$),n(e,h),n(e,E),X(m,e,null),n(e,H),n(e,d),n(e,j),n(e,g),n(e,R),n(e,y),n(e,b),n(e,v),n(e,L),X(u,e,null),S=!0},p:te,i(s){S||(z(m.$$.fragment,s),z(u.$$.fragment,s),S=!0)},o(s){J(m.$$.fragment,s),J(u.$$.fragment,s),S=!1},d(s){s&&(i.d(),T(C),T(e)),T(_),W(m),W(u)}}}class ue extends ne{constructor(i){super(),se(this,i,null,le,G,{})}}export{ue as component};
