import{S as we,i as Te,s as $e,a2 as me,a7 as ke,a3 as He,a4 as je,l as de,k as l,e as o,t as h,w as pe,N as Ne,a5 as Ie,d as s,m as c,c as r,a as i,h as m,x as fe,f as Se,b as v,a6 as be,H as e,g as ue,y as ge,I as Re,q as ve,o as _e,B as ye}from"../../chunks/vendor-57c99eaa.js";function xe(Ee){let p,$,R,t,_,y,P,A,k,U,z,E,H,q,C,f,G,w,j,O,F,N,L,Q,I,W,X,u,Y,T,S,B,M,g,J,d,K,V,x;return f=new me({props:{language:ke,code:"npm install --save @nymphjs/tilmeld"}}),u=new me({props:{language:He,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
const { User, Group } = tilmeld;`}}),{c(){p=new je,$=de(),R=l(),t=o("section"),_=o("header"),y=o("h1"),P=h("Tilmeld"),A=l(),k=o("p"),U=h(`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),z=l(),E=o("header"),H=o("h2"),q=h("Installation"),C=l(),pe(f.$$.fragment),G=l(),w=o("header"),j=o("h2"),O=h("Usage"),F=l(),N=o("p"),L=h(`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),Q=l(),I=o("p"),W=h("Here's an overview."),X=l(),pe(u.$$.fragment),Y=l(),T=o("header"),S=o("h2"),B=h("Options"),M=l(),g=o("p"),J=h("See the "),d=o("a"),K=h("config declaration file"),V=h("."),this.h()},l(n){const b=Ne('[data-svelte="svelte-u4tysy"]',document.head);p=Ie(b),$=de(),b.forEach(s),R=c(n),t=r(n,"SECTION",{});var a=i(t);_=r(a,"HEADER",{class:!0});var Z=i(_);y=r(Z,"H1",{style:!0});var ee=i(y);P=m(ee,"Tilmeld"),ee.forEach(s),Z.forEach(s),A=c(a),k=r(a,"P",{});var te=i(k);U=m(te,`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),te.forEach(s),z=c(a),E=r(a,"HEADER",{class:!0});var ae=i(E);H=r(ae,"H2",{});var se=i(H);q=m(se,"Installation"),se.forEach(s),ae.forEach(s),C=c(a),fe(f.$$.fragment,a),G=c(a),w=r(a,"HEADER",{class:!0});var ne=i(w);j=r(ne,"H2",{});var oe=i(j);O=m(oe,"Usage"),oe.forEach(s),ne.forEach(s),F=c(a),N=r(a,"P",{});var re=i(N);L=m(re,`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),re.forEach(s),Q=c(a),I=r(a,"P",{});var ie=i(I);W=m(ie,"Here's an overview."),ie.forEach(s),X=c(a),fe(u.$$.fragment,a),Y=c(a),T=r(a,"HEADER",{class:!0});var le=i(T);S=r(le,"H2",{});var he=i(S);B=m(he,"Options"),he.forEach(s),le.forEach(s),M=c(a),g=r(a,"P",{});var D=i(g);J=m(D,"See the "),d=r(D,"A",{href:!0,target:!0,rel:!0});var ce=i(d);K=m(ce,"config declaration file"),ce.forEach(s),V=m(D,"."),D.forEach(s),a.forEach(s),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",p.a=$,Se(y,"font-size","3em"),v(_,"class","major"),v(E,"class","major"),v(w,"class","major"),v(T,"class","major"),v(d,"href","https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"),v(d,"target","_blank"),v(d,"rel","external")},m(n,b){p.m(be,document.head),e(document.head,$),ue(n,R,b),ue(n,t,b),e(t,_),e(_,y),e(y,P),e(t,A),e(t,k),e(k,U),e(t,z),e(t,E),e(E,H),e(H,q),e(t,C),ge(f,t,null),e(t,G),e(t,w),e(w,j),e(j,O),e(t,F),e(t,N),e(N,L),e(t,Q),e(t,I),e(I,W),e(t,X),ge(u,t,null),e(t,Y),e(t,T),e(T,S),e(S,B),e(t,M),e(t,g),e(g,J),e(g,d),e(d,K),e(g,V),x=!0},p:Re,i(n){x||(ve(f.$$.fragment,n),ve(u.$$.fragment,n),x=!0)},o(n){_e(f.$$.fragment,n),_e(u.$$.fragment,n),x=!1},d(n){s($),n&&p.d(),n&&s(R),n&&s(t),ye(f),ye(u)}}}class Pe extends we{constructor(p){super();Te(this,p,null,xe,$e,{})}}export{Pe as default};
