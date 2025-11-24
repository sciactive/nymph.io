<svelte:head>
  <title>Full Text Search - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Full Text Search</h1>
  </header>

  <p>
    Nymph provides a case insensitive full text search engine based on the <a
      href="https://github.com/sciactive/tokenizer"
      target="_blank">SciActive Tokenizer</a
    >. It has the ability to search for sequential tokens, exact tokens, "or"
    searches, and negation of tokens.
  </p>

  <p>
    When an entity is saved into the database, it has a chance (through the <code
      >getFTSText</code
    > static function) to alter text from its properties before FTS indexing (removing
    HTML tags, extracting text from Base64, etc). Once the text is finalized, it's
    converted to lower case, broken apart into words, stop words are removed, each
    word is stemmed (running -&gt; run, etc), and the stem and the original are turned
    into 32-bit tokens. The tokens, along with their position and whether they're
    a stem, are stored in the database.
  </p>

  <p>The following example queries show how to use the available features.</p>

  <ul>
    <li><code>light</code> - finds "light", "lights", "lighting", "lighted"</li>
    <li>
      <code>light mode</code> - finds "light mode", "The disctinct mode ... bright
      lighting around..."
    </li>
    <li>
      <code>'light mode'</code> - finds "light mode", "lighting mode", "lighting
      the mode", "lighted and moded"
    </li>
    <li>
      <code>"light mode"</code> - finds "light mode", "light and mode", "light a
      mode"
    </li>
    <li>
      <code>light or dark</code> - finds "this is light" or "dark is here"
    </li>
    <li>
      <code>"light mode" or "dark mode"</code> - finds "light mode on" or "dark mode
      above"
    </li>
    <li>
      <code>-light</code> - finds anything without "light", "lights", "lighting",
      "lighted"
    </li>
    <li>
      <code>-'light mode'</code> - finds anything without "light mode", "lighting
      mode", "lighting the mode", "lighted and moded"
    </li>
    <li>
      <code>-"light mode"</code> - finds anything without "light mode", "light and
      mode", "light a mode"
    </li>
    <li>
      <code>"light mode" or -"grayscale"</code> - finds "light mode", "light and
      mode", "light a mode" or anything without "grayscale"
    </li>
  </ul>

  <p>
    You can use the search feature with the <code>search</code> clause in a Nymph
    query:
  </p>

  <Highlight
    language={typescript}
    code={`nymph.getEntities(
  { class: SomeEntity },
  { type: '&', search: ['prop', 'light mode'] },
);`}
  />

  <p>
    One thing to note is that this is not a substring search, so a search for
    "light" will not match strings with the words, "slight", "blight", or
    "delighted".
  </p>
</section>

<section class="page-steps">
  <a href="{base}/user-guide/transactions" class="button" style="margin: .5em;"
    >Previous: Transactions</a
  >
  <a
    href="{base}/user-guide/export-and-import"
    class="button"
    style="margin: .5em;">Next: Export and Import</a
  >
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import plaintext from 'svelte-highlight/languages/plaintext';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
