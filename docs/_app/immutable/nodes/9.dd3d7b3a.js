import{s as xe,I as Ee,e as ve,a as r,f as n,l as x,x as be,J as we,d as h,c as i,g as o,h as S,r as m,m as E,j as c,u as e,i as Te,v as Ce}from"../chunks/scheduler.d7e45cc8.js";import{S as He,i as Le,b as Z,d as ee,m as te,a as ae,t as se,e as ne}from"../chunks/index.77720afb.js";import{H as oe,g as Ne}from"../chunks/github.64534d2c.js";import{b as Me}from"../chunks/bash.7e4226ac.js";import{t as _e}from"../chunks/typescript.09c48802.js";import{b as re}from"../chunks/paths.d4a6803e.js";function je($e){let p,M,D,t,y,ie='<h1 style="font-size: 3em;">Nymph</h1>',q,b,le=`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`,k,u,he="<h2>Installation</h2>",A,f,Q,g,de="<h2>Drivers</h2>",R,l,I,w,O,z,C,B,Y,H,G,J,U,v,me="<h2>Usage</h2>",W,L,ce="Here's an overview:",F,T,K,_,V,$,pe="<h2>Options</h2>",X,N,ye='See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts" target="_blank" rel="external noreferrer">config declaration file</a>.',P;return f=new oe({props:{language:Me,code:"npm install --save @nymphjs/nymph"}}),T=new oe({props:{language:_e,code:`// main.ts
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
}`}}),_=new oe({props:{language:_e,code:`// Todo.ts
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
}`}}),{c(){p=new Ee(!1),M=ve(),D=r(),t=n("section"),y=n("header"),y.innerHTML=ie,q=r(),b=n("p"),b.textContent=le,k=r(),u=n("header"),u.innerHTML=he,A=r(),Z(f.$$.fragment),Q=r(),g=n("header"),g.innerHTML=de,R=r(),l=n("p"),I=x("To use Nymph, you need a database driver. Nymph.js provides a "),w=n("a"),O=x("MySQL driver"),z=x(", "),C=n("a"),B=x("PostgreSQL driver"),Y=x(`, and a
    `),H=n("a"),G=x("SQLite3 driver"),J=x(`. They all
    provide the exact same functionality.`),U=r(),v=n("header"),v.innerHTML=me,W=r(),L=n("p"),L.textContent=ce,F=r(),Z(T.$$.fragment),K=r(),Z(_.$$.fragment),V=r(),$=n("header"),$.innerHTML=pe,X=r(),N=n("p"),N.innerHTML=ye,this.h()},l(s){const j=be("svelte-lxz0w1",document.head);p=we(j,!1),M=ve(),j.forEach(h),D=i(s),t=o(s,"SECTION",{});var a=S(t);y=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(y)!=="svelte-1di4y0e"&&(y.innerHTML=ie),q=i(a),b=o(a,"P",{"data-svelte-h":!0}),m(b)!=="svelte-dbikd5"&&(b.textContent=le),k=i(a),u=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(u)!=="svelte-1hx9pnb"&&(u.innerHTML=he),A=i(a),ee(f.$$.fragment,a),Q=i(a),g=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(g)!=="svelte-174az1o"&&(g.innerHTML=de),R=i(a),l=o(a,"P",{});var d=S(l);I=E(d,"To use Nymph, you need a database driver. Nymph.js provides a "),w=o(d,"A",{href:!0});var ue=S(w);O=E(ue,"MySQL driver"),ue.forEach(h),z=E(d,", "),C=o(d,"A",{href:!0});var fe=S(C);B=E(fe,"PostgreSQL driver"),fe.forEach(h),Y=E(d,`, and a
    `),H=o(d,"A",{href:!0});var ge=S(H);G=E(ge,"SQLite3 driver"),ge.forEach(h),J=E(d,`. They all
    provide the exact same functionality.`),d.forEach(h),U=i(a),v=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-n87w0o"&&(v.innerHTML=me),W=i(a),L=o(a,"P",{"data-svelte-h":!0}),m(L)!=="svelte-deeya8"&&(L.textContent=ce),F=i(a),ee(T.$$.fragment,a),K=i(a),ee(_.$$.fragment,a),V=i(a),$=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m($)!=="svelte-1v13hnh"&&($.innerHTML=pe),X=i(a),N=o(a,"P",{"data-svelte-h":!0}),m(N)!=="svelte-1ox4sbb"&&(N.innerHTML=ye),a.forEach(h),this.h()},h(){document.title="Nymph - Packages - Nymph.js",p.a=M,c(y,"class","major"),c(u,"class","major"),c(g,"class","major"),c(w,"href",re+"/packages/driver-mysql"),c(C,"href",re+"/packages/driver-postgresql"),c(H,"href",re+"/packages/driver-sqlite3"),c(v,"class","major"),c($,"class","major")},m(s,j){p.m(Ne,document.head),e(document.head,M),Te(s,D,j),Te(s,t,j),e(t,y),e(t,q),e(t,b),e(t,k),e(t,u),e(t,A),te(f,t,null),e(t,Q),e(t,g),e(t,R),e(t,l),e(l,I),e(l,w),e(w,O),e(l,z),e(l,C),e(C,B),e(l,Y),e(l,H),e(H,G),e(l,J),e(t,U),e(t,v),e(t,W),e(t,L),e(t,F),te(T,t,null),e(t,K),te(_,t,null),e(t,V),e(t,$),e(t,X),e(t,N),P=!0},p:Ce,i(s){P||(ae(f.$$.fragment,s),ae(T.$$.fragment,s),ae(_.$$.fragment,s),P=!0)},o(s){se(f.$$.fragment,s),se(T.$$.fragment,s),se(_.$$.fragment,s),P=!1},d(s){s&&(p.d(),h(D),h(t)),h(M),ne(f),ne(T),ne(_)}}}class Qe extends He{constructor(p){super(),Le(this,p,null,je,xe,{})}}export{Qe as component};
