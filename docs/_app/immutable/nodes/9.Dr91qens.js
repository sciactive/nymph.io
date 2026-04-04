import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/BEISqkDj.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/XOiHpZri.js";import{t as _}from"../chunks/DIXNzCvi.js";import{t as v}from"../chunks/jqiW6npt.js";var y=a(`<section><header class="major"><h1 style="font-size: 3em;">Nymph</h1></header> <p>The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Drivers</h2></header> <p>To use Nymph, you need a database driver. Nymph.js provides a <a>MySQL driver</a>, a <a>PostgreSQL driver</a>, and
    a <a>SQLite3 driver</a>. They all
    provide the exact same functionality.</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://forge.sciactive.com/sciactive/nymphjs/src/branch/master/packages/nymph/src/conf/d.ts" target="_blank" rel="external noreferrer">config declaration file</a>.</p></section>`);function b(a){var b=y();c(`1p50s03`,i=>{var a=f();s(t(a),()=>v),r(()=>{n.title=`Nymph - Packages - Nymph.js`}),e(i,a)});var x=i(o(b),6);h(x,{get language(){return g},code:`npm install --save @nymphjs/nymph`});var S=i(x,4),C=i(o(S)),w=i(C,2),T=i(w,2);d(),l(S);var E=i(S,6);h(E,{get language(){return _},code:`// main.ts
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
}`}),h(i(E,2),{get language(){return _},code:`// Todo.ts
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
}`}),d(4),l(b),p(()=>{u(C,`href`,`${m??``}/packages/driver-mysql`),u(w,`href`,`${m??``}/packages/driver-postgresql`),u(T,`href`,`${m??``}/packages/driver-sqlite3`)}),e(a,b)}export{b as component};