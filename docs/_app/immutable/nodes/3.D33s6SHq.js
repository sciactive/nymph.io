import{h as l,a as s,t as p,c as h}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as m,f as c,s as a,c as b,a as y}from"../chunks/xPuFI3q7.js";import{h as f,g as w}from"../chunks/C0NHSKHS.js";import{b as T}from"../chunks/c8uDcNtF.js";import{t as g}from"../chunks/Ce9AoNbY.js";import"../chunks/DnMb0p-7.js";import{H as r}from"../chunks/9N_cuTOb.js";var v=p(`<section><header class="major"><h1 style="font-size: 3em;">Client</h1></header> <p>The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser or Node.js. You can also subscribe to entities and queries
    on a Nymph PubSub server and be notified of changes.</p> <header class="major"><h2>Installation</h2></header> <!> <p>This package is the Nymph client for browsers and Node.js, but requires at
    least Node.js 22. You can find ES modules in <code>dist</code>, or TS source
    in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function I(i){var e=v();l(d=>{var o=h();m.title="Client - Packages - Nymph.js";var u=c(o);f(u,()=>w,!1,!1),s(d,o)});var t=a(b(e),6);r(t,{language:T,code:"npm install --save @nymphjs/client"});var n=a(t,8);r(n,{language:g,code:`import { Nymph, PubSub } from '@nymphjs/client';
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
subscription.unsubscribe();`}),y(e),s(i,e)}export{I as component};
