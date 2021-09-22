<svelte:head>
  <title>Query Parser - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Query Parser</h1>
    <p>
      Check out the <a
        href="https://github.com/sciactive/nymphjs/tree/master/packages/query-parser#readme"
        >README</a
      >.
    </p>
  </header>

  <p>
    The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/query-parser`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import github from 'svelte-highlight/src/styles/github';
</script>
