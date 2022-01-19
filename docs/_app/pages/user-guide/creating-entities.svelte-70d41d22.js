import{S as _t,i as wt,s as $t,a2 as se,a3 as ie,a4 as bt,l as vt,k as d,e as n,t as a,w as oe,N as It,a5 as Dt,d as t,m as h,c as s,a as i,h as o,x as re,f as B,b as _,a6 as kt,H as e,g as le,y as ce,I as Tt,q as de,o as he,B as fe}from"../../chunks/vendor-57c99eaa.js";import{b as mt}from"../../chunks/paths-396f020f.js";function Ct(Et){let w,G,J,r,S,j,ye,ue,f,ge,R,pe,ve,q,me,Ee,A,_e,we,$e,$,be,U,Ie,De,b,ke,V,Te,Ce,I,u,Ne,H,Pe,Se,je,D,xe,k,g,Oe,Y,We,Be,Ge,T,Re,z,qe,Ae,y,Ue,M,Ve,He,Q,Ye,ze,Me,C,Qe,F,Fe,Je,K,x,p,O,v,Ke,Le,N,m,Xe,L;return $=new se({props:{language:ie,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),b=new se({props:{language:ie,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),D=new se({props:{language:ie,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),T=new se({props:{language:ie,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){w=new bt,G=vt(),J=d(),r=n("section"),S=n("header"),j=n("h1"),ye=a("Creating Entities"),ue=d(),f=n("p"),ge=a("To create or retrieve an entity, you can call the "),R=n("code"),pe=a("factory"),ve=a(`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),q=n("code"),me=a("factorySync"),Ee=a(` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),A=n("code"),_e=a("entity.guid == null"),we=a(")."),$e=d(),oe($.$$.fragment),be=d(),U=n("p"),Ie=a(`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),De=d(),oe(b.$$.fragment),ke=d(),V=n("p"),Te=a(`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),Ce=d(),I=n("div"),u=n("div"),Ne=a("Saving a Referenced Entity the "),H=n("strong"),Pe=a("Right"),Se=a(" Way"),je=d(),oe(D.$$.fragment),xe=d(),k=n("div"),g=n("div"),Oe=a("Saving a Referenced Entity the "),Y=n("strong"),We=a("Wrong"),Be=a(" Way"),Ge=d(),oe(T.$$.fragment),Re=d(),z=n("p"),qe=a(`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),Ae=d(),y=n("p"),Ue=a(`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),M=n("code"),Ve=a("$clearCache"),He=a(" in Node.js or "),Q=n("code"),Ye=a("$refresh"),ze=a(` in the client to
    turn all the entities back into sleeping references.`),Me=d(),C=n("p"),Qe=a("In the client, the "),F=n("code"),Fe=a("$readyAll"),Je=a(` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),K=d(),x=n("section"),p=n("div"),O=n("div"),v=n("a"),Ke=a("Previous: Introduction"),Le=d(),N=n("div"),m=n("a"),Xe=a("Next: Entity Querying"),this.h()},l(l){const P=It('[data-svelte="svelte-1eabkgd"]',document.head);w=Dt(P),G=vt(),P.forEach(t),J=h(l),r=s(l,"SECTION",{});var c=i(r);S=s(c,"HEADER",{class:!0});var Ze=i(S);j=s(Ze,"H1",{style:!0});var et=i(j);ye=o(et,"Creating Entities"),et.forEach(t),Ze.forEach(t),ue=h(c),f=s(c,"P",{});var E=i(f);ge=o(E,"To create or retrieve an entity, you can call the "),R=s(E,"CODE",{});var tt=i(R);pe=o(tt,"factory"),tt.forEach(t),ve=o(E,`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),q=s(E,"CODE",{});var nt=i(q);me=o(nt,"factorySync"),nt.forEach(t),Ee=o(E,` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),A=s(E,"CODE",{});var at=i(A);_e=o(at,"entity.guid == null"),at.forEach(t),we=o(E,")."),E.forEach(t),$e=h(c),re($.$$.fragment,c),be=h(c),U=s(c,"P",{});var st=i(U);Ie=o(st,`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),st.forEach(t),De=h(c),re(b.$$.fragment,c),ke=h(c),V=s(c,"P",{});var it=i(V);Te=o(it,`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),it.forEach(t),Ce=h(c),I=s(c,"DIV",{});var X=i(I);u=s(X,"DIV",{style:!0});var Z=i(u);Ne=o(Z,"Saving a Referenced Entity the "),H=s(Z,"STRONG",{});var ot=i(H);Pe=o(ot,"Right"),ot.forEach(t),Se=o(Z," Way"),Z.forEach(t),je=h(X),re(D.$$.fragment,X),X.forEach(t),xe=h(c),k=s(c,"DIV",{});var ee=i(k);g=s(ee,"DIV",{style:!0});var te=i(g);Oe=o(te,"Saving a Referenced Entity the "),Y=s(te,"STRONG",{});var rt=i(Y);We=o(rt,"Wrong"),rt.forEach(t),Be=o(te," Way"),te.forEach(t),Ge=h(ee),re(T.$$.fragment,ee),ee.forEach(t),Re=h(c),z=s(c,"P",{});var lt=i(z);qe=o(lt,`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),lt.forEach(t),Ae=h(c),y=s(c,"P",{});var W=i(y);Ue=o(W,`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),M=s(W,"CODE",{});var ct=i(M);Ve=o(ct,"$clearCache"),ct.forEach(t),He=o(W," in Node.js or "),Q=s(W,"CODE",{});var dt=i(Q);Ye=o(dt,"$refresh"),dt.forEach(t),ze=o(W,` in the client to
    turn all the entities back into sleeping references.`),W.forEach(t),Me=h(c),C=s(c,"P",{});var ne=i(C);Qe=o(ne,"In the client, the "),F=s(ne,"CODE",{});var ht=i(F);Fe=o(ht,"$readyAll"),ht.forEach(t),Je=o(ne,` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),ne.forEach(t),c.forEach(t),K=h(l),x=s(l,"SECTION",{});var ft=i(x);p=s(ft,"DIV",{class:!0});var ae=i(p);O=s(ae,"DIV",{class:!0});var yt=i(O);v=s(yt,"A",{href:!0,class:!0,style:!0});var ut=i(v);Ke=o(ut,"Previous: Introduction"),ut.forEach(t),yt.forEach(t),Le=h(ae),N=s(ae,"DIV",{class:!0,style:!0});var gt=i(N);m=s(gt,"A",{href:!0,class:!0,style:!0});var pt=i(m);Xe=o(pt,"Next: Entity Querying"),pt.forEach(t),gt.forEach(t),ae.forEach(t),ft.forEach(t),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",w.a=G,B(j,"font-size","3em"),_(S,"class","major"),B(u,"text-align","end"),B(g,"text-align","end"),_(v,"href",""+(mt+"/user-guide/introduction")),_(v,"class","button"),B(v,"margin",".5em"),_(O,"class","col-6 col-12-small"),_(m,"href",""+(mt+"/user-guide/entity-querying")),_(m,"class","button"),B(m,"margin",".5em"),_(N,"class","col-6 col-12-small"),B(N,"text-align","end"),_(p,"class","row")},m(l,P){w.m(kt,document.head),e(document.head,G),le(l,J,P),le(l,r,P),e(r,S),e(S,j),e(j,ye),e(r,ue),e(r,f),e(f,ge),e(f,R),e(R,pe),e(f,ve),e(f,q),e(q,me),e(f,Ee),e(f,A),e(A,_e),e(f,we),e(r,$e),ce($,r,null),e(r,be),e(r,U),e(U,Ie),e(r,De),ce(b,r,null),e(r,ke),e(r,V),e(V,Te),e(r,Ce),e(r,I),e(I,u),e(u,Ne),e(u,H),e(H,Pe),e(u,Se),e(I,je),ce(D,I,null),e(r,xe),e(r,k),e(k,g),e(g,Oe),e(g,Y),e(Y,We),e(g,Be),e(k,Ge),ce(T,k,null),e(r,Re),e(r,z),e(z,qe),e(r,Ae),e(r,y),e(y,Ue),e(y,M),e(M,Ve),e(y,He),e(y,Q),e(Q,Ye),e(y,ze),e(r,Me),e(r,C),e(C,Qe),e(C,F),e(F,Fe),e(C,Je),le(l,K,P),le(l,x,P),e(x,p),e(p,O),e(O,v),e(v,Ke),e(p,Le),e(p,N),e(N,m),e(m,Xe),L=!0},p:Tt,i(l){L||(de($.$$.fragment,l),de(b.$$.fragment,l),de(D.$$.fragment,l),de(T.$$.fragment,l),L=!0)},o(l){he($.$$.fragment,l),he(b.$$.fragment,l),he(D.$$.fragment,l),he(T.$$.fragment,l),L=!1},d(l){t(G),l&&w.d(),l&&t(J),l&&t(r),fe($),fe(b),fe(D),fe(T),l&&t(K),l&&t(x)}}}class St extends _t{constructor(w){super();wt(this,w,null,Ct,$t,{})}}export{St as default};
