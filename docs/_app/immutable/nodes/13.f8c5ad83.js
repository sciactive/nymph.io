import{s as J,I as Y,e as O,a as m,f as d,x as B,J as G,d as _,c as p,g as y,h as K,r as b,j as S,u as s,i as A,v as Q}from"../chunks/scheduler.d7e45cc8.js";import{S as V,i as W,b as D,d as F,m as I,a as R,t as U,e as k}from"../chunks/index.77720afb.js";import{H as q,g as X}from"../chunks/github.64534d2c.js";import{b as Z}from"../chunks/bash.7e4226ac.js";import{t as ee}from"../chunks/typescript.09c48802.js";function te(z){let r,u,w,e,n,T='<h1 style="font-size: 3em;">Entity Sorter</h1>',P,h,j=`The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.`,$,o,N="<h2>Installation</h2>",H,i,x,l,L="<h2>Usage</h2>",C,g,M="Here's an overview:",E,c,v;return i=new q({props:{language:Z,code:"npm install --save @nymphjs/sorter"}}),c=new q({props:{language:ee,code:`import { Nymph } from '@nymphjs/nymph';
// or
import { Nymph } from '@nymphjs/client';
import PageClass from 'Page';

import { Sorter } from '@nymphjs/sorter';

const nymphOptions = {
  // the options for your Nymph instance.
};
const nymph = new Nymph(nymphOptions);
const Page = nymph.addEntityClass(PageClass);

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
console.log(pages);`}}),{c(){r=new Y(!1),u=O(),w=m(),e=d("section"),n=d("header"),n.innerHTML=T,P=m(),h=d("p"),h.textContent=j,$=m(),o=d("header"),o.innerHTML=N,H=m(),D(i.$$.fragment),x=m(),l=d("header"),l.innerHTML=L,C=m(),g=d("p"),g.textContent=M,E=m(),D(c.$$.fragment),this.h()},l(a){const f=B("svelte-1wc9pbr",document.head);r=G(f,!1),u=O(),f.forEach(_),w=p(a),e=y(a,"SECTION",{});var t=K(e);n=y(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-uo1y54"&&(n.innerHTML=T),P=p(t),h=y(t,"P",{"data-svelte-h":!0}),b(h)!=="svelte-1nd7e5o"&&(h.textContent=j),$=p(t),o=y(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-1hx9pnb"&&(o.innerHTML=N),H=p(t),F(i.$$.fragment,t),x=p(t),l=y(t,"HEADER",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-n87w0o"&&(l.innerHTML=L),C=p(t),g=y(t,"P",{"data-svelte-h":!0}),b(g)!=="svelte-deeya8"&&(g.textContent=M),E=p(t),F(c.$$.fragment,t),t.forEach(_),this.h()},h(){document.title="Entity Sorter - Packages - Nymph.js",r.a=u,S(n,"class","major"),S(o,"class","major"),S(l,"class","major")},m(a,f){r.m(X,document.head),s(document.head,u),A(a,w,f),A(a,e,f),s(e,n),s(e,P),s(e,h),s(e,$),s(e,o),s(e,H),I(i,e,null),s(e,x),s(e,l),s(e,C),s(e,g),s(e,E),I(c,e,null),v=!0},p:Q,i(a){v||(R(i.$$.fragment,a),R(c.$$.fragment,a),v=!0)},o(a){U(i.$$.fragment,a),U(c.$$.fragment,a),v=!1},d(a){a&&(r.d(),_(w),_(e)),_(u),k(i),k(c)}}}class ie extends V{constructor(r){super(),W(this,r,null,te,J,{})}}export{ie as component};
