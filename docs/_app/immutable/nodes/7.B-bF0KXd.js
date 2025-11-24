import{f as p,a as r,c}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as d,e as l,s,c as f,$ as g,n as y,a as v}from"../chunks/uMqmAk-V.js";import{h as u,g as b}from"../chunks/BSVgqX3x.js";import{h as j}from"../chunks/Dx1ptvL_.js";import{b as S}from"../chunks/c8uDcNtF.js";import{t as _}from"../chunks/Ce9AoNbY.js";import{H as i}from"../chunks/DZfDsH_2.js";var L=p(`<section><header class="major"><h1 style="font-size: 3em;">SQLite3 Driver</h1></header> <p>The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function C(o){var e=L();j("rpuxlz",m=>{var t=c(),h=d(t);u(h,()=>b),l(()=>{g.title="SQLite3 Driver - Packages - Nymph.js"}),r(m,t)});var a=s(f(e),6);i(a,{get language(){return S},code:"npm install --save @nymphjs/driver-sqlite3"});var n=s(a,6);i(n,{get language(){return _},code:`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}),y(4),v(e),r(o,e)}export{C as component};
