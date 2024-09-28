import{s as Z,I as ee,e as O,a,f as o,x as te,J as ne,d as H,c as l,g as r,h as se,r as i,j as G,u as n,i as J,v as ae}from"../chunks/scheduler.d7e45cc8.js";import{S as le,i as oe,b as Y,d as B,m as F,a as K,t as Q,e as V}from"../chunks/index.77720afb.js";import{H as W,g as re}from"../chunks/github.64534d2c.js";import{b as ie}from"../chunks/bash.7e4226ac.js";import{t as ce}from"../chunks/typescript.09c48802.js";function he(X){let c,C,x,e,h,I='<h1 style="font-size: 3em;">Tilmeld Client</h1>',M,f,q=`The Tilmeld Client lets you register, login, and perform user account
    related functions remotely on a Nymph server.`,E,m,z="<h2>Installation</h2>",L,d,U,g,D="You can find UMD in <code>dist</code>, or TS source in <code>src</code>.",b,p,S="<h2>Usage</h2>",j,y,k=`The Tilmeld client contains the client versions of the <code>User</code> and
    <code>Group</code>
    entities. It also contains helpers, <code>login</code>,
    <code>register</code>, and <code>checkUsername</code>.`,w,_,A=`Once you've initialized Nymph Client, set the User and Group classes on it.
    Then initialize the new User class with the Nymph instance. (This allows the
    class to set up authentication listeners.)`,N,u,P,v,R=`If you&#39;re running more than one instance of Nymph client, be sure to use the
    classes returned by <code>addEntityClass</code>, so as not to accidentally
    submit entities from one instances to another instance.`,$;return d=new W({props:{language:ie,code:"npm install --save @nymphjs/tilmeld-client"}}),u=new W({props:{language:ce,code:`import { Nymph } from '@nymphjs/client';
import {
  User as UserClass,
  Group as GroupClass,
} from '@nymphjs/tilmeld-client';

const nymph = new Nymph({
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
});
const User = nymph.addEntityClass(UserClass);
const Group = nymph.addEntityClass(GroupClass);
User.init(nymph);`}}),{c(){c=new ee(!1),C=O(),x=a(),e=o("section"),h=o("header"),h.innerHTML=I,M=a(),f=o("p"),f.textContent=q,E=a(),m=o("header"),m.innerHTML=z,L=a(),Y(d.$$.fragment),U=a(),g=o("p"),g.innerHTML=D,b=a(),p=o("header"),p.innerHTML=S,j=a(),y=o("p"),y.innerHTML=k,w=a(),_=o("p"),_.textContent=A,N=a(),Y(u.$$.fragment),P=a(),v=o("p"),v.innerHTML=R,this.h()},l(s){const T=te("svelte-1baconj",document.head);c=ne(T,!1),C=O(),T.forEach(H),x=l(s),e=r(s,"SECTION",{});var t=se(e);h=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(h)!=="svelte-isekeu"&&(h.innerHTML=I),M=l(t),f=r(t,"P",{"data-svelte-h":!0}),i(f)!=="svelte-13mrlh4"&&(f.textContent=q),E=l(t),m=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(m)!=="svelte-1hx9pnb"&&(m.innerHTML=z),L=l(t),B(d.$$.fragment,t),U=l(t),g=r(t,"P",{"data-svelte-h":!0}),i(g)!=="svelte-h28vnv"&&(g.innerHTML=D),b=l(t),p=r(t,"HEADER",{class:!0,"data-svelte-h":!0}),i(p)!=="svelte-n87w0o"&&(p.innerHTML=S),j=l(t),y=r(t,"P",{"data-svelte-h":!0}),i(y)!=="svelte-g39yzf"&&(y.innerHTML=k),w=l(t),_=r(t,"P",{"data-svelte-h":!0}),i(_)!=="svelte-1f69b11"&&(_.textContent=A),N=l(t),B(u.$$.fragment,t),P=l(t),v=r(t,"P",{"data-svelte-h":!0}),i(v)!=="svelte-qtqrq3"&&(v.innerHTML=R),t.forEach(H),this.h()},h(){document.title="Tilmeld Client - Packages - Nymph.js",c.a=C,G(h,"class","major"),G(m,"class","major"),G(p,"class","major")},m(s,T){c.m(re,document.head),n(document.head,C),J(s,x,T),J(s,e,T),n(e,h),n(e,M),n(e,f),n(e,E),n(e,m),n(e,L),F(d,e,null),n(e,U),n(e,g),n(e,b),n(e,p),n(e,j),n(e,y),n(e,w),n(e,_),n(e,N),F(u,e,null),n(e,P),n(e,v),$=!0},p:ae,i(s){$||(K(d.$$.fragment,s),K(u.$$.fragment,s),$=!0)},o(s){Q(d.$$.fragment,s),Q(u.$$.fragment,s),$=!1},d(s){s&&(c.d(),H(x),H(e)),H(C),V(d),V(u)}}}class ge extends le{constructor(c){super(),oe(this,c,null,he,Z,{})}}export{ge as component};
