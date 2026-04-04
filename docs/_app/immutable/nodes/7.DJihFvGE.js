import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,rt as u,w as d}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as f}from"../chunks/DUAD-eIe.js";import{t as p}from"../chunks/XOiHpZri.js";import{t as m}from"../chunks/DIXNzCvi.js";import{t as h}from"../chunks/jqiW6npt.js";var g=a(`<section><header class="major"><h1 style="font-size: 3em;">SQLite3 Driver</h1></header> <p>The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://forge.sciactive.com/sciactive/nymphjs/src/branch/master/packages/driver-sqlite3/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function _(a){var _=g();c(`rpuxlz`,i=>{var a=d();s(t(a),()=>h),r(()=>{n.title=`SQLite3 Driver - Packages - Nymph.js`}),e(i,a)});var v=i(o(_),6);f(v,{get language(){return p},code:`npm install --save @nymphjs/driver-sqlite3`}),f(i(v,6),{get language(){return m},code:`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}),u(4),l(_),e(a,_)}export{_ as component};