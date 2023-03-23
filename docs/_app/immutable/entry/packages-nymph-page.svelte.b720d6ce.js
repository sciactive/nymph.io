import{S as Be,i as Ue,s as Ye,R as Fe,e as Oe,a as l,k as o,q as d,y as ue,F as Ge,T as We,h as s,c,l as r,m as n,r as h,z as ye,p as Je,n as p,C as e,b as Ie,A as ge,D as Ke,g as ve,d as _e,B as Ee}from"../chunks/index.2f30a1c2.js";import{H as Te,g as Ve}from"../chunks/github.8af4b809.js";import{b as Xe}from"../chunks/bash.2b754df6.js";import{t as Me}from"../chunks/typescript.7dd1ec19.js";import{b as $e}from"../chunks/paths.b3a4b0de.js";function Ze(ze){let y,x,R,t,T,$,M,z,q,B,U,w,P,Y,F,g,G,b,C,W,J,m,K,N,V,X,D,Z,ee,H,te,ae,se,S,A,oe,re,k,ne,ie,v,de,_,he,j,L,le,ce,E,me,f,pe,fe,O;return g=new Te({props:{language:Xe,code:"npm install --save @nymphjs/nymph"}}),v=new Te({props:{language:Me,code:`// main.ts
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
}`}}),_=new Te({props:{language:Me,code:`// Todo.ts
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
}`}}),{c(){y=new Fe(!1),x=Oe(),R=l(),t=o("section"),T=o("header"),$=o("h1"),M=d("Nymph"),z=l(),q=o("p"),B=d(`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),U=l(),w=o("header"),P=o("h2"),Y=d("Installation"),F=l(),ue(g.$$.fragment),G=l(),b=o("header"),C=o("h2"),W=d("Drivers"),J=l(),m=o("p"),K=d("To use Nymph, you need a database driver. Nymph.js provides a "),N=o("a"),V=d("MySQL driver"),X=d(", "),D=o("a"),Z=d("PostgreSQL driver"),ee=d(`, and a
    `),H=o("a"),te=d("SQLite3 driver"),ae=d("."),se=l(),S=o("header"),A=o("h2"),oe=d("Usage"),re=l(),k=o("p"),ne=d("Here's an overview:"),ie=l(),ue(v.$$.fragment),de=l(),ue(_.$$.fragment),he=l(),j=o("header"),L=o("h2"),le=d("Options"),ce=l(),E=o("p"),me=d("See the "),f=o("a"),pe=d("config declaration file"),fe=d("."),this.h()},l(i){const Q=Ge("svelte-lxz0w1",document.head);y=We(Q,!1),x=Oe(),Q.forEach(s),R=c(i),t=r(i,"SECTION",{});var a=n(t);T=r(a,"HEADER",{class:!0});var we=n(T);$=r(we,"H1",{style:!0});var be=n($);M=h(be,"Nymph"),be.forEach(s),we.forEach(s),z=c(a),q=r(a,"P",{});var Ne=n(q);B=h(Ne,`The Nymph core provides the base level classes and utilities to query the
    database, save data to it, and define different data types.`),Ne.forEach(s),U=c(a),w=r(a,"HEADER",{class:!0});var De=n(w);P=r(De,"H2",{});var He=n(P);Y=h(He,"Installation"),He.forEach(s),De.forEach(s),F=c(a),ye(g.$$.fragment,a),G=c(a),b=r(a,"HEADER",{class:!0});var Se=n(b);C=r(Se,"H2",{});var je=n(C);W=h(je,"Drivers"),je.forEach(s),Se.forEach(s),J=c(a),m=r(a,"P",{});var u=n(m);K=h(u,"To use Nymph, you need a database driver. Nymph.js provides a "),N=r(u,"A",{href:!0});var xe=n(N);V=h(xe,"MySQL driver"),xe.forEach(s),X=h(u,", "),D=r(u,"A",{href:!0});var qe=n(D);Z=h(qe,"PostgreSQL driver"),qe.forEach(s),ee=h(u,`, and a
    `),H=r(u,"A",{href:!0});var Pe=n(H);te=h(Pe,"SQLite3 driver"),Pe.forEach(s),ae=h(u,"."),u.forEach(s),se=c(a),S=r(a,"HEADER",{class:!0});var Ce=n(S);A=r(Ce,"H2",{});var Ae=n(A);oe=h(Ae,"Usage"),Ae.forEach(s),Ce.forEach(s),re=c(a),k=r(a,"P",{});var ke=n(k);ne=h(ke,"Here's an overview:"),ke.forEach(s),ie=c(a),ye(v.$$.fragment,a),de=c(a),ye(_.$$.fragment,a),he=c(a),j=r(a,"HEADER",{class:!0});var Le=n(j);L=r(Le,"H2",{});var Qe=n(L);le=h(Qe,"Options"),Qe.forEach(s),Le.forEach(s),ce=c(a),E=r(a,"P",{});var I=n(E);me=h(I,"See the "),f=r(I,"A",{href:!0,target:!0,rel:!0});var Re=n(f);pe=h(Re,"config declaration file"),Re.forEach(s),fe=h(I,"."),I.forEach(s),a.forEach(s),this.h()},h(){document.title="Nymph - Packages - Nymph.js",y.a=x,Je($,"font-size","3em"),p(T,"class","major"),p(w,"class","major"),p(b,"class","major"),p(N,"href",$e+"/packages/driver-mysql"),p(D,"href",$e+"/packages/driver-postgresql"),p(H,"href",$e+"/packages/driver-sqlite3"),p(S,"class","major"),p(j,"class","major"),p(f,"href","https://github.com/sciactive/nymphjs/tree/master/packages/nymph/src/conf/d.ts"),p(f,"target","_blank"),p(f,"rel","external noreferrer")},m(i,Q){y.m(Ve,document.head),e(document.head,x),Ie(i,R,Q),Ie(i,t,Q),e(t,T),e(T,$),e($,M),e(t,z),e(t,q),e(q,B),e(t,U),e(t,w),e(w,P),e(P,Y),e(t,F),ge(g,t,null),e(t,G),e(t,b),e(b,C),e(C,W),e(t,J),e(t,m),e(m,K),e(m,N),e(N,V),e(m,X),e(m,D),e(D,Z),e(m,ee),e(m,H),e(H,te),e(m,ae),e(t,se),e(t,S),e(S,A),e(A,oe),e(t,re),e(t,k),e(k,ne),e(t,ie),ge(v,t,null),e(t,de),ge(_,t,null),e(t,he),e(t,j),e(j,L),e(L,le),e(t,ce),e(t,E),e(E,me),e(E,f),e(f,pe),e(E,fe),O=!0},p:Ke,i(i){O||(ve(g.$$.fragment,i),ve(v.$$.fragment,i),ve(_.$$.fragment,i),O=!0)},o(i){_e(g.$$.fragment,i),_e(v.$$.fragment,i),_e(_.$$.fragment,i),O=!1},d(i){s(x),i&&y.d(),i&&s(R),i&&s(t),Ee(g),Ee(v),Ee(_)}}}class rt extends Be{constructor(y){super(),Ue(this,y,null,Ze,Ye,{})}}export{rt as default};
