import{f as c,a as t,c as d}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as l,e as f,s,c as u,$ as p,a as g}from"../chunks/uMqmAk-V.js";import{h as b,g as y}from"../chunks/BSVgqX3x.js";import{h as I}from"../chunks/Dx1ptvL_.js";import{b as T}from"../chunks/c8uDcNtF.js";import{t as w}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/DZfDsH_2.js";var x=c(`<section><header class="major"><h1 style="font-size: 3em;">GUID / Unique Code Generator</h1></header> <p>The GUID and unique code generators are used to generate new GUIDs for Nymph
    objects and various random unique strings.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>There are a few functions for generating different kinds of strings.</p> <!></section>`);function _(i){var e=x();I("66ebb8",m=>{var r=d(),h=l(r);b(h,()=>y),f(()=>{p.title="GUID / Unique Code Generator - Packages - Nymph.js"}),t(m,r)});var a=s(u(e),6);o(a,{get language(){return T},code:"npm install --save @nymphjs/guid"});var n=s(a,6);o(n,{get language(){return w},code:`import {
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
const customId = customAlphabet('abc', 20)();`}),g(e),t(i,e)}export{_ as component};
