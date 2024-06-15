import{S as Ya,i as Ba,s as Ha,R as Ma,e as xa,a as m,k as s,q as t,y as ja,F as za,T as Ra,h as n,c as u,l as o,m as i,r as a,z as Ia,p as ue,n as C,C as e,b as Te,A as qa,D as Wa,g as Pa,d as ka,B as Ua}from"../chunks/index.d7cc8d8b.js";import{H as Aa,g as Fa}from"../chunks/github.df9008b1.js";import{t as Ja}from"../chunks/typescript.7dd1ec19.js";import{b as Sa}from"../chunks/paths.d307dac8.js";function Ga(Va){let O,B,ye,r,A,J,Ce,be,x,De,H,Ne,Oe,xe,j,S,je,Ie,I,qe,q,V,Pe,ke,P,Ue,y,Ae,M,Je,Se,z,Ve,Ye,R,Be,He,W,Me,ze,Re,f,We,F,Fe,Ge,G,Ke,Le,K,Qe,Xe,L,Ze,et,tt,_,at,Q,nt,st,X,ot,it,rt,h,lt,Z,dt,ht,ee,ct,pt,te,mt,ut,ae,yt,ft,ne,vt,Et,gt,k,wt,se,$t,_t,Tt,c,Ct,oe,bt,Dt,ie,Nt,Ot,re,xt,jt,le,It,qt,de,Pt,kt,Ut,p,At,he,Jt,St,ce,Vt,Yt,b,Bt,Ht,pe,Mt,zt,me,Rt,Wt,fe,T,D,Ft,Gt,N,Kt,ve;return I=new Aa({props:{language:Ja,code:`import {
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
const Todo = nymph.addEntityClass(TodoClass);`}}),P=new Aa({props:{language:Ja,code:`import { Entity } from '@nymphjs/client';

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
const Todo = nymph.addEntityClass(TodoClass);`}}),{c(){O=new Ma(!1),B=xa(),ye=m(),r=s("section"),A=s("header"),J=s("h1"),Ce=t("Defining Entities"),be=m(),x=s("p"),De=t("To create a new type of data object in Nymph, you extend the "),H=s("code"),Ne=t("Entity"),Oe=t(` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),xe=m(),j=s("div"),S=s("div"),je=t("Extending Entity in Node.js"),Ie=m(),ja(I.$$.fragment),qe=m(),q=s("div"),V=s("div"),Pe=t("Extending Entity in the Client"),ke=m(),ja(P.$$.fragment),Ue=m(),y=s("p"),Ae=t("In both cases, defaults are set in the constructor (the "),M=s("code"),Je=t("done"),Se=t(`
    property is set to false and the `),z=s("code"),Ve=t("name"),Ye=t(` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),R=s("code"),Be=t("this.$data"),He=t(`. The
    `),W=s("code"),Me=t("$data"),ze=t(" part is not necessary outside of the entity's own methods."),Re=m(),f=s("p"),We=t(`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),F=s("code"),Fe=t("this.$nymph"),Ge=t(` (or
    `),G=s("code"),Ke=t("this.nymph"),Le=t(` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client,
    these instances will know how to communicate with the configured REST
    server. Basically, you have to use these instances. You can also use
    `),K=s("code"),Qe=t("this.$nymph.getEntityClass"),Xe=t(`
    and `),L=s("code"),Ze=t("this.nymph.getEntityClass"),et=t(" to get the right class for Nymph queries."),tt=m(),_=s("p"),at=t("In Node.js, the etype is set to "),Q=s("code"),nt=t('"todo"'),st=t(`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),X=s("code"),ot=t("Entity"),it=t(' class and the "entity" etype will be used.'),rt=m(),h=s("p"),lt=t("The "),Z=s("code"),dt=t("$clientEnabledMethods"),ht=t(` property and the
    `),ee=s("code"),ct=t("clientEnabledStaticMethods"),pt=t(`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),te=s("code"),mt=t("$serverCall"),ut=t(` and
    `),ae=s("code"),yt=t("serverCallStatic"),ft=t(`. In the client class, the
    `),ne=s("code"),vt=t("return await this.$serverCall('$archive', []);"),Et=t(` statement takes advantage
    of this feature.`),gt=m(),k=s("p"),wt=t("On both the Node.js class and the client class, the class name is set in the "),se=s("code"),$t=t("class"),_t=t(` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),Tt=m(),c=s("p"),Ct=t(`Nymph provides a mechanism to ensure uniqueness among entities. Any strings
    returned by the `),oe=s("code"),bt=t("$getUniques"),Dt=t(` method will have a uniqueness
    constraint enforced by the database across this entity's etype. The
    `),ie=s("code"),Nt=t("Todo"),Ot=t(` class returns a string containing both the user's GUID and
    the todo name. This ensures that the user can't have two todos with the same
    name. The `),re=s("code"),xt=t("$save"),jt=t(` method checks for a thrown
    `),le=s("code"),It=t("EntityUniqueConstraintError"),qt=t(`
    when calling the super class' `),de=s("code"),Pt=t("$save"),kt=t("."),Ut=m(),p=s("p"),At=t("Finally, in Node.js, the "),he=s("code"),Jt=t("Todo"),St=t(` class validates all of its data
    in the `),ce=s("code"),Vt=t("$save"),Yt=t(` method using
    `),b=s("a"),Bt=t("Joi"),Ht=t(`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),pe=s("code"),Mt=t("$getValidatable"),zt=t(` method. The
    `),me=s("code"),Rt=t("$allowlistData"),Wt=t(" property will ensure no extra properties are set."),fe=m(),T=s("section"),D=s("a"),Ft=t("Previous: Entity Class"),Gt=m(),N=s("a"),Kt=t("Next: UIDs"),this.h()},l(d){const U=za("svelte-1kddyis",document.head);O=Ra(U,!1),B=xa(),U.forEach(n),ye=u(d),r=o(d,"SECTION",{});var l=i(r);A=o(l,"HEADER",{class:!0});var Lt=i(A);J=o(Lt,"H1",{style:!0});var Qt=i(J);Ce=a(Qt,"Defining Entities"),Qt.forEach(n),Lt.forEach(n),be=u(l),x=o(l,"P",{});var Ee=i(x);De=a(Ee,"To create a new type of data object in Nymph, you extend the "),H=o(Ee,"CODE",{});var Xt=i(H);Ne=a(Xt,"Entity"),Xt.forEach(n),Oe=a(Ee,` class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.`),Ee.forEach(n),xe=u(l),j=o(l,"DIV",{});var ge=i(j);S=o(ge,"DIV",{style:!0});var Zt=i(S);je=a(Zt,"Extending Entity in Node.js"),Zt.forEach(n),Ie=u(ge),Ia(I.$$.fragment,ge),ge.forEach(n),qe=u(l),q=o(l,"DIV",{});var we=i(q);V=o(we,"DIV",{style:!0});var ea=i(V);Pe=a(ea,"Extending Entity in the Client"),ea.forEach(n),ke=u(we),Ia(P.$$.fragment,we),we.forEach(n),Ue=u(l),y=o(l,"P",{});var w=i(y);Ae=a(w,"In both cases, defaults are set in the constructor (the "),M=o(w,"CODE",{});var ta=i(M);Je=a(ta,"done"),ta.forEach(n),Se=a(w,`
    property is set to false and the `),z=o(w,"CODE",{});var aa=i(z);Ve=a(aa,"name"),aa.forEach(n),Ye=a(w,` property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    `),R=o(w,"CODE",{});var na=i(R);Be=a(na,"this.$data"),na.forEach(n),He=a(w,`. The
    `),W=o(w,"CODE",{});var sa=i(W);Me=a(sa,"$data"),sa.forEach(n),ze=a(w," part is not necessary outside of the entity's own methods."),w.forEach(n),Re=u(l),f=o(l,"P",{});var $=i(f);We=a($,`You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in `),F=o($,"CODE",{});var oa=i(F);Fe=a(oa,"this.$nymph"),oa.forEach(n),Ge=a($,` (or
    `),G=o($,"CODE",{});var ia=i(G);Ke=a(ia,"this.nymph"),ia.forEach(n),Le=a($,` in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client,
    these instances will know how to communicate with the configured REST
    server. Basically, you have to use these instances. You can also use
    `),K=o($,"CODE",{});var ra=i(K);Qe=a(ra,"this.$nymph.getEntityClass"),ra.forEach(n),Xe=a($,`
    and `),L=o($,"CODE",{});var la=i(L);Ze=a(la,"this.nymph.getEntityClass"),la.forEach(n),et=a($," to get the right class for Nymph queries."),$.forEach(n),tt=u(l),_=o(l,"P",{});var Y=i(_);at=a(Y,"In Node.js, the etype is set to "),Q=o(Y,"CODE",{});var da=i(Q);nt=a(da,'"todo"'),da.forEach(n),st=a(Y,`. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    `),X=o(Y,"CODE",{});var ha=i(X);ot=a(ha,"Entity"),ha.forEach(n),it=a(Y,' class and the "entity" etype will be used.'),Y.forEach(n),rt=u(l),h=o(l,"P",{});var v=i(h);lt=a(v,"The "),Z=o(v,"CODE",{});var ca=i(Z);dt=a(ca,"$clientEnabledMethods"),ca.forEach(n),ht=a(v,` property and the
    `),ee=o(v,"CODE",{});var pa=i(ee);ct=a(pa,"clientEnabledStaticMethods"),pa.forEach(n),pt=a(v,`
    static property in Node.js determine which methods and static methods can be
    called from the client using `),te=o(v,"CODE",{});var ma=i(te);mt=a(ma,"$serverCall"),ma.forEach(n),ut=a(v,` and
    `),ae=o(v,"CODE",{});var ua=i(ae);yt=a(ua,"serverCallStatic"),ua.forEach(n),ft=a(v,`. In the client class, the
    `),ne=o(v,"CODE",{});var ya=i(ne);vt=a(ya,"return await this.$serverCall('$archive', []);"),ya.forEach(n),Et=a(v,` statement takes advantage
    of this feature.`),v.forEach(n),gt=u(l),k=o(l,"P",{});var $e=i(k);wt=a($e,"On both the Node.js class and the client class, the class name is set in the "),se=o($e,"CODE",{});var fa=i(se);$t=a(fa,"class"),fa.forEach(n),_t=a($e,` static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.`),$e.forEach(n),Tt=u(l),c=o(l,"P",{});var E=i(c);Ct=a(E,`Nymph provides a mechanism to ensure uniqueness among entities. Any strings
    returned by the `),oe=o(E,"CODE",{});var va=i(oe);bt=a(va,"$getUniques"),va.forEach(n),Dt=a(E,` method will have a uniqueness
    constraint enforced by the database across this entity's etype. The
    `),ie=o(E,"CODE",{});var Ea=i(ie);Nt=a(Ea,"Todo"),Ea.forEach(n),Ot=a(E,` class returns a string containing both the user's GUID and
    the todo name. This ensures that the user can't have two todos with the same
    name. The `),re=o(E,"CODE",{});var ga=i(re);xt=a(ga,"$save"),ga.forEach(n),jt=a(E,` method checks for a thrown
    `),le=o(E,"CODE",{});var wa=i(le);It=a(wa,"EntityUniqueConstraintError"),wa.forEach(n),qt=a(E,`
    when calling the super class' `),de=o(E,"CODE",{});var $a=i(de);Pt=a($a,"$save"),$a.forEach(n),kt=a(E,"."),E.forEach(n),Ut=u(l),p=o(l,"P",{});var g=i(p);At=a(g,"Finally, in Node.js, the "),he=o(g,"CODE",{});var _a=i(he);Jt=a(_a,"Todo"),_a.forEach(n),St=a(g,` class validates all of its data
    in the `),ce=o(g,"CODE",{});var Ta=i(ce);Vt=a(Ta,"$save"),Ta.forEach(n),Yt=a(g,` method using
    `),b=o(g,"A",{href:!0,target:!0,rel:!0});var Ca=i(b);Bt=a(Ca,"Joi"),Ca.forEach(n),Ht=a(g,`. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the `),pe=o(g,"CODE",{});var ba=i(pe);Mt=a(ba,"$getValidatable"),ba.forEach(n),zt=a(g,` method. The
    `),me=o(g,"CODE",{});var Da=i(me);Rt=a(Da,"$allowlistData"),Da.forEach(n),Wt=a(g," property will ensure no extra properties are set."),g.forEach(n),l.forEach(n),fe=u(d),T=o(d,"SECTION",{class:!0});var _e=i(T);D=o(_e,"A",{href:!0,class:!0,style:!0});var Na=i(D);Ft=a(Na,"Previous: Entity Class"),Na.forEach(n),Gt=u(_e),N=o(_e,"A",{href:!0,class:!0,style:!0});var Oa=i(N);Kt=a(Oa,"Next: UIDs"),Oa.forEach(n),_e.forEach(n),this.h()},h(){document.title="Defining Entities - User Guide - Nymph.js",O.a=B,ue(J,"font-size","3em"),C(A,"class","major"),ue(S,"text-align","end"),ue(V,"text-align","end"),C(b,"href","https://joi.dev/"),C(b,"target","_blank"),C(b,"rel","noreferrer"),C(D,"href",Sa+"/user-guide/entity-class"),C(D,"class","button"),ue(D,"margin",".5em"),C(N,"href",Sa+"/user-guide/uids"),C(N,"class","button"),ue(N,"margin",".5em"),C(T,"class","page-steps")},m(d,U){O.m(Fa,document.head),e(document.head,B),Te(d,ye,U),Te(d,r,U),e(r,A),e(A,J),e(J,Ce),e(r,be),e(r,x),e(x,De),e(x,H),e(H,Ne),e(x,Oe),e(r,xe),e(r,j),e(j,S),e(S,je),e(j,Ie),qa(I,j,null),e(r,qe),e(r,q),e(q,V),e(V,Pe),e(q,ke),qa(P,q,null),e(r,Ue),e(r,y),e(y,Ae),e(y,M),e(M,Je),e(y,Se),e(y,z),e(z,Ve),e(y,Ye),e(y,R),e(R,Be),e(y,He),e(y,W),e(W,Me),e(y,ze),e(r,Re),e(r,f),e(f,We),e(f,F),e(F,Fe),e(f,Ge),e(f,G),e(G,Ke),e(f,Le),e(f,K),e(K,Qe),e(f,Xe),e(f,L),e(L,Ze),e(f,et),e(r,tt),e(r,_),e(_,at),e(_,Q),e(Q,nt),e(_,st),e(_,X),e(X,ot),e(_,it),e(r,rt),e(r,h),e(h,lt),e(h,Z),e(Z,dt),e(h,ht),e(h,ee),e(ee,ct),e(h,pt),e(h,te),e(te,mt),e(h,ut),e(h,ae),e(ae,yt),e(h,ft),e(h,ne),e(ne,vt),e(h,Et),e(r,gt),e(r,k),e(k,wt),e(k,se),e(se,$t),e(k,_t),e(r,Tt),e(r,c),e(c,Ct),e(c,oe),e(oe,bt),e(c,Dt),e(c,ie),e(ie,Nt),e(c,Ot),e(c,re),e(re,xt),e(c,jt),e(c,le),e(le,It),e(c,qt),e(c,de),e(de,Pt),e(c,kt),e(r,Ut),e(r,p),e(p,At),e(p,he),e(he,Jt),e(p,St),e(p,ce),e(ce,Vt),e(p,Yt),e(p,b),e(b,Bt),e(p,Ht),e(p,pe),e(pe,Mt),e(p,zt),e(p,me),e(me,Rt),e(p,Wt),Te(d,fe,U),Te(d,T,U),e(T,D),e(D,Ft),e(T,Gt),e(T,N),e(N,Kt),ve=!0},p:Wa,i(d){ve||(Pa(I.$$.fragment,d),Pa(P.$$.fragment,d),ve=!0)},o(d){ka(I.$$.fragment,d),ka(P.$$.fragment,d),ve=!1},d(d){n(B),d&&O.d(),d&&n(ye),d&&n(r),Ua(I),Ua(P),d&&n(fe),d&&n(T)}}}class Za extends Ya{constructor(O){super(),Ba(this,O,null,Ga,Ha,{})}}export{Za as component};
