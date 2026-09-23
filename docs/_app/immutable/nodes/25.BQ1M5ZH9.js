import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/NGVJzLji.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/Ciszbs-_.js";var v=t(`<section><header class="major"><h1 style="font-size: 3em;">Subscribing to Queries</h1></header> <p>Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.</p> <p>Before we get started, you can follow the <a>PubSub Server Package</a> page to set up a Nymph PubSub server.</p> <p>You can use the <code>subscribeEntities</code> method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that <code>updateArray</code> uses to update the original array.</p> <!> <p>You can also receive a count of how many subscribers there are to that query
    (unless that has been disabled). The count is given to a third callback.</p> <!> <p>To unsubscribe from the query, use the <code>unsubscribe</code> method on
    the <code>PubSubSubscription</code> object returned by the function.</p> <!> <p>You can subscribe to changes to an entity with the <code>subscribeWith</code> method. This method accepts the callbacks directly and returns a <code>PubSubSubscription</code> object.</p> <!> <p>Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.</p> <p>Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Entity Querying</a> <a class="button" style="margin: .5em;">Next: Entity Class</a></section>`,1);function y(t){var y=v();c(`jfcefu`,e=>{var t=o(),n=i(t);p(n,()=>_),a(()=>{s.title=`Subscribing to Queries - User Guide - Nymph.js`}),f(e,t)});var b=i(y),x=r(n(b),4),S=r(n(x));l(),d(x);var C=r(x,4);h(C,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
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
);`});var w=r(C,4);h(w,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
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
);`});var T=r(w,4);h(T,{get language(){return g},code:`let smiths: (User & UserData)[] = [];
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
});`});var E=r(T,4);h(E,{get language(){return g},code:`let subscription = pubsub.subscribeWith(
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
});`}),l(4),d(b);var D=r(b,2),O=n(D),k=r(O,2);d(D),e(()=>{u(S,`href`,`${m??``}/packages/pubsub/`),u(O,`href`,`${m??``}/user-guide/entity-querying`),u(k,`href`,`${m??``}/user-guide/entity-class`)}),f(t,y)}export{y as component};