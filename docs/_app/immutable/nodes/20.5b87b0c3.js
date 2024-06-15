import{S as ds,i as us,s as fs,R as ys,e as ls,a as h,k as o,q as t,y as le,F as ms,T as ps,h as n,c,l as s,m as r,r as a,z as he,p as so,n as ce,C as e,b as bt,A as de,D as Es,g as ue,d as fe,B as ye}from"../chunks/index.d7cc8d8b.js";import{H as me,g as vs}from"../chunks/github.df9008b1.js";import{t as pe}from"../chunks/typescript.7dd1ec19.js";import{b as hs}from"../chunks/paths.d307dac8.js";function gs(cs){let S,Ee,mt,i,J,K,Ct,Dt,ve,Ot,Tt,w,kt,ge,It,qt,$e,Nt,Ut,jt,E,Pt,we,At,St,_e,Gt,Lt,be,xt,Mt,Ft,G,zt,_,Ht,Ce,Yt,Bt,De,Qt,Rt,Jt,b,Kt,Oe,Vt,Wt,Te,Xt,Zt,ea,L,ta,x,aa,ke,na,oa,sa,M,ra,u,ia,Ie,la,ha,qe,ca,da,Ne,ua,fa,Ue,ya,ma,je,pa,Ea,Pe,va,ga,Ae,$a,wa,_a,F,ba,z,Ca,Se,Da,Oa,Ta,v,H,Ge,ka,Ia,C,Le,qa,Na,xe,Ua,ja,Me,Pa,Aa,D,Fe,Sa,Ga,ze,La,xa,O,He,Ma,Fa,Ye,za,Ha,Be,Ya,Ba,p,Qe,Qa,Ra,Re,Ja,Ka,Je,Va,Wa,Ke,Xa,Za,Ve,en,tn,an,f,We,nn,on,Xe,sn,rn,Ze,ln,hn,et,cn,dn,tt,un,fn,at,yn,mn,nt,pn,En,vn,Y,gn,T,$n,ot,wn,_n,st,bn,Cn,Dn,k,V,rt,On,Tn,kn,W,it,In,qn,Nn,X,lt,Un,jn,Pn,I,An,ht,Sn,Gn,ct,Ln,xn,Mn,B,Fn,dt,zn,Hn,Yn,g,Bn,ut,Qn,Rn,ft,Jn,Kn,yt,Vn,Wn,Xn,Q,pt,q,N,Zn,eo,U,to,Et;return G=new me({props:{language:pe,code:`const entity = await MyEntity.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),L=new me({props:{language:pe,code:`// Create some entities.
let entity = await MyEntity.factory();
entity.foo = await MyEntity.factory();
entity.foo.bar = 'Old value.';
await entity.foo.$save();
await entity.$save();

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
await entity.foo.$wake();
// Else if on the client
await entity.$refresh();
await entity.foo.$wake();
// End if
console.log(entity.foo.bar); // Outputs 'New value.'`}}),M=new me({props:{language:pe,code:`// Create an entity.
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
console.log(entity.foo); // Outputs 'New value.'`}}),F=new me({props:{language:pe,code:`const entity = await MyEntity.factory();

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
await nymph.deleteEntities([entity]);`}}),Y=new me({props:{language:pe,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
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
entity.$inArray(arr, true); // false`}}),Q=new me({props:{language:pe,code:`// You can use $serverCall and serverCallStatic directly.
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
const success = await todo.$archive();`}}),{c(){S=new ys(!1),Ee=ls(),mt=h(),i=o("section"),J=o("header"),K=o("h1"),Ct=t("Entity Class"),Dt=h(),ve=o("p"),Ot=t(`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),Tt=h(),w=o("p"),kt=t(`In the client, assigning a property internally marks that property as
    "dirty", and calling `),ge=o("code"),It=t("$patch"),qt=t(` will push just the changed
    properties up to the server, whereas `),$e=o("code"),Nt=t("$save"),Ut=t(" would push all properties."),jt=h(),E=o("p"),Pt=t(`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),we=o("code"),At=t("$addTag"),St=t(", "),_e=o("code"),Gt=t("$removeTag"),Lt=t(`, and
    `),be=o("code"),xt=t("$hasTag"),Mt=t(` are used, respectively. Each takes any number of tags as
    arguments.`),Ft=h(),le(G.$$.fragment),zt=h(),_=o("p"),Ht=t(`Entities that have been saved inside another entity's property are loaded as
    "sleeping references". This means their data is not actually pulled from the
    database/server. It will "wake up" when you use `),Ce=o("code"),Yt=t("$wake"),Bt=t(` on it or
    `),De=o("code"),Qt=t("$wakeAll"),Rt=t(" on the entity that contains it."),Jt=h(),b=o("p"),Kt=t(`To clear the cache of referenced entities, so that the next time one is
    awoken, it will be pulled from the database, use the `),Oe=o("code"),Vt=t("$clearCache"),Wt=t(`
    method in Node.js or the `),Te=o("code"),Xt=t("$refresh"),Zt=t(" method in the client."),ea=h(),le(L.$$.fragment),ta=h(),x=o("p"),aa=t(`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),ke=o("code"),na=t("$refresh"),oa=t(` method, just like in the client,
    for this.`),sa=h(),le(M.$$.fragment),ra=h(),u=o("p"),ia=t("To save an entity, use the "),Ie=o("code"),la=t("$save"),ha=t(` method. Likewise, to delete
    the entity, use the `),qe=o("code"),ca=t("$delete"),da=t(` method. You can also call the
    `),Ne=o("code"),ua=t("saveEntity"),fa=t(`,
    `),Ue=o("code"),ya=t("deleteEntity"),ma=t(", and "),je=o("code"),pa=t("deleteEntityByID"),Ea=t(` methods of
    `),Pe=o("code"),va=t("Nymph"),ga=t(". The "),Ae=o("code"),$a=t("Entity"),wa=t(" class uses these methods."),_a=h(),le(F.$$.fragment),ba=h(),z=o("p"),Ca=t("Entities can't be checked using the "),Se=o("code"),Da=t("=="),Oa=t(` operator. Instead, you can
    use the following entity methods.`),Ta=h(),v=o("ul"),H=o("li"),Ge=o("code"),ka=t("$is"),Ia=t(` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),C=o("ul"),Le=o("li"),qa=t("They must be entities."),Na=h(),xe=o("li"),Ua=t("They must have equal GUIDs, or both can have no GUID."),ja=h(),Me=o("li"),Pa=t("If they have no GUIDs, their data and tags must be equal."),Aa=h(),D=o("li"),Fe=o("code"),Sa=t("$equals"),Ga=t(` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria. Unlike `),ze=o("code"),La=t("$is"),xa=t(`, this method can't be
      used on sleeping references.
      `),O=o("ul"),He=o("li"),Ma=t("They must be entities."),Fa=h(),Ye=o("li"),za=t("They must have equal GUIDs, or both can have no GUID."),Ha=h(),Be=o("li"),Ya=t("Their data and tags must be equal."),Ba=h(),p=o("li"),Qe=o("code"),Qa=t("$inArray"),Ra=t(` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Re=o("code"),Ja=t("strict"),Ka=t(`. If
      `),Je=o("code"),Va=t("strict"),Wa=t(`
      is false or undefined, the function uses `),Ke=o("code"),Xa=t("$is"),Za=t(` to compare, and
      if it's true, the function uses `),Ve=o("code"),en=t("$equals"),tn=t("."),an=h(),f=o("li"),We=o("code"),nn=t("$arraySearch"),on=t(` - Search an array for the entity and return its
      index, or `),Xe=o("code"),sn=t("-1"),rn=t(` if it's not found. Takes two arguments, the
      array and a boolean
      `),Ze=o("code"),ln=t("strict"),hn=t(". If "),et=o("code"),cn=t("strict"),dn=t(` is false or undefined, the
      function uses
      `),tt=o("code"),un=t("$is"),fn=t(`
      to compare, and if it's true, the function uses `),at=o("code"),yn=t("$equals"),mn=t(`. This
      method may return 0, which evaluates to false, so you should use
      `),nt=o("code"),pn=t("$inArray"),En=t(` if you are only checking whether the entity is in the
      array.`),vn=h(),le(Y.$$.fragment),gn=h(),T=o("p"),$n=t("Client side Nymph entities can use the "),ot=o("code"),wn=t("$serverCall"),_n=t(` method to
    call methods on a server side instance of the entity.
    `),st=o("code"),bn=t("$serverCall"),Cn=t(" expects three parameters."),Dn=h(),k=o("ul"),V=o("li"),rt=o("code"),On=t("method"),Tn=t(" - the name of the method to call on the server side object."),kn=h(),W=o("li"),it=o("code"),In=t("params"),qn=t(" - an array of the parameters to pass to the method."),Nn=h(),X=o("li"),lt=o("code"),Un=t("stateless"),jn=t(` - if set to true, the method won't update the entity
      with the returned server side representation.`),Pn=h(),I=o("p"),An=t(`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),ht=o("code"),Sn=t("$readyAll"),Gn=t(` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ct=o("code"),Ln=t("stateless"),xn=t(" to true."),Mn=h(),B=o("p"),Fn=t("You can also call static methods on the server with "),dt=o("code"),zn=t("serverCallStatic"),Hn=t("."),Yn=h(),g=o("p"),Bn=t(`In order to be called from the client side, the method must be listed in the
    `),ut=o("code"),Qn=t("$clientEnabledMethods"),Rn=t(` or
    `),ft=o("code"),Jn=t("clientEnabledStaticMethods"),Kn=t(` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),yt=o("code"),Vn=t("403 Forbidden"),Wn=t(" status."),Xn=h(),le(Q.$$.fragment),pt=h(),q=o("section"),N=o("a"),Zn=t("Previous: Subscribing to Queries"),eo=h(),U=o("a"),to=t("Next: Defining Entities"),this.h()},l(d){const R=ms("svelte-24q1tq",document.head);S=ps(R,!1),Ee=ls(),R.forEach(n),mt=c(d),i=s(d,"SECTION",{});var l=r(i);J=s(l,"HEADER",{class:!0});var ro=r(J);K=s(ro,"H1",{style:!0});var io=r(K);Ct=a(io,"Entity Class"),io.forEach(n),ro.forEach(n),Dt=c(l),ve=s(l,"P",{});var lo=r(ve);Ot=a(lo,`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),lo.forEach(n),Tt=c(l),w=s(l,"P",{});var Z=r(w);kt=a(Z,`In the client, assigning a property internally marks that property as
    "dirty", and calling `),ge=s(Z,"CODE",{});var ho=r(ge);It=a(ho,"$patch"),ho.forEach(n),qt=a(Z,` will push just the changed
    properties up to the server, whereas `),$e=s(Z,"CODE",{});var co=r($e);Nt=a(co,"$save"),co.forEach(n),Ut=a(Z," would push all properties."),Z.forEach(n),jt=c(l),E=s(l,"P",{});var j=r(E);Pt=a(j,`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),we=s(j,"CODE",{});var uo=r(we);At=a(uo,"$addTag"),uo.forEach(n),St=a(j,", "),_e=s(j,"CODE",{});var fo=r(_e);Gt=a(fo,"$removeTag"),fo.forEach(n),Lt=a(j,`, and
    `),be=s(j,"CODE",{});var yo=r(be);xt=a(yo,"$hasTag"),yo.forEach(n),Mt=a(j,` are used, respectively. Each takes any number of tags as
    arguments.`),j.forEach(n),Ft=c(l),he(G.$$.fragment,l),zt=c(l),_=s(l,"P",{});var ee=r(_);Ht=a(ee,`Entities that have been saved inside another entity's property are loaded as
    "sleeping references". This means their data is not actually pulled from the
    database/server. It will "wake up" when you use `),Ce=s(ee,"CODE",{});var mo=r(Ce);Yt=a(mo,"$wake"),mo.forEach(n),Bt=a(ee,` on it or
    `),De=s(ee,"CODE",{});var po=r(De);Qt=a(po,"$wakeAll"),po.forEach(n),Rt=a(ee," on the entity that contains it."),ee.forEach(n),Jt=c(l),b=s(l,"P",{});var te=r(b);Kt=a(te,`To clear the cache of referenced entities, so that the next time one is
    awoken, it will be pulled from the database, use the `),Oe=s(te,"CODE",{});var Eo=r(Oe);Vt=a(Eo,"$clearCache"),Eo.forEach(n),Wt=a(te,`
    method in Node.js or the `),Te=s(te,"CODE",{});var vo=r(Te);Xt=a(vo,"$refresh"),vo.forEach(n),Zt=a(te," method in the client."),te.forEach(n),ea=c(l),he(L.$$.fragment,l),ta=c(l),x=s(l,"P",{});var vt=r(x);aa=a(vt,`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),ke=s(vt,"CODE",{});var go=r(ke);na=a(go,"$refresh"),go.forEach(n),oa=a(vt,` method, just like in the client,
    for this.`),vt.forEach(n),sa=c(l),he(M.$$.fragment,l),ra=c(l),u=s(l,"P",{});var y=r(u);ia=a(y,"To save an entity, use the "),Ie=s(y,"CODE",{});var $o=r(Ie);la=a($o,"$save"),$o.forEach(n),ha=a(y,` method. Likewise, to delete
    the entity, use the `),qe=s(y,"CODE",{});var wo=r(qe);ca=a(wo,"$delete"),wo.forEach(n),da=a(y,` method. You can also call the
    `),Ne=s(y,"CODE",{});var _o=r(Ne);ua=a(_o,"saveEntity"),_o.forEach(n),fa=a(y,`,
    `),Ue=s(y,"CODE",{});var bo=r(Ue);ya=a(bo,"deleteEntity"),bo.forEach(n),ma=a(y,", and "),je=s(y,"CODE",{});var Co=r(je);pa=a(Co,"deleteEntityByID"),Co.forEach(n),Ea=a(y,` methods of
    `),Pe=s(y,"CODE",{});var Do=r(Pe);va=a(Do,"Nymph"),Do.forEach(n),ga=a(y,". The "),Ae=s(y,"CODE",{});var Oo=r(Ae);$a=a(Oo,"Entity"),Oo.forEach(n),wa=a(y," class uses these methods."),y.forEach(n),_a=c(l),he(F.$$.fragment,l),ba=c(l),z=s(l,"P",{});var gt=r(z);Ca=a(gt,"Entities can't be checked using the "),Se=s(gt,"CODE",{});var To=r(Se);Da=a(To,"=="),To.forEach(n),Oa=a(gt,` operator. Instead, you can
    use the following entity methods.`),gt.forEach(n),Ta=c(l),v=s(l,"UL",{});var P=r(v);H=s(P,"LI",{});var $t=r(H);Ge=s($t,"CODE",{});var ko=r(Ge);ka=a(ko,"$is"),ko.forEach(n),Ia=a($t,` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),C=s($t,"UL",{});var ae=r(C);Le=s(ae,"LI",{});var Io=r(Le);qa=a(Io,"They must be entities."),Io.forEach(n),Na=c(ae),xe=s(ae,"LI",{});var qo=r(xe);Ua=a(qo,"They must have equal GUIDs, or both can have no GUID."),qo.forEach(n),ja=c(ae),Me=s(ae,"LI",{});var No=r(Me);Pa=a(No,"If they have no GUIDs, their data and tags must be equal."),No.forEach(n),ae.forEach(n),$t.forEach(n),Aa=c(P),D=s(P,"LI",{});var ne=r(D);Fe=s(ne,"CODE",{});var Uo=r(Fe);Sa=a(Uo,"$equals"),Uo.forEach(n),Ga=a(ne,` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria. Unlike `),ze=s(ne,"CODE",{});var jo=r(ze);La=a(jo,"$is"),jo.forEach(n),xa=a(ne,`, this method can't be
      used on sleeping references.
      `),O=s(ne,"UL",{});var oe=r(O);He=s(oe,"LI",{});var Po=r(He);Ma=a(Po,"They must be entities."),Po.forEach(n),Fa=c(oe),Ye=s(oe,"LI",{});var Ao=r(Ye);za=a(Ao,"They must have equal GUIDs, or both can have no GUID."),Ao.forEach(n),Ha=c(oe),Be=s(oe,"LI",{});var So=r(Be);Ya=a(So,"Their data and tags must be equal."),So.forEach(n),oe.forEach(n),ne.forEach(n),Ba=c(P),p=s(P,"LI",{});var $=r(p);Qe=s($,"CODE",{});var Go=r(Qe);Qa=a(Go,"$inArray"),Go.forEach(n),Ra=a($,` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Re=s($,"CODE",{});var Lo=r(Re);Ja=a(Lo,"strict"),Lo.forEach(n),Ka=a($,`. If
      `),Je=s($,"CODE",{});var xo=r(Je);Va=a(xo,"strict"),xo.forEach(n),Wa=a($,`
      is false or undefined, the function uses `),Ke=s($,"CODE",{});var Mo=r(Ke);Xa=a(Mo,"$is"),Mo.forEach(n),Za=a($,` to compare, and
      if it's true, the function uses `),Ve=s($,"CODE",{});var Fo=r(Ve);en=a(Fo,"$equals"),Fo.forEach(n),tn=a($,"."),$.forEach(n),an=c(P),f=s(P,"LI",{});var m=r(f);We=s(m,"CODE",{});var zo=r(We);nn=a(zo,"$arraySearch"),zo.forEach(n),on=a(m,` - Search an array for the entity and return its
      index, or `),Xe=s(m,"CODE",{});var Ho=r(Xe);sn=a(Ho,"-1"),Ho.forEach(n),rn=a(m,` if it's not found. Takes two arguments, the
      array and a boolean
      `),Ze=s(m,"CODE",{});var Yo=r(Ze);ln=a(Yo,"strict"),Yo.forEach(n),hn=a(m,". If "),et=s(m,"CODE",{});var Bo=r(et);cn=a(Bo,"strict"),Bo.forEach(n),dn=a(m,` is false or undefined, the
      function uses
      `),tt=s(m,"CODE",{});var Qo=r(tt);un=a(Qo,"$is"),Qo.forEach(n),fn=a(m,`
      to compare, and if it's true, the function uses `),at=s(m,"CODE",{});var Ro=r(at);yn=a(Ro,"$equals"),Ro.forEach(n),mn=a(m,`. This
      method may return 0, which evaluates to false, so you should use
      `),nt=s(m,"CODE",{});var Jo=r(nt);pn=a(Jo,"$inArray"),Jo.forEach(n),En=a(m,` if you are only checking whether the entity is in the
      array.`),m.forEach(n),P.forEach(n),vn=c(l),he(Y.$$.fragment,l),gn=c(l),T=s(l,"P",{});var se=r(T);$n=a(se,"Client side Nymph entities can use the "),ot=s(se,"CODE",{});var Ko=r(ot);wn=a(Ko,"$serverCall"),Ko.forEach(n),_n=a(se,` method to
    call methods on a server side instance of the entity.
    `),st=s(se,"CODE",{});var Vo=r(st);bn=a(Vo,"$serverCall"),Vo.forEach(n),Cn=a(se," expects three parameters."),se.forEach(n),Dn=c(l),k=s(l,"UL",{});var re=r(k);V=s(re,"LI",{});var ao=r(V);rt=s(ao,"CODE",{});var Wo=r(rt);On=a(Wo,"method"),Wo.forEach(n),Tn=a(ao," - the name of the method to call on the server side object."),ao.forEach(n),kn=c(re),W=s(re,"LI",{});var no=r(W);it=s(no,"CODE",{});var Xo=r(it);In=a(Xo,"params"),Xo.forEach(n),qn=a(no," - an array of the parameters to pass to the method."),no.forEach(n),Nn=c(re),X=s(re,"LI",{});var oo=r(X);lt=s(oo,"CODE",{});var Zo=r(lt);Un=a(Zo,"stateless"),Zo.forEach(n),jn=a(oo,` - if set to true, the method won't update the entity
      with the returned server side representation.`),oo.forEach(n),re.forEach(n),Pn=c(l),I=s(l,"P",{});var ie=r(I);An=a(ie,`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),ht=s(ie,"CODE",{});var es=r(ht);Sn=a(es,"$readyAll"),es.forEach(n),Gn=a(ie,` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),ct=s(ie,"CODE",{});var ts=r(ct);Ln=a(ts,"stateless"),ts.forEach(n),xn=a(ie," to true."),ie.forEach(n),Mn=c(l),B=s(l,"P",{});var wt=r(B);Fn=a(wt,"You can also call static methods on the server with "),dt=s(wt,"CODE",{});var as=r(dt);zn=a(as,"serverCallStatic"),as.forEach(n),Hn=a(wt,"."),wt.forEach(n),Yn=c(l),g=s(l,"P",{});var A=r(g);Bn=a(A,`In order to be called from the client side, the method must be listed in the
    `),ut=s(A,"CODE",{});var ns=r(ut);Qn=a(ns,"$clientEnabledMethods"),ns.forEach(n),Rn=a(A,` or
    `),ft=s(A,"CODE",{});var os=r(ft);Jn=a(os,"clientEnabledStaticMethods"),os.forEach(n),Kn=a(A,` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),yt=s(A,"CODE",{});var ss=r(yt);Vn=a(ss,"403 Forbidden"),ss.forEach(n),Wn=a(A," status."),A.forEach(n),Xn=c(l),he(Q.$$.fragment,l),l.forEach(n),pt=c(d),q=s(d,"SECTION",{class:!0});var _t=r(q);N=s(_t,"A",{href:!0,class:!0,style:!0});var rs=r(N);Zn=a(rs,"Previous: Subscribing to Queries"),rs.forEach(n),eo=c(_t),U=s(_t,"A",{href:!0,class:!0,style:!0});var is=r(U);to=a(is,"Next: Defining Entities"),is.forEach(n),_t.forEach(n),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",S.a=Ee,so(K,"font-size","3em"),ce(J,"class","major"),ce(N,"href",hs+"/user-guide/subscribing-to-queries"),ce(N,"class","button"),so(N,"margin",".5em"),ce(U,"href",hs+"/user-guide/defining-entities"),ce(U,"class","button"),so(U,"margin",".5em"),ce(q,"class","page-steps")},m(d,R){S.m(vs,document.head),e(document.head,Ee),bt(d,mt,R),bt(d,i,R),e(i,J),e(J,K),e(K,Ct),e(i,Dt),e(i,ve),e(ve,Ot),e(i,Tt),e(i,w),e(w,kt),e(w,ge),e(ge,It),e(w,qt),e(w,$e),e($e,Nt),e(w,Ut),e(i,jt),e(i,E),e(E,Pt),e(E,we),e(we,At),e(E,St),e(E,_e),e(_e,Gt),e(E,Lt),e(E,be),e(be,xt),e(E,Mt),e(i,Ft),de(G,i,null),e(i,zt),e(i,_),e(_,Ht),e(_,Ce),e(Ce,Yt),e(_,Bt),e(_,De),e(De,Qt),e(_,Rt),e(i,Jt),e(i,b),e(b,Kt),e(b,Oe),e(Oe,Vt),e(b,Wt),e(b,Te),e(Te,Xt),e(b,Zt),e(i,ea),de(L,i,null),e(i,ta),e(i,x),e(x,aa),e(x,ke),e(ke,na),e(x,oa),e(i,sa),de(M,i,null),e(i,ra),e(i,u),e(u,ia),e(u,Ie),e(Ie,la),e(u,ha),e(u,qe),e(qe,ca),e(u,da),e(u,Ne),e(Ne,ua),e(u,fa),e(u,Ue),e(Ue,ya),e(u,ma),e(u,je),e(je,pa),e(u,Ea),e(u,Pe),e(Pe,va),e(u,ga),e(u,Ae),e(Ae,$a),e(u,wa),e(i,_a),de(F,i,null),e(i,ba),e(i,z),e(z,Ca),e(z,Se),e(Se,Da),e(z,Oa),e(i,Ta),e(i,v),e(v,H),e(H,Ge),e(Ge,ka),e(H,Ia),e(H,C),e(C,Le),e(Le,qa),e(C,Na),e(C,xe),e(xe,Ua),e(C,ja),e(C,Me),e(Me,Pa),e(v,Aa),e(v,D),e(D,Fe),e(Fe,Sa),e(D,Ga),e(D,ze),e(ze,La),e(D,xa),e(D,O),e(O,He),e(He,Ma),e(O,Fa),e(O,Ye),e(Ye,za),e(O,Ha),e(O,Be),e(Be,Ya),e(v,Ba),e(v,p),e(p,Qe),e(Qe,Qa),e(p,Ra),e(p,Re),e(Re,Ja),e(p,Ka),e(p,Je),e(Je,Va),e(p,Wa),e(p,Ke),e(Ke,Xa),e(p,Za),e(p,Ve),e(Ve,en),e(p,tn),e(v,an),e(v,f),e(f,We),e(We,nn),e(f,on),e(f,Xe),e(Xe,sn),e(f,rn),e(f,Ze),e(Ze,ln),e(f,hn),e(f,et),e(et,cn),e(f,dn),e(f,tt),e(tt,un),e(f,fn),e(f,at),e(at,yn),e(f,mn),e(f,nt),e(nt,pn),e(f,En),e(i,vn),de(Y,i,null),e(i,gn),e(i,T),e(T,$n),e(T,ot),e(ot,wn),e(T,_n),e(T,st),e(st,bn),e(T,Cn),e(i,Dn),e(i,k),e(k,V),e(V,rt),e(rt,On),e(V,Tn),e(k,kn),e(k,W),e(W,it),e(it,In),e(W,qn),e(k,Nn),e(k,X),e(X,lt),e(lt,Un),e(X,jn),e(i,Pn),e(i,I),e(I,An),e(I,ht),e(ht,Sn),e(I,Gn),e(I,ct),e(ct,Ln),e(I,xn),e(i,Mn),e(i,B),e(B,Fn),e(B,dt),e(dt,zn),e(B,Hn),e(i,Yn),e(i,g),e(g,Bn),e(g,ut),e(ut,Qn),e(g,Rn),e(g,ft),e(ft,Jn),e(g,Kn),e(g,yt),e(yt,Vn),e(g,Wn),e(i,Xn),de(Q,i,null),bt(d,pt,R),bt(d,q,R),e(q,N),e(N,Zn),e(q,eo),e(q,U),e(U,to),Et=!0},p:Es,i(d){Et||(ue(G.$$.fragment,d),ue(L.$$.fragment,d),ue(M.$$.fragment,d),ue(F.$$.fragment,d),ue(Y.$$.fragment,d),ue(Q.$$.fragment,d),Et=!0)},o(d){fe(G.$$.fragment,d),fe(L.$$.fragment,d),fe(M.$$.fragment,d),fe(F.$$.fragment,d),fe(Y.$$.fragment,d),fe(Q.$$.fragment,d),Et=!1},d(d){n(Ee),d&&S.d(),d&&n(mt),d&&n(i),ye(G),ye(L),ye(M),ye(F),ye(Y),ye(Q),d&&n(pt),d&&n(q)}}}class Cs extends ds{constructor(S){super(),us(this,S,null,gs,fs,{})}}export{Cs as component};
