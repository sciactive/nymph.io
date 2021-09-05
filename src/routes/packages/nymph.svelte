<svelte:head>
  <title>Nymph Core - Nymph</title>
</svelte:head>

<Header>Nymph Core</Header>

<section>
  <header class="major">
    <h2>Nymph Core</h2>
  </header>

  <p>
    The Nymph core provides the base level utilities to query the database, save
    data to it, and define different data types.
  </p>

  <header class="major">
    <h3>Installation</h3>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/nymph`} />

  <header class="major">
    <h3>Drivers</h3>
  </header>

  <p>
    To use Nymph, you need a database driver. Nymph provides a <a
      href="{base}/packages/driver-mysql">MySQL driver</a
    >
    and a <a href="{base}/packages/driver-sqlite3">SQLite3 driver</a>.
  </p>

  <header class="major">
    <h3>Usage</h3>
  </header>

  <p>Here's an overview:</p>

  <Highlight
    language={typescript}
    code={`// main.ts
import { Nymph } from '@nymphjs/nymph';
import MySQLDriver from '@nymphjs/driver-mysql';
import Todo from './Todo';

const mysqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

Nymph.init({}, new MySQLDriver(mysqlConfig));

// You are set up. Now you can use entity classes like \`Todo\` to store data,
// and Nymph's query methods like \`getEntities\` to retrieve them.

async function run() {
  const myEntity = new Todo();
  myEntity.text = 'Get it done!';
  await myEntity.$save();

  const otherPendingTodos = await Nymph.getEntities(
    { class: Todo },
    { type: '&', '!guid': myEntity.guid, equal: ['done', false] }
  );

  const total = otherPendingTodos.length;
  const single = total === 1;
  console.log(
    \`Besides the one I just created, there \${
      single ? 'is' : 'are'
    } \${total} pending todo\${single ? '' : 's'} in the database.\`
  );
}`}
  />

  <Highlight
    language={typescript}
    code={`// Todo.ts
import { Nymph, Entity } from '@nymphjs/nymph';

export type TodoData = {
  text: string;
  done: boolean;
};

export default class Todo extends Entity<TodoData> {
  static ETYPE = 'todo'; // This is used for the table name(s) in the DB.
  static class = 'Todo'; // This is used to map references to their class.

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(guid?: string): Todo & TodoData {
    return super.factorySync(guid) as Todo & TodoData;
  }

  constructor(guid?: string) {
    super(guid);

    if (this.guid == null) {
      // Within the methods of an entity, you will use \`this.$data\` to access
      // its data. Outside, you don't need the $data part.
      this.$data.text = '';
      this.$data.done = false;
    }
  }
}

Nymph.setEntityClass(Todo.class, Todo);`}
  />
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';

  import { base } from '$app/paths';
  import Header from '$lib/Header.svelte';
</script>
