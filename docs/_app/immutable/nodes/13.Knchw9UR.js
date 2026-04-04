import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,w as u}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as d}from"../chunks/DUAD-eIe.js";import{t as f}from"../chunks/XOiHpZri.js";import{t as p}from"../chunks/DIXNzCvi.js";import{t as m}from"../chunks/jqiW6npt.js";var h=a(`<section><header class="major"><h1 style="font-size: 3em;">Entity Sorter</h1></header> <p>The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function g(a){var g=h();c(`1tywuuy`,i=>{var a=u();s(t(a),()=>m),r(()=>{n.title=`Entity Sorter - Packages - Nymph.js`}),e(i,a)});var _=i(o(g),6);d(_,{get language(){return f},code:`npm install --save @nymphjs/sorter`}),d(i(_,6),{get language(){return p},code:`import { Nymph } from '@nymphjs/nymph';
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
console.log(pages);`}),l(g),e(a,g)}export{g as component};