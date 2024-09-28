import{s as J,I as O,e as U,a as m,f,x as Q,J as F,d as x,c,g as p,h as K,r as b,j,u as n,i as L,v as V}from"../chunks/scheduler.d7e45cc8.js";import{S as W,i as X,b as q,d as A,m as M,a as P,t as N,e as R}from"../chunks/index.77720afb.js";import{H as z,g as Y}from"../chunks/github.64534d2c.js";import{b as Z}from"../chunks/bash.7e4226ac.js";import{t as ee}from"../chunks/typescript.09c48802.js";function te(B){let s,g,T,e,r,S='<h1 style="font-size: 3em;">GUID / Unique Code Generator</h1>',v,d,D=`The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.`,$,o,E="<h2>Installation</h2>",w,i,C,l,k="<h2>Usage</h2>",H,u,G="There are a few functions for generating different kinds of strings.",I,h,y;return i=new z({props:{language:Z,code:"npm install --save @nymphjs/guid"}}),h=new z({props:{language:ee,code:`import {
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
const customId = customAlphabet('abc', 20)();`}}),{c(){s=new O(!1),g=U(),T=m(),e=f("section"),r=f("header"),r.innerHTML=S,v=m(),d=f("p"),d.textContent=D,$=m(),o=f("header"),o.innerHTML=E,w=m(),q(i.$$.fragment),C=m(),l=f("header"),l.innerHTML=k,H=m(),u=f("p"),u.textContent=G,I=m(),q(h.$$.fragment),this.h()},l(a){const _=Q("svelte-p5hhxe",document.head);s=F(_,!1),g=U(),_.forEach(x),T=c(a),e=p(a,"SECTION",{});var t=K(e);r=p(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-e0a8jf"&&(r.innerHTML=S),v=c(t),d=p(t,"P",{"data-svelte-h":!0}),b(d)!=="svelte-1xcs6hj"&&(d.textContent=D),$=c(t),o=p(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-1hx9pnb"&&(o.innerHTML=E),w=c(t),A(i.$$.fragment,t),C=c(t),l=p(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-n87w0o"&&(l.innerHTML=k),H=c(t),u=p(t,"P",{"data-svelte-h":!0}),b(u)!=="svelte-ng0n9w"&&(u.textContent=G),I=c(t),A(h.$$.fragment,t),t.forEach(x),this.h()},h(){document.title="GUID / Unique Code Generator - Packages - Nymph.js",s.a=g,j(r,"class","major"),j(o,"class","major"),j(l,"class","major")},m(a,_){s.m(Y,document.head),n(document.head,g),L(a,T,_),L(a,e,_),n(e,r),n(e,v),n(e,d),n(e,$),n(e,o),n(e,w),M(i,e,null),n(e,C),n(e,l),n(e,H),n(e,u),n(e,I),M(h,e,null),y=!0},p:V,i(a){y||(P(i.$$.fragment,a),P(h.$$.fragment,a),y=!0)},o(a){N(i.$$.fragment,a),N(h.$$.fragment,a),y=!1},d(a){a&&(s.d(),x(T),x(e)),x(g),R(i),R(h)}}}class ie extends W{constructor(s){super(),X(this,s,null,te,J,{})}}export{ie as component};
