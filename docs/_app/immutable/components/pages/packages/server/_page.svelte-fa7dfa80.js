import{S as ye,i as ce,s as fe,R as ve,e as pe,a as h,k as s,q as y,w as O,E as ge,T as Ee,h as n,c as l,l as o,m as i,r as c,x as G,p as _e,n as J,C as e,b as me,y as K,B as we,f as V,t as W,z as X}from"../../../../chunks/index-8e853c83.js";import{H as Z,g as $e}from"../../../../chunks/github-07e092b5.js";import{b as Se}from"../../../../chunks/bash-2b754df6.js";import{t as de}from"../../../../chunks/typescript-7dd1ec19.js";function xe(ue){let p,_,R,t,f,v,j,C,w,P,D,g,$,I,M,m,q,E,S,Y,L,x,Q,A,d,U,N,k,z,T,F,B,u,H;return m=new Z({props:{language:Se,code:"npm install --save @nymphjs/server"}}),d=new Z({props:{language:de,code:`import express from 'express';
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
nymph.addEntityClass(MyEntity);

// Create your Express app.
const app = express();

// Create and use the REST server (with an optional path).
app.use('/rest', createServer(nymph));

// Do anything else you need to do...

// Start your server.
app.listen(80);`}}),u=new Z({props:{language:de,code:`import { Nymph } from '@nymphjs/client';

import MyEntity from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
nymph.addEntityClass(MyEntity);`}}),{c(){p=new ve(!1),_=pe(),R=h(),t=s("section"),f=s("header"),v=s("h1"),j=y("REST Server"),C=h(),w=s("p"),P=y(`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),D=h(),g=s("header"),$=s("h2"),I=y("Installation"),M=h(),O(m.$$.fragment),q=h(),E=s("header"),S=s("h2"),Y=y("Usage"),L=h(),x=s("p"),Q=y(`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),A=h(),O(d.$$.fragment),U=h(),N=s("p"),k=y(`You will need to import any entities you use on the server, so they are
    available to Nymph.`),z=h(),T=s("p"),F=y(`Now you can configure your client using your server's address (and the
    optional path, if set).`),B=h(),O(u.$$.fragment),this.h()},l(a){const b=ge("svelte-vfb9fs",document.head);p=Ee(b,!1),_=pe(),b.forEach(n),R=l(a),t=o(a,"SECTION",{});var r=i(t);f=o(r,"HEADER",{class:!0});var ee=i(f);v=o(ee,"H1",{style:!0});var te=i(v);j=c(te,"REST Server"),te.forEach(n),ee.forEach(n),C=l(r),w=o(r,"P",{});var re=i(w);P=c(re,`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),re.forEach(n),D=l(r),g=o(r,"HEADER",{class:!0});var ae=i(g);$=o(ae,"H2",{});var ne=i($);I=c(ne,"Installation"),ne.forEach(n),ae.forEach(n),M=l(r),G(m.$$.fragment,r),q=l(r),E=o(r,"HEADER",{class:!0});var se=i(E);S=o(se,"H2",{});var oe=i(S);Y=c(oe,"Usage"),oe.forEach(n),se.forEach(n),L=l(r),x=o(r,"P",{});var ie=i(x);Q=c(ie,`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),ie.forEach(n),A=l(r),G(d.$$.fragment,r),U=l(r),N=o(r,"P",{});var he=i(N);k=c(he,`You will need to import any entities you use on the server, so they are
    available to Nymph.`),he.forEach(n),z=l(r),T=o(r,"P",{});var le=i(T);F=c(le,`Now you can configure your client using your server's address (and the
    optional path, if set).`),le.forEach(n),B=l(r),G(u.$$.fragment,r),r.forEach(n),this.h()},h(){document.title="REST Server - Packages - Nymph.js",p.a=_,_e(v,"font-size","3em"),J(f,"class","major"),J(g,"class","major"),J(E,"class","major")},m(a,b){p.m($e,document.head),e(document.head,_),me(a,R,b),me(a,t,b),e(t,f),e(f,v),e(v,j),e(t,C),e(t,w),e(w,P),e(t,D),e(t,g),e(g,$),e($,I),e(t,M),K(m,t,null),e(t,q),e(t,E),e(E,S),e(S,Y),e(t,L),e(t,x),e(x,Q),e(t,A),K(d,t,null),e(t,U),e(t,N),e(N,k),e(t,z),e(t,T),e(T,F),e(t,B),K(u,t,null),H=!0},p:we,i(a){H||(V(m.$$.fragment,a),V(d.$$.fragment,a),V(u.$$.fragment,a),H=!0)},o(a){W(m.$$.fragment,a),W(d.$$.fragment,a),W(u.$$.fragment,a),H=!1},d(a){n(_),a&&p.d(),a&&n(R),a&&n(t),X(m),X(d),X(u)}}}class He extends ye{constructor(p){super(),ce(this,p,null,xe,fe,{})}}export{He as default};
