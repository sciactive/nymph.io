import{S as vt,i as Et,s as wt,R as _t,e as gt,a as d,k as o,q as a,y as te,F as $t,T as bt,h as t,c as h,l as r,m as l,r as s,z as ne,p as Xe,n as O,C as e,b as ae,A as se,D as kt,g as ie,d as oe,B as re}from"../chunks/index.d7cc8d8b.js";import{H as le,g as It}from"../chunks/github.df9008b1.js";import{t as ce}from"../chunks/typescript.7dd1ec19.js";import{b as pt}from"../chunks/paths.3059cfc3.js";function Tt(mt){let v,j,F,n,N,C,de,he,y,ye,x,fe,ue,R,ge,pe,W,me,ve,Ee,E,we,A,_e,$e,w,be,B,ke,Ie,_,g,Te,G,De,Pe,Ne,$,Ce,b,p,Se,q,Oe,je,xe,k,Re,U,We,Ae,f,Be,H,Ge,qe,Y,Ue,He,Ye,z,ze,Ve,I,Fe,V,Ke,Me,K,u,T,Qe,Je,D,Le,M;return E=new le({props:{language:ce,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),w=new le({props:{language:ce,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),$=new le({props:{language:ce,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),k=new le({props:{language:ce,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){v=new _t(!1),j=gt(),F=d(),n=o("section"),N=o("header"),C=o("h1"),de=a("Creating Entities"),he=d(),y=o("p"),ye=a("To create or retrieve an entity, you can call the "),x=o("code"),fe=a("factory"),ue=a(`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),R=o("code"),ge=a("factorySync"),pe=a(` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),W=o("code"),me=a("entity.guid == null"),ve=a(")."),Ee=d(),te(E.$$.fragment),we=d(),A=o("p"),_e=a(`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),$e=d(),te(w.$$.fragment),be=d(),B=o("p"),ke=a(`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),Ie=d(),_=o("div"),g=o("div"),Te=a("Saving a Referenced Entity the "),G=o("strong"),De=a("Right"),Pe=a(" Way"),Ne=d(),te($.$$.fragment),Ce=d(),b=o("div"),p=o("div"),Se=a("Saving a Referenced Entity the "),q=o("strong"),Oe=a("Wrong"),je=a(" Way"),xe=d(),te(k.$$.fragment),Re=d(),U=o("p"),We=a(`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),Ae=d(),f=o("p"),Be=a(`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB synchronously. You can
    call `),H=o("code"),Ge=a("$clearCache"),qe=a(" in Node.js or "),Y=o("code"),Ue=a("$refresh"),He=a(` in the client
    to turn all the entities back into sleeping references.`),Ye=d(),z=o("p"),ze=a(`Keep in mind that because Nymph is making a synchronous database call when
    you access a referenced entity's data, you may get thrown errors. You should
    surround access to data like this in a try/catch block.`),Ve=d(),I=o("p"),Fe=a("In the client, the "),V=o("code"),Ke=a("$readyAll"),Me=a(` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),K=d(),u=o("section"),T=o("a"),Qe=a("Previous: Introduction"),Je=d(),D=o("a"),Le=a("Next: Entity Querying"),this.h()},l(i){const P=$t("svelte-1eabkgd",document.head);v=bt(P,!1),j=gt(),P.forEach(t),F=h(i),n=r(i,"SECTION",{});var c=l(n);N=r(c,"HEADER",{class:!0});var Ze=l(N);C=r(Ze,"H1",{style:!0});var et=l(C);de=s(et,"Creating Entities"),et.forEach(t),Ze.forEach(t),he=h(c),y=r(c,"P",{});var m=l(y);ye=s(m,"To create or retrieve an entity, you can call the "),x=r(m,"CODE",{});var tt=l(x);fe=s(tt,"factory"),tt.forEach(t),ue=s(m,`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),R=r(m,"CODE",{});var nt=l(R);ge=s(nt,"factorySync"),nt.forEach(t),pe=s(m,` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),W=r(m,"CODE",{});var at=l(W);me=s(at,"entity.guid == null"),at.forEach(t),ve=s(m,")."),m.forEach(t),Ee=h(c),ne(E.$$.fragment,c),we=h(c),A=r(c,"P",{});var st=l(A);_e=s(st,`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),st.forEach(t),$e=h(c),ne(w.$$.fragment,c),be=h(c),B=r(c,"P",{});var it=l(B);ke=s(it,`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),it.forEach(t),Ie=h(c),_=r(c,"DIV",{});var Q=l(_);g=r(Q,"DIV",{style:!0});var J=l(g);Te=s(J,"Saving a Referenced Entity the "),G=r(J,"STRONG",{});var ot=l(G);De=s(ot,"Right"),ot.forEach(t),Pe=s(J," Way"),J.forEach(t),Ne=h(Q),ne($.$$.fragment,Q),Q.forEach(t),Ce=h(c),b=r(c,"DIV",{});var L=l(b);p=r(L,"DIV",{style:!0});var X=l(p);Se=s(X,"Saving a Referenced Entity the "),q=r(X,"STRONG",{});var rt=l(q);Oe=s(rt,"Wrong"),rt.forEach(t),je=s(X," Way"),X.forEach(t),xe=h(L),ne(k.$$.fragment,L),L.forEach(t),Re=h(c),U=r(c,"P",{});var lt=l(U);We=s(lt,`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),lt.forEach(t),Ae=h(c),f=r(c,"P",{});var S=l(f);Be=s(S,`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB synchronously. You can
    call `),H=r(S,"CODE",{});var ct=l(H);Ge=s(ct,"$clearCache"),ct.forEach(t),qe=s(S," in Node.js or "),Y=r(S,"CODE",{});var dt=l(Y);Ue=s(dt,"$refresh"),dt.forEach(t),He=s(S,` in the client
    to turn all the entities back into sleeping references.`),S.forEach(t),Ye=h(c),z=r(c,"P",{});var ht=l(z);ze=s(ht,`Keep in mind that because Nymph is making a synchronous database call when
    you access a referenced entity's data, you may get thrown errors. You should
    surround access to data like this in a try/catch block.`),ht.forEach(t),Ve=h(c),I=r(c,"P",{});var Z=l(I);Fe=s(Z,"In the client, the "),V=r(Z,"CODE",{});var yt=l(V);Ke=s(yt,"$readyAll"),yt.forEach(t),Me=s(Z,` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),Z.forEach(t),c.forEach(t),K=h(i),u=r(i,"SECTION",{class:!0});var ee=l(u);T=r(ee,"A",{href:!0,class:!0});var ft=l(T);Qe=s(ft,"Previous: Introduction"),ft.forEach(t),Je=h(ee),D=r(ee,"A",{href:!0,class:!0});var ut=l(D);Le=s(ut,"Next: Entity Querying"),ut.forEach(t),ee.forEach(t),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",v.a=j,Xe(C,"font-size","3em"),O(N,"class","major"),Xe(g,"text-align","end"),Xe(p,"text-align","end"),O(T,"href",pt+"/user-guide/introduction"),O(T,"class","button"),O(D,"href",pt+"/user-guide/entity-querying"),O(D,"class","button"),O(u,"class","page-steps")},m(i,P){v.m(It,document.head),e(document.head,j),ae(i,F,P),ae(i,n,P),e(n,N),e(N,C),e(C,de),e(n,he),e(n,y),e(y,ye),e(y,x),e(x,fe),e(y,ue),e(y,R),e(R,ge),e(y,pe),e(y,W),e(W,me),e(y,ve),e(n,Ee),se(E,n,null),e(n,we),e(n,A),e(A,_e),e(n,$e),se(w,n,null),e(n,be),e(n,B),e(B,ke),e(n,Ie),e(n,_),e(_,g),e(g,Te),e(g,G),e(G,De),e(g,Pe),e(_,Ne),se($,_,null),e(n,Ce),e(n,b),e(b,p),e(p,Se),e(p,q),e(q,Oe),e(p,je),e(b,xe),se(k,b,null),e(n,Re),e(n,U),e(U,We),e(n,Ae),e(n,f),e(f,Be),e(f,H),e(H,Ge),e(f,qe),e(f,Y),e(Y,Ue),e(f,He),e(n,Ye),e(n,z),e(z,ze),e(n,Ve),e(n,I),e(I,Fe),e(I,V),e(V,Ke),e(I,Me),ae(i,K,P),ae(i,u,P),e(u,T),e(T,Qe),e(u,Je),e(u,D),e(D,Le),M=!0},p:kt,i(i){M||(ie(E.$$.fragment,i),ie(w.$$.fragment,i),ie($.$$.fragment,i),ie(k.$$.fragment,i),M=!0)},o(i){oe(E.$$.fragment,i),oe(w.$$.fragment,i),oe($.$$.fragment,i),oe(k.$$.fragment,i),M=!1},d(i){t(j),i&&v.d(),i&&t(F),i&&t(n),re(E),re(w),re($),re(k),i&&t(K),i&&t(u)}}}class St extends vt{constructor(v){super(),Et(this,v,null,Tt,wt,{})}}export{St as component};
