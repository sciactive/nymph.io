<!-- Header -->
<header id="header">
  <div class="logo">
    <a href="{base}/" class="logo"><strong>Nymph</strong></a>
  </div>
  <ul class="icons">
    <li>
      <a
        href="https://twitter.com/SciActive"
        target="_blank"
        class="icon brands"
        title="Twitter"><Icon path={mdiTwitter} /></a
      >
    </li>
    <li>
      <a
        href="https://github.com/sciactive/nymphjs"
        target="_blank"
        class="icon brands"
        title="GitHub"><Icon path={mdiGithub} /></a
      >
    </li>
  </ul>
</header>

<script lang="ts">
  import { mdiTwitter, mdiGithub } from '@mdi/js';
  import { base } from '$app/paths';
  import Icon from '$lib/Icon.svelte';
</script>
