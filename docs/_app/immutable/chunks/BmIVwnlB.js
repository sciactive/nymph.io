import{S as D,_ as $,a0 as z,a1 as h,a2 as H,a3 as w,a4 as O,U as v,y as b,Q as j,a5 as Q,a6 as V,X as W,a7 as X,a8 as J,a9 as G,aa as k,u as K,ab as U,ac as ee,ad as re,ae as q,af as ne,W as ie,ag as te,ah as ae,ai as Z,A as F,aj as se,ak as A,al as fe,am as ue}from"./xPuFI3q7.js";function R(e,r=null,f){if(typeof e!="object"||e===null||D in e)return e;const u=V(e);if(u!==$&&u!==z)return e;var t=new Map,o=W(e),P=h(0);o&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&H();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):w(s,R(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(v));else{if(o&&typeof n=="string"){var s=t.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&w(s,a)}w(i,v),M(P)}return!0},get(l,n,i){var c;if(n===D)return e;var s=t.get(n),a=n in l;if(s===void 0&&(!a||(c=O(l,n))!=null&&c.writable)&&(s=h(R(a?l[n]:v,g)),t.set(n,s)),s!==void 0){var d=b(s);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var a=t.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===D)return!0;var i=t.get(n),s=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||j!==null&&(!s||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?R(l[n],g):v),t.set(n,i));var a=b(i);if(a===v)return!1}return s},set(l,n,i,s){var m;var a=t.get(n),d=n in l;if(o&&n==="length")for(var c=i;c<a.v;c+=1){var y=t.get(c+"");y!==void 0?w(y,v):c in l&&(y=h(v),t.set(c+"",y))}a===void 0?(!d||(m=O(l,n))!=null&&m.writable)&&(a=h(void 0),w(a,R(i,g)),t.set(n,a)):(d=a.v!==v,w(a,R(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(s,i),!d){if(o&&typeof n=="string"){var x=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=x.v&&w(x,S+1)}M(P)}return!0},ownKeys(l){b(P);var n=Reflect.ownKeys(l).filter(a=>{var d=t.get(a);return d===void 0||d.v!==v});for(var[i,s]of t)s.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){Q()}})}function M(e,r=1){w(e,e.v+r)}let N=!1;function le(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,G)),e.special[r](f),U(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),U(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const _e={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];A(t)&&(t=t());const o=O(t,r);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===D||r===Z)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){A(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},_e)}function Y(e){for(var r=j,f=j;r!==null&&!(r.f&(ee|re));)r=r.parent;try{return q(r),e()}finally{q(f)}}function oe(e,r,f,u){var C;var t=(f&ne)!==0,o=!ie||(f&te)!==0,P=(f&ae)!==0,g=(f&fe)!==0,l=!1,n;P?[n,l]=le(()=>e[r]):n=e[r];var i=D in e||Z in e,s=P&&(((C=O(e,r))==null?void 0:C.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,a=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?a=K(u):a=u),a);n===void 0&&u!==void 0&&(s&&o&&X(),n=y(),s&&s(n));var p;if(o)p=()=>{var _=e[r];return _===void 0?y():(d=!0,c=!1,_)};else{var x=Y(()=>(t?F:se)(()=>e[r]));x.f|=J,p=()=>{var _=b(x);return _!==void 0&&(a=void 0),_===void 0?a:_}}if(!(f&G))return p;if(s){var S=e.$$legacy;return function(_,I){return arguments.length>0?((!o||!I||S||l)&&s(I?p():_),_):p()}}var m=!1,B=!1,T=ue(n),E=Y(()=>F(()=>{var _=p(),I=b(T);return m?(m=!1,B=!0,I):(B=!1,T.v=_)}));return t||(E.equals=k),function(_,I){if(arguments.length>0){const L=I?b(E):o&&P?R(_):_;return E.equals(L)||(m=!0,w(T,L),c&&a!==void 0&&(a=L),K(()=>b(E))),_}return b(E)}}export{R as a,ce as l,oe as p,pe as s};
