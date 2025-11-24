import{h as m,a,t as d,c}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as l,f as g,s as t,c as f,n as y,a as u}from"../chunks/xPuFI3q7.js";import{h as v,g as b}from"../chunks/C0NHSKHS.js";import{b as _}from"../chunks/c8uDcNtF.js";import{t as j}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/9N_cuTOb.js";var P=d(`<section><header class="major"><h1 style="font-size: 3em;">PostgreSQL Driver</h1></header> <p>The PostgreSQL driver lets you configure Nymph to query and save data to a
    Postgres database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-postgresql/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function k(i){var e=P();m(p=>{var r=c();l.title="PostgreSQL Driver - Packages - Nymph.js";var h=g(r);v(h,()=>b,!1,!1),a(p,r)});var s=t(f(e),6);o(s,{language:_,code:"npm install --save @nymphjs/driver-postgresql"});var n=t(s,6);o(n,{language:j,code:`import { Nymph } from '@nymphjs/nymph';
import PostgreSQLDriver from '@nymphjs/driver-postgresql';

const postgresqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new PostgreSQLDriver(postgresqlConfig));

// All done. Nymph is ready to use.`}),y(4),u(e),a(i,e)}export{k as component};
