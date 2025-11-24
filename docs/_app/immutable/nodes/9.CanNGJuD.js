import{h as w,a as p,t as $,c as N}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as _,f as j,s as e,c,n as l,a as y}from"../chunks/xPuFI3q7.js";import{h as E,g as x}from"../chunks/C0NHSKHS.js";import{s}from"../chunks/Dx4IbXf0.js";import{b as q}from"../chunks/c8uDcNtF.js";import{t as u}from"../chunks/Ce9AoNbY.js";import{b as o}from"../chunks/DnMb0p-7.js";import{H as r}from"../chunks/9N_cuTOb.js";var k=$(`<section><header class="major"><h1 style="font-size: 3em;">Nymph</h1></header> <p>The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Drivers</h2></header> <p>To use Nymph, you need a database driver. Nymph.js provides a <a>MySQL driver</a>, <a>PostgreSQL driver</a>, and a <a>SQLite3 driver</a>. They all
    provide the exact same functionality.</p> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts" target="_blank" rel="external noreferrer">config declaration file</a>.</p></section>`);function B(f){var t=k();w(T=>{var m=N();_.title="Nymph - Packages - Nymph.js";var b=j(m);E(b,()=>x,!1,!1),p(T,m)});var i=e(c(t),6);r(i,{language:q,code:"npm install --save @nymphjs/nymph"});var a=e(i,4),n=e(c(a));s(n,"href",`${o??""}/packages/driver-mysql`);var d=e(n,2);s(d,"href",`${o??""}/packages/driver-postgresql`);var g=e(d,2);s(g,"href",`${o??""}/packages/driver-sqlite3`),l(),y(a);var h=e(a,6);r(h,{language:u,code:`// main.ts
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
}`});var v=e(h,2);r(v,{language:u,code:`// Todo.ts
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
}`}),l(4),y(t),p(f,t)}export{B as component};
