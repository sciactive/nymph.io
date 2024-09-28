import{s as Ye,I as Be,e as Ae,a as i,f as s,l as je,x as Qe,J as Je,d as c,c as o,g as r,h as V,r as l,m as Ue,j as N,k as Ge,u as a,i as W,v as Re}from"../chunks/scheduler.d7e45cc8.js";import{S as Ke,i as Ve,b as S,d as A,m as j,a as U,t as G,e as F}from"../chunks/index.77720afb.js";import{H as z,g as We}from"../chunks/github.64534d2c.js";import{t as Y}from"../chunks/typescript.09c48802.js";import{b as Fe}from"../chunks/paths.d4a6803e.js";function Xe(ze){let y,B,Q,e,f,Te='<h1 style="font-size: 3em;">Entity Class</h1>',X,b,be=`Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.`,Z,E,Ee=`In the client, assigning a property internally marks that property as
    &quot;dirty&quot;, and calling <code>$patch</code> will push just the changed
    properties up to the server, whereas <code>$save</code> would push all properties.`,ee,_,_e=`Entities can be organized using tags. To add, remove, and check tags, the
    methods <code>$addTag</code>, <code>$removeTag</code>, and
    <code>$hasTag</code> are used, respectively. Each takes any number of tags as
    arguments.`,te,m,ae,M,Me=`Entities that have been saved inside another entity&#39;s property are loaded as
    &quot;sleeping references&quot;. This means their data is not actually pulled from the
    database/server. It will &quot;wake up&quot; when you use <code>$wake</code> on it or
    <code>$wakeAll</code> on the entity that contains it.`,ne,C,Ce=`To clear the cache of referenced entities, so that the next time one is
    awoken, it will be pulled from the database, use the <code>$clearCache</code>
    method in Node.js or the <code>$refresh</code> method in the client.`,ie,p,oe,x,xe=`Much like clearing the entity cache, you may need to refresh the entity&#39;s
    own data in Node.js. Use the <code>$refresh</code> method, just like in the client,
    for this.`,se,g,re,k,ke=`To save an entity, use the <code>$save</code> method. Likewise, to delete
    the entity, use the <code>$delete</code> method. You can also call the
    <code>saveEntity</code>,
    <code>deleteEntity</code>, and <code>deleteEntityByID</code> methods of
    <code>Nymph</code>. The <code>Entity</code> class uses these methods.`,le,v,ce,H,He=`Entities can&#39;t be checked using the <code>==</code> operator. Instead, you can
    use the following entity methods.`,de,L,Le=`<li><code>$is</code> - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria.
      <ul><li>They must be entities.</li> <li>They must have equal GUIDs, or both can have no GUID.</li> <li>If they have no GUIDs, their data and tags must be equal.</li></ul></li> <li><code>$equals</code> - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria. Unlike <code>$is</code>, this method can&#39;t be
      used on sleeping references.
      <ul><li>They must be entities.</li> <li>They must have equal GUIDs, or both can have no GUID.</li> <li>Their data and tags must be equal.</li></ul></li> <li><code>$inArray</code> - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean <code>strict</code>. If
      <code>strict</code>
      is false or undefined, the function uses <code>$is</code> to compare, and
      if it&#39;s true, the function uses <code>$equals</code>.</li> <li><code>$arraySearch</code> - Search an array for the entity and return its
      index, or <code>-1</code> if it&#39;s not found. Takes two arguments, the
      array and a boolean
      <code>strict</code>. If <code>strict</code> is false or undefined, the
      function uses
      <code>$is</code>
      to compare, and if it&#39;s true, the function uses <code>$equals</code>. This
      method may return 0, which evaluates to false, so you should use
      <code>$inArray</code> if you are only checking whether the entity is in the
      array.</li>`,he,$,ue,I,Ie=`Client side Nymph entities can use the <code>$serverCall</code> method to
    call methods on a server side instance of the entity.
    <code>$serverCall</code> expects three parameters.`,ye,q,qe=`<li><code>method</code> - the name of the method to call on the server side object.</li> <li><code>params</code> - an array of the parameters to pass to the method.</li> <li><code>stateless</code> - if set to true, the method won&#39;t update the entity
      with the returned server side representation.</li>`,fe,D,De=`Normally, when you use this method, just before the promise is fulfilled,
    the entity&#39;s data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run <code>$readyAll</code> again. If you know that the server side method
    will not change any of the data on the entity, you can set
    <code>stateless</code> to true.`,me,P,Pe="You can also call static methods on the server with <code>serverCallStatic</code>.",pe,O,Oe=`In order to be called from the client side, the method must be listed in the
    <code>$clientEnabledMethods</code> or
    <code>clientEnabledStaticMethods</code> property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a <code>403 Forbidden</code> status.`,ge,w,J,d,h,ve,$e,u,we,R;return m=new z({props:{language:Y,code:`const entity = await MyEntity.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`}}),p=new z({props:{language:Y,code:`// Create some entities.
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
console.log(entity.foo.bar); // Outputs 'New value.'`}}),g=new z({props:{language:Y,code:`// Create an entity.
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
console.log(entity.foo); // Outputs 'New value.'`}}),v=new z({props:{language:Y,code:`const entity = await MyEntity.factory();

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
await nymph.deleteEntities([entity]);`}}),$=new z({props:{language:Y,code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
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
entity.$inArray(arr, true); // false`}}),w=new z({props:{language:Y,code:`// You can use $serverCall and serverCallStatic directly.
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
const success = await todo.$archive();`}}),{c(){y=new Be(!1),B=Ae(),Q=i(),e=s("section"),f=s("header"),f.innerHTML=Te,X=i(),b=s("p"),b.textContent=be,Z=i(),E=s("p"),E.innerHTML=Ee,ee=i(),_=s("p"),_.innerHTML=_e,te=i(),S(m.$$.fragment),ae=i(),M=s("p"),M.innerHTML=Me,ne=i(),C=s("p"),C.innerHTML=Ce,ie=i(),S(p.$$.fragment),oe=i(),x=s("p"),x.innerHTML=xe,se=i(),S(g.$$.fragment),re=i(),k=s("p"),k.innerHTML=ke,le=i(),S(v.$$.fragment),ce=i(),H=s("p"),H.innerHTML=He,de=i(),L=s("ul"),L.innerHTML=Le,he=i(),S($.$$.fragment),ue=i(),I=s("p"),I.innerHTML=Ie,ye=i(),q=s("ul"),q.innerHTML=qe,fe=i(),D=s("p"),D.innerHTML=De,me=i(),P=s("p"),P.innerHTML=Pe,pe=i(),O=s("p"),O.innerHTML=Oe,ge=i(),S(w.$$.fragment),J=i(),d=s("section"),h=s("a"),ve=je("Previous: Subscribing to Queries"),$e=i(),u=s("a"),we=je("Next: Defining Entities"),this.h()},l(n){const T=Qe("svelte-24q1tq",document.head);y=Je(T,!1),B=Ae(),T.forEach(c),Q=o(n),e=r(n,"SECTION",{});var t=V(e);f=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),l(f)!=="svelte-og671h"&&(f.innerHTML=Te),X=o(t),b=r(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-110h7us"&&(b.textContent=be),Z=o(t),E=r(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-y8afi6"&&(E.innerHTML=Ee),ee=o(t),_=r(t,"P",{"data-svelte-h":!0}),l(_)!=="svelte-i83m4k"&&(_.innerHTML=_e),te=o(t),A(m.$$.fragment,t),ae=o(t),M=r(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-ndkimk"&&(M.innerHTML=Me),ne=o(t),C=r(t,"P",{"data-svelte-h":!0}),l(C)!=="svelte-1b8l87g"&&(C.innerHTML=Ce),ie=o(t),A(p.$$.fragment,t),oe=o(t),x=r(t,"P",{"data-svelte-h":!0}),l(x)!=="svelte-bvqxix"&&(x.innerHTML=xe),se=o(t),A(g.$$.fragment,t),re=o(t),k=r(t,"P",{"data-svelte-h":!0}),l(k)!=="svelte-m1pah4"&&(k.innerHTML=ke),le=o(t),A(v.$$.fragment,t),ce=o(t),H=r(t,"P",{"data-svelte-h":!0}),l(H)!=="svelte-ofuybv"&&(H.innerHTML=He),de=o(t),L=r(t,"UL",{"data-svelte-h":!0}),l(L)!=="svelte-k6om4g"&&(L.innerHTML=Le),he=o(t),A($.$$.fragment,t),ue=o(t),I=r(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-17ufvy7"&&(I.innerHTML=Ie),ye=o(t),q=r(t,"UL",{"data-svelte-h":!0}),l(q)!=="svelte-11n6zj9"&&(q.innerHTML=qe),fe=o(t),D=r(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-7sz2fh"&&(D.innerHTML=De),me=o(t),P=r(t,"P",{"data-svelte-h":!0}),l(P)!=="svelte-h3sxmn"&&(P.innerHTML=Pe),pe=o(t),O=r(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-xe32i4"&&(O.innerHTML=Oe),ge=o(t),A(w.$$.fragment,t),t.forEach(c),J=o(n),d=r(n,"SECTION",{class:!0});var K=V(d);h=r(K,"A",{href:!0,class:!0,style:!0});var Ne=V(h);ve=Ue(Ne,"Previous: Subscribing to Queries"),Ne.forEach(c),$e=o(K),u=r(K,"A",{href:!0,class:!0,style:!0});var Se=V(u);we=Ue(Se,"Next: Defining Entities"),Se.forEach(c),K.forEach(c),this.h()},h(){document.title="Entity Class - User Guide - Nymph.js",y.a=B,N(f,"class","major"),N(h,"href",Fe+"/user-guide/subscribing-to-queries"),N(h,"class","button"),Ge(h,"margin",".5em"),N(u,"href",Fe+"/user-guide/defining-entities"),N(u,"class","button"),Ge(u,"margin",".5em"),N(d,"class","page-steps")},m(n,T){y.m(We,document.head),a(document.head,B),W(n,Q,T),W(n,e,T),a(e,f),a(e,X),a(e,b),a(e,Z),a(e,E),a(e,ee),a(e,_),a(e,te),j(m,e,null),a(e,ae),a(e,M),a(e,ne),a(e,C),a(e,ie),j(p,e,null),a(e,oe),a(e,x),a(e,se),j(g,e,null),a(e,re),a(e,k),a(e,le),j(v,e,null),a(e,ce),a(e,H),a(e,de),a(e,L),a(e,he),j($,e,null),a(e,ue),a(e,I),a(e,ye),a(e,q),a(e,fe),a(e,D),a(e,me),a(e,P),a(e,pe),a(e,O),a(e,ge),j(w,e,null),W(n,J,T),W(n,d,T),a(d,h),a(h,ve),a(d,$e),a(d,u),a(u,we),R=!0},p:Re,i(n){R||(U(m.$$.fragment,n),U(p.$$.fragment,n),U(g.$$.fragment,n),U(v.$$.fragment,n),U($.$$.fragment,n),U(w.$$.fragment,n),R=!0)},o(n){G(m.$$.fragment,n),G(p.$$.fragment,n),G(g.$$.fragment,n),G(v.$$.fragment,n),G($.$$.fragment,n),G(w.$$.fragment,n),R=!1},d(n){n&&(y.d(),c(Q),c(e),c(J),c(d)),c(B),F(m),F(p),F(g),F(v),F($),F(w)}}}class it extends Ke{constructor(y){super(),Ve(this,y,null,Xe,Ye,{})}}export{it as component};
