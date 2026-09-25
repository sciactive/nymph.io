import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/BVJHovD9.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/DDTgMnDM.js";import{t as v}from"../chunks/Ciszbs-_.js";var y=t(`<section><header class="major"><h1 style="font-size: 3em;">Nymph</h1></header> <p>The Nymph core package provides the base level classes and utilities to
    query the database, save data to it, and define different data types.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Drivers</h2></header> <p>To use Nymph, you need a database driver. Nymph.js provides a <a>MySQL driver</a>, a <a>PostgreSQL driver</a>, and
    a <a>SQLite3 driver</a>. They all
    provide the exact same functionality (with the exception of alphanumerical
    sort order, which is dependent on database collation).</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://forge.sciactive.com/sciactive/nymphjs/src/branch/master/packages/nymph/src/conf/index.ts" target="_blank" rel="external noreferrer">config declaration file</a>.</p> <header class="major"><h2>Live Migrations</h2></header> <p>Sometimes database changes can be live migrated. In these cases, running <code>needsMigration()</code> will tell you about them, and the docblock for that method will give you more
    information. You should always run this method after updating to a new version
    of Nymph to see what needs to be migrated, if anything.</p> <p>If a migration is needed, you should export the DB in the version you were
    using before, in case anything goes wrong during the migration.</p> <p>The next step is to use the <code>liveMigration(migrationType)</code> method with
    the correct migration type.</p> <p>If required (explained in the docblock), you might then need to run a
    specific import on all of your entities. This is very important, and you
    might not be able to use new features or upgrade further without performing
    this step.</p> <p>Note that you can always export the DB in the version you were previously
    using, completely clear the DB (drop all of the tables), then import the DB
    in the new version.</p></section>`);function b(t){var b=y();c(`1p50s03`,e=>{var t=o(),n=i(t);p(n,()=>v),a(()=>{s.title=`Nymph - Packages - Nymph.js`}),f(e,t)});var x=r(n(b),6);h(x,{get language(){return _},code:`npm install --save @nymphjs/nymph`});var S=r(x,4),C=r(n(S)),w=r(C,2),T=r(w,2);l(),d(S);var E=r(S,6);h(E,{get language(){return g},code:`// main.ts
import { Nymph } from '@nymphjs/nymph';
import MySQLDriver from '@nymphjs/driver-mysql';
import TodoClass from './Todo';

const mysqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

// Create a new instance of Nymph.
const nymph = new Nymph({}, new MySQLDriver(mysqlConfig));
// addEntityClass returns the class you should use for this instance of Nymph.
const Todo = nymph.addEntityClass(TodoClass);

// You are set up. Now you can use entity classes like \`Todo\` to store data,
// and Nymph's query methods like \`getEntities\` to retrieve them.

async function run() {
  const myEntity = await Todo.factory();
  myEntity.text = 'Get it done!';
  await myEntity.$save();

  const otherPendingTodos = await nymph.getEntities(
    { class: Todo },
    { type: '&', '!guid': myEntity.guid, equal: ['done', false] },
  );

  const total = otherPendingTodos.length;
  const single = total === 1;
  console.log(
    \`Besides the one I just created, there \${
      single ? 'is' : 'are'
    } \${total} pending todo\${single ? '' : 's'} in the database.\`,
  );
}`});var D=r(E,2);h(D,{get language(){return g},code:`// Todo.ts
import { Entity } from '@nymphjs/nymph';

export type TodoData = {
  text: string;
  done: boolean;
};

export default class Todo extends Entity<TodoData> {
  static ETYPE = 'todo'; // This is used for the table name(s) in the DB.
  static class = 'Todo'; // This is used to map references to their class.

  constructor() {
    super();

    // Within the methods of an entity, you will use \`this.$data\` to access
    // its data. Outside, you don't need the $data part.
    this.$data.text = '';
    this.$data.done = false;
  }

  async $getOtherTodos() {
    // this.$nymph (or this.nymph in a static function) is the instance of Nymph
    // this entity was loaded with. Creating transactions will create a new
    // instance of Nymph, so it could be a transactional instance.
    const otherTodos = await this.$nymph.getEntities(
      { class: Todo },
      { type: '!&', guid: this.guid },
    );
    return otherTodos;
  }
}`}),l(16),d(b),e(()=>{u(C,`href`,`${m??``}/packages/driver-mysql`),u(w,`href`,`${m??``}/packages/driver-postgresql`),u(T,`href`,`${m??``}/packages/driver-sqlite3`)}),f(t,b)}export{b as component};