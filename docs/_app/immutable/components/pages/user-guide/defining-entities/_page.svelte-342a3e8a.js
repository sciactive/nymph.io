import{S as ga,i as Ea,s as wa,R as _a,e as la,a as p,k as n,q as t,w as ra,E as Ta,T as $a,h as s,c as m,l as o,m as i,r as a,x as da,p as M,n as E,C as e,b as ge,y as ca,B as Da,f as ha,t as pa,z as ma}from"../../../../chunks/index-8e853c83.js";import{H as ua,g as ba}from"../../../../chunks/github-07e092b5.js";import{t as ya}from"../../../../chunks/typescript-7dd1ec19.js";import{b as fa}from"../../../../chunks/paths-b4419565.js";function Na(va){let b,U,ce,l,J,V,Ee,we,N,_e,z,Te,$e,De,C,A,be,Ne,x,Ce,O,q,xe,Oe,j,je,u,Ie,W,Pe,Se,R,ke,Je,F,Ve,Ae,G,qe,He,Ye,v,Be,K,Me,Ue,L,ze,We,Q,Re,Fe,Ge,w,Ke,X,Le,Qe,Z,Xe,Ze,et,c,tt,ee,at,st,te,nt,ot,ae,it,lt,se,rt,dt,ne,ct,ht,pt,I,mt,oe,ut,yt,ft,h,vt,ie,gt,Et,le,wt,_t,P,Tt,$t,re,Dt,bt,de,Nt,Ct,he,H,_,Y,T,xt,Ot,S,$,jt,pe;return x=new ua({props:{language:ya,code:`import { Entity, Selector, nymphJoiProps } from '@nymphjs/nymph';
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

        name: Joi.string().trim(false).required(),
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
nymph.addEntityClass(Todo);`}}),j=new ua({props:{language:ya,code:`import { Entity } from '@nymphjs/client';

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
nymph.addEntityClass(Todo);`}}),{c(){b=new _a(!1),U=la(),ce=p(),l=n("section"),J=n("header"),V=n("h1"),Ee=t("Defining Entities"),we=p(),N=n("p"),_e=t("To create a new type of data object in Nymph, you extend the "),z=n("code"),Te=t("Entity"),$e=t(` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),De=p(),C=n("div"),A=n("div"),be=t("Extending Entity in Node.js"),Ne=p(),ra(x.$$.fragment),Ce=p(),O=n("div"),q=n("div"),xe=t("Extending Entity in the Client"),Oe=p(),ra(j.$$.fragment),je=p(),u=n("p"),Ie=t("In both cases, defaults are set in the constructor. In this case, the "),W=n("code"),Pe=t("done"),Se=t(`
    property is set to false and the `),R=n("code"),ke=t("name"),Je=t(` property is set to an
    empty string. You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),F=n("code"),Ve=t("this.$data"),Ae=t(`. The
    `),G=n("code"),qe=t("$data"),He=t(" part is not necessary outside of the entity's own methods."),Ye=p(),v=n("p"),Be=t(`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),K=n("code"),Me=t("this.$nymph"),Ue=t(` (or
    `),L=n("code"),ze=t("this.nymph"),We=t(` in static methods). Using this instance is
    `),Q=n("strong"),Re=t("especially important in Node.js"),Fe=t(` for Nymph transactions and Tilmeld
    authentication. These instances will know which user is logged in and add appropriate
    permission checks, and will maintain a persistent DB connection during a transaction.
    On the client, it is less important to use these instances, unless you run multiple
    instances of the Nymph client in your app.`),Ge=p(),w=n("p"),Ke=t("In Node.js, the etype is set to "),X=n("code"),Le=t('"todo"'),Qe=t(`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),Z=n("code"),Xe=t("Entity"),Ze=t(' class and the "entity" etype will be used.'),et=p(),c=n("p"),tt=t("The "),ee=n("code"),at=t("$clientEnabledMethods"),st=t(` property and the
    `),te=n("code"),nt=t("clientEnabledStaticMethods"),ot=t(`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),ae=n("code"),it=t("$serverCall"),lt=t(` and
    `),se=n("code"),rt=t("serverCallStatic"),dt=t(`. In the client class, the
    `),ne=n("code"),ct=t("return await this.$serverCall('archive', []);"),ht=t(` statement takes advantage
    of this feature.`),pt=p(),I=n("p"),mt=t("On each the Node.js class and the client class, the class name is set in the "),oe=n("code"),ut=t("class"),yt=t(` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),ft=p(),h=n("p"),vt=t("Finally, in Node.js, the "),ie=n("code"),gt=t("Todo"),Et=t(` class validates all of its data
    in the `),le=n("code"),wt=t("$save"),_t=t(` method using
    `),P=n("a"),Tt=t("Joi"),$t=t(`. Without this validation,
    a malicious user could send invalid data types or even megabytes worth of
    data in an entity. Any validation library should support validation in Nymph
    using the `),re=n("code"),Dt=t("$getValidatable"),bt=t(` method. The
    `),de=n("code"),Nt=t("$allowlistData"),Ct=t(" property will ensure no extra properties are set."),he=p(),H=n("section"),_=n("div"),Y=n("div"),T=n("a"),xt=t("Previous: Entity Class"),Ot=p(),S=n("div"),$=n("a"),jt=t("Next: UIDs"),this.h()},l(r){const k=Ta("svelte-1kddyis",document.head);b=$a(k,!1),U=la(),k.forEach(s),ce=m(r),l=o(r,"SECTION",{});var d=i(l);J=o(d,"HEADER",{class:!0});var It=i(J);V=o(It,"H1",{style:!0});var Pt=i(V);Ee=a(Pt,"Defining Entities"),Pt.forEach(s),It.forEach(s),we=m(d),N=o(d,"P",{});var me=i(N);_e=a(me,"To create a new type of data object in Nymph, you extend the "),z=o(me,"CODE",{});var St=i(z);Te=a(St,"Entity"),St.forEach(s),$e=a(me,` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),me.forEach(s),De=m(d),C=o(d,"DIV",{});var ue=i(C);A=o(ue,"DIV",{style:!0});var kt=i(A);be=a(kt,"Extending Entity in Node.js"),kt.forEach(s),Ne=m(ue),da(x.$$.fragment,ue),ue.forEach(s),Ce=m(d),O=o(d,"DIV",{});var ye=i(O);q=o(ye,"DIV",{style:!0});var Jt=i(q);xe=a(Jt,"Extending Entity in the Client"),Jt.forEach(s),Oe=m(ye),da(j.$$.fragment,ye),ye.forEach(s),je=m(d),u=o(d,"P",{});var g=i(u);Ie=a(g,"In both cases, defaults are set in the constructor. In this case, the "),W=o(g,"CODE",{});var Vt=i(W);Pe=a(Vt,"done"),Vt.forEach(s),Se=a(g,`
    property is set to false and the `),R=o(g,"CODE",{});var At=i(R);ke=a(At,"name"),At.forEach(s),Je=a(g,` property is set to an
    empty string. You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),F=o(g,"CODE",{});var qt=i(F);Ve=a(qt,"this.$data"),qt.forEach(s),Ae=a(g,`. The
    `),G=o(g,"CODE",{});var Ht=i(G);qe=a(Ht,"$data"),Ht.forEach(s),He=a(g," part is not necessary outside of the entity's own methods."),g.forEach(s),Ye=m(d),v=o(d,"P",{});var D=i(v);Be=a(D,`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),K=o(D,"CODE",{});var Yt=i(K);Me=a(Yt,"this.$nymph"),Yt.forEach(s),Ue=a(D,` (or
    `),L=o(D,"CODE",{});var Bt=i(L);ze=a(Bt,"this.nymph"),Bt.forEach(s),We=a(D,` in static methods). Using this instance is
    `),Q=o(D,"STRONG",{});var Mt=i(Q);Re=a(Mt,"especially important in Node.js"),Mt.forEach(s),Fe=a(D,` for Nymph transactions and Tilmeld
    authentication. These instances will know which user is logged in and add appropriate
    permission checks, and will maintain a persistent DB connection during a transaction.
    On the client, it is less important to use these instances, unless you run multiple
    instances of the Nymph client in your app.`),D.forEach(s),Ge=m(d),w=o(d,"P",{});var B=i(w);Ke=a(B,"In Node.js, the etype is set to "),X=o(B,"CODE",{});var Ut=i(X);Le=a(Ut,'"todo"'),Ut.forEach(s),Qe=a(B,`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),Z=o(B,"CODE",{});var zt=i(Z);Xe=a(zt,"Entity"),zt.forEach(s),Ze=a(B,' class and the "entity" etype will be used.'),B.forEach(s),et=m(d),c=o(d,"P",{});var y=i(c);tt=a(y,"The "),ee=o(y,"CODE",{});var Wt=i(ee);at=a(Wt,"$clientEnabledMethods"),Wt.forEach(s),st=a(y,` property and the
    `),te=o(y,"CODE",{});var Rt=i(te);nt=a(Rt,"clientEnabledStaticMethods"),Rt.forEach(s),ot=a(y,`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),ae=o(y,"CODE",{});var Ft=i(ae);it=a(Ft,"$serverCall"),Ft.forEach(s),lt=a(y,` and
    `),se=o(y,"CODE",{});var Gt=i(se);rt=a(Gt,"serverCallStatic"),Gt.forEach(s),dt=a(y,`. In the client class, the
    `),ne=o(y,"CODE",{});var Kt=i(ne);ct=a(Kt,"return await this.$serverCall('archive', []);"),Kt.forEach(s),ht=a(y,` statement takes advantage
    of this feature.`),y.forEach(s),pt=m(d),I=o(d,"P",{});var fe=i(I);mt=a(fe,"On each the Node.js class and the client class, the class name is set in the "),oe=o(fe,"CODE",{});var Lt=i(oe);ut=a(Lt,"class"),Lt.forEach(s),yt=a(fe,` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),fe.forEach(s),ft=m(d),h=o(d,"P",{});var f=i(h);vt=a(f,"Finally, in Node.js, the "),ie=o(f,"CODE",{});var Qt=i(ie);gt=a(Qt,"Todo"),Qt.forEach(s),Et=a(f,` class validates all of its data
    in the `),le=o(f,"CODE",{});var Xt=i(le);wt=a(Xt,"$save"),Xt.forEach(s),_t=a(f,` method using
    `),P=o(f,"A",{href:!0,target:!0});var Zt=i(P);Tt=a(Zt,"Joi"),Zt.forEach(s),$t=a(f,`. Without this validation,
    a malicious user could send invalid data types or even megabytes worth of
    data in an entity. Any validation library should support validation in Nymph
    using the `),re=o(f,"CODE",{});var ea=i(re);Dt=a(ea,"$getValidatable"),ea.forEach(s),bt=a(f,` method. The
    `),de=o(f,"CODE",{});var ta=i(de);Nt=a(ta,"$allowlistData"),ta.forEach(s),Ct=a(f," property will ensure no extra properties are set."),f.forEach(s),d.forEach(s),he=m(r),H=o(r,"SECTION",{});var aa=i(H);_=o(aa,"DIV",{class:!0});var ve=i(_);Y=o(ve,"DIV",{class:!0});var sa=i(Y);T=o(sa,"A",{href:!0,class:!0,style:!0});var na=i(T);xt=a(na,"Previous: Entity Class"),na.forEach(s),sa.forEach(s),Ot=m(ve),S=o(ve,"DIV",{class:!0,style:!0});var oa=i(S);$=o(oa,"A",{href:!0,class:!0,style:!0});var ia=i($);jt=a(ia,"Next: UIDs"),ia.forEach(s),oa.forEach(s),ve.forEach(s),aa.forEach(s),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",b.a=U,M(V,"font-size","3em"),E(J,"class","major"),M(A,"text-align","end"),M(q,"text-align","end"),E(P,"href","https://joi.dev/"),E(P,"target","_blank"),E(T,"href",fa+"/user-guide/entity-class"),E(T,"class","button"),M(T,"margin",".5em"),E(Y,"class","col-6 col-12-small"),E($,"href",fa+"/user-guide/uids"),E($,"class","button"),M($,"margin",".5em"),E(S,"class","col-6 col-12-small"),M(S,"text-align","end"),E(_,"class","row")},m(r,k){b.m(ba,document.head),e(document.head,U),ge(r,ce,k),ge(r,l,k),e(l,J),e(J,V),e(V,Ee),e(l,we),e(l,N),e(N,_e),e(N,z),e(z,Te),e(N,$e),e(l,De),e(l,C),e(C,A),e(A,be),e(C,Ne),ca(x,C,null),e(l,Ce),e(l,O),e(O,q),e(q,xe),e(O,Oe),ca(j,O,null),e(l,je),e(l,u),e(u,Ie),e(u,W),e(W,Pe),e(u,Se),e(u,R),e(R,ke),e(u,Je),e(u,F),e(F,Ve),e(u,Ae),e(u,G),e(G,qe),e(u,He),e(l,Ye),e(l,v),e(v,Be),e(v,K),e(K,Me),e(v,Ue),e(v,L),e(L,ze),e(v,We),e(v,Q),e(Q,Re),e(v,Fe),e(l,Ge),e(l,w),e(w,Ke),e(w,X),e(X,Le),e(w,Qe),e(w,Z),e(Z,Xe),e(w,Ze),e(l,et),e(l,c),e(c,tt),e(c,ee),e(ee,at),e(c,st),e(c,te),e(te,nt),e(c,ot),e(c,ae),e(ae,it),e(c,lt),e(c,se),e(se,rt),e(c,dt),e(c,ne),e(ne,ct),e(c,ht),e(l,pt),e(l,I),e(I,mt),e(I,oe),e(oe,ut),e(I,yt),e(l,ft),e(l,h),e(h,vt),e(h,ie),e(ie,gt),e(h,Et),e(h,le),e(le,wt),e(h,_t),e(h,P),e(P,Tt),e(h,$t),e(h,re),e(re,Dt),e(h,bt),e(h,de),e(de,Nt),e(h,Ct),ge(r,he,k),ge(r,H,k),e(H,_),e(_,Y),e(Y,T),e(T,xt),e(_,Ot),e(_,S),e(S,$),e($,jt),pe=!0},p:Da,i(r){pe||(ha(x.$$.fragment,r),ha(j.$$.fragment,r),pe=!0)},o(r){pa(x.$$.fragment,r),pa(j.$$.fragment,r),pe=!1},d(r){s(U),r&&b.d(),r&&s(ce),r&&s(l),ma(x),ma(j),r&&s(he),r&&s(H)}}}class Ia extends ga{constructor(b){super(),Ea(this,b,null,Na,wa,{})}}export{Ia as default};
