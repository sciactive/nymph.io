<svelte:head>
  <title>UIDs - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">UIDs</h1>
  </header>

  <p>
    UIDs, or unique IDs, provide an easier way for users to identify entities.
    UIDs are just sequential numbers and can be used for anything you like, not
    just entities. As opposed to a GUID, which is a unique ID for all entities,
    a UID is only unique for its own sequence. Therefore, they are more visually
    appealing to be used as an ID. (Think Sale #615 vs Sale
    #790219d8fb67a1357707b71d.)
  </p>

  <p>Nymph has the following methods for handling UIDs:</p>

  <ul>
    <li><code>deleteUID</code> - Delete a unique ID from the system.</li>
    <li><code>getUID</code> - Get the current value of a unique ID.</li>
    <li>
      <code>newUID</code> - Increment or create a unique ID and return the new value.
    </li>
    <li><code>renameUID</code> - Rename a unique ID.</li>
    <li><code>setUID</code> - Set the value of a unique ID.</li>
  </ul>

  <Highlight
    language={typescript}
    code={`let entity = await Post.factory();

entity.id = await nymph.newUID('Blog/Post');
await entity.$save();`}
  />

  <p>
    You probably don't want to allow any UIDs from the client. Then a malicious
    user can mess with the UID. Instead, from the server side, you can create a
    UID when the entity is saved. You can also gate UIDs using abilities like
    "uid/get/nameofuid", "uid/new/nameofuid", and "uid/set/nameofuid". These
    abilities are <strong>only</strong> checked for client queries. If you're
    using UIDs from Node.js and want to gate them, use the
    <code>checkClientUIDPermissions</code> method on Tilmeld.
  </p>

  <p>
    Caution: If a UID is incremented, and the entity you're using it on can't be
    saved, there is no safe way to decrement the UID back to its previous value.
    It's much better to just throw away that UID.
  </p>
</section>

<section>
  <div class="row">
    <div class="col-6 col-12-small">
      <a
        href="{base}/user-guide/defining-entities"
        class="button"
        style="margin: .5em;">Previous: Defining Entities</a
      >
    </div>
    <div class="col-6 col-12-small" style="text-align: end;">
      <a
        href="{base}/user-guide/transactions"
        class="button"
        style="margin: .5em;">Next: Transactions</a
      >
    </div>
  </div>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
