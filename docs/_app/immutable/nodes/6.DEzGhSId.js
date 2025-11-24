import{f as m,a,c as d}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as c,e as g,s as t,c as l,$ as f,n as y,a as u}from"../chunks/uMqmAk-V.js";import{h as v,g as _}from"../chunks/BSVgqX3x.js";import{h as b}from"../chunks/Dx1ptvL_.js";import{b as j}from"../chunks/c8uDcNtF.js";import{t as P}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/DZfDsH_2.js";var S=m(`<section><header class="major"><h1 style="font-size: 3em;">PostgreSQL Driver</h1></header> <p>The PostgreSQL driver lets you configure Nymph to query and save data to a
    Postgres database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-postgresql/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function C(i){var e=S();b("1tld84i",h=>{var s=d(),p=c(s);v(p,()=>_),g(()=>{f.title="PostgreSQL Driver - Packages - Nymph.js"}),a(h,s)});var r=t(l(e),6);o(r,{get language(){return j},code:"npm install --save @nymphjs/driver-postgresql"});var n=t(r,6);o(n,{get language(){return P},code:`import { Nymph } from '@nymphjs/nymph';
import PostgreSQLDriver from '@nymphjs/driver-postgresql';

const postgresqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new PostgreSQLDriver(postgresqlConfig));

// All done. Nymph is ready to use.`}),y(4),u(e),a(i,e)}export{C as component};
