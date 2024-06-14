import{S as Te,i as we,s as Ee,R as Ne,e as ce,a as u,k as n,q as l,y as ue,F as $e,T as Se,h as s,c as m,l as r,m as i,r as h,z as me,p as Ce,n as q,C as e,b as pe,A as be,D as He,g as fe,d as ye,B as ge}from"../chunks/index.d7cc8d8b.js";import{H as ve,g as je}from"../chunks/github.df9008b1.js";import{b as Pe}from"../chunks/bash.2b754df6.js";import{t as De}from"../chunks/typescript.7dd1ec19.js";import{b as ke}from"../chunks/paths.4334e024.js";function qe(_e){let p,w,D,t,y,g,R,A,E,O,U,v,N,x,I,b,Y,d,M,$,z,G,S,W,B,C,_,F,J,K,T,H,L,Q,j,V,X,f,k;return b=new ve({props:{language:Pe,code:"npm install --save @nymphjs/client"}}),f=new ve({props:{language:De,code:`import { Nymph, PubSub } from '@nymphjs/client';
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
  },
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
  },
);

// ...

// Remember to clean up your subscriptions when you no longer need them.
subscription.unsubscribe();`}}),{c(){p=new Ne(!1),w=ce(),D=u(),t=n("section"),y=n("header"),g=n("h1"),R=l("Client"),A=u(),E=n("p"),O=l(`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),U=u(),v=n("header"),N=n("h2"),x=l("Installation"),I=u(),ue(b.$$.fragment),Y=u(),d=n("p"),M=l("This package is the Nymph client for browsers. You can find UMD in "),$=n("code"),z=l("dist"),G=l(", or TS source in "),S=n("code"),W=l("src"),B=l(`. There is also a
    `),C=n("strong"),_=n("a"),F=l("Node.js client"),J=l("."),K=u(),T=n("header"),H=n("h2"),L=l("Usage"),Q=u(),j=n("p"),V=l("Here's an overview:"),X=u(),ue(f.$$.fragment),this.h()},l(a){const P=$e("svelte-1dn8mvk",document.head);p=Se(P,!1),w=ce(),P.forEach(s),D=m(a),t=r(a,"SECTION",{});var o=i(t);y=r(o,"HEADER",{class:!0});var Z=i(y);g=r(Z,"H1",{style:!0});var ee=i(g);R=h(ee,"Client"),ee.forEach(s),Z.forEach(s),A=m(o),E=r(o,"P",{});var te=i(E);O=h(te,`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),te.forEach(s),U=m(o),v=r(o,"HEADER",{class:!0});var se=i(v);N=r(se,"H2",{});var oe=i(N);x=h(oe,"Installation"),oe.forEach(s),se.forEach(s),I=m(o),me(b.$$.fragment,o),Y=m(o),d=r(o,"P",{});var c=i(d);M=h(c,"This package is the Nymph client for browsers. You can find UMD in "),$=r(c,"CODE",{});var ae=i($);z=h(ae,"dist"),ae.forEach(s),G=h(c,", or TS source in "),S=r(c,"CODE",{});var ne=i(S);W=h(ne,"src"),ne.forEach(s),B=h(c,`. There is also a
    `),C=r(c,"STRONG",{});var re=i(C);_=r(re,"A",{href:!0});var ie=i(_);F=h(ie,"Node.js client"),ie.forEach(s),re.forEach(s),J=h(c,"."),c.forEach(s),K=m(o),T=r(o,"HEADER",{class:!0});var le=i(T);H=r(le,"H2",{});var he=i(H);L=h(he,"Usage"),he.forEach(s),le.forEach(s),Q=m(o),j=r(o,"P",{});var de=i(j);V=h(de,"Here's an overview:"),de.forEach(s),X=m(o),me(f.$$.fragment,o),o.forEach(s),this.h()},h(){document.title="Client - Packages - Nymph.js",p.a=w,Ce(g,"font-size","3em"),q(y,"class","major"),q(v,"class","major"),q(_,"href",ke+"/packages/client-node"),q(T,"class","major")},m(a,P){p.m(je,document.head),e(document.head,w),pe(a,D,P),pe(a,t,P),e(t,y),e(y,g),e(g,R),e(t,A),e(t,E),e(E,O),e(t,U),e(t,v),e(v,N),e(N,x),e(t,I),be(b,t,null),e(t,Y),e(t,d),e(d,M),e(d,$),e($,z),e(d,G),e(d,S),e(S,W),e(d,B),e(d,C),e(C,_),e(_,F),e(d,J),e(t,K),e(t,T),e(T,H),e(H,L),e(t,Q),e(t,j),e(j,V),e(t,X),be(f,t,null),k=!0},p:He,i(a){k||(fe(b.$$.fragment,a),fe(f.$$.fragment,a),k=!0)},o(a){ye(b.$$.fragment,a),ye(f.$$.fragment,a),k=!1},d(a){s(w),a&&p.d(),a&&s(D),a&&s(t),ge(b),ge(f)}}}class Ie extends Te{constructor(p){super(),we(this,p,null,qe,Ee,{})}}export{Ie as component};
