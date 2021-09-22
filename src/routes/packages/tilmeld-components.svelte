<svelte:head>
  <title>Tilmeld Components - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld Components</h1>
    <p>
      Check out the <a
        href="https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld-components#readme"
        >README</a
      >.
    </p>
  </header>

  <p>
    The Tilmeld Components are front end registration/login, account recovery,
    account details, and password change components build with <a
      href="https://svelte.dev/"
      target="_blank">Svelte</a
    >
    and <a href="https://sveltematerialui.com/" target="_blank">SMUI</a>.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-components`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import github from 'svelte-highlight/src/styles/github';
</script>
