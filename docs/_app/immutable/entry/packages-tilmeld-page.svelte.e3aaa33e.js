import{S as Te,i as $e,s as we,R as ke,e as me,a as l,k as r,q as h,y as de,F as He,T as je,h as s,c,l as n,m as i,r as m,z as pe,p as Ne,n as v,C as e,b as fe,A as ue,D as be,g as ge,d as ve,B as _e}from"../chunks/index.2f30a1c2.js";import{H as ye,g as Re}from"../chunks/github.8af4b809.js";import{b as Se}from"../chunks/bash.2b754df6.js";import{t as Ie}from"../chunks/typescript.7dd1ec19.js";function De(Ee){let p,w,I,t,_,y,A,x,k,z,U,E,H,C,q,f,F,T,j,G,O,N,L,Q,b,W,X,u,Y,$,R,B,M,g,J,d,K,V,D;return f=new ye({props:{language:Se,code:"npm install --save @nymphjs/tilmeld"}}),u=new ye({props:{language:Ie,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
const { User, Group } = tilmeld;`}}),{c(){p=new ke(!1),w=me(),I=l(),t=r("section"),_=r("header"),y=r("h1"),A=h("Tilmeld"),x=l(),k=r("p"),z=h(`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),U=l(),E=r("header"),H=r("h2"),C=h("Installation"),q=l(),de(f.$$.fragment),F=l(),T=r("header"),j=r("h2"),G=h("Usage"),O=l(),N=r("p"),L=h(`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),Q=l(),b=r("p"),W=h("Here's an overview."),X=l(),de(u.$$.fragment),Y=l(),$=r("header"),R=r("h2"),B=h("Options"),M=l(),g=r("p"),J=h("See the "),d=r("a"),K=h("config declaration file"),V=h("."),this.h()},l(o){const S=He("svelte-u4tysy",document.head);p=je(S,!1),w=me(),S.forEach(s),I=c(o),t=n(o,"SECTION",{});var a=i(t);_=n(a,"HEADER",{class:!0});var Z=i(_);y=n(Z,"H1",{style:!0});var ee=i(y);A=m(ee,"Tilmeld"),ee.forEach(s),Z.forEach(s),x=c(a),k=n(a,"P",{});var te=i(k);z=m(te,`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),te.forEach(s),U=c(a),E=n(a,"HEADER",{class:!0});var ae=i(E);H=n(ae,"H2",{});var se=i(H);C=m(se,"Installation"),se.forEach(s),ae.forEach(s),q=c(a),pe(f.$$.fragment,a),F=c(a),T=n(a,"HEADER",{class:!0});var oe=i(T);j=n(oe,"H2",{});var re=i(j);G=m(re,"Usage"),re.forEach(s),oe.forEach(s),O=c(a),N=n(a,"P",{});var ne=i(N);L=m(ne,`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),ne.forEach(s),Q=c(a),b=n(a,"P",{});var ie=i(b);W=m(ie,"Here's an overview."),ie.forEach(s),X=c(a),pe(u.$$.fragment,a),Y=c(a),$=n(a,"HEADER",{class:!0});var le=i($);R=n(le,"H2",{});var he=i(R);B=m(he,"Options"),he.forEach(s),le.forEach(s),M=c(a),g=n(a,"P",{});var P=i(g);J=m(P,"See the "),d=n(P,"A",{href:!0,target:!0,rel:!0});var ce=i(d);K=m(ce,"config declaration file"),ce.forEach(s),V=m(P,"."),P.forEach(s),a.forEach(s),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",p.a=w,Ne(y,"font-size","3em"),v(_,"class","major"),v(E,"class","major"),v(T,"class","major"),v($,"class","major"),v(d,"href","https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"),v(d,"target","_blank"),v(d,"rel","external")},m(o,S){p.m(Re,document.head),e(document.head,w),fe(o,I,S),fe(o,t,S),e(t,_),e(_,y),e(y,A),e(t,x),e(t,k),e(k,z),e(t,U),e(t,E),e(E,H),e(H,C),e(t,q),ue(f,t,null),e(t,F),e(t,T),e(T,j),e(j,G),e(t,O),e(t,N),e(N,L),e(t,Q),e(t,b),e(b,W),e(t,X),ue(u,t,null),e(t,Y),e(t,$),e($,R),e(R,B),e(t,M),e(t,g),e(g,J),e(g,d),e(d,K),e(g,V),D=!0},p:be,i(o){D||(ge(f.$$.fragment,o),ge(u.$$.fragment,o),D=!0)},o(o){ve(f.$$.fragment,o),ve(u.$$.fragment,o),D=!1},d(o){s(w),o&&p.d(),o&&s(I),o&&s(t),_e(f),_e(u)}}}class Ue extends Te{constructor(p){super(),$e(this,p,null,De,we,{})}}export{Ue as default};
