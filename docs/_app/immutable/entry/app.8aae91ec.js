import{s as C,a as B,e as p,c as U,i as v,d as g,b as j,o as W,f as z,g as F,h as G,j as I,k as d,l as H,m as J,n as K,t as M,p as O,q as w}from"../chunks/scheduler.d7e45cc8.js";import{S as Q,i as X,t as h,c as L,a as E,g as D,b as R,d as T,m as P,e as b}from"../chunks/index.77720afb.js";const Y="modulepreload",Z=function(_){return"/"+_},V={},l=function(e,i,r){if(!i||i.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(i.map(c=>{if(c=Z(c),c in V)return;V[c]=!0;const t=c.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!r)for(let a=n.length-1;a>=0;a--){const m=n[a];if(m.href===c&&(!t||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=c,document.head.appendChild(o),t)return new Promise((a,m)=>{o.addEventListener("load",a),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},se={};function $(_){let e,i,r;var n=_[1][0];function c(t){return{props:{data:t[3],form:t[2]}}}return n&&(e=w(n,c(_)),_[12](e)),{c(){e&&R(e.$$.fragment),i=p()},l(t){e&&T(e.$$.fragment,t),i=p()},m(t,s){e&&P(e,t,s),v(t,i,s),r=!0},p(t,s){const f={};if(s&8&&(f.data=t[3]),s&4&&(f.form=t[2]),s&2&&n!==(n=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{b(o,1)}),L()}n?(e=w(n,c(t)),t[12](e),R(e.$$.fragment),E(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else n&&e.$set(f)},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&g(i),_[12](null),e&&b(e,t)}}}function x(_){let e,i,r;var n=_[1][0];function c(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return n&&(e=w(n,c(_)),_[11](e)),{c(){e&&R(e.$$.fragment),i=p()},l(t){e&&T(e.$$.fragment,t),i=p()},m(t,s){e&&P(e,t,s),v(t,i,s),r=!0},p(t,s){const f={};if(s&8&&(f.data=t[3]),s&8215&&(f.$$scope={dirty:s,ctx:t}),s&2&&n!==(n=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{b(o,1)}),L()}n?(e=w(n,c(t)),t[11](e),R(e.$$.fragment),E(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else n&&e.$set(f)},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&g(i),_[11](null),e&&b(e,t)}}}function ee(_){let e,i,r;var n=_[1][1];function c(t){return{props:{data:t[4],form:t[2]}}}return n&&(e=w(n,c(_)),_[10](e)),{c(){e&&R(e.$$.fragment),i=p()},l(t){e&&T(e.$$.fragment,t),i=p()},m(t,s){e&&P(e,t,s),v(t,i,s),r=!0},p(t,s){const f={};if(s&16&&(f.data=t[4]),s&4&&(f.form=t[2]),s&2&&n!==(n=t[1][1])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{b(o,1)}),L()}n?(e=w(n,c(t)),t[10](e),R(e.$$.fragment),E(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else n&&e.$set(f)},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&g(i),_[10](null),e&&b(e,t)}}}function A(_){let e,i=_[6]&&y(_);return{c(){e=z("div"),i&&i.c(),this.h()},l(r){e=F(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=G(e);i&&i.l(n),n.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,n){v(r,e,n),i&&i.m(e,null)},p(r,n){r[6]?i?i.p(r,n):(i=y(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(r){r&&g(e),i&&i.d()}}}function y(_){let e;return{c(){e=H(_[7])},l(i){e=J(i,_[7])},m(i,r){v(i,e,r)},p(i,r){r&128&&K(e,i[7])},d(i){i&&g(e)}}}function te(_){let e,i,r,n,c;const t=[x,$],s=[];function f(a,m){return a[1][1]?0:1}e=f(_),i=s[e]=t[e](_);let o=_[5]&&A(_);return{c(){i.c(),r=B(),o&&o.c(),n=p()},l(a){i.l(a),r=U(a),o&&o.l(a),n=p()},m(a,m){s[e].m(a,m),v(a,r,m),o&&o.m(a,m),v(a,n,m),c=!0},p(a,[m]){let k=e;e=f(a),e===k?s[e].p(a,m):(D(),h(s[k],1,1,()=>{s[k]=null}),L(),i=s[e],i?i.p(a,m):(i=s[e]=t[e](a),i.c()),E(i,1),i.m(r.parentNode,r)),a[5]?o?o.p(a,m):(o=A(a),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i(a){c||(E(i),c=!0)},o(a){h(i),c=!1},d(a){a&&(g(r),g(n)),s[e].d(a),o&&o.d(a)}}}function ie(_,e,i){let{stores:r}=e,{page:n}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:f=null}=e,{data_1:o=null}=e;j(r.page.notify);let a=!1,m=!1,k=null;W(()=>{const u=r.page.subscribe(()=>{a&&(i(6,m=!0),M().then(()=>{i(7,k=document.title||"untitled page")}))});return i(5,a=!0),u});function q(u){O[u?"unshift":"push"](()=>{t[1]=u,i(0,t)})}function N(u){O[u?"unshift":"push"](()=>{t[0]=u,i(0,t)})}function S(u){O[u?"unshift":"push"](()=>{t[0]=u,i(0,t)})}return _.$$set=u=>{"stores"in u&&i(8,r=u.stores),"page"in u&&i(9,n=u.page),"constructors"in u&&i(1,c=u.constructors),"components"in u&&i(0,t=u.components),"form"in u&&i(2,s=u.form),"data_0"in u&&i(3,f=u.data_0),"data_1"in u&&i(4,o=u.data_1)},_.$$.update=()=>{_.$$.dirty&768&&r.page.set(n)},[t,c,s,f,o,a,m,k,r,n,q,N,S]}class oe extends Q{constructor(e){super(),X(this,e,ie,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const _e=[()=>l(()=>import("../nodes/0.eb587972.js"),["_app/immutable/nodes/0.eb587972.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/Icon.050ff215.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/1.3e67dd50.js"),["_app/immutable/nodes/1.3e67dd50.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/singletons.faf0a52c.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/2.adc99557.js"),["_app/immutable/nodes/2.adc99557.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/Icon.050ff215.js"]),()=>l(()=>import("../nodes/3.1d509ff4.js"),["_app/immutable/nodes/3.1d509ff4.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/4.3360583b.js"),["_app/immutable/nodes/4.3360583b.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/5.0b26b696.js"),["_app/immutable/nodes/5.0b26b696.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/6.e58e9779.js"),["_app/immutable/nodes/6.e58e9779.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/7.ba2eca6e.js"),["_app/immutable/nodes/7.ba2eca6e.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/8.5d0fa90b.js"),["_app/immutable/nodes/8.5d0fa90b.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/9.dd3d7b3a.js"),["_app/immutable/nodes/9.dd3d7b3a.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/10.74e9b544.js"),["_app/immutable/nodes/10.74e9b544.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/11.255d0ca1.js"),["_app/immutable/nodes/11.255d0ca1.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/12.b900fcff.js"),["_app/immutable/nodes/12.b900fcff.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/13.f8c5ad83.js"),["_app/immutable/nodes/13.f8c5ad83.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/14.0448e6e5.js"),["_app/immutable/nodes/14.0448e6e5.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/15.d517831e.js"),["_app/immutable/nodes/15.d517831e.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/16.de906698.js"),["_app/immutable/nodes/16.de906698.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js"]),()=>l(()=>import("../nodes/17.61cc7221.js"),["_app/immutable/nodes/17.61cc7221.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/bash.7e4226ac.js","_app/immutable/chunks/typescript.09c48802.js"]),()=>l(()=>import("../nodes/18.cae0e6d0.js"),["_app/immutable/nodes/18.cae0e6d0.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/19.bdc12e86.js"),["_app/immutable/nodes/19.bdc12e86.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/20.9069807c.js"),["_app/immutable/nodes/20.9069807c.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/21.f0d11c05.js"),["_app/immutable/nodes/21.f0d11c05.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/22.e80f4bca.js"),["_app/immutable/nodes/22.e80f4bca.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/23.e56d922d.js"),["_app/immutable/nodes/23.e56d922d.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/24.82606410.js"),["_app/immutable/nodes/24.82606410.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/25.0a00f3be.js"),["_app/immutable/nodes/25.0a00f3be.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"]),()=>l(()=>import("../nodes/26.8d2d7854.js"),["_app/immutable/nodes/26.8d2d7854.js","_app/immutable/chunks/scheduler.d7e45cc8.js","_app/immutable/chunks/index.77720afb.js","_app/immutable/chunks/github.64534d2c.js","_app/immutable/assets/github.c47a857b.css","_app/immutable/chunks/typescript.09c48802.js","_app/immutable/chunks/paths.d4a6803e.js"])],ae=[],ce={"/":[2],"/packages/client-node":[4],"/packages/client":[3],"/packages/driver-mysql":[5],"/packages/driver-postgresql":[6],"/packages/driver-sqlite3":[7],"/packages/guid":[8],"/packages/nymph":[9],"/packages/pubsub":[10],"/packages/query-parser":[11],"/packages/server":[12],"/packages/sorter":[13],"/packages/tilmeld-client":[15],"/packages/tilmeld-components":[16],"/packages/tilmeld-setup":[17],"/packages/tilmeld":[14],"/user-guide/creating-entities":[18],"/user-guide/defining-entities":[19],"/user-guide/entity-class":[20],"/user-guide/entity-querying":[21],"/user-guide/export-and-import":[22],"/user-guide/introduction":[23],"/user-guide/subscribing-to-queries":[24],"/user-guide/transactions":[25],"/user-guide/uids":[26]},le={handleError:({error:_})=>{console.error(_)}};export{ce as dictionary,le as hooks,se as matchers,_e as nodes,oe as root,ae as server_loads};
