import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,w as u}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as d}from"../chunks/DUAD-eIe.js";import{t as f}from"../chunks/XOiHpZri.js";import{t as p}from"../chunks/DIXNzCvi.js";import{t as m}from"../chunks/jqiW6npt.js";var h=a(`<section><header class="major"><h1 style="font-size: 3em;">Client</h1></header> <p>The Nymph Client allows you to query and push data to a Nymph REST server
    from the browser or Node.js. You can also subscribe to entities and queries
    on a Nymph PubSub server and be notified of changes.</p> <header class="major"><h2>Installation</h2></header> <!> <p>This package is the Nymph client for browsers and Node.js, but requires at
    least Node.js 22 to be used in Node. You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function g(a){var g=h();c(`17ufcse`,i=>{var a=u();s(t(a),()=>m),r(()=>{n.title=`Client - Packages - Nymph.js`}),e(i,a)});var _=i(o(g),6);d(_,{get language(){return f},code:`npm install --save @nymphjs/client`}),d(i(_,8),{get language(){return p},code:`import { Nymph, PubSub } from '@nymphjs/client';
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
subscription.unsubscribe();`}),l(g),e(a,g)}export{g as component};