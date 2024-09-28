import{s as ye,I as _e,e as ue,a as l,f as s,l as S,x as xe,J as Ce,d as p,c as i,g as o,h as L,r as h,m as k,j as M,u as e,i as fe,v as be}from"../chunks/scheduler.d7e45cc8.js";import{S as $e,i as Te,b as Q,d as V,m as X,a as Z,t as ee,e as te}from"../chunks/index.77720afb.js";import{H as ne,g as Ne}from"../chunks/github.64534d2c.js";import{b as He}from"../chunks/bash.7e4226ac.js";import{t as ge}from"../chunks/typescript.09c48802.js";import{b as Ee}from"../chunks/paths.d4a6803e.js";function je(ve){let c,H,w,t,d,ae='<h1 style="font-size: 3em;">Node Client</h1>',O,_,se=`The Nymph Node Client lets you do everything the Nymph Client does, but from
    Node.JS instead of the browser.`,q,u,oe="<h2>Installation</h2>",D,f,A,r,J,x,re="dist",R,C,le="src",I,E,b,U,z,Y,$,ie=`This package provides fetch and WebSocket ponyfills to Nymph and handles
    Tilmeld auth tokens.`,G,g,he="<h2>Usage</h2>",W,T,me="To use, require it instead of <code>@nymphjs/client</code>:",B,v,F,N,pe="Then set up Nymph and PubSub like normal:",K,y,P;return f=new ne({props:{language:He,code:"npm install --save @nymphjs/client-node"}}),v=new ne({props:{language:ge,code:"const { Nymph, PubSub } = require('@nymphjs/client-node');"}}),y=new ne({props:{language:ge,code:`const nymphOptions = {
  restUrl: 'https://yournymphrestserver/path/to/your/endpoint',
  pubsubUrl: 'wss://yournymphpubsubserver',
};
const nymph = new Nymph(nymphOptions);
const pubsub = new PubSub(nymphOptions, nymph);`}}),{c(){c=new _e(!1),H=ue(),w=l(),t=s("section"),d=s("header"),d.innerHTML=ae,O=l(),_=s("p"),_.textContent=se,q=l(),u=s("header"),u.innerHTML=oe,D=l(),Q(f.$$.fragment),A=l(),r=s("p"),J=S("This package is the Nymph client for Node.js. You can find CJS in "),x=s("code"),x.textContent=re,R=S(", or TS source in "),C=s("code"),C.textContent=le,I=S(`. There is also a
    `),E=s("strong"),b=s("a"),U=S("browser client"),z=S("."),Y=l(),$=s("p"),$.textContent=ie,G=l(),g=s("header"),g.innerHTML=he,W=l(),T=s("p"),T.innerHTML=me,B=l(),Q(v.$$.fragment),F=l(),N=s("p"),N.textContent=pe,K=l(),Q(y.$$.fragment),this.h()},l(a){const j=xe("svelte-1vkc5se",document.head);c=Ce(j,!1),H=ue(),j.forEach(p),w=i(a),t=o(a,"SECTION",{});var n=L(t);d=o(n,"HEADER",{class:!0,"data-svelte-h":!0}),h(d)!=="svelte-kq687x"&&(d.innerHTML=ae),O=i(n),_=o(n,"P",{"data-svelte-h":!0}),h(_)!=="svelte-3yk1jg"&&(_.textContent=se),q=i(n),u=o(n,"HEADER",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1hx9pnb"&&(u.innerHTML=oe),D=i(n),V(f.$$.fragment,n),A=i(n),r=o(n,"P",{});var m=L(r);J=k(m,"This package is the Nymph client for Node.js. You can find CJS in "),x=o(m,"CODE",{"data-svelte-h":!0}),h(x)!=="svelte-14vfyz8"&&(x.textContent=re),R=k(m,", or TS source in "),C=o(m,"CODE",{"data-svelte-h":!0}),h(C)!=="svelte-1fkgjes"&&(C.textContent=le),I=k(m,`. There is also a
    `),E=o(m,"STRONG",{});var ce=L(E);b=o(ce,"A",{href:!0});var de=L(b);U=k(de,"browser client"),de.forEach(p),ce.forEach(p),z=k(m,"."),m.forEach(p),Y=i(n),$=o(n,"P",{"data-svelte-h":!0}),h($)!=="svelte-1qaxaoa"&&($.textContent=ie),G=i(n),g=o(n,"HEADER",{class:!0,"data-svelte-h":!0}),h(g)!=="svelte-n87w0o"&&(g.innerHTML=he),W=i(n),T=o(n,"P",{"data-svelte-h":!0}),h(T)!=="svelte-vwsf9r"&&(T.innerHTML=me),B=i(n),V(v.$$.fragment,n),F=i(n),N=o(n,"P",{"data-svelte-h":!0}),h(N)!=="svelte-1xojua4"&&(N.textContent=pe),K=i(n),V(y.$$.fragment,n),n.forEach(p),this.h()},h(){document.title="Node Client - Packages - Nymph.js",c.a=H,M(d,"class","major"),M(u,"class","major"),M(b,"href",Ee+"/packages/client"),M(g,"class","major")},m(a,j){c.m(Ne,document.head),e(document.head,H),fe(a,w,j),fe(a,t,j),e(t,d),e(t,O),e(t,_),e(t,q),e(t,u),e(t,D),X(f,t,null),e(t,A),e(t,r),e(r,J),e(r,x),e(r,R),e(r,C),e(r,I),e(r,E),e(E,b),e(b,U),e(r,z),e(t,Y),e(t,$),e(t,G),e(t,g),e(t,W),e(t,T),e(t,B),X(v,t,null),e(t,F),e(t,N),e(t,K),X(y,t,null),P=!0},p:be,i(a){P||(Z(f.$$.fragment,a),Z(v.$$.fragment,a),Z(y.$$.fragment,a),P=!0)},o(a){ee(f.$$.fragment,a),ee(v.$$.fragment,a),ee(y.$$.fragment,a),P=!1},d(a){a&&(c.d(),p(w),p(t)),p(H),te(f),te(v),te(y)}}}class Oe extends $e{constructor(c){super(),Te(this,c,null,je,ye,{})}}export{Oe as component};
