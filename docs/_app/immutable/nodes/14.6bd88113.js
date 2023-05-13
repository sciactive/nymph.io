import{S as Dt,i as It,s as kt,R as Ht,e as ut,a as h,k as s,q as i,y as gt,F as $t,T as Ut,h as t,c,l as o,m as l,r as n,z as vt,p as jt,n as u,C as e,b as _t,A as Et,D as Ct,g as wt,d as yt,B as bt}from"../chunks/index.d7cc8d8b.js";import{H as At,g as Nt}from"../chunks/github.df9008b1.js";import{b as Rt}from"../chunks/bash.2b754df6.js";import{t as Pt}from"../chunks/typescript.7dd1ec19.js";function St(Tt){let g,C,M,a,w,y,V,Z,N,ee,te,b,R,ae,se,v,oe,A,P,le,re,S,ie,ne,L,he,ce,_,de,T,O,me,pe,E,fe,f,ue,ge,ve,D,x,_e,Ee,z,we,ye,d,I,q,be,Ae,Te,k,F,De,Ie,ke,H,G,He,$e,Ue,$,Q,je,Ce,Ne,U,W,Re,Pe,Se,j,X,Le,Oe,xe,Y,ze,J;return v=new At({props:{language:Rt,code:"npm install --save @nymphjs/tilmeld"}}),_=new At({props:{language:Pt,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Tilmeld } from '@nymphjs/tilmeld';
import { Nymph } from '@nymphjs/nymph';

const tilmeld = new Tilmeld({
  appName: 'My App',
  appUrl: 'http://localhost',
  cookieDomain: 'localhost',
  cookiePath: '/',
  setupPath: '/user',
  verifyRedirect: 'http://localhost',
  verifyChangeRedirect: 'http://localhost',
  cancelChangeRedirect: 'http://localhost',
  jwtSecret: 'shhhhh',
});

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
  tilmeld
);

// These are the classes specific to this instance of Tilmeld.
const { User, Group } = tilmeld;`}}),{c(){g=new Ht(!1),C=ut(),M=h(),a=s("section"),w=s("header"),y=s("h1"),V=i("Tilmeld"),Z=h(),N=s("p"),ee=i(`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),te=h(),b=s("header"),R=s("h2"),ae=i("Installation"),se=h(),gt(v.$$.fragment),oe=h(),A=s("header"),P=s("h2"),le=i("Usage"),re=h(),S=s("p"),ie=i(`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),ne=h(),L=s("p"),he=i("Here's an overview."),ce=h(),gt(_.$$.fragment),de=h(),T=s("header"),O=s("h2"),me=i("Options"),pe=h(),E=s("p"),fe=i("See the "),f=s("a"),ue=i("config declaration file"),ge=i("."),ve=h(),D=s("header"),x=s("h2"),_e=i("Abilities"),Ee=h(),z=s("p"),we=i("There are a few abilities that Tilmeld uses internally:"),ye=h(),d=s("ul"),I=s("li"),q=s("code"),be=i("system/admin"),Ae=i(" - A user with this ability has **all** abilities."),Te=h(),k=s("li"),F=s("code"),De=i("tilmeld/admin"),Ie=i(` - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.`),ke=h(),H=s("li"),G=s("code"),He=i("tilmeld/switch"),$e=i(` - Allow the user to switch to other users (log
      in as them without their password).`),Ue=h(),$=s("li"),Q=s("code"),je=i("uid/get/[name]"),Ce=i(" - Allow the user to read the named UID."),Ne=h(),U=s("li"),W=s("code"),Re=i("uid/new/[name]"),Pe=i(` - Allow the user to read, create, and increment
      the named UID.`),Se=h(),j=s("li"),X=s("code"),Le=i("uid/set/[name]"),Oe=i(` - Allow the user to read, create, increment, set,
      and delete the named UID.`),xe=h(),Y=s("p"),ze=i("The admin and switch abilities cannot be inherited from groups."),this.h()},l(m){const B=$t("svelte-u4tysy",document.head);g=Ut(B,!1),C=ut(),B.forEach(t),M=c(m),a=o(m,"SECTION",{});var r=l(a);w=o(r,"HEADER",{class:!0});var Ye=l(w);y=o(Ye,"H1",{style:!0});var Be=l(y);V=n(Be,"Tilmeld"),Be.forEach(t),Ye.forEach(t),Z=c(r),N=o(r,"P",{});var Me=l(N);ee=n(Me,`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),Me.forEach(t),te=c(r),b=o(r,"HEADER",{class:!0});var Je=l(b);R=o(Je,"H2",{});var Ke=l(R);ae=n(Ke,"Installation"),Ke.forEach(t),Je.forEach(t),se=c(r),vt(v.$$.fragment,r),oe=c(r),A=o(r,"HEADER",{class:!0});var Ve=l(A);P=o(Ve,"H2",{});var Ze=l(P);le=n(Ze,"Usage"),Ze.forEach(t),Ve.forEach(t),re=c(r),S=o(r,"P",{});var et=l(S);ie=n(et,`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),et.forEach(t),ne=c(r),L=o(r,"P",{});var tt=l(L);he=n(tt,"Here's an overview."),tt.forEach(t),ce=c(r),vt(_.$$.fragment,r),de=c(r),T=o(r,"HEADER",{class:!0});var at=l(T);O=o(at,"H2",{});var st=l(O);me=n(st,"Options"),st.forEach(t),at.forEach(t),pe=c(r),E=o(r,"P",{});var K=l(E);fe=n(K,"See the "),f=o(K,"A",{href:!0,target:!0,rel:!0});var ot=l(f);ue=n(ot,"config declaration file"),ot.forEach(t),ge=n(K,"."),K.forEach(t),ve=c(r),D=o(r,"HEADER",{class:!0});var lt=l(D);x=o(lt,"H2",{});var rt=l(x);_e=n(rt,"Abilities"),rt.forEach(t),lt.forEach(t),Ee=c(r),z=o(r,"P",{});var it=l(z);we=n(it,"There are a few abilities that Tilmeld uses internally:"),it.forEach(t),ye=c(r),d=o(r,"UL",{});var p=l(d);I=o(p,"LI",{});var qe=l(I);q=o(qe,"CODE",{});var nt=l(q);be=n(nt,"system/admin"),nt.forEach(t),Ae=n(qe," - A user with this ability has **all** abilities."),qe.forEach(t),Te=c(p),k=o(p,"LI",{});var Fe=l(k);F=o(Fe,"CODE",{});var ht=l(F);De=n(ht,"tilmeld/admin"),ht.forEach(t),Ie=n(Fe,` - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.`),Fe.forEach(t),ke=c(p),H=o(p,"LI",{});var Ge=l(H);G=o(Ge,"CODE",{});var ct=l(G);He=n(ct,"tilmeld/switch"),ct.forEach(t),$e=n(Ge,` - Allow the user to switch to other users (log
      in as them without their password).`),Ge.forEach(t),Ue=c(p),$=o(p,"LI",{});var Qe=l($);Q=o(Qe,"CODE",{});var dt=l(Q);je=n(dt,"uid/get/[name]"),dt.forEach(t),Ce=n(Qe," - Allow the user to read the named UID."),Qe.forEach(t),Ne=c(p),U=o(p,"LI",{});var We=l(U);W=o(We,"CODE",{});var mt=l(W);Re=n(mt,"uid/new/[name]"),mt.forEach(t),Pe=n(We,` - Allow the user to read, create, and increment
      the named UID.`),We.forEach(t),Se=c(p),j=o(p,"LI",{});var Xe=l(j);X=o(Xe,"CODE",{});var pt=l(X);Le=n(pt,"uid/set/[name]"),pt.forEach(t),Oe=n(Xe,` - Allow the user to read, create, increment, set,
      and delete the named UID.`),Xe.forEach(t),p.forEach(t),xe=c(r),Y=o(r,"P",{});var ft=l(Y);ze=n(ft,"The admin and switch abilities cannot be inherited from groups."),ft.forEach(t),r.forEach(t),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",g.a=C,jt(y,"font-size","3em"),u(w,"class","major"),u(b,"class","major"),u(A,"class","major"),u(T,"class","major"),u(f,"href","https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"),u(f,"target","_blank"),u(f,"rel","external"),u(D,"class","major")},m(m,B){g.m(Nt,document.head),e(document.head,C),_t(m,M,B),_t(m,a,B),e(a,w),e(w,y),e(y,V),e(a,Z),e(a,N),e(N,ee),e(a,te),e(a,b),e(b,R),e(R,ae),e(a,se),Et(v,a,null),e(a,oe),e(a,A),e(A,P),e(P,le),e(a,re),e(a,S),e(S,ie),e(a,ne),e(a,L),e(L,he),e(a,ce),Et(_,a,null),e(a,de),e(a,T),e(T,O),e(O,me),e(a,pe),e(a,E),e(E,fe),e(E,f),e(f,ue),e(E,ge),e(a,ve),e(a,D),e(D,x),e(x,_e),e(a,Ee),e(a,z),e(z,we),e(a,ye),e(a,d),e(d,I),e(I,q),e(q,be),e(I,Ae),e(d,Te),e(d,k),e(k,F),e(F,De),e(k,Ie),e(d,ke),e(d,H),e(H,G),e(G,He),e(H,$e),e(d,Ue),e(d,$),e($,Q),e(Q,je),e($,Ce),e(d,Ne),e(d,U),e(U,W),e(W,Re),e(U,Pe),e(d,Se),e(d,j),e(j,X),e(X,Le),e(j,Oe),e(a,xe),e(a,Y),e(Y,ze),J=!0},p:Ct,i(m){J||(wt(v.$$.fragment,m),wt(_.$$.fragment,m),J=!0)},o(m){yt(v.$$.fragment,m),yt(_.$$.fragment,m),J=!1},d(m){t(C),m&&g.d(),m&&t(M),m&&t(a),bt(v),bt(_)}}}class qt extends Dt{constructor(g){super(),It(this,g,null,St,kt,{})}}export{qt as component};
