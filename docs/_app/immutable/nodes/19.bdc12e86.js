import{s as He,I as Me,e as ye,a as i,f as n,l as fe,x as je,J as Ie,d as l,c as r,g as o,h as j,r as d,m as ge,j as I,k as z,u as e,i as S,v as Le}from"../chunks/scheduler.d7e45cc8.js";import{S as De,i as Pe,b as ve,d as Te,m as $e,a as we,t as Ee,e as xe}from"../chunks/index.77720afb.js";import{H as _e,g as qe}from"../chunks/github.64534d2c.js";import{t as Ce}from"../chunks/typescript.09c48802.js";import{b as be}from"../chunks/paths.d4a6803e.js";function ke(Ne){let p,L,D,t,u,ae='<h1 style="font-size: 3em;">Defining Entities</h1>',V,E,se=`To create a new type of data object in Nymph, you extend the <code>Entity</code> class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`,A,y,f,ne="Extending Entity in Node.js",O,g,Y,v,T,oe="Extending Entity in the Client",B,$,G,x,ie=`In both cases, defaults are set in the constructor (the <code>done</code>
    property is set to false and the <code>name</code> property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity&#39;s data (other than guid, cdate, mdate, and tags) are accessed from
    <code>this.$data</code>. The
    <code>$data</code> part is not necessary outside of the entity&#39;s own methods.`,R,_,re=`You&#39;ll also notice that when using Nymph from within an entity&#39;s methods,
    there is an instance of Nymph available in <code>this.$nymph</code> (or
    <code>this.nymph</code> in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client,
    these instances will know how to communicate with the configured REST
    server. Basically, you have to use these instances. You can also use
    <code>this.$nymph.getEntityClass</code>
    and <code>this.nymph.getEntityClass</code> to get the right class for Nymph queries.`,W,C,le=`In Node.js, the etype is set to <code>&quot;todo&quot;</code>. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class&#39; etype to
    determine where to search for entities. If you don&#39;t provide a class, the
    <code>Entity</code> class and the &quot;entity&quot; etype will be used.`,F,b,de=`The <code>$clientEnabledMethods</code> property and the
    <code>clientEnabledStaticMethods</code>
    static property in Node.js determine which methods and static methods can be
    called from the client using <code>$serverCall</code> and
    <code>serverCallStatic</code>. In the client class, the
    <code>return await this.$serverCall(&#39;$archive&#39;, []);</code> statement takes advantage
    of this feature.`,K,N,he=`On both the Node.js class and the client class, the class name is set in the <code>class</code> static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`,Q,H,ce=`Nymph provides a mechanism to ensure uniqueness among entities. Any strings
    returned by the <code>$getUniques</code> method will have a uniqueness
    constraint enforced by the database across this entity&#39;s etype. The
    <code>Todo</code> class returns a string containing both the user&#39;s GUID and
    the todo name. This ensures that the user can&#39;t have two todos with the same
    name. The <code>$save</code> method checks for a thrown
    <code>EntityUniqueConstraintError</code>
    when calling the super class&#39; <code>$save</code>.`,X,M,me=`Finally, in Node.js, the <code>Todo</code> class validates all of its data
    in the <code>$save</code> method using
    <a href="https://joi.dev/" target="_blank" rel="noreferrer">Joi</a>. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the <code>$getValidatable</code> method. The
    <code>$allowlistData</code> property will ensure no extra properties are set.`,P,h,c,Z,ee,m,te,q;return g=new _e({props:{language:Ce,code:`import {
  Entity,
  EntityUniqueConstraintError,
  nymphJoiProps,
} from '@nymphjs/nymph';
import { tilmeldJoiProps } from '@nymphjs/tilmeld';
import Joi from 'joi';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  static ETYPE = 'todo';
  static class = 'Todo';

  protected $clientEnabledMethods = ['$archive'];
  protected $allowlistData? = ['name', 'done'];
  protected $protectedTags = ['archived'];
  protected $allowlistTags? = [];

  constructor() {
    super();

    this.$data.name = '';
    this.$data.done = false;
  }

  async $getUniques() {
    // Make sure this isn't a duplicate Todo for this user.
    return [\`\${this.$data.user.guid}:\${this.$data.name}\`];
  }

  async $archive() {
    if (this.$hasTag('archived')) {
      return true;
    }
    this.$addTag('archived');
    return await this.$save();
  }

  async $save() {
    if (!this.$nymph.tilmeld?.gatekeeper()) {
      // Only allow logged in users to save.
      throw new Error('You are not logged in.');
    }

    // Validate the entity's data.
    Joi.attempt(
      this.$getValidatable(),
      Joi.object().keys({
        ...nymphJoiProps,
        ...tilmeldJoiProps,

        name: Joi.string().trim(false).max(500, 'utf8').required(),
        done: Joi.boolean().required(),
      }),
      'Invalid Todo: '
    );

    try {
      return await super.$save();
    } catch (e: any) {
      if (e instanceof EntityUniqueConstraintError) {
        throw new Error('There is already a todo for that.');
      }
      throw e;
    }
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}}),$=new _e({props:{language:Ce,code:`import { Entity } from '@nymphjs/client';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  // The name of the server class
  public static class = 'Todo';

  constructor() {
    super();

    this.$data.name = '';
    this.$data.done = false;
  }

  async $archive(): Promise<boolean> {
    return await this.$serverCall('$archive', []);
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}}),{c(){p=new Me(!1),L=ye(),D=i(),t=n("section"),u=n("header"),u.innerHTML=ae,V=i(),E=n("p"),E.innerHTML=se,A=i(),y=n("div"),f=n("div"),f.textContent=ne,O=i(),ve(g.$$.fragment),Y=i(),v=n("div"),T=n("div"),T.textContent=oe,B=i(),ve($.$$.fragment),G=i(),x=n("p"),x.innerHTML=ie,R=i(),_=n("p"),_.innerHTML=re,W=i(),C=n("p"),C.innerHTML=le,F=i(),b=n("p"),b.innerHTML=de,K=i(),N=n("p"),N.innerHTML=he,Q=i(),H=n("p"),H.innerHTML=ce,X=i(),M=n("p"),M.innerHTML=me,P=i(),h=n("section"),c=n("a"),Z=fe("Previous: Entity Class"),ee=i(),m=n("a"),te=fe("Next: UIDs"),this.h()},l(s){const w=je("svelte-1kddyis",document.head);p=Ie(w,!1),L=ye(),w.forEach(l),D=r(s),t=o(s,"SECTION",{});var a=j(t);u=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),d(u)!=="svelte-m0pwuh"&&(u.innerHTML=ae),V=r(a),E=o(a,"P",{"data-svelte-h":!0}),d(E)!=="svelte-1ga4ymg"&&(E.innerHTML=se),A=r(a),y=o(a,"DIV",{});var k=j(y);f=o(k,"DIV",{style:!0,"data-svelte-h":!0}),d(f)!=="svelte-x4a4x6"&&(f.textContent=ne),O=r(k),Te(g.$$.fragment,k),k.forEach(l),Y=r(a),v=o(a,"DIV",{});var J=j(v);T=o(J,"DIV",{style:!0,"data-svelte-h":!0}),d(T)!=="svelte-cz2e9p"&&(T.textContent=oe),B=r(J),Te($.$$.fragment,J),J.forEach(l),G=r(a),x=o(a,"P",{"data-svelte-h":!0}),d(x)!=="svelte-i2s6a"&&(x.innerHTML=ie),R=r(a),_=o(a,"P",{"data-svelte-h":!0}),d(_)!=="svelte-1dyi7tz"&&(_.innerHTML=re),W=r(a),C=o(a,"P",{"data-svelte-h":!0}),d(C)!=="svelte-gi493t"&&(C.innerHTML=le),F=r(a),b=o(a,"P",{"data-svelte-h":!0}),d(b)!=="svelte-tt0ehe"&&(b.innerHTML=de),K=r(a),N=o(a,"P",{"data-svelte-h":!0}),d(N)!=="svelte-xvwhoh"&&(N.innerHTML=he),Q=r(a),H=o(a,"P",{"data-svelte-h":!0}),d(H)!=="svelte-zzn5k9"&&(H.innerHTML=ce),X=r(a),M=o(a,"P",{"data-svelte-h":!0}),d(M)!=="svelte-16ufu2w"&&(M.innerHTML=me),a.forEach(l),P=r(s),h=o(s,"SECTION",{class:!0});var U=j(h);c=o(U,"A",{href:!0,class:!0,style:!0});var pe=j(c);Z=ge(pe,"Previous: Entity Class"),pe.forEach(l),ee=r(U),m=o(U,"A",{href:!0,class:!0,style:!0});var ue=j(m);te=ge(ue,"Next: UIDs"),ue.forEach(l),U.forEach(l),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",p.a=L,I(u,"class","major"),z(f,"text-align","end"),z(T,"text-align","end"),I(c,"href",be+"/user-guide/entity-class"),I(c,"class","button"),z(c,"margin",".5em"),I(m,"href",be+"/user-guide/uids"),I(m,"class","button"),z(m,"margin",".5em"),I(h,"class","page-steps")},m(s,w){p.m(qe,document.head),e(document.head,L),S(s,D,w),S(s,t,w),e(t,u),e(t,V),e(t,E),e(t,A),e(t,y),e(y,f),e(y,O),$e(g,y,null),e(t,Y),e(t,v),e(v,T),e(v,B),$e($,v,null),e(t,G),e(t,x),e(t,R),e(t,_),e(t,W),e(t,C),e(t,F),e(t,b),e(t,K),e(t,N),e(t,Q),e(t,H),e(t,X),e(t,M),S(s,P,w),S(s,h,w),e(h,c),e(c,Z),e(h,ee),e(h,m),e(m,te),q=!0},p:Le,i(s){q||(we(g.$$.fragment,s),we($.$$.fragment,s),q=!0)},o(s){Ee(g.$$.fragment,s),Ee($.$$.fragment,s),q=!1},d(s){s&&(p.d(),l(D),l(t),l(P),l(h)),l(L),xe(g),xe($)}}}class Ae extends De{constructor(p){super(),Pe(this,p,null,ke,He,{})}}export{Ae as component};
