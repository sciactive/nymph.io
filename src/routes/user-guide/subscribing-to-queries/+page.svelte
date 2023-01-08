<svelte:head>
  <title>Subscribing to Queries - User Guide - Nymph.js</title>
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
);`}
  />

  <p>
    You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.
  </p>

  <Highlight
    language={typescript}
    code={`let smiths: (User & UserData)[] = [];
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
});`}
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
    code={`let subscription = pubsub.subscribeWith(
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
});`}
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

<section>
  <div class="row">
    <div class="col-6 col-12-small">
      <a
        href="{base}/user-guide/entity-querying"
        class="button"
        style="margin: .5em;">Previous: Entity Querying</a
      >
    </div>
    <div class="col-6 col-12-small" style="text-align: end;">
      <a
        href="{base}/user-guide/entity-class"
        class="button"
        style="margin: .5em;">Next: Entity Class</a
      >
    </div>
  </div>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';

  import { base } from '$app/paths';
</script>
