import{S as we,i as Te,s as $e,R as ke,e as me,a as l,k as r,q as h,w as de,E as He,T as je,h as s,c,l as n,m as i,r as m,x as pe,p as Ne,n as v,C as e,b as fe,y as ue,B as be,f as ge,t as ve,z as _e}from"../../../../chunks/index-8e853c83.js";import{H as ye,g as Re}from"../../../../chunks/github-07e092b5.js";import{b as Se}from"../../../../chunks/bash-2b754df6.js";import{t as Ie}from"../../../../chunks/typescript-7dd1ec19.js";function Pe(Ee){let p,$,I,t,_,y,D,z,k,A,U,E,H,C,q,f,G,w,j,O,F,N,L,Q,b,W,X,u,Y,T,R,B,M,g,J,d,K,V,P;return f=new ye({props:{language:Se,code:"npm install --save @nymphjs/tilmeld"}}),u=new ye({props:{language:Ie,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
const { User, Group } = tilmeld;`}}),{c(){p=new ke(!1),$=me(),I=l(),t=r("section"),_=r("header"),y=r("h1"),D=h("Tilmeld"),z=l(),k=r("p"),A=h(`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),U=l(),E=r("header"),H=r("h2"),C=h("Installation"),q=l(),de(f.$$.fragment),G=l(),w=r("header"),j=r("h2"),O=h("Usage"),F=l(),N=r("p"),L=h(`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),Q=l(),b=r("p"),W=h("Here's an overview."),X=l(),de(u.$$.fragment),Y=l(),T=r("header"),R=r("h2"),B=h("Options"),M=l(),g=r("p"),J=h("See the "),d=r("a"),K=h("config declaration file"),V=h("."),this.h()},l(o){const S=He("svelte-u4tysy",document.head);p=je(S,!1),$=me(),S.forEach(s),I=c(o),t=n(o,"SECTION",{});var a=i(t);_=n(a,"HEADER",{class:!0});var Z=i(_);y=n(Z,"H1",{style:!0});var ee=i(y);D=m(ee,"Tilmeld"),ee.forEach(s),Z.forEach(s),z=c(a),k=n(a,"P",{});var te=i(k);A=m(te,`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`),te.forEach(s),U=c(a),E=n(a,"HEADER",{class:!0});var ae=i(E);H=n(ae,"H2",{});var se=i(H);C=m(se,"Installation"),se.forEach(s),ae.forEach(s),q=c(a),pe(f.$$.fragment,a),G=c(a),w=n(a,"HEADER",{class:!0});var oe=i(w);j=n(oe,"H2",{});var re=i(j);O=m(re,"Usage"),re.forEach(s),oe.forEach(s),F=c(a),N=n(a,"P",{});var ne=i(N);L=m(ne,`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`),ne.forEach(s),Q=c(a),b=n(a,"P",{});var ie=i(b);W=m(ie,"Here's an overview."),ie.forEach(s),X=c(a),pe(u.$$.fragment,a),Y=c(a),T=n(a,"HEADER",{class:!0});var le=i(T);R=n(le,"H2",{});var he=i(R);B=m(he,"Options"),he.forEach(s),le.forEach(s),M=c(a),g=n(a,"P",{});var x=i(g);J=m(x,"See the "),d=n(x,"A",{href:!0,target:!0,rel:!0});var ce=i(d);K=m(ce,"config declaration file"),ce.forEach(s),V=m(x,"."),x.forEach(s),a.forEach(s),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",p.a=$,Ne(y,"font-size","3em"),v(_,"class","major"),v(E,"class","major"),v(w,"class","major"),v(T,"class","major"),v(d,"href","https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts"),v(d,"target","_blank"),v(d,"rel","external")},m(o,S){p.m(Re,document.head),e(document.head,$),fe(o,I,S),fe(o,t,S),e(t,_),e(_,y),e(y,D),e(t,z),e(t,k),e(k,A),e(t,U),e(t,E),e(E,H),e(H,C),e(t,q),ue(f,t,null),e(t,G),e(t,w),e(w,j),e(j,O),e(t,F),e(t,N),e(N,L),e(t,Q),e(t,b),e(b,W),e(t,X),ue(u,t,null),e(t,Y),e(t,T),e(T,R),e(R,B),e(t,M),e(t,g),e(g,J),e(g,d),e(d,K),e(g,V),P=!0},p:be,i(o){P||(ge(f.$$.fragment,o),ge(u.$$.fragment,o),P=!0)},o(o){ve(f.$$.fragment,o),ve(u.$$.fragment,o),P=!1},d(o){s($),o&&p.d(),o&&s(I),o&&s(t),_e(f),_e(u)}}}class Ue extends we{constructor(p){super(),Te(this,p,null,Pe,$e,{})}}export{Ue as default};
