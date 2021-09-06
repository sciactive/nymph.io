import{S as e,i as t,s as a,a0 as n,a1 as s,a2 as r,l as o,k as i,e as h,t as c,j as l,L as d,a3 as y,d as u,n as f,c as m,a as E,g as v,m as p,X as g,b as $,a4 as w,F as b,f as C,o as D,G as I,x as O,u as T,v as k}from"../../chunks/vendor-836b274b.js";import{b as N}from"../../chunks/paths-6758d194.js";function j(e){let t,a,j,U,P,q,G,L,A,S,x,M,F,Y,z,B,V,H,Q,R,X,J,K,W,Z,_,ee,te,ae,ne,se,re,oe,ie,he,ce,le,de,ye,ue,fe,me,Ee,ve,pe,ge,$e,we,be,Ce,De,Ie,Oe,Te,ke,Ne,je,Ue,Pe,qe,Ge,Le,Ae,Se,xe,Me,Fe,Ye,ze,Be,Ve,He,Qe,Re,Xe,Je,Ke,We,Ze,_e,et,tt,at,nt,st,rt,ot,it,ht,ct,lt,dt,yt,ut,ft,mt,Et,vt,pt,gt,$t,wt,bt,Ct,Dt,It,Ot,Tt,kt,Nt,jt,Ut,Pt,qt,Gt,Lt,At,St,xt,Mt,Ft,Yt,zt,Bt,Vt,Ht,Qt,Rt,Xt,Jt,Kt,Wt,Zt,_t,ea,ta,aa,na,sa,ra,oa,ia,ha,ca,la,da,ya,ua,fa,ma,Ea,va,pa,ga,$a,wa,ba,Ca,Da,Ia,Oa,Ta,ka,Na,ja,Ua,Pa,qa,Ga,La,Aa,Sa,xa,Ma,Fa,Ya,za,Ba,Va,Ha,Qa,Ra,Xa,Ja,Ka,Wa,Za,_a,en,tn,an,nn,sn,rn,on,hn,cn,ln,dn,yn,un,fn,mn,En,vn,pn,gn,$n,wn,bn,Cn,Dn,In,On,Tn,kn,Nn,jn,Un,Pn,qn,Gn,Ln,An,Sn,xn,Mn,Fn,Yn,zn,Bn,Vn;return oe=new n({props:{language:s,code:"const entity = await MyEntityClass.factory();\n\nentity.$addTag('foo', 'bar');\nentity.$hasTag('foo'); // True\n\nentity.$removeTag('foo', 'bar');\nentity.$hasTag('foo'); // False"}}),Ne=new n({props:{language:s,code:"// Create some entities.\nlet entity = await MyEntityClass.factory();\nentity.foo = await MyEntityClass.factory();\nentity.foo.bar = 'Old value.';\nawait entity.foo.$save();\nawait entity.$save();\n\n// Reset the entity to a copy just pulled from the DB.\nentity = await Nymph.getEntity(\n  { class: MyEntityClass },\n  { type: '&', guid: entity.guid }\n);\n\n// Get a copy of the referenced entity.\nlet instOfFoo = await Nymph.getEntity(\n  { class: MyEntityClass },\n  { type: '&', guid: entity.foo.guid }\n);\n// And change a value on it.\ninstOfFoo.bar = 'New value.';\nawait instOfFoo.$save();\n\nconsole.log(entity.foo.bar); // Outputs 'Old value.'\n// If on Node.js\nentity.$clearCache();\n// Else if on the client\nawait entity.$refresh();\nawait entity.foo.$ready();\n// End if\nconsole.log(entity.foo.bar); // Outputs 'New value.'"}}),Se=new n({props:{language:s,code:"// Create an entity.\nconst entity = await MyEntityClass.factory();\nentity.foo = 'Old value.';\nawait entity.$save();\n\n// Get a copy of the entity.\nconst instOfEnt = await Nymph.getEntity(\n  { class: MyEntityClass },\n  { type: '&', guid: entity.guid }\n);\n// And change a value on it.\ninstOfEnt.foo = 'New value.';\nawait instOfEnt.$save();\n\nconsole.log(entity.foo); // Outputs 'Old value.'\nawait entity.$refresh();\nconsole.log(entity.foo); // Outputs 'New value.'"}}),ct=new n({props:{language:s,code:"const entity = await MyEntityClass.factory();\n\n// Save the entity.\nawait entity.$save();\n// or\nawait Nymph.saveEntity(entity);\n// or\nawait Nymph.saveEntities([entity]);\n\n// (Client only.) Save only the data that has changed.\nawait entity.$patch();\n// or\nawait Nymph.patchEntity(entity);\n// or\nawait Nymph.patchEntities([entity]);\n\n// Delete the entity.\nawait entity.$delete();\n// or\nawait Nymph.deleteEntity(entity);\n// or\nawait Nymph.deleteEntities([entity]);"}}),Pa=new n({props:{language:s,code:"// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.\nlet entity = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');\nlet entity2 = await MyEntityClass.factory('a4c1591d6ea91c8450d2d360');\n\nentity2.someProp = 'some new value';\nentity.$is(entity2); // True\nentity.$equals(entity2); // False\n\nconst arr = [null, null, entity];\nentity.$arraySearch(arr); // 2\nentity.$inArray(arr); // True\nentity.$arraySearch(arr, true); // -1\nentity.$inArray(arr, true); // false"}}),qn=new n({props:{language:s,code:"// You can use $serverCall and serverCallStatic directly.\ntry {\n  const success: boolean = await todo.$serverCall('$archive', []);\n  if (!success) {\n    alert(\"Couldn't archive \" + todo.name);\n  }\n} catch (e) {\n  alert('Error: ' + e.textStatus + \"\nCouldn't archive \" + todo.name);\n}\n\n// Or you can define methods like this in your client class.\nclass Todo extends Entity<TodoData> {\n  // ...\n\n  static async archiveAllDone(onlyOlderThanDay: boolean): Promise<boolean> {\n    return await Todo.serverCallStatic('archiveAllDone', [onlyOlderThanDay]);\n  }\n\n  async $archive(): Promise<boolean> {\n    return await this.$serverCall('archive', []);\n  }\n}\n\n// You'd use them like this.\nconst success = await Todo.archiveAllDone(true);\n\n// And\nconst todo = await Todo.factory();\nconst success = await todo.$archive();"}}),{c(){t=new r,a=o(),j=i(),U=h("section"),P=h("header"),q=h("h1"),G=c("Entity Class"),L=i(),A=h("p"),S=c('Entity classes in Nymph work pretty much like regular objects. Instance\n    methods and properties begin with "$" to differentiate them from data.'),x=i(),M=h("p"),F=c('In the client, assigning a property internally marks that property as\n    "dirty", and calling '),Y=h("code"),z=c("$patch"),B=c(" will push just the changed\n    properties up to the server, whereas "),V=h("code"),H=c("$save"),Q=c(" would push all properties."),R=i(),X=h("p"),J=c("Entities can be organized using tags. To add, remove, and check tags, the\n    methods "),K=h("code"),W=c("$addTag"),Z=c(", "),_=h("code"),ee=c("$removeTag"),te=c(", and\n    "),ae=h("code"),ne=c("$hasTag"),se=c(" are used, respectively. Each takes any number of tags as\n    arguments."),re=i(),l(oe.$$.fragment),ie=i(),he=h("p"),ce=c('In Node.js, entitis that have been saved inside another entity\'s property\n    are loaded as "sleeping references". This means their data is not actually\n    pulled from the database. It will "wake up" when you first try to access\n    something other than its GUID.'),le=i(),de=h("p"),ye=c("In the client, there are still sleeping references, but they can't be loaded\n    synchronously. Instead, they are loaded with the "),ue=h("code"),fe=c("$ready"),me=c(" method,\n    or by using the "),Ee=h("code"),ve=c("$readyAll"),pe=c(" method on the entity that contains them."),ge=i(),$e=h("p"),we=c("To clear the cache of referenced entities, so that the next time one is\n    accessed it will be pulled from the database, use the "),be=h("code"),Ce=c("$clearCache"),De=c("\n    method in Node.js and the "),Ie=h("code"),Oe=c("$refresh"),Te=c(" method in the client."),ke=i(),l(Ne.$$.fragment),je=i(),Ue=h("p"),Pe=c("Much like clearing the entity cache, you may need to refresh the entity's\n    own data in Node.js. Use the "),qe=h("code"),Ge=c("$refresh"),Le=c(" method, just like in the client,\n    for this."),Ae=i(),l(Se.$$.fragment),xe=i(),Me=h("p"),Fe=c("To save an entity, use the "),Ye=h("code"),ze=c("$save"),Be=c(" method. Likewise, to delete\n    the entity, use the "),Ve=h("code"),He=c("$delete"),Qe=c(" method. You can also call the\n    "),Re=h("code"),Xe=c("saveEntity"),Je=c(",\n    "),Ke=h("code"),We=c("deleteEntity"),Ze=c(", and "),_e=h("code"),et=c("deleteEntityByID"),tt=c(" methods of\n    "),at=h("code"),nt=c("Nymph"),st=c(". The "),rt=h("code"),ot=c("Entity"),it=c(" class uses these methods."),ht=i(),l(ct.$$.fragment),lt=i(),dt=h("p"),yt=c("Entities can't be checked using the "),ut=h("code"),ft=c("=="),mt=c(" operator. Instead, you can\n    use the following entity methods."),Et=i(),vt=h("ul"),pt=h("li"),gt=h("code"),$t=c("$is"),wt=c(" - Perform a less strict comparison of two entities\n      (basically a GUID check). To return true, the entities must meet the\n      following criteria.\n      "),bt=h("ul"),Ct=h("li"),Dt=c("They must be entities."),It=i(),Ot=h("li"),Tt=c("They must have equal GUIDs, or both can have no GUID."),kt=i(),Nt=h("li"),jt=c("If they have no GUIDs, their data must be equal."),Ut=i(),Pt=h("li"),qt=h("code"),Gt=c("$equals"),Lt=c(" - Perform a more strict comparison of two entities\n      (basically a GUID + class + data check). To return true, the entities must\n      meet the following criteria.\n      "),At=h("ul"),St=h("li"),xt=c("They must be entities."),Mt=i(),Ft=h("li"),Yt=c("They must have equal GUIDs, or both can have no GUID."),zt=i(),Bt=h("li"),Vt=c("They must be instances of the same class."),Ht=i(),Qt=h("li"),Rt=c("Their data must be equal."),Xt=i(),Jt=h("li"),Kt=h("code"),Wt=c("$inArray"),Zt=c(" - Check whether the entity is in an array. Takes two\n      arguments, the array and a boolean "),_t=h("code"),ea=c("strict"),ta=c(". If\n      "),aa=h("code"),na=c("strict"),sa=c("\n      is false, the function uses "),ra=h("code"),oa=c("$is"),ia=c(" to compare, and if it's true,\n      the function uses "),ha=h("code"),ca=c("$equals"),la=c("."),da=i(),ya=h("li"),ua=h("code"),fa=c("$arraySearch"),ma=c(" - Search an array for the entity and return the\n      corresponding key. Takes two arguments, the array and a boolean\n      "),Ea=h("code"),va=c("strict"),pa=c(". If "),ga=h("code"),$a=c("strict"),wa=c(" is false, the function uses\n      "),ba=h("code"),Ca=c("$is"),Da=c("\n      to compare, and if it's true, the function uses "),Ia=h("code"),Oa=c("$equals"),Ta=c(". This\n      method may return 0, which evaluates to false, so you should use\n      "),ka=h("code"),Na=c("$inArray"),ja=c(" if you are only checking whether the entity is in the\n      array."),Ua=i(),l(Pa.$$.fragment),qa=i(),Ga=h("p"),La=c("Client side Nymph entities can use the "),Aa=h("code"),Sa=c("$serverCall"),xa=c(" method to\n    call methods on a server side instance of the entity.\n    "),Ma=h("code"),Fa=c("$serverCall"),Ya=c(" expects three parameters."),za=i(),Ba=h("ul"),Va=h("li"),Ha=h("code"),Qa=c("method"),Ra=c(" - the name of the method to call on the server side object."),Xa=i(),Ja=h("li"),Ka=h("code"),Wa=c("params"),Za=c(" - an array of the parameters to pass to the method."),_a=i(),en=h("li"),tn=h("code"),an=c("stateless"),nn=c(" - if set to true, the method won't update the entity\n      with the returned server side representation."),sn=i(),rn=h("p"),on=c("Normally, when you use this method, just before the promise is fulfilled,\n    the entity's data will be replaced with that of the entity on the server\n    side after the method was run. This will cause any awoken entities in the\n    data of your entity to be replaced with sleeping entities, so you will have\n    to run "),hn=h("code"),cn=c("$readyAll"),ln=c(" again. If you know that the server side method\n    will not change any of the data on the entity, you can set\n    "),dn=h("code"),yn=c("stateless"),un=c(" to true."),fn=i(),mn=h("p"),En=c("You can also call static methods on the server with "),vn=h("code"),pn=c("serverCallStatic"),gn=c("."),$n=i(),wn=h("p"),bn=c("In order to be called from the client side, the method must be listed in the\n    "),Cn=h("code"),Dn=c("$clientEnabledMethods"),In=c(" or\n    "),On=h("code"),Tn=c("clientEnabledStaticMethods"),kn=c(" property in the Node.js class. This\n    guards against a user submitting tailored requests to perform potentially\n    dangerous tasks on the server side. If the method is not listed, the request\n    will fail with a "),Nn=h("code"),jn=c("403 Forbidden"),Un=c(" status."),Pn=i(),l(qn.$$.fragment),Gn=i(),Ln=h("section"),An=h("div"),Sn=h("div"),xn=h("a"),Mn=c("Previous: Subscribing to Queries"),Fn=i(),Yn=h("div"),zn=h("a"),Bn=c("Next: Ext. the Entity Class"),this.h()},l(e){const n=d('[data-svelte="svelte-1auqypt"]',document.head);t=y(n),a=o(),n.forEach(u),j=f(e),U=m(e,"SECTION",{});var s=E(U);P=m(s,"HEADER",{class:!0});var r=E(P);q=m(r,"H1",{style:!0});var i=E(q);G=v(i,"Entity Class"),i.forEach(u),r.forEach(u),L=f(s),A=m(s,"P",{});var h=E(A);S=v(h,'Entity classes in Nymph work pretty much like regular objects. Instance\n    methods and properties begin with "$" to differentiate them from data.'),h.forEach(u),x=f(s),M=m(s,"P",{});var c=E(M);F=v(c,'In the client, assigning a property internally marks that property as\n    "dirty", and calling '),Y=m(c,"CODE",{});var l=E(Y);z=v(l,"$patch"),l.forEach(u),B=v(c," will push just the changed\n    properties up to the server, whereas "),V=m(c,"CODE",{});var g=E(V);H=v(g,"$save"),g.forEach(u),Q=v(c," would push all properties."),c.forEach(u),R=f(s),X=m(s,"P",{});var $=E(X);J=v($,"Entities can be organized using tags. To add, remove, and check tags, the\n    methods "),K=m($,"CODE",{});var w=E(K);W=v(w,"$addTag"),w.forEach(u),Z=v($,", "),_=m($,"CODE",{});var b=E(_);ee=v(b,"$removeTag"),b.forEach(u),te=v($,", and\n    "),ae=m($,"CODE",{});var C=E(ae);ne=v(C,"$hasTag"),C.forEach(u),se=v($," are used, respectively. Each takes any number of tags as\n    arguments."),$.forEach(u),re=f(s),p(oe.$$.fragment,s),ie=f(s),he=m(s,"P",{});var D=E(he);ce=v(D,'In Node.js, entitis that have been saved inside another entity\'s property\n    are loaded as "sleeping references". This means their data is not actually\n    pulled from the database. It will "wake up" when you first try to access\n    something other than its GUID.'),D.forEach(u),le=f(s),de=m(s,"P",{});var I=E(de);ye=v(I,"In the client, there are still sleeping references, but they can't be loaded\n    synchronously. Instead, they are loaded with the "),ue=m(I,"CODE",{});var O=E(ue);fe=v(O,"$ready"),O.forEach(u),me=v(I," method,\n    or by using the "),Ee=m(I,"CODE",{});var T=E(Ee);ve=v(T,"$readyAll"),T.forEach(u),pe=v(I," method on the entity that contains them."),I.forEach(u),ge=f(s),$e=m(s,"P",{});var k=E($e);we=v(k,"To clear the cache of referenced entities, so that the next time one is\n    accessed it will be pulled from the database, use the "),be=m(k,"CODE",{});var N=E(be);Ce=v(N,"$clearCache"),N.forEach(u),De=v(k,"\n    method in Node.js and the "),Ie=m(k,"CODE",{});var Vn=E(Ie);Oe=v(Vn,"$refresh"),Vn.forEach(u),Te=v(k," method in the client."),k.forEach(u),ke=f(s),p(Ne.$$.fragment,s),je=f(s),Ue=m(s,"P",{});var Hn=E(Ue);Pe=v(Hn,"Much like clearing the entity cache, you may need to refresh the entity's\n    own data in Node.js. Use the "),qe=m(Hn,"CODE",{});var Qn=E(qe);Ge=v(Qn,"$refresh"),Qn.forEach(u),Le=v(Hn," method, just like in the client,\n    for this."),Hn.forEach(u),Ae=f(s),p(Se.$$.fragment,s),xe=f(s),Me=m(s,"P",{});var Rn=E(Me);Fe=v(Rn,"To save an entity, use the "),Ye=m(Rn,"CODE",{});var Xn=E(Ye);ze=v(Xn,"$save"),Xn.forEach(u),Be=v(Rn," method. Likewise, to delete\n    the entity, use the "),Ve=m(Rn,"CODE",{});var Jn=E(Ve);He=v(Jn,"$delete"),Jn.forEach(u),Qe=v(Rn," method. You can also call the\n    "),Re=m(Rn,"CODE",{});var Kn=E(Re);Xe=v(Kn,"saveEntity"),Kn.forEach(u),Je=v(Rn,",\n    "),Ke=m(Rn,"CODE",{});var Wn=E(Ke);We=v(Wn,"deleteEntity"),Wn.forEach(u),Ze=v(Rn,", and "),_e=m(Rn,"CODE",{});var Zn=E(_e);et=v(Zn,"deleteEntityByID"),Zn.forEach(u),tt=v(Rn," methods of\n    "),at=m(Rn,"CODE",{});var _n=E(at);nt=v(_n,"Nymph"),_n.forEach(u),st=v(Rn,". The "),rt=m(Rn,"CODE",{});var es=E(rt);ot=v(es,"Entity"),es.forEach(u),it=v(Rn," class uses these methods."),Rn.forEach(u),ht=f(s),p(ct.$$.fragment,s),lt=f(s),dt=m(s,"P",{});var ts=E(dt);yt=v(ts,"Entities can't be checked using the "),ut=m(ts,"CODE",{});var as=E(ut);ft=v(as,"=="),as.forEach(u),mt=v(ts," operator. Instead, you can\n    use the following entity methods."),ts.forEach(u),Et=f(s),vt=m(s,"UL",{});var ns=E(vt);pt=m(ns,"LI",{});var ss=E(pt);gt=m(ss,"CODE",{});var rs=E(gt);$t=v(rs,"$is"),rs.forEach(u),wt=v(ss," - Perform a less strict comparison of two entities\n      (basically a GUID check). To return true, the entities must meet the\n      following criteria.\n      "),bt=m(ss,"UL",{});var os=E(bt);Ct=m(os,"LI",{});var is=E(Ct);Dt=v(is,"They must be entities."),is.forEach(u),It=f(os),Ot=m(os,"LI",{});var hs=E(Ot);Tt=v(hs,"They must have equal GUIDs, or both can have no GUID."),hs.forEach(u),kt=f(os),Nt=m(os,"LI",{});var cs=E(Nt);jt=v(cs,"If they have no GUIDs, their data must be equal."),cs.forEach(u),os.forEach(u),ss.forEach(u),Ut=f(ns),Pt=m(ns,"LI",{});var ls=E(Pt);qt=m(ls,"CODE",{});var ds=E(qt);Gt=v(ds,"$equals"),ds.forEach(u),Lt=v(ls," - Perform a more strict comparison of two entities\n      (basically a GUID + class + data check). To return true, the entities must\n      meet the following criteria.\n      "),At=m(ls,"UL",{});var ys=E(At);St=m(ys,"LI",{});var us=E(St);xt=v(us,"They must be entities."),us.forEach(u),Mt=f(ys),Ft=m(ys,"LI",{});var fs=E(Ft);Yt=v(fs,"They must have equal GUIDs, or both can have no GUID."),fs.forEach(u),zt=f(ys),Bt=m(ys,"LI",{});var ms=E(Bt);Vt=v(ms,"They must be instances of the same class."),ms.forEach(u),Ht=f(ys),Qt=m(ys,"LI",{});var Es=E(Qt);Rt=v(Es,"Their data must be equal."),Es.forEach(u),ys.forEach(u),ls.forEach(u),Xt=f(ns),Jt=m(ns,"LI",{});var vs=E(Jt);Kt=m(vs,"CODE",{});var ps=E(Kt);Wt=v(ps,"$inArray"),ps.forEach(u),Zt=v(vs," - Check whether the entity is in an array. Takes two\n      arguments, the array and a boolean "),_t=m(vs,"CODE",{});var gs=E(_t);ea=v(gs,"strict"),gs.forEach(u),ta=v(vs,". If\n      "),aa=m(vs,"CODE",{});var $s=E(aa);na=v($s,"strict"),$s.forEach(u),sa=v(vs,"\n      is false, the function uses "),ra=m(vs,"CODE",{});var ws=E(ra);oa=v(ws,"$is"),ws.forEach(u),ia=v(vs," to compare, and if it's true,\n      the function uses "),ha=m(vs,"CODE",{});var bs=E(ha);ca=v(bs,"$equals"),bs.forEach(u),la=v(vs,"."),vs.forEach(u),da=f(ns),ya=m(ns,"LI",{});var Cs=E(ya);ua=m(Cs,"CODE",{});var Ds=E(ua);fa=v(Ds,"$arraySearch"),Ds.forEach(u),ma=v(Cs," - Search an array for the entity and return the\n      corresponding key. Takes two arguments, the array and a boolean\n      "),Ea=m(Cs,"CODE",{});var Is=E(Ea);va=v(Is,"strict"),Is.forEach(u),pa=v(Cs,". If "),ga=m(Cs,"CODE",{});var Os=E(ga);$a=v(Os,"strict"),Os.forEach(u),wa=v(Cs," is false, the function uses\n      "),ba=m(Cs,"CODE",{});var Ts=E(ba);Ca=v(Ts,"$is"),Ts.forEach(u),Da=v(Cs,"\n      to compare, and if it's true, the function uses "),Ia=m(Cs,"CODE",{});var ks=E(Ia);Oa=v(ks,"$equals"),ks.forEach(u),Ta=v(Cs,". This\n      method may return 0, which evaluates to false, so you should use\n      "),ka=m(Cs,"CODE",{});var Ns=E(ka);Na=v(Ns,"$inArray"),Ns.forEach(u),ja=v(Cs," if you are only checking whether the entity is in the\n      array."),Cs.forEach(u),ns.forEach(u),Ua=f(s),p(Pa.$$.fragment,s),qa=f(s),Ga=m(s,"P",{});var js=E(Ga);La=v(js,"Client side Nymph entities can use the "),Aa=m(js,"CODE",{});var Us=E(Aa);Sa=v(Us,"$serverCall"),Us.forEach(u),xa=v(js," method to\n    call methods on a server side instance of the entity.\n    "),Ma=m(js,"CODE",{});var Ps=E(Ma);Fa=v(Ps,"$serverCall"),Ps.forEach(u),Ya=v(js," expects three parameters."),js.forEach(u),za=f(s),Ba=m(s,"UL",{});var qs=E(Ba);Va=m(qs,"LI",{});var Gs=E(Va);Ha=m(Gs,"CODE",{});var Ls=E(Ha);Qa=v(Ls,"method"),Ls.forEach(u),Ra=v(Gs," - the name of the method to call on the server side object."),Gs.forEach(u),Xa=f(qs),Ja=m(qs,"LI",{});var As=E(Ja);Ka=m(As,"CODE",{});var Ss=E(Ka);Wa=v(Ss,"params"),Ss.forEach(u),Za=v(As," - an array of the parameters to pass to the method."),As.forEach(u),_a=f(qs),en=m(qs,"LI",{});var xs=E(en);tn=m(xs,"CODE",{});var Ms=E(tn);an=v(Ms,"stateless"),Ms.forEach(u),nn=v(xs," - if set to true, the method won't update the entity\n      with the returned server side representation."),xs.forEach(u),qs.forEach(u),sn=f(s),rn=m(s,"P",{});var Fs=E(rn);on=v(Fs,"Normally, when you use this method, just before the promise is fulfilled,\n    the entity's data will be replaced with that of the entity on the server\n    side after the method was run. This will cause any awoken entities in the\n    data of your entity to be replaced with sleeping entities, so you will have\n    to run "),hn=m(Fs,"CODE",{});var Ys=E(hn);cn=v(Ys,"$readyAll"),Ys.forEach(u),ln=v(Fs," again. If you know that the server side method\n    will not change any of the data on the entity, you can set\n    "),dn=m(Fs,"CODE",{});var zs=E(dn);yn=v(zs,"stateless"),zs.forEach(u),un=v(Fs," to true."),Fs.forEach(u),fn=f(s),mn=m(s,"P",{});var Bs=E(mn);En=v(Bs,"You can also call static methods on the server with "),vn=m(Bs,"CODE",{});var Vs=E(vn);pn=v(Vs,"serverCallStatic"),Vs.forEach(u),gn=v(Bs,"."),Bs.forEach(u),$n=f(s),wn=m(s,"P",{});var Hs=E(wn);bn=v(Hs,"In order to be called from the client side, the method must be listed in the\n    "),Cn=m(Hs,"CODE",{});var Qs=E(Cn);Dn=v(Qs,"$clientEnabledMethods"),Qs.forEach(u),In=v(Hs," or\n    "),On=m(Hs,"CODE",{});var Rs=E(On);Tn=v(Rs,"clientEnabledStaticMethods"),Rs.forEach(u),kn=v(Hs," property in the Node.js class. This\n    guards against a user submitting tailored requests to perform potentially\n    dangerous tasks on the server side. If the method is not listed, the request\n    will fail with a "),Nn=m(Hs,"CODE",{});var Xs=E(Nn);jn=v(Xs,"403 Forbidden"),Xs.forEach(u),Un=v(Hs," status."),Hs.forEach(u),Pn=f(s),p(qn.$$.fragment,s),s.forEach(u),Gn=f(e),Ln=m(e,"SECTION",{});var Js=E(Ln);An=m(Js,"DIV",{class:!0});var Ks=E(An);Sn=m(Ks,"DIV",{class:!0});var Ws=E(Sn);xn=m(Ws,"A",{href:!0,class:!0,style:!0});var Zs=E(xn);Mn=v(Zs,"Previous: Subscribing to Queries"),Zs.forEach(u),Ws.forEach(u),Fn=f(Ks),Yn=m(Ks,"DIV",{class:!0,style:!0});var _s=E(Yn);zn=m(_s,"A",{href:!0,class:!0,style:!0});var er=E(zn);Bn=v(er,"Next: Ext. the Entity Class"),er.forEach(u),_s.forEach(u),Ks.forEach(u),Js.forEach(u),this.h()},h(){document.title="Entity Class - User Guide - Nymph",t.a=a,g(q,"font-size","3em"),$(P,"class","major"),$(xn,"href",N+"/user-guide/subscribing-to-queries"),$(xn,"class","button"),g(xn,"margin",".5em"),$(Sn,"class","col-6 col-12-small"),$(zn,"href",N+"/user-guide/extending-the-entity-class"),$(zn,"class","button"),g(zn,"margin",".5em"),$(Yn,"class","col-6 col-12-small"),g(Yn,"text-align","end"),$(An,"class","row")},m(e,n){t.m(w,document.head),b(document.head,a),C(e,j,n),C(e,U,n),b(U,P),b(P,q),b(q,G),b(U,L),b(U,A),b(A,S),b(U,x),b(U,M),b(M,F),b(M,Y),b(Y,z),b(M,B),b(M,V),b(V,H),b(M,Q),b(U,R),b(U,X),b(X,J),b(X,K),b(K,W),b(X,Z),b(X,_),b(_,ee),b(X,te),b(X,ae),b(ae,ne),b(X,se),b(U,re),D(oe,U,null),b(U,ie),b(U,he),b(he,ce),b(U,le),b(U,de),b(de,ye),b(de,ue),b(ue,fe),b(de,me),b(de,Ee),b(Ee,ve),b(de,pe),b(U,ge),b(U,$e),b($e,we),b($e,be),b(be,Ce),b($e,De),b($e,Ie),b(Ie,Oe),b($e,Te),b(U,ke),D(Ne,U,null),b(U,je),b(U,Ue),b(Ue,Pe),b(Ue,qe),b(qe,Ge),b(Ue,Le),b(U,Ae),D(Se,U,null),b(U,xe),b(U,Me),b(Me,Fe),b(Me,Ye),b(Ye,ze),b(Me,Be),b(Me,Ve),b(Ve,He),b(Me,Qe),b(Me,Re),b(Re,Xe),b(Me,Je),b(Me,Ke),b(Ke,We),b(Me,Ze),b(Me,_e),b(_e,et),b(Me,tt),b(Me,at),b(at,nt),b(Me,st),b(Me,rt),b(rt,ot),b(Me,it),b(U,ht),D(ct,U,null),b(U,lt),b(U,dt),b(dt,yt),b(dt,ut),b(ut,ft),b(dt,mt),b(U,Et),b(U,vt),b(vt,pt),b(pt,gt),b(gt,$t),b(pt,wt),b(pt,bt),b(bt,Ct),b(Ct,Dt),b(bt,It),b(bt,Ot),b(Ot,Tt),b(bt,kt),b(bt,Nt),b(Nt,jt),b(vt,Ut),b(vt,Pt),b(Pt,qt),b(qt,Gt),b(Pt,Lt),b(Pt,At),b(At,St),b(St,xt),b(At,Mt),b(At,Ft),b(Ft,Yt),b(At,zt),b(At,Bt),b(Bt,Vt),b(At,Ht),b(At,Qt),b(Qt,Rt),b(vt,Xt),b(vt,Jt),b(Jt,Kt),b(Kt,Wt),b(Jt,Zt),b(Jt,_t),b(_t,ea),b(Jt,ta),b(Jt,aa),b(aa,na),b(Jt,sa),b(Jt,ra),b(ra,oa),b(Jt,ia),b(Jt,ha),b(ha,ca),b(Jt,la),b(vt,da),b(vt,ya),b(ya,ua),b(ua,fa),b(ya,ma),b(ya,Ea),b(Ea,va),b(ya,pa),b(ya,ga),b(ga,$a),b(ya,wa),b(ya,ba),b(ba,Ca),b(ya,Da),b(ya,Ia),b(Ia,Oa),b(ya,Ta),b(ya,ka),b(ka,Na),b(ya,ja),b(U,Ua),D(Pa,U,null),b(U,qa),b(U,Ga),b(Ga,La),b(Ga,Aa),b(Aa,Sa),b(Ga,xa),b(Ga,Ma),b(Ma,Fa),b(Ga,Ya),b(U,za),b(U,Ba),b(Ba,Va),b(Va,Ha),b(Ha,Qa),b(Va,Ra),b(Ba,Xa),b(Ba,Ja),b(Ja,Ka),b(Ka,Wa),b(Ja,Za),b(Ba,_a),b(Ba,en),b(en,tn),b(tn,an),b(en,nn),b(U,sn),b(U,rn),b(rn,on),b(rn,hn),b(hn,cn),b(rn,ln),b(rn,dn),b(dn,yn),b(rn,un),b(U,fn),b(U,mn),b(mn,En),b(mn,vn),b(vn,pn),b(mn,gn),b(U,$n),b(U,wn),b(wn,bn),b(wn,Cn),b(Cn,Dn),b(wn,In),b(wn,On),b(On,Tn),b(wn,kn),b(wn,Nn),b(Nn,jn),b(wn,Un),b(U,Pn),D(qn,U,null),C(e,Gn,n),C(e,Ln,n),b(Ln,An),b(An,Sn),b(Sn,xn),b(xn,Mn),b(An,Fn),b(An,Yn),b(Yn,zn),b(zn,Bn),Vn=!0},p:I,i(e){Vn||(O(oe.$$.fragment,e),O(Ne.$$.fragment,e),O(Se.$$.fragment,e),O(ct.$$.fragment,e),O(Pa.$$.fragment,e),O(qn.$$.fragment,e),Vn=!0)},o(e){T(oe.$$.fragment,e),T(Ne.$$.fragment,e),T(Se.$$.fragment,e),T(ct.$$.fragment,e),T(Pa.$$.fragment,e),T(qn.$$.fragment,e),Vn=!1},d(e){u(a),e&&t.d(),e&&u(j),e&&u(U),k(oe),k(Ne),k(Se),k(ct),k(Pa),k(qn),e&&u(Gn),e&&u(Ln)}}}class U extends e{constructor(e){super(),t(this,e,null,j,a,{})}}export{U as default};
