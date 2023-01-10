import{S as ys,i as fs,s as ms,R as ps,e as ds,a as h,k as o,q as t,w as ce,E as vs,T as Es,h as n,c as d,l as s,m as r,r as a,x as ue,p as Ct,n as G,C as e,b as It,y as ye,B as gs,f as fe,t as me,z as pe}from"../../../../chunks/index-8e853c83.js";import{H as ve,g as $s}from"../../../../chunks/github-07e092b5.js";import{t as Ee}from"../../../../chunks/typescript-7dd1ec19.js";import{b as cs}from"../../../../chunks/paths-b4419565.js";function ws(us){let S,ge,pt,i,K,W,Ot,Tt,$e,kt,jt,w,Nt,we,qt,Ut,_e,Pt,Gt,St,v,At,be,Lt,xt,De,Mt,Ft,Ce,zt,Bt,Ht,A,Yt,Ie,Rt,Vt,_,Qt,Oe,Jt,Kt,Te,Wt,Xt,Zt,b,ea,ke,ta,aa,je,na,oa,sa,L,ra,x,ia,Ne,la,ha,da,M,ca,u,ua,qe,ya,fa,Ue,ma,pa,Pe,va,Ea,Ge,ga,$a,Se,wa,_a,Ae,ba,Da,Le,Ca,Ia,Oa,F,Ta,z,ka,xe,ja,Na,qa,E,B,Me,Ua,Pa,D,Fe,Ga,Sa,ze,Aa,La,Be,xa,Ma,H,He,Fa,za,C,Ye,Ba,Ha,Re,Ya,Ra,Ve,Va,Qa,m,Qe,Ja,Ka,Je,Wa,Xa,Ke,Za,en,We,tn,an,Xe,nn,on,sn,y,Ze,rn,ln,et,hn,dn,tt,cn,un,at,yn,fn,nt,mn,pn,ot,vn,En,gn,Y,$n,I,wn,st,_n,bn,rt,Dn,Cn,In,O,X,it,On,Tn,kn,Z,lt,jn,Nn,qn,ee,ht,Un,Pn,Gn,T,Sn,dt,An,Ln,ct,xn,Mn,Fn,R,zn,ut,Bn,Hn,Yn,g,Rn,yt,Vn,Qn,ft,Jn,Kn,mt,Wn,Xn,Zn,V,vt,te,k,ae,j,eo,to,Q,N,ao,Et;return A=new ve({props:{language:Ee,code:`const entity = await MyEntity.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),L=new ve({props:{language:Ee,code:`// Create some entities.
let entity = await MyEntity.factory();
entity.foo = await MyEntity.factory();
entity.foo.bar = 'Old value.';
await entity.foo.$save();
await entity.$save();

// Reset the entity to a copy just pulled from the DB.
entity = await nymph.getEntity(
  { class: MyEntity },
  { type: '&', guid: entity.guid }
);

// Get a copy of the referenced entity.
let instOfFoo = await nymph.getEntity(
  { class: MyEntity },
  { type: '&', guid: entity.foo.guid }
);
// And change a value on it.
instOfFoo.bar = 'New value.';
await instOfFoo.$save();

console.log(entity.foo.bar); // Outputs 'Old value.'
// If on Node.js
entity.$clearCache();
// Else if on the client
await entity.$refresh();
await entity.foo.$ready();
// End if
console.log(entity.foo.bar); // Outputs 'New value.'`}}),M=new ve({props:{language:Ee,code:`// Create an entity.
const entity = await MyEntity.factory();
entity.foo = 'Old value.';
await entity.$save();

// Get a copy of the entity.
const instOfEnt = await nymph.getEntity(
  { class: MyEntity },
  { type: '&', guid: entity.guid }
);
// And change a value on it.
instOfEnt.foo = 'New value.';
await instOfEnt.$save();

console.log(entity.foo); // Outputs 'Old value.'
await entity.$refresh();
console.log(entity.foo); // Outputs 'New value.'`}}),F=new ve({props:{language:Ee,code:`const entity = await MyEntity.factory();

// Save the entity.
await entity.$save();
// or
await nymph.saveEntity(entity);
// or
await nymph.saveEntities([entity]);

// (Client only.) Save only the data that has changed.
await entity.$patch();
// or
await nymph.patchEntity(entity);
// or
await nymph.patchEntities([entity]);

// Delete the entity.
await entity.$delete();
// or
await nymph.deleteEntity(entity);
// or
await nymph.deleteEntities([entity]);`}}),Y=new ve({props:{language:Ee,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
let entity = await MyEntity.factory('a4c1591d6ea91c8450d2d360');
let entity2 = await MyEntity.factory('a4c1591d6ea91c8450d2d360');

entity.$is(entity2); // True
entity.$equals(entity2); // True

entity2.someProp = 'some new value';
entity.$is(entity2); // True
entity.$equals(entity2); // False

const arr = [null, null, entity2];
entity.$arraySearch(arr); // 2
entity.$inArray(arr); // True
entity.$arraySearch(arr, true); // -1
entity.$inArray(arr, true); // false`}}),V=new ve({props:{language:Ee,code:`// You can use $serverCall and serverCallStatic directly.
try {
  const success: boolean = await todo.$serverCall('$archive', []);
  if (!success) {
    alert("Couldn't archive " + todo.name);
  }
} catch (e) {
  alert('Error: ' + e.textStatus + "
Couldn't archive " + todo.name);
}

// Or you can define methods like this in your client class.
class Todo extends Entity<TodoData> {
  // ...

  static async archiveAllDone(onlyOlderThanDay: boolean): Promise<boolean> {
    return await this.serverCallStatic('archiveAllDone', [onlyOlderThanDay]);
  }

  async $archive(): Promise<boolean> {
    return await this.$serverCall('archive', []);
  }
}

// You'd use them like this.
const success = await Todo.archiveAllDone(true);

// And
const todo = await Todo.factory(someGuid);
const success = await todo.$archive();`}}),{c(){S=new ps(!1),ge=ds(),pt=h(),i=o("section"),K=o("header"),W=o("h1"),Ot=t("Entity Class"),Tt=h(),$e=o("p"),kt=t(`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),jt=h(),w=o("p"),Nt=t(`In the client, assigning a property internally marks that property as
    "dirty", and calling `),we=o("code"),qt=t("$patch"),Ut=t(` will push just the changed
    properties up to the server, whereas `),_e=o("code"),Pt=t("$save"),Gt=t(" would push all properties."),St=h(),v=o("p"),At=t(`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=o("code"),Lt=t("$addTag"),xt=t(", "),De=o("code"),Mt=t("$removeTag"),Ft=t(`, and
    `),Ce=o("code"),zt=t("$hasTag"),Bt=t(` are used, respectively. Each takes any number of tags as
    arguments.`),Ht=h(),ce(A.$$.fragment),Yt=h(),Ie=o("p"),Rt=t(`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),Vt=h(),_=o("p"),Qt=t(`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=o("code"),Jt=t("$ready"),Kt=t(` method,
    or by using the `),Te=o("code"),Wt=t("$readyAll"),Xt=t(" method on the entity that contains them."),Zt=h(),b=o("p"),ea=t(`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=o("code"),ta=t("$clearCache"),aa=t(`
    method in Node.js and the `),je=o("code"),na=t("$refresh"),oa=t(" method in the client."),sa=h(),ce(L.$$.fragment),ra=h(),x=o("p"),ia=t(`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=o("code"),la=t("$refresh"),ha=t(` method, just like in the client,
    for this.`),da=h(),ce(M.$$.fragment),ca=h(),u=o("p"),ua=t("To save an entity, use the "),qe=o("code"),ya=t("$save"),fa=t(` method. Likewise, to delete
    the entity, use the `),Ue=o("code"),ma=t("$delete"),pa=t(` method. You can also call the
    `),Pe=o("code"),va=t("saveEntity"),Ea=t(`,
    `),Ge=o("code"),ga=t("deleteEntity"),$a=t(", and "),Se=o("code"),wa=t("deleteEntityByID"),_a=t(` methods of
    `),Ae=o("code"),ba=t("Nymph"),Da=t(". The "),Le=o("code"),Ca=t("Entity"),Ia=t(" class uses these methods."),Oa=h(),ce(F.$$.fragment),Ta=h(),z=o("p"),ka=t("Entities can't be checked using the "),xe=o("code"),ja=t("=="),Na=t(` operator. Instead, you can
    use the following entity methods.`),qa=h(),E=o("ul"),B=o("li"),Me=o("code"),Ua=t("$is"),Pa=t(` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=o("ul"),Fe=o("li"),Ga=t("They must be entities."),Sa=h(),ze=o("li"),Aa=t("They must have equal GUIDs, or both can have no GUID."),La=h(),Be=o("li"),xa=t("If they have no GUIDs, their data and tags must be equal."),Ma=h(),H=o("li"),He=o("code"),Fa=t("$equals"),za=t(` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria.
      `),C=o("ul"),Ye=o("li"),Ba=t("They must be entities."),Ha=h(),Re=o("li"),Ya=t("They must have equal GUIDs, or both can have no GUID."),Ra=h(),Ve=o("li"),Va=t("Their data and tags must be equal."),Qa=h(),m=o("li"),Qe=o("code"),Ja=t("$inArray"),Ka=t(` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Je=o("code"),Wa=t("strict"),Xa=t(`. If
      `),Ke=o("code"),Za=t("strict"),en=t(`
      is false or undefined, the function uses `),We=o("code"),tn=t("$is"),an=t(` to compare, and
      if it's true, the function uses `),Xe=o("code"),nn=t("$equals"),on=t("."),sn=h(),y=o("li"),Ze=o("code"),rn=t("$arraySearch"),ln=t(` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),et=o("code"),hn=t("strict"),dn=t(". If "),tt=o("code"),cn=t("strict"),un=t(` is false or undefined, the
      function uses
      `),at=o("code"),yn=t("$is"),fn=t(`
      to compare, and if it's true, the function uses `),nt=o("code"),mn=t("$equals"),pn=t(`. This
      method may return 0, which evaluates to false, so you should use
      `),ot=o("code"),vn=t("$inArray"),En=t(` if you are only checking whether the entity is in the
      array.`),gn=h(),ce(Y.$$.fragment),$n=h(),I=o("p"),wn=t("Client side Nymph entities can use the "),st=o("code"),_n=t("$serverCall"),bn=t(` method to
    call methods on a server side instance of the entity.
    `),rt=o("code"),Dn=t("$serverCall"),Cn=t(" expects three parameters."),In=h(),O=o("ul"),X=o("li"),it=o("code"),On=t("method"),Tn=t(" - the name of the method to call on the server side object."),kn=h(),Z=o("li"),lt=o("code"),jn=t("params"),Nn=t(" - an array of the parameters to pass to the method."),qn=h(),ee=o("li"),ht=o("code"),Un=t("stateless"),Pn=t(` - if set to true, the method won't update the entity
      with the returned server side representation.`),Gn=h(),T=o("p"),Sn=t(`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=o("code"),An=t("$readyAll"),Ln=t(` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ct=o("code"),xn=t("stateless"),Mn=t(" to true."),Fn=h(),R=o("p"),zn=t("You can also call static methods on the server with "),ut=o("code"),Bn=t("serverCallStatic"),Hn=t("."),Yn=h(),g=o("p"),Rn=t(`In order to be called from the client side, the method must be listed in the
    `),yt=o("code"),Vn=t("$clientEnabledMethods"),Qn=t(` or
    `),ft=o("code"),Jn=t("clientEnabledStaticMethods"),Kn=t(` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),mt=o("code"),Wn=t("403 Forbidden"),Xn=t(" status."),Zn=h(),ce(V.$$.fragment),vt=h(),te=o("section"),k=o("div"),ae=o("div"),j=o("a"),eo=t("Previous: Subscribing to Queries"),to=h(),Q=o("div"),N=o("a"),ao=t("Next: Defining Entities"),this.h()},l(c){const J=vs("svelte-24q1tq",document.head);S=Es(J,!1),ge=ds(),J.forEach(n),pt=d(c),i=s(c,"SECTION",{});var l=r(i);K=s(l,"HEADER",{class:!0});var ro=r(K);W=s(ro,"H1",{style:!0});var io=r(W);Ot=a(io,"Entity Class"),io.forEach(n),ro.forEach(n),Tt=d(l),$e=s(l,"P",{});var lo=r($e);kt=a(lo,`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),lo.forEach(n),jt=d(l),w=s(l,"P",{});var ne=r(w);Nt=a(ne,`In the client, assigning a property internally marks that property as
    "dirty", and calling `),we=s(ne,"CODE",{});var ho=r(we);qt=a(ho,"$patch"),ho.forEach(n),Ut=a(ne,` will push just the changed
    properties up to the server, whereas `),_e=s(ne,"CODE",{});var co=r(_e);Pt=a(co,"$save"),co.forEach(n),Gt=a(ne," would push all properties."),ne.forEach(n),St=d(l),v=s(l,"P",{});var q=r(v);At=a(q,`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=s(q,"CODE",{});var uo=r(be);Lt=a(uo,"$addTag"),uo.forEach(n),xt=a(q,", "),De=s(q,"CODE",{});var yo=r(De);Mt=a(yo,"$removeTag"),yo.forEach(n),Ft=a(q,`, and
    `),Ce=s(q,"CODE",{});var fo=r(Ce);zt=a(fo,"$hasTag"),fo.forEach(n),Bt=a(q,` are used, respectively. Each takes any number of tags as
    arguments.`),q.forEach(n),Ht=d(l),ue(A.$$.fragment,l),Yt=d(l),Ie=s(l,"P",{});var mo=r(Ie);Rt=a(mo,`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),mo.forEach(n),Vt=d(l),_=s(l,"P",{});var oe=r(_);Qt=a(oe,`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=s(oe,"CODE",{});var po=r(Oe);Jt=a(po,"$ready"),po.forEach(n),Kt=a(oe,` method,
    or by using the `),Te=s(oe,"CODE",{});var vo=r(Te);Wt=a(vo,"$readyAll"),vo.forEach(n),Xt=a(oe," method on the entity that contains them."),oe.forEach(n),Zt=d(l),b=s(l,"P",{});var se=r(b);ea=a(se,`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=s(se,"CODE",{});var Eo=r(ke);ta=a(Eo,"$clearCache"),Eo.forEach(n),aa=a(se,`
    method in Node.js and the `),je=s(se,"CODE",{});var go=r(je);na=a(go,"$refresh"),go.forEach(n),oa=a(se," method in the client."),se.forEach(n),sa=d(l),ue(L.$$.fragment,l),ra=d(l),x=s(l,"P",{});var gt=r(x);ia=a(gt,`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=s(gt,"CODE",{});var $o=r(Ne);la=a($o,"$refresh"),$o.forEach(n),ha=a(gt,` method, just like in the client,
    for this.`),gt.forEach(n),da=d(l),ue(M.$$.fragment,l),ca=d(l),u=s(l,"P",{});var f=r(u);ua=a(f,"To save an entity, use the "),qe=s(f,"CODE",{});var wo=r(qe);ya=a(wo,"$save"),wo.forEach(n),fa=a(f,` method. Likewise, to delete
    the entity, use the `),Ue=s(f,"CODE",{});var _o=r(Ue);ma=a(_o,"$delete"),_o.forEach(n),pa=a(f,` method. You can also call the
    `),Pe=s(f,"CODE",{});var bo=r(Pe);va=a(bo,"saveEntity"),bo.forEach(n),Ea=a(f,`,
    `),Ge=s(f,"CODE",{});var Do=r(Ge);ga=a(Do,"deleteEntity"),Do.forEach(n),$a=a(f,", and "),Se=s(f,"CODE",{});var Co=r(Se);wa=a(Co,"deleteEntityByID"),Co.forEach(n),_a=a(f,` methods of
    `),Ae=s(f,"CODE",{});var Io=r(Ae);ba=a(Io,"Nymph"),Io.forEach(n),Da=a(f,". The "),Le=s(f,"CODE",{});var Oo=r(Le);Ca=a(Oo,"Entity"),Oo.forEach(n),Ia=a(f," class uses these methods."),f.forEach(n),Oa=d(l),ue(F.$$.fragment,l),Ta=d(l),z=s(l,"P",{});var $t=r(z);ka=a($t,"Entities can't be checked using the "),xe=s($t,"CODE",{});var To=r(xe);ja=a(To,"=="),To.forEach(n),Na=a($t,` operator. Instead, you can
    use the following entity methods.`),$t.forEach(n),qa=d(l),E=s(l,"UL",{});var U=r(E);B=s(U,"LI",{});var wt=r(B);Me=s(wt,"CODE",{});var ko=r(Me);Ua=a(ko,"$is"),ko.forEach(n),Pa=a(wt,` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=s(wt,"UL",{});var re=r(D);Fe=s(re,"LI",{});var jo=r(Fe);Ga=a(jo,"They must be entities."),jo.forEach(n),Sa=d(re),ze=s(re,"LI",{});var No=r(ze);Aa=a(No,"They must have equal GUIDs, or both can have no GUID."),No.forEach(n),La=d(re),Be=s(re,"LI",{});var qo=r(Be);xa=a(qo,"If they have no GUIDs, their data and tags must be equal."),qo.forEach(n),re.forEach(n),wt.forEach(n),Ma=d(U),H=s(U,"LI",{});var _t=r(H);He=s(_t,"CODE",{});var Uo=r(He);Fa=a(Uo,"$equals"),Uo.forEach(n),za=a(_t,` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria.
      `),C=s(_t,"UL",{});var ie=r(C);Ye=s(ie,"LI",{});var Po=r(Ye);Ba=a(Po,"They must be entities."),Po.forEach(n),Ha=d(ie),Re=s(ie,"LI",{});var Go=r(Re);Ya=a(Go,"They must have equal GUIDs, or both can have no GUID."),Go.forEach(n),Ra=d(ie),Ve=s(ie,"LI",{});var So=r(Ve);Va=a(So,"Their data and tags must be equal."),So.forEach(n),ie.forEach(n),_t.forEach(n),Qa=d(U),m=s(U,"LI",{});var $=r(m);Qe=s($,"CODE",{});var Ao=r(Qe);Ja=a(Ao,"$inArray"),Ao.forEach(n),Ka=a($,` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Je=s($,"CODE",{});var Lo=r(Je);Wa=a(Lo,"strict"),Lo.forEach(n),Xa=a($,`. If
      `),Ke=s($,"CODE",{});var xo=r(Ke);Za=a(xo,"strict"),xo.forEach(n),en=a($,`
      is false or undefined, the function uses `),We=s($,"CODE",{});var Mo=r(We);tn=a(Mo,"$is"),Mo.forEach(n),an=a($,` to compare, and
      if it's true, the function uses `),Xe=s($,"CODE",{});var Fo=r(Xe);nn=a(Fo,"$equals"),Fo.forEach(n),on=a($,"."),$.forEach(n),sn=d(U),y=s(U,"LI",{});var p=r(y);Ze=s(p,"CODE",{});var zo=r(Ze);rn=a(zo,"$arraySearch"),zo.forEach(n),ln=a(p,` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),et=s(p,"CODE",{});var Bo=r(et);hn=a(Bo,"strict"),Bo.forEach(n),dn=a(p,". If "),tt=s(p,"CODE",{});var Ho=r(tt);cn=a(Ho,"strict"),Ho.forEach(n),un=a(p,` is false or undefined, the
      function uses
      `),at=s(p,"CODE",{});var Yo=r(at);yn=a(Yo,"$is"),Yo.forEach(n),fn=a(p,`
      to compare, and if it's true, the function uses `),nt=s(p,"CODE",{});var Ro=r(nt);mn=a(Ro,"$equals"),Ro.forEach(n),pn=a(p,`. This
      method may return 0, which evaluates to false, so you should use
      `),ot=s(p,"CODE",{});var Vo=r(ot);vn=a(Vo,"$inArray"),Vo.forEach(n),En=a(p,` if you are only checking whether the entity is in the
      array.`),p.forEach(n),U.forEach(n),gn=d(l),ue(Y.$$.fragment,l),$n=d(l),I=s(l,"P",{});var le=r(I);wn=a(le,"Client side Nymph entities can use the "),st=s(le,"CODE",{});var Qo=r(st);_n=a(Qo,"$serverCall"),Qo.forEach(n),bn=a(le,` method to
    call methods on a server side instance of the entity.
    `),rt=s(le,"CODE",{});var Jo=r(rt);Dn=a(Jo,"$serverCall"),Jo.forEach(n),Cn=a(le," expects three parameters."),le.forEach(n),In=d(l),O=s(l,"UL",{});var he=r(O);X=s(he,"LI",{});var no=r(X);it=s(no,"CODE",{});var Ko=r(it);On=a(Ko,"method"),Ko.forEach(n),Tn=a(no," - the name of the method to call on the server side object."),no.forEach(n),kn=d(he),Z=s(he,"LI",{});var oo=r(Z);lt=s(oo,"CODE",{});var Wo=r(lt);jn=a(Wo,"params"),Wo.forEach(n),Nn=a(oo," - an array of the parameters to pass to the method."),oo.forEach(n),qn=d(he),ee=s(he,"LI",{});var so=r(ee);ht=s(so,"CODE",{});var Xo=r(ht);Un=a(Xo,"stateless"),Xo.forEach(n),Pn=a(so,` - if set to true, the method won't update the entity
      with the returned server side representation.`),so.forEach(n),he.forEach(n),Gn=d(l),T=s(l,"P",{});var de=r(T);Sn=a(de,`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=s(de,"CODE",{});var Zo=r(dt);An=a(Zo,"$readyAll"),Zo.forEach(n),Ln=a(de,` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ct=s(de,"CODE",{});var es=r(ct);xn=a(es,"stateless"),es.forEach(n),Mn=a(de," to true."),de.forEach(n),Fn=d(l),R=s(l,"P",{});var bt=r(R);zn=a(bt,"You can also call static methods on the server with "),ut=s(bt,"CODE",{});var ts=r(ut);Bn=a(ts,"serverCallStatic"),ts.forEach(n),Hn=a(bt,"."),bt.forEach(n),Yn=d(l),g=s(l,"P",{});var P=r(g);Rn=a(P,`In order to be called from the client side, the method must be listed in the
    `),yt=s(P,"CODE",{});var as=r(yt);Vn=a(as,"$clientEnabledMethods"),as.forEach(n),Qn=a(P,` or
    `),ft=s(P,"CODE",{});var ns=r(ft);Jn=a(ns,"clientEnabledStaticMethods"),ns.forEach(n),Kn=a(P,` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),mt=s(P,"CODE",{});var os=r(mt);Wn=a(os,"403 Forbidden"),os.forEach(n),Xn=a(P," status."),P.forEach(n),Zn=d(l),ue(V.$$.fragment,l),l.forEach(n),vt=d(c),te=s(c,"SECTION",{});var ss=r(te);k=s(ss,"DIV",{class:!0});var Dt=r(k);ae=s(Dt,"DIV",{class:!0});var rs=r(ae);j=s(rs,"A",{href:!0,class:!0,style:!0});var is=r(j);eo=a(is,"Previous: Subscribing to Queries"),is.forEach(n),rs.forEach(n),to=d(Dt),Q=s(Dt,"DIV",{class:!0,style:!0});var ls=r(Q);N=s(ls,"A",{href:!0,class:!0,style:!0});var hs=r(N);ao=a(hs,"Next: Defining Entities"),hs.forEach(n),ls.forEach(n),Dt.forEach(n),ss.forEach(n),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",S.a=ge,Ct(W,"font-size","3em"),G(K,"class","major"),G(j,"href",cs+"/user-guide/subscribing-to-queries"),G(j,"class","button"),Ct(j,"margin",".5em"),G(ae,"class","col-6 col-12-small"),G(N,"href",cs+"/user-guide/defining-entities"),G(N,"class","button"),Ct(N,"margin",".5em"),G(Q,"class","col-6 col-12-small"),Ct(Q,"text-align","end"),G(k,"class","row")},m(c,J){S.m($s,document.head),e(document.head,ge),It(c,pt,J),It(c,i,J),e(i,K),e(K,W),e(W,Ot),e(i,Tt),e(i,$e),e($e,kt),e(i,jt),e(i,w),e(w,Nt),e(w,we),e(we,qt),e(w,Ut),e(w,_e),e(_e,Pt),e(w,Gt),e(i,St),e(i,v),e(v,At),e(v,be),e(be,Lt),e(v,xt),e(v,De),e(De,Mt),e(v,Ft),e(v,Ce),e(Ce,zt),e(v,Bt),e(i,Ht),ye(A,i,null),e(i,Yt),e(i,Ie),e(Ie,Rt),e(i,Vt),e(i,_),e(_,Qt),e(_,Oe),e(Oe,Jt),e(_,Kt),e(_,Te),e(Te,Wt),e(_,Xt),e(i,Zt),e(i,b),e(b,ea),e(b,ke),e(ke,ta),e(b,aa),e(b,je),e(je,na),e(b,oa),e(i,sa),ye(L,i,null),e(i,ra),e(i,x),e(x,ia),e(x,Ne),e(Ne,la),e(x,ha),e(i,da),ye(M,i,null),e(i,ca),e(i,u),e(u,ua),e(u,qe),e(qe,ya),e(u,fa),e(u,Ue),e(Ue,ma),e(u,pa),e(u,Pe),e(Pe,va),e(u,Ea),e(u,Ge),e(Ge,ga),e(u,$a),e(u,Se),e(Se,wa),e(u,_a),e(u,Ae),e(Ae,ba),e(u,Da),e(u,Le),e(Le,Ca),e(u,Ia),e(i,Oa),ye(F,i,null),e(i,Ta),e(i,z),e(z,ka),e(z,xe),e(xe,ja),e(z,Na),e(i,qa),e(i,E),e(E,B),e(B,Me),e(Me,Ua),e(B,Pa),e(B,D),e(D,Fe),e(Fe,Ga),e(D,Sa),e(D,ze),e(ze,Aa),e(D,La),e(D,Be),e(Be,xa),e(E,Ma),e(E,H),e(H,He),e(He,Fa),e(H,za),e(H,C),e(C,Ye),e(Ye,Ba),e(C,Ha),e(C,Re),e(Re,Ya),e(C,Ra),e(C,Ve),e(Ve,Va),e(E,Qa),e(E,m),e(m,Qe),e(Qe,Ja),e(m,Ka),e(m,Je),e(Je,Wa),e(m,Xa),e(m,Ke),e(Ke,Za),e(m,en),e(m,We),e(We,tn),e(m,an),e(m,Xe),e(Xe,nn),e(m,on),e(E,sn),e(E,y),e(y,Ze),e(Ze,rn),e(y,ln),e(y,et),e(et,hn),e(y,dn),e(y,tt),e(tt,cn),e(y,un),e(y,at),e(at,yn),e(y,fn),e(y,nt),e(nt,mn),e(y,pn),e(y,ot),e(ot,vn),e(y,En),e(i,gn),ye(Y,i,null),e(i,$n),e(i,I),e(I,wn),e(I,st),e(st,_n),e(I,bn),e(I,rt),e(rt,Dn),e(I,Cn),e(i,In),e(i,O),e(O,X),e(X,it),e(it,On),e(X,Tn),e(O,kn),e(O,Z),e(Z,lt),e(lt,jn),e(Z,Nn),e(O,qn),e(O,ee),e(ee,ht),e(ht,Un),e(ee,Pn),e(i,Gn),e(i,T),e(T,Sn),e(T,dt),e(dt,An),e(T,Ln),e(T,ct),e(ct,xn),e(T,Mn),e(i,Fn),e(i,R),e(R,zn),e(R,ut),e(ut,Bn),e(R,Hn),e(i,Yn),e(i,g),e(g,Rn),e(g,yt),e(yt,Vn),e(g,Qn),e(g,ft),e(ft,Jn),e(g,Kn),e(g,mt),e(mt,Wn),e(g,Xn),e(i,Zn),ye(V,i,null),It(c,vt,J),It(c,te,J),e(te,k),e(k,ae),e(ae,j),e(j,eo),e(k,to),e(k,Q),e(Q,N),e(N,ao),Et=!0},p:gs,i(c){Et||(fe(A.$$.fragment,c),fe(L.$$.fragment,c),fe(M.$$.fragment,c),fe(F.$$.fragment,c),fe(Y.$$.fragment,c),fe(V.$$.fragment,c),Et=!0)},o(c){me(A.$$.fragment,c),me(L.$$.fragment,c),me(M.$$.fragment,c),me(F.$$.fragment,c),me(Y.$$.fragment,c),me(V.$$.fragment,c),Et=!1},d(c){n(ge),c&&S.d(),c&&n(pt),c&&n(i),pe(A),pe(L),pe(M),pe(F),pe(Y),pe(V),c&&n(vt),c&&n(te)}}}class Is extends ys{constructor(S){super(),fs(this,S,null,ws,ms,{})}}export{Is as default};
