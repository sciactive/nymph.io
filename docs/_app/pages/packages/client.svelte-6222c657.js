import{S as we,i as Te,s as Ee,a2 as ce,a7 as Ne,a3 as $e,a4 as Se,l as ue,k as u,e as n,t as l,w as pe,N as Ce,a5 as je,d as s,m as p,c as r,a as i,h,x as me,f as He,b as D,a6 as ke,H as e,g as be,y as ye,I as qe,q as fe,o as ge,B as ve}from"../../chunks/vendor-57c99eaa.js";import{b as Pe}from"../../chunks/paths-396f020f.js";function De(_e){let m,T,q,t,f,g,x,I,E,O,R,v,N,U,A,b,Y,d,M,$,G,W,S,z,B,C,_,F,J,K,w,j,L,Q,H,V,X,y,P;return b=new ce({props:{language:Ne,code:"npm install --save @nymphjs/client"}}),y=new ce({props:{language:$e,code:`import { Nymph, PubSub } from '@nymphjs/client';
import Todo from 'Todo';

const nymphOptions = {
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
  pubsubUrl: 'wss://yournymphpubsubserver',
};
const nymph = new Nymph(nymphOptions);
const pubsub = new PubSub(nymphOptions, nymph);
nymph.addEntityClass(Todo);

// Now you can use Nymph and PubSub.
const myTodo = new Todo();
myTodo.name = 'This is a new todo!';
myTodo.done = false;
await myTodo.$save();

let allMyTodos = await nymph.getEntities({ class: Todo });

let subscription = pubsub.subscribeWith(myTodo, () => {
  // When this is called, the entity will already contain new data from the
  // publish event. If the entity is deleted, the GUID will be set to null.
  if (myTodo.guid != null) {
    alert('Somebody touched my todo!');
  } else {
    alert('Somebody deleted my todo!');
    subscription.unsubscribe();
  }
});

// ...

// Subscribing to a query.
let todos = [];
let userCount = 0;
let subscription = pubsub.subscribeEntities(
  {
    class: Todo.class,
  },
  {
    type: '&',
    '!tag': 'archived',
  }
)(
  (update) => {
    // The first time this is called, \`update\` will be an array of Todo
    // entities. After that, \`update\` will be a publish event object.

    // This takes an existing array of entities and either updates it to match
    // another array, or performs actions from a publish event object to update
    // it.
    pubsub.updateArray(todos, update);

    // \`todos\` is now up to date with the latest publishes from the server.
  },
  (err) => alert(err),
  (count) => {
    // If you provide this callback, the server will send updates of how many
    // clients are subscribed to this query.
    userCount = count;
  }
);

// ...

// Remember to clean up your subscriptions when you no longer need them.
subscription.unsubscribe();`}}),{c(){m=new Se,T=ue(),q=u(),t=n("section"),f=n("header"),g=n("h1"),x=l("Client"),I=u(),E=n("p"),O=l(`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),R=u(),v=n("header"),N=n("h2"),U=l("Installation"),A=u(),pe(b.$$.fragment),Y=u(),d=n("p"),M=l("This package is the Nymph client for browsers. You can find UMD in "),$=n("code"),G=l("dist"),W=l(", or TS source in "),S=n("code"),z=l("src"),B=l(`. There is also a
    `),C=n("strong"),_=n("a"),F=l("Node.js client"),J=l("."),K=u(),w=n("header"),j=n("h2"),L=l("Usage"),Q=u(),H=n("p"),V=l("Here's an overview:"),X=u(),pe(y.$$.fragment),this.h()},l(o){const k=Ce('[data-svelte="svelte-1dn8mvk"]',document.head);m=je(k),T=ue(),k.forEach(s),q=p(o),t=r(o,"SECTION",{});var a=i(t);f=r(a,"HEADER",{class:!0});var Z=i(f);g=r(Z,"H1",{style:!0});var ee=i(g);x=h(ee,"Client"),ee.forEach(s),Z.forEach(s),I=p(a),E=r(a,"P",{});var te=i(E);O=h(te,`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),te.forEach(s),R=p(a),v=r(a,"HEADER",{class:!0});var se=i(v);N=r(se,"H2",{});var ae=i(N);U=h(ae,"Installation"),ae.forEach(s),se.forEach(s),A=p(a),me(b.$$.fragment,a),Y=p(a),d=r(a,"P",{});var c=i(d);M=h(c,"This package is the Nymph client for browsers. You can find UMD in "),$=r(c,"CODE",{});var oe=i($);G=h(oe,"dist"),oe.forEach(s),W=h(c,", or TS source in "),S=r(c,"CODE",{});var ne=i(S);z=h(ne,"src"),ne.forEach(s),B=h(c,`. There is also a
    `),C=r(c,"STRONG",{});var re=i(C);_=r(re,"A",{href:!0});var ie=i(_);F=h(ie,"Node.js client"),ie.forEach(s),re.forEach(s),J=h(c,"."),c.forEach(s),K=p(a),w=r(a,"HEADER",{class:!0});var le=i(w);j=r(le,"H2",{});var he=i(j);L=h(he,"Usage"),he.forEach(s),le.forEach(s),Q=p(a),H=r(a,"P",{});var de=i(H);V=h(de,"Here's an overview:"),de.forEach(s),X=p(a),me(y.$$.fragment,a),a.forEach(s),this.h()},h(){document.title="Client - Packages - Nymph.js",m.a=T,He(g,"font-size","3em"),D(f,"class","major"),D(v,"class","major"),D(_,"href",""+(Pe+"/packages/client-node")),D(w,"class","major")},m(o,k){m.m(ke,document.head),e(document.head,T),be(o,q,k),be(o,t,k),e(t,f),e(f,g),e(g,x),e(t,I),e(t,E),e(E,O),e(t,R),e(t,v),e(v,N),e(N,U),e(t,A),ye(b,t,null),e(t,Y),e(t,d),e(d,M),e(d,$),e($,G),e(d,W),e(d,S),e(S,z),e(d,B),e(d,C),e(C,_),e(_,F),e(d,J),e(t,K),e(t,w),e(w,j),e(j,L),e(t,Q),e(t,H),e(H,V),e(t,X),ye(y,t,null),P=!0},p:qe,i(o){P||(fe(b.$$.fragment,o),fe(y.$$.fragment,o),P=!0)},o(o){ge(b.$$.fragment,o),ge(y.$$.fragment,o),P=!1},d(o){s(T),o&&m.d(),o&&s(q),o&&s(t),ve(b),ve(y)}}}class Oe extends we{constructor(m){super();Te(this,m,null,De,Ee,{})}}export{Oe as default};
