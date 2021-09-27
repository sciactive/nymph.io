<svelte:head>
  <title>Nymph.js - JavaScript Data Objects</title>
</svelte:head>

<section id="banner">
  <div class="content">
    <header>
      <h1>Nymph.js</h1>
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
          class="button big">Nymph.js on GitHub</a
        >
      </li>
    </ul>
  </div>
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
          > apps. You can subscribe to complex queries from the client and be notified
          when the queries' results have changed.
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
      Nymph is very easy to integrate into React, Svelte, Angular, Ember, and
      more.
    </p>
  </header>

  <p>
    Nymph's easy querying on the server and client makes it perfect for building
    complex apps with any frontend framework. Because you don't have to write
    SQL, almost all of your logic can be on the client side, if you prefer. You
    can also use backend logic in the client as if it were written on the
    front-end with automatic asynchronous server calls.
  </p>
  <p>
    Nymph's REST server package makes it easy to integrate anywhere in your app.
    It provides an Express middleware that you can place on any arbitrary
    endpoint.
  </p>
</section>

<section>
  <header class="major">
    <h2>Migration</h2>
  </header>

  <p>
    In 2021, Nymph was migrated from PHP to Node.js. You can also visit <a
      href="/legacy/index.html"
      rel="external">the site for the legacy version</a
    >.
  </p>
</section>

<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import {
    mdiForum,
    mdiShield,
    mdiSourceRepository,
    mdiSpeedometer
  } from '@mdi/js';
</script>
