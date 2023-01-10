import{S as Te,i as we,s as Ee,R as Ne,e as ce,a as u,k as r,q as l,w as ue,E as $e,T as Se,h as s,c as m,l as n,m as i,r as h,x as me,p as Ce,n as D,C as e,b as pe,y as be,B as He,f as fe,t as ye,z as ge}from"../../../../chunks/index-8e853c83.js";import{H as ve,g as je}from"../../../../chunks/github-07e092b5.js";import{b as Pe}from"../../../../chunks/bash-2b754df6.js";import{t as ke}from"../../../../chunks/typescript-7dd1ec19.js";import{b as qe}from"../../../../chunks/paths-b4419565.js";function De(_e){let p,w,k,t,y,g,R,x,E,O,U,v,N,A,I,b,Y,d,M,$,z,G,S,W,B,C,_,F,J,K,T,H,L,Q,j,V,X,f,q;return b=new ve({props:{language:Pe,code:"npm install --save @nymphjs/client"}}),f=new ve({props:{language:ke,code:`import { Nymph, PubSub } from '@nymphjs/client';
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
subscription.unsubscribe();`}}),{c(){p=new Ne(!1),w=ce(),k=u(),t=r("section"),y=r("header"),g=r("h1"),R=l("Client"),x=u(),E=r("p"),O=l(`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),U=u(),v=r("header"),N=r("h2"),A=l("Installation"),I=u(),ue(b.$$.fragment),Y=u(),d=r("p"),M=l("This package is the Nymph client for browsers. You can find UMD in "),$=r("code"),z=l("dist"),G=l(", or TS source in "),S=r("code"),W=l("src"),B=l(`. There is also a
    `),C=r("strong"),_=r("a"),F=l("Node.js client"),J=l("."),K=u(),T=r("header"),H=r("h2"),L=l("Usage"),Q=u(),j=r("p"),V=l("Here's an overview:"),X=u(),ue(f.$$.fragment),this.h()},l(o){const P=$e("svelte-1dn8mvk",document.head);p=Se(P,!1),w=ce(),P.forEach(s),k=m(o),t=n(o,"SECTION",{});var a=i(t);y=n(a,"HEADER",{class:!0});var Z=i(y);g=n(Z,"H1",{style:!0});var ee=i(g);R=h(ee,"Client"),ee.forEach(s),Z.forEach(s),x=m(a),E=n(a,"P",{});var te=i(E);O=h(te,`The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser. You can also subscribe to entities and queries on a Nymph
    PubSub server and be notified of changes.`),te.forEach(s),U=m(a),v=n(a,"HEADER",{class:!0});var se=i(v);N=n(se,"H2",{});var ae=i(N);A=h(ae,"Installation"),ae.forEach(s),se.forEach(s),I=m(a),me(b.$$.fragment,a),Y=m(a),d=n(a,"P",{});var c=i(d);M=h(c,"This package is the Nymph client for browsers. You can find UMD in "),$=n(c,"CODE",{});var oe=i($);z=h(oe,"dist"),oe.forEach(s),G=h(c,", or TS source in "),S=n(c,"CODE",{});var re=i(S);W=h(re,"src"),re.forEach(s),B=h(c,`. There is also a
    `),C=n(c,"STRONG",{});var ne=i(C);_=n(ne,"A",{href:!0});var ie=i(_);F=h(ie,"Node.js client"),ie.forEach(s),ne.forEach(s),J=h(c,"."),c.forEach(s),K=m(a),T=n(a,"HEADER",{class:!0});var le=i(T);H=n(le,"H2",{});var he=i(H);L=h(he,"Usage"),he.forEach(s),le.forEach(s),Q=m(a),j=n(a,"P",{});var de=i(j);V=h(de,"Here's an overview:"),de.forEach(s),X=m(a),me(f.$$.fragment,a),a.forEach(s),this.h()},h(){document.title="Client - Packages - Nymph.js",p.a=w,Ce(g,"font-size","3em"),D(y,"class","major"),D(v,"class","major"),D(_,"href",qe+"/packages/client-node"),D(T,"class","major")},m(o,P){p.m(je,document.head),e(document.head,w),pe(o,k,P),pe(o,t,P),e(t,y),e(y,g),e(g,R),e(t,x),e(t,E),e(E,O),e(t,U),e(t,v),e(v,N),e(N,A),e(t,I),be(b,t,null),e(t,Y),e(t,d),e(d,M),e(d,$),e($,z),e(d,G),e(d,S),e(S,W),e(d,B),e(d,C),e(C,_),e(_,F),e(d,J),e(t,K),e(t,T),e(T,H),e(H,L),e(t,Q),e(t,j),e(j,V),e(t,X),be(f,t,null),q=!0},p:He,i(o){q||(fe(b.$$.fragment,o),fe(f.$$.fragment,o),q=!0)},o(o){ye(b.$$.fragment,o),ye(f.$$.fragment,o),q=!1},d(o){s(w),o&&p.d(),o&&s(k),o&&s(t),ge(b),ge(f)}}}class Ie extends Te{constructor(p){super(),we(this,p,null,De,Ee,{})}}export{Ie as default};
