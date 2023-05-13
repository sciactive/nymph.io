import{S as be,i as Re,s as je,R as Me,e as xe,a as l,k as a,q as p,y as k,F as De,T as He,h as n,c as h,l as o,m as i,r as m,z as I,p as Ae,n as ue,C as e,b as Ce,A as U,D as Pe,g as q,d as L,B as Q}from"../chunks/index.d7cc8d8b.js";import{H as F,g as ke}from"../chunks/github.df9008b1.js";import{b as Ie}from"../chunks/bash.2b754df6.js";import{t as ye}from"../chunks/typescript.7dd1ec19.js";function Ue(Ne){let u,$,D,t,E,w,O,Y,T,z,X,_,x,B,G,y,J,S,C,K,V,N,W,Z,d,ee,b,te,re,c,se,R,ne,ae,oe,f,ie,v,le,j,pe,he,me,g,H;return y=new F({props:{language:Ie,code:"npm install --save @nymphjs/server"}}),d=new F({props:{language:ye,code:`import express from 'express';
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
app.listen(80);`}}),f=new F({props:{language:ye,code:`import { Nymph } from '@nymphjs/client';

import MyEntityClass from './entities/MyEntityClient';

const nymph = new Nymph({
  // You should configure your Express server to
  // use HTTPS, but you don't have to.
  restUrl: 'https://mydomain.tld/rest',
});
const MyEntity = nymph.addEntityClass(MyEntityClass);`}}),g=new F({props:{language:ye,code:`import express from 'express';
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
app.listen(80);`}}),{c(){u=new Me(!1),$=xe(),D=l(),t=a("section"),E=a("header"),w=a("h1"),O=p("REST Server"),Y=l(),T=a("p"),z=p(`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),X=l(),_=a("header"),x=a("h2"),B=p("Installation"),G=l(),k(y.$$.fragment),J=l(),S=a("header"),C=a("h2"),K=p("Usage"),V=l(),N=a("p"),W=p(`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),Z=l(),k(d.$$.fragment),ee=l(),b=a("p"),te=p(`You will need to import any entities you use on the server, so they are
    available to Nymph.`),re=l(),c=a("p"),se=p("Now you can configure your "),R=a("strong"),ne=p("client"),ae=p(` using your server's address
    (and the optional path, if set).`),oe=l(),k(f.$$.fragment),ie=l(),v=a("p"),le=p(`The REST server will authenticate for you using the Tilmeld auth cookie and
    XSRF token, but if you need to, you can authenticate in some other way (like
    OAuth2), and place the user in `),j=a("code"),pe=p("response.locals.user"),he=p("."),me=l(),k(g.$$.fragment),this.h()},l(s){const M=De("svelte-vfb9fs",document.head);u=He(M,!1),$=xe(),M.forEach(n),D=h(s),t=o(s,"SECTION",{});var r=i(t);E=o(r,"HEADER",{class:!0});var de=i(E);w=o(de,"H1",{style:!0});var ce=i(w);O=m(ce,"REST Server"),ce.forEach(n),de.forEach(n),Y=h(r),T=o(r,"P",{});var fe=i(T);z=m(fe,`The REST server lets you configure an endpoint for the Nymph client to query
    and push data to. The server provides this endpoint as an Express
    middleware, which can be used in a new or existing Express (or compatible)
    server.`),fe.forEach(n),X=h(r),_=o(r,"HEADER",{class:!0});var ve=i(_);x=o(ve,"H2",{});var ge=i(x);B=m(ge,"Installation"),ge.forEach(n),ve.forEach(n),G=h(r),I(y.$$.fragment,r),J=h(r),S=o(r,"HEADER",{class:!0});var Ee=i(S);C=o(Ee,"H2",{});var we=i(C);K=m(we,"Usage"),we.forEach(n),Ee.forEach(n),V=h(r),N=o(r,"P",{});var _e=i(N);W=m(_e,`You need to install Express, Nymph, and a Nymph driver, then you can use the
    REST server with an optional path. For this example, I'll use the SQLite3
    driver with an in-memory database.`),_e.forEach(n),Z=h(r),I(d.$$.fragment,r),ee=h(r),b=o(r,"P",{});var Se=i(b);te=m(Se,`You will need to import any entities you use on the server, so they are
    available to Nymph.`),Se.forEach(n),re=h(r),c=o(r,"P",{});var A=i(c);se=m(A,"Now you can configure your "),R=o(A,"STRONG",{});var $e=i(R);ne=m($e,"client"),$e.forEach(n),ae=m(A,` using your server's address
    (and the optional path, if set).`),A.forEach(n),oe=h(r),I(f.$$.fragment,r),ie=h(r),v=o(r,"P",{});var P=i(v);le=m(P,`The REST server will authenticate for you using the Tilmeld auth cookie and
    XSRF token, but if you need to, you can authenticate in some other way (like
    OAuth2), and place the user in `),j=o(P,"CODE",{});var Te=i(j);pe=m(Te,"response.locals.user"),Te.forEach(n),he=m(P,"."),P.forEach(n),me=h(r),I(g.$$.fragment,r),r.forEach(n),this.h()},h(){document.title="REST Server - Packages - Nymph.js",u.a=$,Ae(w,"font-size","3em"),ue(E,"class","major"),ue(_,"class","major"),ue(S,"class","major")},m(s,M){u.m(ke,document.head),e(document.head,$),Ce(s,D,M),Ce(s,t,M),e(t,E),e(E,w),e(w,O),e(t,Y),e(t,T),e(T,z),e(t,X),e(t,_),e(_,x),e(x,B),e(t,G),U(y,t,null),e(t,J),e(t,S),e(S,C),e(C,K),e(t,V),e(t,N),e(N,W),e(t,Z),U(d,t,null),e(t,ee),e(t,b),e(b,te),e(t,re),e(t,c),e(c,se),e(c,R),e(R,ne),e(c,ae),e(t,oe),U(f,t,null),e(t,ie),e(t,v),e(v,le),e(v,j),e(j,pe),e(v,he),e(t,me),U(g,t,null),H=!0},p:Pe,i(s){H||(q(y.$$.fragment,s),q(d.$$.fragment,s),q(f.$$.fragment,s),q(g.$$.fragment,s),H=!0)},o(s){L(y.$$.fragment,s),L(d.$$.fragment,s),L(f.$$.fragment,s),L(g.$$.fragment,s),H=!1},d(s){n($),s&&u.d(),s&&n(D),s&&n(t),Q(y),Q(d),Q(f),Q(g)}}}class Oe extends be{constructor(u){super(),Re(this,u,null,Ue,je,{})}}export{Oe as component};
