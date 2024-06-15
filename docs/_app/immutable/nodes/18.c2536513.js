import{S as ht,i as dt,s as yt,R as ft,e as rt,a as h,k as i,q as n,y as X,F as ut,T as gt,h as t,c as d,l as r,m as l,r as a,z as Z,p as Ve,n as N,C as e,b as ee,A as te,D as pt,g as ne,d as ae,B as se}from"../chunks/index.d7cc8d8b.js";import{H as oe,g as mt}from"../chunks/github.df9008b1.js";import{t as ie}from"../chunks/typescript.7dd1ec19.js";import{b as lt}from"../chunks/paths.d307dac8.js";function vt(ct){let E,O,z,o,P,S,re,le,y,ce,A,he,de,x,ye,fe,R,ue,ge,pe,$,me,B,ve,Ee,w,$e,G,we,_e,_,g,be,W,ke,Ie,Te,b,De,k,p,Ce,q,Pe,Se,Ne,I,Oe,U,Ae,xe,f,Re,H,Be,Ge,Y,We,qe,j,Ue,He,V,u,T,Ye,je,D,ze,F;return $=new oe({props:{language:ie,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`}}),w=new oe({props:{language:ie,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`}}),b=new oe({props:{language:ie,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}}),I=new oe({props:{language:ie,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}}),{c(){E=new ft(!1),O=rt(),z=h(),o=i("section"),P=i("header"),S=i("h1"),re=n("Creating Entities"),le=h(),y=i("p"),ce=n("To create or retrieve an entity, you can call the "),A=i("code"),he=n("factory"),de=n(`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),x=i("code"),ye=n("factorySync"),fe=n(` method if you need to create a new entity
    synchronously. The benefit of using the factory methods is that they can
    return the correct type in TypeScript. To check that an entity hasn't been
    saved yet, check that the GUID is null (`),R=i("code"),ue=n("entity.guid == null"),ge=n(")."),pe=h(),X($.$$.fragment),me=h(),B=i("p"),ve=n(`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),Ee=h(),X(w.$$.fragment),$e=h(),G=i("p"),we=n(`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),_e=h(),_=i("div"),g=i("div"),be=n("Saving a Referenced Entity the "),W=i("strong"),ke=n("Right"),Ie=n(" Way"),Te=h(),X(b.$$.fragment),De=h(),k=i("div"),p=i("div"),Ce=n("Saving a Referenced Entity the "),q=i("strong"),Pe=n("Wrong"),Se=n(" Way"),Ne=h(),X(I.$$.fragment),Oe=h(),U=i("p"),Ae=n(`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),xe=h(),f=i("p"),Re=n('When an entity is loaded, it does not request its referenced entities from\n    Nymph. Instead, it creates instances without data called "sleeping\n    references". You can use `$wake` on the entity or `$wakeAll` on the parent\n    entity to get the entity\'s data from the DB. The '),H=i("code"),Be=n("$wakeAll"),Ge=n(`
    method will awaken all sleeping references in the entity's data. You can call
    `),Y=i("code"),We=n("$clearCache"),qe=n(`
    in Node.js or `),j=i("code"),Ue=n("$refresh"),He=n(` in the client to turn all the entities back
    into sleeping references.`),V=h(),u=i("section"),T=i("a"),Ye=n("Previous: Introduction"),je=h(),D=i("a"),ze=n("Next: Entity Querying"),this.h()},l(s){const C=ut("svelte-1eabkgd",document.head);E=gt(C,!1),O=rt(),C.forEach(t),z=d(s),o=r(s,"SECTION",{});var c=l(o);P=r(c,"HEADER",{class:!0});var Fe=l(P);S=r(Fe,"H1",{style:!0});var Me=l(S);re=a(Me,"Creating Entities"),Me.forEach(t),Fe.forEach(t),le=d(c),y=r(c,"P",{});var m=l(y);ce=a(m,"To create or retrieve an entity, you can call the "),A=r(m,"CODE",{});var Qe=l(A);he=a(Qe,"factory"),Qe.forEach(t),de=a(m,`
    static method of an entity's class and pass in an optional GUID. You can also
    use the `),x=r(m,"CODE",{});var Je=l(x);ye=a(Je,"factorySync"),Je.forEach(t),fe=a(m,` method if you need to create a new entity
    synchronously. The benefit of using the factory methods is that they can
    return the correct type in TypeScript. To check that an entity hasn't been
    saved yet, check that the GUID is null (`),R=r(m,"CODE",{});var Ke=l(R);ue=a(Ke,"entity.guid == null"),Ke.forEach(t),ge=a(m,")."),m.forEach(t),pe=d(c),Z($.$$.fragment,c),me=d(c),B=r(c,"P",{});var Le=l(B);ve=a(Le,`Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.`),Le.forEach(t),Ee=d(c),Z(w.$$.fragment,c),$e=d(c),G=r(c,"P",{});var Xe=l(G);we=a(Xe,`Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.`),Xe.forEach(t),_e=d(c),_=r(c,"DIV",{});var M=l(_);g=r(M,"DIV",{style:!0});var Q=l(g);be=a(Q,"Saving a Referenced Entity the "),W=r(Q,"STRONG",{});var Ze=l(W);ke=a(Ze,"Right"),Ze.forEach(t),Ie=a(Q," Way"),Q.forEach(t),Te=d(M),Z(b.$$.fragment,M),M.forEach(t),De=d(c),k=r(c,"DIV",{});var J=l(k);p=r(J,"DIV",{style:!0});var K=l(p);Ce=a(K,"Saving a Referenced Entity the "),q=r(K,"STRONG",{});var et=l(q);Pe=a(et,"Wrong"),et.forEach(t),Se=a(K," Way"),K.forEach(t),Ne=d(J),Z(I.$$.fragment,J),J.forEach(t),Oe=d(c),U=r(c,"P",{});var tt=l(U);Ae=a(tt,`Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.`),tt.forEach(t),xe=d(c),f=r(c,"P",{});var v=l(f);Re=a(v,'When an entity is loaded, it does not request its referenced entities from\n    Nymph. Instead, it creates instances without data called "sleeping\n    references". You can use `$wake` on the entity or `$wakeAll` on the parent\n    entity to get the entity\'s data from the DB. The '),H=r(v,"CODE",{});var nt=l(H);Be=a(nt,"$wakeAll"),nt.forEach(t),Ge=a(v,`
    method will awaken all sleeping references in the entity's data. You can call
    `),Y=r(v,"CODE",{});var at=l(Y);We=a(at,"$clearCache"),at.forEach(t),qe=a(v,`
    in Node.js or `),j=r(v,"CODE",{});var st=l(j);Ue=a(st,"$refresh"),st.forEach(t),He=a(v,` in the client to turn all the entities back
    into sleeping references.`),v.forEach(t),c.forEach(t),V=d(s),u=r(s,"SECTION",{class:!0});var L=l(u);T=r(L,"A",{href:!0,class:!0});var ot=l(T);Ye=a(ot,"Previous: Introduction"),ot.forEach(t),je=d(L),D=r(L,"A",{href:!0,class:!0});var it=l(D);ze=a(it,"Next: Entity Querying"),it.forEach(t),L.forEach(t),this.h()},h(){document.title="Creating Entities - User Guide - Nymph.js",E.a=O,Ve(S,"font-size","3em"),N(P,"class","major"),Ve(g,"text-align","end"),Ve(p,"text-align","end"),N(T,"href",lt+"/user-guide/introduction"),N(T,"class","button"),N(D,"href",lt+"/user-guide/entity-querying"),N(D,"class","button"),N(u,"class","page-steps")},m(s,C){E.m(mt,document.head),e(document.head,O),ee(s,z,C),ee(s,o,C),e(o,P),e(P,S),e(S,re),e(o,le),e(o,y),e(y,ce),e(y,A),e(A,he),e(y,de),e(y,x),e(x,ye),e(y,fe),e(y,R),e(R,ue),e(y,ge),e(o,pe),te($,o,null),e(o,me),e(o,B),e(B,ve),e(o,Ee),te(w,o,null),e(o,$e),e(o,G),e(G,we),e(o,_e),e(o,_),e(_,g),e(g,be),e(g,W),e(W,ke),e(g,Ie),e(_,Te),te(b,_,null),e(o,De),e(o,k),e(k,p),e(p,Ce),e(p,q),e(q,Pe),e(p,Se),e(k,Ne),te(I,k,null),e(o,Oe),e(o,U),e(U,Ae),e(o,xe),e(o,f),e(f,Re),e(f,H),e(H,Be),e(f,Ge),e(f,Y),e(Y,We),e(f,qe),e(f,j),e(j,Ue),e(f,He),ee(s,V,C),ee(s,u,C),e(u,T),e(T,Ye),e(u,je),e(u,D),e(D,ze),F=!0},p:pt,i(s){F||(ne($.$$.fragment,s),ne(w.$$.fragment,s),ne(b.$$.fragment,s),ne(I.$$.fragment,s),F=!0)},o(s){ae($.$$.fragment,s),ae(w.$$.fragment,s),ae(b.$$.fragment,s),ae(I.$$.fragment,s),F=!1},d(s){t(O),s&&E.d(),s&&t(z),s&&t(o),se($),se(w),se(b),se(I),s&&t(V),s&&t(u)}}}class bt extends ht{constructor(E){super(),dt(this,E,null,vt,yt,{})}}export{bt as component};
