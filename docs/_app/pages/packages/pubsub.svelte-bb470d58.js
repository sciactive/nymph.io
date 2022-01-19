import{S as qe,i as Ae,s as Le,a2 as Q,a7 as Re,a3 as ge,a4 as xe,l as He,k as u,e as o,t as h,w as W,N as Qe,a5 as We,d as s,m as l,c as a,a as i,h as c,x as Y,f as Ye,b as S,a6 as Oe,H as e,g as Ce,y as O,I as Ue,q as U,o as z,B}from"../../chunks/vendor-57c99eaa.js";function ze(Ie){let m,N,A,t,w,P,G,F,j,J,K,_,T,M,V,b,X,$,k,Z,ee,d,te,D,re,se,ne,f,oe,H,ae,ie,g,ue,C,he,le,v,ce,E,I,pe,me,y,be,p,de,fe,L;return b=new Q({props:{language:Re,code:"npm install --save @nymphjs/pubsub"}}),f=new Q({props:{language:ge,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
PubSub.initPublisher(pubSubConfig, nymph);`}}),g=new Q({props:{language:ge,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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

const pubsub = createServer(8080, pubSubConfig, nymph);`}}),v=new Q({props:{language:ge,code:`import http from 'http';
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

const pubsub = new PubSub(pubSubConfig, nymph, wsServer);`}}),{c(){m=new xe,N=He(),A=u(),t=o("section"),w=o("header"),P=o("h1"),G=h("PubSub Server"),F=u(),j=o("p"),J=h(`The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.`),K=u(),_=o("header"),T=o("h2"),M=h("Installation"),V=u(),W(b.$$.fragment),X=u(),$=o("header"),k=o("h2"),Z=h("Usage"),ee=u(),d=o("p"),te=h(`Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is `),D=o("strong"),re=h("absolutely required"),se=h(" to have a working PubSub system."),ne=u(),W(f.$$.fragment),oe=u(),H=o("p"),ae=h(`Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.`),ie=u(),W(g.$$.fragment),ue=u(),C=o("p"),he=h(`If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.`),le=u(),W(v.$$.fragment),ce=u(),E=o("header"),I=o("h2"),pe=h("Options"),me=u(),y=o("p"),be=h("See the "),p=o("a"),de=h("config declaration file"),fe=h("."),this.h()},l(n){const q=Qe('[data-svelte="svelte-5j20iv"]',document.head);m=We(q),N=He(),q.forEach(s),A=l(n),t=a(n,"SECTION",{});var r=i(t);w=a(r,"HEADER",{class:!0});var ve=i(w);P=a(ve,"H1",{style:!0});var ye=i(P);G=c(ye,"PubSub Server"),ye.forEach(s),ve.forEach(s),F=l(r),j=a(r,"P",{});var Se=i(j);J=c(Se,`The PubSub server provides a WebSocket server that allows Nymph to publish
    changes and the Nymph Client to subscribe to those changes. You can
    subscribe to individual entities, entity queries, or UIDs.`),Se.forEach(s),K=l(r),_=a(r,"HEADER",{class:!0});var we=i(_);T=a(we,"H2",{});var Pe=i(T);M=c(Pe,"Installation"),Pe.forEach(s),we.forEach(s),V=l(r),Y(b.$$.fragment,r),X=l(r),$=a(r,"HEADER",{class:!0});var _e=i($);k=a(_e,"H2",{});var $e=i(k);Z=c($e,"Usage"),$e.forEach(s),_e.forEach(s),ee=l(r),d=a(r,"P",{});var R=i(d);te=c(R,`Any Nymph instance will only publish changes if you initialize PubSub
    publisher before Nymph is used! This step is `),D=a(R,"STRONG",{});var Ee=i(D);re=c(Ee,"absolutely required"),Ee.forEach(s),se=c(R," to have a working PubSub system."),R.forEach(s),ne=l(r),Y(f.$$.fragment,r),oe=l(r),H=a(r,"P",{});var Ne=i(H);ae=c(Ne,`Now, on your PubSub server, you can use the createServer function to create
    a new PubSub server using HTTP (without TLS). If you want, this can be done
    on the same server you use as a REST server, with a different port.`),Ne.forEach(s),ie=l(r),Y(g.$$.fragment,r),ue=l(r),C=a(r,"P",{});var je=i(C);he=c(je,`If you need to provide custom handling in your server (like TLS), you can
    use the PubSub class directly and provide it a WebSocket server instance.`),je.forEach(s),le=l(r),Y(v.$$.fragment,r),ce=l(r),E=a(r,"HEADER",{class:!0});var Te=i(E);I=a(Te,"H2",{});var ke=i(I);pe=c(ke,"Options"),ke.forEach(s),Te.forEach(s),me=l(r),y=a(r,"P",{});var x=i(y);be=c(x,"See the "),p=a(x,"A",{href:!0,target:!0,rel:!0});var De=i(p);de=c(De,"config declaration file"),De.forEach(s),fe=c(x,"."),x.forEach(s),r.forEach(s),this.h()},h(){document.title="PubSub Server - Packages - Nymph.js",m.a=N,Ye(P,"font-size","3em"),S(w,"class","major"),S(_,"class","major"),S($,"class","major"),S(E,"class","major"),S(p,"href","https://github.com/sciactive/nymphjs/tree/master/packages/pubsub/src/conf/d.ts"),S(p,"target","_blank"),S(p,"rel","external")},m(n,q){m.m(Oe,document.head),e(document.head,N),Ce(n,A,q),Ce(n,t,q),e(t,w),e(w,P),e(P,G),e(t,F),e(t,j),e(j,J),e(t,K),e(t,_),e(_,T),e(T,M),e(t,V),O(b,t,null),e(t,X),e(t,$),e($,k),e(k,Z),e(t,ee),e(t,d),e(d,te),e(d,D),e(D,re),e(d,se),e(t,ne),O(f,t,null),e(t,oe),e(t,H),e(H,ae),e(t,ie),O(g,t,null),e(t,ue),e(t,C),e(C,he),e(t,le),O(v,t,null),e(t,ce),e(t,E),e(E,I),e(I,pe),e(t,me),e(t,y),e(y,be),e(y,p),e(p,de),e(y,fe),L=!0},p:Ue,i(n){L||(U(b.$$.fragment,n),U(f.$$.fragment,n),U(g.$$.fragment,n),U(v.$$.fragment,n),L=!0)},o(n){z(b.$$.fragment,n),z(f.$$.fragment,n),z(g.$$.fragment,n),z(v.$$.fragment,n),L=!1},d(n){s(N),n&&m.d(),n&&s(A),n&&s(t),B(b),B(f),B(g),B(v)}}}class Ge extends qe{constructor(m){super();Ae(this,m,null,ze,Le,{})}}export{Ge as default};
