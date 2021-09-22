<svelte:head>
  <title>Introduction - User Guide - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Introduction</h1>
  </header>

  <p>
    Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server. It used to be a PHP
    library and was migrated to Node.js in 2021.
  </p>

  <header class="major">
    <h2>Understanding Nymph Applications</h2>
  </header>

  <p>
    Data in Nymph is stored and manipulated in objects called <strong
      >entities</strong
    >. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling <code>$save</code>. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    <a href="https://joi.dev/" target="_blank">Joi</a>
    is a good one. You can do this in the
    <code>$save</code>
    method on your entities before calling
    <code>return await super.$save();</code>. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strictly typed data checks in production.
  </p>

  <p>
    All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are generated randomly, and
    quite large, there should never be any two entities in any Nymph
    installation with the same GUIDs (unless that's done on purpose). Nymph also
    provides UIDs, which are sequential and can be used to number entities (or
    anything else). UIDs can be used to provide a more visibly pleasing
    identifier for entities.
  </p>

  <p>
    Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group and access control
    manager, provides security.
  </p>

  <p>
    If an entity is referenced in another entity's property, the class is saved
    along with the GUID. When this property is accessed after the top level
    entity is pulled from the DB, Nymph will retrieve the referenced entity
    using the saved class.
  </p>

  <p>
    When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. In Node.js, this
    happens automatically when the data is accessed. In the client, this happens
    when you use the <code>$ready</code> method.
  </p>

  <p>
    When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.
  </p>

  <p>
    Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.
  </p>

  <header class="major">
    <h2>API Docs</h2>
  </header>

  <p>
    If you want to really dive deep into Nymph, you can also browse the <a
      href="/api/latest/index.html"
      rel="external">API docs</a
    >, which covers every part of Nymph's API.
  </p>

  <p>
    If you need help with the old version of Nymph, that ran on PHP, you can
    browse the <a href="/api/legacy/3.0.0/index.html" rel="external"
      >Legacy API docs</a
    >.
  </p>
</section>

<section>
  <div class="row">
    <div class="col-6 col-12-small" />
    <div class="col-6 col-12-small" style="text-align: end;">
      <a
        href="{base}/user-guide/creating-entities"
        class="button"
        style="margin: .5em;">Next: Creating Entities</a
      >
    </div>
  </div>
</section>

<script lang="ts">
  import { base } from '$app/paths';
</script>
