import{S as re,i as se,s as oe,a2 as L,a7 as ne,a3 as ie,a4 as le,l as M,k as p,e as o,t as $,w as Q,N as ce,a5 as he,d as s,m,c as n,a as i,h as P,x as V,f as pe,b as F,a6 as me,H as e,g as W,y as X,I as de,q as Z,o as ee,B as te}from"../../chunks/vendor-57c99eaa.js";function ge(ae){let l,f,S,t,d,g,j,N,_,x,O,y,w,T,A,c,I,u,E,k,q,b,C,D,h,H;return c=new L({props:{language:ne,code:"npm install --save @nymphjs/sorter"}}),h=new L({props:{language:ie,code:`import { Nymph } from '@nymphjs/nymph';
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
console.log(pages);`}}),{c(){l=new le,f=M(),S=p(),t=o("section"),d=o("header"),g=o("h1"),j=$("Entity Sorter"),N=p(),_=o("p"),x=$(`The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.`),O=p(),y=o("header"),w=o("h2"),T=$("Installation"),A=p(),Q(c.$$.fragment),I=p(),u=o("header"),E=o("h2"),k=$("Usage"),q=p(),b=o("p"),C=$("Here's an overview:"),D=p(),Q(h.$$.fragment),this.h()},l(a){const v=ce('[data-svelte="svelte-1wc9pbr"]',document.head);l=he(v),f=M(),v.forEach(s),S=m(a),t=n(a,"SECTION",{});var r=i(t);d=n(r,"HEADER",{class:!0});var R=i(d);g=n(R,"H1",{style:!0});var U=i(g);j=P(U,"Entity Sorter"),U.forEach(s),R.forEach(s),N=m(r),_=n(r,"P",{});var z=i(_);x=P(z,`The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.`),z.forEach(s),O=m(r),y=n(r,"HEADER",{class:!0});var B=i(y);w=n(B,"H2",{});var Y=i(w);T=P(Y,"Installation"),Y.forEach(s),B.forEach(s),A=m(r),V(c.$$.fragment,r),I=m(r),u=n(r,"HEADER",{class:!0});var G=i(u);E=n(G,"H2",{});var J=i(E);k=P(J,"Usage"),J.forEach(s),G.forEach(s),q=m(r),b=n(r,"P",{});var K=i(b);C=P(K,"Here's an overview:"),K.forEach(s),D=m(r),V(h.$$.fragment,r),r.forEach(s),this.h()},h(){document.title="Entity Sorter - Packages - Nymph.js",l.a=f,pe(g,"font-size","3em"),F(d,"class","major"),F(y,"class","major"),F(u,"class","major")},m(a,v){l.m(me,document.head),e(document.head,f),W(a,S,v),W(a,t,v),e(t,d),e(d,g),e(g,j),e(t,N),e(t,_),e(_,x),e(t,O),e(t,y),e(y,w),e(w,T),e(t,A),X(c,t,null),e(t,I),e(t,u),e(u,E),e(E,k),e(t,q),e(t,b),e(b,C),e(t,D),X(h,t,null),H=!0},p:de,i(a){H||(Z(c.$$.fragment,a),Z(h.$$.fragment,a),H=!0)},o(a){ee(c.$$.fragment,a),ee(h.$$.fragment,a),H=!1},d(a){s(f),a&&l.d(),a&&s(S),a&&s(t),te(c),te(h)}}}class ue extends re{constructor(l){super();se(this,l,null,ge,oe,{})}}export{ue as default};
