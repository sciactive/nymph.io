import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/NGVJzLji.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/DDTgMnDM.js";import{t as v}from"../chunks/Ciszbs-_.js";var y=t(`<section><header class="major"><h1 style="font-size: 3em;">Client</h1></header> <p>The Nymph Client allows you to query and push data to a Nymph REST server,
    and subscribe to entities and queries on a Nymph PubSub server and be
    notified of changes, from the browser or Node.js.</p> <p>For Tilmeld user authentication, be sure to load the <a>Tilmeld Client</a> entities as well.</p> <header class="major"><h2>Installation</h2></header> <!> <p>This package is the Nymph client for browsers and Node.js, but requires at
    least Node.js 22 to be used in Node. You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function b(t){var b=y();c(`17ufcse`,e=>{var t=o(),n=i(t);p(n,()=>v),a(()=>{s.title=`Client - Packages - Nymph.js`}),f(e,t)});var x=r(n(b),4),S=r(n(x));l(),d(x);var C=r(x,4);h(C,{get language(){return _},code:`npm install --save @nymphjs/client`});var w=r(C,8);h(w,{get language(){return g},code:`import { Nymph, PubSub } from '@nymphjs/client';
import TodoClass from './Todo.js';

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
subscription.unsubscribe();`}),d(b),e(()=>u(S,`href`,`${m??``}/packages/tilmeld-client`)),f(t,b)}export{b as component};