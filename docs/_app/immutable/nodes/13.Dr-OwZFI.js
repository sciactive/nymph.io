import{E as e,G as t,J as n,K as r,L as i,T as a,U as o,_ as s,ot as c,w as l,x as u}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as d}from"../chunks/D_gJAAal.js";import{t as f}from"../chunks/BF3MJUBc.js";import{t as p}from"../chunks/DDTgMnDM.js";import{t as m}from"../chunks/Ciszbs-_.js";var h=e(`<section><header class="major"><h1 style="font-size: 3em;">Entity Sorter</h1></header> <p>The Nymph Entity Sorter lets you sort entities by their properties,
    including hierarchically.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Here's an overview:</p> <!></section>`);function g(e){var g=h();s(`1tywuuy`,e=>{var t=a(),n=r(t);u(n,()=>m),i(()=>{o.title=`Entity Sorter - Packages - Nymph.js`}),l(e,t)});var _=n(t(g),6);d(_,{get language(){return p},code:`npm install --save @nymphjs/sorter`});var v=n(_,6);d(v,{get language(){return f},code:`import { Nymph } from '@nymphjs/nymph';
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
console.log(pages);`}),c(g),l(e,g)}export{g as component};