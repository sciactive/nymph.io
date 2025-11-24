import{h as m,a as s,t as l,c as h}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as g,f as y,s as a,c as d,a as f}from"../chunks/xPuFI3q7.js";import{h as b,g as u}from"../chunks/C0NHSKHS.js";import{b as w}from"../chunks/c8uDcNtF.js";import{t as P}from"../chunks/Ce9AoNbY.js";import{H as t}from"../chunks/9N_cuTOb.js";var v=l(`<section><header class="major"><h1 style="font-size: 3em;">Entity Sorter</h1></header> <p>The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function C(n){var e=v();m(p=>{var r=h();g.title="Entity Sorter - Packages - Nymph.js";var c=y(r);b(c,()=>u,!1,!1),s(p,r)});var o=a(d(e),6);t(o,{language:w,code:"npm install --save @nymphjs/sorter"});var i=a(o,6);t(i,{language:P,code:`import { Nymph } from '@nymphjs/nymph';
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
console.log(pages);`}),f(e),s(n,e)}export{C as component};
