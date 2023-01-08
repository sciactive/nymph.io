import{S as ne,i as se,s as re,R as oe,e as K,a as d,k as r,q as $,w as M,E as ie,T as le,h as s,c as m,l as o,m as i,r as w,x as V,p as he,n as P,C as e,b as W,y as X,B as ce,f as Y,t as Z,z as ee}from"../../../../chunks/index-8e853c83.js";import{H as ae,g as de}from"../../../../chunks/github-07e092b5.js";import{b as me}from"../../../../chunks/bash-2b754df6.js";import{t as fe}from"../../../../chunks/typescript-7dd1ec19.js";function ue(te){let l,_,x,a,f,u,U,D,b,G,S,g,y,k,q,h,H,p,E,j,C,I,A,N,c,v;return h=new ae({props:{language:me,code:"npm install --save @nymphjs/guid"}}),c=new ae({props:{language:fe,code:`import {
  guid,
  makeTableSuffix,
  humanSecret,
  nanoid,
  customAlphabet,
} from '@nymphjs/guid';

// This generates a GUID. It will be 24 characters long, and the first four
// characters will be the same during a whole week. (This helps make DB index
// paging more efficient.)
const myGuid = guid();

// This can be used as a table suffix in SQL queries. It will be 20 characters
// long and alphanumeric.
const myTableSuffix = makeTableSuffix();

// This will be a human readable secret code. It will be 10 characters long and
// use the nolookalikesSafe dictionary from nanoid-dictionary.
const mySecretCode = humanSecret();

// This is the nanoid library's main export. It is exported in commonjs format.
const id = nanoid();

// This is the nanoid library's customAlphabet export.
const customId = customAlphabet('abc', 20)();`}}),{c(){l=new oe(!1),_=K(),x=d(),a=r("section"),f=r("header"),u=r("h1"),U=$("GUID / Unique Code Generator"),D=d(),b=r("p"),G=$(`The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.`),S=d(),g=r("header"),y=r("h2"),k=$("Installation"),q=d(),M(h.$$.fragment),H=d(),p=r("header"),E=r("h2"),j=$("Usage"),C=d(),I=r("p"),A=$("There are a few functions for generating different kinds of strings."),N=d(),M(c.$$.fragment),this.h()},l(t){const T=ie("svelte-p5hhxe",document.head);l=le(T,!1),_=K(),T.forEach(s),x=m(t),a=o(t,"SECTION",{});var n=i(a);f=o(n,"HEADER",{class:!0});var R=i(f);u=o(R,"H1",{style:!0});var z=i(u);U=w(z,"GUID / Unique Code Generator"),z.forEach(s),R.forEach(s),D=m(n),b=o(n,"P",{});var B=i(b);G=w(B,`The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.`),B.forEach(s),S=m(n),g=o(n,"HEADER",{class:!0});var L=i(g);y=o(L,"H2",{});var O=i(y);k=w(O,"Installation"),O.forEach(s),L.forEach(s),q=m(n),V(h.$$.fragment,n),H=m(n),p=o(n,"HEADER",{class:!0});var Q=i(p);E=o(Q,"H2",{});var F=i(E);j=w(F,"Usage"),F.forEach(s),Q.forEach(s),C=m(n),I=o(n,"P",{});var J=i(I);A=w(J,"There are a few functions for generating different kinds of strings."),J.forEach(s),N=m(n),V(c.$$.fragment,n),n.forEach(s),this.h()},h(){document.title="GUID / Unique Code Generator - Packages - Nymph.js",l.a=_,he(u,"font-size","3em"),P(f,"class","major"),P(g,"class","major"),P(p,"class","major")},m(t,T){l.m(de,document.head),e(document.head,_),W(t,x,T),W(t,a,T),e(a,f),e(f,u),e(u,U),e(a,D),e(a,b),e(b,G),e(a,S),e(a,g),e(g,y),e(y,k),e(a,q),X(h,a,null),e(a,H),e(a,p),e(p,E),e(E,j),e(a,C),e(a,I),e(I,A),e(a,N),X(c,a,null),v=!0},p:ce,i(t){v||(Y(h.$$.fragment,t),Y(c.$$.fragment,t),v=!0)},o(t){Z(h.$$.fragment,t),Z(c.$$.fragment,t),v=!1},d(t){s(_),t&&l.d(),t&&s(x),t&&s(a),ee(h),ee(c)}}}class ye extends ne{constructor(l){super(),se(this,l,null,ue,re,{})}}export{ye as default};
