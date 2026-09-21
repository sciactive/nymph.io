<svelte:head>
  <title>Nymph.js - Application Data and Access Framework</title>
</svelte:head>

<section id="banner">
  <div class="content">
    <header>
      <h1>Nymph.js</h1>
      <p>Application Data and Access Framework for Node.js and the browser.</p>
    </header>
    <p>
      Nymph.js includes an object relational mapper with nested, atomic
      transactions, a powerful query language, a user and group manager with
      granular access controls, a REST server, a publish/subscribe server for
      real time collaboration, and a client for Node.js and the browser. It
      allows rapid prototyping and production ready speed and features.
    </p>
    <p>
      Nymph can use SQLite3, MySQL, or PostgreSQL as its database backend. You
      can use SQLite in development, and MySQL or Postgres in production. You
      can even use Nymph with SQLite in an Electron app.
    </p>
    <p>
      Nymph is the framework that powers the <a
        href="https://port87.com"
        target="_blank">Port87</a
      >
      email service. It also powers
      <a href="https://forge.sciactive.com/sciactive/nephele" target="_blank"
        >Nephele</a
      >'s deduplication adapter. Nymph was started in 2009 as part of a
      framework called
      <a href="https://sourceforge.net/projects/pines/" target="_blank">Pines</a
      >. In 2012, it was spun off into its own project, and in 2021, it was
      migrated to Node.js. As part of Pines, it powered TECHsmart's entire ERP
      system for over a decade.
    </p>
    <ul class="actions">
      <li>
        <a
          href="https://forge.sciactive.com/sciactive/nymphjs"
          target="_blank"
          rel="noreferrer"
          class="button big">Nymph.js on SciActive Forge</a
        >
      </li>
    </ul>
  </div>
</section>

<section>
  <header class="major">
    <h2>Features</h2>
  </header>
  <p>
    Write simple JSON search queries, with automatic access control built right
    in, and get updated on the client automatically with any changes. You can
    have all your logic on the frontend, or the backend if you prefer, because
    you work with the data all the same.
  </p>
  <div class="features">
    <article>
      <span class="icon"><Icon path={mdiSpeedometer} /></span>
      <div class="content">
        <h3>Speedy</h3>
        <p>
          Nymph is fast. Not just in processing, but Nymph can be used for rapid
          prototyping.
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
    <article>
      <span class="icon"><Icon path={mdiForum} /></span>
      <div class="content">
        <h3>Reactive</h3>
        <p>
          Nymph's publish/subscribe server makes it easy to build <strong
            >collaborative</strong
          > apps. Subscribe to queries from the client and be updated when the queries'
          results have changed.
        </p>
      </div>
    </article>
    <article>
      <span class="icon"><Icon path={mdiAtom} /></span>
      <div class="content">
        <h3>Atomic Transactions</h3>
        <p>
          Nymph supports atomic, nested transactions to ensure data integrity.
          Nothing is actually written to the database until the top level
          transaction is committed.
        </p>
      </div>
    </article>
    <article>
      <span class="icon"><Icon path={mdiTextSearch} /></span>
      <div class="content">
        <h3>Full Text Search</h3>
        <p>
          Nymph provides a full text search engine to provide fast results when
          searching through millions of entities.
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
  </div>
</section>

<section>
  <header class="major">
    <h2>Framework Agnostic</h2>
    <p>
      Nymph is very easy to integrate into React, Svelte, Angular, Vue, and
      more.
    </p>
  </header>

  <p>
    Nymph's easy querying on the server and client makes it perfect for building
    complex apps with any frontend framework. Because you don't have to write
    SQL, almost all of your logic can be on the client side, if you prefer. You
    can also use backend logic in the client as if it were written on the
    front-end with automatic asynchronous server calls. You can even use
    generator functions for streamed communication on long running tasks.
  </p>
  <p>
    Nymph's REST server package makes it easy to integrate anywhere in your app.
    It provides an Express middleware that you can place on any arbitrary
    endpoint.
  </p>
  <p>
    Nymph's PubSub server package makes synchronizing your client with pushed
    changes from the server super easy. With a reactive framework on the
    frontend, your UI will update in near real time to changes to any entities
    that match your subscribed queries.
  </p>
</section>

<section>
  <header class="major">
    <h2>Full API Docs</h2>
  </header>

  <p>
    If you want to really dive deep into Nymph, you can also browse the <a
      href="/api/latest/"
      rel="external">API docs</a
    >, which covers every part of Nymph's API.
  </p>
</section>

<section>
  <header class="major">
    <h2>Migration</h2>
  </header>

  <p>
    In 2021, Nymph was migrated from PHP to Node.js. You can also visit <a
      href="/legacy/"
      rel="external">the site for the legacy version</a
    >.
  </p>
</section>

<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import {
    mdiAtom,
    mdiForum,
    mdiShield,
    mdiSourceRepository,
    mdiSpeedometer,
    mdiTextSearch
  } from '@mdi/js';
</script>
