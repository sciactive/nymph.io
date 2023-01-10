import{S as pt,i as ut,s as yt,a as d,k as n,q as s,E as mt,h as t,c,l as i,m as r,r as o,p as We,n as p,b as F,C as e,B as $e}from"../../../../chunks/index-8e853c83.js";import{b as ft}from"../../../../chunks/paths-b4419565.js";function vt(ct){let I,a,P,D,K,Q,T,Z,ee,j,U,te,ae,h,ne,x,se,ie,k,re,oe,m,le,he,C,de,ce,H,pe,ue,ye,q,me,fe,G,ve,ge,O,be,we,g,Ee,R,Ne,_e,Ie,W,Pe,De,$,je,Ae,A,J,Se,Te,b,Ue,w,xe,ke,Ce,E,He,N,qe,Ge,V,S,f,Y,Oe,_,v,Re;return{c(){I=d(),a=n("section"),P=n("header"),D=n("h1"),K=s("Introduction"),Q=d(),T=n("p"),Z=s(`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server. It used to be a PHP
    library and was migrated to Node.js in 2021.`),ee=d(),j=n("header"),U=n("h2"),te=s("Understanding Nymph Applications"),ae=d(),h=n("p"),ne=s("Data in Nymph is stored and manipulated in objects called "),x=n("strong"),se=s("entities"),ie=s(`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),k=n("code"),re=s("$save"),oe=s(`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),m=n("a"),le=s("Joi"),he=s(`
    is a good one. You can do this in the
    `),C=n("code"),de=s("$save"),ce=s(`
    method on your entities before calling
    `),H=n("code"),pe=s("return await super.$save();"),ue=s(`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strictly typed data checks in production.`),ye=d(),q=n("p"),me=s(`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),fe=d(),G=n("p"),ve=s(`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),ge=d(),O=n("p"),be=s(`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this property is accessed after the top
    level entity is pulled from the DB, Nymph will retrieve the referenced
    entity using the saved class.`),we=d(),g=n("p"),Ee=s(`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. In Node.js, this
    happens automatically when the data is accessed. In the client, this happens
    when you use the `),R=n("code"),Ne=s("$ready"),_e=s(" method."),Ie=d(),W=n("p"),Pe=s(`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),De=d(),$=n("p"),je=s(`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),Ae=d(),A=n("header"),J=n("h2"),Se=s("API Docs"),Te=d(),b=n("p"),Ue=s("If you want to really dive deep into Nymph, you can also browse the "),w=n("a"),xe=s("API docs"),ke=s(", which covers every part of Nymph's API."),Ce=d(),E=n("p"),He=s(`If you need help with the old version of Nymph that ran on PHP, you can
    browse the `),N=n("a"),qe=s("Legacy API docs"),Ge=s("."),V=d(),S=n("section"),f=n("div"),Y=n("div"),Oe=d(),_=n("div"),v=n("a"),Re=s("Next: Creating Entities"),this.h()},l(u){mt("svelte-6cxoo7",document.head).forEach(t),I=c(u),a=i(u,"SECTION",{});var l=r(a);P=i(l,"HEADER",{class:!0});var Je=r(P);D=i(Je,"H1",{style:!0});var Ye=r(D);K=o(Ye,"Introduction"),Ye.forEach(t),Je.forEach(t),Q=c(l),T=i(l,"P",{});var Be=r(T);Z=o(Be,`Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server. It used to be a PHP
    library and was migrated to Node.js in 2021.`),Be.forEach(t),ee=c(l),j=i(l,"HEADER",{class:!0});var Ve=r(j);U=i(Ve,"H2",{});var Le=r(U);te=o(Le,"Understanding Nymph Applications"),Le.forEach(t),Ve.forEach(t),ae=c(l),h=i(l,"P",{});var y=r(h);ne=o(y,"Data in Nymph is stored and manipulated in objects called "),x=i(y,"STRONG",{});var Me=r(x);se=o(Me,"entities"),Me.forEach(t),ie=o(y,`. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling `),k=i(y,"CODE",{});var Xe=r(k);re=o(Xe,"$save"),Xe.forEach(t),oe=o(y,`. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities.
    `),m=i(y,"A",{href:!0,target:!0,rel:!0});var ze=r(m);le=o(ze,"Joi"),ze.forEach(t),he=o(y,`
    is a good one. You can do this in the
    `),C=i(y,"CODE",{});var Fe=r(C);de=o(Fe,"$save"),Fe.forEach(t),ce=o(y,`
    method on your entities before calling
    `),H=i(y,"CODE",{});var Ke=r(H);pe=o(Ke,"return await super.$save();"),Ke.forEach(t),ue=o(y,`. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strictly typed data checks in production.`),y.forEach(t),ye=c(l),q=i(l,"P",{});var Qe=r(q);me=o(Qe,`All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).`),Qe.forEach(t),fe=c(l),G=i(l,"P",{});var Ze=r(G);ve=o(Ze,`Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.`),Ze.forEach(t),ge=c(l),O=i(l,"P",{});var et=r(O);be=o(et,`If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this property is accessed after the top
    level entity is pulled from the DB, Nymph will retrieve the referenced
    entity using the saved class.`),et.forEach(t),we=c(l),g=i(l,"P",{});var L=r(g);Ee=o(L,`When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. In Node.js, this
    happens automatically when the data is accessed. In the client, this happens
    when you use the `),R=i(L,"CODE",{});var tt=r(R);Ne=o(tt,"$ready"),tt.forEach(t),_e=o(L," method."),L.forEach(t),Ie=c(l),W=i(l,"P",{});var at=r(W);Pe=o(at,`When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.`),at.forEach(t),De=c(l),$=i(l,"P",{});var nt=r($);je=o(nt,`Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.`),nt.forEach(t),Ae=c(l),A=i(l,"HEADER",{class:!0});var st=r(A);J=i(st,"H2",{});var it=r(J);Se=o(it,"API Docs"),it.forEach(t),st.forEach(t),Te=c(l),b=i(l,"P",{});var M=r(b);Ue=o(M,"If you want to really dive deep into Nymph, you can also browse the "),w=i(M,"A",{href:!0,rel:!0});var rt=r(w);xe=o(rt,"API docs"),rt.forEach(t),ke=o(M,", which covers every part of Nymph's API."),M.forEach(t),Ce=c(l),E=i(l,"P",{});var X=r(E);He=o(X,`If you need help with the old version of Nymph that ran on PHP, you can
    browse the `),N=i(X,"A",{href:!0,rel:!0});var ot=r(N);qe=o(ot,"Legacy API docs"),ot.forEach(t),Ge=o(X,"."),X.forEach(t),l.forEach(t),V=c(u),S=i(u,"SECTION",{});var lt=r(S);f=i(lt,"DIV",{class:!0});var z=r(f);Y=i(z,"DIV",{class:!0}),r(Y).forEach(t),Oe=c(z),_=i(z,"DIV",{class:!0,style:!0});var ht=r(_);v=i(ht,"A",{href:!0,class:!0,style:!0});var dt=r(v);Re=o(dt,"Next: Creating Entities"),dt.forEach(t),ht.forEach(t),z.forEach(t),lt.forEach(t),this.h()},h(){document.title="Introduction - User Guide - Nymph.js",We(D,"font-size","3em"),p(P,"class","major"),p(j,"class","major"),p(m,"href","https://joi.dev/"),p(m,"target","_blank"),p(m,"rel","noreferrer"),p(A,"class","major"),p(w,"href","/api/latest/"),p(w,"rel","external"),p(N,"href","/api/legacy/3.0.0/"),p(N,"rel","external"),p(Y,"class","col-6 col-12-small"),p(v,"href",ft+"/user-guide/creating-entities"),p(v,"class","button"),We(v,"margin",".5em"),p(_,"class","col-6 col-12-small"),We(_,"text-align","end"),p(f,"class","row")},m(u,B){F(u,I,B),F(u,a,B),e(a,P),e(P,D),e(D,K),e(a,Q),e(a,T),e(T,Z),e(a,ee),e(a,j),e(j,U),e(U,te),e(a,ae),e(a,h),e(h,ne),e(h,x),e(x,se),e(h,ie),e(h,k),e(k,re),e(h,oe),e(h,m),e(m,le),e(h,he),e(h,C),e(C,de),e(h,ce),e(h,H),e(H,pe),e(h,ue),e(a,ye),e(a,q),e(q,me),e(a,fe),e(a,G),e(G,ve),e(a,ge),e(a,O),e(O,be),e(a,we),e(a,g),e(g,Ee),e(g,R),e(R,Ne),e(g,_e),e(a,Ie),e(a,W),e(W,Pe),e(a,De),e(a,$),e($,je),e(a,Ae),e(a,A),e(A,J),e(J,Se),e(a,Te),e(a,b),e(b,Ue),e(b,w),e(w,xe),e(b,ke),e(a,Ce),e(a,E),e(E,He),e(E,N),e(N,qe),e(E,Ge),F(u,V,B),F(u,S,B),e(S,f),e(f,Y),e(f,Oe),e(f,_),e(_,v),e(v,Re)},p:$e,i:$e,o:$e,d(u){u&&t(I),u&&t(a),u&&t(V),u&&t(S)}}}class wt extends pt{constructor(I){super(),ut(this,I,null,vt,yt,{})}}export{wt as default};
