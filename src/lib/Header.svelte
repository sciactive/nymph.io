<!-- Header -->
<header id="header">
  <div class="logo">
    <a href="{base}/" class="logo"><strong>Nymph.js</strong></a>
  </div>
  <ul class="icons">
    <li>
      <a
        href="https://port87.social/@hperrin"
        target="_blank"
        rel="noreferrer"
        class="icon brands"
        title="Mastodon"><Icon path={mdiMastodon} /></a
      >
    </li>
    <li>
      <a
        href="https://github.com/sciactive/nymphjs"
        target="_blank"
        rel="noreferrer"
        class="icon brands"
        title="GitHub"><Icon path={mdiGithub} /></a
      >
    </li>
  </ul>
</header>

<script lang="ts">
  import { mdiMastodon, mdiGithub } from '@mdi/js';
  import { base } from '$app/paths';
  import Icon from '$lib/Icon.svelte';
</script>
