<svelte:head>
  <title>UIDs - User Guide - Nymph</title>
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

entity.id = await Nymph.newUID('Blog/Post');
await entity.$save();`}
  />

  <p>
    You probably don't want to allow UIDs from the client. Then a malicious user
    can reset the UID. Instead, from the server side, you can create a UID when
    the entity is saved.
  </p>

  <p>
    Caution: If a UID is incremented, and the entity you're using it on can't be
    saved, there is no safe way to decrement the UID back to its previous value.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';
</script>
