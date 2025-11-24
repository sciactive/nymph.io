import{h as m,a as n,t as d,c as h}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as p,f as u,s as o,c as y,n as f,a as g}from"../chunks/xPuFI3q7.js";import{h as v,g as C}from"../chunks/C0NHSKHS.js";import{b as U}from"../chunks/c8uDcNtF.js";import{t as T}from"../chunks/Ce9AoNbY.js";import{H as a}from"../chunks/9N_cuTOb.js";var b=d(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld Client</h1></header> <p>The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.</p> <header class="major"><h2>Installation</h2></header> <!> <p>You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>The Tilmeld client contains the client versions of the <code>User</code> and <code>Group</code> entities. It also contains helpers, <code>login</code>, <code>register</code>, and <code>checkUsername</code>.</p> <p>Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)</p> <!> <p>If you're running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.</p></section>`);function I(i){var e=b();m(l=>{var t=h();p.title="Tilmeld Client - Packages - Nymph.js";var c=u(t);v(c,()=>C,!1,!1),n(l,t)});var s=o(y(e),6);a(s,{language:U,code:"npm install --save @nymphjs/tilmeld-client"});var r=o(s,10);a(r,{language:T,code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}),f(2),g(e),n(i,e)}export{I as component};
