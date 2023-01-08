import{S as re,i as se,s as oe,R as ne,e as L,a as m,k as o,q as $,w as M,E as ie,T as le,h as s,c as p,l as n,m as i,r as P,x as Q,p as ce,n as U,C as e,b as V,y as W,B as he,f as X,t as Z,z as ee}from"../../../../chunks/index-8e853c83.js";import{H as te,g as me}from"../../../../chunks/github-07e092b5.js";import{b as pe}from"../../../../chunks/bash-2b754df6.js";import{t as ge}from"../../../../chunks/typescript-7dd1ec19.js";function de(ae){let l,u,H,t,g,d,j,N,_,x,T,y,w,O,A,c,C,f,E,R,D,b,F,I,h,S;return c=new te({props:{language:pe,code:"npm install --save @nymphjs/sorter"}}),h=new te({props:{language:ge,code:`import { Nymph } from '@nymphjs/nymph';
// or
import { Nymph } from '@nymphjs/client';
import Page from 'Page';

import { Sorter } from '@nymphjs/sorter';

const nymphOptions = {
  // the options for your Nymph instance.
};
const nymph = new Nymph(nymphOptions);
nymph.addEntityClass(Page);

let pages = await nymph.getEntities({ class: Page });

const sorter = new Sorter(pages);

//
// ## Simple sort by some property.
//

sorter.sort('name');
// Pages are now sorted by name, with locale aware sorting.
console.log(pages);

sorter.sort('cdate');
// Pages are now sorted by creation date.
console.log(pages);

sorter.sort('cdate', { reverse: true });
// Pages are now sorted by creation date, newest first.
console.log(pages);

// Specifying your own comparator.
sorter.sort('name', { comparator: (a, b) => (a < b ? -1 : a > b ? 1 : 0) });
// Pages are now sorted by name, based on UTF-16 code points.
console.log(pages);

// Specifying options to the collator.
sorter.sort('name', {
  collatorOptions: {
    sensitivity: 'case',
    caseFirst: 'upper',
    numeric: true,
  },
});
// Pages are now sorted by name, with uppercase coming first in case of
// otherwise identical entries, and numbers being sorted logically (2 < 10).
console.log(pages);

//
// ## Hierarchical sorting.
//

sorter.hsort('name', 'parent');
// Pages are now sorted by name, hierarchically. (All child pages come
// immediately after their parent.)
console.log(pages);

// You can specify the same options as before.
sorter.hsort('name', 'parent', {
  collatorOptions: {
    sensitivity: 'case',
    caseFirst: 'upper',
    numeric: true,
  },
});
// Pages are now sorted by name, hierarchically, with uppercase coming first
// in case of otherwise identical entries, and numbers being sorted
// logically (2 < 10).
console.log(pages);`}}),{c(){l=new ne(!1),u=L(),H=m(),t=o("section"),g=o("header"),d=o("h1"),j=$("Entity Sorter"),N=m(),_=o("p"),x=$(`The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.`),T=m(),y=o("header"),w=o("h2"),O=$("Installation"),A=m(),M(c.$$.fragment),C=m(),f=o("header"),E=o("h2"),R=$("Usage"),D=m(),b=o("p"),F=$("Here's an overview:"),I=m(),M(h.$$.fragment),this.h()},l(a){const v=ie("svelte-1wc9pbr",document.head);l=le(v,!1),u=L(),v.forEach(s),H=p(a),t=n(a,"SECTION",{});var r=i(t);g=n(r,"HEADER",{class:!0});var k=i(g);d=n(k,"H1",{style:!0});var q=i(d);j=P(q,"Entity Sorter"),q.forEach(s),k.forEach(s),N=p(r),_=n(r,"P",{});var z=i(_);x=P(z,`The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.`),z.forEach(s),T=p(r),y=n(r,"HEADER",{class:!0});var B=i(y);w=n(B,"H2",{});var Y=i(w);O=P(Y,"Installation"),Y.forEach(s),B.forEach(s),A=p(r),Q(c.$$.fragment,r),C=p(r),f=n(r,"HEADER",{class:!0});var G=i(f);E=n(G,"H2",{});var J=i(E);R=P(J,"Usage"),J.forEach(s),G.forEach(s),D=p(r),b=n(r,"P",{});var K=i(b);F=P(K,"Here's an overview:"),K.forEach(s),I=p(r),Q(h.$$.fragment,r),r.forEach(s),this.h()},h(){document.title="Entity Sorter - Packages - Nymph.js",l.a=u,ce(d,"font-size","3em"),U(g,"class","major"),U(y,"class","major"),U(f,"class","major")},m(a,v){l.m(me,document.head),e(document.head,u),V(a,H,v),V(a,t,v),e(t,g),e(g,d),e(d,j),e(t,N),e(t,_),e(_,x),e(t,T),e(t,y),e(y,w),e(w,O),e(t,A),W(c,t,null),e(t,C),e(t,f),e(f,E),e(E,R),e(t,D),e(t,b),e(b,F),e(t,I),W(h,t,null),S=!0},p:he,i(a){S||(X(c.$$.fragment,a),X(h.$$.fragment,a),S=!0)},o(a){Z(c.$$.fragment,a),Z(h.$$.fragment,a),S=!1},d(a){s(u),a&&l.d(),a&&s(H),a&&s(t),ee(c),ee(h)}}}class we extends re{constructor(l){super(),se(this,l,null,de,oe,{})}}export{we as default};
