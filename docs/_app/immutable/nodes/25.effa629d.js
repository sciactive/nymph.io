import{S as De,i as Ie,s as Pe,R as xe,e as Te,a as h,k as s,q as a,y as Oe,F as Se,T as je,h as e,c as d,l as o,m as i,r as n,z as Ae,p as se,n as S,C as t,b as at,A as Je,D as qe,g as He,d as Le,B as Me}from"../chunks/index.d7cc8d8b.js";import{H as Ue,g as We}from"../chunks/github.df9008b1.js";import{t as Ye}from"../chunks/typescript.7dd1ec19.js";import{b as Ce}from"../chunks/paths.4334e024.js";function Re(ke){let b,j,K,r,N,T,nt,st,A,ot,it,J,rt,lt,C,q,ct,ht,dt,m,k,H,mt,pt,ut,D,L,yt,ft,gt,I,M,Et,wt,bt,P,U,vt,_t,$t,x,W,Nt,Tt,Ct,v,kt,Y,Dt,It,Pt,u,xt,R,Ot,St,z,jt,At,Jt,F,qt,Ht,Q,Lt,Mt,_,Ut,p,Wt,V,Yt,Rt,B,zt,Ft,G,Qt,Vt,X,y,f,Bt,Gt,g,Kt,Z;return _=new Ue({props:{language:Ye,code:`import { EntityUniqueConstraintError, type Nymph } from '@nymphjs/nymph';
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
        this.$data.user.$nymph = nymph;
      }
      if (this.$data.group) {
        this.$data.group.$nymph = nymph;
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
`}}),{c(){b=new xe(!1),j=Te(),K=h(),r=s("section"),N=s("header"),T=s("h1"),nt=a("Transactions"),st=h(),A=s("p"),ot=a(`In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.`),it=h(),J=s("p"),rt=a(`When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.`),lt=h(),C=s("p"),q=s("code"),ct=a("Nymph"),ht=a(" has the following methods for managing transactions."),dt=h(),m=s("ul"),k=s("li"),H=s("code"),mt=a("startTransaction"),pt=a(" - Start a named transaction."),ut=h(),D=s("li"),L=s("code"),yt=a("commit"),ft=a(" - Commit a named transaction."),gt=h(),I=s("li"),M=s("code"),Et=a("rollback"),wt=a(" - Rollback a named transaction."),bt=h(),P=s("li"),U=s("code"),vt=a("inTransaction"),_t=a(" - Check if Nymph is currently running within a transaction."),$t=h(),x=s("p"),W=s("code"),Nt=a("startTransaction"),Tt=a(` will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.`),Ct=h(),v=s("p"),kt=a(`The transaction instance of Nymph has its own set of classes. You can use
    its `),Y=s("code"),Dt=a("getEntityClass"),It=a(` method to get the proper classes for that instance
    of Nymph.`),Pt=h(),u=s("p"),xt=a(`When you start a new transaction, entities retrieved from that transaction's
    Nymph instance will have that instance within their static `),R=s("code"),Ot=a("nymph"),St=a(`
    property and instance `),z=s("code"),jt=a("$nymph"),At=a(` property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.`),Jt=h(),F=s("p"),qt=a(`Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.`),Ht=h(),Q=s("p"),Lt=a(`Here is an example of a class that uses a transaction to delete all of its
    children when it is deleted. If any of its children cannot be deleted, then
    the transaction is rolled back, meaning none of its children get deleted.`),Mt=h(),Oe(_.$$.fragment),Ut=h(),p=s("p"),Wt=a("The "),V=s("code"),Yt=a("$setNymph"),Rt=a(` method is used to make sure the entity and all
    referenced entities use the transactional Nymph instance. The
    `),B=s("code"),zt=a("tnymph"),Ft=a(` Nymph instance is used during the transaction, and the
    children are retrieved using the proper class with
    `),G=s("code"),Qt=a("tnymph.getEntityClass(Todo)"),Vt=a("."),X=h(),y=s("section"),f=s("a"),Bt=a("Previous: UIDs"),Gt=h(),g=s("a"),Kt=a("Next: Export and Import"),this.h()},l(c){const $=Se("svelte-10lzn9g",document.head);b=je($,!1),j=Te(),$.forEach(e),K=d(c),r=o(c,"SECTION",{});var l=i(r);N=o(l,"HEADER",{class:!0});var oe=i(N);T=o(oe,"H1",{style:!0});var ie=i(T);nt=n(ie,"Transactions"),ie.forEach(e),oe.forEach(e),st=d(l),A=o(l,"P",{});var re=i(A);ot=n(re,`In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.`),re.forEach(e),it=d(l),J=o(l,"P",{});var le=i(J);rt=n(le,`When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.`),le.forEach(e),lt=d(l),C=o(l,"P",{});var Xt=i(C);q=o(Xt,"CODE",{});var ce=i(q);ct=n(ce,"Nymph"),ce.forEach(e),ht=n(Xt," has the following methods for managing transactions."),Xt.forEach(e),dt=d(l),m=o(l,"UL",{});var E=i(m);k=o(E,"LI",{});var Zt=i(k);H=o(Zt,"CODE",{});var he=i(H);mt=n(he,"startTransaction"),he.forEach(e),pt=n(Zt," - Start a named transaction."),Zt.forEach(e),ut=d(E),D=o(E,"LI",{});var te=i(D);L=o(te,"CODE",{});var de=i(L);yt=n(de,"commit"),de.forEach(e),ft=n(te," - Commit a named transaction."),te.forEach(e),gt=d(E),I=o(E,"LI",{});var ee=i(I);M=o(ee,"CODE",{});var me=i(M);Et=n(me,"rollback"),me.forEach(e),wt=n(ee," - Rollback a named transaction."),ee.forEach(e),bt=d(E),P=o(E,"LI",{});var ae=i(P);U=o(ae,"CODE",{});var pe=i(U);vt=n(pe,"inTransaction"),pe.forEach(e),_t=n(ae," - Check if Nymph is currently running within a transaction."),ae.forEach(e),E.forEach(e),$t=d(l),x=o(l,"P",{});var ne=i(x);W=o(ne,"CODE",{});var ue=i(W);Nt=n(ue,"startTransaction"),ue.forEach(e),Tt=n(ne,` will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.`),ne.forEach(e),Ct=d(l),v=o(l,"P",{});var tt=i(v);kt=n(tt,`The transaction instance of Nymph has its own set of classes. You can use
    its `),Y=o(tt,"CODE",{});var ye=i(Y);Dt=n(ye,"getEntityClass"),ye.forEach(e),It=n(tt,` method to get the proper classes for that instance
    of Nymph.`),tt.forEach(e),Pt=d(l),u=o(l,"P",{});var O=i(u);xt=n(O,`When you start a new transaction, entities retrieved from that transaction's
    Nymph instance will have that instance within their static `),R=o(O,"CODE",{});var fe=i(R);Ot=n(fe,"nymph"),fe.forEach(e),St=n(O,`
    property and instance `),z=o(O,"CODE",{});var ge=i(z);jt=n(ge,"$nymph"),ge.forEach(e),At=n(O,` property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.`),O.forEach(e),Jt=d(l),F=o(l,"P",{});var Ee=i(F);qt=n(Ee,`Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.`),Ee.forEach(e),Ht=d(l),Q=o(l,"P",{});var we=i(Q);Lt=n(we,`Here is an example of a class that uses a transaction to delete all of its
    children when it is deleted. If any of its children cannot be deleted, then
    the transaction is rolled back, meaning none of its children get deleted.`),we.forEach(e),Mt=d(l),Ae(_.$$.fragment,l),Ut=d(l),p=o(l,"P",{});var w=i(p);Wt=n(w,"The "),V=o(w,"CODE",{});var be=i(V);Yt=n(be,"$setNymph"),be.forEach(e),Rt=n(w,` method is used to make sure the entity and all
    referenced entities use the transactional Nymph instance. The
    `),B=o(w,"CODE",{});var ve=i(B);zt=n(ve,"tnymph"),ve.forEach(e),Ft=n(w,` Nymph instance is used during the transaction, and the
    children are retrieved using the proper class with
    `),G=o(w,"CODE",{});var _e=i(G);Qt=n(_e,"tnymph.getEntityClass(Todo)"),_e.forEach(e),Vt=n(w,"."),w.forEach(e),l.forEach(e),X=d(c),y=o(c,"SECTION",{class:!0});var et=i(y);f=o(et,"A",{href:!0,class:!0,style:!0});var $e=i(f);Bt=n($e,"Previous: UIDs"),$e.forEach(e),Gt=d(et),g=o(et,"A",{href:!0,class:!0,style:!0});var Ne=i(g);Kt=n(Ne,"Next: Export and Import"),Ne.forEach(e),et.forEach(e),this.h()},h(){document.title="Transactions - User Guide - Nymph.js",b.a=j,se(T,"font-size","3em"),S(N,"class","major"),S(f,"href",Ce+"/user-guide/uids"),S(f,"class","button"),se(f,"margin",".5em"),S(g,"href",Ce+"/user-guide/export-and-import"),S(g,"class","button"),se(g,"margin",".5em"),S(y,"class","page-steps")},m(c,$){b.m(We,document.head),t(document.head,j),at(c,K,$),at(c,r,$),t(r,N),t(N,T),t(T,nt),t(r,st),t(r,A),t(A,ot),t(r,it),t(r,J),t(J,rt),t(r,lt),t(r,C),t(C,q),t(q,ct),t(C,ht),t(r,dt),t(r,m),t(m,k),t(k,H),t(H,mt),t(k,pt),t(m,ut),t(m,D),t(D,L),t(L,yt),t(D,ft),t(m,gt),t(m,I),t(I,M),t(M,Et),t(I,wt),t(m,bt),t(m,P),t(P,U),t(U,vt),t(P,_t),t(r,$t),t(r,x),t(x,W),t(W,Nt),t(x,Tt),t(r,Ct),t(r,v),t(v,kt),t(v,Y),t(Y,Dt),t(v,It),t(r,Pt),t(r,u),t(u,xt),t(u,R),t(R,Ot),t(u,St),t(u,z),t(z,jt),t(u,At),t(r,Jt),t(r,F),t(F,qt),t(r,Ht),t(r,Q),t(Q,Lt),t(r,Mt),Je(_,r,null),t(r,Ut),t(r,p),t(p,Wt),t(p,V),t(V,Yt),t(p,Rt),t(p,B),t(B,zt),t(p,Ft),t(p,G),t(G,Qt),t(p,Vt),at(c,X,$),at(c,y,$),t(y,f),t(f,Bt),t(y,Gt),t(y,g),t(g,Kt),Z=!0},p:qe,i(c){Z||(He(_.$$.fragment,c),Z=!0)},o(c){Le(_.$$.fragment,c),Z=!1},d(c){e(j),c&&b.d(),c&&e(K),c&&e(r),Me(_),c&&e(X),c&&e(y)}}}class Be extends De{constructor(b){super(),Ie(this,b,null,Re,Pe,{})}}export{Be as component};
