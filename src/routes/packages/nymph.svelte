<svelte:head>
  <title>Nymph - Packages - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Nymph</h1>
    <p>
      Check out the <a
        href="https://github.com/sciactive/nymphjs/tree/master/packages/nymph#readme"
        >README</a
      >.
    </p>
  </header>

  <p>
    The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight language={bash} code={`npm install --save @nymphjs/nymph`} />

  <header class="major">
    <h2>Drivers</h2>
  </header>

  <p>
    To use Nymph, you need a database driver. Nymph.js provides a <a
      href="{base}/packages/driver-mysql">MySQL driver</a
    >, <a href="{base}/packages/driver-postgresql">PostgreSQL driver</a>, and a
    <a href="{base}/packages/driver-sqlite3">SQLite3 driver</a>.
  </p>

  <header class="major">
    <h2>Usage</h2>
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

const nymph = new Nymph({}, new MySQLDriver(mysqlConfig));
nymph.setEntityClass(Todo.class, Todo);

// You are set up. Now you can use entity classes like \`Todo\` to store data,
// and Nymph's query methods like \`getEntities\` to retrieve them.

async function run() {
  const myEntity = await Todo.factory();
  myEntity.text = 'Get it done!';
  await myEntity.$save();

  const otherPendingTodos = await nymph.getEntities(
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
import { Entity } from '@nymphjs/nymph';

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

  async $getOtherTodos() {
    // this.$nymph (or this.nymph in a static function) is the instance of Nymph
    // this entity was loaded with. Creating transactions will create a new
    // instance of Nymph, so it could be a transactional instance.
    const otherTodos = await this.$nymph.getEntities(
      { class: Todo },
      { type: '!&', guid: this.guid }
    );
    return otherTodos;
  }
}`}
  />

  <header class="major">
    <h2>Options</h2>
  </header>

  <p>
    See the <a
      href="https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts"
      target="_blank"
      rel="external">config declaration file</a
    >.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';

  import { base } from '$app/paths';
</script>
