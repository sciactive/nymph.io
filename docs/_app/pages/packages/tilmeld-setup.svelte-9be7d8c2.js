import{S as _e,i as Ee,s as Se,a2 as ie,a7 as Te,a3 as we,a4 as Re,l as he,k as m,e as o,t as p,w as me,N as $e,a5 as ke,d as s,m as d,c as n,a as l,h as i,x as de,f as xe,b as K,a6 as Ne,H as e,g as ce,y as ue,I as je,q as fe,o as ye,B as ge}from"../../chunks/vendor-57c99eaa.js";function Ae(ve){let c,S,A,t,y,g,b,H,T,P,C,v,w,D,F,u,U,_,R,q,O,$,L,M,h,Q,k,X,G,x,W,Y,z,N,B,J,f,I;return u=new ie({props:{language:Te,code:"npm install --save @nymphjs/tilmeld-setup"}}),f=new ie({props:{language:we,code:`import express from 'express';
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
// Use the Tilmeld Setup App, passing in the Nymph Client Config.
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
app.listen(80);`}}),{c(){c=new Re,S=he(),A=m(),t=o("section"),y=o("header"),g=o("h1"),b=p("Tilmeld Setup"),H=m(),T=o("p"),P=p(`The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.`),C=m(),v=o("header"),w=o("h2"),D=p("Installation"),F=m(),me(u.$$.fragment),U=m(),_=o("header"),R=o("h2"),q=p("Usage"),O=m(),$=o("p"),L=p(`You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.`),M=m(),h=o("p"),Q=p("IMPORTANT: Within the setup app, Tilmeld "),k=o("strong"),X=p("does not"),G=p(` check for
    XSRF tokens, so `),x=o("strong"),W=p("do not"),Y=p(` put your REST endpoint under the setup
    app's path, or you will be vulnerable to XSRF attacks!`),z=m(),N=o("p"),B=p("For this example, I'll use the SQLite3 driver with an in-memory database."),J=m(),me(f.$$.fragment),this.h()},l(r){const j=$e('[data-svelte="svelte-k7q6er"]',document.head);c=ke(j),S=he(),j.forEach(s),A=d(r),t=n(r,"SECTION",{});var a=l(t);y=n(a,"HEADER",{class:!0});var V=l(y);g=n(V,"H1",{style:!0});var Z=l(g);b=i(Z,"Tilmeld Setup"),Z.forEach(s),V.forEach(s),H=d(a),T=n(a,"P",{});var ee=l(T);P=i(ee,`The Tilmeld Setup App allows administrators to create, modify, and delete
    users and groups and configure how Tilmeld works. It also acts as the
    endpoint for email address verification.`),ee.forEach(s),C=d(a),v=n(a,"HEADER",{class:!0});var te=l(v);w=n(te,"H2",{});var ae=l(w);D=i(ae,"Installation"),ae.forEach(s),te.forEach(s),F=d(a),de(u.$$.fragment,a),U=d(a),_=n(a,"HEADER",{class:!0});var se=l(_);R=n(se,"H2",{});var re=l(R);q=i(re,"Usage"),re.forEach(s),se.forEach(s),O=d(a),$=n(a,"P",{});var oe=l($);L=i(oe,`You need to setup a Nymph REST endpoint, then you can use the Tilmeld Setup
    App as another endpoint in your Express server.`),oe.forEach(s),M=d(a),h=n(a,"P",{});var E=l(h);Q=i(E,"IMPORTANT: Within the setup app, Tilmeld "),k=n(E,"STRONG",{});var ne=l(k);X=i(ne,"does not"),ne.forEach(s),G=i(E,` check for
    XSRF tokens, so `),x=n(E,"STRONG",{});var le=l(x);W=i(le,"do not"),le.forEach(s),Y=i(E,` put your REST endpoint under the setup
    app's path, or you will be vulnerable to XSRF attacks!`),E.forEach(s),z=d(a),N=n(a,"P",{});var pe=l(N);B=i(pe,"For this example, I'll use the SQLite3 driver with an in-memory database."),pe.forEach(s),J=d(a),de(f.$$.fragment,a),a.forEach(s),this.h()},h(){document.title="Tilmeld Setup - Packages - Nymph.js",c.a=S,xe(g,"font-size","3em"),K(y,"class","major"),K(v,"class","major"),K(_,"class","major")},m(r,j){c.m(Ne,document.head),e(document.head,S),ce(r,A,j),ce(r,t,j),e(t,y),e(y,g),e(g,b),e(t,H),e(t,T),e(T,P),e(t,C),e(t,v),e(v,w),e(w,D),e(t,F),ue(u,t,null),e(t,U),e(t,_),e(_,R),e(R,q),e(t,O),e(t,$),e($,L),e(t,M),e(t,h),e(h,Q),e(h,k),e(k,X),e(h,G),e(h,x),e(x,W),e(h,Y),e(t,z),e(t,N),e(N,B),e(t,J),ue(f,t,null),I=!0},p:je,i(r){I||(fe(u.$$.fragment,r),fe(f.$$.fragment,r),I=!0)},o(r){ye(u.$$.fragment,r),ye(f.$$.fragment,r),I=!1},d(r){s(S),r&&c.d(),r&&s(A),r&&s(t),ge(u),ge(f)}}}class be extends _e{constructor(c){super();Ee(this,c,null,Ae,Se,{})}}export{be as default};
