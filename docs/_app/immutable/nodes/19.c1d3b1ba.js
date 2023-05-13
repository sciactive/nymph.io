import{S as la,i as da,s as ca,R as ha,e as Qt,a as p,k as s,q as t,y as Xt,F as pa,T as ma,h as o,c as m,l as n,m as i,r as a,z as Zt,p as ne,n as T,C as e,b as ue,A as ea,D as ua,g as ta,d as aa,B as oa}from"../chunks/index.d7cc8d8b.js";import{H as sa,g as ya}from"../chunks/github.df9008b1.js";import{t as na}from"../chunks/typescript.7dd1ec19.js";import{b as ia}from"../chunks/paths.3059cfc3.js";function fa(ra){let b,B,ie,r,S,k,ye,fe,C,ge,H,ve,Ee,we,N,J,Te,_e,x,$e,j,A,De,be,O,Ce,u,Ne,Y,xe,je,M,Oe,Ie,z,Pe,Se,R,ke,Je,Ae,v,Ve,W,qe,Be,F,He,Ye,Me,E,ze,U,Re,We,G,Fe,Ue,Ge,c,Ke,K,Le,Qe,L,Xe,Ze,Q,et,tt,X,at,ot,Z,st,nt,it,I,rt,ee,lt,dt,ct,h,ht,te,pt,mt,ae,ut,yt,_,ft,gt,oe,vt,Et,se,wt,Tt,re,w,$,_t,$t,D,Dt,le;return x=new sa({props:{language:na,code:`import { Entity, Selector, nymphJoiProps } from '@nymphjs/nymph';
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
const Todo = nymph.addEntityClass(TodoClass);`}}),O=new sa({props:{language:na,code:`import { Entity } from '@nymphjs/client';

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
const Todo = nymph.addEntityClass(TodoClass);`}}),{c(){b=new ha(!1),B=Qt(),ie=p(),r=s("section"),S=s("header"),k=s("h1"),ye=t("Defining Entities"),fe=p(),C=s("p"),ge=t("To create a new type of data object in Nymph, you extend the "),H=s("code"),ve=t("Entity"),Ee=t(` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),we=p(),N=s("div"),J=s("div"),Te=t("Extending Entity in Node.js"),_e=p(),Xt(x.$$.fragment),$e=p(),j=s("div"),A=s("div"),De=t("Extending Entity in the Client"),be=p(),Xt(O.$$.fragment),Ce=p(),u=s("p"),Ne=t("In both cases, defaults are set in the constructor (the "),Y=s("code"),xe=t("done"),je=t(`
    property is set to false and the `),M=s("code"),Oe=t("name"),Ie=t(` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),z=s("code"),Pe=t("this.$data"),Se=t(`. The
    `),R=s("code"),ke=t("$data"),Je=t(" part is not necessary outside of the entity's own methods."),Ae=p(),v=s("p"),Ve=t(`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),W=s("code"),qe=t("this.$nymph"),Be=t(` (or
    `),F=s("code"),He=t("this.nymph"),Ye=t(` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client, these
    instances will know how to communicate with the configured REST server. Basically,
    you have to use these instances.`),Me=p(),E=s("p"),ze=t("In Node.js, the etype is set to "),U=s("code"),Re=t('"todo"'),We=t(`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),G=s("code"),Fe=t("Entity"),Ue=t(' class and the "entity" etype will be used.'),Ge=p(),c=s("p"),Ke=t("The "),K=s("code"),Le=t("$clientEnabledMethods"),Qe=t(` property and the
    `),L=s("code"),Xe=t("clientEnabledStaticMethods"),Ze=t(`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),Q=s("code"),et=t("$serverCall"),tt=t(` and
    `),X=s("code"),at=t("serverCallStatic"),ot=t(`. In the client class, the
    `),Z=s("code"),st=t("return await this.$serverCall('$archive', []);"),nt=t(` statement takes advantage
    of this feature.`),it=p(),I=s("p"),rt=t("On both the Node.js class and the client class, the class name is set in the "),ee=s("code"),lt=t("class"),dt=t(` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),ct=p(),h=s("p"),ht=t("Finally, in Node.js, the "),te=s("code"),pt=t("Todo"),mt=t(` class validates all of its data
    in the `),ae=s("code"),ut=t("$save"),yt=t(` method using
    `),_=s("a"),ft=t("Joi"),gt=t(`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),oe=s("code"),vt=t("$getValidatable"),Et=t(` method. The
    `),se=s("code"),wt=t("$allowlistData"),Tt=t(" property will ensure no extra properties are set."),re=p(),w=s("section"),$=s("a"),_t=t("Previous: Entity Class"),$t=p(),D=s("a"),Dt=t("Next: UIDs"),this.h()},l(l){const P=pa("svelte-1kddyis",document.head);b=ma(P,!1),B=Qt(),P.forEach(o),ie=m(l),r=n(l,"SECTION",{});var d=i(r);S=n(d,"HEADER",{class:!0});var bt=i(S);k=n(bt,"H1",{style:!0});var Ct=i(k);ye=a(Ct,"Defining Entities"),Ct.forEach(o),bt.forEach(o),fe=m(d),C=n(d,"P",{});var de=i(C);ge=a(de,"To create a new type of data object in Nymph, you extend the "),H=n(de,"CODE",{});var Nt=i(H);ve=a(Nt,"Entity"),Nt.forEach(o),Ee=a(de,` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),de.forEach(o),we=m(d),N=n(d,"DIV",{});var ce=i(N);J=n(ce,"DIV",{style:!0});var xt=i(J);Te=a(xt,"Extending Entity in Node.js"),xt.forEach(o),_e=m(ce),Zt(x.$$.fragment,ce),ce.forEach(o),$e=m(d),j=n(d,"DIV",{});var he=i(j);A=n(he,"DIV",{style:!0});var jt=i(A);De=a(jt,"Extending Entity in the Client"),jt.forEach(o),be=m(he),Zt(O.$$.fragment,he),he.forEach(o),Ce=m(d),u=n(d,"P",{});var g=i(u);Ne=a(g,"In both cases, defaults are set in the constructor (the "),Y=n(g,"CODE",{});var Ot=i(Y);xe=a(Ot,"done"),Ot.forEach(o),je=a(g,`
    property is set to false and the `),M=n(g,"CODE",{});var It=i(M);Oe=a(It,"name"),It.forEach(o),Ie=a(g,` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),z=n(g,"CODE",{});var Pt=i(z);Pe=a(Pt,"this.$data"),Pt.forEach(o),Se=a(g,`. The
    `),R=n(g,"CODE",{});var St=i(R);ke=a(St,"$data"),St.forEach(o),Je=a(g," part is not necessary outside of the entity's own methods."),g.forEach(o),Ae=m(d),v=n(d,"P",{});var V=i(v);Ve=a(V,`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),W=n(V,"CODE",{});var kt=i(W);qe=a(kt,"this.$nymph"),kt.forEach(o),Be=a(V,` (or
    `),F=n(V,"CODE",{});var Jt=i(F);He=a(Jt,"this.nymph"),Jt.forEach(o),Ye=a(V,` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client, these
    instances will know how to communicate with the configured REST server. Basically,
    you have to use these instances.`),V.forEach(o),Me=m(d),E=n(d,"P",{});var q=i(E);ze=a(q,"In Node.js, the etype is set to "),U=n(q,"CODE",{});var At=i(U);Re=a(At,'"todo"'),At.forEach(o),We=a(q,`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),G=n(q,"CODE",{});var Vt=i(G);Fe=a(Vt,"Entity"),Vt.forEach(o),Ue=a(q,' class and the "entity" etype will be used.'),q.forEach(o),Ge=m(d),c=n(d,"P",{});var y=i(c);Ke=a(y,"The "),K=n(y,"CODE",{});var qt=i(K);Le=a(qt,"$clientEnabledMethods"),qt.forEach(o),Qe=a(y,` property and the
    `),L=n(y,"CODE",{});var Bt=i(L);Xe=a(Bt,"clientEnabledStaticMethods"),Bt.forEach(o),Ze=a(y,`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),Q=n(y,"CODE",{});var Ht=i(Q);et=a(Ht,"$serverCall"),Ht.forEach(o),tt=a(y,` and
    `),X=n(y,"CODE",{});var Yt=i(X);at=a(Yt,"serverCallStatic"),Yt.forEach(o),ot=a(y,`. In the client class, the
    `),Z=n(y,"CODE",{});var Mt=i(Z);st=a(Mt,"return await this.$serverCall('$archive', []);"),Mt.forEach(o),nt=a(y,` statement takes advantage
    of this feature.`),y.forEach(o),it=m(d),I=n(d,"P",{});var pe=i(I);rt=a(pe,"On both the Node.js class and the client class, the class name is set in the "),ee=n(pe,"CODE",{});var zt=i(ee);lt=a(zt,"class"),zt.forEach(o),dt=a(pe,` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),pe.forEach(o),ct=m(d),h=n(d,"P",{});var f=i(h);ht=a(f,"Finally, in Node.js, the "),te=n(f,"CODE",{});var Rt=i(te);pt=a(Rt,"Todo"),Rt.forEach(o),mt=a(f,` class validates all of its data
    in the `),ae=n(f,"CODE",{});var Wt=i(ae);ut=a(Wt,"$save"),Wt.forEach(o),yt=a(f,` method using
    `),_=n(f,"A",{href:!0,target:!0,rel:!0});var Ft=i(_);ft=a(Ft,"Joi"),Ft.forEach(o),gt=a(f,`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),oe=n(f,"CODE",{});var Ut=i(oe);vt=a(Ut,"$getValidatable"),Ut.forEach(o),Et=a(f,` method. The
    `),se=n(f,"CODE",{});var Gt=i(se);wt=a(Gt,"$allowlistData"),Gt.forEach(o),Tt=a(f," property will ensure no extra properties are set."),f.forEach(o),d.forEach(o),re=m(l),w=n(l,"SECTION",{class:!0});var me=i(w);$=n(me,"A",{href:!0,class:!0,style:!0});var Kt=i($);_t=a(Kt,"Previous: Entity Class"),Kt.forEach(o),$t=m(me),D=n(me,"A",{href:!0,class:!0,style:!0});var Lt=i(D);Dt=a(Lt,"Next: UIDs"),Lt.forEach(o),me.forEach(o),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",b.a=B,ne(k,"font-size","3em"),T(S,"class","major"),ne(J,"text-align","end"),ne(A,"text-align","end"),T(_,"href","https://joi.dev/"),T(_,"target","_blank"),T(_,"rel","noreferrer"),T($,"href",ia+"/user-guide/entity-class"),T($,"class","button"),ne($,"margin",".5em"),T(D,"href",ia+"/user-guide/uids"),T(D,"class","button"),ne(D,"margin",".5em"),T(w,"class","page-steps")},m(l,P){b.m(ya,document.head),e(document.head,B),ue(l,ie,P),ue(l,r,P),e(r,S),e(S,k),e(k,ye),e(r,fe),e(r,C),e(C,ge),e(C,H),e(H,ve),e(C,Ee),e(r,we),e(r,N),e(N,J),e(J,Te),e(N,_e),ea(x,N,null),e(r,$e),e(r,j),e(j,A),e(A,De),e(j,be),ea(O,j,null),e(r,Ce),e(r,u),e(u,Ne),e(u,Y),e(Y,xe),e(u,je),e(u,M),e(M,Oe),e(u,Ie),e(u,z),e(z,Pe),e(u,Se),e(u,R),e(R,ke),e(u,Je),e(r,Ae),e(r,v),e(v,Ve),e(v,W),e(W,qe),e(v,Be),e(v,F),e(F,He),e(v,Ye),e(r,Me),e(r,E),e(E,ze),e(E,U),e(U,Re),e(E,We),e(E,G),e(G,Fe),e(E,Ue),e(r,Ge),e(r,c),e(c,Ke),e(c,K),e(K,Le),e(c,Qe),e(c,L),e(L,Xe),e(c,Ze),e(c,Q),e(Q,et),e(c,tt),e(c,X),e(X,at),e(c,ot),e(c,Z),e(Z,st),e(c,nt),e(r,it),e(r,I),e(I,rt),e(I,ee),e(ee,lt),e(I,dt),e(r,ct),e(r,h),e(h,ht),e(h,te),e(te,pt),e(h,mt),e(h,ae),e(ae,ut),e(h,yt),e(h,_),e(_,ft),e(h,gt),e(h,oe),e(oe,vt),e(h,Et),e(h,se),e(se,wt),e(h,Tt),ue(l,re,P),ue(l,w,P),e(w,$),e($,_t),e(w,$t),e(w,D),e(D,Dt),le=!0},p:ua,i(l){le||(ta(x.$$.fragment,l),ta(O.$$.fragment,l),le=!0)},o(l){aa(x.$$.fragment,l),aa(O.$$.fragment,l),le=!1},d(l){o(B),l&&b.d(),l&&o(ie),l&&o(r),oa(x),oa(O),l&&o(re),l&&o(w)}}}class Ta extends la{constructor(b){super(),da(this,b,null,fa,ca,{})}}export{Ta as component};
