import{E as e,G as t,J as n,K as r,L as i,T as a,U as o,_ as s,at as c,ot as l,w as u,x as d}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as f}from"../chunks/D_gJAAal.js";import{t as p}from"../chunks/BF3MJUBc.js";import{t as m}from"../chunks/DDTgMnDM.js";import{t as h}from"../chunks/Ciszbs-_.js";var g=e(`<section><header class="major"><h1 style="font-size: 3em;">PostgreSQL Driver</h1></header> <p>The PostgreSQL driver lets you configure Nymph to query and save data to a
    Postgres database.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>Supply an instance of this driver with its configuration to Nymph's
    constructor.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://forge.sciactive.com/sciactive/nymphjs/src/branch/master/packages/driver-postgresql/src/conf/index.ts" target="_blank" rel="external">config declaration file</a>.</p></section>`);function _(e){var _=g();s(`1tld84i`,e=>{var t=a(),n=r(t);d(n,()=>h),i(()=>{o.title=`PostgreSQL Driver - Packages - Nymph.js`}),u(e,t)});var v=n(t(_),6);f(v,{get language(){return m},code:`npm install --save @nymphjs/driver-postgresql`});var y=n(v,6);f(y,{get language(){return p},code:`import { Nymph } from '@nymphjs/nymph';
import PostgreSQLDriver from '@nymphjs/driver-postgresql';

const postgresqlConfig = {
  host: 'your_db_host',
  database: 'your_database',
  user: 'your_user',
  password: 'your_password',
};

const nymph = new Nymph({}, new PostgreSQLDriver(postgresqlConfig));

// All done. Nymph is ready to use.`}),c(4),l(_),u(e,_)}export{_ as component};