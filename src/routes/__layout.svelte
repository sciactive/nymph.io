<svelte:window on:resize={handleWindowResize} />
<svelte:head>
  <link rel="icon" href="{assets}/favicon.png" />
  <link rel="stylesheet" href="{assets}/css/main.css" />
</svelte:head>

<div on:click={() => setSidebarInactive()}>
  <slot />
</div>

<!-- Sidebar -->
<div id="sidebar" class:inactive={sidebarInactive} on:click={handleSidebarLinkClick}>
  <div class="inner">
    <!-- Search -->
    <section id="search" class="alt">
      <form method="post" action="#">
        <input type="text" name="query" id="query" placeholder="Search" />
      </form>
    </section>

    <!-- Menu -->
    <nav id="menu">
      <header class="major">
        <h2>Menu</h2>
      </header>
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
      </ul>
    </nav>

    <!-- Section -->
    <section>
      <header class="major">
        <h2>Ante interdum</h2>
      </header>
      <div class="mini-posts">
        <article>
          <a href="#" class="image"><img src="{assets}/images/pic07.jpg" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
        <article>
          <a href="#" class="image"><img src="{assets}/images/pic08.jpg" alt="" /></a>
          <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
        </article>
        <article>
          <a href="#" class="image"><img src="{assets}/images/pic09.jpg" alt="" /></a>
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
