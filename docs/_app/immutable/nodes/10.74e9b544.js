import{s as ae,I as ue,e as se,a as s,f as i,x as le,J as he,d as C,c as o,g as a,h as pe,r as u,j as T,u as r,i as oe,v as me}from"../chunks/scheduler.d7e45cc8.js";import{S as ce,i as be,b as L,d as j,m as N,a as D,t as k,e as E}from"../chunks/index.77720afb.js";import{H as M,g as de}from"../chunks/github.64534d2c.js";import{b as ge}from"../chunks/bash.7e4226ac.js";import{t as F}from"../chunks/typescript.09c48802.js";function fe(ie){let l,P,x,e,h,G='<h1 style="font-size: 3em;">PubSub Server</h1>',q,v,K=`The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.`,A,p,V="<h2>Installation</h2>",I,m,Q,c,X="<h2>Usage</h2>",R,y,Z=`Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is <strong>absolutely required</strong> to have a working PubSub system.`,Y,b,W,S,ee=`Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.`,O,d,U,w,te=`If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.`,z,g,J,f,re="<h2>Options</h2>",B,$,ne='See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/pubsub/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.',H;return m=new M({props:{language:ge,code:"npm install --save @nymphjs/pubsub"}}),b=new M({props:{language:F,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  entries: ['ws://yourpubsubserver.tld:8080/'], // This should be set to your PubSub server URL(s).
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  }),
);
PubSub.initPublisher(pubSubConfig, nymph);`}}),d=new M({props:{language:F,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import createServer, { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  originIsAllowed: (origin) => {
    // Your logic to determine allowed origins goes here.
    return true;
  },
  entries: ['ws://yourpubsubserver.tld:8080/'],
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  }),
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

const pubsub = createServer(8080, pubSubConfig, nymph);`}}),g=new M({props:{language:F,code:`import http from 'http';
import { server as WebSocketServer } from 'websocket';
import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  originIsAllowed: (origin) => {
    // Your logic to determine allowed origins goes here.
    return true;
  },
  entries: ['ws://yourpubsubserver.tld:8080/'],
};

// Set up Nymph.
const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  }),
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

// Set up the PubSub server.
const port = 8080;
const server = http.createServer((_request, response) => {
  response.writeHead(404);
  response.end();
});
const listener = server.listen(port, () => {
  console.log(
    new Date().toISOString(),
    \`Nymph-PubSub server started listening on port \${port}.\`,
  );
});
const wsServer = new WebSocketServer({
  httpServer: listener,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

const pubsub = new PubSub(pubSubConfig, nymph, wsServer);`}}),{c(){l=new ue(!1),P=se(),x=s(),e=i("section"),h=i("header"),h.innerHTML=G,q=s(),v=i("p"),v.textContent=K,A=s(),p=i("header"),p.innerHTML=V,I=s(),L(m.$$.fragment),Q=s(),c=i("header"),c.innerHTML=X,R=s(),y=i("p"),y.innerHTML=Z,Y=s(),L(b.$$.fragment),W=s(),S=i("p"),S.textContent=ee,O=s(),L(d.$$.fragment),U=s(),w=i("p"),w.textContent=te,z=s(),L(g.$$.fragment),J=s(),f=i("header"),f.innerHTML=re,B=s(),$=i("p"),$.innerHTML=ne,this.h()},l(n){const _=le("svelte-5j20iv",document.head);l=he(_,!1),P=se(),_.forEach(C),x=o(n),e=a(n,"SECTION",{});var t=pe(e);h=a(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(h)!=="svelte-1qdw5uk"&&(h.innerHTML=G),q=o(t),v=a(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-1xdc8lw"&&(v.textContent=K),A=o(t),p=a(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(p)!=="svelte-1hx9pnb"&&(p.innerHTML=V),I=o(t),j(m.$$.fragment,t),Q=o(t),c=a(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(c)!=="svelte-n87w0o"&&(c.innerHTML=X),R=o(t),y=a(t,"P",{"data-svelte-h":!0}),u(y)!=="svelte-23d8mg"&&(y.innerHTML=Z),Y=o(t),j(b.$$.fragment,t),W=o(t),S=a(t,"P",{"data-svelte-h":!0}),u(S)!=="svelte-u44tq3"&&(S.textContent=ee),O=o(t),j(d.$$.fragment,t),U=o(t),w=a(t,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1qhjyg3"&&(w.textContent=te),z=o(t),j(g.$$.fragment,t),J=o(t),f=a(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(f)!=="svelte-1v13hnh"&&(f.innerHTML=re),B=o(t),$=a(t,"P",{"data-svelte-h":!0}),u($)!=="svelte-139likm"&&($.innerHTML=ne),t.forEach(C),this.h()},h(){document.title="PubSub Server - Packages - Nymph.js",l.a=P,T(h,"class","major"),T(p,"class","major"),T(c,"class","major"),T(f,"class","major")},m(n,_){l.m(de,document.head),r(document.head,P),oe(n,x,_),oe(n,e,_),r(e,h),r(e,q),r(e,v),r(e,A),r(e,p),r(e,I),N(m,e,null),r(e,Q),r(e,c),r(e,R),r(e,y),r(e,Y),N(b,e,null),r(e,W),r(e,S),r(e,O),N(d,e,null),r(e,U),r(e,w),r(e,z),N(g,e,null),r(e,J),r(e,f),r(e,B),r(e,$),H=!0},p:me,i(n){H||(D(m.$$.fragment,n),D(b.$$.fragment,n),D(d.$$.fragment,n),D(g.$$.fragment,n),H=!0)},o(n){k(m.$$.fragment,n),k(b.$$.fragment,n),k(d.$$.fragment,n),k(g.$$.fragment,n),H=!1},d(n){n&&(l.d(),C(x),C(e)),C(P),E(m),E(b),E(d),E(g)}}}class Pe extends ce{constructor(l){super(),be(this,l,null,fe,ae,{})}}export{Pe as component};
