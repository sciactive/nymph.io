import{S as _t,i as wt,s as $t,R as bt,e as mt,a as d,k as n,q as a,y as se,F as It,T as Dt,h as t,c as h,l as s,m as i,r as o,z as ie,p as W,n as _,C as e,b as oe,A as re,D as Tt,g as le,d as ce,B as de}from"../chunks/index.2f30a1c2.js";import{H as he,g as Pt}from"../chunks/github.8af4b809.js";import{t as fe}from"../chunks/typescript.7dd1ec19.js";import{b as vt}from"../chunks/paths.b3a4b0de.js";function kt(Et){let w,A,J,r,S,O,ye,ue,f,ge,B,pe,me,G,ve,Ee,q,_e,we,$e,$,be,U,Ie,De,b,Te,V,Pe,ke,I,u,Ce,H,Ne,Se,Oe,D,xe,T,g,je,z,Re,We,Ae,P,Be,Y,Ge,qe,y,Ue,F,Ve,He,M,ze,Ye,Fe,k,Me,Q,Qe,Je,K,x,p,j,m,Ke,Le,C,v,Xe,L;return $=new he({props:{language:fe,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),b=new he({props:{language:fe,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost.class },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),D=new he({props:{language:fe,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),P=new he({props:{language:fe,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){w=new bt(!1),A=mt(),J=d(),r=n("section"),S=n("header"),O=n("h1"),ye=a("Creating Entities"),ue=d(),f=n("p"),ge=a("To create or retrieve an entity, you can call the "),B=n("code"),pe=a("factory"),me=a(`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),G=n("code"),ve=a("factorySync"),Ee=a(` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),q=n("code"),_e=a("entity.guid == null"),we=a(")."),$e=d(),se($.$$.fragment),be=d(),U=n("p"),Ie=a(`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),De=d(),se(b.$$.fragment),Te=d(),V=n("p"),Pe=a(`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),ke=d(),I=n("div"),u=n("div"),Ce=a("Saving a Referenced Entity the "),H=n("strong"),Ne=a("Right"),Se=a(" Way"),Oe=d(),se(D.$$.fragment),xe=d(),T=n("div"),g=n("div"),je=a("Saving a Referenced Entity the "),z=n("strong"),Re=a("Wrong"),We=a(" Way"),Ae=d(),se(P.$$.fragment),Be=d(),Y=n("p"),Ge=a(`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),qe=d(),y=n("p"),Ue=a(`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),F=n("code"),Ve=a("$clearCache"),He=a(" in Node.js or "),M=n("code"),ze=a("$refresh"),Ye=a(` in the client to
    turn all the entities back into sleeping references.`),Fe=d(),k=n("p"),Me=a("In the client, the "),Q=n("code"),Qe=a("$readyAll"),Je=a(` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),K=d(),x=n("section"),p=n("div"),j=n("div"),m=n("a"),Ke=a("Previous: Introduction"),Le=d(),C=n("div"),v=n("a"),Xe=a("Next: Entity Querying"),this.h()},l(l){const N=It("svelte-1eabkgd",document.head);w=Dt(N,!1),A=mt(),N.forEach(t),J=h(l),r=s(l,"SECTION",{});var c=i(r);S=s(c,"HEADER",{class:!0});var Ze=i(S);O=s(Ze,"H1",{style:!0});var et=i(O);ye=o(et,"Creating Entities"),et.forEach(t),Ze.forEach(t),ue=h(c),f=s(c,"P",{});var E=i(f);ge=o(E,"To create or retrieve an entity, you can call the "),B=s(E,"CODE",{});var tt=i(B);pe=o(tt,"factory"),tt.forEach(t),me=o(E,`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),G=s(E,"CODE",{});var nt=i(G);ve=o(nt,"factorySync"),nt.forEach(t),Ee=o(E,` method if you need to create a new entity
    synchronously. The benefit of using the factory method is that it can return
    the correct type in TypeScript. To check that an entity hasn't been saved
    yet, check that the GUID is null (`),q=s(E,"CODE",{});var at=i(q);_e=o(at,"entity.guid == null"),at.forEach(t),we=o(E,")."),E.forEach(t),$e=h(c),ie($.$$.fragment,c),be=h(c),U=s(c,"P",{});var st=i(U);Ie=o(st,`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),st.forEach(t),De=h(c),ie(b.$$.fragment,c),Te=h(c),V=s(c,"P",{});var it=i(V);Pe=o(it,`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),it.forEach(t),ke=h(c),I=s(c,"DIV",{});var X=i(I);u=s(X,"DIV",{style:!0});var Z=i(u);Ce=o(Z,"Saving a Referenced Entity the "),H=s(Z,"STRONG",{});var ot=i(H);Ne=o(ot,"Right"),ot.forEach(t),Se=o(Z," Way"),Z.forEach(t),Oe=h(X),ie(D.$$.fragment,X),X.forEach(t),xe=h(c),T=s(c,"DIV",{});var ee=i(T);g=s(ee,"DIV",{style:!0});var te=i(g);je=o(te,"Saving a Referenced Entity the "),z=s(te,"STRONG",{});var rt=i(z);Re=o(rt,"Wrong"),rt.forEach(t),We=o(te," Way"),te.forEach(t),Ae=h(ee),ie(P.$$.fragment,ee),ee.forEach(t),Be=h(c),Y=s(c,"P",{});var lt=i(Y);Ge=o(lt,`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),lt.forEach(t),qe=h(c),y=s(c,"P",{});var R=i(y);Ue=o(R,`When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". When you first access an entity's data (in Node.js), if it is a
    sleeping reference, it will fill its data from the DB. You can call
    `),F=s(R,"CODE",{});var ct=i(F);Ve=o(ct,"$clearCache"),ct.forEach(t),He=o(R," in Node.js or "),M=s(R,"CODE",{});var dt=i(M);ze=o(dt,"$refresh"),dt.forEach(t),Ye=o(R,` in the client to
    turn all the entities back into sleeping references.`),R.forEach(t),Fe=h(c),k=s(c,"P",{});var ne=i(k);Me=o(ne,"In the client, the "),Q=s(ne,"CODE",{});var ht=i(Q);Qe=o(ht,"$readyAll"),ht.forEach(t),Je=o(ne,` method can be used to awaken all sleeping
    references in the entity's data. This is the most convenient way to do this,
    since, unlike in Node.js, the sleeping reference can't just be loaded when it
    is first accessed.`),ne.forEach(t),c.forEach(t),K=h(l),x=s(l,"SECTION",{});var ft=i(x);p=s(ft,"DIV",{class:!0});var ae=i(p);j=s(ae,"DIV",{class:!0});var yt=i(j);m=s(yt,"A",{href:!0,class:!0,style:!0});var ut=i(m);Ke=o(ut,"Previous: Introduction"),ut.forEach(t),yt.forEach(t),Le=h(ae),C=s(ae,"DIV",{class:!0,style:!0});var gt=i(C);v=s(gt,"A",{href:!0,class:!0,style:!0});var pt=i(v);Xe=o(pt,"Next: Entity Querying"),pt.forEach(t),gt.forEach(t),ae.forEach(t),ft.forEach(t),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",w.a=A,W(O,"font-size","3em"),_(S,"class","major"),W(u,"text-align","end"),W(g,"text-align","end"),_(m,"href",vt+"/user-guide/introduction"),_(m,"class","button"),W(m,"margin",".5em"),_(j,"class","col-6 col-12-small"),_(v,"href",vt+"/user-guide/entity-querying"),_(v,"class","button"),W(v,"margin",".5em"),_(C,"class","col-6 col-12-small"),W(C,"text-align","end"),_(p,"class","row")},m(l,N){w.m(Pt,document.head),e(document.head,A),oe(l,J,N),oe(l,r,N),e(r,S),e(S,O),e(O,ye),e(r,ue),e(r,f),e(f,ge),e(f,B),e(B,pe),e(f,me),e(f,G),e(G,ve),e(f,Ee),e(f,q),e(q,_e),e(f,we),e(r,$e),re($,r,null),e(r,be),e(r,U),e(U,Ie),e(r,De),re(b,r,null),e(r,Te),e(r,V),e(V,Pe),e(r,ke),e(r,I),e(I,u),e(u,Ce),e(u,H),e(H,Ne),e(u,Se),e(I,Oe),re(D,I,null),e(r,xe),e(r,T),e(T,g),e(g,je),e(g,z),e(z,Re),e(g,We),e(T,Ae),re(P,T,null),e(r,Be),e(r,Y),e(Y,Ge),e(r,qe),e(r,y),e(y,Ue),e(y,F),e(F,Ve),e(y,He),e(y,M),e(M,ze),e(y,Ye),e(r,Fe),e(r,k),e(k,Me),e(k,Q),e(Q,Qe),e(k,Je),oe(l,K,N),oe(l,x,N),e(x,p),e(p,j),e(j,m),e(m,Ke),e(p,Le),e(p,C),e(C,v),e(v,Xe),L=!0},p:Tt,i(l){L||(le($.$$.fragment,l),le(b.$$.fragment,l),le(D.$$.fragment,l),le(P.$$.fragment,l),L=!0)},o(l){ce($.$$.fragment,l),ce(b.$$.fragment,l),ce(D.$$.fragment,l),ce(P.$$.fragment,l),L=!1},d(l){t(A),l&&w.d(),l&&t(J),l&&t(r),de($),de(b),de(D),de(P),l&&t(K),l&&t(x)}}}class xt extends _t{constructor(w){super(),wt(this,w,null,kt,$t,{})}}export{xt as default};
