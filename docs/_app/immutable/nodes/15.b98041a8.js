import{S as We,i as Xe,s as Ze,R as et,e as qe,a as m,k as o,q as t,y as Me,F as tt,T as nt,h as s,c as p,l,m as r,r as n,z as Ye,p as st,n as Ue,C as e,b as Be,A as Fe,D as at,g as Je,d as Ke,B as Le}from"../chunks/index.d7cc8d8b.js";import{H as Qe,g as ot}from"../chunks/github.df9008b1.js";import{b as lt}from"../chunks/bash.2b754df6.js";import{t as rt}from"../chunks/typescript.7dd1ec19.js";function it(Ve){let f,$,A,a,g,v,M,Y,D,B,F,C,N,J,K,y,L,u,Q,O,V,W,b,X,Z,ee,T,w,te,ne,c,se,H,ae,oe,j,le,re,G,ie,ce,I,he,de,P,me,pe,z,ue,fe,ye,x,Ee,_e,E,ge,_,ve,S,Ce,Te,R;return y=new Qe({props:{language:lt,code:"npm install --save @nymphjs/tilmeld-client"}}),E=new Qe({props:{language:rt,code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}}),{c(){f=new et(!1),$=qe(),A=m(),a=o("section"),g=o("header"),v=o("h1"),M=t("Tilmeld Client"),Y=m(),D=o("p"),B=t(`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),F=m(),C=o("header"),N=o("h2"),J=t("Installation"),K=m(),Me(y.$$.fragment),L=m(),u=o("p"),Q=t("You can find UMD in "),O=o("code"),V=t("dist"),W=t(", or TS source in "),b=o("code"),X=t("src"),Z=t("."),ee=m(),T=o("header"),w=o("h2"),te=t("Usage"),ne=m(),c=o("p"),se=t("The Tilmeld client contains the client versions of the "),H=o("code"),ae=t("User"),oe=t(` and
    `),j=o("code"),le=t("Group"),re=t(`
    entities. It also contains helpers, `),G=o("code"),ie=t("getClientConfig"),ce=t(`,
    `),I=o("code"),he=t("login"),de=t(", "),P=o("code"),me=t("register"),pe=t(", and "),z=o("code"),ue=t("checkUsername"),fe=t("."),ye=m(),x=o("p"),Ee=t(`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`),_e=m(),Me(E.$$.fragment),ge=m(),_=o("p"),ve=t(`If you're running more than one instance of Nymph client, be sure to use the
    classes returned by `),S=o("code"),Ce=t("addEntityClass"),Te=t(`, so as not to accidentally
    submit entities from one instances to another instance.`),this.h()},l(h){const k=tt("svelte-1baconj",document.head);f=nt(k,!1),$=qe(),k.forEach(s),A=p(h),a=l(h,"SECTION",{});var i=r(a);g=l(i,"HEADER",{class:!0});var $e=r(g);v=l($e,"H1",{style:!0});var De=r(v);M=n(De,"Tilmeld Client"),De.forEach(s),$e.forEach(s),Y=p(i),D=l(i,"P",{});var Ne=r(D);B=n(Ne,`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),Ne.forEach(s),F=p(i),C=l(i,"HEADER",{class:!0});var Oe=r(C);N=l(Oe,"H2",{});var be=r(N);J=n(be,"Installation"),be.forEach(s),Oe.forEach(s),K=p(i),Ye(y.$$.fragment,i),L=p(i),u=l(i,"P",{});var U=r(u);Q=n(U,"You can find UMD in "),O=l(U,"CODE",{});var we=r(O);V=n(we,"dist"),we.forEach(s),W=n(U,", or TS source in "),b=l(U,"CODE",{});var He=r(b);X=n(He,"src"),He.forEach(s),Z=n(U,"."),U.forEach(s),ee=p(i),T=l(i,"HEADER",{class:!0});var je=r(T);w=l(je,"H2",{});var Ge=r(w);te=n(Ge,"Usage"),Ge.forEach(s),je.forEach(s),ne=p(i),c=l(i,"P",{});var d=r(c);se=n(d,"The Tilmeld client contains the client versions of the "),H=l(d,"CODE",{});var Ie=r(H);ae=n(Ie,"User"),Ie.forEach(s),oe=n(d,` and
    `),j=l(d,"CODE",{});var Pe=r(j);le=n(Pe,"Group"),Pe.forEach(s),re=n(d,`
    entities. It also contains helpers, `),G=l(d,"CODE",{});var ze=r(G);ie=n(ze,"getClientConfig"),ze.forEach(s),ce=n(d,`,
    `),I=l(d,"CODE",{});var xe=r(I);he=n(xe,"login"),xe.forEach(s),de=n(d,", "),P=l(d,"CODE",{});var Se=r(P);me=n(Se,"register"),Se.forEach(s),pe=n(d,", and "),z=l(d,"CODE",{});var ke=r(z);ue=n(ke,"checkUsername"),ke.forEach(s),fe=n(d,"."),d.forEach(s),ye=p(i),x=l(i,"P",{});var Ae=r(x);Ee=n(Ae,`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`),Ae.forEach(s),_e=p(i),Ye(E.$$.fragment,i),ge=p(i),_=l(i,"P",{});var q=r(_);ve=n(q,`If you're running more than one instance of Nymph client, be sure to use the
    classes returned by `),S=l(q,"CODE",{});var Re=r(S);Ce=n(Re,"addEntityClass"),Re.forEach(s),Te=n(q,`, so as not to accidentally
    submit entities from one instances to another instance.`),q.forEach(s),i.forEach(s),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",f.a=$,st(v,"font-size","3em"),Ue(g,"class","major"),Ue(C,"class","major"),Ue(T,"class","major")},m(h,k){f.m(ot,document.head),e(document.head,$),Be(h,A,k),Be(h,a,k),e(a,g),e(g,v),e(v,M),e(a,Y),e(a,D),e(D,B),e(a,F),e(a,C),e(C,N),e(N,J),e(a,K),Fe(y,a,null),e(a,L),e(a,u),e(u,Q),e(u,O),e(O,V),e(u,W),e(u,b),e(b,X),e(u,Z),e(a,ee),e(a,T),e(T,w),e(w,te),e(a,ne),e(a,c),e(c,se),e(c,H),e(H,ae),e(c,oe),e(c,j),e(j,le),e(c,re),e(c,G),e(G,ie),e(c,ce),e(c,I),e(I,he),e(c,de),e(c,P),e(P,me),e(c,pe),e(c,z),e(z,ue),e(c,fe),e(a,ye),e(a,x),e(x,Ee),e(a,_e),Fe(E,a,null),e(a,ge),e(a,_),e(_,ve),e(_,S),e(S,Ce),e(_,Te),R=!0},p:at,i(h){R||(Je(y.$$.fragment,h),Je(E.$$.fragment,h),R=!0)},o(h){Ke(y.$$.fragment,h),Ke(E.$$.fragment,h),R=!1},d(h){s($),h&&f.d(),h&&s(A),h&&s(a),Le(y),Le(E)}}}class pt extends We{constructor(f){super(),Xe(this,f,null,it,Ze,{})}}export{pt as component};
