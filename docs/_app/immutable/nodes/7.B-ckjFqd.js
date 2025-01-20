import{h as p,a as r,t as l,c}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as d,f,s,c as g,n as y,a as v}from"../chunks/xPuFI3q7.js";import{h as u,g as b}from"../chunks/C0NHSKHS.js";import{b as j}from"../chunks/c8uDcNtF.js";import{t as S}from"../chunks/Ce9AoNbY.js";import{H as i}from"../chunks/9N_cuTOb.js";var L=l(`<section><header class="major"><h1 style="font-size: 3em;">SQLite3 Driver</h1></header> <p>The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function x(o){var e=L();p(m=>{var t=c();d.title="SQLite3 Driver - Packages - Nymph.js";var h=f(t);u(h,()=>b,!1,!1),r(m,t)});var a=s(g(e),6);i(a,{language:j,code:"npm install --save @nymphjs/driver-sqlite3"});var n=s(a,6);i(n,{language:S,code:`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}),y(4),v(e),r(o,e)}export{x as component};
