import{S as Ve,i as We,s as Xe,a2 as Ce,a7 as Ze,a3 as Je,a4 as et,l as Ke,k as m,e as l,t as n,w as $e,N as tt,a5 as nt,d as a,m as p,c as r,a as i,h as o,x as Te,f as at,b as Ue,a6 as ot,H as e,g as Le,y as De,I as st,q as Ne,o as je,B as Oe}from"../../chunks/vendor-57c99eaa.js";function lt(Qe){let u,U,z,t,E,v,R,M,D,Y,B,C,N,F,J,y,K,f,L,j,Q,V,O,W,X,Z,$,G,ee,te,c,ne,H,ae,oe,w,se,le,I,re,ie,k,ce,de,x,he,me,P,pe,fe,ue,S,ye,ge,g,_e,b,Ee,ve,_,A;return y=new Ce({props:{language:Ze,code:"npm install --save @nymphjs/tilmeld-client"}}),g=new Ce({props:{language:Je,code:`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
nymph.addEntityClass(User);
nymph.addEntityClass(Group);`}}),_=new Ce({props:{language:Je,code:`import { Nymph } from '@nymphjs/client';
import { User, Group } from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const UserClone = User.clone();
nymph.addEntityClass(UserClone);
const GroupClone = Group.clone();
nymph.addEntityClass(GroupClone);`}}),{c(){u=new et,U=Ke(),z=m(),t=l("section"),E=l("header"),v=l("h1"),R=n("Tilmeld Client"),M=m(),D=l("p"),Y=n(`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),B=m(),C=l("header"),N=l("h2"),F=n("Installation"),J=m(),$e(y.$$.fragment),K=m(),f=l("p"),L=n("You can find UMD in "),j=l("code"),Q=n("dist"),V=n(", or TS source in "),O=l("code"),W=n("src"),X=n("."),Z=m(),$=l("header"),G=l("h2"),ee=n("Usage"),te=m(),c=l("p"),ne=n("The Tilmeld client contains the client versions of the "),H=l("code"),ae=n("User"),oe=n(` and
    `),w=l("code"),se=n("Group"),le=n(`
    entities. It also contains helpers, `),I=l("code"),re=n("getClientConfig"),ie=n(`,
    `),k=l("code"),ce=n("login"),de=n(", "),x=l("code"),he=n("register"),me=n(", and "),P=l("code"),pe=n("checkUsername"),fe=n("."),ue=m(),S=l("p"),ye=n("Once you've initialized Nymph Client, set the User and Group classes on it."),ge=m(),$e(g.$$.fragment),_e=m(),b=l("p"),Ee=n(`If you're running more than one instance of Nymph client, you can clone the
    classes and add those instead. This will keep event listeners and Tilmeld
    client config separated.`),ve=m(),$e(_.$$.fragment),this.h()},l(d){const q=tt('[data-svelte="svelte-1baconj"]',document.head);u=nt(q),U=Ke(),q.forEach(a),z=p(d),t=r(d,"SECTION",{});var s=i(t);E=r(s,"HEADER",{class:!0});var Ge=i(E);v=r(Ge,"H1",{style:!0});var He=i(v);R=o(He,"Tilmeld Client"),He.forEach(a),Ge.forEach(a),M=p(s),D=r(s,"P",{});var we=i(D);Y=o(we,`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`),we.forEach(a),B=p(s),C=r(s,"HEADER",{class:!0});var Ie=i(C);N=r(Ie,"H2",{});var ke=i(N);F=o(ke,"Installation"),ke.forEach(a),Ie.forEach(a),J=p(s),Te(y.$$.fragment,s),K=p(s),f=r(s,"P",{});var T=i(f);L=o(T,"You can find UMD in "),j=r(T,"CODE",{});var xe=i(j);Q=o(xe,"dist"),xe.forEach(a),V=o(T,", or TS source in "),O=r(T,"CODE",{});var Pe=i(O);W=o(Pe,"src"),Pe.forEach(a),X=o(T,"."),T.forEach(a),Z=p(s),$=r(s,"HEADER",{class:!0});var Se=i($);G=r(Se,"H2",{});var be=i(G);ee=o(be,"Usage"),be.forEach(a),Se.forEach(a),te=p(s),c=r(s,"P",{});var h=i(c);ne=o(h,"The Tilmeld client contains the client versions of the "),H=r(h,"CODE",{});var qe=i(H);ae=o(qe,"User"),qe.forEach(a),oe=o(h,` and
    `),w=r(h,"CODE",{});var ze=i(w);se=o(ze,"Group"),ze.forEach(a),le=o(h,`
    entities. It also contains helpers, `),I=r(h,"CODE",{});var Ae=i(I);re=o(Ae,"getClientConfig"),Ae.forEach(a),ie=o(h,`,
    `),k=r(h,"CODE",{});var Re=i(k);ce=o(Re,"login"),Re.forEach(a),de=o(h,", "),x=r(h,"CODE",{});var Me=i(x);he=o(Me,"register"),Me.forEach(a),me=o(h,", and "),P=r(h,"CODE",{});var Ye=i(P);pe=o(Ye,"checkUsername"),Ye.forEach(a),fe=o(h,"."),h.forEach(a),ue=p(s),S=r(s,"P",{});var Be=i(S);ye=o(Be,"Once you've initialized Nymph Client, set the User and Group classes on it."),Be.forEach(a),ge=p(s),Te(g.$$.fragment,s),_e=p(s),b=r(s,"P",{});var Fe=i(b);Ee=o(Fe,`If you're running more than one instance of Nymph client, you can clone the
    classes and add those instead. This will keep event listeners and Tilmeld
    client config separated.`),Fe.forEach(a),ve=p(s),Te(_.$$.fragment,s),s.forEach(a),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",u.a=U,at(v,"font-size","3em"),Ue(E,"class","major"),Ue(C,"class","major"),Ue($,"class","major")},m(d,q){u.m(ot,document.head),e(document.head,U),Le(d,z,q),Le(d,t,q),e(t,E),e(E,v),e(v,R),e(t,M),e(t,D),e(D,Y),e(t,B),e(t,C),e(C,N),e(N,F),e(t,J),De(y,t,null),e(t,K),e(t,f),e(f,L),e(f,j),e(j,Q),e(f,V),e(f,O),e(O,W),e(f,X),e(t,Z),e(t,$),e($,G),e(G,ee),e(t,te),e(t,c),e(c,ne),e(c,H),e(H,ae),e(c,oe),e(c,w),e(w,se),e(c,le),e(c,I),e(I,re),e(c,ie),e(c,k),e(k,ce),e(c,de),e(c,x),e(x,he),e(c,me),e(c,P),e(P,pe),e(c,fe),e(t,ue),e(t,S),e(S,ye),e(t,ge),De(g,t,null),e(t,_e),e(t,b),e(b,Ee),e(t,ve),De(_,t,null),A=!0},p:st,i(d){A||(Ne(y.$$.fragment,d),Ne(g.$$.fragment,d),Ne(_.$$.fragment,d),A=!0)},o(d){je(y.$$.fragment,d),je(g.$$.fragment,d),je(_.$$.fragment,d),A=!1},d(d){a(U),d&&u.d(),d&&a(z),d&&a(t),Oe(y),Oe(g),Oe(_)}}}class it extends Ve{constructor(u){super();We(this,u,null,lt,Xe,{})}}export{it as default};
