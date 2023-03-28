import{S as lt,i as ht,s as ct,a as c,k as i,q as a,F as dt,h as t,c as d,l as r,m as o,r as s,p as rt,n as y,b as z,C as e,D as Oe}from"../chunks/index.2f30a1c2.js";import{b as pt}from"../chunks/paths.bf9fd3ad.js";function yt(ot){let _,n,I,P,F,K,j,Q,V,D,S,Z,ee,h,te,T,ne,ae,U,se,ie,f,re,oe,k,le,he,x,ce,de,pe,C,ye,ue,H,me,fe,q,ge,ve,v,be,G,we,Ee,Ne,O,_e,Ie,R,Pe,De,A,W,Ae,je,b,Se,w,Te,Ue,ke,E,xe,N,Ce,He,J,m,Y,qe,g,Ge;return{c(){_=c(),n=i("section"),I=i("header"),P=i("h1"),F=a("Introduction"),K=c(),j=i("p"),Q=a(`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server. It used to be a PHP
    library and was migrated to Node.js in 2021.`),V=c(),D=i("header"),S=i("h2"),Z=a("Understanding Nymph Applications"),ee=c(),h=i("p"),te=a("Data in Nymph is stored and manipulated in objects called "),T=i("strong"),ne=a("entities"),ae=a(`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),U=i("code"),se=a("$save"),ie=a(`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),f=i("a"),re=a("Joi"),oe=a(`
    is a good one. You can do this in the
    `),k=i("code"),le=a("$save"),he=a(`
    method on your entities before calling
    `),x=i("code"),ce=a("return await super.$save();"),de=a(`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strictly typed data checks in production.`),pe=c(),C=i("p"),ye=a(`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),ue=c(),H=i("p"),me=a(`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),fe=c(),q=i("p"),ge=a(`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this property is accessed after the top
    level entity is pulled from the DB, Nymph will retrieve the referenced
    entity using the saved class.`),ve=c(),v=i("p"),be=a(`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. In Node.js, this
    happens automatically when the data is accessed. In the client, this happens
    when you use the `),G=i("code"),we=a("$ready"),Ee=a(" method."),Ne=c(),O=i("p"),_e=a(`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),Ie=c(),R=i("p"),Pe=a(`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),De=c(),A=i("header"),W=i("h2"),Ae=a("API Docs"),je=c(),b=i("p"),Se=a("If you want to really dive deep into Nymph, you can also browse the "),w=i("a"),Te=a("API docs"),Ue=a(", which covers every part of Nymph's API."),ke=c(),E=i("p"),xe=a(`If you need help with the old version of Nymph that ran on PHP, you can
    browse the `),N=i("a"),Ce=a("Legacy API docs"),He=a("."),J=c(),m=i("section"),Y=i("span"),qe=c(),g=i("a"),Ge=a("Next: Creating Entities"),this.h()},l(p){dt("svelte-6cxoo7",document.head).forEach(t),_=d(p),n=r(p,"SECTION",{});var l=o(n);I=r(l,"HEADER",{class:!0});var Re=o(I);P=r(Re,"H1",{style:!0});var We=o(P);F=s(We,"Introduction"),We.forEach(t),Re.forEach(t),K=d(l),j=r(l,"P",{});var $e=o(j);Q=s($e,`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server. It used to be a PHP
    library and was migrated to Node.js in 2021.`),$e.forEach(t),V=d(l),D=r(l,"HEADER",{class:!0});var Je=o(D);S=r(Je,"H2",{});var Ye=o(S);Z=s(Ye,"Understanding Nymph Applications"),Ye.forEach(t),Je.forEach(t),ee=d(l),h=r(l,"P",{});var u=o(h);te=s(u,"Data in Nymph is stored and manipulated in objects called "),T=r(u,"STRONG",{});var Be=o(T);ne=s(Be,"entities"),Be.forEach(t),ae=s(u,`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),U=r(u,"CODE",{});var Le=o(U);se=s(Le,"$save"),Le.forEach(t),ie=s(u,`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),f=r(u,"A",{href:!0,target:!0,rel:!0});var Me=o(f);re=s(Me,"Joi"),Me.forEach(t),oe=s(u,`
    is a good one. You can do this in the
    `),k=r(u,"CODE",{});var Xe=o(k);le=s(Xe,"$save"),Xe.forEach(t),he=s(u,`
    method on your entities before calling
    `),x=r(u,"CODE",{});var ze=o(x);ce=s(ze,"return await super.$save();"),ze.forEach(t),de=s(u,`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strictly typed data checks in production.`),u.forEach(t),pe=d(l),C=r(l,"P",{});var Fe=o(C);ye=s(Fe,`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),Fe.forEach(t),ue=d(l),H=r(l,"P",{});var Ke=o(H);me=s(Ke,`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),Ke.forEach(t),fe=d(l),q=r(l,"P",{});var Qe=o(q);ge=s(Qe,`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this property is accessed after the top
    level entity is pulled from the DB, Nymph will retrieve the referenced
    entity using the saved class.`),Qe.forEach(t),ve=d(l),v=r(l,"P",{});var B=o(v);be=s(B,`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. In Node.js, this
    happens automatically when the data is accessed. In the client, this happens
    when you use the `),G=r(B,"CODE",{});var Ve=o(G);we=s(Ve,"$ready"),Ve.forEach(t),Ee=s(B," method."),B.forEach(t),Ne=d(l),O=r(l,"P",{});var Ze=o(O);_e=s(Ze,`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),Ze.forEach(t),Ie=d(l),R=r(l,"P",{});var et=o(R);Pe=s(et,`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),et.forEach(t),De=d(l),A=r(l,"HEADER",{class:!0});var tt=o(A);W=r(tt,"H2",{});var nt=o(W);Ae=s(nt,"API Docs"),nt.forEach(t),tt.forEach(t),je=d(l),b=r(l,"P",{});var L=o(b);Se=s(L,"If you want to really dive deep into Nymph, you can also browse the "),w=r(L,"A",{href:!0,rel:!0});var at=o(w);Te=s(at,"API docs"),at.forEach(t),Ue=s(L,", which covers every part of Nymph's API."),L.forEach(t),ke=d(l),E=r(l,"P",{});var M=o(E);xe=s(M,`If you need help with the old version of Nymph that ran on PHP, you can
    browse the `),N=r(M,"A",{href:!0,rel:!0});var st=o(N);Ce=s(st,"Legacy API docs"),st.forEach(t),He=s(M,"."),M.forEach(t),l.forEach(t),J=d(p),m=r(p,"SECTION",{class:!0});var X=o(m);Y=r(X,"SPAN",{}),o(Y).forEach(t),qe=d(X),g=r(X,"A",{href:!0,class:!0,style:!0});var it=o(g);Ge=s(it,"Next: Creating Entities"),it.forEach(t),X.forEach(t),this.h()},h(){document.title="Introduction - User Guide - Nymph.js",rt(P,"font-size","3em"),y(I,"class","major"),y(D,"class","major"),y(f,"href","https://joi.dev/"),y(f,"target","_blank"),y(f,"rel","noreferrer"),y(A,"class","major"),y(w,"href","/api/latest/"),y(w,"rel","external"),y(N,"href","/api/legacy/3.0.0/"),y(N,"rel","external"),y(g,"href",pt+"/user-guide/creating-entities"),y(g,"class","button"),rt(g,"margin",".5em"),y(m,"class","page-steps")},m(p,$){z(p,_,$),z(p,n,$),e(n,I),e(I,P),e(P,F),e(n,K),e(n,j),e(j,Q),e(n,V),e(n,D),e(D,S),e(S,Z),e(n,ee),e(n,h),e(h,te),e(h,T),e(T,ne),e(h,ae),e(h,U),e(U,se),e(h,ie),e(h,f),e(f,re),e(h,oe),e(h,k),e(k,le),e(h,he),e(h,x),e(x,ce),e(h,de),e(n,pe),e(n,C),e(C,ye),e(n,ue),e(n,H),e(H,me),e(n,fe),e(n,q),e(q,ge),e(n,ve),e(n,v),e(v,be),e(v,G),e(G,we),e(v,Ee),e(n,Ne),e(n,O),e(O,_e),e(n,Ie),e(n,R),e(R,Pe),e(n,De),e(n,A),e(A,W),e(W,Ae),e(n,je),e(n,b),e(b,Se),e(b,w),e(w,Te),e(b,Ue),e(n,ke),e(n,E),e(E,xe),e(E,N),e(N,Ce),e(E,He),z(p,J,$),z(p,m,$),e(m,Y),e(m,qe),e(m,g),e(g,Ge)},p:Oe,i:Oe,o:Oe,d(p){p&&t(_),p&&t(n),p&&t(J),p&&t(m)}}}class ft extends lt{constructor(_){super(),ht(this,_,null,yt,ct,{})}}export{ft as default};
