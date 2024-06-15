import{S as Be,i as Ue,s as Ye,R as Fe,e as Oe,a as d,k as r,q as h,y as ye,F as Ge,T as We,h as s,c,l as o,m as n,r as l,z as ue,p as Je,n as p,C as e,b as Ie,A as ge,D as Ke,g as ve,d as _e,B as Ee}from"../chunks/index.d7cc8d8b.js";import{H as $e,g as Ve}from"../chunks/github.df9008b1.js";import{b as Xe}from"../chunks/bash.2b754df6.js";import{t as Me}from"../chunks/typescript.7dd1ec19.js";import{b as Te}from"../chunks/paths.d307dac8.js";function Ze(ze){let u,S,R,t,$,T,M,z,q,B,U,w,C,Y,F,g,G,b,P,W,J,m,K,N,V,X,H,Z,ee,x,te,ae,se,j,A,re,oe,k,ne,ie,v,he,_,le,D,L,de,ce,E,me,f,pe,fe,O;return g=new $e({props:{language:Xe,code:"npm install --save @nymphjs/nymph"}}),v=new $e({props:{language:Me,code:`// main.ts
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
}`}}),_=new $e({props:{language:Me,code:`// Todo.ts
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
}`}}),{c(){u=new Fe(!1),S=Oe(),R=d(),t=r("section"),$=r("header"),T=r("h1"),M=h("Nymph"),z=d(),q=r("p"),B=h(`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),U=d(),w=r("header"),C=r("h2"),Y=h("Installation"),F=d(),ye(g.$$.fragment),G=d(),b=r("header"),P=r("h2"),W=h("Drivers"),J=d(),m=r("p"),K=h("To use Nymph, you need a database driver. Nymph.js provides a "),N=r("a"),V=h("MySQL driver"),X=h(", "),H=r("a"),Z=h("PostgreSQL driver"),ee=h(`, and a
    `),x=r("a"),te=h("SQLite3 driver"),ae=h(`. They all
    provide the exact same functionality.`),se=d(),j=r("header"),A=r("h2"),re=h("Usage"),oe=d(),k=r("p"),ne=h("Here's an overview:"),ie=d(),ye(v.$$.fragment),he=d(),ye(_.$$.fragment),le=d(),D=r("header"),L=r("h2"),de=h("Options"),ce=d(),E=r("p"),me=h("See the "),f=r("a"),pe=h("config declaration file"),fe=h("."),this.h()},l(i){const Q=Ge("svelte-lxz0w1",document.head);u=We(Q,!1),S=Oe(),Q.forEach(s),R=c(i),t=o(i,"SECTION",{});var a=n(t);$=o(a,"HEADER",{class:!0});var we=n($);T=o(we,"H1",{style:!0});var be=n(T);M=l(be,"Nymph"),be.forEach(s),we.forEach(s),z=c(a),q=o(a,"P",{});var Ne=n(q);B=l(Ne,`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),Ne.forEach(s),U=c(a),w=o(a,"HEADER",{class:!0});var He=n(w);C=o(He,"H2",{});var xe=n(C);Y=l(xe,"Installation"),xe.forEach(s),He.forEach(s),F=c(a),ue(g.$$.fragment,a),G=c(a),b=o(a,"HEADER",{class:!0});var je=n(b);P=o(je,"H2",{});var De=n(P);W=l(De,"Drivers"),De.forEach(s),je.forEach(s),J=c(a),m=o(a,"P",{});var y=n(m);K=l(y,"To use Nymph, you need a database driver. Nymph.js provides a "),N=o(y,"A",{href:!0});var Se=n(N);V=l(Se,"MySQL driver"),Se.forEach(s),X=l(y,", "),H=o(y,"A",{href:!0});var qe=n(H);Z=l(qe,"PostgreSQL driver"),qe.forEach(s),ee=l(y,`, and a
    `),x=o(y,"A",{href:!0});var Ce=n(x);te=l(Ce,"SQLite3 driver"),Ce.forEach(s),ae=l(y,`. They all
    provide the exact same functionality.`),y.forEach(s),se=c(a),j=o(a,"HEADER",{class:!0});var Pe=n(j);A=o(Pe,"H2",{});var Ae=n(A);re=l(Ae,"Usage"),Ae.forEach(s),Pe.forEach(s),oe=c(a),k=o(a,"P",{});var ke=n(k);ne=l(ke,"Here's an overview:"),ke.forEach(s),ie=c(a),ue(v.$$.fragment,a),he=c(a),ue(_.$$.fragment,a),le=c(a),D=o(a,"HEADER",{class:!0});var Le=n(D);L=o(Le,"H2",{});var Qe=n(L);de=l(Qe,"Options"),Qe.forEach(s),Le.forEach(s),ce=c(a),E=o(a,"P",{});var I=n(E);me=l(I,"See the "),f=o(I,"A",{href:!0,target:!0,rel:!0});var Re=n(f);pe=l(Re,"config declaration file"),Re.forEach(s),fe=l(I,"."),I.forEach(s),a.forEach(s),this.h()},h(){document.title="Nymph - Packages - Nymph.js",u.a=S,Je(T,"font-size","3em"),p($,"class","major"),p(w,"class","major"),p(b,"class","major"),p(N,"href",Te+"/packages/driver-mysql"),p(H,"href",Te+"/packages/driver-postgresql"),p(x,"href",Te+"/packages/driver-sqlite3"),p(j,"class","major"),p(D,"class","major"),p(f,"href","https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts"),p(f,"target","_blank"),p(f,"rel","external noreferrer")},m(i,Q){u.m(Ve,document.head),e(document.head,S),Ie(i,R,Q),Ie(i,t,Q),e(t,$),e($,T),e(T,M),e(t,z),e(t,q),e(q,B),e(t,U),e(t,w),e(w,C),e(C,Y),e(t,F),ge(g,t,null),e(t,G),e(t,b),e(b,P),e(P,W),e(t,J),e(t,m),e(m,K),e(m,N),e(N,V),e(m,X),e(m,H),e(H,Z),e(m,ee),e(m,x),e(x,te),e(m,ae),e(t,se),e(t,j),e(j,A),e(A,re),e(t,oe),e(t,k),e(k,ne),e(t,ie),ge(v,t,null),e(t,he),ge(_,t,null),e(t,le),e(t,D),e(D,L),e(L,de),e(t,ce),e(t,E),e(E,me),e(E,f),e(f,pe),e(E,fe),O=!0},p:Ke,i(i){O||(ve(g.$$.fragment,i),ve(v.$$.fragment,i),ve(_.$$.fragment,i),O=!0)},o(i){_e(g.$$.fragment,i),_e(v.$$.fragment,i),_e(_.$$.fragment,i),O=!1},d(i){s(S),i&&u.d(),i&&s(R),i&&s(t),Ee(g),Ee(v),Ee(_)}}}class ot extends Be{constructor(u){super(),Ue(this,u,null,Ze,Ye,{})}}export{ot as component};
