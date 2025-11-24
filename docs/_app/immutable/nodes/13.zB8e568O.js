import{f as c,a as t,c as l}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as h,e as g,s,c as y,$ as d,a as f}from"../chunks/uMqmAk-V.js";import{h as u,g as b}from"../chunks/BSVgqX3x.js";import{h as w}from"../chunks/Dx1ptvL_.js";import{b as P}from"../chunks/c8uDcNtF.js";import{t as v}from"../chunks/Ce9AoNbY.js";import{H as a}from"../chunks/DZfDsH_2.js";var j=c(`<section><header class="major"><h1 style="font-size: 3em;">Entity Sorter</h1></header> <p>The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function T(n){var e=j();w("1tywuuy",p=>{var o=l(),m=h(o);u(m,()=>b),g(()=>{d.title="Entity Sorter - Packages - Nymph.js"}),t(p,o)});var r=s(y(e),6);a(r,{get language(){return P},code:"npm install --save @nymphjs/sorter"});var i=s(r,6);a(i,{get language(){return v},code:`import { Nymph } from '@nymphjs/nymph';
// or
import { Nymph } from '@nymphjs/client';
import PageClass from './Page.js';

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
console.log(pages);`}),f(e),t(n,e)}export{T as component};
