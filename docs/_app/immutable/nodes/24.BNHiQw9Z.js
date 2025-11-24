import{h as E,a as y,t as _,c as U}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{f as g,$ as P,s as e,c as r,n as f,a as n}from"../chunks/xPuFI3q7.js";import{h as j,g as $}from"../chunks/C0NHSKHS.js";import{s as o}from"../chunks/Dx4IbXf0.js";import{t}from"../chunks/Ce9AoNbY.js";import{b as u}from"../chunks/DnMb0p-7.js";import{H as a}from"../chunks/9N_cuTOb.js";var x=_(`<section><header class="major"><h1 style="font-size: 3em;">Subscribing to Queries</h1></header> <p>Subscribing to a query lets you receive updates to that query. This is a
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
    in due time by the PubSub server.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Entity Querying</a> <a class="button" style="margin: .5em;">Next: Entity Class</a></section>`,1);function I(v){var c=x();E(q=>{var m=U();P.title="Subscribing to Queries - User Guide - Nymph.js";var k=g(m);j(k,()=>$,!1,!1),y(q,m)});var s=g(c),i=e(r(s),4),w=e(r(i));o(w,"href",`${u??""}/packages/pubsub/`),f(),n(i);var h=e(i,4);a(h,{language:t,code:`let smiths: (User & UserData)[] = [];
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
);`});var l=e(h,4);a(l,{language:t,code:`let smiths: (User & UserData)[] = [];
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
);`});var b=e(l,4);a(b,{language:t,code:`let smiths: (User & UserData)[] = [];
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
});`});var S=e(b,4);a(S,{language:t,code:`let subscription = pubsub.subscribeWith(
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
});`}),f(4),n(s);var p=e(s,2),d=r(p);o(d,"href",`${u??""}/user-guide/entity-querying`);var T=e(d,2);o(T,"href",`${u??""}/user-guide/entity-class`),n(p),y(v,c)}export{I as component};
