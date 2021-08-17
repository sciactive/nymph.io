<svelte:window on:resize={handleWindowResize} />
<svelte:head>
  <link rel="icon" href="{assets}/images/cropped-logo-32x32.png" sizes="32x32" />
  <link rel="icon" href="{assets}/images/cropped-logo-192x192.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="{assets}/images/cropped-logo-180x180.png" />
  <meta name="msapplication-TileImage" content="{assets}/images/cropped-logo-270x270.png" />
  <link rel="stylesheet" href="{assets}/css/main.css" />
</svelte:head>

<!-- Main -->
<div id="main" on:click={() => setSidebarInactive()}>
  <div class="inner">
    <slot />
  </div>
</div>

<!-- Sidebar -->
<div id="sidebar" class:inactive={sidebarInactive} on:click={handleSidebarLinkClick}>
  <div class="inner">
    <!-- Logo -->
    <section id="top-panel" class="alt">
      <div class="title">
        <img class="logo" src="{assets}/images/web-logo.png" alt="SciActive" />
        <span class="name">SciActive</span>
      </div>
    </section>

    <!-- Search -->
    <!-- <section id="top-panel" class="alt">
      <form class="search" method="post" action="#">
        <input type="text" name="query" id="query" placeholder="Search" />
      </form>
    </section> -->

    <!-- Menu -->
    <nav id="menu">
      <!-- <header class="major">
        <h2>Menu</h2>
      </header> -->
      <ul>
        <li><a href="{base}/">Homepage</a></li>
        <li><a href="{base}/features">Features</a></li>
        <li><a href="{base}/generic">Generic</a></li>
        <li><a href="{base}/elements">Elements</a></li>
        <li>
          <span
            class="opener"
            class:active={submenu === 'submenu'}
            on:click={() => (submenu = submenu === 'submenu' ? null : 'submenu')}>Submenu</span
          >
          <ul>
            <li><a href="#">Lorem Dolor</a></li>
            <li><a href="#">Ipsum Adipiscing</a></li>
            <li><a href="#">Tempus Magna</a></li>
            <li><a href="#">Feugiat Veroeros</a></li>
          </ul>
        </li>
        <li>
          <span
            class="opener"
            class:active={submenu === 'submenu2'}
            on:click={() => (submenu = submenu === 'submenu2' ? null : 'submenu2')}>Submenu 2</span
          >
          <ul>
            <li><a href="#">Lorem Dolor</a></li>
            <li><a href="#">Ipsum Adipiscing</a></li>
            <li><a href="#">Tempus Magna</a></li>
            <li>
              <span
                class="opener"
                class:active={submenu2submenu === 'submenu'}
                on:click={() =>
                  (submenu2submenu = submenu2submenu === 'submenu' ? null : 'submenu')}
                >Submenu Within</span
              >
              <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Section -->
    <section>
      <header class="major">
        <h2>Ante interdum</h2>
      </header>
      <div class="mini-posts">
        <article>
          <a href="#" class="image"><img src="https://picsum.photos/seed/rofl/416/256" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
        <article>
          <a href="#" class="image"><img src="https://picsum.photos/seed/lmao/416/256" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
        <article>
          <a href="#" class="image"><img src="https://picsum.photos/seed/omg/416/256" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
      </div>
      <ul class="actions">
        <li><a href="#" class="button">More</a></li>
      </ul>
    </section>

    <!-- Section -->
    <section>
      <header class="major">
        <h2>Get in touch</h2>
      </header>
      <p>
        Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
        lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem
        feugiat tempus aliquam.
      </p>
      <ul class="contact">
        <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
        <li class="icon solid fa-phone">(000) 000-0000</li>
        <li class="icon solid fa-home">
          1234 Somewhere Road #8254<br />
          Nashville, TN 00000-0000
        </li>
      </ul>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <p class="copyright">
        &copy; SciActive Inc. All rights reserved. Design by:
        <a href="https://html5up.net">HTML5 UP</a>.
      </p>
    </footer>
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
      }}>Toggle Sidebar</a
    >
  {/if}
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { base, assets } from '$app/paths';

  let submenu: string | null = null;
  let submenu2submenu: string | null = null;
  let sidebarInactive = false;
  let smallWindow = false;

  onMount(() => {
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

  function handleSidebarLinkClick(event: MouseEvent) {
    if ('href' in event.target) {
      setSidebarInactive();
    }
  }
</script>
