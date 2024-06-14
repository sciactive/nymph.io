<svelte:head>
  <title>GUID / Unique Code Generator - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">GUID / Unique Code Generator</h1>
  </header>

  <p>
    The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/guid`} />

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>There are a few functions for generating different kinds of strings.</p>

  <Highlight
    language={typescript}
    code={`import {
  guid,
  makeTableSuffix,
  humanSecret,
  nanoid,
  customAlphabet,
} from '@nymphjs/guid';

// This generates a GUID. It will be 24 characters long, and the first four
// characters will be the same during a whole week. (This helps make DB index
// paging more efficient.)
const myGuid = guid();

// This can be used as a table suffix in SQL queries. It will be 20 characters
// long and alphanumeric.
const myTableSuffix = makeTableSuffix();

// This will be a human readable secret code. It will be 10 characters long and
// use the nolookalikesSafe dictionary from nanoid-dictionary.
const mySecretCode = humanSecret();

// This is the nanoid library's main export. It is exported in commonjs format.
const id = nanoid();

// This is the nanoid library's customAlphabet export.
const customId = customAlphabet('abc', 20)();`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';
</script>
