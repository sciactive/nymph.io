import{s as ut,I as yt,e as lt,a as i,f as s,l as ct,x as ft,J as gt,d as c,c as r,g as o,h as j,r as l,m as ht,j as E,k as dt,u as e,i as I,v as vt}from"../chunks/scheduler.d7e45cc8.js";import{S as wt,i as $t,b as Tt,d as bt,m as xt,a as _t,t as Ct,e as Nt}from"../chunks/index.77720afb.js";import{H as Et,g as Ht}from"../chunks/github.64534d2c.js";import{t as Mt}from"../chunks/typescript.09c48802.js";import{b as mt}from"../chunks/paths.d4a6803e.js";function Pt(pt){let p,H,M,t,u,Q='<h1 style="font-size: 3em;">Transactions</h1>',D,g,B=`In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.`,J,v,K=`When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.`,S,w,X="<code>Nymph</code> has the following methods for managing transactions.",q,$,Z="<li><code>startTransaction</code> - Start a named transaction.</li> <li><code>commit</code> - Commit a named transaction.</li> <li><code>rollback</code> - Rollback a named transaction.</li> <li><code>inTransaction</code> - Check if Nymph is currently running within a transaction.</li>",z,T,tt=`<code>startTransaction</code> will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.`,A,b,et=`The transaction instance of Nymph has its own set of classes. You can use
    its <code>getEntityClass</code> method to get the proper classes for that instance
    of Nymph.`,U,x,nt=`When you start a new transaction, entities retrieved from that transaction&#39;s
    Nymph instance will have that instance within their static <code>nymph</code>
    property and instance <code>$nymph</code> property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.`,Y,_,at=`Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.`,O,C,st=`Here is an example of a class that uses a transaction to delete all of its
    children when it is deleted. If any of its children cannot be deleted, then
    the transaction is rolled back, meaning none of its children get deleted.`,W,y,R,N,ot=`The <code>$setNymph</code> method is used to make sure the entity and all
    referenced entities use the transactional Nymph instance. The
    <code>tnymph</code> Nymph instance is used during the transaction, and the
    children are retrieved using the proper class with
    <code>tnymph.getEntityClass(Todo)</code>.`,P,h,d,V,F,m,G,k;return y=new Et({props:{language:Mt,code:`import { EntityUniqueConstraintError, type Nymph } from '@nymphjs/nymph';
import { Entity, nymphJoiProps } from '@nymphjs/nymph';
import type { AccessControlData } from '@nymphjs/tilmeld';
import { enforceTilmeld, tilmeldJoiProps } from '@nymphjs/tilmeld';
import Joi from 'joi';

export type TodoData = {
  name: string;
  done: boolean;
  parent?: Todo & TodoData;
} & AccessControlData;

export class Todo extends Entity<TodoData> {
  static ETYPE = 'todo';
  static class = 'Todo';

  protected $clientEnabledMethods = [];
  protected $allowlistData? = ['name', 'done', 'parent'];
  protected $protectedTags = [];
  protected $allowlistTags? = [];

  constructor() {
    super();

    this.$data.name = '';
    this.$data.done = false;
  }

  async $getUniques() {
    return [
      \`\${this.$data.user?.guid}:\${this.$data.parent?.guid}:\${this.$data.name}\`,
    ];
  }

  /**
   * Set a new Nymph instance on this and all contained entities.
   */
  $setNymph(nymph: Nymph) {
    this.$nymph = nymph;
    if (!this.$asleep()) {
      if (this.$data.user) {
        this.$data.user.$setNymph(nymph);
      }
      if (this.$data.group) {
        this.$data.group.$setNymph(nymph);
      }
      if (this.$data.parent) {
        this.$data.parent.$setNymph(nymph);
      }
    }
  }

  async $save() {
    const tilmeld = enforceTilmeld(this);
    if (!tilmeld.gatekeeper()) {
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
        parent: Joi.object().instance(Todo),
      }),
      'Invalid Todo: ',
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

  async $delete() {
    const transaction = 'todo-delete-' + this.guid;
    const nymph = this.$nymph;
    const tnymph = await nymph.startTransaction(transaction);
    this.$setNymph(tnymph);

    try {
      // Delete this todo's children.
      const children = await tnymph.getEntities(
        {
          class: tnymph.getEntityClass(Todo),
          skipAc: true,
        },
        {
          type: '&',
          ref: ['parent', this],
        },
      );

      for (let child of children) {
        if (!(await child.$delete())) {
          throw new Error("Couldn't delete child todo.");
        }
      }

      // Delete todo.
      let success = await super.$delete();
      if (success) {
        success = await tnymph.commit(transaction);
      } else {
        await tnymph.rollback(transaction);
      }
      this.$setNymph(nymph);
      return success;
    } catch (e: any) {
      await tnymph.rollback(transaction);
      this.$setNymph(nymph);
      throw e;
    }
  }
}
`}}),{c(){p=new yt(!1),H=lt(),M=i(),t=s("section"),u=s("header"),u.innerHTML=Q,D=i(),g=s("p"),g.textContent=B,J=i(),v=s("p"),v.textContent=K,S=i(),w=s("p"),w.innerHTML=X,q=i(),$=s("ul"),$.innerHTML=Z,z=i(),T=s("p"),T.innerHTML=tt,A=i(),b=s("p"),b.innerHTML=et,U=i(),x=s("p"),x.innerHTML=nt,Y=i(),_=s("p"),_.textContent=at,O=i(),C=s("p"),C.textContent=st,W=i(),Tt(y.$$.fragment),R=i(),N=s("p"),N.innerHTML=ot,P=i(),h=s("section"),d=s("a"),V=ct("Previous: UIDs"),F=i(),m=s("a"),G=ct("Next: Export and Import"),this.h()},l(a){const f=ft("svelte-10lzn9g",document.head);p=gt(f,!1),H=lt(),f.forEach(c),M=r(a),t=o(a,"SECTION",{});var n=j(t);u=o(n,"HEADER",{class:!0,"data-svelte-h":!0}),l(u)!=="svelte-av4w2r"&&(u.innerHTML=Q),D=r(n),g=o(n,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1rsslgi"&&(g.textContent=B),J=r(n),v=o(n,"P",{"data-svelte-h":!0}),l(v)!=="svelte-12zk7dr"&&(v.textContent=K),S=r(n),w=o(n,"P",{"data-svelte-h":!0}),l(w)!=="svelte-cl7x23"&&(w.innerHTML=X),q=r(n),$=o(n,"UL",{"data-svelte-h":!0}),l($)!=="svelte-11h7zup"&&($.innerHTML=Z),z=r(n),T=o(n,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1yvjz3q"&&(T.innerHTML=tt),A=r(n),b=o(n,"P",{"data-svelte-h":!0}),l(b)!=="svelte-19zzbn9"&&(b.innerHTML=et),U=r(n),x=o(n,"P",{"data-svelte-h":!0}),l(x)!=="svelte-grajno"&&(x.innerHTML=nt),Y=r(n),_=o(n,"P",{"data-svelte-h":!0}),l(_)!=="svelte-15godzb"&&(_.textContent=at),O=r(n),C=o(n,"P",{"data-svelte-h":!0}),l(C)!=="svelte-wfsavt"&&(C.textContent=st),W=r(n),bt(y.$$.fragment,n),R=r(n),N=o(n,"P",{"data-svelte-h":!0}),l(N)!=="svelte-8ttwld"&&(N.innerHTML=ot),n.forEach(c),P=r(a),h=o(a,"SECTION",{class:!0});var L=j(h);d=o(L,"A",{href:!0,class:!0,style:!0});var it=j(d);V=ht(it,"Previous: UIDs"),it.forEach(c),F=r(L),m=o(L,"A",{href:!0,class:!0,style:!0});var rt=j(m);G=ht(rt,"Next: Export and Import"),rt.forEach(c),L.forEach(c),this.h()},h(){document.title="Transactions - User Guide - Nymph.js",p.a=H,E(u,"class","major"),E(d,"href",mt+"/user-guide/uids"),E(d,"class","button"),dt(d,"margin",".5em"),E(m,"href",mt+"/user-guide/export-and-import"),E(m,"class","button"),dt(m,"margin",".5em"),E(h,"class","page-steps")},m(a,f){p.m(Ht,document.head),e(document.head,H),I(a,M,f),I(a,t,f),e(t,u),e(t,D),e(t,g),e(t,J),e(t,v),e(t,S),e(t,w),e(t,q),e(t,$),e(t,z),e(t,T),e(t,A),e(t,b),e(t,U),e(t,x),e(t,Y),e(t,_),e(t,O),e(t,C),e(t,W),xt(y,t,null),e(t,R),e(t,N),I(a,P,f),I(a,h,f),e(h,d),e(d,V),e(h,F),e(h,m),e(m,G),k=!0},p:vt,i(a){k||(_t(y.$$.fragment,a),k=!0)},o(a){Ct(y.$$.fragment,a),k=!1},d(a){a&&(p.d(),c(M),c(t),c(P),c(h)),c(H),Nt(y)}}}class Jt extends wt{constructor(p){super(),$t(this,p,null,Pt,ut,{})}}export{Jt as component};
