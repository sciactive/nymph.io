import{S as Ke,i as Le,s as Qe,R as Ve,e as Se,a as m,k as r,q as n,y as ke,F as We,T as Xe,h as s,c as p,l,m as i,r as a,z as Ae,p as Ze,n as ve,C as e,b as Re,A as qe,D as et,g as Me,d as Ye,B as Be}from"../chunks/index.d7cc8d8b.js";import{H as Fe,g as tt}from"../chunks/github.df9008b1.js";import{b as nt}from"../chunks/bash.2b754df6.js";import{t as st}from"../chunks/typescript.7dd1ec19.js";function at(Je){let f,$,k,t,g,v,q,M,D,Y,B,C,N,F,J,y,K,u,L,b,Q,V,O,W,X,Z,T,w,ee,te,c,ne,H,se,ae,j,oe,re,G,le,ie,I,ce,he,P,de,me,pe,z,ue,fe,_,ye,E,_e,x,Ee,ge,A;return y=new Fe({props:{language:nt,code:"npm install --save @nymphjs/tilmeld-client"}}),_=new Fe({props:{language:st,code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}}),{c(){f=new Ve(!1),$=Se(),k=m(),t=r("section"),g=r("header"),v=r("h1"),q=n("Tilmeld Client"),M=m(),D=r("p"),Y=n(`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),B=m(),C=r("header"),N=r("h2"),F=n("Installation"),J=m(),ke(y.$$.fragment),K=m(),u=r("p"),L=n("You can find UMD in "),b=r("code"),Q=n("dist"),V=n(", or TS source in "),O=r("code"),W=n("src"),X=n("."),Z=m(),T=r("header"),w=r("h2"),ee=n("Usage"),te=m(),c=r("p"),ne=n("The Tilmeld client contains the client versions of the "),H=r("code"),se=n("User"),ae=n(` and
    `),j=r("code"),oe=n("Group"),re=n(`
    entities. It also contains helpers, `),G=r("code"),le=n("login"),ie=n(`,
    `),I=r("code"),ce=n("register"),he=n(", and "),P=r("code"),de=n("checkUsername"),me=n("."),pe=m(),z=r("p"),ue=n(`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`),fe=m(),ke(_.$$.fragment),ye=m(),E=r("p"),_e=n(`If you're running more than one instance of Nymph client, be sure to use the
    classes returned by `),x=r("code"),Ee=n("addEntityClass"),ge=n(`, so as not to accidentally
    submit entities from one instances to another instance.`),this.h()},l(h){const S=We("svelte-1baconj",document.head);f=Xe(S,!1),$=Se(),S.forEach(s),k=p(h),t=l(h,"SECTION",{});var o=i(t);g=l(o,"HEADER",{class:!0});var Ce=i(g);v=l(Ce,"H1",{style:!0});var Te=i(v);q=a(Te,"Tilmeld Client"),Te.forEach(s),Ce.forEach(s),M=p(o),D=l(o,"P",{});var Ue=i(D);Y=a(Ue,`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),Ue.forEach(s),B=p(o),C=l(o,"HEADER",{class:!0});var $e=i(C);N=l($e,"H2",{});var De=i(N);F=a(De,"Installation"),De.forEach(s),$e.forEach(s),J=p(o),Ae(y.$$.fragment,o),K=p(o),u=l(o,"P",{});var U=i(u);L=a(U,"You can find UMD in "),b=l(U,"CODE",{});var Ne=i(b);Q=a(Ne,"dist"),Ne.forEach(s),V=a(U,", or TS source in "),O=l(U,"CODE",{});var be=i(O);W=a(be,"src"),be.forEach(s),X=a(U,"."),U.forEach(s),Z=p(o),T=l(o,"HEADER",{class:!0});var Oe=i(T);w=l(Oe,"H2",{});var we=i(w);ee=a(we,"Usage"),we.forEach(s),Oe.forEach(s),te=p(o),c=l(o,"P",{});var d=i(c);ne=a(d,"The Tilmeld client contains the client versions of the "),H=l(d,"CODE",{});var He=i(H);se=a(He,"User"),He.forEach(s),ae=a(d,` and
    `),j=l(d,"CODE",{});var je=i(j);oe=a(je,"Group"),je.forEach(s),re=a(d,`
    entities. It also contains helpers, `),G=l(d,"CODE",{});var Ge=i(G);le=a(Ge,"login"),Ge.forEach(s),ie=a(d,`,
    `),I=l(d,"CODE",{});var Ie=i(I);ce=a(Ie,"register"),Ie.forEach(s),he=a(d,", and "),P=l(d,"CODE",{});var Pe=i(P);de=a(Pe,"checkUsername"),Pe.forEach(s),me=a(d,"."),d.forEach(s),pe=p(o),z=l(o,"P",{});var ze=i(z);ue=a(ze,`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`),ze.forEach(s),fe=p(o),Ae(_.$$.fragment,o),ye=p(o),E=l(o,"P",{});var R=i(E);_e=a(R,`If you're running more than one instance of Nymph client, be sure to use the
    classes returned by `),x=l(R,"CODE",{});var xe=i(x);Ee=a(xe,"addEntityClass"),xe.forEach(s),ge=a(R,`, so as not to accidentally
    submit entities from one instances to another instance.`),R.forEach(s),o.forEach(s),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",f.a=$,Ze(v,"font-size","3em"),ve(g,"class","major"),ve(C,"class","major"),ve(T,"class","major")},m(h,S){f.m(tt,document.head),e(document.head,$),Re(h,k,S),Re(h,t,S),e(t,g),e(g,v),e(v,q),e(t,M),e(t,D),e(D,Y),e(t,B),e(t,C),e(C,N),e(N,F),e(t,J),qe(y,t,null),e(t,K),e(t,u),e(u,L),e(u,b),e(b,Q),e(u,V),e(u,O),e(O,W),e(u,X),e(t,Z),e(t,T),e(T,w),e(w,ee),e(t,te),e(t,c),e(c,ne),e(c,H),e(H,se),e(c,ae),e(c,j),e(j,oe),e(c,re),e(c,G),e(G,le),e(c,ie),e(c,I),e(I,ce),e(c,he),e(c,P),e(P,de),e(c,me),e(t,pe),e(t,z),e(z,ue),e(t,fe),qe(_,t,null),e(t,ye),e(t,E),e(E,_e),e(E,x),e(x,Ee),e(E,ge),A=!0},p:et,i(h){A||(Me(y.$$.fragment,h),Me(_.$$.fragment,h),A=!0)},o(h){Ye(y.$$.fragment,h),Ye(_.$$.fragment,h),A=!1},d(h){s($),h&&f.d(),h&&s(k),h&&s(t),Be(y),Be(_)}}}class ct extends Ke{constructor(f){super(),Le(this,f,null,at,Qe,{})}}export{ct as component};
