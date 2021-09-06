<svelte:head>
  <title>Subscribing to Queries - User Guide - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Subscribing to Queries</h1>
  </header>

  <p>
    Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.
  </p>

  <p>
    Before we get started, you can follow the <a href="{base}/packages/pubsub/"
      >PubSub Server Package</a
    > page to set up a Nymph PubSub server.
  </p>

  <p>
    You can use the <code>subscribeEntities</code> method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    <code>updateArray</code> uses to update the original array.
  </p>

  <Highlight
    language={typescript}
    code={`let smiths: (User & UserData)[] = [];
PubSub.subscribeEntities(
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
    PubSub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  }
);`}
  />

  <p>
    You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.
  </p>

  <Highlight
    language={typescript}
    code={`let smiths: (User & UserData)[] = [];
PubSub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)(
  (update) => {
    PubSub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  },
  (count) => {
    // This function will be called each time the count of
    // subscribers to this query changes.
    console.log(\`There are now \${count} users watching the Smiths.\`);
  }
);`}
  />

  <p>
    To unsubscribe from the query, use the <code>unsubscribe</code> method on
    the
    <code>PubSubSubscription</code> object returned by the function.
  </p>

  <Highlight
    language={typescript}
    code={`let smiths: (User & UserData)[] = [];
let subscription = PubSub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)((update) => {
  PubSub.updateArray(smiths, update);
});

let unsubscribe = () => {
  subscription.unsubscribe();
};`}
  />

  <p>
    You can subscribe to changes to an entity with the <code>subscribeWith</code
    >
    method. This method accepts the callbacks directly and returns a
    <code>PubSubSubscription</code>
    object.
  </p>

  <Highlight
    language={typescript}
    code={`let subscription = PubSub.subscribeWith(
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

let unsubscribe = () => {
  subscription.unsubscribe();
};`}
  />

  <p>
    Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.
  </p>

  <p>
    Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';

  import { base } from '$app/paths';
</script>
