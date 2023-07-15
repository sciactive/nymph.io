import{s as Ce,I as be,e as me,a as i,f as s,l as pe,x as De,J as Ne,d as l,c as r,g as n,h as H,r as d,m as ue,j,k as q,u as e,i as V,v as He}from"../chunks/scheduler.d7e45cc8.js";import{S as je,i as Me,b as ye,d as fe,m as ge,a as ve,t as Te,e as $e}from"../chunks/index.77720afb.js";import{H as we,g as Pe}from"../chunks/github.64534d2c.js";import{t as xe}from"../chunks/typescript.09c48802.js";import{b as Ee}from"../chunks/paths.dbb47c61.js";function Ie(_e){let p,M,P,t,u,ee='<h1 style="font-size: 3em;">Defining Entities</h1>',z,x,te=`To create a new type of data object in Nymph, you extend the <code>Entity</code> class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`,A,y,f,ae="Extending Entity in Node.js",O,g,Y,v,T,oe="Extending Entity in the Client",B,$,U,E,se=`In both cases, defaults are set in the constructor (the <code>done</code>
    property is set to false and the <code>name</code> property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity&#39;s data (other than guid, cdate, mdate, and tags) are accessed from
    <code>this.$data</code>. The
    <code>$data</code> part is not necessary outside of the entity&#39;s own methods.`,R,_,ne=`You&#39;ll also notice that when using Nymph from within an entity&#39;s methods,
    there is an instance of Nymph available in <code>this.$nymph</code> (or
    <code>this.nymph</code> in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client,
    these instances will know how to communicate with the configured REST
    server. Basically, you have to use these instances. You can also use
    <code>this.$nymph.getEntityClass</code>
    and <code>this.nymph.getEntityClass</code> to get the right class for Nymph queries.`,W,C,ie=`In Node.js, the etype is set to <code>&quot;todo&quot;</code>. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class&#39; etype to
    determine where to search for entities. If you don&#39;t provide a class, the
    <code>Entity</code> class and the &quot;entity&quot; etype will be used.`,F,b,re=`The <code>$clientEnabledMethods</code> property and the
    <code>clientEnabledStaticMethods</code>
    static property in Node.js determine which methods and static methods can be
    called from the client using <code>$serverCall</code> and
    <code>serverCallStatic</code>. In the client class, the
    <code>return await this.$serverCall(&#39;$archive&#39;, []);</code> statement takes advantage
    of this feature.`,G,D,le=`On both the Node.js class and the client class, the class name is set in the <code>class</code> static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`,K,N,de=`Finally, in Node.js, the <code>Todo</code> class validates all of its data
    in the <code>$save</code> method using
    <a href="https://joi.dev/" target="_blank" rel="noreferrer">Joi</a>. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the <code>$getValidatable</code> method. The
    <code>$allowlistData</code> property will ensure no extra properties are set.`,I,c,h,Q,X,m,Z,L;return g=new we({props:{language:xe,code:`import { Entity, Selector, nymphJoiProps } from '@nymphjs/nymph';
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

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(): Todo & TodoData {
    return super.factorySync() as Todo & TodoData;
  }

  constructor() {
    super();

    this.$data.name = '';
    this.$data.done = false;
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

    // Check that this is not a duplicate Todo.
    const selector: Selector = {
      type: '&',
      equal: ['name', this.$data.name],
    };
    if (this.guid) {
      selector['!guid'] = this.guid;
    }
    if (
      await this.$nymph.getEntity(
        {
          class: this.$nymph.getEntityClass(Todo),
        },
        selector
      )
    ) {
      throw new Error('There is already a todo for that.');
    }

    return await super.$save();
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}}),$=new we({props:{language:xe,code:`import { Entity } from '@nymphjs/client';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  // The name of the server class
  public static class = 'Todo';

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(): Todo & TodoData {
    return super.factorySync() as Todo & TodoData;
  }

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
const Todo = nymph.addEntityClass(TodoClass);`}}),{c(){p=new be(!1),M=me(),P=i(),t=s("section"),u=s("header"),u.innerHTML=ee,z=i(),x=s("p"),x.innerHTML=te,A=i(),y=s("div"),f=s("div"),f.textContent=ae,O=i(),ye(g.$$.fragment),Y=i(),v=s("div"),T=s("div"),T.textContent=oe,B=i(),ye($.$$.fragment),U=i(),E=s("p"),E.innerHTML=se,R=i(),_=s("p"),_.innerHTML=ne,W=i(),C=s("p"),C.innerHTML=ie,F=i(),b=s("p"),b.innerHTML=re,G=i(),D=s("p"),D.innerHTML=le,K=i(),N=s("p"),N.innerHTML=de,I=i(),c=s("section"),h=s("a"),Q=pe("Previous: Entity Class"),X=i(),m=s("a"),Z=pe("Next: UIDs"),this.h()},l(o){const w=De("svelte-1kddyis",document.head);p=Ne(w,!1),M=me(),w.forEach(l),P=r(o),t=n(o,"SECTION",{});var a=H(t);u=n(a,"HEADER",{class:!0,"data-svelte-h":!0}),d(u)!=="svelte-m0pwuh"&&(u.innerHTML=ee),z=r(a),x=n(a,"P",{"data-svelte-h":!0}),d(x)!=="svelte-1ga4ymg"&&(x.innerHTML=te),A=r(a),y=n(a,"DIV",{});var S=H(y);f=n(S,"DIV",{style:!0,"data-svelte-h":!0}),d(f)!=="svelte-x4a4x6"&&(f.textContent=ae),O=r(S),fe(g.$$.fragment,S),S.forEach(l),Y=r(a),v=n(a,"DIV",{});var J=H(v);T=n(J,"DIV",{style:!0,"data-svelte-h":!0}),d(T)!=="svelte-cz2e9p"&&(T.textContent=oe),B=r(J),fe($.$$.fragment,J),J.forEach(l),U=r(a),E=n(a,"P",{"data-svelte-h":!0}),d(E)!=="svelte-i2s6a"&&(E.innerHTML=se),R=r(a),_=n(a,"P",{"data-svelte-h":!0}),d(_)!=="svelte-1dyi7tz"&&(_.innerHTML=ne),W=r(a),C=n(a,"P",{"data-svelte-h":!0}),d(C)!=="svelte-gi493t"&&(C.innerHTML=ie),F=r(a),b=n(a,"P",{"data-svelte-h":!0}),d(b)!=="svelte-tt0ehe"&&(b.innerHTML=re),G=r(a),D=n(a,"P",{"data-svelte-h":!0}),d(D)!=="svelte-xvwhoh"&&(D.innerHTML=le),K=r(a),N=n(a,"P",{"data-svelte-h":!0}),d(N)!=="svelte-16ufu2w"&&(N.innerHTML=de),a.forEach(l),I=r(o),c=n(o,"SECTION",{class:!0});var k=H(c);h=n(k,"A",{href:!0,class:!0,style:!0});var ce=H(h);Q=ue(ce,"Previous: Entity Class"),ce.forEach(l),X=r(k),m=n(k,"A",{href:!0,class:!0,style:!0});var he=H(m);Z=ue(he,"Next: UIDs"),he.forEach(l),k.forEach(l),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",p.a=M,j(u,"class","major"),q(f,"text-align","end"),q(T,"text-align","end"),j(h,"href",Ee+"/user-guide/entity-class"),j(h,"class","button"),q(h,"margin",".5em"),j(m,"href",Ee+"/user-guide/uids"),j(m,"class","button"),q(m,"margin",".5em"),j(c,"class","page-steps")},m(o,w){p.m(Pe,document.head),e(document.head,M),V(o,P,w),V(o,t,w),e(t,u),e(t,z),e(t,x),e(t,A),e(t,y),e(y,f),e(y,O),ge(g,y,null),e(t,Y),e(t,v),e(v,T),e(v,B),ge($,v,null),e(t,U),e(t,E),e(t,R),e(t,_),e(t,W),e(t,C),e(t,F),e(t,b),e(t,G),e(t,D),e(t,K),e(t,N),V(o,I,w),V(o,c,w),e(c,h),e(h,Q),e(c,X),e(c,m),e(m,Z),L=!0},p:He,i(o){L||(ve(g.$$.fragment,o),ve($.$$.fragment,o),L=!0)},o(o){Te(g.$$.fragment,o),Te($.$$.fragment,o),L=!1},d(o){o&&(p.d(),l(P),l(t),l(I),l(c)),l(M),$e(g),$e($)}}}class Ve extends je{constructor(p){super(),Me(this,p,null,Ie,Ce,{})}}export{Ve as component};
