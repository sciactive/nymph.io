<svelte:window on:resize={handleWindowResize} />
<svelte:head>
  <meta
    name="description"
    content="Object relational mapper for Node.js and the browser"
  />
  <meta property="og:title" content="Nymph" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://nymph.io/" />
  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/sciactive/nymph/master/assets/nymph-logo-500.png"
  />
  <meta property="og:site_name" content="Nymph" />
  <meta property="fb:admins" content="508999194" />
  <meta
    property="og:description"
    content="Object relational mapper for Node.js and the browser"
  />

  <link
    rel="icon"
    href="{assets}/images/cropped-logo-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="{assets}/images/cropped-logo-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="{assets}/images/cropped-logo-180x180.png"
  />
  <meta
    name="msapplication-TileImage"
    content="{assets}/images/cropped-logo-270x270.png"
  />
  <link rel="stylesheet" href="{assets}/css/main.css" />
</svelte:head>

<!-- Main -->
<div
  id="main"
  on:click={setSidebarInactive}
  on:keypress={(event) => event.key === 'Enter' || setSidebarInactive()}
>
  <div class="inner">
    <Header />

    <slot />

    <!-- Footer -->
    <footer id="footer">
      <p class="copyright">
        &copy; SciActive Inc. All rights reserved. Design by:
        <a href="https://html5up.net">HTML5 UP</a>.
      </p>
    </footer>
  </div>
</div>

<!-- Sidebar -->
<div
  id="sidebar"
  class:inactive={sidebarInactive}
  on:click={handleSidebarLinkActivate}
  on:keypress={handleSidebarLinkActivate}
>
  <div class="inner">
    <!-- Logo -->
    <section id="top-panel" class="alt">
      <div class="title">
        <img class="logo" src="{assets}/images/web-logo.png" alt="SciActive" />
        <span class="name">SciActive</span>
      </div>
    </section>

    <!-- Menu -->
    <nav id="menu">
      <ul>
        <li><a href="{base}/">Homepage</a></li>
        <li>
          <a
            href="javascript:void(0);"
            class="opener"
            class:active={submenu === 'user-guide'}
            on:click={() =>
              (submenu = submenu === 'user-guide' ? null : 'user-guide')}
            on:keypress={(event) =>
              event.key === 'Enter' &&
              (submenu = submenu === 'user-guide' ? null : 'user-guide')}
            >User Guide</a
          >
          <ul>
            <li><a href="{base}/user-guide/introduction">Introduction</a></li>
            <li>
              <a href="{base}/user-guide/creating-entities">Creating Entities</a
              >
            </li>
            <li>
              <a href="{base}/user-guide/entity-querying">Entity Querying</a>
            </li>
            <li>
              <a href="{base}/user-guide/subscribing-to-queries"
                >Subscribing to Queries</a
              >
            </li>
            <li>
              <a href="{base}/user-guide/entity-class">Entity Class</a>
            </li>
            <li>
              <a href="{base}/user-guide/defining-entities">Defining Entities</a
              >
            </li>
            <li>
              <a href="{base}/user-guide/uids">UIDs</a>
            </li>
            <li>
              <a href="{base}/user-guide/transactions">Transactions</a>
            </li>
            <li>
              <a href="{base}/user-guide/export-and-import">Export and Import</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            class="opener"
            class:active={submenu === 'packages'}
            on:click={() =>
              (submenu = submenu === 'packages' ? null : 'packages')}
            on:keypress={(event) =>
              event.key === 'Enter' &&
              (submenu = submenu === 'packages' ? null : 'packages')}
            >Packages</a
          >
          <ul>
            <li><a href="{base}/packages/nymph">Nymph Core</a></li>
            <li><a href="{base}/packages/driver-mysql">MySQL Driver</a></li>
            <li>
              <a href="{base}/packages/driver-postgresql">PostgreSQL Driver</a>
            </li>
            <li><a href="{base}/packages/driver-sqlite3">SQLite3 Driver</a></li>
            <li><a href="{base}/packages/server">REST Server</a></li>
            <li><a href="{base}/packages/pubsub">PubSub Server</a></li>
            <li><a href="{base}/packages/client">Client</a></li>
            <li><a href="{base}/packages/client-node">Node Client</a></li>
            <li><a href="{base}/packages/tilmeld">Tilmeld</a></li>
            <li><a href="{base}/packages/tilmeld-client">Tilmeld Client</a></li>
            <li>
              <a href="{base}/packages/tilmeld-components">Tilmeld Components</a
              >
            </li>
            <li><a href="{base}/packages/tilmeld-setup">Tilmeld Setup</a></li>
            <li><a href="{base}/packages/sorter">Entity Sorter</a></li>
            <li><a href="{base}/packages/query-parser">Query Parser</a></li>
            <li>
              <a href="{base}/packages/guid">GUID / Unique Code Generator</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Section -->
    <section>
      <header class="major">
        <h2>Get in touch</h2>
      </header>
      <p>
        Nymph is a product of SciActive Inc. You can contact SciActive by email
        or post, or follow on Twitter.
      </p>
      <ul class="contact">
        <li class="icon">
          <Icon path={mdiMastodon} />
          <a
            href="https://port87.social/@hperrin"
            target="_blank"
            rel="noreferrer">@hperrin on Mastodon</a
          >
        </li>
        <li class="icon">
          <Icon path={mdiTwitter} />
          <a
            href="https://twitter.com/SciActive"
            target="_blank"
            rel="noreferrer">@SciActive on Twitter</a
          >
        </li>
        <li class="icon">
          <Icon path={mdiEmail} />
          <a href="mailto:someone@example.com" bind:this={email}>(loading...)</a
          >
        </li>
        <li class="icon">
          <Icon path={mdiMapMarker} />
          SciActive Inc<br />
          310 S Twin Oaks Valley Rd #107<br />
          PMB 422<br />
          San Marcos, CA 92078
        </li>
      </ul>
    </section>
  </div>

  {#if smallWindow}
    <a
      href="#sidebar"
      class="toggle"
      on:click={(event) => {
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Toggle.
        sidebarInactive = !sidebarInactive;
      }}
      title="Toggle Sidebar"><Icon path={mdiMenu} /></a
    >
  {/if}
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import {
    mdiEmail,
    mdiMapMarker,
    mdiMenu,
    mdiMastodon,
    mdiTwitter
  } from '@mdi/js';
  import { base, assets } from '$app/paths';
  import Header from '$lib/Header.svelte';
  import Icon from '$lib/Icon.svelte';

  let email: HTMLAnchorElement;
  let submenu: string | null = null;
  let sidebarInactive = false;
  let smallWindow = false;

  onMount(() => {
    const contactEmail = ['gmail.com', 'hperrin'].reverse().join('@');
    email.href = 'mailto:' + contactEmail;
    email.textContent = contactEmail;

    document.body.classList.remove('is-preload');
    setSidebarInactive();
  });

  let resizeTimeout: any;

  function handleWindowResize() {
    setSidebarInactive();

    if (!document.body) {
      return;
    }

    // Mark as resizing.
    document.body.classList.add('is-resizing');

    // Unmark after delay.
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function () {
      document.body.classList.remove('is-resizing');
    }, 100);
  }

  function setSidebarInactive() {
    smallWindow = window.innerWidth <= 1280;
    sidebarInactive = smallWindow;
  }

  function handleSidebarLinkActivate(event: MouseEvent | KeyboardEvent) {
    if ('href' in event.target) {
      setSidebarInactive();
    }
  }
</script>
