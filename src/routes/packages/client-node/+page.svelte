<svelte:head>
  <title>Node Client - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Node Client</h1>
  </header>

  <p>
    The Nymph Node Client let's you do everything the Nymph Client does, but
    from Node.js instead of the browser.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/client-node`} />

  <p>
    This package is the Nymph client for Node.js. You can find CJS in <code
      >dist</code
    >, or TS source in <code>src</code>. There is also a
    <strong><a href="{base}/packages/client">browser client</a></strong>.
  </p>

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    To use, require it instead of <code>@nymphjs/client</code>:
  </p>

  <Highlight
    language={typescript}
    code={`const { Nymph, PubSub } = require('@nymphjs/client-node');`}
  />

  <p>Then set up Nymph and PubSub like normal:</p>

  <Highlight
    language={typescript}
    code={`const nymphOptions = {
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
  pubsubUrl: 'wss://yournymphpubsubserver',
};
const nymph = new Nymph(nymphOptions);
const pubsub = new PubSub(nymphOptions, nymph);`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';

  import { base } from '$app/paths';
</script>