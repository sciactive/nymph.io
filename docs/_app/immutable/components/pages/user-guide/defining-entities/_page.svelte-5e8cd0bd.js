import{S as ua,i as ya,s as fa,R as va,e as oa,a as p,k as s,q as t,w as sa,E as ga,T as Ea,h as o,c as m,l as n,m as i,r as a,x as na,p as M,n as v,C as e,b as ve,y as ia,B as wa,f as ra,t as la,z as da}from"../../../../chunks/index-8e853c83.js";import{H as ca,g as Ta}from"../../../../chunks/github-07e092b5.js";import{t as ha}from"../../../../chunks/typescript-7dd1ec19.js";import{b as pa}from"../../../../chunks/paths-b4419565.js";function _a(ma){let b,z,de,r,k,J,ge,Ee,C,we,R,Te,_e,$e,N,V,De,be,x,Ce,j,A,Ne,xe,I,je,u,Ie,W,Oe,Pe,U,Se,ke,F,Je,Ve,G,Ae,qe,Be,E,He,K,Ye,Me,L,ze,Re,We,w,Ue,Q,Fe,Ge,X,Ke,Le,Qe,c,Xe,Z,Ze,et,ee,tt,at,te,ot,st,ae,nt,it,oe,rt,lt,dt,O,ct,se,ht,pt,mt,h,ut,ne,yt,ft,ie,vt,gt,T,Et,wt,re,Tt,_t,le,$t,Dt,ce,q,_,B,$,bt,Ct,P,D,Nt,he;return x=new ca({props:{language:ha,code:`import { Entity, Selector, nymphJoiProps } from '@nymphjs/nymph';
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

  static factorySync(guid?: string): Todo & TodoData {
    return super.factorySync(guid) as Todo & TodoData;
  }

  constructor(guid?: string) {
    super(guid);

    if (this.guid == null) {
      this.$data.name = '';
      this.$data.done = false;
    }
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
          class: this.constructor as typeof Todo,
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
const Todo = nymph.addEntityClass(TodoClass);`}}),I=new ca({props:{language:ha,code:`import { Entity } from '@nymphjs/client';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  // The name of the server class
  public static class = 'Todo';

  constructor(guid?: string) {
    super(guid);

    if (guid == null) {
      this.$data.name = '';
      this.$data.done = false;
    }
  }

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(guid?: string): Todo & TodoData {
    return super.factorySync(guid) as Todo & TodoData;
  }

  async $archive(): Promise<boolean> {
    return await this.$serverCall('$archive', []);
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}}),{c(){b=new va(!1),z=oa(),de=p(),r=s("section"),k=s("header"),J=s("h1"),ge=t("Defining Entities"),Ee=p(),C=s("p"),we=t("To create a new type of data object in Nymph, you extend the "),R=s("code"),Te=t("Entity"),_e=t(` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),$e=p(),N=s("div"),V=s("div"),De=t("Extending Entity in Node.js"),be=p(),sa(x.$$.fragment),Ce=p(),j=s("div"),A=s("div"),Ne=t("Extending Entity in the Client"),xe=p(),sa(I.$$.fragment),je=p(),u=s("p"),Ie=t("In both cases, defaults are set in the constructor (the "),W=s("code"),Oe=t("done"),Pe=t(`
    property is set to false and the `),U=s("code"),Se=t("name"),ke=t(` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),F=s("code"),Je=t("this.$data"),Ve=t(`. The
    `),G=s("code"),Ae=t("$data"),qe=t(" part is not necessary outside of the entity's own methods."),Be=p(),E=s("p"),He=t(`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),K=s("code"),Ye=t("this.$nymph"),Me=t(` (or
    `),L=s("code"),ze=t("this.nymph"),Re=t(` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client, these
    instances will know how to communicate with the configured REST server. Basically,
    you have to use these instances.`),We=p(),w=s("p"),Ue=t("In Node.js, the etype is set to "),Q=s("code"),Fe=t('"todo"'),Ge=t(`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),X=s("code"),Ke=t("Entity"),Le=t(' class and the "entity" etype will be used.'),Qe=p(),c=s("p"),Xe=t("The "),Z=s("code"),Ze=t("$clientEnabledMethods"),et=t(` property and the
    `),ee=s("code"),tt=t("clientEnabledStaticMethods"),at=t(`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),te=s("code"),ot=t("$serverCall"),st=t(` and
    `),ae=s("code"),nt=t("serverCallStatic"),it=t(`. In the client class, the
    `),oe=s("code"),rt=t("return await this.$serverCall('$archive', []);"),lt=t(` statement takes advantage
    of this feature.`),dt=p(),O=s("p"),ct=t("On both the Node.js class and the client class, the class name is set in the "),se=s("code"),ht=t("class"),pt=t(` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),mt=p(),h=s("p"),ut=t("Finally, in Node.js, the "),ne=s("code"),yt=t("Todo"),ft=t(` class validates all of its data
    in the `),ie=s("code"),vt=t("$save"),gt=t(` method using
    `),T=s("a"),Et=t("Joi"),wt=t(`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),re=s("code"),Tt=t("$getValidatable"),_t=t(` method. The
    `),le=s("code"),$t=t("$allowlistData"),Dt=t(" property will ensure no extra properties are set."),ce=p(),q=s("section"),_=s("div"),B=s("div"),$=s("a"),bt=t("Previous: Entity Class"),Ct=p(),P=s("div"),D=s("a"),Nt=t("Next: UIDs"),this.h()},l(l){const S=ga("svelte-1kddyis",document.head);b=Ea(S,!1),z=oa(),S.forEach(o),de=m(l),r=n(l,"SECTION",{});var d=i(r);k=n(d,"HEADER",{class:!0});var xt=i(k);J=n(xt,"H1",{style:!0});var jt=i(J);ge=a(jt,"Defining Entities"),jt.forEach(o),xt.forEach(o),Ee=m(d),C=n(d,"P",{});var pe=i(C);we=a(pe,"To create a new type of data object in Nymph, you extend the "),R=n(pe,"CODE",{});var It=i(R);Te=a(It,"Entity"),It.forEach(o),_e=a(pe,` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),pe.forEach(o),$e=m(d),N=n(d,"DIV",{});var me=i(N);V=n(me,"DIV",{style:!0});var Ot=i(V);De=a(Ot,"Extending Entity in Node.js"),Ot.forEach(o),be=m(me),na(x.$$.fragment,me),me.forEach(o),Ce=m(d),j=n(d,"DIV",{});var ue=i(j);A=n(ue,"DIV",{style:!0});var Pt=i(A);Ne=a(Pt,"Extending Entity in the Client"),Pt.forEach(o),xe=m(ue),na(I.$$.fragment,ue),ue.forEach(o),je=m(d),u=n(d,"P",{});var g=i(u);Ie=a(g,"In both cases, defaults are set in the constructor (the "),W=n(g,"CODE",{});var St=i(W);Oe=a(St,"done"),St.forEach(o),Pe=a(g,`
    property is set to false and the `),U=n(g,"CODE",{});var kt=i(U);Se=a(kt,"name"),kt.forEach(o),ke=a(g,` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),F=n(g,"CODE",{});var Jt=i(F);Je=a(Jt,"this.$data"),Jt.forEach(o),Ve=a(g,`. The
    `),G=n(g,"CODE",{});var Vt=i(G);Ae=a(Vt,"$data"),Vt.forEach(o),qe=a(g," part is not necessary outside of the entity's own methods."),g.forEach(o),Be=m(d),E=n(d,"P",{});var H=i(E);He=a(H,`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),K=n(H,"CODE",{});var At=i(K);Ye=a(At,"this.$nymph"),At.forEach(o),Me=a(H,` (or
    `),L=n(H,"CODE",{});var qt=i(L);ze=a(qt,"this.nymph"),qt.forEach(o),Re=a(H,` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client, these
    instances will know how to communicate with the configured REST server. Basically,
    you have to use these instances.`),H.forEach(o),We=m(d),w=n(d,"P",{});var Y=i(w);Ue=a(Y,"In Node.js, the etype is set to "),Q=n(Y,"CODE",{});var Bt=i(Q);Fe=a(Bt,'"todo"'),Bt.forEach(o),Ge=a(Y,`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),X=n(Y,"CODE",{});var Ht=i(X);Ke=a(Ht,"Entity"),Ht.forEach(o),Le=a(Y,' class and the "entity" etype will be used.'),Y.forEach(o),Qe=m(d),c=n(d,"P",{});var y=i(c);Xe=a(y,"The "),Z=n(y,"CODE",{});var Yt=i(Z);Ze=a(Yt,"$clientEnabledMethods"),Yt.forEach(o),et=a(y,` property and the
    `),ee=n(y,"CODE",{});var Mt=i(ee);tt=a(Mt,"clientEnabledStaticMethods"),Mt.forEach(o),at=a(y,`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),te=n(y,"CODE",{});var zt=i(te);ot=a(zt,"$serverCall"),zt.forEach(o),st=a(y,` and
    `),ae=n(y,"CODE",{});var Rt=i(ae);nt=a(Rt,"serverCallStatic"),Rt.forEach(o),it=a(y,`. In the client class, the
    `),oe=n(y,"CODE",{});var Wt=i(oe);rt=a(Wt,"return await this.$serverCall('$archive', []);"),Wt.forEach(o),lt=a(y,` statement takes advantage
    of this feature.`),y.forEach(o),dt=m(d),O=n(d,"P",{});var ye=i(O);ct=a(ye,"On both the Node.js class and the client class, the class name is set in the "),se=n(ye,"CODE",{});var Ut=i(se);ht=a(Ut,"class"),Ut.forEach(o),pt=a(ye,` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),ye.forEach(o),mt=m(d),h=n(d,"P",{});var f=i(h);ut=a(f,"Finally, in Node.js, the "),ne=n(f,"CODE",{});var Ft=i(ne);yt=a(Ft,"Todo"),Ft.forEach(o),ft=a(f,` class validates all of its data
    in the `),ie=n(f,"CODE",{});var Gt=i(ie);vt=a(Gt,"$save"),Gt.forEach(o),gt=a(f,` method using
    `),T=n(f,"A",{href:!0,target:!0,rel:!0});var Kt=i(T);Et=a(Kt,"Joi"),Kt.forEach(o),wt=a(f,`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),re=n(f,"CODE",{});var Lt=i(re);Tt=a(Lt,"$getValidatable"),Lt.forEach(o),_t=a(f,` method. The
    `),le=n(f,"CODE",{});var Qt=i(le);$t=a(Qt,"$allowlistData"),Qt.forEach(o),Dt=a(f," property will ensure no extra properties are set."),f.forEach(o),d.forEach(o),ce=m(l),q=n(l,"SECTION",{});var Xt=i(q);_=n(Xt,"DIV",{class:!0});var fe=i(_);B=n(fe,"DIV",{class:!0});var Zt=i(B);$=n(Zt,"A",{href:!0,class:!0,style:!0});var ea=i($);bt=a(ea,"Previous: Entity Class"),ea.forEach(o),Zt.forEach(o),Ct=m(fe),P=n(fe,"DIV",{class:!0,style:!0});var ta=i(P);D=n(ta,"A",{href:!0,class:!0,style:!0});var aa=i(D);Nt=a(aa,"Next: UIDs"),aa.forEach(o),ta.forEach(o),fe.forEach(o),Xt.forEach(o),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",b.a=z,M(J,"font-size","3em"),v(k,"class","major"),M(V,"text-align","end"),M(A,"text-align","end"),v(T,"href","https://joi.dev/"),v(T,"target","_blank"),v(T,"rel","noreferrer"),v($,"href",pa+"/user-guide/entity-class"),v($,"class","button"),M($,"margin",".5em"),v(B,"class","col-6 col-12-small"),v(D,"href",pa+"/user-guide/uids"),v(D,"class","button"),M(D,"margin",".5em"),v(P,"class","col-6 col-12-small"),M(P,"text-align","end"),v(_,"class","row")},m(l,S){b.m(Ta,document.head),e(document.head,z),ve(l,de,S),ve(l,r,S),e(r,k),e(k,J),e(J,ge),e(r,Ee),e(r,C),e(C,we),e(C,R),e(R,Te),e(C,_e),e(r,$e),e(r,N),e(N,V),e(V,De),e(N,be),ia(x,N,null),e(r,Ce),e(r,j),e(j,A),e(A,Ne),e(j,xe),ia(I,j,null),e(r,je),e(r,u),e(u,Ie),e(u,W),e(W,Oe),e(u,Pe),e(u,U),e(U,Se),e(u,ke),e(u,F),e(F,Je),e(u,Ve),e(u,G),e(G,Ae),e(u,qe),e(r,Be),e(r,E),e(E,He),e(E,K),e(K,Ye),e(E,Me),e(E,L),e(L,ze),e(E,Re),e(r,We),e(r,w),e(w,Ue),e(w,Q),e(Q,Fe),e(w,Ge),e(w,X),e(X,Ke),e(w,Le),e(r,Qe),e(r,c),e(c,Xe),e(c,Z),e(Z,Ze),e(c,et),e(c,ee),e(ee,tt),e(c,at),e(c,te),e(te,ot),e(c,st),e(c,ae),e(ae,nt),e(c,it),e(c,oe),e(oe,rt),e(c,lt),e(r,dt),e(r,O),e(O,ct),e(O,se),e(se,ht),e(O,pt),e(r,mt),e(r,h),e(h,ut),e(h,ne),e(ne,yt),e(h,ft),e(h,ie),e(ie,vt),e(h,gt),e(h,T),e(T,Et),e(h,wt),e(h,re),e(re,Tt),e(h,_t),e(h,le),e(le,$t),e(h,Dt),ve(l,ce,S),ve(l,q,S),e(q,_),e(_,B),e(B,$),e($,bt),e(_,Ct),e(_,P),e(P,D),e(D,Nt),he=!0},p:wa,i(l){he||(ra(x.$$.fragment,l),ra(I.$$.fragment,l),he=!0)},o(l){la(x.$$.fragment,l),la(I.$$.fragment,l),he=!1},d(l){o(z),l&&b.d(),l&&o(de),l&&o(r),da(x),da(I),l&&o(ce),l&&o(q)}}}class Na extends ua{constructor(b){super(),ya(this,b,null,_a,fa,{})}}export{Na as default};
