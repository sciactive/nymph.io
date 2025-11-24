import{f as m,a as o,c as h}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as d,e as p,s as n,c as u,$ as y,n as f,a as g}from"../chunks/uMqmAk-V.js";import{h as v,g as C}from"../chunks/BSVgqX3x.js";import{h as U}from"../chunks/Dx1ptvL_.js";import{b as T}from"../chunks/c8uDcNtF.js";import{t as b}from"../chunks/Ce9AoNbY.js";import{H as a}from"../chunks/DZfDsH_2.js";var j=m(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld Client</h1></header> <p>The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.</p> <header class="major"><h2>Installation</h2></header> <!> <p>You can find ES modules in <code>dist</code>, or TS source in <code>src</code>.</p> <header class="major"><h2>Usage</h2></header> <p>The Tilmeld client contains the client versions of the <code>User</code> and <code>Group</code> entities. It also contains helpers, <code>login</code>, <code>register</code>, and <code>checkUsername</code>.</p> <p>Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)</p> <!> <p>If you're running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.</p></section>`);function x(r){var e=j();U("1ir30v8",c=>{var t=h(),l=d(t);v(l,()=>C),p(()=>{y.title="Tilmeld Client - Packages - Nymph.js"}),o(c,t)});var s=n(u(e),6);a(s,{get language(){return T},code:"npm install --save @nymphjs/tilmeld-client"});var i=n(s,10);a(i,{get language(){return b},code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}),f(2),g(e),o(r,e)}export{x as component};
