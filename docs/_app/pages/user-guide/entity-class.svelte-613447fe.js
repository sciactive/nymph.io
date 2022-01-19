import{S as vs,i as Es,s as gs,a2 as de,a3 as ue,a4 as ws,l as fs,k as h,e as o,t,w as ye,N as $s,a5 as _s,d as n,m as c,c as s,a as r,h as a,x as fe,f as It,b as A,a6 as bs,H as e,g as Ot,y as me,I as Cs,q as pe,o as ve,B as Ee}from"../../chunks/vendor-57c99eaa.js";import{b as ms}from"../../chunks/paths-396f020f.js";function Ds(ps){let G,ge,vt,l,W,X,Tt,kt,we,jt,Nt,_,qt,$e,Ut,Pt,_e,St,At,Gt,v,Lt,be,xt,Mt,Ce,Ft,Bt,De,Ht,Yt,zt,L,Vt,Ie,Qt,Rt,b,Jt,Oe,Kt,Wt,Te,Xt,Zt,ea,C,ta,ke,aa,na,je,oa,sa,ra,x,la,M,ia,Ne,ha,ca,da,F,ua,u,ya,qe,fa,ma,Ue,pa,va,Pe,Ea,ga,Se,wa,$a,Ae,_a,ba,Ge,Ca,Da,Le,Ia,Oa,Ta,B,ka,H,ja,xe,Na,qa,Ua,E,Y,Me,Pa,Sa,D,Fe,Aa,Ga,Be,La,xa,He,Ma,Fa,z,Ye,Ba,Ha,g,ze,Ya,za,Ve,Va,Qa,Qe,Ra,Ja,Re,Ka,Wa,m,Je,Xa,Za,Ke,en,tn,We,an,nn,Xe,on,sn,Ze,rn,ln,hn,y,et,cn,dn,tt,un,yn,at,fn,mn,nt,pn,vn,ot,En,gn,st,wn,$n,_n,V,bn,I,Cn,rt,Dn,In,lt,On,Tn,kn,O,Z,it,jn,Nn,qn,ee,ht,Un,Pn,Sn,te,ct,An,Gn,Ln,T,xn,dt,Mn,Fn,ut,Bn,Hn,Yn,Q,zn,yt,Vn,Qn,Rn,w,Jn,ft,Kn,Wn,mt,Xn,Zn,pt,eo,to,ao,R,Et,ae,k,ne,j,no,oo,J,N,so,gt;return L=new de({props:{language:ue,code:`const entity = await MyEntityClass.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),x=new de({props:{language:ue,code:`// Create some entities.
let entity = await MyEntityClass.factory();
entity.foo = await MyEntityClass.factory();
entity.foo.bar = 'Old value.';
await entity.foo.$save();
await entity.$save();

// Reset the entity to a copy just pulled from the DB.
entity = await nymph.getEntity(
  { class: MyEntityClass },
  { type: '&', guid: entity.guid }
);

// Get a copy of the referenced entity.
let instOfFoo = await nymph.getEntity(
  { class: MyEntityClass },
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
console.log(entity.foo.bar); // Outputs 'New value.'`}}),F=new de({props:{language:ue,code:`// Create an entity.
const entity = await MyEntityClass.factory();
entity.foo = 'Old value.';
await entity.$save();

// Get a copy of the entity.
const instOfEnt = await nymph.getEntity(
  { class: MyEntityClass },
  { type: '&', guid: entity.guid }
);
// And change a value on it.
instOfEnt.foo = 'New value.';
await instOfEnt.$save();

console.log(entity.foo); // Outputs 'Old value.'
await entity.$refresh();
console.log(entity.foo); // Outputs 'New value.'`}}),B=new de({props:{language:ue,code:`const entity = await MyEntityClass.factory();

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
await nymph.deleteEntities([entity]);`}}),V=new de({props:{language:ue,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
let entity = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');
let entity2 = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');

entity2.someProp = 'some new value';
entity.$is(entity2); // True
entity.$equals(entity2); // False

const arr = [null, null, entity];
entity.$arraySearch(arr); // 2
entity.$inArray(arr); // True
entity.$arraySearch(arr, true); // -1
entity.$inArray(arr, true); // false`}}),R=new de({props:{language:ue,code:`// You can use $serverCall and serverCallStatic directly.
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
const todo = await Todo.factory();
const success = await todo.$archive();`}}),{c(){G=new ws,ge=fs(),vt=h(),l=o("section"),W=o("header"),X=o("h1"),Tt=t("Entity Class"),kt=h(),we=o("p"),jt=t(`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),Nt=h(),_=o("p"),qt=t(`In the client, assigning a property internally marks that property as
    "dirty", and calling `),$e=o("code"),Ut=t("$patch"),Pt=t(` will push just the changed
    properties up to the server, whereas `),_e=o("code"),St=t("$save"),At=t(" would push all properties."),Gt=h(),v=o("p"),Lt=t(`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=o("code"),xt=t("$addTag"),Mt=t(", "),Ce=o("code"),Ft=t("$removeTag"),Bt=t(`, and
    `),De=o("code"),Ht=t("$hasTag"),Yt=t(` are used, respectively. Each takes any number of tags as
    arguments.`),zt=h(),ye(L.$$.fragment),Vt=h(),Ie=o("p"),Qt=t(`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),Rt=h(),b=o("p"),Jt=t(`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=o("code"),Kt=t("$ready"),Wt=t(` method,
    or by using the `),Te=o("code"),Xt=t("$readyAll"),Zt=t(" method on the entity that contains them."),ea=h(),C=o("p"),ta=t(`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=o("code"),aa=t("$clearCache"),na=t(`
    method in Node.js and the `),je=o("code"),oa=t("$refresh"),sa=t(" method in the client."),ra=h(),ye(x.$$.fragment),la=h(),M=o("p"),ia=t(`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=o("code"),ha=t("$refresh"),ca=t(` method, just like in the client,
    for this.`),da=h(),ye(F.$$.fragment),ua=h(),u=o("p"),ya=t("To save an entity, use the "),qe=o("code"),fa=t("$save"),ma=t(` method. Likewise, to delete
    the entity, use the `),Ue=o("code"),pa=t("$delete"),va=t(` method. You can also call the
    `),Pe=o("code"),Ea=t("saveEntity"),ga=t(`,
    `),Se=o("code"),wa=t("deleteEntity"),$a=t(", and "),Ae=o("code"),_a=t("deleteEntityByID"),ba=t(` methods of
    `),Ge=o("code"),Ca=t("Nymph"),Da=t(". The "),Le=o("code"),Ia=t("Entity"),Oa=t(" class uses these methods."),Ta=h(),ye(B.$$.fragment),ka=h(),H=o("p"),ja=t("Entities can't be checked using the "),xe=o("code"),Na=t("=="),qa=t(` operator. Instead, you can
    use the following entity methods.`),Ua=h(),E=o("ul"),Y=o("li"),Me=o("code"),Pa=t("$is"),Sa=t(` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=o("ul"),Fe=o("li"),Aa=t("They must be entities."),Ga=h(),Be=o("li"),La=t("They must have equal GUIDs, or both can have no GUID."),xa=h(),He=o("li"),Ma=t("If they have no GUIDs, their data must be equal."),Fa=h(),z=o("li"),Ye=o("code"),Ba=t("$equals"),Ha=t(` - Perform a more strict comparison of two entities
      (basically a GUID + class + data check). To return true, the entities must
      meet the following criteria.
      `),g=o("ul"),ze=o("li"),Ya=t("They must be entities."),za=h(),Ve=o("li"),Va=t("They must have equal GUIDs, or both can have no GUID."),Qa=h(),Qe=o("li"),Ra=t("They must be instances of the same class."),Ja=h(),Re=o("li"),Ka=t("Their data must be equal."),Wa=h(),m=o("li"),Je=o("code"),Xa=t("$inArray"),Za=t(` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Ke=o("code"),en=t("strict"),tn=t(`. If
      `),We=o("code"),an=t("strict"),nn=t(`
      is false, the function uses `),Xe=o("code"),on=t("$is"),sn=t(` to compare, and if it's true,
      the function uses `),Ze=o("code"),rn=t("$equals"),ln=t("."),hn=h(),y=o("li"),et=o("code"),cn=t("$arraySearch"),dn=t(` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),tt=o("code"),un=t("strict"),yn=t(". If "),at=o("code"),fn=t("strict"),mn=t(` is false, the function uses
      `),nt=o("code"),pn=t("$is"),vn=t(`
      to compare, and if it's true, the function uses `),ot=o("code"),En=t("$equals"),gn=t(`. This
      method may return 0, which evaluates to false, so you should use
      `),st=o("code"),wn=t("$inArray"),$n=t(` if you are only checking whether the entity is in the
      array.`),_n=h(),ye(V.$$.fragment),bn=h(),I=o("p"),Cn=t("Client side Nymph entities can use the "),rt=o("code"),Dn=t("$serverCall"),In=t(` method to
    call methods on a server side instance of the entity.
    `),lt=o("code"),On=t("$serverCall"),Tn=t(" expects three parameters."),kn=h(),O=o("ul"),Z=o("li"),it=o("code"),jn=t("method"),Nn=t(" - the name of the method to call on the server side object."),qn=h(),ee=o("li"),ht=o("code"),Un=t("params"),Pn=t(" - an array of the parameters to pass to the method."),Sn=h(),te=o("li"),ct=o("code"),An=t("stateless"),Gn=t(` - if set to true, the method won't update the entity
      with the returned server side representation.`),Ln=h(),T=o("p"),xn=t(`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=o("code"),Mn=t("$readyAll"),Fn=t(` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ut=o("code"),Bn=t("stateless"),Hn=t(" to true."),Yn=h(),Q=o("p"),zn=t("You can also call static methods on the server with "),yt=o("code"),Vn=t("serverCallStatic"),Qn=t("."),Rn=h(),w=o("p"),Jn=t(`In order to be called from the client side, the method must be listed in the
    `),ft=o("code"),Kn=t("$clientEnabledMethods"),Wn=t(` or
    `),mt=o("code"),Xn=t("clientEnabledStaticMethods"),Zn=t(` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),pt=o("code"),eo=t("403 Forbidden"),to=t(" status."),ao=h(),ye(R.$$.fragment),Et=h(),ae=o("section"),k=o("div"),ne=o("div"),j=o("a"),no=t("Previous: Subscribing to Queries"),oo=h(),J=o("div"),N=o("a"),so=t("Next: Defining Entities"),this.h()},l(d){const K=$s('[data-svelte="svelte-24q1tq"]',document.head);G=_s(K),ge=fs(),K.forEach(n),vt=c(d),l=s(d,"SECTION",{});var i=r(l);W=s(i,"HEADER",{class:!0});var ho=r(W);X=s(ho,"H1",{style:!0});var co=r(X);Tt=a(co,"Entity Class"),co.forEach(n),ho.forEach(n),kt=c(i),we=s(i,"P",{});var uo=r(we);jt=a(uo,`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),uo.forEach(n),Nt=c(i),_=s(i,"P",{});var oe=r(_);qt=a(oe,`In the client, assigning a property internally marks that property as
    "dirty", and calling `),$e=s(oe,"CODE",{});var yo=r($e);Ut=a(yo,"$patch"),yo.forEach(n),Pt=a(oe,` will push just the changed
    properties up to the server, whereas `),_e=s(oe,"CODE",{});var fo=r(_e);St=a(fo,"$save"),fo.forEach(n),At=a(oe," would push all properties."),oe.forEach(n),Gt=c(i),v=s(i,"P",{});var q=r(v);Lt=a(q,`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=s(q,"CODE",{});var mo=r(be);xt=a(mo,"$addTag"),mo.forEach(n),Mt=a(q,", "),Ce=s(q,"CODE",{});var po=r(Ce);Ft=a(po,"$removeTag"),po.forEach(n),Bt=a(q,`, and
    `),De=s(q,"CODE",{});var vo=r(De);Ht=a(vo,"$hasTag"),vo.forEach(n),Yt=a(q,` are used, respectively. Each takes any number of tags as
    arguments.`),q.forEach(n),zt=c(i),fe(L.$$.fragment,i),Vt=c(i),Ie=s(i,"P",{});var Eo=r(Ie);Qt=a(Eo,`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),Eo.forEach(n),Rt=c(i),b=s(i,"P",{});var se=r(b);Jt=a(se,`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=s(se,"CODE",{});var go=r(Oe);Kt=a(go,"$ready"),go.forEach(n),Wt=a(se,` method,
    or by using the `),Te=s(se,"CODE",{});var wo=r(Te);Xt=a(wo,"$readyAll"),wo.forEach(n),Zt=a(se," method on the entity that contains them."),se.forEach(n),ea=c(i),C=s(i,"P",{});var re=r(C);ta=a(re,`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=s(re,"CODE",{});var $o=r(ke);aa=a($o,"$clearCache"),$o.forEach(n),na=a(re,`
    method in Node.js and the `),je=s(re,"CODE",{});var _o=r(je);oa=a(_o,"$refresh"),_o.forEach(n),sa=a(re," method in the client."),re.forEach(n),ra=c(i),fe(x.$$.fragment,i),la=c(i),M=s(i,"P",{});var wt=r(M);ia=a(wt,`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=s(wt,"CODE",{});var bo=r(Ne);ha=a(bo,"$refresh"),bo.forEach(n),ca=a(wt,` method, just like in the client,
    for this.`),wt.forEach(n),da=c(i),fe(F.$$.fragment,i),ua=c(i),u=s(i,"P",{});var f=r(u);ya=a(f,"To save an entity, use the "),qe=s(f,"CODE",{});var Co=r(qe);fa=a(Co,"$save"),Co.forEach(n),ma=a(f,` method. Likewise, to delete
    the entity, use the `),Ue=s(f,"CODE",{});var Do=r(Ue);pa=a(Do,"$delete"),Do.forEach(n),va=a(f,` method. You can also call the
    `),Pe=s(f,"CODE",{});var Io=r(Pe);Ea=a(Io,"saveEntity"),Io.forEach(n),ga=a(f,`,
    `),Se=s(f,"CODE",{});var Oo=r(Se);wa=a(Oo,"deleteEntity"),Oo.forEach(n),$a=a(f,", and "),Ae=s(f,"CODE",{});var To=r(Ae);_a=a(To,"deleteEntityByID"),To.forEach(n),ba=a(f,` methods of
    `),Ge=s(f,"CODE",{});var ko=r(Ge);Ca=a(ko,"Nymph"),ko.forEach(n),Da=a(f,". The "),Le=s(f,"CODE",{});var jo=r(Le);Ia=a(jo,"Entity"),jo.forEach(n),Oa=a(f," class uses these methods."),f.forEach(n),Ta=c(i),fe(B.$$.fragment,i),ka=c(i),H=s(i,"P",{});var $t=r(H);ja=a($t,"Entities can't be checked using the "),xe=s($t,"CODE",{});var No=r(xe);Na=a(No,"=="),No.forEach(n),qa=a($t,` operator. Instead, you can
    use the following entity methods.`),$t.forEach(n),Ua=c(i),E=s(i,"UL",{});var U=r(E);Y=s(U,"LI",{});var _t=r(Y);Me=s(_t,"CODE",{});var qo=r(Me);Pa=a(qo,"$is"),qo.forEach(n),Sa=a(_t,` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=s(_t,"UL",{});var le=r(D);Fe=s(le,"LI",{});var Uo=r(Fe);Aa=a(Uo,"They must be entities."),Uo.forEach(n),Ga=c(le),Be=s(le,"LI",{});var Po=r(Be);La=a(Po,"They must have equal GUIDs, or both can have no GUID."),Po.forEach(n),xa=c(le),He=s(le,"LI",{});var So=r(He);Ma=a(So,"If they have no GUIDs, their data must be equal."),So.forEach(n),le.forEach(n),_t.forEach(n),Fa=c(U),z=s(U,"LI",{});var bt=r(z);Ye=s(bt,"CODE",{});var Ao=r(Ye);Ba=a(Ao,"$equals"),Ao.forEach(n),Ha=a(bt,` - Perform a more strict comparison of two entities
      (basically a GUID + class + data check). To return true, the entities must
      meet the following criteria.
      `),g=s(bt,"UL",{});var P=r(g);ze=s(P,"LI",{});var Go=r(ze);Ya=a(Go,"They must be entities."),Go.forEach(n),za=c(P),Ve=s(P,"LI",{});var Lo=r(Ve);Va=a(Lo,"They must have equal GUIDs, or both can have no GUID."),Lo.forEach(n),Qa=c(P),Qe=s(P,"LI",{});var xo=r(Qe);Ra=a(xo,"They must be instances of the same class."),xo.forEach(n),Ja=c(P),Re=s(P,"LI",{});var Mo=r(Re);Ka=a(Mo,"Their data must be equal."),Mo.forEach(n),P.forEach(n),bt.forEach(n),Wa=c(U),m=s(U,"LI",{});var $=r(m);Je=s($,"CODE",{});var Fo=r(Je);Xa=a(Fo,"$inArray"),Fo.forEach(n),Za=a($,` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Ke=s($,"CODE",{});var Bo=r(Ke);en=a(Bo,"strict"),Bo.forEach(n),tn=a($,`. If
      `),We=s($,"CODE",{});var Ho=r(We);an=a(Ho,"strict"),Ho.forEach(n),nn=a($,`
      is false, the function uses `),Xe=s($,"CODE",{});var Yo=r(Xe);on=a(Yo,"$is"),Yo.forEach(n),sn=a($,` to compare, and if it's true,
      the function uses `),Ze=s($,"CODE",{});var zo=r(Ze);rn=a(zo,"$equals"),zo.forEach(n),ln=a($,"."),$.forEach(n),hn=c(U),y=s(U,"LI",{});var p=r(y);et=s(p,"CODE",{});var Vo=r(et);cn=a(Vo,"$arraySearch"),Vo.forEach(n),dn=a(p,` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),tt=s(p,"CODE",{});var Qo=r(tt);un=a(Qo,"strict"),Qo.forEach(n),yn=a(p,". If "),at=s(p,"CODE",{});var Ro=r(at);fn=a(Ro,"strict"),Ro.forEach(n),mn=a(p,` is false, the function uses
      `),nt=s(p,"CODE",{});var Jo=r(nt);pn=a(Jo,"$is"),Jo.forEach(n),vn=a(p,`
      to compare, and if it's true, the function uses `),ot=s(p,"CODE",{});var Ko=r(ot);En=a(Ko,"$equals"),Ko.forEach(n),gn=a(p,`. This
      method may return 0, which evaluates to false, so you should use
      `),st=s(p,"CODE",{});var Wo=r(st);wn=a(Wo,"$inArray"),Wo.forEach(n),$n=a(p,` if you are only checking whether the entity is in the
      array.`),p.forEach(n),U.forEach(n),_n=c(i),fe(V.$$.fragment,i),bn=c(i),I=s(i,"P",{});var ie=r(I);Cn=a(ie,"Client side Nymph entities can use the "),rt=s(ie,"CODE",{});var Xo=r(rt);Dn=a(Xo,"$serverCall"),Xo.forEach(n),In=a(ie,` method to
    call methods on a server side instance of the entity.
    `),lt=s(ie,"CODE",{});var Zo=r(lt);On=a(Zo,"$serverCall"),Zo.forEach(n),Tn=a(ie," expects three parameters."),ie.forEach(n),kn=c(i),O=s(i,"UL",{});var he=r(O);Z=s(he,"LI",{});var ro=r(Z);it=s(ro,"CODE",{});var es=r(it);jn=a(es,"method"),es.forEach(n),Nn=a(ro," - the name of the method to call on the server side object."),ro.forEach(n),qn=c(he),ee=s(he,"LI",{});var lo=r(ee);ht=s(lo,"CODE",{});var ts=r(ht);Un=a(ts,"params"),ts.forEach(n),Pn=a(lo," - an array of the parameters to pass to the method."),lo.forEach(n),Sn=c(he),te=s(he,"LI",{});var io=r(te);ct=s(io,"CODE",{});var as=r(ct);An=a(as,"stateless"),as.forEach(n),Gn=a(io,` - if set to true, the method won't update the entity
      with the returned server side representation.`),io.forEach(n),he.forEach(n),Ln=c(i),T=s(i,"P",{});var ce=r(T);xn=a(ce,`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=s(ce,"CODE",{});var ns=r(dt);Mn=a(ns,"$readyAll"),ns.forEach(n),Fn=a(ce,` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ut=s(ce,"CODE",{});var os=r(ut);Bn=a(os,"stateless"),os.forEach(n),Hn=a(ce," to true."),ce.forEach(n),Yn=c(i),Q=s(i,"P",{});var Ct=r(Q);zn=a(Ct,"You can also call static methods on the server with "),yt=s(Ct,"CODE",{});var ss=r(yt);Vn=a(ss,"serverCallStatic"),ss.forEach(n),Qn=a(Ct,"."),Ct.forEach(n),Rn=c(i),w=s(i,"P",{});var S=r(w);Jn=a(S,`In order to be called from the client side, the method must be listed in the
    `),ft=s(S,"CODE",{});var rs=r(ft);Kn=a(rs,"$clientEnabledMethods"),rs.forEach(n),Wn=a(S,` or
    `),mt=s(S,"CODE",{});var ls=r(mt);Xn=a(ls,"clientEnabledStaticMethods"),ls.forEach(n),Zn=a(S,` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),pt=s(S,"CODE",{});var is=r(pt);eo=a(is,"403 Forbidden"),is.forEach(n),to=a(S," status."),S.forEach(n),ao=c(i),fe(R.$$.fragment,i),i.forEach(n),Et=c(d),ae=s(d,"SECTION",{});var hs=r(ae);k=s(hs,"DIV",{class:!0});var Dt=r(k);ne=s(Dt,"DIV",{class:!0});var cs=r(ne);j=s(cs,"A",{href:!0,class:!0,style:!0});var ds=r(j);no=a(ds,"Previous: Subscribing to Queries"),ds.forEach(n),cs.forEach(n),oo=c(Dt),J=s(Dt,"DIV",{class:!0,style:!0});var us=r(J);N=s(us,"A",{href:!0,class:!0,style:!0});var ys=r(N);so=a(ys,"Next: Defining Entities"),ys.forEach(n),us.forEach(n),Dt.forEach(n),hs.forEach(n),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",G.a=ge,It(X,"font-size","3em"),A(W,"class","major"),A(j,"href",""+(ms+"/user-guide/subscribing-to-queries")),A(j,"class","button"),It(j,"margin",".5em"),A(ne,"class","col-6 col-12-small"),A(N,"href",""+(ms+"/user-guide/defining-entities")),A(N,"class","button"),It(N,"margin",".5em"),A(J,"class","col-6 col-12-small"),It(J,"text-align","end"),A(k,"class","row")},m(d,K){G.m(bs,document.head),e(document.head,ge),Ot(d,vt,K),Ot(d,l,K),e(l,W),e(W,X),e(X,Tt),e(l,kt),e(l,we),e(we,jt),e(l,Nt),e(l,_),e(_,qt),e(_,$e),e($e,Ut),e(_,Pt),e(_,_e),e(_e,St),e(_,At),e(l,Gt),e(l,v),e(v,Lt),e(v,be),e(be,xt),e(v,Mt),e(v,Ce),e(Ce,Ft),e(v,Bt),e(v,De),e(De,Ht),e(v,Yt),e(l,zt),me(L,l,null),e(l,Vt),e(l,Ie),e(Ie,Qt),e(l,Rt),e(l,b),e(b,Jt),e(b,Oe),e(Oe,Kt),e(b,Wt),e(b,Te),e(Te,Xt),e(b,Zt),e(l,ea),e(l,C),e(C,ta),e(C,ke),e(ke,aa),e(C,na),e(C,je),e(je,oa),e(C,sa),e(l,ra),me(x,l,null),e(l,la),e(l,M),e(M,ia),e(M,Ne),e(Ne,ha),e(M,ca),e(l,da),me(F,l,null),e(l,ua),e(l,u),e(u,ya),e(u,qe),e(qe,fa),e(u,ma),e(u,Ue),e(Ue,pa),e(u,va),e(u,Pe),e(Pe,Ea),e(u,ga),e(u,Se),e(Se,wa),e(u,$a),e(u,Ae),e(Ae,_a),e(u,ba),e(u,Ge),e(Ge,Ca),e(u,Da),e(u,Le),e(Le,Ia),e(u,Oa),e(l,Ta),me(B,l,null),e(l,ka),e(l,H),e(H,ja),e(H,xe),e(xe,Na),e(H,qa),e(l,Ua),e(l,E),e(E,Y),e(Y,Me),e(Me,Pa),e(Y,Sa),e(Y,D),e(D,Fe),e(Fe,Aa),e(D,Ga),e(D,Be),e(Be,La),e(D,xa),e(D,He),e(He,Ma),e(E,Fa),e(E,z),e(z,Ye),e(Ye,Ba),e(z,Ha),e(z,g),e(g,ze),e(ze,Ya),e(g,za),e(g,Ve),e(Ve,Va),e(g,Qa),e(g,Qe),e(Qe,Ra),e(g,Ja),e(g,Re),e(Re,Ka),e(E,Wa),e(E,m),e(m,Je),e(Je,Xa),e(m,Za),e(m,Ke),e(Ke,en),e(m,tn),e(m,We),e(We,an),e(m,nn),e(m,Xe),e(Xe,on),e(m,sn),e(m,Ze),e(Ze,rn),e(m,ln),e(E,hn),e(E,y),e(y,et),e(et,cn),e(y,dn),e(y,tt),e(tt,un),e(y,yn),e(y,at),e(at,fn),e(y,mn),e(y,nt),e(nt,pn),e(y,vn),e(y,ot),e(ot,En),e(y,gn),e(y,st),e(st,wn),e(y,$n),e(l,_n),me(V,l,null),e(l,bn),e(l,I),e(I,Cn),e(I,rt),e(rt,Dn),e(I,In),e(I,lt),e(lt,On),e(I,Tn),e(l,kn),e(l,O),e(O,Z),e(Z,it),e(it,jn),e(Z,Nn),e(O,qn),e(O,ee),e(ee,ht),e(ht,Un),e(ee,Pn),e(O,Sn),e(O,te),e(te,ct),e(ct,An),e(te,Gn),e(l,Ln),e(l,T),e(T,xn),e(T,dt),e(dt,Mn),e(T,Fn),e(T,ut),e(ut,Bn),e(T,Hn),e(l,Yn),e(l,Q),e(Q,zn),e(Q,yt),e(yt,Vn),e(Q,Qn),e(l,Rn),e(l,w),e(w,Jn),e(w,ft),e(ft,Kn),e(w,Wn),e(w,mt),e(mt,Xn),e(w,Zn),e(w,pt),e(pt,eo),e(w,to),e(l,ao),me(R,l,null),Ot(d,Et,K),Ot(d,ae,K),e(ae,k),e(k,ne),e(ne,j),e(j,no),e(k,oo),e(k,J),e(J,N),e(N,so),gt=!0},p:Cs,i(d){gt||(pe(L.$$.fragment,d),pe(x.$$.fragment,d),pe(F.$$.fragment,d),pe(B.$$.fragment,d),pe(V.$$.fragment,d),pe(R.$$.fragment,d),gt=!0)},o(d){ve(L.$$.fragment,d),ve(x.$$.fragment,d),ve(F.$$.fragment,d),ve(B.$$.fragment,d),ve(V.$$.fragment,d),ve(R.$$.fragment,d),gt=!1},d(d){n(ge),d&&G.d(),d&&n(vt),d&&n(l),Ee(L),Ee(x),Ee(F),Ee(B),Ee(V),Ee(R),d&&n(Et),d&&n(ae)}}}class Ts extends vs{constructor(G){super();Es(this,G,null,Ds,gs,{})}}export{Ts as default};
