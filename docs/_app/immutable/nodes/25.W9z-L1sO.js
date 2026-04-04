import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/k6Ybk7qv.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/DIXNzCvi.js";import{t as _}from"../chunks/jqiW6npt.js";var v=a(`<section><header class="major"><h1 style="font-size: 3em;">Subscribing to Queries</h1></header> <p>Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.</p> <p>Before we get started, you can follow the <a>PubSub Server Package</a> page to set up a Nymph PubSub server.</p> <p>You can use the <code>subscribeEntities</code> method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that <code>updateArray</code> uses to update the original array.</p> <!> <p>You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.</p> <!> <p>To unsubscribe from the query, use the <code>unsubscribe</code> method on
    the <code>PubSubSubscription</code> object returned by the function.</p> <!> <p>You can subscribe to changes to an entity with the <code>subscribeWith</code> method. This method accepts the callbacks directly and returns a <code>PubSubSubscription</code> object.</p> <!> <p>Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.</p> <p>Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Entity Querying</a> <a class="button" style="margin: .5em;">Next: Entity Class</a></section>`,1);function y(a){var y=v();c(`jfcefu`,i=>{var a=f();s(t(a),()=>_),r(()=>{n.title=`Subscribing to Queries - User Guide - Nymph.js`}),e(i,a)});var b=t(y),x=i(o(b),4),S=i(o(x));d(),l(x);var C=i(x,4);h(C,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)(
  (update) => {
    // This function will be called once initially with an array of
    // entities, then again every time there's a change with an
    // update object.
    // The updateArray function will add any newly matching entities,
    // update any existing entities that have changed, and remove any
    // entities that no longer match (including deleted entities).
    pubsub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  }
);`});var w=i(C,4);h(w,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)(
  (update) => {
    pubsub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  },
  (count) => {
    // This function will be called each time the count of
    // subscribers to this query changes.
    console.log(\`There are now \${count} users watching the Smiths.\`);
  }
);`});var T=i(w,4);h(T,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
let subscription = pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)((update) => {
  pubsub.updateArray(smiths, update);
});

onDestroy(() => {
  subscription.unsubscribe();
});`}),h(i(T,4),{get language(){return g},code:`let subscription = pubsub.subscribeWith(
  smithEntity,
  () => {
    if (smithEntity.guid == null) {
      if (confirm('Someone deleted Mr. Smith! Do you want to restore him?')) {
        smithEntity.$save();
      }
    } else {
      alert("Mr. Smith's entity has changed!");
    }
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  },
  (count) => {
    console.log(\`There are now \${count} users watching Mr. Smith.\`);
  }
);

onDestroy(() => {
  subscription.unsubscribe();
});`}),d(4),l(b);var E=i(b,2),D=o(E),O=i(D,2);l(E),p(()=>{u(S,`href`,`${m??``}/packages/pubsub/`),u(D,`href`,`${m??``}/user-guide/entity-querying`),u(O,`href`,`${m??``}/user-guide/entity-class`)}),e(a,y)}export{y as component};