import{S as ue,i as ce,s as fe,R as ve,e as pe,a as l,k as n,q as u,w as O,E as Ee,T as ge,h as s,c as h,l as o,m as i,r as c,x as G,p as _e,n as J,C as e,b as me,y as K,B as we,f as V,t as W,z as X}from"../../../../chunks/index-8e853c83.js";import{H as Z,g as $e}from"../../../../chunks/github-07e092b5.js";import{b as Se}from"../../../../chunks/bash-2b754df6.js";import{t as de}from"../../../../chunks/typescript-7dd1ec19.js";function xe(ye){let p,_,C,t,f,v,H,j,w,M,P,E,$,D,I,m,q,g,S,Y,L,x,Q,A,d,U,N,k,z,T,F,B,y,R;return m=new Z({props:{language:Se,code:"npm install --save @nymphjs/server"}}),d=new Z({props:{language:de,code:`import express from 'express';
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
app.listen(80);`}}),y=new Z({props:{language:de,code:`import { Nymph } from '@nymphjs/client';

import MyEntityClass from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
const MyEntity = nymph.addEntityClass(MyEntityClass);`}}),{c(){p=new ve(!1),_=pe(),C=l(),t=n("section"),f=n("header"),v=n("h1"),H=u("REST Server"),j=l(),w=n("p"),M=u(`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),P=l(),E=n("header"),$=n("h2"),D=u("Installation"),I=l(),O(m.$$.fragment),q=l(),g=n("header"),S=n("h2"),Y=u("Usage"),L=l(),x=n("p"),Q=u(`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),A=l(),O(d.$$.fragment),U=l(),N=n("p"),k=u(`You will need to import any entities you use on the server, so they are
    available to Nymph.`),z=l(),T=n("p"),F=u(`Now you can configure your client using your server's address (and the
    optional path, if set).`),B=l(),O(y.$$.fragment),this.h()},l(r){const b=Ee("svelte-vfb9fs",document.head);p=ge(b,!1),_=pe(),b.forEach(s),C=h(r),t=o(r,"SECTION",{});var a=i(t);f=o(a,"HEADER",{class:!0});var ee=i(f);v=o(ee,"H1",{style:!0});var te=i(v);H=c(te,"REST Server"),te.forEach(s),ee.forEach(s),j=h(a),w=o(a,"P",{});var ae=i(w);M=c(ae,`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),ae.forEach(s),P=h(a),E=o(a,"HEADER",{class:!0});var re=i(E);$=o(re,"H2",{});var se=i($);D=c(se,"Installation"),se.forEach(s),re.forEach(s),I=h(a),G(m.$$.fragment,a),q=h(a),g=o(a,"HEADER",{class:!0});var ne=i(g);S=o(ne,"H2",{});var oe=i(S);Y=c(oe,"Usage"),oe.forEach(s),ne.forEach(s),L=h(a),x=o(a,"P",{});var ie=i(x);Q=c(ie,`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),ie.forEach(s),A=h(a),G(d.$$.fragment,a),U=h(a),N=o(a,"P",{});var le=i(N);k=c(le,`You will need to import any entities you use on the server, so they are
    available to Nymph.`),le.forEach(s),z=h(a),T=o(a,"P",{});var he=i(T);F=c(he,`Now you can configure your client using your server's address (and the
    optional path, if set).`),he.forEach(s),B=h(a),G(y.$$.fragment,a),a.forEach(s),this.h()},h(){document.title="REST Server - Packages - Nymph.js",p.a=_,_e(v,"font-size","3em"),J(f,"class","major"),J(E,"class","major"),J(g,"class","major")},m(r,b){p.m($e,document.head),e(document.head,_),me(r,C,b),me(r,t,b),e(t,f),e(f,v),e(v,H),e(t,j),e(t,w),e(w,M),e(t,P),e(t,E),e(E,$),e($,D),e(t,I),K(m,t,null),e(t,q),e(t,g),e(g,S),e(S,Y),e(t,L),e(t,x),e(x,Q),e(t,A),K(d,t,null),e(t,U),e(t,N),e(N,k),e(t,z),e(t,T),e(T,F),e(t,B),K(y,t,null),R=!0},p:we,i(r){R||(V(m.$$.fragment,r),V(d.$$.fragment,r),V(y.$$.fragment,r),R=!0)},o(r){W(m.$$.fragment,r),W(d.$$.fragment,r),W(y.$$.fragment,r),R=!1},d(r){s(_),r&&p.d(),r&&s(C),r&&s(t),X(m),X(d),X(y)}}}class Re extends ue{constructor(p){super(),ce(this,p,null,xe,fe,{})}}export{Re as default};
