import{S as _e,i as Ee,s as Te,R as Se,e as ie,a as m,k as o,q as p,y as he,F as Re,T as we,h as s,c as d,l as n,m as l,r as i,z as me,p as $e,n as K,C as e,b as de,A as ce,D as ke,g as ue,d as fe,B as ye}from"../chunks/index.d7cc8d8b.js";import{H as ge,g as xe}from"../chunks/github.df9008b1.js";import{b as Ne}from"../chunks/bash.2b754df6.js";import{t as be}from"../chunks/typescript.7dd1ec19.js";function je(ve){let c,T,j,t,y,g,H,I,S,P,C,v,R,D,F,u,O,_,w,U,q,$,L,M,h,Q,k,X,z,x,G,W,Y,N,B,J,f,A;return u=new ge({props:{language:Ne,code:"npm install --save @nymphjs/tilmeld-setup"}}),f=new ge({props:{language:be,code:`import express from 'express';
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
app.listen(80);`}}),{c(){c=new Se(!1),T=ie(),j=m(),t=o("section"),y=o("header"),g=o("h1"),H=p("Tilmeld Setup"),I=m(),S=o("p"),P=p(`The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.`),C=m(),v=o("header"),R=o("h2"),D=p("Installation"),F=m(),he(u.$$.fragment),O=m(),_=o("header"),w=o("h2"),U=p("Usage"),q=m(),$=o("p"),L=p(`You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.`),M=m(),h=o("p"),Q=p("IMPORTANT: Within the setup app, Tilmeld "),k=o("strong"),X=p("does not"),z=p(` check for
    XSRF tokens, so `),x=o("strong"),G=p("do not"),W=p(` put your REST endpoint under the setup
    app's path, or you will be vulnerable to XSRF attacks!`),Y=m(),N=o("p"),B=p("For this example, I'll use the SQLite3 driver with an in-memory database."),J=m(),he(f.$$.fragment),this.h()},l(r){const b=Re("svelte-k7q6er",document.head);c=we(b,!1),T=ie(),b.forEach(s),j=d(r),t=n(r,"SECTION",{});var a=l(t);y=n(a,"HEADER",{class:!0});var V=l(y);g=n(V,"H1",{style:!0});var Z=l(g);H=i(Z,"Tilmeld Setup"),Z.forEach(s),V.forEach(s),I=d(a),S=n(a,"P",{});var ee=l(S);P=i(ee,`The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.`),ee.forEach(s),C=d(a),v=n(a,"HEADER",{class:!0});var te=l(v);R=n(te,"H2",{});var ae=l(R);D=i(ae,"Installation"),ae.forEach(s),te.forEach(s),F=d(a),me(u.$$.fragment,a),O=d(a),_=n(a,"HEADER",{class:!0});var se=l(_);w=n(se,"H2",{});var re=l(w);U=i(re,"Usage"),re.forEach(s),se.forEach(s),q=d(a),$=n(a,"P",{});var oe=l($);L=i(oe,`You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.`),oe.forEach(s),M=d(a),h=n(a,"P",{});var E=l(h);Q=i(E,"IMPORTANT: Within the setup app, Tilmeld "),k=n(E,"STRONG",{});var ne=l(k);X=i(ne,"does not"),ne.forEach(s),z=i(E,` check for
    XSRF tokens, so `),x=n(E,"STRONG",{});var le=l(x);G=i(le,"do not"),le.forEach(s),W=i(E,` put your REST endpoint under the setup
    app's path, or you will be vulnerable to XSRF attacks!`),E.forEach(s),Y=d(a),N=n(a,"P",{});var pe=l(N);B=i(pe,"For this example, I'll use the SQLite3 driver with an in-memory database."),pe.forEach(s),J=d(a),me(f.$$.fragment,a),a.forEach(s),this.h()},h(){document.title="Tilmeld Setup - Packages - Nymph.js",c.a=T,$e(g,"font-size","3em"),K(y,"class","major"),K(v,"class","major"),K(_,"class","major")},m(r,b){c.m(xe,document.head),e(document.head,T),de(r,j,b),de(r,t,b),e(t,y),e(y,g),e(g,H),e(t,I),e(t,S),e(S,P),e(t,C),e(t,v),e(v,R),e(R,D),e(t,F),ce(u,t,null),e(t,O),e(t,_),e(_,w),e(w,U),e(t,q),e(t,$),e($,L),e(t,M),e(t,h),e(h,Q),e(h,k),e(k,X),e(h,z),e(h,x),e(x,G),e(h,W),e(t,Y),e(t,N),e(N,B),e(t,J),ce(f,t,null),A=!0},p:ke,i(r){A||(ue(u.$$.fragment,r),ue(f.$$.fragment,r),A=!0)},o(r){fe(u.$$.fragment,r),fe(f.$$.fragment,r),A=!1},d(r){s(T),r&&c.d(),r&&s(j),r&&s(t),ye(u),ye(f)}}}class Ce extends _e{constructor(c){super(),Ee(this,c,null,je,Te,{})}}export{Ce as component};