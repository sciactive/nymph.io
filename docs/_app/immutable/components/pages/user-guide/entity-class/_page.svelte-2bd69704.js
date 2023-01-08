import{S as vs,i as Es,s as gs,R as ws,e as fs,a as h,k as n,q as t,w as de,E as $s,T as _s,h as o,c,l as s,m as r,r as a,x as ue,p as It,n as A,C as e,b as Ot,y as ye,B as bs,f as fe,t as me,z as pe}from"../../../../chunks/index-8e853c83.js";import{H as ve,g as Cs}from"../../../../chunks/github-07e092b5.js";import{t as Ee}from"../../../../chunks/typescript-7dd1ec19.js";import{b as ms}from"../../../../chunks/paths-b4419565.js";function Ds(ps){let G,ge,vt,l,W,X,Tt,kt,we,jt,Nt,_,qt,$e,Ut,Pt,_e,St,At,Gt,v,Lt,be,xt,Mt,Ce,Ft,zt,De,Bt,Ht,Yt,L,Rt,Ie,Vt,Qt,b,Jt,Oe,Kt,Wt,Te,Xt,Zt,ea,C,ta,ke,aa,oa,je,na,sa,ra,x,la,M,ia,Ne,ha,ca,da,F,ua,u,ya,qe,fa,ma,Ue,pa,va,Pe,Ea,ga,Se,wa,$a,Ae,_a,ba,Ge,Ca,Da,Le,Ia,Oa,Ta,z,ka,B,ja,xe,Na,qa,Ua,E,H,Me,Pa,Sa,D,Fe,Aa,Ga,ze,La,xa,Be,Ma,Fa,Y,He,za,Ba,g,Ye,Ha,Ya,Re,Ra,Va,Ve,Qa,Ja,Qe,Ka,Wa,m,Je,Xa,Za,Ke,eo,to,We,ao,oo,Xe,no,so,Ze,ro,lo,io,y,et,ho,co,tt,uo,yo,at,fo,mo,ot,po,vo,nt,Eo,go,st,wo,$o,_o,R,bo,I,Co,rt,Do,Io,lt,Oo,To,ko,O,Z,it,jo,No,qo,ee,ht,Uo,Po,So,te,ct,Ao,Go,Lo,T,xo,dt,Mo,Fo,ut,zo,Bo,Ho,V,Yo,yt,Ro,Vo,Qo,w,Jo,ft,Ko,Wo,mt,Xo,Zo,pt,en,tn,an,Q,Et,ae,k,oe,j,on,nn,J,N,sn,gt;return L=new ve({props:{language:Ee,code:`const entity = await MyEntityClass.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),x=new ve({props:{language:Ee,code:`// Create some entities.
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
console.log(entity.foo.bar); // Outputs 'New value.'`}}),F=new ve({props:{language:Ee,code:`// Create an entity.
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
console.log(entity.foo); // Outputs 'New value.'`}}),z=new ve({props:{language:Ee,code:`const entity = await MyEntityClass.factory();

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
await nymph.deleteEntities([entity]);`}}),R=new ve({props:{language:Ee,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
let entity = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');
let entity2 = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');

entity2.someProp = 'some new value';
entity.$is(entity2); // True
entity.$equals(entity2); // False

const arr = [null, null, entity];
entity.$arraySearch(arr); // 2
entity.$inArray(arr); // True
entity.$arraySearch(arr, true); // -1
entity.$inArray(arr, true); // false`}}),Q=new ve({props:{language:Ee,code:`// You can use $serverCall and serverCallStatic directly.
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
const success = await todo.$archive();`}}),{c(){G=new ws(!1),ge=fs(),vt=h(),l=n("section"),W=n("header"),X=n("h1"),Tt=t("Entity Class"),kt=h(),we=n("p"),jt=t(`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),Nt=h(),_=n("p"),qt=t(`In the client, assigning a property internally marks that property as
    "dirty", and calling `),$e=n("code"),Ut=t("$patch"),Pt=t(` will push just the changed
    properties up to the server, whereas `),_e=n("code"),St=t("$save"),At=t(" would push all properties."),Gt=h(),v=n("p"),Lt=t(`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=n("code"),xt=t("$addTag"),Mt=t(", "),Ce=n("code"),Ft=t("$removeTag"),zt=t(`, and
    `),De=n("code"),Bt=t("$hasTag"),Ht=t(` are used, respectively. Each takes any number of tags as
    arguments.`),Yt=h(),de(L.$$.fragment),Rt=h(),Ie=n("p"),Vt=t(`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),Qt=h(),b=n("p"),Jt=t(`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=n("code"),Kt=t("$ready"),Wt=t(` method,
    or by using the `),Te=n("code"),Xt=t("$readyAll"),Zt=t(" method on the entity that contains them."),ea=h(),C=n("p"),ta=t(`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=n("code"),aa=t("$clearCache"),oa=t(`
    method in Node.js and the `),je=n("code"),na=t("$refresh"),sa=t(" method in the client."),ra=h(),de(x.$$.fragment),la=h(),M=n("p"),ia=t(`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=n("code"),ha=t("$refresh"),ca=t(` method, just like in the client,
    for this.`),da=h(),de(F.$$.fragment),ua=h(),u=n("p"),ya=t("To save an entity, use the "),qe=n("code"),fa=t("$save"),ma=t(` method. Likewise, to delete
    the entity, use the `),Ue=n("code"),pa=t("$delete"),va=t(` method. You can also call the
    `),Pe=n("code"),Ea=t("saveEntity"),ga=t(`,
    `),Se=n("code"),wa=t("deleteEntity"),$a=t(", and "),Ae=n("code"),_a=t("deleteEntityByID"),ba=t(` methods of
    `),Ge=n("code"),Ca=t("Nymph"),Da=t(". The "),Le=n("code"),Ia=t("Entity"),Oa=t(" class uses these methods."),Ta=h(),de(z.$$.fragment),ka=h(),B=n("p"),ja=t("Entities can't be checked using the "),xe=n("code"),Na=t("=="),qa=t(` operator. Instead, you can
    use the following entity methods.`),Ua=h(),E=n("ul"),H=n("li"),Me=n("code"),Pa=t("$is"),Sa=t(` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=n("ul"),Fe=n("li"),Aa=t("They must be entities."),Ga=h(),ze=n("li"),La=t("They must have equal GUIDs, or both can have no GUID."),xa=h(),Be=n("li"),Ma=t("If they have no GUIDs, their data must be equal."),Fa=h(),Y=n("li"),He=n("code"),za=t("$equals"),Ba=t(` - Perform a more strict comparison of two entities
      (basically a GUID + class + data check). To return true, the entities must
      meet the following criteria.
      `),g=n("ul"),Ye=n("li"),Ha=t("They must be entities."),Ya=h(),Re=n("li"),Ra=t("They must have equal GUIDs, or both can have no GUID."),Va=h(),Ve=n("li"),Qa=t("They must be instances of the same class."),Ja=h(),Qe=n("li"),Ka=t("Their data must be equal."),Wa=h(),m=n("li"),Je=n("code"),Xa=t("$inArray"),Za=t(` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Ke=n("code"),eo=t("strict"),to=t(`. If
      `),We=n("code"),ao=t("strict"),oo=t(`
      is false, the function uses `),Xe=n("code"),no=t("$is"),so=t(` to compare, and if it's true,
      the function uses `),Ze=n("code"),ro=t("$equals"),lo=t("."),io=h(),y=n("li"),et=n("code"),ho=t("$arraySearch"),co=t(` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),tt=n("code"),uo=t("strict"),yo=t(". If "),at=n("code"),fo=t("strict"),mo=t(` is false, the function uses
      `),ot=n("code"),po=t("$is"),vo=t(`
      to compare, and if it's true, the function uses `),nt=n("code"),Eo=t("$equals"),go=t(`. This
      method may return 0, which evaluates to false, so you should use
      `),st=n("code"),wo=t("$inArray"),$o=t(` if you are only checking whether the entity is in the
      array.`),_o=h(),de(R.$$.fragment),bo=h(),I=n("p"),Co=t("Client side Nymph entities can use the "),rt=n("code"),Do=t("$serverCall"),Io=t(` method to
    call methods on a server side instance of the entity.
    `),lt=n("code"),Oo=t("$serverCall"),To=t(" expects three parameters."),ko=h(),O=n("ul"),Z=n("li"),it=n("code"),jo=t("method"),No=t(" - the name of the method to call on the server side object."),qo=h(),ee=n("li"),ht=n("code"),Uo=t("params"),Po=t(" - an array of the parameters to pass to the method."),So=h(),te=n("li"),ct=n("code"),Ao=t("stateless"),Go=t(` - if set to true, the method won't update the entity
      with the returned server side representation.`),Lo=h(),T=n("p"),xo=t(`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=n("code"),Mo=t("$readyAll"),Fo=t(` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ut=n("code"),zo=t("stateless"),Bo=t(" to true."),Ho=h(),V=n("p"),Yo=t("You can also call static methods on the server with "),yt=n("code"),Ro=t("serverCallStatic"),Vo=t("."),Qo=h(),w=n("p"),Jo=t(`In order to be called from the client side, the method must be listed in the
    `),ft=n("code"),Ko=t("$clientEnabledMethods"),Wo=t(` or
    `),mt=n("code"),Xo=t("clientEnabledStaticMethods"),Zo=t(` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),pt=n("code"),en=t("403 Forbidden"),tn=t(" status."),an=h(),de(Q.$$.fragment),Et=h(),ae=n("section"),k=n("div"),oe=n("div"),j=n("a"),on=t("Previous: Subscribing to Queries"),nn=h(),J=n("div"),N=n("a"),sn=t("Next: Defining Entities"),this.h()},l(d){const K=$s("svelte-24q1tq",document.head);G=_s(K,!1),ge=fs(),K.forEach(o),vt=c(d),l=s(d,"SECTION",{});var i=r(l);W=s(i,"HEADER",{class:!0});var cn=r(W);X=s(cn,"H1",{style:!0});var dn=r(X);Tt=a(dn,"Entity Class"),dn.forEach(o),cn.forEach(o),kt=c(i),we=s(i,"P",{});var un=r(we);jt=a(un,`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),un.forEach(o),Nt=c(i),_=s(i,"P",{});var ne=r(_);qt=a(ne,`In the client, assigning a property internally marks that property as
    "dirty", and calling `),$e=s(ne,"CODE",{});var yn=r($e);Ut=a(yn,"$patch"),yn.forEach(o),Pt=a(ne,` will push just the changed
    properties up to the server, whereas `),_e=s(ne,"CODE",{});var fn=r(_e);St=a(fn,"$save"),fn.forEach(o),At=a(ne," would push all properties."),ne.forEach(o),Gt=c(i),v=s(i,"P",{});var q=r(v);Lt=a(q,`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),be=s(q,"CODE",{});var mn=r(be);xt=a(mn,"$addTag"),mn.forEach(o),Mt=a(q,", "),Ce=s(q,"CODE",{});var pn=r(Ce);Ft=a(pn,"$removeTag"),pn.forEach(o),zt=a(q,`, and
    `),De=s(q,"CODE",{});var vn=r(De);Bt=a(vn,"$hasTag"),vn.forEach(o),Ht=a(q,` are used, respectively. Each takes any number of tags as
    arguments.`),q.forEach(o),Yt=c(i),ue(L.$$.fragment,i),Rt=c(i),Ie=s(i,"P",{});var En=r(Ie);Vt=a(En,`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),En.forEach(o),Qt=c(i),b=s(i,"P",{});var se=r(b);Jt=a(se,`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),Oe=s(se,"CODE",{});var gn=r(Oe);Kt=a(gn,"$ready"),gn.forEach(o),Wt=a(se,` method,
    or by using the `),Te=s(se,"CODE",{});var wn=r(Te);Xt=a(wn,"$readyAll"),wn.forEach(o),Zt=a(se," method on the entity that contains them."),se.forEach(o),ea=c(i),C=s(i,"P",{});var re=r(C);ta=a(re,`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),ke=s(re,"CODE",{});var $n=r(ke);aa=a($n,"$clearCache"),$n.forEach(o),oa=a(re,`
    method in Node.js and the `),je=s(re,"CODE",{});var _n=r(je);na=a(_n,"$refresh"),_n.forEach(o),sa=a(re," method in the client."),re.forEach(o),ra=c(i),ue(x.$$.fragment,i),la=c(i),M=s(i,"P",{});var wt=r(M);ia=a(wt,`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Ne=s(wt,"CODE",{});var bn=r(Ne);ha=a(bn,"$refresh"),bn.forEach(o),ca=a(wt,` method, just like in the client,
    for this.`),wt.forEach(o),da=c(i),ue(F.$$.fragment,i),ua=c(i),u=s(i,"P",{});var f=r(u);ya=a(f,"To save an entity, use the "),qe=s(f,"CODE",{});var Cn=r(qe);fa=a(Cn,"$save"),Cn.forEach(o),ma=a(f,` method. Likewise, to delete
    the entity, use the `),Ue=s(f,"CODE",{});var Dn=r(Ue);pa=a(Dn,"$delete"),Dn.forEach(o),va=a(f,` method. You can also call the
    `),Pe=s(f,"CODE",{});var In=r(Pe);Ea=a(In,"saveEntity"),In.forEach(o),ga=a(f,`,
    `),Se=s(f,"CODE",{});var On=r(Se);wa=a(On,"deleteEntity"),On.forEach(o),$a=a(f,", and "),Ae=s(f,"CODE",{});var Tn=r(Ae);_a=a(Tn,"deleteEntityByID"),Tn.forEach(o),ba=a(f,` methods of
    `),Ge=s(f,"CODE",{});var kn=r(Ge);Ca=a(kn,"Nymph"),kn.forEach(o),Da=a(f,". The "),Le=s(f,"CODE",{});var jn=r(Le);Ia=a(jn,"Entity"),jn.forEach(o),Oa=a(f," class uses these methods."),f.forEach(o),Ta=c(i),ue(z.$$.fragment,i),ka=c(i),B=s(i,"P",{});var $t=r(B);ja=a($t,"Entities can't be checked using the "),xe=s($t,"CODE",{});var Nn=r(xe);Na=a(Nn,"=="),Nn.forEach(o),qa=a($t,` operator. Instead, you can
    use the following entity methods.`),$t.forEach(o),Ua=c(i),E=s(i,"UL",{});var U=r(E);H=s(U,"LI",{});var _t=r(H);Me=s(_t,"CODE",{});var qn=r(Me);Pa=a(qn,"$is"),qn.forEach(o),Sa=a(_t,` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=s(_t,"UL",{});var le=r(D);Fe=s(le,"LI",{});var Un=r(Fe);Aa=a(Un,"They must be entities."),Un.forEach(o),Ga=c(le),ze=s(le,"LI",{});var Pn=r(ze);La=a(Pn,"They must have equal GUIDs, or both can have no GUID."),Pn.forEach(o),xa=c(le),Be=s(le,"LI",{});var Sn=r(Be);Ma=a(Sn,"If they have no GUIDs, their data must be equal."),Sn.forEach(o),le.forEach(o),_t.forEach(o),Fa=c(U),Y=s(U,"LI",{});var bt=r(Y);He=s(bt,"CODE",{});var An=r(He);za=a(An,"$equals"),An.forEach(o),Ba=a(bt,` - Perform a more strict comparison of two entities
      (basically a GUID + class + data check). To return true, the entities must
      meet the following criteria.
      `),g=s(bt,"UL",{});var P=r(g);Ye=s(P,"LI",{});var Gn=r(Ye);Ha=a(Gn,"They must be entities."),Gn.forEach(o),Ya=c(P),Re=s(P,"LI",{});var Ln=r(Re);Ra=a(Ln,"They must have equal GUIDs, or both can have no GUID."),Ln.forEach(o),Va=c(P),Ve=s(P,"LI",{});var xn=r(Ve);Qa=a(xn,"They must be instances of the same class."),xn.forEach(o),Ja=c(P),Qe=s(P,"LI",{});var Mn=r(Qe);Ka=a(Mn,"Their data must be equal."),Mn.forEach(o),P.forEach(o),bt.forEach(o),Wa=c(U),m=s(U,"LI",{});var $=r(m);Je=s($,"CODE",{});var Fn=r(Je);Xa=a(Fn,"$inArray"),Fn.forEach(o),Za=a($,` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Ke=s($,"CODE",{});var zn=r(Ke);eo=a(zn,"strict"),zn.forEach(o),to=a($,`. If
      `),We=s($,"CODE",{});var Bn=r(We);ao=a(Bn,"strict"),Bn.forEach(o),oo=a($,`
      is false, the function uses `),Xe=s($,"CODE",{});var Hn=r(Xe);no=a(Hn,"$is"),Hn.forEach(o),so=a($,` to compare, and if it's true,
      the function uses `),Ze=s($,"CODE",{});var Yn=r(Ze);ro=a(Yn,"$equals"),Yn.forEach(o),lo=a($,"."),$.forEach(o),io=c(U),y=s(U,"LI",{});var p=r(y);et=s(p,"CODE",{});var Rn=r(et);ho=a(Rn,"$arraySearch"),Rn.forEach(o),co=a(p,` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),tt=s(p,"CODE",{});var Vn=r(tt);uo=a(Vn,"strict"),Vn.forEach(o),yo=a(p,". If "),at=s(p,"CODE",{});var Qn=r(at);fo=a(Qn,"strict"),Qn.forEach(o),mo=a(p,` is false, the function uses
      `),ot=s(p,"CODE",{});var Jn=r(ot);po=a(Jn,"$is"),Jn.forEach(o),vo=a(p,`
      to compare, and if it's true, the function uses `),nt=s(p,"CODE",{});var Kn=r(nt);Eo=a(Kn,"$equals"),Kn.forEach(o),go=a(p,`. This
      method may return 0, which evaluates to false, so you should use
      `),st=s(p,"CODE",{});var Wn=r(st);wo=a(Wn,"$inArray"),Wn.forEach(o),$o=a(p,` if you are only checking whether the entity is in the
      array.`),p.forEach(o),U.forEach(o),_o=c(i),ue(R.$$.fragment,i),bo=c(i),I=s(i,"P",{});var ie=r(I);Co=a(ie,"Client side Nymph entities can use the "),rt=s(ie,"CODE",{});var Xn=r(rt);Do=a(Xn,"$serverCall"),Xn.forEach(o),Io=a(ie,` method to
    call methods on a server side instance of the entity.
    `),lt=s(ie,"CODE",{});var Zn=r(lt);Oo=a(Zn,"$serverCall"),Zn.forEach(o),To=a(ie," expects three parameters."),ie.forEach(o),ko=c(i),O=s(i,"UL",{});var he=r(O);Z=s(he,"LI",{});var rn=r(Z);it=s(rn,"CODE",{});var es=r(it);jo=a(es,"method"),es.forEach(o),No=a(rn," - the name of the method to call on the server side object."),rn.forEach(o),qo=c(he),ee=s(he,"LI",{});var ln=r(ee);ht=s(ln,"CODE",{});var ts=r(ht);Uo=a(ts,"params"),ts.forEach(o),Po=a(ln," - an array of the parameters to pass to the method."),ln.forEach(o),So=c(he),te=s(he,"LI",{});var hn=r(te);ct=s(hn,"CODE",{});var as=r(ct);Ao=a(as,"stateless"),as.forEach(o),Go=a(hn,` - if set to true, the method won't update the entity
      with the returned server side representation.`),hn.forEach(o),he.forEach(o),Lo=c(i),T=s(i,"P",{});var ce=r(T);xo=a(ce,`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),dt=s(ce,"CODE",{});var os=r(dt);Mo=a(os,"$readyAll"),os.forEach(o),Fo=a(ce,` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ut=s(ce,"CODE",{});var ns=r(ut);zo=a(ns,"stateless"),ns.forEach(o),Bo=a(ce," to true."),ce.forEach(o),Ho=c(i),V=s(i,"P",{});var Ct=r(V);Yo=a(Ct,"You can also call static methods on the server with "),yt=s(Ct,"CODE",{});var ss=r(yt);Ro=a(ss,"serverCallStatic"),ss.forEach(o),Vo=a(Ct,"."),Ct.forEach(o),Qo=c(i),w=s(i,"P",{});var S=r(w);Jo=a(S,`In order to be called from the client side, the method must be listed in the
    `),ft=s(S,"CODE",{});var rs=r(ft);Ko=a(rs,"$clientEnabledMethods"),rs.forEach(o),Wo=a(S,` or
    `),mt=s(S,"CODE",{});var ls=r(mt);Xo=a(ls,"clientEnabledStaticMethods"),ls.forEach(o),Zo=a(S,` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),pt=s(S,"CODE",{});var is=r(pt);en=a(is,"403 Forbidden"),is.forEach(o),tn=a(S," status."),S.forEach(o),an=c(i),ue(Q.$$.fragment,i),i.forEach(o),Et=c(d),ae=s(d,"SECTION",{});var hs=r(ae);k=s(hs,"DIV",{class:!0});var Dt=r(k);oe=s(Dt,"DIV",{class:!0});var cs=r(oe);j=s(cs,"A",{href:!0,class:!0,style:!0});var ds=r(j);on=a(ds,"Previous: Subscribing to Queries"),ds.forEach(o),cs.forEach(o),nn=c(Dt),J=s(Dt,"DIV",{class:!0,style:!0});var us=r(J);N=s(us,"A",{href:!0,class:!0,style:!0});var ys=r(N);sn=a(ys,"Next: Defining Entities"),ys.forEach(o),us.forEach(o),Dt.forEach(o),hs.forEach(o),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",G.a=ge,It(X,"font-size","3em"),A(W,"class","major"),A(j,"href",ms+"/user-guide/subscribing-to-queries"),A(j,"class","button"),It(j,"margin",".5em"),A(oe,"class","col-6 col-12-small"),A(N,"href",ms+"/user-guide/defining-entities"),A(N,"class","button"),It(N,"margin",".5em"),A(J,"class","col-6 col-12-small"),It(J,"text-align","end"),A(k,"class","row")},m(d,K){G.m(Cs,document.head),e(document.head,ge),Ot(d,vt,K),Ot(d,l,K),e(l,W),e(W,X),e(X,Tt),e(l,kt),e(l,we),e(we,jt),e(l,Nt),e(l,_),e(_,qt),e(_,$e),e($e,Ut),e(_,Pt),e(_,_e),e(_e,St),e(_,At),e(l,Gt),e(l,v),e(v,Lt),e(v,be),e(be,xt),e(v,Mt),e(v,Ce),e(Ce,Ft),e(v,zt),e(v,De),e(De,Bt),e(v,Ht),e(l,Yt),ye(L,l,null),e(l,Rt),e(l,Ie),e(Ie,Vt),e(l,Qt),e(l,b),e(b,Jt),e(b,Oe),e(Oe,Kt),e(b,Wt),e(b,Te),e(Te,Xt),e(b,Zt),e(l,ea),e(l,C),e(C,ta),e(C,ke),e(ke,aa),e(C,oa),e(C,je),e(je,na),e(C,sa),e(l,ra),ye(x,l,null),e(l,la),e(l,M),e(M,ia),e(M,Ne),e(Ne,ha),e(M,ca),e(l,da),ye(F,l,null),e(l,ua),e(l,u),e(u,ya),e(u,qe),e(qe,fa),e(u,ma),e(u,Ue),e(Ue,pa),e(u,va),e(u,Pe),e(Pe,Ea),e(u,ga),e(u,Se),e(Se,wa),e(u,$a),e(u,Ae),e(Ae,_a),e(u,ba),e(u,Ge),e(Ge,Ca),e(u,Da),e(u,Le),e(Le,Ia),e(u,Oa),e(l,Ta),ye(z,l,null),e(l,ka),e(l,B),e(B,ja),e(B,xe),e(xe,Na),e(B,qa),e(l,Ua),e(l,E),e(E,H),e(H,Me),e(Me,Pa),e(H,Sa),e(H,D),e(D,Fe),e(Fe,Aa),e(D,Ga),e(D,ze),e(ze,La),e(D,xa),e(D,Be),e(Be,Ma),e(E,Fa),e(E,Y),e(Y,He),e(He,za),e(Y,Ba),e(Y,g),e(g,Ye),e(Ye,Ha),e(g,Ya),e(g,Re),e(Re,Ra),e(g,Va),e(g,Ve),e(Ve,Qa),e(g,Ja),e(g,Qe),e(Qe,Ka),e(E,Wa),e(E,m),e(m,Je),e(Je,Xa),e(m,Za),e(m,Ke),e(Ke,eo),e(m,to),e(m,We),e(We,ao),e(m,oo),e(m,Xe),e(Xe,no),e(m,so),e(m,Ze),e(Ze,ro),e(m,lo),e(E,io),e(E,y),e(y,et),e(et,ho),e(y,co),e(y,tt),e(tt,uo),e(y,yo),e(y,at),e(at,fo),e(y,mo),e(y,ot),e(ot,po),e(y,vo),e(y,nt),e(nt,Eo),e(y,go),e(y,st),e(st,wo),e(y,$o),e(l,_o),ye(R,l,null),e(l,bo),e(l,I),e(I,Co),e(I,rt),e(rt,Do),e(I,Io),e(I,lt),e(lt,Oo),e(I,To),e(l,ko),e(l,O),e(O,Z),e(Z,it),e(it,jo),e(Z,No),e(O,qo),e(O,ee),e(ee,ht),e(ht,Uo),e(ee,Po),e(O,So),e(O,te),e(te,ct),e(ct,Ao),e(te,Go),e(l,Lo),e(l,T),e(T,xo),e(T,dt),e(dt,Mo),e(T,Fo),e(T,ut),e(ut,zo),e(T,Bo),e(l,Ho),e(l,V),e(V,Yo),e(V,yt),e(yt,Ro),e(V,Vo),e(l,Qo),e(l,w),e(w,Jo),e(w,ft),e(ft,Ko),e(w,Wo),e(w,mt),e(mt,Xo),e(w,Zo),e(w,pt),e(pt,en),e(w,tn),e(l,an),ye(Q,l,null),Ot(d,Et,K),Ot(d,ae,K),e(ae,k),e(k,oe),e(oe,j),e(j,on),e(k,nn),e(k,J),e(J,N),e(N,sn),gt=!0},p:bs,i(d){gt||(fe(L.$$.fragment,d),fe(x.$$.fragment,d),fe(F.$$.fragment,d),fe(z.$$.fragment,d),fe(R.$$.fragment,d),fe(Q.$$.fragment,d),gt=!0)},o(d){me(L.$$.fragment,d),me(x.$$.fragment,d),me(F.$$.fragment,d),me(z.$$.fragment,d),me(R.$$.fragment,d),me(Q.$$.fragment,d),gt=!1},d(d){o(ge),d&&G.d(),d&&o(vt),d&&o(l),pe(L),pe(x),pe(F),pe(z),pe(R),pe(Q),d&&o(Et),d&&o(ae)}}}class js extends vs{constructor(G){super(),Es(this,G,null,Ds,gs,{})}}export{js as default};
