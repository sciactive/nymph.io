<svelte:head>
  <title>Tilmeld Client - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld Client</h1>
  </header>

  <p>
    The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/tilmeld-client`}
  />

  <p>
    You can find UMD in <code>dist</code>, or TS source in <code>src</code>.
  </p>

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    The Tilmeld client contains the client versions of the <code>User</code> and
    <code>Group</code>
    entities. It also contains helpers, <code>login</code>,
    <code>register</code>, and <code>checkUsername</code>.
  </p>

  <p>
    Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)
  </p>

  <Highlight
    language={typescript}
    code={`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}
  />

  <p>
    If you're running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';
</script>
