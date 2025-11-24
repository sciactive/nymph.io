import{h as p,a as s,t as d,c}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as l,f as y,s as t,c as f,n as g,a as u}from"../chunks/xPuFI3q7.js";import{h as v,g as b}from"../chunks/C0NHSKHS.js";import{b as _}from"../chunks/c8uDcNtF.js";import{t as j}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/9N_cuTOb.js";var S=d(`<section><header class="major"><h1 style="font-size: 3em;">MySQL Driver</h1></header> <p>The MySQL driver lets you configure Nymph to query and save data to a MySQL
    database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-mysql/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function k(i){var a=S();p(m=>{var r=c();l.title="MySQL Driver - Packages - Nymph.js";var h=y(r);v(h,()=>b,!1,!1),s(m,r)});var e=t(f(a),6);o(e,{language:_,code:"npm install --save @nymphjs/driver-mysql"});var n=t(e,6);o(n,{language:j,code:`import { Nymph } from '@nymphjs/nymph';
import MySQLDriver from '@nymphjs/driver-mysql';

const mysqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new MySQLDriver(mysqlConfig));

// All done. Nymph is ready to use.`}),g(4),u(a),s(i,a)}export{k as component};
