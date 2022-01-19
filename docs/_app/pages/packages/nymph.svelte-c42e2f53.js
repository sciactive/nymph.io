import{S as ze,i as Ue,s as Ye,a2 as ye,a7 as Ge,a3 as Oe,a4 as We,l as Re,k as l,e as o,t as d,w as fe,N as Fe,a5 as Je,d as s,m as c,c as r,a as n,h,x as ge,f as Ke,b as p,a6 as Ve,H as e,g as Me,y as ve,I as Xe,q as _e,o as Ee,B as $e}from"../../chunks/vendor-57c99eaa.js";import{b as Te}from"../../chunks/paths-396f020f.js";function Ze(Be){let f,x,I,t,$,T,M,B,q,z,U,w,k,Y,G,g,W,b,P,F,J,m,K,N,V,X,j,Z,ee,D,te,ae,se,H,A,oe,re,L,ne,ie,v,de,_,he,S,Q,le,ce,E,me,u,pe,ue,O;return g=new ye({props:{language:Ge,code:"npm install --save @nymphjs/nymph"}}),v=new ye({props:{language:Oe,code:`// main.ts
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
nymph.addEntityClass(Todo);

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
}`}}),_=new ye({props:{language:Oe,code:`// Todo.ts
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
}`}}),{c(){f=new We,x=Re(),I=l(),t=o("section"),$=o("header"),T=o("h1"),M=d("Nymph"),B=l(),q=o("p"),z=d(`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),U=l(),w=o("header"),k=o("h2"),Y=d("Installation"),G=l(),fe(g.$$.fragment),W=l(),b=o("header"),P=o("h2"),F=d("Drivers"),J=l(),m=o("p"),K=d("To use Nymph, you need a database driver. Nymph.js provides a "),N=o("a"),V=d("MySQL driver"),X=d(", "),j=o("a"),Z=d("PostgreSQL driver"),ee=d(`, and a
    `),D=o("a"),te=d("SQLite3 driver"),ae=d("."),se=l(),H=o("header"),A=o("h2"),oe=d("Usage"),re=l(),L=o("p"),ne=d("Here's an overview:"),ie=l(),fe(v.$$.fragment),de=l(),fe(_.$$.fragment),he=l(),S=o("header"),Q=o("h2"),le=d("Options"),ce=l(),E=o("p"),me=d("See the "),u=o("a"),pe=d("config declaration file"),ue=d("."),this.h()},l(i){const C=Fe('[data-svelte="svelte-lxz0w1"]',document.head);f=Je(C),x=Re(),C.forEach(s),I=c(i),t=r(i,"SECTION",{});var a=n(t);$=r(a,"HEADER",{class:!0});var we=n($);T=r(we,"H1",{style:!0});var be=n(T);M=h(be,"Nymph"),be.forEach(s),we.forEach(s),B=c(a),q=r(a,"P",{});var Ne=n(q);z=h(Ne,`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),Ne.forEach(s),U=c(a),w=r(a,"HEADER",{class:!0});var je=n(w);k=r(je,"H2",{});var De=n(k);Y=h(De,"Installation"),De.forEach(s),je.forEach(s),G=c(a),ge(g.$$.fragment,a),W=c(a),b=r(a,"HEADER",{class:!0});var He=n(b);P=r(He,"H2",{});var Se=n(P);F=h(Se,"Drivers"),Se.forEach(s),He.forEach(s),J=c(a),m=r(a,"P",{});var y=n(m);K=h(y,"To use Nymph, you need a database driver. Nymph.js provides a "),N=r(y,"A",{href:!0});var xe=n(N);V=h(xe,"MySQL driver"),xe.forEach(s),X=h(y,", "),j=r(y,"A",{href:!0});var qe=n(j);Z=h(qe,"PostgreSQL driver"),qe.forEach(s),ee=h(y,`, and a
    `),D=r(y,"A",{href:!0});var ke=n(D);te=h(ke,"SQLite3 driver"),ke.forEach(s),ae=h(y,"."),y.forEach(s),se=c(a),H=r(a,"HEADER",{class:!0});var Pe=n(H);A=r(Pe,"H2",{});var Ae=n(A);oe=h(Ae,"Usage"),Ae.forEach(s),Pe.forEach(s),re=c(a),L=r(a,"P",{});var Le=n(L);ne=h(Le,"Here's an overview:"),Le.forEach(s),ie=c(a),ge(v.$$.fragment,a),de=c(a),ge(_.$$.fragment,a),he=c(a),S=r(a,"HEADER",{class:!0});var Qe=n(S);Q=r(Qe,"H2",{});var Ce=n(Q);le=h(Ce,"Options"),Ce.forEach(s),Qe.forEach(s),ce=c(a),E=r(a,"P",{});var R=n(E);me=h(R,"See the "),u=r(R,"A",{href:!0,target:!0,rel:!0});var Ie=n(u);pe=h(Ie,"config declaration file"),Ie.forEach(s),ue=h(R,"."),R.forEach(s),a.forEach(s),this.h()},h(){document.title="Nymph - Packages - Nymph.js",f.a=x,Ke(T,"font-size","3em"),p($,"class","major"),p(w,"class","major"),p(b,"class","major"),p(N,"href",""+(Te+"/packages/driver-mysql")),p(j,"href",""+(Te+"/packages/driver-postgresql")),p(D,"href",""+(Te+"/packages/driver-sqlite3")),p(H,"class","major"),p(S,"class","major"),p(u,"href","https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts"),p(u,"target","_blank"),p(u,"rel","external")},m(i,C){f.m(Ve,document.head),e(document.head,x),Me(i,I,C),Me(i,t,C),e(t,$),e($,T),e(T,M),e(t,B),e(t,q),e(q,z),e(t,U),e(t,w),e(w,k),e(k,Y),e(t,G),ve(g,t,null),e(t,W),e(t,b),e(b,P),e(P,F),e(t,J),e(t,m),e(m,K),e(m,N),e(N,V),e(m,X),e(m,j),e(j,Z),e(m,ee),e(m,D),e(D,te),e(m,ae),e(t,se),e(t,H),e(H,A),e(A,oe),e(t,re),e(t,L),e(L,ne),e(t,ie),ve(v,t,null),e(t,de),ve(_,t,null),e(t,he),e(t,S),e(S,Q),e(Q,le),e(t,ce),e(t,E),e(E,me),e(E,u),e(u,pe),e(E,ue),O=!0},p:Xe,i(i){O||(_e(g.$$.fragment,i),_e(v.$$.fragment,i),_e(_.$$.fragment,i),O=!0)},o(i){Ee(g.$$.fragment,i),Ee(v.$$.fragment,i),Ee(_.$$.fragment,i),O=!1},d(i){s(x),i&&f.d(),i&&s(I),i&&s(t),$e(g),$e(v),$e(_)}}}class at extends ze{constructor(f){super();Ue(this,f,null,Ze,Ye,{})}}export{at as default};
