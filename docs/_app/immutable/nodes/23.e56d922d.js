import{s as I,a as g,f as c,l as j,x,d as n,c as f,g as d,r as T,h as b,m as S,j as v,k,i as p,u,v as w}from"../chunks/scheduler.d7e45cc8.js";import{S as A,i as U}from"../chunks/index.77720afb.js";import{b as q}from"../chunks/paths.d4a6803e.js";function C(E){let i,s,N=`<header class="major"><h1 style="font-size: 3em;">Introduction</h1></header> <p>Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server.</p> <header class="major"><h2>Understanding Nymph Applications</h2></header> <p>Data in Nymph is stored and manipulated in objects called <strong>entities</strong>. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling <code>$save</code>. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you&#39;re ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    <a href="https://joi.dev/" target="_blank" rel="noreferrer">Joi</a>
    is a good one. You can do this in the
    <code>$save</code>
    method on your entities before calling
    <code>return await super.$save();</code>. This means that during
    development, you don&#39;t need to worry about managing schemas at all, but you
    still get the benefit of strict checks in production.</p> <p>All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that&#39;s done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).</p> <p>Using Nymph, nearly all of an app&#39;s business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph&#39;s optional user/group manager, provides
    access control.</p> <p>If an entity is referenced in another entity&#39;s property, the class name is
    saved along with the GUID. When this referenced entity is awoken, Nymph will
    retrieve it using the saved class.</p> <p>When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a &quot;sleeping reference&quot;.
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. This happens when you
    use the <code>$wake</code> method on it, or the <code>$wakeAll</code> method
    on its parent.</p> <p>When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.</p> <p>Caution: When changing an entity&#39;s class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.</p> <header class="major"><h2>API Docs</h2></header> <p>If you want to really dive deep into Nymph, you can also browse the <a href="/api/latest/" rel="external">API docs</a>, which covers every part of Nymph&#39;s API.</p>`,o,t,h,y,a,m;return{c(){i=g(),s=c("section"),s.innerHTML=N,o=g(),t=c("section"),h=c("span"),y=g(),a=c("a"),m=j("Next: Creating Entities"),this.h()},l(e){x("svelte-6cxoo7",document.head).forEach(n),i=f(e),s=d(e,"SECTION",{"data-svelte-h":!0}),T(s)!=="svelte-gi5e61"&&(s.innerHTML=N),o=f(e),t=d(e,"SECTION",{class:!0});var l=b(t);h=d(l,"SPAN",{}),b(h).forEach(n),y=f(l),a=d(l,"A",{href:!0,class:!0,style:!0});var _=b(a);m=S(_,"Next: Creating Entities"),_.forEach(n),l.forEach(n),this.h()},h(){document.title="Introduction - User Guide - Nymph.js",v(a,"href",q+"/user-guide/creating-entities"),v(a,"class","button"),k(a,"margin",".5em"),v(t,"class","page-steps")},m(e,r){p(e,i,r),p(e,s,r),p(e,o,r),p(e,t,r),u(t,h),u(t,y),u(t,a),u(a,m)},p:w,i:w,o:w,d(e){e&&(n(i),n(s),n(o),n(t))}}}class $ extends A{constructor(i){super(),U(this,i,null,C,I,{})}}export{$ as component};
