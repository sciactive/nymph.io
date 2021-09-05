<svelte:head>
  <title>Tilmeld - Nymph</title>
</svelte:head>

<Header>Tilmeld</Header>

<section>
  <header class="major">
    <h2>Tilmeld</h2>
  </header>

  <p>
    Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/tilmeld`} />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';

  import Header from '$lib/Header.svelte';
</script>
