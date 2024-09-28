import{s as me,I as de,e as te,a as n,f as i,x as pe,J as ue,d as L,c as s,g as o,h as fe,r,j,u as a,i as ae,v as ge}from"../chunks/scheduler.d7e45cc8.js";import{S as ve,i as _e,b as ne,d as se,m as le,a as ie,t as oe,e as re}from"../chunks/index.77720afb.js";import{H as he,g as ye}from"../chunks/github.64534d2c.js";import{b as xe}from"../chunks/bash.7e4226ac.js";import{t as Te}from"../chunks/typescript.09c48802.js";function we(ce){let h,H,$,e,c,O='<h1 style="font-size: 3em;">Tilmeld</h1>',A,v,Q=`Tilmeld (the d is silent) is a user and group management system for Nymph.
    It provides strict access controls to protect entities from unauthorized
    access/modification. It allows for granting and revoking ad hoc abilities to
    users and groups, then checking for those abilities. It provides
    authentication services and features protection against XSRF attacks.`,E,m,F="<h2>Installation</h2>",k,d,D,p,J="<h2>Usage</h2>",P,_,W=`When you initialize Nymph, provide it with an instance of the Tilmeld class
    from this package. You now have access to the User and Group classes that
    are specific to that instance of Nymph/Tilmeld.`,I,y,X="Here's an overview.",R,u,N,f,Y="<h2>Options</h2>",S,x,B='See the <a href="https://github.com/sciactive/nymphjs/tree/master/packages/tilmeld/src/conf/d.ts" target="_blank" rel="external">config declaration file</a>.',U,g,K="<h2>Abilities</h2>",z,T,V="There are a few abilities that Tilmeld uses internally:",q,w,Z=`<li><code>system/admin</code> - A user with this ability has
      <strong>all</strong> abilities.</li> <li><code>tilmeld/admin</code> - Allow the user to manage and edit other user&#39;s
      account and group information and grant/revoke abilities.</li> <li><code>tilmeld/switch</code> - Allow the user to switch to other users (log
      in as them without their password).</li> <li><code>uid/get/[name]</code> - Allow the user to read the named UID.</li> <li><code>uid/new/[name]</code> - Allow the user to read, create, and increment
      the named UID.</li> <li><code>uid/set/[name]</code> - Allow the user to read, create, increment, set,
      and delete the named UID.</li>`,G,C,ee="The admin and switch abilities cannot be inherited from groups.",M;return d=new he({props:{language:xe,code:"npm install --save @nymphjs/tilmeld"}}),u=new he({props:{language:Te,code:`import SQLite3Driver from '@nymphjs/driver-sqlite3';
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
const { User, Group } = tilmeld;`}}),{c(){h=new de(!1),H=te(),$=n(),e=i("section"),c=i("header"),c.innerHTML=O,A=n(),v=i("p"),v.textContent=Q,E=n(),m=i("header"),m.innerHTML=F,k=n(),ne(d.$$.fragment),D=n(),p=i("header"),p.innerHTML=J,P=n(),_=i("p"),_.textContent=W,I=n(),y=i("p"),y.textContent=X,R=n(),ne(u.$$.fragment),N=n(),f=i("header"),f.innerHTML=Y,S=n(),x=i("p"),x.innerHTML=B,U=n(),g=i("header"),g.innerHTML=K,z=n(),T=i("p"),T.textContent=V,q=n(),w=i("ul"),w.innerHTML=Z,G=n(),C=i("p"),C.textContent=ee,this.h()},l(l){const b=pe("svelte-u4tysy",document.head);h=ue(b,!1),H=te(),b.forEach(L),$=s(l),e=o(l,"SECTION",{});var t=fe(e);c=o(t,"HEADER",{class:!0,"data-svelte-h":!0}),r(c)!=="svelte-wbnjet"&&(c.innerHTML=O),A=s(t),v=o(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-1dec0km"&&(v.textContent=Q),E=s(t),m=o(t,"HEADER",{class:!0,"data-svelte-h":!0}),r(m)!=="svelte-1hx9pnb"&&(m.innerHTML=F),k=s(t),se(d.$$.fragment,t),D=s(t),p=o(t,"HEADER",{class:!0,"data-svelte-h":!0}),r(p)!=="svelte-n87w0o"&&(p.innerHTML=J),P=s(t),_=o(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-g7y6bt"&&(_.textContent=W),I=s(t),y=o(t,"P",{"data-svelte-h":!0}),r(y)!=="svelte-1a308lw"&&(y.textContent=X),R=s(t),se(u.$$.fragment,t),N=s(t),f=o(t,"HEADER",{class:!0,"data-svelte-h":!0}),r(f)!=="svelte-1v13hnh"&&(f.innerHTML=Y),S=s(t),x=o(t,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1hvv6m0"&&(x.innerHTML=B),U=s(t),g=o(t,"HEADER",{class:!0,"data-svelte-h":!0}),r(g)!=="svelte-pmakbp"&&(g.innerHTML=K),z=s(t),T=o(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1uc2fjp"&&(T.textContent=V),q=s(t),w=o(t,"UL",{"data-svelte-h":!0}),r(w)!=="svelte-1pgzxq0"&&(w.innerHTML=Z),G=s(t),C=o(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1f1xj6z"&&(C.textContent=ee),t.forEach(L),this.h()},h(){document.title="Tilmeld - Packages - Nymph.js",h.a=H,j(c,"class","major"),j(m,"class","major"),j(p,"class","major"),j(f,"class","major"),j(g,"class","major")},m(l,b){h.m(ye,document.head),a(document.head,H),ae(l,$,b),ae(l,e,b),a(e,c),a(e,A),a(e,v),a(e,E),a(e,m),a(e,k),le(d,e,null),a(e,D),a(e,p),a(e,P),a(e,_),a(e,I),a(e,y),a(e,R),le(u,e,null),a(e,N),a(e,f),a(e,S),a(e,x),a(e,U),a(e,g),a(e,z),a(e,T),a(e,q),a(e,w),a(e,G),a(e,C),M=!0},p:ge,i(l){M||(ie(d.$$.fragment,l),ie(u.$$.fragment,l),M=!0)},o(l){oe(d.$$.fragment,l),oe(u.$$.fragment,l),M=!1},d(l){l&&(h.d(),L($),L(e)),L(H),re(d),re(u)}}}class $e extends ve{constructor(h){super(),_e(this,h,null,we,me,{})}}export{$e as component};
