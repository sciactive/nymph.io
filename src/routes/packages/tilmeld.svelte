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
</section>

<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>
