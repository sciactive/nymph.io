<svelte:head>
  <title>Tilmeld - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Tilmeld</h1>
  </header>

  <p>
    Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/tilmeld`} />

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.
  </p>

  <p>Here's an overview.</p>

  <Highlight
    language={typescript}
    code={`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Tilmeld } from '@nymphjs/tilmeld';
import { Nymph } from '@nymphjs/nymph';

const tilmeld = new Tilmeld({
  appName: 'My App',
  appUrl: 'http://localhost',
  cookieDomain: 'localhost',
  cookiePath: '/',
  setupPath: '/user',
  verifyRedirect: 'http://localhost',
  verifyChangeRedirect: 'http://localhost',
  cancelChangeRedirect: 'http://localhost',
  jwtSecret: 'shhhhh',
});

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
  tilmeld,
);

// These are the classes specific to this instance of Tilmeld.
const { User, Group } = tilmeld;`}
  />

  <header class="major">
    <h2>Options</h2>
  </header>

  <p>
    See the <a
      href="https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"
      target="_blank"
      rel="external">config declaration file</a
    >.
  </p>

  <header class="major">
    <h2>Abilities</h2>
  </header>

  <p>There are a few abilities that Tilmeld uses internally:</p>

  <ul>
    <li>
      <code>system/admin</code> - A user with this ability has
      <strong>all</strong> abilities.
    </li>
    <li>
      <code>tilmeld/admin</code> - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.
    </li>
    <li>
      <code>tilmeld/switch</code> - Allow the user to switch to other users (log
      in as them without their password).
    </li>
    <li><code>uid/get/[name]</code> - Allow the user to read the named UID.</li>
    <li>
      <code>uid/new/[name]</code> - Allow the user to read, create, and increment
      the named UID.
    </li>
    <li>
      <code>uid/set/[name]</code> - Allow the user to read, create, increment, set,
      and delete the named UID.
    </li>
  </ul>

  <p>The admin and switch abilities cannot be inherited from groups.</p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';
</script>
