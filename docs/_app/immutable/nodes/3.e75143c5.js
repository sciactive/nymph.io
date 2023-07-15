import{s as he,I as de,e as Z,a as l,f as a,l as $,x as ue,J as ce,d as h,c as d,g as r,h as j,r as y,m as H,j as k,u as e,i as ee,v as me}from"../chunks/scheduler.d7e45cc8.js";import{S as pe,i as be,b as te,d as se,m as ne,a as oe,t as ae,e as re}from"../chunks/index.77720afb.js";import{H as ie,g as fe}from"../chunks/github.64534d2c.js";import{b as ye}from"../chunks/bash.7e4226ac.js";import{t as ge}from"../chunks/typescript.09c48802.js";import{b as ve}from"../chunks/paths.dbb47c61.js";function Te(le){let u,C,N,t,c,G='<h1 style="font-size: 3em;">Client</h1>',M,g,W=`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`,P,m,J="<h2>Installation</h2>",D,p,O,o,A,v,B="dist",I,T,F="src",L,x,_,R,U,q,b,K="<h2>Usage</h2>",Y,w,Q="Here's an overview:",z,f,S;return p=new ie({props:{language:ye,code:"npm install --save @nymphjs/client"}}),f=new ie({props:{language:ge,code:`import { Nymph, PubSub } from '@nymphjs/client';
import TodoClass from 'Todo';

const nymphOptions = {
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
  pubsubUrl: 'wss://yournymphpubsubserver',
};
const nymph = new Nymph(nymphOptions);
const pubsub = new PubSub(nymphOptions, nymph);
const Todo = nymph.addEntityClass(TodoClass);

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
subscription.unsubscribe();`}}),{c(){u=new de(!1),C=Z(),N=l(),t=a("section"),c=a("header"),c.innerHTML=G,M=l(),g=a("p"),g.textContent=W,P=l(),m=a("header"),m.innerHTML=J,D=l(),te(p.$$.fragment),O=l(),o=a("p"),A=$("This package is the Nymph client for browsers. You can find UMD in "),v=a("code"),v.textContent=B,I=$(", or TS source in "),T=a("code"),T.textContent=F,L=$(`. There is also a
    `),x=a("strong"),_=a("a"),R=$("Node.js client"),U=$("."),q=l(),b=a("header"),b.innerHTML=K,Y=l(),w=a("p"),w.textContent=Q,z=l(),te(f.$$.fragment),this.h()},l(n){const E=ue("svelte-1dn8mvk",document.head);u=ce(E,!1),C=Z(),E.forEach(h),N=d(n),t=r(n,"SECTION",{});var s=j(t);c=r(s,"HEADER",{class:!0,"data-svelte-h":!0}),y(c)!=="svelte-1hokosp"&&(c.innerHTML=G),M=d(s),g=r(s,"P",{"data-svelte-h":!0}),y(g)!=="svelte-1xf6204"&&(g.textContent=W),P=d(s),m=r(s,"HEADER",{class:!0,"data-svelte-h":!0}),y(m)!=="svelte-1hx9pnb"&&(m.innerHTML=J),D=d(s),se(p.$$.fragment,s),O=d(s),o=r(s,"P",{});var i=j(o);A=H(i,"This package is the Nymph client for browsers. You can find UMD in "),v=r(i,"CODE",{"data-svelte-h":!0}),y(v)!=="svelte-14vfyz8"&&(v.textContent=B),I=H(i,", or TS source in "),T=r(i,"CODE",{"data-svelte-h":!0}),y(T)!=="svelte-1fkgjes"&&(T.textContent=F),L=H(i,`. There is also a
    `),x=r(i,"STRONG",{});var V=j(x);_=r(V,"A",{href:!0});var X=j(_);R=H(X,"Node.js client"),X.forEach(h),V.forEach(h),U=H(i,"."),i.forEach(h),q=d(s),b=r(s,"HEADER",{class:!0,"data-svelte-h":!0}),y(b)!=="svelte-n87w0o"&&(b.innerHTML=K),Y=d(s),w=r(s,"P",{"data-svelte-h":!0}),y(w)!=="svelte-deeya8"&&(w.textContent=Q),z=d(s),se(f.$$.fragment,s),s.forEach(h),this.h()},h(){document.title="Client - Packages - Nymph.js",u.a=C,k(c,"class","major"),k(m,"class","major"),k(_,"href",ve+"/packages/client-node"),k(b,"class","major")},m(n,E){u.m(fe,document.head),e(document.head,C),ee(n,N,E),ee(n,t,E),e(t,c),e(t,M),e(t,g),e(t,P),e(t,m),e(t,D),ne(p,t,null),e(t,O),e(t,o),e(o,A),e(o,v),e(o,I),e(o,T),e(o,L),e(o,x),e(x,_),e(_,R),e(o,U),e(t,q),e(t,b),e(t,Y),e(t,w),e(t,z),ne(f,t,null),S=!0},p:me,i(n){S||(oe(p.$$.fragment,n),oe(f.$$.fragment,n),S=!0)},o(n){ae(p.$$.fragment,n),ae(f.$$.fragment,n),S=!1},d(n){n&&(u.d(),h(N),h(t)),h(C),re(p),re(f)}}}class He extends pe{constructor(u){super(),be(this,u,null,Te,he,{})}}export{He as component};
