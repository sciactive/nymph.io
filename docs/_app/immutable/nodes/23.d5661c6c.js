import{S as st,i as it,s as rt,a as d,k as i,q as n,F as ot,h as t,c as p,l as r,m as o,r as a,p as nt,n as y,b as z,C as e,D as xe}from"../chunks/index.d7cc8d8b.js";import{b as lt}from"../chunks/paths.d307dac8.js";function ht(at){let E,s,N,_,F,B,P,K,L,I,T,Q,V,h,Z,k,ee,te,S,ne,ae,g,se,ie,j,re,oe,U,le,he,ce,C,de,pe,x,ue,ye,q,me,fe,m,ge,G,ve,be,O,we,Ee,Ne,$,_e,Ie,H,De,Ae,D,R,Pe,Te,b,ke,w,Se,je,J,f,Y,Ue,v,Ce;return{c(){E=d(),s=i("section"),N=i("header"),_=i("h1"),F=n("Introduction"),B=d(),P=i("p"),K=n(`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server.`),L=d(),I=i("header"),T=i("h2"),Q=n("Understanding Nymph Applications"),V=d(),h=i("p"),Z=n("Data in Nymph is stored and manipulated in objects called "),k=i("strong"),ee=n("entities"),te=n(`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),S=i("code"),ne=n("$save"),ae=n(`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),g=i("a"),se=n("Joi"),ie=n(`
    is a good one. You can do this in the
    `),j=i("code"),re=n("$save"),oe=n(`
    method on your entities before calling
    `),U=i("code"),le=n("return await super.$save();"),he=n(`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strict checks in production.`),ce=d(),C=i("p"),de=n(`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),pe=d(),x=i("p"),ue=n(`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),ye=d(),q=i("p"),me=n(`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this referenced entity is awoken, Nymph will
    retrieve it using the saved class.`),fe=d(),m=i("p"),ge=n(`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. This happens when you
    use the `),G=i("code"),ve=n("$wake"),be=n(" method on it, or the "),O=i("code"),we=n("$wakeAll"),Ee=n(` method
    on its parent.`),Ne=d(),$=i("p"),_e=n(`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),Ie=d(),H=i("p"),De=n(`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),Ae=d(),D=i("header"),R=i("h2"),Pe=n("API Docs"),Te=d(),b=i("p"),ke=n("If you want to really dive deep into Nymph, you can also browse the "),w=i("a"),Se=n("API docs"),je=n(", which covers every part of Nymph's API."),J=d(),f=i("section"),Y=i("span"),Ue=d(),v=i("a"),Ce=n("Next: Creating Entities"),this.h()},l(c){ot("svelte-6cxoo7",document.head).forEach(t),E=p(c),s=r(c,"SECTION",{});var l=o(s);N=r(l,"HEADER",{class:!0});var qe=o(N);_=r(qe,"H1",{style:!0});var Ge=o(_);F=a(Ge,"Introduction"),Ge.forEach(t),qe.forEach(t),B=p(l),P=r(l,"P",{});var Oe=o(P);K=a(Oe,`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server.`),Oe.forEach(t),L=p(l),I=r(l,"HEADER",{class:!0});var $e=o(I);T=r($e,"H2",{});var He=o(T);Q=a(He,"Understanding Nymph Applications"),He.forEach(t),$e.forEach(t),V=p(l),h=r(l,"P",{});var u=o(h);Z=a(u,"Data in Nymph is stored and manipulated in objects called "),k=r(u,"STRONG",{});var Re=o(k);ee=a(Re,"entities"),Re.forEach(t),te=a(u,`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),S=r(u,"CODE",{});var We=o(S);ne=a(We,"$save"),We.forEach(t),ae=a(u,`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),g=r(u,"A",{href:!0,target:!0,rel:!0});var Je=o(g);se=a(Je,"Joi"),Je.forEach(t),ie=a(u,`
    is a good one. You can do this in the
    `),j=r(u,"CODE",{});var Ye=o(j);re=a(Ye,"$save"),Ye.forEach(t),oe=a(u,`
    method on your entities before calling
    `),U=r(u,"CODE",{});var Me=o(U);le=a(Me,"return await super.$save();"),Me.forEach(t),he=a(u,`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strict checks in production.`),u.forEach(t),ce=p(l),C=r(l,"P",{});var Xe=o(C);de=a(Xe,`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),Xe.forEach(t),pe=p(l),x=r(l,"P",{});var ze=o(x);ue=a(ze,`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),ze.forEach(t),ye=p(l),q=r(l,"P",{});var Fe=o(q);me=a(Fe,`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this referenced entity is awoken, Nymph will
    retrieve it using the saved class.`),Fe.forEach(t),fe=p(l),m=r(l,"P",{});var A=o(m);ge=a(A,`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. This happens when you
    use the `),G=r(A,"CODE",{});var Be=o(G);ve=a(Be,"$wake"),Be.forEach(t),be=a(A," method on it, or the "),O=r(A,"CODE",{});var Ke=o(O);we=a(Ke,"$wakeAll"),Ke.forEach(t),Ee=a(A,` method
    on its parent.`),A.forEach(t),Ne=p(l),$=r(l,"P",{});var Le=o($);_e=a(Le,`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),Le.forEach(t),Ie=p(l),H=r(l,"P",{});var Qe=o(H);De=a(Qe,`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),Qe.forEach(t),Ae=p(l),D=r(l,"HEADER",{class:!0});var Ve=o(D);R=r(Ve,"H2",{});var Ze=o(R);Pe=a(Ze,"API Docs"),Ze.forEach(t),Ve.forEach(t),Te=p(l),b=r(l,"P",{});var M=o(b);ke=a(M,"If you want to really dive deep into Nymph, you can also browse the "),w=r(M,"A",{href:!0,rel:!0});var et=o(w);Se=a(et,"API docs"),et.forEach(t),je=a(M,", which covers every part of Nymph's API."),M.forEach(t),l.forEach(t),J=p(c),f=r(c,"SECTION",{class:!0});var X=o(f);Y=r(X,"SPAN",{}),o(Y).forEach(t),Ue=p(X),v=r(X,"A",{href:!0,class:!0,style:!0});var tt=o(v);Ce=a(tt,"Next: Creating Entities"),tt.forEach(t),X.forEach(t),this.h()},h(){document.title="Introduction - User Guide - Nymph.js",nt(_,"font-size","3em"),y(N,"class","major"),y(I,"class","major"),y(g,"href","https://joi.dev/"),y(g,"target","_blank"),y(g,"rel","noreferrer"),y(D,"class","major"),y(w,"href","/api/latest/"),y(w,"rel","external"),y(v,"href",lt+"/user-guide/creating-entities"),y(v,"class","button"),nt(v,"margin",".5em"),y(f,"class","page-steps")},m(c,W){z(c,E,W),z(c,s,W),e(s,N),e(N,_),e(_,F),e(s,B),e(s,P),e(P,K),e(s,L),e(s,I),e(I,T),e(T,Q),e(s,V),e(s,h),e(h,Z),e(h,k),e(k,ee),e(h,te),e(h,S),e(S,ne),e(h,ae),e(h,g),e(g,se),e(h,ie),e(h,j),e(j,re),e(h,oe),e(h,U),e(U,le),e(h,he),e(s,ce),e(s,C),e(C,de),e(s,pe),e(s,x),e(x,ue),e(s,ye),e(s,q),e(q,me),e(s,fe),e(s,m),e(m,ge),e(m,G),e(G,ve),e(m,be),e(m,O),e(O,we),e(m,Ee),e(s,Ne),e(s,$),e($,_e),e(s,Ie),e(s,H),e(H,De),e(s,Ae),e(s,D),e(D,R),e(R,Pe),e(s,Te),e(s,b),e(b,ke),e(b,w),e(w,Se),e(b,je),z(c,J,W),z(c,f,W),e(f,Y),e(f,Ue),e(f,v),e(v,Ce)},p:xe,i:xe,o:xe,d(c){c&&t(E),c&&t(s),c&&t(J),c&&t(f)}}}class pt extends st{constructor(E){super(),it(this,E,null,ht,rt,{})}}export{pt as component};
