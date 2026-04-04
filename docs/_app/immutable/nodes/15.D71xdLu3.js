import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,rt as u,w as d}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as f}from"../chunks/DUAD-eIe.js";import{t as p}from"../chunks/XOiHpZri.js";import{t as m}from"../chunks/DIXNzCvi.js";import{t as h}from"../chunks/jqiW6npt.js";var g=a(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld Client</h1></header> <p>The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.</p> <header class="major"><h2>Installation</h2></header> <!> <p>You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>The Tilmeld client contains the client versions of the <code>User</code> and <code>Group</code> entities. It also contains helpers, <code>login</code>, <code>register</code>, and <code>checkUsername</code>.</p> <p>Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)</p> <!> <p>If you're running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.</p></section>`);function _(a){var _=g();c(`1ir30v8`,i=>{var a=d();s(t(a),()=>h),r(()=>{n.title=`Tilmeld Client - Packages - Nymph.js`}),e(i,a)});var v=i(o(_),6);f(v,{get language(){return p},code:`npm install --save @nymphjs/tilmeld-client`}),f(i(v,10),{get language(){return m},code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}),u(2),l(_),e(a,_)}export{_ as component};