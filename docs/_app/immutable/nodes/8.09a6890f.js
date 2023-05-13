import{S as ne,i as se,s as re,R as oe,e as K,a as d,k as r,q as $,y as M,F as ie,T as le,h as s,c as m,l as o,m as i,r as v,z as V,p as he,n as P,C as e,b as W,A as X,D as ce,g as Y,d as Z,B as ee}from"../chunks/index.d7cc8d8b.js";import{H as ae,g as de}from"../chunks/github.df9008b1.js";import{b as me}from"../chunks/bash.2b754df6.js";import{t as ue}from"../chunks/typescript.7dd1ec19.js";import"../chunks/paths.3059cfc3.js";function fe(te){let l,_,w,a,u,f,D,U,b,G,S,p,y,k,q,h,H,g,E,j,A,I,C,N,c,x;return h=new ae({props:{language:me,code:"npm install --save @nymphjs/guid"}}),c=new ae({props:{language:ue,code:`import {
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
const customId = customAlphabet('abc', 20)();`}}),{c(){l=new oe(!1),_=K(),w=d(),a=r("section"),u=r("header"),f=r("h1"),D=$("GUID / Unique Code Generator"),U=d(),b=r("p"),G=$(`The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.`),S=d(),p=r("header"),y=r("h2"),k=$("Installation"),q=d(),M(h.$$.fragment),H=d(),g=r("header"),E=r("h2"),j=$("Usage"),A=d(),I=r("p"),C=$("There are a few functions for generating different kinds of strings."),N=d(),M(c.$$.fragment),this.h()},l(t){const T=ie("svelte-p5hhxe",document.head);l=le(T,!1),_=K(),T.forEach(s),w=m(t),a=o(t,"SECTION",{});var n=i(a);u=o(n,"HEADER",{class:!0});var R=i(u);f=o(R,"H1",{style:!0});var z=i(f);D=v(z,"GUID / Unique Code Generator"),z.forEach(s),R.forEach(s),U=m(n),b=o(n,"P",{});var B=i(b);G=v(B,`The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.`),B.forEach(s),S=m(n),p=o(n,"HEADER",{class:!0});var F=i(p);y=o(F,"H2",{});var L=i(y);k=v(L,"Installation"),L.forEach(s),F.forEach(s),q=m(n),V(h.$$.fragment,n),H=m(n),g=o(n,"HEADER",{class:!0});var O=i(g);E=o(O,"H2",{});var Q=i(E);j=v(Q,"Usage"),Q.forEach(s),O.forEach(s),A=m(n),I=o(n,"P",{});var J=i(I);C=v(J,"There are a few functions for generating different kinds of strings."),J.forEach(s),N=m(n),V(c.$$.fragment,n),n.forEach(s),this.h()},h(){document.title="GUID / Unique Code Generator - Packages - Nymph.js",l.a=_,he(f,"font-size","3em"),P(u,"class","major"),P(p,"class","major"),P(g,"class","major")},m(t,T){l.m(de,document.head),e(document.head,_),W(t,w,T),W(t,a,T),e(a,u),e(u,f),e(f,D),e(a,U),e(a,b),e(b,G),e(a,S),e(a,p),e(p,y),e(y,k),e(a,q),X(h,a,null),e(a,H),e(a,g),e(g,E),e(E,j),e(a,A),e(a,I),e(I,C),e(a,N),X(c,a,null),x=!0},p:ce,i(t){x||(Y(h.$$.fragment,t),Y(c.$$.fragment,t),x=!0)},o(t){Z(h.$$.fragment,t),Z(c.$$.fragment,t),x=!1},d(t){s(_),t&&l.d(),t&&s(w),t&&s(a),ee(h),ee(c)}}}class Ee extends ne{constructor(l){super(),se(this,l,null,fe,re,{})}}export{Ee as component};
