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
    entities. It also contains helpers, <code>getClientConfig</code>,
    <code>login</code>, <code>register</code>, and <code>checkUsername</code>.
  </p>

  <p>
    Once you've initialized Nymph Client, set the User and Group classes on it.
  </p>

  <Highlight
    language={typescript}
    code={`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
nymph.addEntityClass(User);
nymph.addEntityClass(Group);`}
  />

  <p>
    If you're running more than one instance of Nymph client, you can clone the
    classes and add those instead. This will keep event listeners and Tilmeld
    client config separated.
  </p>

  <Highlight
    language={typescript}
    code={`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const UserClone = User.clone();
nymph.addEntityClass(UserClone);
const GroupClone = Group.clone();
nymph.addEntityClass(GroupClone);`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';
</script>
