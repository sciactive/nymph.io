import{S as ye,i as ce,s as fe,a2 as O,a7 as ve,a3 as pe,a4 as ge,l as me,k as h,e as s,t as y,w as G,N as Ee,a5 as _e,d as n,m as l,c as o,a as i,h as c,x as J,f as we,b as K,a6 as $e,H as e,g as de,y as V,I as Se,q as W,o as X,B as Z}from"../../chunks/vendor-57c99eaa.js";function xe(ue){let p,_,H,t,f,v,j,C,w,I,q,g,$,D,M,m,P,E,S,Y,L,x,Q,k,d,A,N,U,F,T,z,B,u,R;return m=new O({props:{language:ve,code:"npm install --save @nymphjs/server"}}),d=new O({props:{language:pe,code:`import express from 'express';
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
app.listen(80);`}}),u=new O({props:{language:pe,code:`import { Nymph } from '@nymphjs/client';

import MyEntity from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
nymph.addEntityClass(MyEntity);`}}),{c(){p=new ge,_=me(),H=h(),t=s("section"),f=s("header"),v=s("h1"),j=y("REST Server"),C=h(),w=s("p"),I=y(`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),q=h(),g=s("header"),$=s("h2"),D=y("Installation"),M=h(),G(m.$$.fragment),P=h(),E=s("header"),S=s("h2"),Y=y("Usage"),L=h(),x=s("p"),Q=y(`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),k=h(),G(d.$$.fragment),A=h(),N=s("p"),U=y(`You will need to import any entities you use on the server, so they are
    available to Nymph.`),F=h(),T=s("p"),z=y(`Now you can configure your client using your server's address (and the
    optional path, if set).`),B=h(),G(u.$$.fragment),this.h()},l(r){const b=Ee('[data-svelte="svelte-vfb9fs"]',document.head);p=_e(b),_=me(),b.forEach(n),H=l(r),t=o(r,"SECTION",{});var a=i(t);f=o(a,"HEADER",{class:!0});var ee=i(f);v=o(ee,"H1",{style:!0});var te=i(v);j=c(te,"REST Server"),te.forEach(n),ee.forEach(n),C=l(a),w=o(a,"P",{});var ae=i(w);I=c(ae,`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),ae.forEach(n),q=l(a),g=o(a,"HEADER",{class:!0});var re=i(g);$=o(re,"H2",{});var ne=i($);D=c(ne,"Installation"),ne.forEach(n),re.forEach(n),M=l(a),J(m.$$.fragment,a),P=l(a),E=o(a,"HEADER",{class:!0});var se=i(E);S=o(se,"H2",{});var oe=i(S);Y=c(oe,"Usage"),oe.forEach(n),se.forEach(n),L=l(a),x=o(a,"P",{});var ie=i(x);Q=c(ie,`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),ie.forEach(n),k=l(a),J(d.$$.fragment,a),A=l(a),N=o(a,"P",{});var he=i(N);U=c(he,`You will need to import any entities you use on the server, so they are
    available to Nymph.`),he.forEach(n),F=l(a),T=o(a,"P",{});var le=i(T);z=c(le,`Now you can configure your client using your server's address (and the
    optional path, if set).`),le.forEach(n),B=l(a),J(u.$$.fragment,a),a.forEach(n),this.h()},h(){document.title="REST Server - Packages - Nymph.js",p.a=_,we(v,"font-size","3em"),K(f,"class","major"),K(g,"class","major"),K(E,"class","major")},m(r,b){p.m($e,document.head),e(document.head,_),de(r,H,b),de(r,t,b),e(t,f),e(f,v),e(v,j),e(t,C),e(t,w),e(w,I),e(t,q),e(t,g),e(g,$),e($,D),e(t,M),V(m,t,null),e(t,P),e(t,E),e(E,S),e(S,Y),e(t,L),e(t,x),e(x,Q),e(t,k),V(d,t,null),e(t,A),e(t,N),e(N,U),e(t,F),e(t,T),e(T,z),e(t,B),V(u,t,null),R=!0},p:Se,i(r){R||(W(m.$$.fragment,r),W(d.$$.fragment,r),W(u.$$.fragment,r),R=!0)},o(r){X(m.$$.fragment,r),X(d.$$.fragment,r),X(u.$$.fragment,r),R=!1},d(r){n(_),r&&p.d(),r&&n(H),r&&n(t),Z(m),Z(d),Z(u)}}}class Te extends ye{constructor(p){super();ce(this,p,null,xe,fe,{})}}export{Te as default};
