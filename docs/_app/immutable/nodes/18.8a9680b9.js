import{s as bt,I as Et,e as pt,a as s,f as i,l as vt,x as Ct,J as Tt,d as l,c as o,g as r,h as k,r as d,m as $t,j as H,k as wt,u as t,i as q,v as Pt}from"../chunks/scheduler.d7e45cc8.js";import{S as It,i as kt,b as B,d as z,m as G,a as O,t as R,e as U}from"../chunks/index.77720afb.js";import{H as V,g as Ht}from"../chunks/github.64534d2c.js";import{t as W}from"../chunks/typescript.09c48802.js";import{b as _t}from"../chunks/paths.dbb47c61.js";function Mt(xt){let h,M,L,e,u,rt='<h1 style="font-size: 3em;">Creating Entities</h1>',Y,E,lt=`To create or retrieve an entity, you can call the <code>factory</code>
    static method of an entity&#39;s class and pass in an optional GUID. You can also
    use the <code>factorySync</code> method if you need to create a new entity
    synchronously. The benefit of using the factory methods is that they can
    return the correct type in TypeScript. To check that an entity hasn&#39;t been
    saved yet, check that the GUID is null (<code>entity.guid == null</code>).`,Q,g,F,C,ct=`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`,J,f,K,T,dt=`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`,X,y,m,ht="Saving a Referenced Entity the <strong>Right</strong> Way",Z,p,tt,v,$,ut="Saving a Referenced Entity the <strong>Wrong</strong> Way",et,w,nt,P,gt=`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`,at,I,ft=`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called &quot;sleeping
    references&quot;. You can use \`$wake\` on the entity or \`$wakeAll\` on the parent
    entity to get the entity&#39;s data from the DB. The <code>$wakeAll</code>
    method will awaken all sleeping references in the entity&#39;s data. You can
    call <code>$clearCache</code>
    in Node.js or <code>$refresh</code> in the client to turn all the entities back
    into sleeping references.`,S,c,_,st,it,x,ot,D;return g=new V({props:{language:W,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),f=new V({props:{language:W,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),p=new V({props:{language:W,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),w=new V({props:{language:W,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){h=new Et(!1),M=pt(),L=s(),e=i("section"),u=i("header"),u.innerHTML=rt,Y=s(),E=i("p"),E.innerHTML=lt,Q=s(),B(g.$$.fragment),F=s(),C=i("p"),C.textContent=ct,J=s(),B(f.$$.fragment),K=s(),T=i("p"),T.textContent=dt,X=s(),y=i("div"),m=i("div"),m.innerHTML=ht,Z=s(),B(p.$$.fragment),tt=s(),v=i("div"),$=i("div"),$.innerHTML=ut,et=s(),B(w.$$.fragment),nt=s(),P=i("p"),P.textContent=gt,at=s(),I=i("p"),I.innerHTML=ft,S=s(),c=i("section"),_=i("a"),st=vt("Previous: Introduction"),it=s(),x=i("a"),ot=vt("Next: Entity Querying"),this.h()},l(n){const b=Ct("svelte-1eabkgd",document.head);h=Tt(b,!1),M=pt(),b.forEach(l),L=o(n),e=r(n,"SECTION",{});var a=k(e);u=r(a,"HEADER",{class:!0,"data-svelte-h":!0}),d(u)!=="svelte-1r4zxlg"&&(u.innerHTML=rt),Y=o(a),E=r(a,"P",{"data-svelte-h":!0}),d(E)!=="svelte-1jwh69x"&&(E.innerHTML=lt),Q=o(a),z(g.$$.fragment,a),F=o(a),C=r(a,"P",{"data-svelte-h":!0}),d(C)!=="svelte-go5m5m"&&(C.textContent=ct),J=o(a),z(f.$$.fragment,a),K=o(a),T=r(a,"P",{"data-svelte-h":!0}),d(T)!=="svelte-k2lz97"&&(T.textContent=dt),X=o(a),y=r(a,"DIV",{});var N=k(y);m=r(N,"DIV",{style:!0,"data-svelte-h":!0}),d(m)!=="svelte-1jxvgmh"&&(m.innerHTML=ht),Z=o(N),z(p.$$.fragment,N),N.forEach(l),tt=o(a),v=r(a,"DIV",{});var A=k(v);$=r(A,"DIV",{style:!0,"data-svelte-h":!0}),d($)!=="svelte-1s82s64"&&($.innerHTML=ut),et=o(A),z(w.$$.fragment,A),A.forEach(l),nt=o(a),P=r(a,"P",{"data-svelte-h":!0}),d(P)!=="svelte-v88prl"&&(P.textContent=gt),at=o(a),I=r(a,"P",{"data-svelte-h":!0}),d(I)!=="svelte-8t5hp3"&&(I.innerHTML=ft),a.forEach(l),S=o(n),c=r(n,"SECTION",{class:!0});var j=k(c);_=r(j,"A",{href:!0,class:!0});var yt=k(_);st=$t(yt,"Previous: Introduction"),yt.forEach(l),it=o(j),x=r(j,"A",{href:!0,class:!0});var mt=k(x);ot=$t(mt,"Next: Entity Querying"),mt.forEach(l),j.forEach(l),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",h.a=M,H(u,"class","major"),wt(m,"text-align","end"),wt($,"text-align","end"),H(_,"href",_t+"/user-guide/introduction"),H(_,"class","button"),H(x,"href",_t+"/user-guide/entity-querying"),H(x,"class","button"),H(c,"class","page-steps")},m(n,b){h.m(Ht,document.head),t(document.head,M),q(n,L,b),q(n,e,b),t(e,u),t(e,Y),t(e,E),t(e,Q),G(g,e,null),t(e,F),t(e,C),t(e,J),G(f,e,null),t(e,K),t(e,T),t(e,X),t(e,y),t(y,m),t(y,Z),G(p,y,null),t(e,tt),t(e,v),t(v,$),t(v,et),G(w,v,null),t(e,nt),t(e,P),t(e,at),t(e,I),q(n,S,b),q(n,c,b),t(c,_),t(_,st),t(c,it),t(c,x),t(x,ot),D=!0},p:Pt,i(n){D||(O(g.$$.fragment,n),O(f.$$.fragment,n),O(p.$$.fragment,n),O(w.$$.fragment,n),D=!0)},o(n){R(g.$$.fragment,n),R(f.$$.fragment,n),R(p.$$.fragment,n),R(w.$$.fragment,n),D=!1},d(n){n&&(h.d(),l(L),l(e),l(S),l(c)),l(M),U(g),U(f),U(p),U(w)}}}class jt extends It{constructor(h){super(),kt(this,h,null,Mt,bt,{})}}export{jt as component};
