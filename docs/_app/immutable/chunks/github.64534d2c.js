import{s as ve,K as H,f as Ee,g as Me,h as ye,d as G,z as U,L as we,i as re,u as bt,v as Oe,M as q,N as De,l as Et,m as Mt,n as yt,I as wt,e as Re,J as Ot,w as Rt,B as St,C as xt,D as Nt,O as kt,b as jt}from"./scheduler.d7e45cc8.js";import{S as Le,i as Ce,a as Be,t as He,b as At,d as Tt,m as mt,e as It}from"./index.77720afb.js";function Pe(e,t){const n={},a={},u={$$scope:1};let l=e.length;for(;l--;){const i=e[l],s=t[l];if(s){for(const o in i)o in s||(a[o]=1);for(const o in s)u[o]||(n[o]=s[o],u[o]=1);e[l]=s}else for(const o in i)u[o]=1}for(const i in a)i in n||(n[i]=void 0);return n}function vt(e){return typeof e=="object"&&e!==null?e:{}}function Dt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ue(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],a=typeof n;(a==="object"||a==="function")&&!Object.isFrozen(n)&&Ue(n)}),e}class Se{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ge(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function v(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach(function(a){for(const u in a)n[u]=a[u]}),n}const Lt="</span>",xe=e=>!!e.scope,Ct=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((a,u)=>`${a}${"_".repeat(u+1)}`)].join(" ")}return`${t}${e}`};class Bt{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Ge(t)}openNode(t){if(!xe(t))return;const n=Ct(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){xe(t)&&(this.buffer+=Lt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ne=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class oe{constructor(){this.rootNode=Ne(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ne({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(a=>this._walk(t,a)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{oe._collapse(n)}))}}class Ht extends oe{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const a=t.root;n&&(a.scope=`language:${n}`),this.add(a)}toHTML(){return new Bt(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function W(e){return e?typeof e=="string"?e:e.source:null}function We(e){return C("(?=",e,")")}function Pt(e){return C("(?:",e,")*")}function Ut(e){return C("(?:",e,")?")}function C(...e){return e.map(n=>W(n)).join("")}function Gt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function le(...e){return"("+(Gt(e).capture?"":"?:")+e.map(a=>W(a)).join("|")+")"}function Ke(e){return new RegExp(e.toString()+"|").exec("").length-1}function Wt(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Kt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ae(e,{joinWith:t}){let n=0;return e.map(a=>{n+=1;const u=n;let l=W(a),i="";for(;l.length>0;){const s=Kt.exec(l);if(!s){i+=l;break}i+=l.substring(0,s.index),l=l.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?i+="\\"+String(Number(s[1])+u):(i+=s[0],s[0]==="("&&n++)}return i}).map(a=>`(${a})`).join(t)}const zt=/\b\B/,ze="[a-zA-Z]\\w*",ce="[a-zA-Z_]\\w*",Fe="\\b\\d+(\\.\\d+)?",Xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ye="\\b(0b[01]+)",Ft="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Xt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=C(t,/.*\b/,e.binary,/\b.*/)),v({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,a)=>{n.index!==0&&a.ignoreMatch()}},e)},K={begin:"\\\\[\\s\\S]",relevance:0},Yt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},Zt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},Jt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Q=function(e,t,n={}){const a=v({scope:"comment",begin:e,end:t,contains:[]},n);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const u=le("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:C(/[ ]+/,"(",u,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},qt=Q("//","$"),Vt=Q("/\\*","\\*/"),Qt=Q("#","$"),$t={scope:"number",begin:Fe,relevance:0},en={scope:"number",begin:Xe,relevance:0},tn={scope:"number",begin:Ye,relevance:0},nn={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]}]},sn={scope:"title",begin:ze,relevance:0},rn={scope:"title",begin:ce,relevance:0},on={begin:"\\.\\s*"+ce,relevance:0},ln=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var J=Object.freeze({__proto__:null,MATCH_NOTHING_RE:zt,IDENT_RE:ze,UNDERSCORE_IDENT_RE:ce,NUMBER_RE:Fe,C_NUMBER_RE:Xe,BINARY_NUMBER_RE:Ye,RE_STARTERS_RE:Ft,SHEBANG:Xt,BACKSLASH_ESCAPE:K,APOS_STRING_MODE:Yt,QUOTE_STRING_MODE:Zt,PHRASAL_WORDS_MODE:Jt,COMMENT:Q,C_LINE_COMMENT_MODE:qt,C_BLOCK_COMMENT_MODE:Vt,HASH_COMMENT_MODE:Qt,NUMBER_MODE:$t,C_NUMBER_MODE:en,BINARY_NUMBER_MODE:tn,REGEXP_MODE:nn,TITLE_MODE:sn,UNDERSCORE_TITLE_MODE:rn,METHOD_GUARD:on,END_SAME_AS_BEGIN:ln});function an(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function cn(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function un(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=an,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function gn(e,t){Array.isArray(e.illegal)&&(e.illegal=le(...e.illegal))}function fn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function hn(e,t){e.relevance===void 0&&(e.relevance=1)}const dn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=n.keywords,e.begin=C(n.beforeMatch,We(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},pn=["of","and","for","in","not","or","if","then","parent","list","value"],_n="keyword";function Ze(e,t,n=_n){const a=Object.create(null);return typeof e=="string"?u(n,e.split(" ")):Array.isArray(e)?u(n,e):Object.keys(e).forEach(function(l){Object.assign(a,Ze(e[l],t,l))}),a;function u(l,i){t&&(i=i.map(s=>s.toLowerCase())),i.forEach(function(s){const o=s.split("|");a[o[0]]=[l,bn(o[0],o[1])]})}}function bn(e,t){return t?Number(t):En(e)?0:1}function En(e){return pn.includes(e.toLowerCase())}const ke={},L=e=>{console.error(e)},je=(e,...t)=>{console.log(`WARN: ${e}`,...t)},B=(e,t)=>{ke[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ke[`${e}/${t}`]=!0)},V=new Error;function Je(e,t,{key:n}){let a=0;const u=e[n],l={},i={};for(let s=1;s<=t.length;s++)i[s+a]=u[s],l[s+a]=!0,a+=Ke(t[s-1]);e[n]=i,e[n]._emit=l,e[n]._multi=!0}function Mn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw L("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),V;if(typeof e.beginScope!="object"||e.beginScope===null)throw L("beginScope must be object"),V;Je(e,e.begin,{key:"beginScope"}),e.begin=ae(e.begin,{joinWith:""})}}function yn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw L("skip, excludeEnd, returnEnd not compatible with endScope: {}"),V;if(typeof e.endScope!="object"||e.endScope===null)throw L("endScope must be object"),V;Je(e,e.end,{key:"endScope"}),e.end=ae(e.end,{joinWith:""})}}function wn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function On(e){wn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Mn(e),yn(e)}function Rn(e){function t(i,s){return new RegExp(W(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,o){o.position=this.position++,this.matchIndexes[this.matchAt]=o,this.regexes.push([o,s]),this.matchAt+=Ke(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(o=>o[1]);this.matcherRe=t(ae(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const o=this.matcherRe.exec(s);if(!o)return null;const d=o.findIndex((k,S)=>S>0&&k!==void 0),M=this.matchIndexes[d];return o.splice(0,d),Object.assign(o,M)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const o=new n;return this.rules.slice(s).forEach(([d,M])=>o.addRule(d,M)),o.compile(),this.multiRegexes[s]=o,o}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,o){this.rules.push([s,o]),o.type==="begin"&&this.count++}exec(s){const o=this.getMatcher(this.regexIndex);o.lastIndex=this.lastIndex;let d=o.exec(s);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,d=M.exec(s)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function u(i){const s=new a;return i.contains.forEach(o=>s.addRule(o.begin,{rule:o,type:"begin"})),i.terminatorEnd&&s.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&s.addRule(i.illegal,{type:"illegal"}),s}function l(i,s){const o=i;if(i.isCompiled)return o;[cn,fn,On,dn].forEach(M=>M(i,s)),e.compilerExtensions.forEach(M=>M(i,s)),i.__beforeBegin=null,[un,gn,hn].forEach(M=>M(i,s)),i.isCompiled=!0;let d=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),d=i.keywords.$pattern,delete i.keywords.$pattern),d=d||/\w+/,i.keywords&&(i.keywords=Ze(i.keywords,e.case_insensitive)),o.keywordPatternRe=t(d,!0),s&&(i.begin||(i.begin=/\B|\b/),o.beginRe=t(o.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(o.endRe=t(o.end)),o.terminatorEnd=W(o.end)||"",i.endsWithParent&&s.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+s.terminatorEnd)),i.illegal&&(o.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(M){return Sn(M==="self"?i:M)})),i.contains.forEach(function(M){l(M,o)}),i.starts&&l(i.starts,s),o.matcher=u(o),o}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=v(e.classNameAliases||{}),l(e)}function qe(e){return e?e.endsWithParent||qe(e.starts):!1}function Sn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return v(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:qe(e)?v(e,{starts:e.starts?v(e.starts):null}):Object.isFrozen(e)?v(e):e}var xn="11.8.0";class Nn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const se=Ge,Ae=v,Te=Symbol("nomatch"),kn=7,Ve=function(e){const t=Object.create(null),n=Object.create(null),a=[];let u=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ht};function o(r){return s.noHighlightRe.test(r)}function d(r){let f=r.className+" ";f+=r.parentNode?r.parentNode.className:"";const _=s.languageDetectRe.exec(f);if(_){const E=m(_[1]);return E||(je(l.replace("{}",_[1])),je("Falling back to no-highlight mode for this block.",r)),E?_[1]:"no-highlight"}return f.split(/\s+/).find(E=>o(E)||m(E))}function M(r,f,_){let E="",w="";typeof f=="object"?(E=r,_=f.ignoreIllegals,w=f.language):(B("10.7.0","highlight(lang, code, ...args) has been deprecated."),B("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),w=r,E=f),_===void 0&&(_=!0);const N={code:E,language:w};F("before:highlight",N);const I=N.result?N.result:k(N.language,N.code,_);return I.code=N.code,F("after:highlight",I),I}function k(r,f,_,E){const w=Object.create(null);function N(c,g){return c.keywords[g]}function I(){if(!h.keywords){O.addText(y);return}let c=0;h.keywordPatternRe.lastIndex=0;let g=h.keywordPatternRe.exec(y),p="";for(;g;){p+=y.substring(c,g.index);const b=A.case_insensitive?g[0].toLowerCase():g[0],R=N(h,b);if(R){const[T,pt]=R;if(O.addText(p),p="",w[b]=(w[b]||0)+1,w[b]<=kn&&(Z+=pt),T.startsWith("_"))p+=g[0];else{const _t=A.classNameAliases[T]||T;j(g[0],_t)}}else p+=g[0];c=h.keywordPatternRe.lastIndex,g=h.keywordPatternRe.exec(y)}p+=y.substring(c),O.addText(p)}function X(){if(y==="")return;let c=null;if(typeof h.subLanguage=="string"){if(!t[h.subLanguage]){O.addText(y);return}c=k(h.subLanguage,y,!0,be[h.subLanguage]),be[h.subLanguage]=c._top}else c=$(y,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(Z+=c.relevance),O.__addSublanguage(c._emitter,c.language)}function x(){h.subLanguage!=null?X():I(),y=""}function j(c,g){c!==""&&(O.startScope(g),O.addText(c),O.endScope())}function he(c,g){let p=1;const b=g.length-1;for(;p<=b;){if(!c._emit[p]){p++;continue}const R=A.classNameAliases[c[p]]||c[p],T=g[p];R?j(T,R):(y=T,I(),y=""),p++}}function de(c,g){return c.scope&&typeof c.scope=="string"&&O.openNode(A.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(j(y,A.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),y=""):c.beginScope._multi&&(he(c.beginScope,g),y="")),h=Object.create(c,{parent:{value:h}}),h}function pe(c,g,p){let b=Wt(c.endRe,p);if(b){if(c["on:end"]){const R=new Se(c);c["on:end"](g,R),R.isMatchIgnored&&(b=!1)}if(b){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return pe(c.parent,g,p)}function ut(c){return h.matcher.regexIndex===0?(y+=c[0],1):(ie=!0,0)}function gt(c){const g=c[0],p=c.rule,b=new Se(p),R=[p.__beforeBegin,p["on:begin"]];for(const T of R)if(T&&(T(c,b),b.isMatchIgnored))return ut(g);return p.skip?y+=g:(p.excludeBegin&&(y+=g),x(),!p.returnBegin&&!p.excludeBegin&&(y=g)),de(p,c),p.returnBegin?0:g.length}function ft(c){const g=c[0],p=f.substring(c.index),b=pe(h,c,p);if(!b)return Te;const R=h;h.endScope&&h.endScope._wrap?(x(),j(g,h.endScope._wrap)):h.endScope&&h.endScope._multi?(x(),he(h.endScope,c)):R.skip?y+=g:(R.returnEnd||R.excludeEnd||(y+=g),x(),R.excludeEnd&&(y=g));do h.scope&&O.closeNode(),!h.skip&&!h.subLanguage&&(Z+=h.relevance),h=h.parent;while(h!==b.parent);return b.starts&&de(b.starts,c),R.returnEnd?0:g.length}function ht(){const c=[];for(let g=h;g!==A;g=g.parent)g.scope&&c.unshift(g.scope);c.forEach(g=>O.openNode(g))}let Y={};function _e(c,g){const p=g&&g[0];if(y+=c,p==null)return x(),0;if(Y.type==="begin"&&g.type==="end"&&Y.index===g.index&&p===""){if(y+=f.slice(g.index,g.index+1),!u){const b=new Error(`0 width match regex (${r})`);throw b.languageName=r,b.badRule=Y.rule,b}return 1}if(Y=g,g.type==="begin")return gt(g);if(g.type==="illegal"&&!_){const b=new Error('Illegal lexeme "'+p+'" for mode "'+(h.scope||"<unnamed>")+'"');throw b.mode=h,b}else if(g.type==="end"){const b=ft(g);if(b!==Te)return b}if(g.type==="illegal"&&p==="")return 1;if(ne>1e5&&ne>g.index*3)throw new Error("potential infinite loop, way more iterations than matches");return y+=p,p.length}const A=m(r);if(!A)throw L(l.replace("{}",r)),new Error('Unknown language: "'+r+'"');const dt=Rn(A);let te="",h=E||dt;const be={},O=new s.__emitter(s);ht();let y="",Z=0,D=0,ne=0,ie=!1;try{if(A.__emitTokens)A.__emitTokens(f,O);else{for(h.matcher.considerAll();;){ne++,ie?ie=!1:h.matcher.considerAll(),h.matcher.lastIndex=D;const c=h.matcher.exec(f);if(!c)break;const g=f.substring(D,c.index),p=_e(g,c);D=c.index+p}_e(f.substring(D))}return O.finalize(),te=O.toHTML(),{language:r,value:te,relevance:Z,illegal:!1,_emitter:O,_top:h}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:r,value:se(f),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:D,context:f.slice(D-100,D+100),mode:c.mode,resultSoFar:te},_emitter:O};if(u)return{language:r,value:se(f),illegal:!1,relevance:0,errorRaised:c,_emitter:O,_top:h};throw c}}function S(r){const f={value:se(r),illegal:!1,relevance:0,_top:i,_emitter:new s.__emitter(s)};return f._emitter.addText(r),f}function $(r,f){f=f||s.languages||Object.keys(t);const _=S(r),E=f.filter(m).filter(fe).map(x=>k(x,r,!1));E.unshift(_);const w=E.sort((x,j)=>{if(x.relevance!==j.relevance)return j.relevance-x.relevance;if(x.language&&j.language){if(m(x.language).supersetOf===j.language)return 1;if(m(j.language).supersetOf===x.language)return-1}return 0}),[N,I]=w,X=N;return X.secondBest=I,X}function Qe(r,f,_){const E=f&&n[f]||_;r.classList.add("hljs"),r.classList.add(`language-${E}`)}function ee(r){let f=null;const _=d(r);if(o(_))return;if(F("before:highlightElement",{el:r,language:_}),r.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),s.throwUnescapedHTML))throw new Nn("One of your code blocks includes unescaped HTML.",r.innerHTML);f=r;const E=f.textContent,w=_?M(E,{language:_,ignoreIllegals:!0}):$(E);r.innerHTML=w.value,Qe(r,_,w.language),r.result={language:w.language,re:w.relevance,relevance:w.relevance},w.secondBest&&(r.secondBest={language:w.secondBest.language,relevance:w.secondBest.relevance}),F("after:highlightElement",{el:r,result:w,text:E})}function $e(r){s=Ae(s,r)}const et=()=>{z(),B("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tt(){z(),B("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ue=!1;function z(){if(document.readyState==="loading"){ue=!0;return}document.querySelectorAll(s.cssSelector).forEach(ee)}function nt(){ue&&z()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",nt,!1);function it(r,f){let _=null;try{_=f(e)}catch(E){if(L("Language definition for '{}' could not be registered.".replace("{}",r)),u)L(E);else throw E;_=i}_.name||(_.name=r),t[r]=_,_.rawDefinition=f.bind(null,e),_.aliases&&ge(_.aliases,{languageName:r})}function st(r){delete t[r];for(const f of Object.keys(n))n[f]===r&&delete n[f]}function rt(){return Object.keys(t)}function m(r){return r=(r||"").toLowerCase(),t[r]||t[n[r]]}function ge(r,{languageName:f}){typeof r=="string"&&(r=[r]),r.forEach(_=>{n[_.toLowerCase()]=f})}function fe(r){const f=m(r);return f&&!f.disableAutodetect}function ot(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=f=>{r["before:highlightBlock"](Object.assign({block:f.el},f))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=f=>{r["after:highlightBlock"](Object.assign({block:f.el},f))})}function lt(r){ot(r),a.push(r)}function at(r){const f=a.indexOf(r);f!==-1&&a.splice(f,1)}function F(r,f){const _=r;a.forEach(function(E){E[_]&&E[_](f)})}function ct(r){return B("10.7.0","highlightBlock will be removed entirely in v12.0"),B("10.7.0","Please use highlightElement now."),ee(r)}Object.assign(e,{highlight:M,highlightAuto:$,highlightAll:z,highlightElement:ee,highlightBlock:ct,configure:$e,initHighlighting:et,initHighlightingOnLoad:tt,registerLanguage:it,unregisterLanguage:st,listLanguages:rt,getLanguage:m,registerAliases:ge,autoDetection:fe,inherit:Ae,addPlugin:lt,removePlugin:at}),e.debugMode=function(){u=!1},e.safeMode=function(){u=!0},e.versionString=xn,e.regex={concat:C,lookahead:We,either:le,optional:Ut,anyNumberOfTimes:Pt};for(const r in J)typeof J[r]=="object"&&Ue(J[r]);return Object.assign(e,J),e},P=Ve({});P.newInstance=()=>Ve({});var jn=P;P.HighlightJS=P;P.default=P;const me=Dt(jn);function An(e){let t;return{c(){t=Et(e[2])},l(n){t=Mt(n,e[2])},m(n,a){re(n,t,a)},p(n,a){a&4&&yt(t,n[2])},d(n){n&&G(t)}}}function Tn(e){let t,n;return{c(){t=new wt(!1),n=Re(),this.h()},l(a){t=Ot(a,!1),n=Re(),this.h()},h(){t.a=n},m(a,u){t.m(e[1],a,u),re(a,n,u)},p(a,u){u&2&&t.p(a[1])},d(a){a&&(G(n),t.d())}}}function mn(e){let t,n;function a(o,d){return o[1]?Tn:An}let u=a(e),l=u(e),i=[{"data-language":e[3]},e[4]],s={};for(let o=0;o<i.length;o+=1)s=H(s,i[o]);return{c(){t=Ee("pre"),n=Ee("code"),l.c(),this.h()},l(o){t=Me(o,"PRE",{"data-language":!0});var d=ye(t);n=Me(d,"CODE",{});var M=ye(n);l.l(M),M.forEach(G),d.forEach(G),this.h()},h(){U(n,"hljs",!0),we(t,s),U(t,"langtag",e[0]),U(t,"svelte-11sh29b",!0)},m(o,d){re(o,t,d),bt(t,n),l.m(n,null)},p(o,[d]){u===(u=a(o))&&l?l.p(o,d):(l.d(1),l=u(o),l&&(l.c(),l.m(n,null))),we(t,s=Pe(i,[d&8&&{"data-language":o[3]},d&16&&o[4]])),U(t,"langtag",o[0]),U(t,"svelte-11sh29b",!0)},i:Oe,o:Oe,d(o){o&&G(t),l.d()}}}function In(e,t,n){const a=["langtag","highlighted","code","languageName"];let u=q(t,a),{langtag:l=!1}=t,{highlighted:i}=t,{code:s}=t,{languageName:o="plaintext"}=t;return e.$$set=d=>{t=H(H({},t),De(d)),n(4,u=q(t,a)),"langtag"in d&&n(0,l=d.langtag),"highlighted"in d&&n(1,i=d.highlighted),"code"in d&&n(2,s=d.code),"languageName"in d&&n(3,o=d.languageName)},[l,i,s,o,u]}class vn extends Le{constructor(t){super(),Ce(this,t,In,mn,ve,{langtag:0,highlighted:1,code:2,languageName:3})}}const Dn=vn,Ln=e=>({highlighted:e&8}),Ie=e=>({highlighted:e[3]});function Cn(e){let t,n;const a=[e[4],{languageName:e[0].name},{langtag:e[2]},{highlighted:e[3]},{code:e[1]}];let u={};for(let l=0;l<a.length;l+=1)u=H(u,a[l]);return t=new Dn({props:u}),{c(){At(t.$$.fragment)},l(l){Tt(t.$$.fragment,l)},m(l,i){mt(t,l,i),n=!0},p(l,i){const s=i&31?Pe(a,[i&16&&vt(l[4]),i&1&&{languageName:l[0].name},i&4&&{langtag:l[2]},i&8&&{highlighted:l[3]},i&2&&{code:l[1]}]):{};t.$set(s)},i(l){n||(Be(t.$$.fragment,l),n=!0)},o(l){He(t.$$.fragment,l),n=!1},d(l){It(t,l)}}}function Bn(e){let t;const n=e[6].default,a=Rt(n,e,e[5],Ie),u=a||Cn(e);return{c(){u&&u.c()},l(l){u&&u.l(l)},m(l,i){u&&u.m(l,i),t=!0},p(l,[i]){a?a.p&&(!t||i&40)&&St(a,n,l,l[5],t?Nt(n,l[5],i,Ln):xt(l[5]),Ie):u&&u.p&&(!t||i&31)&&u.p(l,t?i:-1)},i(l){t||(Be(u,l),t=!0)},o(l){He(u,l),t=!1},d(l){u&&u.d(l)}}}function Hn(e,t,n){const a=["language","code","langtag"];let u=q(t,a),{$$slots:l={},$$scope:i}=t,{language:s}=t,{code:o}=t,{langtag:d=!1}=t;const M=kt();let k="";return jt(()=>{k&&M("highlight",{highlighted:k})}),e.$$set=S=>{t=H(H({},t),De(S)),n(4,u=q(t,a)),"language"in S&&n(0,s=S.language),"code"in S&&n(1,o=S.code),"langtag"in S&&n(2,d=S.langtag),"$$scope"in S&&n(5,i=S.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&(me.registerLanguage(s.name,s.register),n(3,k=me.highlight(o,{language:s.name}).value))},[s,o,d,k,u,i,l]}class Pn extends Le{constructor(t){super(),Ce(this,t,Hn,Bn,ve,{language:0,code:1,langtag:2})}}const Kn=Pn,Un=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`,zn=Un;export{Kn as H,zn as g};
