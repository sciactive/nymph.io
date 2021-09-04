<svelte:head>
  <title>Nymph - JavaScript Data Objects</title>
</svelte:head>

<Header>Homepage</Header>

<section id="banner">
  <div class="content">
    <header>
      <h1>Nymph</h1>
      <p>Object relational mapper for Node.js and the browser.</p>
    </header>
    <p>
      Nymph is an object relational mapper for collaborative web apps. Nymph
      runs in Node.js and provides a REST server with clients built for Node.js
      and the browser. Nymph is written in TypeScript. It allows rapid
      prototyping as well as production ready speed and features.
    </p>
    <ul class="actions">
      <li>
        <a
          href="https://github.com/sciactive/nymphjs"
          target="_blank"
          class="button big">Learn More</a
        >
      </li>
    </ul>
  </div>
</section>

<section>
  <header class="major">
    <h2>Migration</h2>
  </header>

  <p>
    Nymph is currently being migrated from PHP to Node.js. During this process,
    this site will be growing and changing. Until the next version of Nymph,
    4.0, is released, the API is subject to change. You can also visit <a
      href="/3.0/index.html"
      rel="external">the site for the old version, 3.0</a
    >.
  </p>
</section>

<section>
  <header class="major">
    <h2>Features</h2>
  </header>
  <div class="features">
    <article>
      <span class="icon"><Icon path={mdiSpeedometer} /></span>
      <div class="content">
        <h3>Speedy</h3>
        <p>
          Nymph is lean and fast. Not just in processing, but Nymph can be used
          for rapid prototyping.
        </p>
      </div>
    </article>
    <article>
      <span class="icon"><Icon path={mdiSourceRepository} /></span>
      <div class="content">
        <h3>Open Source</h3>
        <p>
          Nymph is licensed under the Apache-2 license. It provides all you need
          to build a backend for your app and the frontend tools you'll need as
          well.
        </p>
      </div>
    </article>
    <article>
      <span class="icon"><Icon path={mdiForum} /></span>
      <div class="content">
        <h3>Reactive</h3>
        <p>
          Nymph's publish/subscribe server makes it easy to build <strong
            >collaborative</strong
          > apps. Subscribing to queries and entities is a powerful feature that
          will get your collaboritive features working quickly and easily.
        </p>
      </div>
    </article>
    <article>
      <span class="icon"><Icon path={mdiShield} /></span>
      <div class="content">
        <h3>Secure</h3>
        <p>
          Nymph provides an optional user and group manager called Tilmeld that
          secures your app based on granular permission controls.
        </p>
      </div>
    </article>
  </div>
</section>

<section>
  <header class="major">
    <h2>Framework Ready</h2>
    <p>
      Nymph is very easy to integrate into Angular, React, Ember, Svelte, and
      more.
    </p>
  </header>

  <p>
    Nymph's easy querying on the server and client makes it perfect for building
    complex apps with any backend and frontend framework. Because you don't have
    to write SQL, almost all of your logic can be on the client side, if you
    prefer. That means fewer round trips, more responsive interfaces, and
    happier customers.
  </p>
  <p>
    Creating a new type of entity is simple in Nymph. You can code your logic on
    the server or client side, and access it all the same. If you're already
    invested in a data store, Nymph's REST server package makes it easy to
    integrate anywhere in your app.
  </p>
  <p>
    It's not just for frontend. Nymph will integrate with any Node.js server
    frameworks that can accept, or run side by side with, Express apps. Nymph is
    designed to be flexible.
  </p>
</section>

<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Icon from '$lib/Icon.svelte';
  import {
    mdiForum,
    mdiShield,
    mdiSourceRepository,
    mdiSpeedometer
  } from '@mdi/js';
</script>
