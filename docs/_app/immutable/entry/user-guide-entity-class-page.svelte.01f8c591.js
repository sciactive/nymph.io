import{S as is,i as ls,s as hs,R as ds,e as os,a as h,k as o,q as t,y as ie,F as cs,T as us,h as n,c as d,l as s,m as r,r as a,z as le,p as ao,n as he,C as e,b as _t,A as de,D as ys,g as ce,d as ue,B as ye}from"../chunks/index.2f30a1c2.js";import{H as fe,g as fs}from"../chunks/github.8af4b809.js";import{t as me}from"../chunks/typescript.7dd1ec19.js";import{b as ss}from"../chunks/paths.bf9fd3ad.js";function ms(rs){let A,pe,yt,i,J,K,bt,Dt,Ee,Ct,It,w,Ot,ve,Tt,kt,ge,jt,Nt,qt,E,Ut,$e,Pt,At,we,Gt,St,_e,Lt,xt,Mt,G,Ft,be,zt,Bt,_,Ht,De,Yt,Rt,Ce,Qt,Jt,Kt,b,Vt,Ie,Wt,Xt,Oe,Zt,ea,ta,S,aa,L,na,Te,oa,sa,ra,x,ia,u,la,ke,ha,da,je,ca,ua,Ne,ya,fa,qe,ma,pa,Ue,Ea,va,Pe,ga,$a,Ae,wa,_a,ba,M,Da,F,Ca,Ge,Ia,Oa,Ta,v,z,Se,ka,ja,D,Le,Na,qa,xe,Ua,Pa,Me,Aa,Ga,B,Fe,Sa,La,C,ze,xa,Ma,Be,Fa,za,He,Ba,Ha,m,Ye,Ya,Ra,Re,Qa,Ja,Qe,Ka,Va,Je,Wa,Xa,Ke,Za,en,tn,y,Ve,an,nn,We,on,sn,Xe,rn,ln,Ze,hn,dn,et,cn,un,tt,yn,fn,mn,H,pn,I,En,at,vn,gn,nt,$n,wn,_n,O,V,ot,bn,Dn,Cn,W,st,In,On,Tn,X,rt,kn,jn,Nn,T,qn,it,Un,Pn,lt,An,Gn,Sn,Y,Ln,ht,xn,Mn,Fn,g,zn,dt,Bn,Hn,ct,Yn,Rn,ut,Qn,Jn,Kn,R,ft,k,j,Vn,Wn,N,Xn,mt;return G=new fe({props:{language:me,code:`const entity = await MyEntity.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),S=new fe({props:{language:me,code:`// Create some entities.
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
console.log(entity.foo.bar); // Outputs 'New value.'`}}),x=new fe({props:{language:me,code:`// Create an entity.
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
console.log(entity.foo); // Outputs 'New value.'`}}),M=new fe({props:{language:me,code:`const entity = await MyEntity.factory();

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
await nymph.deleteEntities([entity]);`}}),H=new fe({props:{language:me,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
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
entity.$inArray(arr, true); // false`}}),R=new fe({props:{language:me,code:`// You can use $serverCall and serverCallStatic directly.
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
const success = await todo.$archive();`}}),{c(){A=new ds(!1),pe=os(),yt=h(),i=o("section"),J=o("header"),K=o("h1"),bt=t("Entity Class"),Dt=h(),Ee=o("p"),Ct=t(`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),It=h(),w=o("p"),Ot=t(`In the client, assigning a property internally marks that property as
    "dirty", and calling `),ve=o("code"),Tt=t("$patch"),kt=t(` will push just the changed
    properties up to the server, whereas `),ge=o("code"),jt=t("$save"),Nt=t(" would push all properties."),qt=h(),E=o("p"),Ut=t(`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),$e=o("code"),Pt=t("$addTag"),At=t(", "),we=o("code"),Gt=t("$removeTag"),St=t(`, and
    `),_e=o("code"),Lt=t("$hasTag"),xt=t(` are used, respectively. Each takes any number of tags as
    arguments.`),Mt=h(),ie(G.$$.fragment),Ft=h(),be=o("p"),zt=t(`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),Bt=h(),_=o("p"),Ht=t(`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),De=o("code"),Yt=t("$ready"),Rt=t(` method,
    or by using the `),Ce=o("code"),Qt=t("$readyAll"),Jt=t(" method on the entity that contains them."),Kt=h(),b=o("p"),Vt=t(`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),Ie=o("code"),Wt=t("$clearCache"),Xt=t(`
    method in Node.js and the `),Oe=o("code"),Zt=t("$refresh"),ea=t(" method in the client."),ta=h(),ie(S.$$.fragment),aa=h(),L=o("p"),na=t(`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Te=o("code"),oa=t("$refresh"),sa=t(` method, just like in the client,
    for this.`),ra=h(),ie(x.$$.fragment),ia=h(),u=o("p"),la=t("To save an entity, use the "),ke=o("code"),ha=t("$save"),da=t(` method. Likewise, to delete
    the entity, use the `),je=o("code"),ca=t("$delete"),ua=t(` method. You can also call the
    `),Ne=o("code"),ya=t("saveEntity"),fa=t(`,
    `),qe=o("code"),ma=t("deleteEntity"),pa=t(", and "),Ue=o("code"),Ea=t("deleteEntityByID"),va=t(` methods of
    `),Pe=o("code"),ga=t("Nymph"),$a=t(". The "),Ae=o("code"),wa=t("Entity"),_a=t(" class uses these methods."),ba=h(),ie(M.$$.fragment),Da=h(),F=o("p"),Ca=t("Entities can't be checked using the "),Ge=o("code"),Ia=t("=="),Oa=t(` operator. Instead, you can
    use the following entity methods.`),Ta=h(),v=o("ul"),z=o("li"),Se=o("code"),ka=t("$is"),ja=t(` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=o("ul"),Le=o("li"),Na=t("They must be entities."),qa=h(),xe=o("li"),Ua=t("They must have equal GUIDs, or both can have no GUID."),Pa=h(),Me=o("li"),Aa=t("If they have no GUIDs, their data and tags must be equal."),Ga=h(),B=o("li"),Fe=o("code"),Sa=t("$equals"),La=t(` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria.
      `),C=o("ul"),ze=o("li"),xa=t("They must be entities."),Ma=h(),Be=o("li"),Fa=t("They must have equal GUIDs, or both can have no GUID."),za=h(),He=o("li"),Ba=t("Their data and tags must be equal."),Ha=h(),m=o("li"),Ye=o("code"),Ya=t("$inArray"),Ra=t(` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Re=o("code"),Qa=t("strict"),Ja=t(`. If
      `),Qe=o("code"),Ka=t("strict"),Va=t(`
      is false or undefined, the function uses `),Je=o("code"),Wa=t("$is"),Xa=t(` to compare, and
      if it's true, the function uses `),Ke=o("code"),Za=t("$equals"),en=t("."),tn=h(),y=o("li"),Ve=o("code"),an=t("$arraySearch"),nn=t(` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),We=o("code"),on=t("strict"),sn=t(". If "),Xe=o("code"),rn=t("strict"),ln=t(` is false or undefined, the
      function uses
      `),Ze=o("code"),hn=t("$is"),dn=t(`
      to compare, and if it's true, the function uses `),et=o("code"),cn=t("$equals"),un=t(`. This
      method may return 0, which evaluates to false, so you should use
      `),tt=o("code"),yn=t("$inArray"),fn=t(` if you are only checking whether the entity is in the
      array.`),mn=h(),ie(H.$$.fragment),pn=h(),I=o("p"),En=t("Client side Nymph entities can use the "),at=o("code"),vn=t("$serverCall"),gn=t(` method to
    call methods on a server side instance of the entity.
    `),nt=o("code"),$n=t("$serverCall"),wn=t(" expects three parameters."),_n=h(),O=o("ul"),V=o("li"),ot=o("code"),bn=t("method"),Dn=t(" - the name of the method to call on the server side object."),Cn=h(),W=o("li"),st=o("code"),In=t("params"),On=t(" - an array of the parameters to pass to the method."),Tn=h(),X=o("li"),rt=o("code"),kn=t("stateless"),jn=t(` - if set to true, the method won't update the entity
      with the returned server side representation.`),Nn=h(),T=o("p"),qn=t(`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),it=o("code"),Un=t("$readyAll"),Pn=t(` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),lt=o("code"),An=t("stateless"),Gn=t(" to true."),Sn=h(),Y=o("p"),Ln=t("You can also call static methods on the server with "),ht=o("code"),xn=t("serverCallStatic"),Mn=t("."),Fn=h(),g=o("p"),zn=t(`In order to be called from the client side, the method must be listed in the
    `),dt=o("code"),Bn=t("$clientEnabledMethods"),Hn=t(` or
    `),ct=o("code"),Yn=t("clientEnabledStaticMethods"),Rn=t(` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),ut=o("code"),Qn=t("403 Forbidden"),Jn=t(" status."),Kn=h(),ie(R.$$.fragment),ft=h(),k=o("section"),j=o("a"),Vn=t("Previous: Subscribing to Queries"),Wn=h(),N=o("a"),Xn=t("Next: Defining Entities"),this.h()},l(c){const Q=cs("svelte-24q1tq",document.head);A=us(Q,!1),pe=os(),Q.forEach(n),yt=d(c),i=s(c,"SECTION",{});var l=r(i);J=s(l,"HEADER",{class:!0});var no=r(J);K=s(no,"H1",{style:!0});var oo=r(K);bt=a(oo,"Entity Class"),oo.forEach(n),no.forEach(n),Dt=d(l),Ee=s(l,"P",{});var so=r(Ee);Ct=a(so,`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`),so.forEach(n),It=d(l),w=s(l,"P",{});var Z=r(w);Ot=a(Z,`In the client, assigning a property internally marks that property as
    "dirty", and calling `),ve=s(Z,"CODE",{});var ro=r(ve);Tt=a(ro,"$patch"),ro.forEach(n),kt=a(Z,` will push just the changed
    properties up to the server, whereas `),ge=s(Z,"CODE",{});var io=r(ge);jt=a(io,"$save"),io.forEach(n),Nt=a(Z," would push all properties."),Z.forEach(n),qt=d(l),E=s(l,"P",{});var q=r(E);Ut=a(q,`Entities can be organized using tags. To add, remove, and check tags, the
    methods `),$e=s(q,"CODE",{});var lo=r($e);Pt=a(lo,"$addTag"),lo.forEach(n),At=a(q,", "),we=s(q,"CODE",{});var ho=r(we);Gt=a(ho,"$removeTag"),ho.forEach(n),St=a(q,`, and
    `),_e=s(q,"CODE",{});var co=r(_e);Lt=a(co,"$hasTag"),co.forEach(n),xt=a(q,` are used, respectively. Each takes any number of tags as
    arguments.`),q.forEach(n),Mt=d(l),le(G.$$.fragment,l),Ft=d(l),be=s(l,"P",{});var uo=r(be);zt=a(uo,`In Node.js, entities that have been saved inside another entity's property
    are loaded as "sleeping references". This means their data is not actually
    pulled from the database. It will "wake up" when you first try to access
    something other than its GUID.`),uo.forEach(n),Bt=d(l),_=s(l,"P",{});var ee=r(_);Ht=a(ee,`In the client, there are still sleeping references, but they can't be loaded
    synchronously. Instead, they are loaded with the `),De=s(ee,"CODE",{});var yo=r(De);Yt=a(yo,"$ready"),yo.forEach(n),Rt=a(ee,` method,
    or by using the `),Ce=s(ee,"CODE",{});var fo=r(Ce);Qt=a(fo,"$readyAll"),fo.forEach(n),Jt=a(ee," method on the entity that contains them."),ee.forEach(n),Kt=d(l),b=s(l,"P",{});var te=r(b);Vt=a(te,`To clear the cache of referenced entities, so that the next time one is
    accessed it will be pulled from the database, use the `),Ie=s(te,"CODE",{});var mo=r(Ie);Wt=a(mo,"$clearCache"),mo.forEach(n),Xt=a(te,`
    method in Node.js and the `),Oe=s(te,"CODE",{});var po=r(Oe);Zt=a(po,"$refresh"),po.forEach(n),ea=a(te," method in the client."),te.forEach(n),ta=d(l),le(S.$$.fragment,l),aa=d(l),L=s(l,"P",{});var pt=r(L);na=a(pt,`Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the `),Te=s(pt,"CODE",{});var Eo=r(Te);oa=a(Eo,"$refresh"),Eo.forEach(n),sa=a(pt,` method, just like in the client,
    for this.`),pt.forEach(n),ra=d(l),le(x.$$.fragment,l),ia=d(l),u=s(l,"P",{});var f=r(u);la=a(f,"To save an entity, use the "),ke=s(f,"CODE",{});var vo=r(ke);ha=a(vo,"$save"),vo.forEach(n),da=a(f,` method. Likewise, to delete
    the entity, use the `),je=s(f,"CODE",{});var go=r(je);ca=a(go,"$delete"),go.forEach(n),ua=a(f,` method. You can also call the
    `),Ne=s(f,"CODE",{});var $o=r(Ne);ya=a($o,"saveEntity"),$o.forEach(n),fa=a(f,`,
    `),qe=s(f,"CODE",{});var wo=r(qe);ma=a(wo,"deleteEntity"),wo.forEach(n),pa=a(f,", and "),Ue=s(f,"CODE",{});var _o=r(Ue);Ea=a(_o,"deleteEntityByID"),_o.forEach(n),va=a(f,` methods of
    `),Pe=s(f,"CODE",{});var bo=r(Pe);ga=a(bo,"Nymph"),bo.forEach(n),$a=a(f,". The "),Ae=s(f,"CODE",{});var Do=r(Ae);wa=a(Do,"Entity"),Do.forEach(n),_a=a(f," class uses these methods."),f.forEach(n),ba=d(l),le(M.$$.fragment,l),Da=d(l),F=s(l,"P",{});var Et=r(F);Ca=a(Et,"Entities can't be checked using the "),Ge=s(Et,"CODE",{});var Co=r(Ge);Ia=a(Co,"=="),Co.forEach(n),Oa=a(Et,` operator. Instead, you can
    use the following entity methods.`),Et.forEach(n),Ta=d(l),v=s(l,"UL",{});var U=r(v);z=s(U,"LI",{});var vt=r(z);Se=s(vt,"CODE",{});var Io=r(Se);ka=a(Io,"$is"),Io.forEach(n),ja=a(vt,` - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      `),D=s(vt,"UL",{});var ae=r(D);Le=s(ae,"LI",{});var Oo=r(Le);Na=a(Oo,"They must be entities."),Oo.forEach(n),qa=d(ae),xe=s(ae,"LI",{});var To=r(xe);Ua=a(To,"They must have equal GUIDs, or both can have no GUID."),To.forEach(n),Pa=d(ae),Me=s(ae,"LI",{});var ko=r(Me);Aa=a(ko,"If they have no GUIDs, their data and tags must be equal."),ko.forEach(n),ae.forEach(n),vt.forEach(n),Ga=d(U),B=s(U,"LI",{});var gt=r(B);Fe=s(gt,"CODE",{});var jo=r(Fe);Sa=a(jo,"$equals"),jo.forEach(n),La=a(gt,` - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria.
      `),C=s(gt,"UL",{});var ne=r(C);ze=s(ne,"LI",{});var No=r(ze);xa=a(No,"They must be entities."),No.forEach(n),Ma=d(ne),Be=s(ne,"LI",{});var qo=r(Be);Fa=a(qo,"They must have equal GUIDs, or both can have no GUID."),qo.forEach(n),za=d(ne),He=s(ne,"LI",{});var Uo=r(He);Ba=a(Uo,"Their data and tags must be equal."),Uo.forEach(n),ne.forEach(n),gt.forEach(n),Ha=d(U),m=s(U,"LI",{});var $=r(m);Ye=s($,"CODE",{});var Po=r(Ye);Ya=a(Po,"$inArray"),Po.forEach(n),Ra=a($,` - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean `),Re=s($,"CODE",{});var Ao=r(Re);Qa=a(Ao,"strict"),Ao.forEach(n),Ja=a($,`. If
      `),Qe=s($,"CODE",{});var Go=r(Qe);Ka=a(Go,"strict"),Go.forEach(n),Va=a($,`
      is false or undefined, the function uses `),Je=s($,"CODE",{});var So=r(Je);Wa=a(So,"$is"),So.forEach(n),Xa=a($,` to compare, and
      if it's true, the function uses `),Ke=s($,"CODE",{});var Lo=r(Ke);Za=a(Lo,"$equals"),Lo.forEach(n),en=a($,"."),$.forEach(n),tn=d(U),y=s(U,"LI",{});var p=r(y);Ve=s(p,"CODE",{});var xo=r(Ve);an=a(xo,"$arraySearch"),xo.forEach(n),nn=a(p,` - Search an array for the entity and return the
      corresponding key. Takes two arguments, the array and a boolean
      `),We=s(p,"CODE",{});var Mo=r(We);on=a(Mo,"strict"),Mo.forEach(n),sn=a(p,". If "),Xe=s(p,"CODE",{});var Fo=r(Xe);rn=a(Fo,"strict"),Fo.forEach(n),ln=a(p,` is false or undefined, the
      function uses
      `),Ze=s(p,"CODE",{});var zo=r(Ze);hn=a(zo,"$is"),zo.forEach(n),dn=a(p,`
      to compare, and if it's true, the function uses `),et=s(p,"CODE",{});var Bo=r(et);cn=a(Bo,"$equals"),Bo.forEach(n),un=a(p,`. This
      method may return 0, which evaluates to false, so you should use
      `),tt=s(p,"CODE",{});var Ho=r(tt);yn=a(Ho,"$inArray"),Ho.forEach(n),fn=a(p,` if you are only checking whether the entity is in the
      array.`),p.forEach(n),U.forEach(n),mn=d(l),le(H.$$.fragment,l),pn=d(l),I=s(l,"P",{});var oe=r(I);En=a(oe,"Client side Nymph entities can use the "),at=s(oe,"CODE",{});var Yo=r(at);vn=a(Yo,"$serverCall"),Yo.forEach(n),gn=a(oe,` method to
    call methods on a server side instance of the entity.
    `),nt=s(oe,"CODE",{});var Ro=r(nt);$n=a(Ro,"$serverCall"),Ro.forEach(n),wn=a(oe," expects three parameters."),oe.forEach(n),_n=d(l),O=s(l,"UL",{});var se=r(O);V=s(se,"LI",{});var Zn=r(V);ot=s(Zn,"CODE",{});var Qo=r(ot);bn=a(Qo,"method"),Qo.forEach(n),Dn=a(Zn," - the name of the method to call on the server side object."),Zn.forEach(n),Cn=d(se),W=s(se,"LI",{});var eo=r(W);st=s(eo,"CODE",{});var Jo=r(st);In=a(Jo,"params"),Jo.forEach(n),On=a(eo," - an array of the parameters to pass to the method."),eo.forEach(n),Tn=d(se),X=s(se,"LI",{});var to=r(X);rt=s(to,"CODE",{});var Ko=r(rt);kn=a(Ko,"stateless"),Ko.forEach(n),jn=a(to,` - if set to true, the method won't update the entity
      with the returned server side representation.`),to.forEach(n),se.forEach(n),Nn=d(l),T=s(l,"P",{});var re=r(T);qn=a(re,`Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run `),it=s(re,"CODE",{});var Vo=r(it);Un=a(Vo,"$readyAll"),Vo.forEach(n),Pn=a(re,` again. If you know that the server side method
    will not change any of the data on the entity, you can set
    `),lt=s(re,"CODE",{});var Wo=r(lt);An=a(Wo,"stateless"),Wo.forEach(n),Gn=a(re," to true."),re.forEach(n),Sn=d(l),Y=s(l,"P",{});var $t=r(Y);Ln=a($t,"You can also call static methods on the server with "),ht=s($t,"CODE",{});var Xo=r(ht);xn=a(Xo,"serverCallStatic"),Xo.forEach(n),Mn=a($t,"."),$t.forEach(n),Fn=d(l),g=s(l,"P",{});var P=r(g);zn=a(P,`In order to be called from the client side, the method must be listed in the
    `),dt=s(P,"CODE",{});var Zo=r(dt);Bn=a(Zo,"$clientEnabledMethods"),Zo.forEach(n),Hn=a(P,` or
    `),ct=s(P,"CODE",{});var es=r(ct);Yn=a(es,"clientEnabledStaticMethods"),es.forEach(n),Rn=a(P,` property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a `),ut=s(P,"CODE",{});var ts=r(ut);Qn=a(ts,"403 Forbidden"),ts.forEach(n),Jn=a(P," status."),P.forEach(n),Kn=d(l),le(R.$$.fragment,l),l.forEach(n),ft=d(c),k=s(c,"SECTION",{class:!0});var wt=r(k);j=s(wt,"A",{href:!0,class:!0,style:!0});var as=r(j);Vn=a(as,"Previous: Subscribing to Queries"),as.forEach(n),Wn=d(wt),N=s(wt,"A",{href:!0,class:!0,style:!0});var ns=r(N);Xn=a(ns,"Next: Defining Entities"),ns.forEach(n),wt.forEach(n),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",A.a=pe,ao(K,"font-size","3em"),he(J,"class","major"),he(j,"href",ss+"/user-guide/subscribing-to-queries"),he(j,"class","button"),ao(j,"margin",".5em"),he(N,"href",ss+"/user-guide/defining-entities"),he(N,"class","button"),ao(N,"margin",".5em"),he(k,"class","page-steps")},m(c,Q){A.m(fs,document.head),e(document.head,pe),_t(c,yt,Q),_t(c,i,Q),e(i,J),e(J,K),e(K,bt),e(i,Dt),e(i,Ee),e(Ee,Ct),e(i,It),e(i,w),e(w,Ot),e(w,ve),e(ve,Tt),e(w,kt),e(w,ge),e(ge,jt),e(w,Nt),e(i,qt),e(i,E),e(E,Ut),e(E,$e),e($e,Pt),e(E,At),e(E,we),e(we,Gt),e(E,St),e(E,_e),e(_e,Lt),e(E,xt),e(i,Mt),de(G,i,null),e(i,Ft),e(i,be),e(be,zt),e(i,Bt),e(i,_),e(_,Ht),e(_,De),e(De,Yt),e(_,Rt),e(_,Ce),e(Ce,Qt),e(_,Jt),e(i,Kt),e(i,b),e(b,Vt),e(b,Ie),e(Ie,Wt),e(b,Xt),e(b,Oe),e(Oe,Zt),e(b,ea),e(i,ta),de(S,i,null),e(i,aa),e(i,L),e(L,na),e(L,Te),e(Te,oa),e(L,sa),e(i,ra),de(x,i,null),e(i,ia),e(i,u),e(u,la),e(u,ke),e(ke,ha),e(u,da),e(u,je),e(je,ca),e(u,ua),e(u,Ne),e(Ne,ya),e(u,fa),e(u,qe),e(qe,ma),e(u,pa),e(u,Ue),e(Ue,Ea),e(u,va),e(u,Pe),e(Pe,ga),e(u,$a),e(u,Ae),e(Ae,wa),e(u,_a),e(i,ba),de(M,i,null),e(i,Da),e(i,F),e(F,Ca),e(F,Ge),e(Ge,Ia),e(F,Oa),e(i,Ta),e(i,v),e(v,z),e(z,Se),e(Se,ka),e(z,ja),e(z,D),e(D,Le),e(Le,Na),e(D,qa),e(D,xe),e(xe,Ua),e(D,Pa),e(D,Me),e(Me,Aa),e(v,Ga),e(v,B),e(B,Fe),e(Fe,Sa),e(B,La),e(B,C),e(C,ze),e(ze,xa),e(C,Ma),e(C,Be),e(Be,Fa),e(C,za),e(C,He),e(He,Ba),e(v,Ha),e(v,m),e(m,Ye),e(Ye,Ya),e(m,Ra),e(m,Re),e(Re,Qa),e(m,Ja),e(m,Qe),e(Qe,Ka),e(m,Va),e(m,Je),e(Je,Wa),e(m,Xa),e(m,Ke),e(Ke,Za),e(m,en),e(v,tn),e(v,y),e(y,Ve),e(Ve,an),e(y,nn),e(y,We),e(We,on),e(y,sn),e(y,Xe),e(Xe,rn),e(y,ln),e(y,Ze),e(Ze,hn),e(y,dn),e(y,et),e(et,cn),e(y,un),e(y,tt),e(tt,yn),e(y,fn),e(i,mn),de(H,i,null),e(i,pn),e(i,I),e(I,En),e(I,at),e(at,vn),e(I,gn),e(I,nt),e(nt,$n),e(I,wn),e(i,_n),e(i,O),e(O,V),e(V,ot),e(ot,bn),e(V,Dn),e(O,Cn),e(O,W),e(W,st),e(st,In),e(W,On),e(O,Tn),e(O,X),e(X,rt),e(rt,kn),e(X,jn),e(i,Nn),e(i,T),e(T,qn),e(T,it),e(it,Un),e(T,Pn),e(T,lt),e(lt,An),e(T,Gn),e(i,Sn),e(i,Y),e(Y,Ln),e(Y,ht),e(ht,xn),e(Y,Mn),e(i,Fn),e(i,g),e(g,zn),e(g,dt),e(dt,Bn),e(g,Hn),e(g,ct),e(ct,Yn),e(g,Rn),e(g,ut),e(ut,Qn),e(g,Jn),e(i,Kn),de(R,i,null),_t(c,ft,Q),_t(c,k,Q),e(k,j),e(j,Vn),e(k,Wn),e(k,N),e(N,Xn),mt=!0},p:ys,i(c){mt||(ce(G.$$.fragment,c),ce(S.$$.fragment,c),ce(x.$$.fragment,c),ce(M.$$.fragment,c),ce(H.$$.fragment,c),ce(R.$$.fragment,c),mt=!0)},o(c){ue(G.$$.fragment,c),ue(S.$$.fragment,c),ue(x.$$.fragment,c),ue(M.$$.fragment,c),ue(H.$$.fragment,c),ue(R.$$.fragment,c),mt=!1},d(c){n(pe),c&&A.d(),c&&n(yt),c&&n(i),ye(G),ye(S),ye(x),ye(M),ye(H),ye(R),c&&n(ft),c&&n(k)}}}class $s extends is{constructor(A){super(),ls(this,A,null,ms,hs,{})}}export{$s as default};
