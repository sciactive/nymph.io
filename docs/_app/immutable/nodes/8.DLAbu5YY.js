import{h as c,a as t,t as d,c as l}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as f,f as u,s as r,c as p,a as g}from"../chunks/xPuFI3q7.js";import{h as b,g as y}from"../chunks/C0NHSKHS.js";import{b as I}from"../chunks/c8uDcNtF.js";import{t as T}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/9N_cuTOb.js";var w=d(`<section><header class="major"><h1 style="font-size: 3em;">GUID / Unique Code Generator</h1></header> <p>The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>There are a few functions for generating different kinds of strings.</p> <!></section>`);function D(i){var e=w();c(m=>{var s=l();f.title="GUID / Unique Code Generator - Packages - Nymph.js";var h=u(s);b(h,()=>y,!1,!1),t(m,s)});var a=r(p(e),6);o(a,{language:I,code:"npm install --save @nymphjs/guid"});var n=r(a,6);o(n,{language:T,code:`import {
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
const customId = customAlphabet('abc', 20)();`}),g(e),t(i,e)}export{D as component};
