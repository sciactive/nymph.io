<svelte:head>
  <title>Tilmeld Components - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld Components</h1>
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

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    You need to have an SMUI theme compiled and installed on your front end app.
    If you're using Svelte, you need to have TypeScript support and you should
    use the 'svelte' mainfield from package.json.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import github from 'svelte-highlight/src/styles/github';
</script>
