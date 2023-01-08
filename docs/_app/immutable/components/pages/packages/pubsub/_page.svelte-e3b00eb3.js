import{S as Ae,i as Le,s as qe,R as Re,e as De,a as u,k as o,q as h,w as Q,E as xe,T as Qe,h as s,c as l,l as a,m as i,r as p,x as W,p as We,n as S,C as e,b as He,y as Y,B as Ye,f as O,t as U,z}from"../../../../chunks/index-8e853c83.js";import{H as B,g as Oe}from"../../../../chunks/github-07e092b5.js";import{b as Ue}from"../../../../chunks/bash-2b754df6.js";import{t as ge}from"../../../../chunks/typescript-7dd1ec19.js";function ze(Ie){let m,N,L,t,w,P,G,F,T,J,K,_,j,M,V,b,X,$,k,Z,ee,d,te,C,re,se,ne,f,oe,D,ae,ie,g,ue,H,he,le,y,pe,E,I,ce,me,v,be,c,de,fe,q;return b=new B({props:{language:Ue,code:"npm install --save @nymphjs/pubsub"}}),f=new B({props:{language:ge,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Nymph } from '@nymphjs/nymph';
import { PubSub } from '@nymphjs/pubsub';

const pubSubConfig = {
  entries: ['ws://yourpubsubserver.tld:8080/'], // This should be set to your PubSub server URL(s).
};

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:', // Put the correct driver/config here.
  })
);
PubSub.initPublisher(pubSubConfig, nymph);`}}),g=new B({props:{language:ge,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
  })
);
// Don't forget to do this; even here!
PubSub.initPublisher(pubSubConfig, nymph);

const pubsub = createServer(8080, pubSubConfig, nymph);`}}),y=new B({props:{language:ge,code:`import http from 'http';
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
  })
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
    \`Nymph-PubSub server started listening on port \${port}.\`
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

const pubsub = new PubSub(pubSubConfig, nymph, wsServer);`}}),{c(){m=new Re(!1),N=De(),L=u(),t=o("section"),w=o("header"),P=o("h1"),G=h("PubSub Server"),F=u(),T=o("p"),J=h(`The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.`),K=u(),_=o("header"),j=o("h2"),M=h("Installation"),V=u(),Q(b.$$.fragment),X=u(),$=o("header"),k=o("h2"),Z=h("Usage"),ee=u(),d=o("p"),te=h(`Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is `),C=o("strong"),re=h("absolutely required"),se=h(" to have a working PubSub system."),ne=u(),Q(f.$$.fragment),oe=u(),D=o("p"),ae=h(`Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.`),ie=u(),Q(g.$$.fragment),ue=u(),H=o("p"),he=h(`If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.`),le=u(),Q(y.$$.fragment),pe=u(),E=o("header"),I=o("h2"),ce=h("Options"),me=u(),v=o("p"),be=h("See the "),c=o("a"),de=h("config declaration file"),fe=h("."),this.h()},l(n){const A=xe("svelte-5j20iv",document.head);m=Qe(A,!1),N=De(),A.forEach(s),L=l(n),t=a(n,"SECTION",{});var r=i(t);w=a(r,"HEADER",{class:!0});var ye=i(w);P=a(ye,"H1",{style:!0});var ve=i(P);G=p(ve,"PubSub Server"),ve.forEach(s),ye.forEach(s),F=l(r),T=a(r,"P",{});var Se=i(T);J=p(Se,`The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.`),Se.forEach(s),K=l(r),_=a(r,"HEADER",{class:!0});var we=i(_);j=a(we,"H2",{});var Pe=i(j);M=p(Pe,"Installation"),Pe.forEach(s),we.forEach(s),V=l(r),W(b.$$.fragment,r),X=l(r),$=a(r,"HEADER",{class:!0});var _e=i($);k=a(_e,"H2",{});var $e=i(k);Z=p($e,"Usage"),$e.forEach(s),_e.forEach(s),ee=l(r),d=a(r,"P",{});var R=i(d);te=p(R,`Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is `),C=a(R,"STRONG",{});var Ee=i(C);re=p(Ee,"absolutely required"),Ee.forEach(s),se=p(R," to have a working PubSub system."),R.forEach(s),ne=l(r),W(f.$$.fragment,r),oe=l(r),D=a(r,"P",{});var Ne=i(D);ae=p(Ne,`Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.`),Ne.forEach(s),ie=l(r),W(g.$$.fragment,r),ue=l(r),H=a(r,"P",{});var Te=i(H);he=p(Te,`If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.`),Te.forEach(s),le=l(r),W(y.$$.fragment,r),pe=l(r),E=a(r,"HEADER",{class:!0});var je=i(E);I=a(je,"H2",{});var ke=i(I);ce=p(ke,"Options"),ke.forEach(s),je.forEach(s),me=l(r),v=a(r,"P",{});var x=i(v);be=p(x,"See the "),c=a(x,"A",{href:!0,target:!0,rel:!0});var Ce=i(c);de=p(Ce,"config declaration file"),Ce.forEach(s),fe=p(x,"."),x.forEach(s),r.forEach(s),this.h()},h(){document.title="PubSub Server - Packages - Nymph.js",m.a=N,We(P,"font-size","3em"),S(w,"class","major"),S(_,"class","major"),S($,"class","major"),S(E,"class","major"),S(c,"href","https://github.com/sciactive/nymphjs/tree/master/packages/pubsub/src/conf/d.ts"),S(c,"target","_blank"),S(c,"rel","external")},m(n,A){m.m(Oe,document.head),e(document.head,N),He(n,L,A),He(n,t,A),e(t,w),e(w,P),e(P,G),e(t,F),e(t,T),e(T,J),e(t,K),e(t,_),e(_,j),e(j,M),e(t,V),Y(b,t,null),e(t,X),e(t,$),e($,k),e(k,Z),e(t,ee),e(t,d),e(d,te),e(d,C),e(C,re),e(d,se),e(t,ne),Y(f,t,null),e(t,oe),e(t,D),e(D,ae),e(t,ie),Y(g,t,null),e(t,ue),e(t,H),e(H,he),e(t,le),Y(y,t,null),e(t,pe),e(t,E),e(E,I),e(I,ce),e(t,me),e(t,v),e(v,be),e(v,c),e(c,de),e(v,fe),q=!0},p:Ye,i(n){q||(O(b.$$.fragment,n),O(f.$$.fragment,n),O(g.$$.fragment,n),O(y.$$.fragment,n),q=!0)},o(n){U(b.$$.fragment,n),U(f.$$.fragment,n),U(g.$$.fragment,n),U(y.$$.fragment,n),q=!1},d(n){s(N),n&&m.d(),n&&s(L),n&&s(t),z(b),z(f),z(g),z(y)}}}class Ke extends Ae{constructor(m){super(),Le(this,m,null,ze,qe,{})}}export{Ke as default};
