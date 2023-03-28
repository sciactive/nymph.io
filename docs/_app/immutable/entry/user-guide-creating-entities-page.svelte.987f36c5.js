import{S as ut,i as gt,s as pt,R as mt,e as ht,a as d,k as o,q as n,y as ee,F as vt,T as Et,h as t,c as h,l as r,m as l,r as a,z as te,p as Je,n as O,C as e,b as ne,A as ae,D as wt,g as se,d as ie,B as oe}from"../chunks/index.2f30a1c2.js";import{H as re,g as _t}from"../chunks/github.8af4b809.js";import{t as le}from"../chunks/typescript.7dd1ec19.js";import{b as ft}from"../chunks/paths.bf9fd3ad.js";function $t(yt){let v,j,Y,s,C,N,ce,de,f,he,x,fe,ye,R,ue,ge,W,pe,me,ve,E,Ee,A,we,_e,w,$e,B,be,Ie,_,g,Te,G,De,Pe,ke,$,Ce,b,p,Ne,q,Se,Oe,je,I,xe,U,Re,We,y,Ae,H,Be,Ge,z,qe,Ue,He,T,ze,V,Ve,Ye,F,u,D,Fe,Me,P,Qe,M;return E=new re({props:{language:le,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),w=new re({props:{language:le,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),$=new re({props:{language:le,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),I=new re({props:{language:le,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){v=new mt(!1),j=ht(),Y=d(),s=o("section"),C=o("header"),N=o("h1"),ce=n("Creating Entities"),de=d(),f=o("p"),he=n("To create or retrieve an entity, you can call the "),x=o("code"),fe=n("factory"),ye=n(`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),R=o("code"),ue=n("factorySync"),ge=n(` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),W=o("code"),pe=n("entity.guid == null"),me=n(")."),ve=d(),ee(E.$$.fragment),Ee=d(),A=o("p"),we=n(`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),_e=d(),ee(w.$$.fragment),$e=d(),B=o("p"),be=n(`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),Ie=d(),_=o("div"),g=o("div"),Te=n("Saving a Referenced Entity the "),G=o("strong"),De=n("Right"),Pe=n(" Way"),ke=d(),ee($.$$.fragment),Ce=d(),b=o("div"),p=o("div"),Ne=n("Saving a Referenced Entity the "),q=o("strong"),Se=n("Wrong"),Oe=n(" Way"),je=d(),ee(I.$$.fragment),xe=d(),U=o("p"),Re=n(`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),We=d(),y=o("p"),Ae=n(`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),H=o("code"),Be=n("$clearCache"),Ge=n(" in Node.js or "),z=o("code"),qe=n("$refresh"),Ue=n(` in the client to
    turn all the entities back into sleeping references.`),He=d(),T=o("p"),ze=n("In the client, the "),V=o("code"),Ve=n("$readyAll"),Ye=n(` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),F=d(),u=o("section"),D=o("a"),Fe=n("Previous: Introduction"),Me=d(),P=o("a"),Qe=n("Next: Entity Querying"),this.h()},l(i){const k=vt("svelte-1eabkgd",document.head);v=Et(k,!1),j=ht(),k.forEach(t),Y=h(i),s=r(i,"SECTION",{});var c=l(s);C=r(c,"HEADER",{class:!0});var Ke=l(C);N=r(Ke,"H1",{style:!0});var Le=l(N);ce=a(Le,"Creating Entities"),Le.forEach(t),Ke.forEach(t),de=h(c),f=r(c,"P",{});var m=l(f);he=a(m,"To create or retrieve an entity, you can call the "),x=r(m,"CODE",{});var Xe=l(x);fe=a(Xe,"factory"),Xe.forEach(t),ye=a(m,`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),R=r(m,"CODE",{});var Ze=l(R);ue=a(Ze,"factorySync"),Ze.forEach(t),ge=a(m,` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),W=r(m,"CODE",{});var et=l(W);pe=a(et,"entity.guid == null"),et.forEach(t),me=a(m,")."),m.forEach(t),ve=h(c),te(E.$$.fragment,c),Ee=h(c),A=r(c,"P",{});var tt=l(A);we=a(tt,`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),tt.forEach(t),_e=h(c),te(w.$$.fragment,c),$e=h(c),B=r(c,"P",{});var nt=l(B);be=a(nt,`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),nt.forEach(t),Ie=h(c),_=r(c,"DIV",{});var Q=l(_);g=r(Q,"DIV",{style:!0});var J=l(g);Te=a(J,"Saving a Referenced Entity the "),G=r(J,"STRONG",{});var at=l(G);De=a(at,"Right"),at.forEach(t),Pe=a(J," Way"),J.forEach(t),ke=h(Q),te($.$$.fragment,Q),Q.forEach(t),Ce=h(c),b=r(c,"DIV",{});var K=l(b);p=r(K,"DIV",{style:!0});var L=l(p);Ne=a(L,"Saving a Referenced Entity the "),q=r(L,"STRONG",{});var st=l(q);Se=a(st,"Wrong"),st.forEach(t),Oe=a(L," Way"),L.forEach(t),je=h(K),te(I.$$.fragment,K),K.forEach(t),xe=h(c),U=r(c,"P",{});var it=l(U);Re=a(it,`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),it.forEach(t),We=h(c),y=r(c,"P",{});var S=l(y);Ae=a(S,`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),H=r(S,"CODE",{});var ot=l(H);Be=a(ot,"$clearCache"),ot.forEach(t),Ge=a(S," in Node.js or "),z=r(S,"CODE",{});var rt=l(z);qe=a(rt,"$refresh"),rt.forEach(t),Ue=a(S,` in the client to
    turn all the entities back into sleeping references.`),S.forEach(t),He=h(c),T=r(c,"P",{});var X=l(T);ze=a(X,"In the client, the "),V=r(X,"CODE",{});var lt=l(V);Ve=a(lt,"$readyAll"),lt.forEach(t),Ye=a(X,` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),X.forEach(t),c.forEach(t),F=h(i),u=r(i,"SECTION",{class:!0});var Z=l(u);D=r(Z,"A",{href:!0,class:!0});var ct=l(D);Fe=a(ct,"Previous: Introduction"),ct.forEach(t),Me=h(Z),P=r(Z,"A",{href:!0,class:!0});var dt=l(P);Qe=a(dt,"Next: Entity Querying"),dt.forEach(t),Z.forEach(t),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",v.a=j,Je(N,"font-size","3em"),O(C,"class","major"),Je(g,"text-align","end"),Je(p,"text-align","end"),O(D,"href",ft+"/user-guide/introduction"),O(D,"class","button"),O(P,"href",ft+"/user-guide/entity-querying"),O(P,"class","button"),O(u,"class","page-steps")},m(i,k){v.m(_t,document.head),e(document.head,j),ne(i,Y,k),ne(i,s,k),e(s,C),e(C,N),e(N,ce),e(s,de),e(s,f),e(f,he),e(f,x),e(x,fe),e(f,ye),e(f,R),e(R,ue),e(f,ge),e(f,W),e(W,pe),e(f,me),e(s,ve),ae(E,s,null),e(s,Ee),e(s,A),e(A,we),e(s,_e),ae(w,s,null),e(s,$e),e(s,B),e(B,be),e(s,Ie),e(s,_),e(_,g),e(g,Te),e(g,G),e(G,De),e(g,Pe),e(_,ke),ae($,_,null),e(s,Ce),e(s,b),e(b,p),e(p,Ne),e(p,q),e(q,Se),e(p,Oe),e(b,je),ae(I,b,null),e(s,xe),e(s,U),e(U,Re),e(s,We),e(s,y),e(y,Ae),e(y,H),e(H,Be),e(y,Ge),e(y,z),e(z,qe),e(y,Ue),e(s,He),e(s,T),e(T,ze),e(T,V),e(V,Ve),e(T,Ye),ne(i,F,k),ne(i,u,k),e(u,D),e(D,Fe),e(u,Me),e(u,P),e(P,Qe),M=!0},p:wt,i(i){M||(se(E.$$.fragment,i),se(w.$$.fragment,i),se($.$$.fragment,i),se(I.$$.fragment,i),M=!0)},o(i){ie(E.$$.fragment,i),ie(w.$$.fragment,i),ie($.$$.fragment,i),ie(I.$$.fragment,i),M=!1},d(i){t(j),i&&v.d(),i&&t(Y),i&&t(s),oe(E),oe(w),oe($),oe(I),i&&t(F),i&&t(u)}}}class Pt extends ut{constructor(v){super(),gt(this,v,null,$t,pt,{})}}export{Pt as default};
