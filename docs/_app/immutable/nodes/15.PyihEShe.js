import{E as e,G as t,J as n,K as r,L as i,T as a,U as o,_ as s,at as c,ot as l,w as u,x as d}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as f}from"../chunks/D_gJAAal.js";import{t as p}from"../chunks/BF3MJUBc.js";import{t as m}from"../chunks/DDTgMnDM.js";import{t as h}from"../chunks/Ciszbs-_.js";var g=e(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld Client</h1></header> <p>The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.</p> <header class="major"><h2>Installation</h2></header> <!> <p>You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>The Tilmeld client contains the client versions of the <code>User</code> and <code>Group</code> entities. It also contains helpers, <code>login</code>, <code>register</code>, and <code>checkUsername</code>.</p> <p>Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)</p> <!> <p>If you're running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.</p></section>`);function _(e){var _=g();s(`1ir30v8`,e=>{var t=a(),n=r(t);d(n,()=>h),i(()=>{o.title=`Tilmeld Client - Packages - Nymph.js`}),u(e,t)});var v=n(t(_),6);f(v,{get language(){return m},code:`npm install --save @nymphjs/tilmeld-client`});var y=n(v,10);f(y,{get language(){return p},code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}),c(2),l(_),u(e,_)}export{_ as component};