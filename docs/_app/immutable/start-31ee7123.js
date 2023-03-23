import{S as nt,i as at,s as ot,a as it,e as B,c as st,b as z,g as de,t as F,d as pe,f as G,h as J,j as lt,o as Ie,k as ct,l as ft,m as ut,n as be,p as q,q as dt,r as pt,u as mt,v as W,w as Y,x as Te,y as X,z as Z,A as ce}from"./chunks/index-8e853c83.js";import{S as tt,I as C,g as ze,f as He,a as Ee,b as fe,s as M,i as We,c as ue,P as Ye,d as _t,e as ht}from"./chunks/singletons-8a880416.js";import{s as gt}from"./chunks/paths-b4419565.js";function yt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function wt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(n,e){const r=new URL(n);for(const s of bt){let o=r[s];Object.defineProperty(r,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(r),r}function kt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(n){return n.replace(/\/$/,"")+Rt}function Ot(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=r.length;for(;s;)e=e*33^r[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(n,e)=>((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(De(n)),me(n,e));const te=new Map;function It(n,e){const r=De(n,e),s=document.querySelector(r);if(s!=null&&s.textContent){const{body:o,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(r,{body:o,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,u))}return me(n,e)}function At(n,e,r){if(te.size>0){const s=De(n,r),o=te.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(r==null?void 0:r.cache))return new Response(o.body,o.init);te.delete(s)}}return me(e,r)}function De(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Dt(n).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(T=>parseInt(T,16))));const g=Pt.exec(h);if(!g)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,L,U,$]=g;return e.push({name:U,matcher:$,optional:!!w,rest:!!L,chained:L?p===1&&t[0]==="":!1}),L?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Tt(n){return!/^\([^)]+\)$/.test(n)}function Dt(n){return n.slice(1).split("/").filter(Tt)}function Vt(n,e,r){const s={},o=n.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=o[t];if(f.chained&&f.rest&&u&&(h=h?u+"/"+h:u),u="",h===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!r[f.matcher](h)){if(f.optional&&f.chained){let p=o.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=h;else return}for(;p>=t;)o[p]=o[p-1],p-=1;continue}return}s[f.name]=h}}if(!u)return s}function ke(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt(n,e,r,s){const o=new Set(e);return Object.entries(r).map(([f,[h,p,g]])=>{const{pattern:w,params:L}=St(f),U={id:f,exec:$=>{const T=w.exec($);if(T)return Vt(T,L,s)},errors:[1,...g||[]].map($=>n[$]),layouts:[0,...p||[]].map(t),leaf:u(h)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function u(f){const h=f<0;return h&&(f=~f),[h,n[f]]}function t(f){return f===void 0?f:[o.has(f),n[f]]}}function Ut(n){let e,r,s;var o=n[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),o!==(o=t[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function $t(n){let e,r,s;var o=n[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return o&&(e=W(o,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function jt(n){let e,r,s;var o=n[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),o!==(o=t[0][1])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function Xe(n){let e,r=n[5]&&Ze(n);return{c(){e=ct("div"),r&&r.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ut(e);r&&r.l(o),o.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){z(s,e,o),r&&r.m(e,null)},p(s,o){s[5]?r?r.p(s,o):(r=Ze(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(s){s&&J(e),r&&r.d()}}}function Ze(n){let e;return{c(){e=dt(n[6])},l(r){e=pt(r,n[6])},m(r,s){z(r,e,s)},p(r,s){s&64&&mt(e,r[6])},d(r){r&&J(e)}}}function qt(n){let e,r,s,o,u;const t=[$t,Ut],f=[];function h(g,w){return g[0][1]?0:1}e=h(n),r=f[e]=t[e](n);let p=n[4]&&Xe(n);return{c(){r.c(),s=it(),p&&p.c(),o=B()},l(g){r.l(g),s=st(g),p&&p.l(g),o=B()},m(g,w){f[e].m(g,w),z(g,s,w),p&&p.m(g,w),z(g,o,w),u=!0},p(g,[w]){let L=e;e=h(g),e===L?f[e].p(g,w):(de(),F(f[L],1,1,()=>{f[L]=null}),pe(),r=f[e],r?r.p(g,w):(r=f[e]=t[e](g),r.c()),G(r,1),r.m(s.parentNode,s)),g[4]?p?p.p(g,w):(p=Xe(g),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(g){u||(G(r),u=!0)},o(g){F(r),u=!1},d(g){f[e].d(g),g&&J(s),p&&p.d(g),g&&J(o)}}}function Ct(n,e,r){let{stores:s}=e,{page:o}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;lt(s.page.notify);let p=!1,g=!1,w=null;return Ie(()=>{const L=s.page.subscribe(()=>{p&&(r(5,g=!0),r(6,w=document.title||"untitled page"))});return r(4,p=!0),L}),n.$$set=L=>{"stores"in L&&r(7,s=L.stores),"page"in L&&r(8,o=L.page),"components"in L&&r(0,u=L.components),"form"in L&&r(1,t=L.form),"data_0"in L&&r(2,f=L.data_0),"data_1"in L&&r(3,h=L.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(o)},[u,t,f,h,p,g,w,s,o]}class Bt extends nt{constructor(e){super(),at(this,e,Ct,qt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(n,e){return new URL(n,e).href},Qe={},O=function(e,r,s){if(!r||r.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(r.map(u=>{if(u=Gt(u,s),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ft,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},_e=[()=>O(()=>import("./chunks/0-7a2326d4.js"),["./chunks/0-7a2326d4.js","./chunks/_layout-79cb23d1.js","./components/pages/_layout.svelte-77ff0f49.js","./chunks/index-8e853c83.js","./chunks/Icon-19c981cb.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/1-b56b98c8.js"),["./chunks/1-b56b98c8.js","./components/error.svelte-56daecdc.js","./chunks/index-8e853c83.js","./chunks/singletons-8a880416.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/2-5e17be49.js"),["./chunks/2-5e17be49.js","./components/pages/_page.svelte-025c19d4.js","./chunks/index-8e853c83.js","./chunks/Icon-19c981cb.js"],import.meta.url),()=>O(()=>import("./chunks/3-7c850b03.js"),["./chunks/3-7c850b03.js","./components/pages/packages/client/_page.svelte-352604e3.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/4-00ee5f8b.js"),["./chunks/4-00ee5f8b.js","./components/pages/packages/client-node/_page.svelte-732ca138.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/5-6233efda.js"),["./chunks/5-6233efda.js","./components/pages/packages/driver-mysql/_page.svelte-39286276.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/6-dc730334.js"),["./chunks/6-dc730334.js","./components/pages/packages/driver-postgresql/_page.svelte-e4b6c10c.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/7-0b5e19f8.js"),["./chunks/7-0b5e19f8.js","./components/pages/packages/driver-sqlite3/_page.svelte-dddf4248.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/8-2262378a.js"),["./chunks/8-2262378a.js","./components/pages/packages/guid/_page.svelte-7b00a7f8.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/9-05115de3.js"),["./chunks/9-05115de3.js","./components/pages/packages/nymph/_page.svelte-80bec0d7.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/10-64608ec8.js"),["./chunks/10-64608ec8.js","./components/pages/packages/pubsub/_page.svelte-e3b00eb3.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/11-0d8892de.js"),["./chunks/11-0d8892de.js","./components/pages/packages/query-parser/_page.svelte-6b79b945.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/12-65fefd2b.js"),["./chunks/12-65fefd2b.js","./components/pages/packages/server/_page.svelte-49909baa.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/13-e41c0caa.js"),["./chunks/13-e41c0caa.js","./components/pages/packages/sorter/_page.svelte-5d945c07.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/14-7bf0d4c8.js"),["./chunks/14-7bf0d4c8.js","./components/pages/packages/tilmeld/_page.svelte-a95f2373.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/15-2e1d448a.js"),["./chunks/15-2e1d448a.js","./components/pages/packages/tilmeld-client/_page.svelte-c8d67f28.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/16-d694d0eb.js"),["./chunks/16-d694d0eb.js","./components/pages/packages/tilmeld-components/_page.svelte-7cd771c4.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js"],import.meta.url),()=>O(()=>import("./chunks/17-726e3941.js"),["./chunks/17-726e3941.js","./components/pages/packages/tilmeld-setup/_page.svelte-88a69e35.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/bash-2b754df6.js","./chunks/typescript-7dd1ec19.js"],import.meta.url),()=>O(()=>import("./chunks/18-06188613.js"),["./chunks/18-06188613.js","./components/pages/user-guide/creating-entities/_page.svelte-38ec8ea2.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/19-46ded7a6.js"),["./chunks/19-46ded7a6.js","./components/pages/user-guide/defining-entities/_page.svelte-5e8cd0bd.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/20-66a300ee.js"),["./chunks/20-66a300ee.js","./components/pages/user-guide/entity-class/_page.svelte-59056c79.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/21-d1242c17.js"),["./chunks/21-d1242c17.js","./components/pages/user-guide/entity-querying/_page.svelte-193f87b2.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/22-cbdc09a8.js"),["./chunks/22-cbdc09a8.js","./components/pages/user-guide/export-and-import/_page.svelte-5b715e5c.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/23-30406b49.js"),["./chunks/23-30406b49.js","./components/pages/user-guide/introduction/_page.svelte-e6eacc2c.js","./chunks/index-8e853c83.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/24-3aed6f77.js"),["./chunks/24-3aed6f77.js","./components/pages/user-guide/subscribing-to-queries/_page.svelte-c06c3af7.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/25-735305bf.js"),["./chunks/25-735305bf.js","./components/pages/user-guide/transactions/_page.svelte-fd5c77ec.js","./chunks/index-8e853c83.js","./chunks/paths-b4419565.js"],import.meta.url),()=>O(()=>import("./chunks/26-996c06e6.js"),["./chunks/26-996c06e6.js","./components/pages/user-guide/uids/_page.svelte-3146bd95.js","./chunks/index-8e853c83.js","./chunks/github-07e092b5.js","./assets/github-30db5443.css","./chunks/typescript-7dd1ec19.js","./chunks/paths-b4419565.js"],import.meta.url)],Kt=[],Mt={"/":[2],"/packages/client-node":[4],"/packages/client":[3],"/packages/driver-mysql":[5],"/packages/driver-postgresql":[6],"/packages/driver-sqlite3":[7],"/packages/guid":[8],"/packages/nymph":[9],"/packages/pubsub":[10],"/packages/query-parser":[11],"/packages/server":[12],"/packages/sorter":[13],"/packages/tilmeld-client":[15],"/packages/tilmeld-components":[16],"/packages/tilmeld-setup":[17],"/packages/tilmeld":[14],"/user-guide/creating-entities":[18],"/user-guide/defining-entities":[19],"/user-guide/entity-class":[20],"/user-guide/entity-querying":[21],"/user-guide/export-and-import":[22],"/user-guide/introduction":[23],"/user-guide/subscribing-to-queries":[24],"/user-guide/transactions":[25],"/user-guide/uids":[26]},zt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,r){this.status=e,this.location=r}}async function Ht(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,o])=>[s,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function er(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function s(o,u=!1){if(o===Wt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===Qt)return-1/0;if(o===xt)return-0;if(u)throw new Error("Invalid input");if(o in r)return r[o];const t=e[o];if(!t||typeof t!="object")r[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[o]=new Date(t[1]);break;case"Set":const h=new Set;r[o]=h;for(let w=1;w<t.length;w+=1)h.add(s(t[w]));break;case"Map":const p=new Map;r[o]=p;for(let w=1;w<t.length;w+=2)p.set(s(t[w]),s(t[w+1]));break;case"RegExp":r[o]=new RegExp(t[1],t[2]);break;case"Object":r[o]=Object(t[1]);break;case"BigInt":r[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);r[o]=f;for(let h=0;h<t.length;h+=1){const p=t[h];p!==Yt&&(f[h]=s(p))}}else{const f={};r[o]=f;for(const h in t){const p=t[h];f[h]=s(p)}}return r[o]}return s(0)}const Re=Nt(_e,Kt,Mt,Jt),Pe=_e[0],Se=_e[1];Pe();Se();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Le(n){re[n]=ue()}function tr({target:n,base:e}){var Je;const r=document.documentElement,s=[];let o=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,p=!0,g=!1,w=!1,L=!1,U=!1,$,T=(Je=history.state)==null?void 0:Je[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const he=re[T];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let K,Ve,ne;async function Ne(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),i=ie(a,!0);o=null,await $e(i,a,[])}async function ge(a,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:d=!1},_,v){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:i?ue():null,keepfocus:l,redirect_chain:_,details:{state:m,replaceState:c},nav_token:v,accepted:()=>{d&&(U=!0)},blocked:()=>{},type:"goto"})}async function Ue(a){const i=ie(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:i.id,promise:Ce(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function ae(...a){const c=Re.filter(l=>a.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(c)}async function $e(a,i,c,l,m={},d){var v,b;Ve=m;let _=a&&await Ce(a);if(_||(_=await Ge(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,Ve!==m)return!1;if(_.type==="redirect")if(c.length>10||c.includes(i.pathname))_=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ge(new URL(_.location,i).href,{},[...c,i.pathname],m),!1;else((b=(v=_.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await M.updated.check()&&await le(i);if(s.length=0,U=!1,g=!0,l&&l.details){const{details:y}=l,k=y.replaceState?0:1;y.state[C]=T+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(o=null,h?(t=_.state,_.props.page&&(_.props.page.url=i),$.$set(_.props)):je(_),l){const{scroll:y,keepfocus:k}=l;if(k||Oe(),await ce(),p){const I=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();p=!0,_.props.page&&(K=_.props.page),d&&d(),g=!1}function je(a){var l;t=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),K=a.props.page,$=new Bt({target:n,props:{...a.props,stores:M},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(m=>m(c)),h=!0}async function Q({url:a,params:i,branch:c,status:l,error:m,route:d,form:_}){const v=c.filter(Boolean);let b="never";for(const A of c)(A==null?void 0:A.slash)!==void 0&&(b=A.slash);a.pathname=yt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:c,error:m,route:d},props:{components:v.map(A=>A.node.component)}};_!==void 0&&(y.props.form=_);let k={},I=!K;for(let A=0;A<v.length;A+=1){const E=v[A];k={...k,...E.data},(I||!t.branch.some(V=>V===E))&&(y.props[`data_${A}`]=k,I=I||Object.keys(E.data??{}).length>0)}return I||(I=Object.keys(K.data).length!==Object.keys(k).length),(!t.url||a.href!==t.url.href||t.error!==m||_!==void 0||I)&&(y.props.page={error:m,params:i,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(a),form:_??null,data:I?k:K.data}),y}async function ye({loader:a,parent:i,url:c,params:l,route:m,server_data_node:d}){var y,k,I;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.universal)!=null&&y.load){let j=function(...E){for(const V of E){const{href:N}=new URL(V,c);v.dependencies.add(N)}};const A={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(E,V)=>(v.params.add(V),E[V])}),data:(d==null?void 0:d.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,V){let N;E instanceof Request?(N=E.url,V={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...V}):N=E;const R=new URL(N,c).href;return j(R),h?At(N,R,V):It(N,V)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,i()}};_=await b.universal.load.call(null,A)??null,_=_?await Ht(_):null}return{node:b,loader:a,server:d,universal:(k=b.universal)!=null&&k.load?{type:"data",data:_,uses:v}:null,data:_??(d==null?void 0:d.data)??null,slash:((I=b.universal)==null?void 0:I.trailingSlash)??(d==null?void 0:d.slash)}}function qe(a,i,c,l,m){if(U)return!0;if(!l)return!1;if(l.parent&&a||l.route&&i||l.url&&c)return!0;for(const d of l.params)if(m[d]!==t.params[d])return!0;for(const d of l.dependencies)if(s.some(_=>_(new URL(d))))return!0;return!1}function we(a,i){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?i??null:null}async function Ce({id:a,invalidating:i,url:c,params:l,route:m}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:d,layouts:_,leaf:v}=m,b=[..._,v];d.forEach(R=>R==null?void 0:R().catch(()=>{})),b.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const k=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,j=b.reduce((R,S,D)=>{var x;const P=t.branch[D],H=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||qe(R.some(Boolean),I,k,(x=P.server)==null?void 0:x.uses,l));return R.push(H),R},[]);if(j.some(Boolean)){try{y=await et(c,j)}catch(R){return oe({status:500,error:await ee(R,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let E=!1;const V=b.map(async(R,S)=>{var x;if(!R)return;const D=t.branch[S],P=A==null?void 0:A[S];if((!P||P.type==="skip")&&R[1]===(D==null?void 0:D.loader)&&!qe(E,I,k,(x=D.universal)==null?void 0:x.uses,l))return D;if(E=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:R[1],url:c,params:l,route:m,parent:async()=>{var Me;const Ke={};for(let ve=0;ve<S;ve+=1)Object.assign(Ke,(Me=await V[ve])==null?void 0:Me.data);return Ke},server_data_node:we(P===void 0&&R[0]?{type:"skip"}:P??null,D==null?void 0:D.server)})});for(const R of V)R.catch(()=>{});const N=[];for(let R=0;R<b.length;R+=1)if(b[R])try{N.push(await V[R])}catch(S){if(S instanceof xe)return{type:"redirect",location:S.location};let D=500,P;A!=null&&A.includes(S)?(D=S.status??D,P=S.error):S instanceof Ae?(D=S.status,P=S.body):P=await ee(S,{params:l,url:c,route:{id:m.id}});const H=await Be(R,N,d);return H?await Q({url:c,params:l,branch:N.slice(0,H.idx).concat(H.node),status:D,error:P,route:m}):await Ge(c,{id:m.id},P,D)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:m,form:i?void 0:null})}async function Be(a,i,c){for(;a--;)if(c[a]){let l=a;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:i,url:c,route:l}){const m={},d=await Pe();let _=null;if(d.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;_=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await ye({loader:Pe,url:c,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:we(_)}),b={node:await Se(),loader:Se,universal:null,server:null,data:null};return await Q({url:c,params:m,branch:[v,b],status:a,error:i,route:null})}function ie(a,i){if(We(a,e))return;const c=wt(a.pathname.slice(e.length)||"/");for(const l of Re){const m=l.exec(c);if(m)return{id:a.pathname+a.search,invalidating:i,route:l,params:vt(m),url:a}}}function Fe({url:a,type:i,intent:c,delta:l}){var v,b;let m=!1;const d={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:a},willUnload:!c,type:i};l!==void 0&&(d.delta=l);const _={...d,cancel:()=>{m=!0}};return w||u.before_navigate.forEach(y=>y(_)),m?null:d}async function se({url:a,scroll:i,keepfocus:c,redirect_chain:l,details:m,type:d,delta:_,nav_token:v,accepted:b,blocked:y}){const k=ie(a,!1),I=Fe({url:a,type:d,delta:_,intent:k});if(!I){y();return}Le(T),b(),w=!0,h&&M.navigating.set(I),await $e(k,a,l,{scroll:i,keepfocus:c,details:m},v,()=>{w=!1,u.after_navigate.forEach(j=>j(I)),M.navigating.set(null)})}async function Ge(a,i,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:i}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;r.addEventListener("mousemove",d=>{const _=d.target;clearTimeout(a),a=setTimeout(()=>{l(_,2)},20)});function i(d){l(d.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(d=>{for(const _ of d)_.isIntersecting&&(ae(new URL(_.target.href).pathname),c.unobserve(_.target))},{threshold:0});function l(d,_){const v=He(d,r);if(!v)return;const{url:b,external:y}=Ee(v,e);if(y)return;const k=fe(v);k.reload||(_<=k.preload_data?Ue(b):_<=k.preload_code&&ae(b.pathname))}function m(){c.disconnect();for(const d of r.querySelectorAll("a")){const{url:_,external:v}=Ee(d,e);if(v)continue;const b=fe(d);b.reload||(b.preload_code===Ye.viewport&&c.observe(d),b.preload_code===Ye.eager&&ae(_.pathname))}}u.after_navigate.push(m),m()}return{after_navigate:a=>{Ie(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{Ie(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!h)&&(p=!1)},goto:(a,i={})=>ge(a,i,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:i}=new URL(a,location.href);s.push(c=>c.href===i)}return Ne()},invalidateAll:()=>(U=!0,Ne()),preload_data:async a=>{const i=new URL(a,ze(document));await Ue(i)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const m=await Be(t.branch.length,c,l.errors);if(m){const d=await Q({url:i,params:t.params,branch:c.slice(0,m.idx).concat(m.node),status:a.status??500,error:a.error,route:l});t=d.state,$.$set(d.props),ce().then(Oe)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...K,form:a.data,status:a.status}};$.$set(i),a.type==="success"&&ce().then(Oe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!w){const m={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(m))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(T);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=He(i.composedPath()[0],r);if(!c)return;const{url:l,external:m,has:d}=Ee(c,e),_=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(m||_.reload){Fe({url:l,type:"link"})||i.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){L=!0,Le(T),t.url=l,M.page.set({...K,url:l}),M.page.notify();return}se({url:l,scroll:_.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),r.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(d,e))return;const _=i.target,{noscroll:v,reload:b}=fe(_);if(b)return;i.preventDefault(),i.stopPropagation();const y=new FormData(_),k=l==null?void 0:l.getAttribute("name");k&&y.append(k,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),se({url:d,scroll:v?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[C]){if(i.state[C]===T)return;const l=i.state[C]-T;se({url:new URL(location.href),scroll:re[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=i.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{L&&(L=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a=200,error:i,node_ids:c,params:l,route:m,data:d,form:_})=>{f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=ie(v,!1)||{});let b;try{const y=c.map(async(k,I)=>{const j=d[I];return ye({loader:_e[k],url:v,params:l,route:m,parent:async()=>{const A={};for(let E=0;E<I;E+=1)Object.assign(A,(await y[E]).data);return A},server_data_node:we(j)})});b=await Q({url:v,params:l,branch:await Promise.all(y),status:a,error:i,form:_,route:Re.find(({id:k})=>k===m.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}b=await oe({status:y instanceof Ae?y.status:500,error:await ee(y,{url:v,params:l,route:m}),url:v,route:m})}je(b)}}}async function et(n,e){var u;const r=new URL(n);r.pathname=Lt(n.pathname),r.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await me(r.href),o=await s.json();if(!s.ok)throw new Error(o);return(u=o.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=er(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ee(n,e){return n instanceof Ae?n.body:zt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Oe(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function or({env:n,hydrate:e,paths:r,target:s,version:o}){gt(r),ht(o);const u=tr({target:s,base:r.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{or as start};