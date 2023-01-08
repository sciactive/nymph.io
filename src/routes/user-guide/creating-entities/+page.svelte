<svelte:head>
  <title>Creating Entities - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Creating Entities</h1>
  </header>

  <p>
    To create or retrieve an entity, you can call the <code>factory</code>
    static method of an entity's class and pass in an optional GUID. You can also
    use the <code>factorySync</code> method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (<code>entity.guid == null</code>).
  </p>

  <Highlight
    language={typescript}
    code={`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}
  />

  <p>
    Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.
  </p>

  <Highlight
    language={typescript}
    code={`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}
  />

  <p>
    Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.
  </p>

  <div>
    <div style="text-align: end;">
      Saving a Referenced Entity the <strong>Right</strong> Way
    </div>
    <Highlight
      language={typescript}
      code={`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}
    />
  </div>

  <div>
    <div style="text-align: end;">
      Saving a Referenced Entity the <strong>Wrong</strong> Way
    </div>
    <Highlight
      language={typescript}
      code={`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}
    />
  </div>

  <p>
    Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.
  </p>

  <p>
    When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    <code>$clearCache</code> in Node.js or <code>$refresh</code> in the client to
    turn all the entities back into sleeping references.
  </p>

  <p>
    In the client, the <code>$readyAll</code> method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.
  </p>
</section>

<section>
  <div class="row">
    <div class="col-6 col-12-small">
      <a
        href="{base}/user-guide/introduction"
        class="button"
        style="margin: .5em;">Previous: Introduction</a
      >
    </div>
    <div class="col-6 col-12-small" style="text-align: end;">
      <a
        href="{base}/user-guide/entity-querying"
        class="button"
        style="margin: .5em;">Next: Entity Querying</a
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
