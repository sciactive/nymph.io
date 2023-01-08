import{S as Ve,i as We,s as Xe,R as Ze,e as Je,a as m,k as l,q as n,w as Ce,E as et,T as tt,h as a,c as p,l as r,m as i,r as o,x as $e,p as nt,n as Te,C as e,b as Ke,y as Ue,B as at,f as De,t as Ne,z as Oe}from"../../../../chunks/index-8e853c83.js";import{H as je,g as ot}from"../../../../chunks/github-07e092b5.js";import{b as st}from"../../../../chunks/bash-2b754df6.js";import{t as Le}from"../../../../chunks/typescript-7dd1ec19.js";function lt(Qe){let u,U,R,t,_,v,q,M,D,Y,B,C,N,F,J,y,K,f,L,O,Q,V,j,W,X,Z,$,G,ee,te,c,ne,H,ae,oe,w,se,le,I,re,ie,P,ce,de,k,he,me,x,pe,fe,ue,b,ye,ge,g,Ee,S,_e,ve,E,A;return y=new je({props:{language:st,code:"npm install --save @nymphjs/tilmeld-client"}}),g=new je({props:{language:Le,code:`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
nymph.addEntityClass(User);
nymph.addEntityClass(Group);`}}),E=new je({props:{language:Le,code:`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const UserClone = User.clone();
nymph.addEntityClass(UserClone);
const GroupClone = Group.clone();
nymph.addEntityClass(GroupClone);`}}),{c(){u=new Ze(!1),U=Je(),R=m(),t=l("section"),_=l("header"),v=l("h1"),q=n("Tilmeld Client"),M=m(),D=l("p"),Y=n(`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),B=m(),C=l("header"),N=l("h2"),F=n("Installation"),J=m(),Ce(y.$$.fragment),K=m(),f=l("p"),L=n("You can find UMD in "),O=l("code"),Q=n("dist"),V=n(", or TS source in "),j=l("code"),W=n("src"),X=n("."),Z=m(),$=l("header"),G=l("h2"),ee=n("Usage"),te=m(),c=l("p"),ne=n("The Tilmeld client contains the client versions of the "),H=l("code"),ae=n("User"),oe=n(` and
    `),w=l("code"),se=n("Group"),le=n(`
    entities. It also contains helpers, `),I=l("code"),re=n("getClientConfig"),ie=n(`,
    `),P=l("code"),ce=n("login"),de=n(", "),k=l("code"),he=n("register"),me=n(", and "),x=l("code"),pe=n("checkUsername"),fe=n("."),ue=m(),b=l("p"),ye=n("Once you've initialized Nymph Client, set the User and Group classes on it."),ge=m(),Ce(g.$$.fragment),Ee=m(),S=l("p"),_e=n(`If you're running more than one instance of Nymph client, you can clone the
    classes and add those instead. This will keep event listeners and Tilmeld
    client config separated.`),ve=m(),Ce(E.$$.fragment),this.h()},l(d){const z=et("svelte-1baconj",document.head);u=tt(z,!1),U=Je(),z.forEach(a),R=p(d),t=r(d,"SECTION",{});var s=i(t);_=r(s,"HEADER",{class:!0});var Ge=i(_);v=r(Ge,"H1",{style:!0});var He=i(v);q=o(He,"Tilmeld Client"),He.forEach(a),Ge.forEach(a),M=p(s),D=r(s,"P",{});var we=i(D);Y=o(we,`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),we.forEach(a),B=p(s),C=r(s,"HEADER",{class:!0});var Ie=i(C);N=r(Ie,"H2",{});var Pe=i(N);F=o(Pe,"Installation"),Pe.forEach(a),Ie.forEach(a),J=p(s),$e(y.$$.fragment,s),K=p(s),f=r(s,"P",{});var T=i(f);L=o(T,"You can find UMD in "),O=r(T,"CODE",{});var ke=i(O);Q=o(ke,"dist"),ke.forEach(a),V=o(T,", or TS source in "),j=r(T,"CODE",{});var xe=i(j);W=o(xe,"src"),xe.forEach(a),X=o(T,"."),T.forEach(a),Z=p(s),$=r(s,"HEADER",{class:!0});var be=i($);G=r(be,"H2",{});var Se=i(G);ee=o(Se,"Usage"),Se.forEach(a),be.forEach(a),te=p(s),c=r(s,"P",{});var h=i(c);ne=o(h,"The Tilmeld client contains the client versions of the "),H=r(h,"CODE",{});var ze=i(H);ae=o(ze,"User"),ze.forEach(a),oe=o(h,` and
    `),w=r(h,"CODE",{});var Re=i(w);se=o(Re,"Group"),Re.forEach(a),le=o(h,`
    entities. It also contains helpers, `),I=r(h,"CODE",{});var Ae=i(I);re=o(Ae,"getClientConfig"),Ae.forEach(a),ie=o(h,`,
    `),P=r(h,"CODE",{});var qe=i(P);ce=o(qe,"login"),qe.forEach(a),de=o(h,", "),k=r(h,"CODE",{});var Me=i(k);he=o(Me,"register"),Me.forEach(a),me=o(h,", and "),x=r(h,"CODE",{});var Ye=i(x);pe=o(Ye,"checkUsername"),Ye.forEach(a),fe=o(h,"."),h.forEach(a),ue=p(s),b=r(s,"P",{});var Be=i(b);ye=o(Be,"Once you've initialized Nymph Client, set the User and Group classes on it."),Be.forEach(a),ge=p(s),$e(g.$$.fragment,s),Ee=p(s),S=r(s,"P",{});var Fe=i(S);_e=o(Fe,`If you're running more than one instance of Nymph client, you can clone the
    classes and add those instead. This will keep event listeners and Tilmeld
    client config separated.`),Fe.forEach(a),ve=p(s),$e(E.$$.fragment,s),s.forEach(a),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",u.a=U,nt(v,"font-size","3em"),Te(_,"class","major"),Te(C,"class","major"),Te($,"class","major")},m(d,z){u.m(ot,document.head),e(document.head,U),Ke(d,R,z),Ke(d,t,z),e(t,_),e(_,v),e(v,q),e(t,M),e(t,D),e(D,Y),e(t,B),e(t,C),e(C,N),e(N,F),e(t,J),Ue(y,t,null),e(t,K),e(t,f),e(f,L),e(f,O),e(O,Q),e(f,V),e(f,j),e(j,W),e(f,X),e(t,Z),e(t,$),e($,G),e(G,ee),e(t,te),e(t,c),e(c,ne),e(c,H),e(H,ae),e(c,oe),e(c,w),e(w,se),e(c,le),e(c,I),e(I,re),e(c,ie),e(c,P),e(P,ce),e(c,de),e(c,k),e(k,he),e(c,me),e(c,x),e(x,pe),e(c,fe),e(t,ue),e(t,b),e(b,ye),e(t,ge),Ue(g,t,null),e(t,Ee),e(t,S),e(S,_e),e(t,ve),Ue(E,t,null),A=!0},p:at,i(d){A||(De(y.$$.fragment,d),De(g.$$.fragment,d),De(E.$$.fragment,d),A=!0)},o(d){Ne(y.$$.fragment,d),Ne(g.$$.fragment,d),Ne(E.$$.fragment,d),A=!1},d(d){a(U),d&&u.d(),d&&a(R),d&&a(t),Oe(y),Oe(g),Oe(E)}}}class ht extends Ve{constructor(u){super(),We(this,u,null,lt,Xe,{})}}export{ht as default};
