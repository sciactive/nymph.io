import{S as $t,i as Ut,s as jt,R as Nt,e as Et,a as h,k as s,q as i,y as wt,F as Rt,T as Ct,h as t,c,l as o,m as r,r as n,z as yt,p as St,n as g,C as e,b as bt,A as Tt,D as Ot,g as At,d as Dt,B as It}from"../chunks/index.d7cc8d8b.js";import{H as kt,g as Pt}from"../chunks/github.df9008b1.js";import{b as Lt}from"../chunks/bash.2b754df6.js";import{t as xt}from"../chunks/typescript.7dd1ec19.js";function zt(Ht){let v,N,K,a,y,b,ee,te,R,ae,se,T,C,oe,re,_,le,A,S,ie,ne,O,he,ce,P,de,me,E,pe,D,L,fe,ue,w,ge,f,ve,_e,Ee,I,x,we,ye,z,be,Te,d,u,G,Ae,De,q,Ie,ke,He,k,F,$e,Ue,je,H,Q,Ne,Re,Ce,$,W,Se,Oe,Pe,U,X,Le,xe,ze,j,Y,Ge,qe,Fe,B,Qe,V;return _=new kt({props:{language:Lt,code:"npm install --save @nymphjs/tilmeld"}}),E=new kt({props:{language:xt,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
  tilmeld,
);

// These are the classes specific to this instance of Tilmeld.
const { User, Group } = tilmeld;`}}),{c(){v=new Nt(!1),N=Et(),K=h(),a=s("section"),y=s("header"),b=s("h1"),ee=i("Tilmeld"),te=h(),R=s("p"),ae=i(`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),se=h(),T=s("header"),C=s("h2"),oe=i("Installation"),re=h(),wt(_.$$.fragment),le=h(),A=s("header"),S=s("h2"),ie=i("Usage"),ne=h(),O=s("p"),he=i(`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),ce=h(),P=s("p"),de=i("Here's an overview."),me=h(),wt(E.$$.fragment),pe=h(),D=s("header"),L=s("h2"),fe=i("Options"),ue=h(),w=s("p"),ge=i("See the "),f=s("a"),ve=i("config declaration file"),_e=i("."),Ee=h(),I=s("header"),x=s("h2"),we=i("Abilities"),ye=h(),z=s("p"),be=i("There are a few abilities that Tilmeld uses internally:"),Te=h(),d=s("ul"),u=s("li"),G=s("code"),Ae=i("system/admin"),De=i(` - A user with this ability has
      `),q=s("strong"),Ie=i("all"),ke=i(" abilities."),He=h(),k=s("li"),F=s("code"),$e=i("tilmeld/admin"),Ue=i(` - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.`),je=h(),H=s("li"),Q=s("code"),Ne=i("tilmeld/switch"),Re=i(` - Allow the user to switch to other users (log
      in as them without their password).`),Ce=h(),$=s("li"),W=s("code"),Se=i("uid/get/[name]"),Oe=i(" - Allow the user to read the named UID."),Pe=h(),U=s("li"),X=s("code"),Le=i("uid/new/[name]"),xe=i(` - Allow the user to read, create, and increment
      the named UID.`),ze=h(),j=s("li"),Y=s("code"),Ge=i("uid/set/[name]"),qe=i(` - Allow the user to read, create, increment, set,
      and delete the named UID.`),Fe=h(),B=s("p"),Qe=i("The admin and switch abilities cannot be inherited from groups."),this.h()},l(m){const M=Rt("svelte-u4tysy",document.head);v=Ct(M,!1),N=Et(),M.forEach(t),K=c(m),a=o(m,"SECTION",{});var l=r(a);y=o(l,"HEADER",{class:!0});var Je=r(y);b=o(Je,"H1",{style:!0});var Ke=r(b);ee=n(Ke,"Tilmeld"),Ke.forEach(t),Je.forEach(t),te=c(l),R=o(l,"P",{});var Ve=r(R);ae=n(Ve,`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),Ve.forEach(t),se=c(l),T=o(l,"HEADER",{class:!0});var Ze=r(T);C=o(Ze,"H2",{});var et=r(C);oe=n(et,"Installation"),et.forEach(t),Ze.forEach(t),re=c(l),yt(_.$$.fragment,l),le=c(l),A=o(l,"HEADER",{class:!0});var tt=r(A);S=o(tt,"H2",{});var at=r(S);ie=n(at,"Usage"),at.forEach(t),tt.forEach(t),ne=c(l),O=o(l,"P",{});var st=r(O);he=n(st,`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),st.forEach(t),ce=c(l),P=o(l,"P",{});var ot=r(P);de=n(ot,"Here's an overview."),ot.forEach(t),me=c(l),yt(E.$$.fragment,l),pe=c(l),D=o(l,"HEADER",{class:!0});var rt=r(D);L=o(rt,"H2",{});var lt=r(L);fe=n(lt,"Options"),lt.forEach(t),rt.forEach(t),ue=c(l),w=o(l,"P",{});var Z=r(w);ge=n(Z,"See the "),f=o(Z,"A",{href:!0,target:!0,rel:!0});var it=r(f);ve=n(it,"config declaration file"),it.forEach(t),_e=n(Z,"."),Z.forEach(t),Ee=c(l),I=o(l,"HEADER",{class:!0});var nt=r(I);x=o(nt,"H2",{});var ht=r(x);we=n(ht,"Abilities"),ht.forEach(t),nt.forEach(t),ye=c(l),z=o(l,"P",{});var ct=r(z);be=n(ct,"There are a few abilities that Tilmeld uses internally:"),ct.forEach(t),Te=c(l),d=o(l,"UL",{});var p=r(d);u=o(p,"LI",{});var J=r(u);G=o(J,"CODE",{});var dt=r(G);Ae=n(dt,"system/admin"),dt.forEach(t),De=n(J,` - A user with this ability has
      `),q=o(J,"STRONG",{});var mt=r(q);Ie=n(mt,"all"),mt.forEach(t),ke=n(J," abilities."),J.forEach(t),He=c(p),k=o(p,"LI",{});var We=r(k);F=o(We,"CODE",{});var pt=r(F);$e=n(pt,"tilmeld/admin"),pt.forEach(t),Ue=n(We,` - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.`),We.forEach(t),je=c(p),H=o(p,"LI",{});var Xe=r(H);Q=o(Xe,"CODE",{});var ft=r(Q);Ne=n(ft,"tilmeld/switch"),ft.forEach(t),Re=n(Xe,` - Allow the user to switch to other users (log
      in as them without their password).`),Xe.forEach(t),Ce=c(p),$=o(p,"LI",{});var Ye=r($);W=o(Ye,"CODE",{});var ut=r(W);Se=n(ut,"uid/get/[name]"),ut.forEach(t),Oe=n(Ye," - Allow the user to read the named UID."),Ye.forEach(t),Pe=c(p),U=o(p,"LI",{});var Be=r(U);X=o(Be,"CODE",{});var gt=r(X);Le=n(gt,"uid/new/[name]"),gt.forEach(t),xe=n(Be,` - Allow the user to read, create, and increment
      the named UID.`),Be.forEach(t),ze=c(p),j=o(p,"LI",{});var Me=r(j);Y=o(Me,"CODE",{});var vt=r(Y);Ge=n(vt,"uid/set/[name]"),vt.forEach(t),qe=n(Me,` - Allow the user to read, create, increment, set,
      and delete the named UID.`),Me.forEach(t),p.forEach(t),Fe=c(l),B=o(l,"P",{});var _t=r(B);Qe=n(_t,"The admin and switch abilities cannot be inherited from groups."),_t.forEach(t),l.forEach(t),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",v.a=N,St(b,"font-size","3em"),g(y,"class","major"),g(T,"class","major"),g(A,"class","major"),g(D,"class","major"),g(f,"href","https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"),g(f,"target","_blank"),g(f,"rel","external"),g(I,"class","major")},m(m,M){v.m(Pt,document.head),e(document.head,N),bt(m,K,M),bt(m,a,M),e(a,y),e(y,b),e(b,ee),e(a,te),e(a,R),e(R,ae),e(a,se),e(a,T),e(T,C),e(C,oe),e(a,re),Tt(_,a,null),e(a,le),e(a,A),e(A,S),e(S,ie),e(a,ne),e(a,O),e(O,he),e(a,ce),e(a,P),e(P,de),e(a,me),Tt(E,a,null),e(a,pe),e(a,D),e(D,L),e(L,fe),e(a,ue),e(a,w),e(w,ge),e(w,f),e(f,ve),e(w,_e),e(a,Ee),e(a,I),e(I,x),e(x,we),e(a,ye),e(a,z),e(z,be),e(a,Te),e(a,d),e(d,u),e(u,G),e(G,Ae),e(u,De),e(u,q),e(q,Ie),e(u,ke),e(d,He),e(d,k),e(k,F),e(F,$e),e(k,Ue),e(d,je),e(d,H),e(H,Q),e(Q,Ne),e(H,Re),e(d,Ce),e(d,$),e($,W),e(W,Se),e($,Oe),e(d,Pe),e(d,U),e(U,X),e(X,Le),e(U,xe),e(d,ze),e(d,j),e(j,Y),e(Y,Ge),e(j,qe),e(a,Fe),e(a,B),e(B,Qe),V=!0},p:Ot,i(m){V||(At(_.$$.fragment,m),At(E.$$.fragment,m),V=!0)},o(m){Dt(_.$$.fragment,m),Dt(E.$$.fragment,m),V=!1},d(m){t(N),m&&v.d(),m&&t(K),m&&t(a),It(_),It(E)}}}class Wt extends $t{constructor(v){super(),Ut(this,v,null,zt,jt,{})}}export{Wt as component};
