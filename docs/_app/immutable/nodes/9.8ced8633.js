import{s as Et,I as xt,e as vt,a as r,f as n,l as E,x as bt,J as wt,d,c as i,g as o,h as D,r as m,m as x,j as c,u as t,i as Tt,v as Ct}from"../chunks/scheduler.d7e45cc8.js";import{S as Ht,i as Lt,b as Z,d as tt,m as et,a as at,t as st,e as nt}from"../chunks/index.77720afb.js";import{H as ot,g as Nt}from"../chunks/github.64534d2c.js";import{b as Mt}from"../chunks/bash.7e4226ac.js";import{t as _t}from"../chunks/typescript.09c48802.js";import{b as rt}from"../chunks/paths.dbb47c61.js";function jt($t){let p,M,S,e,u,it='<h1 style="font-size: 3em;">Nymph</h1>',q,b,lt=`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`,k,y,dt="<h2>Installation</h2>",A,f,Q,g,ht="<h2>Drivers</h2>",R,l,I,w,O,z,C,B,Y,H,G,J,U,v,mt="<h2>Usage</h2>",W,L,ct="Here's an overview:",F,T,K,_,V,$,pt="<h2>Options</h2>",X,N,ut='See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts" target="_blank" rel="external noreferrer">config declaration file</a>.',P;return f=new ot({props:{language:Mt,code:"npm install --save @nymphjs/nymph"}}),T=new ot({props:{language:_t,code:`// main.ts
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
    { type: '&', '!guid': myEntity.guid, equal: ['done', false] }
  );

  const total = otherPendingTodos.length;
  const single = total === 1;
  console.log(
    \`Besides the one I just created, there \${
      single ? 'is' : 'are'
    } \${total} pending todo\${single ? '' : 's'} in the database.\`
  );
}`}}),_=new ot({props:{language:_t,code:`// Todo.ts
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

  static factorySync(): Todo & TodoData {
    return super.factorySync() as Todo & TodoData;
  }

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
      { type: '!&', guid: this.guid }
    );
    return otherTodos;
  }
}`}}),{c(){p=new xt(!1),M=vt(),S=r(),e=n("section"),u=n("header"),u.innerHTML=it,q=r(),b=n("p"),b.textContent=lt,k=r(),y=n("header"),y.innerHTML=dt,A=r(),Z(f.$$.fragment),Q=r(),g=n("header"),g.innerHTML=ht,R=r(),l=n("p"),I=E("To use Nymph, you need a database driver. Nymph.js provides a "),w=n("a"),O=E("MySQL driver"),z=E(", "),C=n("a"),B=E("PostgreSQL driver"),Y=E(`, and a
    `),H=n("a"),G=E("SQLite3 driver"),J=E("."),U=r(),v=n("header"),v.innerHTML=mt,W=r(),L=n("p"),L.textContent=ct,F=r(),Z(T.$$.fragment),K=r(),Z(_.$$.fragment),V=r(),$=n("header"),$.innerHTML=pt,X=r(),N=n("p"),N.innerHTML=ut,this.h()},l(s){const j=bt("svelte-lxz0w1",document.head);p=wt(j,!1),M=vt(),j.forEach(d),S=i(s),e=o(s,"SECTION",{});var a=D(e);u=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(u)!=="svelte-1di4y0e"&&(u.innerHTML=it),q=i(a),b=o(a,"P",{"data-svelte-h":!0}),m(b)!=="svelte-dbikd5"&&(b.textContent=lt),k=i(a),y=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(y)!=="svelte-1hx9pnb"&&(y.innerHTML=dt),A=i(a),tt(f.$$.fragment,a),Q=i(a),g=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(g)!=="svelte-174az1o"&&(g.innerHTML=ht),R=i(a),l=o(a,"P",{});var h=D(l);I=x(h,"To use Nymph, you need a database driver. Nymph.js provides a "),w=o(h,"A",{href:!0});var yt=D(w);O=x(yt,"MySQL driver"),yt.forEach(d),z=x(h,", "),C=o(h,"A",{href:!0});var ft=D(C);B=x(ft,"PostgreSQL driver"),ft.forEach(d),Y=x(h,`, and a
    `),H=o(h,"A",{href:!0});var gt=D(H);G=x(gt,"SQLite3 driver"),gt.forEach(d),J=x(h,"."),h.forEach(d),U=i(a),v=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-n87w0o"&&(v.innerHTML=mt),W=i(a),L=o(a,"P",{"data-svelte-h":!0}),m(L)!=="svelte-deeya8"&&(L.textContent=ct),F=i(a),tt(T.$$.fragment,a),K=i(a),tt(_.$$.fragment,a),V=i(a),$=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m($)!=="svelte-1v13hnh"&&($.innerHTML=pt),X=i(a),N=o(a,"P",{"data-svelte-h":!0}),m(N)!=="svelte-1ox4sbb"&&(N.innerHTML=ut),a.forEach(d),this.h()},h(){document.title="Nymph - Packages - Nymph.js",p.a=M,c(u,"class","major"),c(y,"class","major"),c(g,"class","major"),c(w,"href",rt+"/packages/driver-mysql"),c(C,"href",rt+"/packages/driver-postgresql"),c(H,"href",rt+"/packages/driver-sqlite3"),c(v,"class","major"),c($,"class","major")},m(s,j){p.m(Nt,document.head),t(document.head,M),Tt(s,S,j),Tt(s,e,j),t(e,u),t(e,q),t(e,b),t(e,k),t(e,y),t(e,A),et(f,e,null),t(e,Q),t(e,g),t(e,R),t(e,l),t(l,I),t(l,w),t(w,O),t(l,z),t(l,C),t(C,B),t(l,Y),t(l,H),t(H,G),t(l,J),t(e,U),t(e,v),t(e,W),t(e,L),t(e,F),et(T,e,null),t(e,K),et(_,e,null),t(e,V),t(e,$),t(e,X),t(e,N),P=!0},p:Ct,i(s){P||(at(f.$$.fragment,s),at(T.$$.fragment,s),at(_.$$.fragment,s),P=!0)},o(s){st(f.$$.fragment,s),st(T.$$.fragment,s),st(_.$$.fragment,s),P=!1},d(s){s&&(p.d(),d(S),d(e)),d(M),nt(f),nt(T),nt(_)}}}class Qt extends Ht{constructor(p){super(),Lt(this,p,null,jt,Et,{})}}export{Qt as component};
