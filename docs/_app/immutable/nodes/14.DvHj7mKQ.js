import{h as c,a as i,t as m,c as d}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as p,f,s,c as u,n as g,a as y}from"../chunks/xPuFI3q7.js";import{h as v,g as w}from"../chunks/C0NHSKHS.js";import{b}from"../chunks/c8uDcNtF.js";import{t as j}from"../chunks/Ce9AoNbY.js";import{H as o}from"../chunks/9N_cuTOb.js";var T=m(`<section><header class="major"><h1 style="font-size: 3em;">Tilmeld</h1></header> <p>Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.</p> <p>Here's an overview.</p> <!> <header class="major"><h2>Options</h2></header> <p>See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.</p> <header class="major"><h2>Abilities</h2></header> <p>There are a few abilities that Tilmeld uses internally:</p> <ul><li><code>system/admin</code> - A user with this ability has <strong>all</strong> abilities.</li> <li><code>tilmeld/admin</code> - Allow the user to manage and edit other user's
      account and group information and grant/revoke abilities.</li> <li><code>tilmeld/switch</code> - Allow the user to switch to other users (log
      in as them without their password).</li> <li><code>uid/get/[name]</code> - Allow the user to read the named UID.</li> <li><code>uid/new/[name]</code> - Allow the user to read, create, and increment
      the named UID.</li> <li><code>uid/set/[name]</code> - Allow the user to read, create, increment, set,
      and delete the named UID.</li></ul> <p>The admin and switch abilities cannot be inherited from groups.</p></section>`);function _(r){var e=T();c(n=>{var a=d();p.title="Tilmeld - Packages - Nymph.js";var h=f(a);v(h,()=>w,!1,!1),i(n,a)});var t=s(u(e),6);o(t,{language:b,code:"npm install --save @nymphjs/tilmeld"});var l=s(t,8);o(l,{language:j,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
import { Tilmeld } from '@nymphjs/tilmeld';
import { Nymph } from '@nymphjs/nymph';

const tilmeld = new Tilmeld({
  appName: 'My App',
  appUrl: 'http://localhost',
  cookieDomain: 'localhost',
  cookiePath: '/',
  setupPath: '/user',
  verifyRedirect: 'http://localhost',
  verifyChangeRedirect: 'http://localhost',
  cancelChangeRedirect: 'http://localhost',
  jwtSecret: 'shhhhh',
});

const nymph = new Nymph(
  {},
  new SQLite3Driver({
    filename: ':memory:',
  }),
  tilmeld,
);

// These are the classes specific to this instance of Tilmeld.
const { User, Group } = tilmeld;`}),g(12),y(e),i(r,e)}export{_ as component};
