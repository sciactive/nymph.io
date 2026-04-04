import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,w as u}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as d}from"../chunks/DUAD-eIe.js";import{t as f}from"../chunks/XOiHpZri.js";import{t as p}from"../chunks/DIXNzCvi.js";import{t as m}from"../chunks/jqiW6npt.js";var h=a(`<section><header class="major"><h1 style="font-size: 3em;">GUID / Unique Code Generator</h1></header> <p>The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>There are a few functions for generating different kinds of strings.</p> <!></section>`);function g(a){var g=h();c(`66ebb8`,i=>{var a=u();s(t(a),()=>m),r(()=>{n.title=`GUID / Unique Code Generator - Packages - Nymph.js`}),e(i,a)});var _=i(o(g),6);d(_,{get language(){return f},code:`npm install --save @nymphjs/guid`}),d(i(_,6),{get language(){return p},code:`import {
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
const customId = customAlphabet('abc', 20)();`}),l(g),e(a,g)}export{g as component};