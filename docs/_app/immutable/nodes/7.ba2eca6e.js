import{s as W,I as X,e as I,a as s,f as i,x as Y,J as Z,d as H,c as r,g as l,h as ee,r as u,j as C,u as a,i as O,v as te}from"../chunks/scheduler.d7e45cc8.js";import{S as ae,i as ne,b as z,d as J,m as U,a as B,t as F,e as G}from"../chunks/index.77720afb.js";import{H as K,g as se}from"../chunks/github.64534d2c.js";import{b as re}from"../chunks/bash.7e4226ac.js";import{t as ie}from"../chunks/typescript.09c48802.js";function le(V){let o,y,L,e,h,q='<h1 style="font-size: 3em;">SQLite3 Driver</h1>',b,g,N=`The SQLite3 driver lets you configure Nymph to query and save data to a
    SQLite3 database. This includes an in memory SQLite3 database.`,j,m,Q="<h2>Installation</h2>",T,c,S,d,A="<h2>Usage</h2>",E,v,P=`Supply an instance of this driver with its configuration to Nymph's
    constructor.`,M,p,w,f,k="<h2>Options</h2>",D,_,R='See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/driver-sqlite3/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.',$;return c=new K({props:{language:re,code:"npm install --save @nymphjs/driver-sqlite3"}}),p=new K({props:{language:ie,code:`import { Nymph } from '@nymphjs/nymph';
import SQLite3Driver from '@nymphjs/driver-sqlite3';

const sqliteConfig = {
  filename: __dirname + '/mydatabase.db',
};

const nymph = new Nymph({}, new SQLite3Driver(sqliteConfig));

// All done. Nymph is ready to use.`}}),{c(){o=new X(!1),y=I(),L=s(),e=i("section"),h=i("header"),h.innerHTML=q,b=s(),g=i("p"),g.textContent=N,j=s(),m=i("header"),m.innerHTML=Q,T=s(),z(c.$$.fragment),S=s(),d=i("header"),d.innerHTML=A,E=s(),v=i("p"),v.textContent=P,M=s(),z(p.$$.fragment),w=s(),f=i("header"),f.innerHTML=k,D=s(),_=i("p"),_.innerHTML=R,this.h()},l(n){const x=Y("svelte-iu1j96",document.head);o=Z(x,!1),y=I(),x.forEach(H),L=r(n),e=l(n,"SECTION",{});var t=ee(e);h=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(h)!=="svelte-briojb"&&(h.innerHTML=q),b=r(t),g=l(t,"P",{"data-svelte-h":!0}),u(g)!=="svelte-1lwbj46"&&(g.textContent=N),j=r(t),m=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(m)!=="svelte-1hx9pnb"&&(m.innerHTML=Q),T=r(t),J(c.$$.fragment,t),S=r(t),d=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(d)!=="svelte-n87w0o"&&(d.innerHTML=A),E=r(t),v=l(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-11ejrn5"&&(v.textContent=P),M=r(t),J(p.$$.fragment,t),w=r(t),f=l(t,"HEADER",{class:!0,"data-svelte-h":!0}),u(f)!=="svelte-1v13hnh"&&(f.innerHTML=k),D=r(t),_=l(t,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1kg643x"&&(_.innerHTML=R),t.forEach(H),this.h()},h(){document.title="SQLite3 Driver - Packages - Nymph.js",o.a=y,C(h,"class","major"),C(m,"class","major"),C(d,"class","major"),C(f,"class","major")},m(n,x){o.m(se,document.head),a(document.head,y),O(n,L,x),O(n,e,x),a(e,h),a(e,b),a(e,g),a(e,j),a(e,m),a(e,T),U(c,e,null),a(e,S),a(e,d),a(e,E),a(e,v),a(e,M),U(p,e,null),a(e,w),a(e,f),a(e,D),a(e,_),$=!0},p:te,i(n){$||(B(c.$$.fragment,n),B(p.$$.fragment,n),$=!0)},o(n){F(c.$$.fragment,n),F(p.$$.fragment,n),$=!1},d(n){n&&(o.d(),H(L),H(e)),H(y),G(c),G(p)}}}class pe extends ae{constructor(o){super(),ne(this,o,null,le,W,{})}}export{pe as component};
