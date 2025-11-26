import{f as k,a as g,c as E}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as y,t as U,e as j,s as e,c as i,$ as P,n as f,a as n}from"../chunks/uMqmAk-V.js";import{h as $,g as x}from"../chunks/BSVgqX3x.js";import{h as D,s as o}from"../chunks/Dx1ptvL_.js";import{t}from"../chunks/Ce9AoNbY.js";import{b as u}from"../chunks/DJsMn768.js";import{H as a}from"../chunks/DZfDsH_2.js";var A=k(`<section><header class="major"><h1 style="font-size: 3em;">Subscribing to Queries</h1></header> <p>Subscribing to a query lets you receive updates to that query. This is a
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
    in due time by the PubSub server.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Entity Querying</a> <a class="button" style="margin: .5em;">Next: Entity Class</a></section>`,1);function B(v){var c=A();D("jfcefu",q=>{var d=E(),_=y(d);$(_,()=>x),j(()=>{P.title="Subscribing to Queries - User Guide - Nymph.js"}),g(q,d)});var s=y(c),r=e(i(s),4),w=e(i(r));f(),n(r);var h=e(r,4);a(h,{get language(){return t},code:`let smiths: (User & UserData)[] = [];
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
);`});var l=e(h,4);a(l,{get language(){return t},code:`let smiths: (User & UserData)[] = [];
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
);`});var b=e(l,4);a(b,{get language(){return t},code:`let smiths: (User & UserData)[] = [];
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
});`});var S=e(b,4);a(S,{get language(){return t},code:`let subscription = pubsub.subscribeWith(
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
});`}),f(4),n(s);var p=e(s,2),m=i(p),T=e(m,2);n(p),U(()=>{o(w,"href",`${u??""}/packages/pubsub/`),o(m,"href",`${u??""}/user-guide/entity-querying`),o(T,"href",`${u??""}/user-guide/entity-class`)}),g(v,c)}export{B as component};
