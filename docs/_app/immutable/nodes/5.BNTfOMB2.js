import{f as p,a as s,c}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as d,e as l,s as t,c as y,$ as f,n as g,a as u}from"../chunks/uMqmAk-V.js";import{h as v,g as _}from"../chunks/BSVgqX3x.js";import{h as b}from"../chunks/Dx1ptvL_.js";import{b as j}from"../chunks/c8uDcNtF.js";import{t as S}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/DZfDsH_2.js";var q=p(`<section><header class="major"><h1 style="font-size: 3em;">MySQL Driver</h1></header> <p>The MySQL driver lets you configure Nymph to query and save data to a MySQL
    database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-mysql/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function C(i){var e=q();b("rl86oc",m=>{var a=c(),h=d(a);v(h,()=>_),l(()=>{f.title="MySQL Driver - Packages - Nymph.js"}),s(m,a)});var r=t(y(e),6);o(r,{get language(){return j},code:"npm install --save @nymphjs/driver-mysql"});var n=t(r,6);o(n,{get language(){return S},code:`import { Nymph } from '@nymphjs/nymph';
import MySQLDriver from '@nymphjs/driver-mysql';

const mysqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new MySQLDriver(mysqlConfig));

// All done. Nymph is ready to use.`}),g(4),u(e),s(i,e)}export{C as component};
