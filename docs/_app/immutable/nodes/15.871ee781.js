import{s as Z,I as ee,e as O,a,f as l,x as te,J as ne,d as H,c as o,g as r,h as se,r as i,j as G,u as n,i as J,v as ae}from"../chunks/scheduler.d7e45cc8.js";import{S as oe,i as le,b as Y,d as B,m as F,a as K,t as Q,e as V}from"../chunks/index.77720afb.js";import{H as W,g as re}from"../chunks/github.64534d2c.js";import{b as ie}from"../chunks/bash.7e4226ac.js";import{t as ce}from"../chunks/typescript.09c48802.js";function he(X){let c,C,x,e,h,I='<h1 style="font-size: 3em;">Tilmeld Client</h1>',M,f,q=`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`,E,d,D="<h2>Installation</h2>",L,m,U,g,S="You can find UMD in <code>dist</code>, or TS source in <code>src</code>.",b,p,k="<h2>Usage</h2>",j,y,z=`The Tilmeld client contains the client versions of the <code>User</code> and
    <code>Group</code>
    entities. It also contains helpers, <code>getClientConfig</code>,
    <code>login</code>, <code>register</code>, and <code>checkUsername</code>.`,w,v,A=`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`,N,u,P,_,R=`If you&#39;re running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.`,$;return m=new W({props:{language:ie,code:"npm install --save @nymphjs/tilmeld-client"}}),u=new W({props:{language:ce,code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}}),{c(){c=new ee(!1),C=O(),x=a(),e=l("section"),h=l("header"),h.innerHTML=I,M=a(),f=l("p"),f.textContent=q,E=a(),d=l("header"),d.innerHTML=D,L=a(),Y(m.$$.fragment),U=a(),g=l("p"),g.innerHTML=S,b=a(),p=l("header"),p.innerHTML=k,j=a(),y=l("p"),y.innerHTML=z,w=a(),v=l("p"),v.textContent=A,N=a(),Y(u.$$.fragment),P=a(),_=l("p"),_.innerHTML=R,this.h()},l(s){const T=te("svelte-1baconj",document.head);c=ne(T,!1),C=O(),T.forEach(H),x=o(s),e=r(s,"SECTION",{});var t=se(e);h=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(h)!=="svelte-isekeu"&&(h.innerHTML=I),M=o(t),f=r(t,"P",{"data-svelte-h":!0}),i(f)!=="svelte-13mrlh4"&&(f.textContent=q),E=o(t),d=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(d)!=="svelte-1hx9pnb"&&(d.innerHTML=D),L=o(t),B(m.$$.fragment,t),U=o(t),g=r(t,"P",{"data-svelte-h":!0}),i(g)!=="svelte-h28vnv"&&(g.innerHTML=S),b=o(t),p=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(p)!=="svelte-n87w0o"&&(p.innerHTML=k),j=o(t),y=r(t,"P",{"data-svelte-h":!0}),i(y)!=="svelte-1hdpstv"&&(y.innerHTML=z),w=o(t),v=r(t,"P",{"data-svelte-h":!0}),i(v)!=="svelte-1f69b11"&&(v.textContent=A),N=o(t),B(u.$$.fragment,t),P=o(t),_=r(t,"P",{"data-svelte-h":!0}),i(_)!=="svelte-qtqrq3"&&(_.innerHTML=R),t.forEach(H),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",c.a=C,G(h,"class","major"),G(d,"class","major"),G(p,"class","major")},m(s,T){c.m(re,document.head),n(document.head,C),J(s,x,T),J(s,e,T),n(e,h),n(e,M),n(e,f),n(e,E),n(e,d),n(e,L),F(m,e,null),n(e,U),n(e,g),n(e,b),n(e,p),n(e,j),n(e,y),n(e,w),n(e,v),n(e,N),F(u,e,null),n(e,P),n(e,_),$=!0},p:ae,i(s){$||(K(m.$$.fragment,s),K(u.$$.fragment,s),$=!0)},o(s){Q(m.$$.fragment,s),Q(u.$$.fragment,s),$=!1},d(s){s&&(c.d(),H(x),H(e)),H(C),V(m),V(u)}}}class ge extends oe{constructor(c){super(),le(this,c,null,he,Z,{})}}export{ge as component};
