import{E as e,G as t,J as n,K as r,L as i,T as a,U as o,_ as s,ot as c,w as l,x as u}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as d}from"../chunks/D_gJAAal.js";import{t as f}from"../chunks/BF3MJUBc.js";import{t as p}from"../chunks/DDTgMnDM.js";import{t as m}from"../chunks/Ciszbs-_.js";var h=e(`<section><header class="major"><h1 style="font-size: 3em;">GUID / Unique Code Generator</h1></header> <p>The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>There are a few functions for generating different kinds of strings.</p> <!></section>`);function g(e){var g=h();s(`66ebb8`,e=>{var t=a(),n=r(t);u(n,()=>m),i(()=>{o.title=`GUID / Unique Code Generator - Packages - Nymph.js`}),l(e,t)});var _=n(t(g),6);d(_,{get language(){return p},code:`npm install --save @nymphjs/guid`});var v=n(_,6);d(v,{get language(){return f},code:`import {
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
const customId = customAlphabet('abc', 20)();`}),c(g),l(e,g)}export{g as component};