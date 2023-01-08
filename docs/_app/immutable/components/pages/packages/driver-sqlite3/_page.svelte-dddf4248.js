import{S as _e,i as ye,s as ve,R as Ee,e as ie,a as l,k as n,q as h,w as le,E as Se,T as $e,h as r,c,l as o,m as i,r as m,x as he,p as be,n as _,C as e,b as ce,y as me,B as He,f as de,t as pe,z as fe}from"../../../../chunks/index-8e853c83.js";import{H as ue,g as Le}from"../../../../chunks/github-07e092b5.js";import{b as Qe}from"../../../../chunks/bash-2b754df6.js";import{t as je}from"../../../../chunks/typescript-7dd1ec19.js";function qe(ge){let p,b,N,t,y,v,T,A,H,C,P,E,L,R,k,f,I,S,Q,O,z,j,U,B,u,F,$,q,G,J,g,K,d,M,V,w;return f=new ue({props:{language:Qe,code:"npm install --save @nymphjs/driver-sqlite3"}}),u=new ue({props:{language:je,code:`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}}),{c(){p=new Ee(!1),b=ie(),N=l(),t=n("section"),y=n("header"),v=n("h1"),T=h("SQLite3 Driver"),A=l(),H=n("p"),C=h(`The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.`),P=l(),E=n("header"),L=n("h2"),R=h("Installation"),k=l(),le(f.$$.fragment),I=l(),S=n("header"),Q=n("h2"),O=h("Usage"),z=l(),j=n("p"),U=h(`Supply an instance of this driver with its configuration to Nymph's
    constructor.`),B=l(),le(u.$$.fragment),F=l(),$=n("header"),q=n("h2"),G=h("Options"),J=l(),g=n("p"),K=h("See the "),d=n("a"),M=h("config declaration file"),V=h("."),this.h()},l(s){const D=Se("svelte-iu1j96",document.head);p=$e(D,!1),b=ie(),D.forEach(r),N=c(s),t=o(s,"SECTION",{});var a=i(t);y=o(a,"HEADER",{class:!0});var W=i(y);v=o(W,"H1",{style:!0});var X=i(v);T=m(X,"SQLite3 Driver"),X.forEach(r),W.forEach(r),A=c(a),H=o(a,"P",{});var Y=i(H);C=m(Y,`The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.`),Y.forEach(r),P=c(a),E=o(a,"HEADER",{class:!0});var Z=i(E);L=o(Z,"H2",{});var ee=i(L);R=m(ee,"Installation"),ee.forEach(r),Z.forEach(r),k=c(a),he(f.$$.fragment,a),I=c(a),S=o(a,"HEADER",{class:!0});var te=i(S);Q=o(te,"H2",{});var ae=i(Q);O=m(ae,"Usage"),ae.forEach(r),te.forEach(r),z=c(a),j=o(a,"P",{});var re=i(j);U=m(re,`Supply an instance of this driver with its configuration to Nymph's
    constructor.`),re.forEach(r),B=c(a),he(u.$$.fragment,a),F=c(a),$=o(a,"HEADER",{class:!0});var se=i($);q=o(se,"H2",{});var ne=i(q);G=m(ne,"Options"),ne.forEach(r),se.forEach(r),J=c(a),g=o(a,"P",{});var x=i(g);K=m(x,"See the "),d=o(x,"A",{href:!0,target:!0,rel:!0});var oe=i(d);M=m(oe,"config declaration file"),oe.forEach(r),V=m(x,"."),x.forEach(r),a.forEach(r),this.h()},h(){document.title="SQLite3 Driver - Packages - Nymph.js",p.a=b,be(v,"font-size","3em"),_(y,"class","major"),_(E,"class","major"),_(S,"class","major"),_($,"class","major"),_(d,"href","https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3/src/conf/d.ts"),_(d,"target","_blank"),_(d,"rel","external")},m(s,D){p.m(Le,document.head),e(document.head,b),ce(s,N,D),ce(s,t,D),e(t,y),e(y,v),e(v,T),e(t,A),e(t,H),e(H,C),e(t,P),e(t,E),e(E,L),e(L,R),e(t,k),me(f,t,null),e(t,I),e(t,S),e(S,Q),e(Q,O),e(t,z),e(t,j),e(j,U),e(t,B),me(u,t,null),e(t,F),e(t,$),e($,q),e(q,G),e(t,J),e(t,g),e(g,K),e(g,d),e(d,M),e(g,V),w=!0},p:He,i(s){w||(de(f.$$.fragment,s),de(u.$$.fragment,s),w=!0)},o(s){pe(f.$$.fragment,s),pe(u.$$.fragment,s),w=!1},d(s){r(b),s&&p.d(),s&&r(N),s&&r(t),fe(f),fe(u)}}}class Te extends _e{constructor(p){super(),ye(this,p,null,qe,ve,{})}}export{Te as default};
