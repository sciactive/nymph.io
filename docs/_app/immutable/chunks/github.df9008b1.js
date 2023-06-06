import{S as De,i as Le,s as Ce,U as H,k as Me,l as ye,m as we,h as U,H as P,V as Oe,b as re,C as pt,W as Be,D as Re,X as q,Y as He,q as _t,r as bt,u as Et,R as Mt,e as xe,T as yt,E as wt,J as Ot,K as Rt,L as xt,g as Pe,d as Ue,Z as Nt,j as St,y as jt,z as kt,A as At,_ as Tt,B as mt}from"./index.d7cc8d8b.js";function vt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ae={exports:{}};function le(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&le(n)}),e}ae.exports=le;ae.exports.default=le;class Ne{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ge(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function I(e,...t){const n=Object.create(null);for(const l in e)n[l]=e[l];return t.forEach(function(l){for(const u in l)n[u]=l[u]}),n}const It="</span>",Se=e=>!!e.scope||e.sublanguage&&e.language,Dt=(e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((l,u)=>`${l}${"_".repeat(u+1)}`)].join(" ")}return`${t}${e}`};class Lt{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Ge(t)}openNode(t){if(!Se(t))return;let n="";t.sublanguage?n=`language-${t.language}`:n=Dt(t.scope,{prefix:this.classPrefix}),this.span(n)}closeNode(t){Se(t)&&(this.buffer+=It)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const je=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class oe{constructor(){this.rootNode=je(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=je({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(l=>this._walk(t,l)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{oe._collapse(n)}))}}class Ct extends oe{constructor(t){super(),this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){const l=t.root;l.sublanguage=!0,l.language=n,this.add(l)}toHTML(){return new Lt(this,this.options).value()}finalize(){return!0}}function G(e){return e?typeof e=="string"?e:e.source:null}function Ke(e){return C("(?=",e,")")}function Bt(e){return C("(?:",e,")*")}function Ht(e){return C("(?:",e,")?")}function C(...e){return e.map(n=>G(n)).join("")}function Pt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ce(...e){return"("+(Pt(e).capture?"":"?:")+e.map(l=>G(l)).join("|")+")"}function We(e){return new RegExp(e.toString()+"|").exec("").length-1}function Ut(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Gt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ue(e,{joinWith:t}){let n=0;return e.map(l=>{n+=1;const u=n;let a=G(l),s="";for(;a.length>0;){const i=Gt.exec(a);if(!i){s+=a;break}s+=a.substring(0,i.index),a=a.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?s+="\\"+String(Number(i[1])+u):(s+=i[0],i[0]==="("&&n++)}return s}).map(l=>`(${l})`).join(t)}const Kt=/\b\B/,ze="[a-zA-Z]\\w*",ge="[a-zA-Z_]\\w*",Fe="\\b\\d+(\\.\\d+)?",Xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ye="\\b(0b[01]+)",Wt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",zt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=C(t,/.*\b/,e.binary,/\b.*/)),I({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,l)=>{n.index!==0&&l.ignoreMatch()}},e)},K={begin:"\\\\[\\s\\S]",relevance:0},Ft={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[K]},Xt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[K]},Yt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Q=function(e,t,n={}){const l=I({scope:"comment",begin:e,end:t,contains:[]},n);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const u=ce("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:C(/[ ]+/,"(",u,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},Zt=Q("//","$"),Jt=Q("/\\*","\\*/"),qt=Q("#","$"),Vt={scope:"number",begin:Fe,relevance:0},Qt={scope:"number",begin:Xe,relevance:0},$t={scope:"number",begin:Ye,relevance:0},en={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[K,{begin:/\[/,end:/\]/,relevance:0,contains:[K]}]}]},tn={scope:"title",begin:ze,relevance:0},nn={scope:"title",begin:ge,relevance:0},sn={begin:"\\.\\s*"+ge,relevance:0},rn=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var J=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Kt,IDENT_RE:ze,UNDERSCORE_IDENT_RE:ge,NUMBER_RE:Fe,C_NUMBER_RE:Xe,BINARY_NUMBER_RE:Ye,RE_STARTERS_RE:Wt,SHEBANG:zt,BACKSLASH_ESCAPE:K,APOS_STRING_MODE:Ft,QUOTE_STRING_MODE:Xt,PHRASAL_WORDS_MODE:Yt,COMMENT:Q,C_LINE_COMMENT_MODE:Zt,C_BLOCK_COMMENT_MODE:Jt,HASH_COMMENT_MODE:qt,NUMBER_MODE:Vt,C_NUMBER_MODE:Qt,BINARY_NUMBER_MODE:$t,REGEXP_MODE:en,TITLE_MODE:tn,UNDERSCORE_TITLE_MODE:nn,METHOD_GUARD:sn,END_SAME_AS_BEGIN:rn});function an(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function ln(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function on(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=an,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function cn(e,t){Array.isArray(e.illegal)&&(e.illegal=ce(...e.illegal))}function un(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function gn(e,t){e.relevance===void 0&&(e.relevance=1)}const fn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(l=>{delete e[l]}),e.keywords=n.keywords,e.begin=C(n.beforeMatch,Ke(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},hn=["of","and","for","in","not","or","if","then","parent","list","value"],dn="keyword";function Ze(e,t,n=dn){const l=Object.create(null);return typeof e=="string"?u(n,e.split(" ")):Array.isArray(e)?u(n,e):Object.keys(e).forEach(function(a){Object.assign(l,Ze(e[a],t,a))}),l;function u(a,s){t&&(s=s.map(i=>i.toLowerCase())),s.forEach(function(i){const o=i.split("|");l[o[0]]=[a,pn(o[0],o[1])]})}}function pn(e,t){return t?Number(t):_n(e)?0:1}function _n(e){return hn.includes(e.toLowerCase())}const ke={},L=e=>{console.error(e)},Ae=(e,...t)=>{console.log(`WARN: ${e}`,...t)},B=(e,t)=>{ke[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ke[`${e}/${t}`]=!0)},V=new Error;function Je(e,t,{key:n}){let l=0;const u=e[n],a={},s={};for(let i=1;i<=t.length;i++)s[i+l]=u[i],a[i+l]=!0,l+=We(t[i-1]);e[n]=s,e[n]._emit=a,e[n]._multi=!0}function bn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw L("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),V;if(typeof e.beginScope!="object"||e.beginScope===null)throw L("beginScope must be object"),V;Je(e,e.begin,{key:"beginScope"}),e.begin=ue(e.begin,{joinWith:""})}}function En(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw L("skip, excludeEnd, returnEnd not compatible with endScope: {}"),V;if(typeof e.endScope!="object"||e.endScope===null)throw L("endScope must be object"),V;Je(e,e.end,{key:"endScope"}),e.end=ue(e.end,{joinWith:""})}}function Mn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function yn(e){Mn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),bn(e),En(e)}function wn(e){function t(s,i){return new RegExp(G(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,o){o.position=this.position++,this.matchIndexes[this.matchAt]=o,this.regexes.push([o,i]),this.matchAt+=We(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(o=>o[1]);this.matcherRe=t(ue(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const o=this.matcherRe.exec(i);if(!o)return null;const d=o.findIndex((j,x)=>x>0&&j!==void 0),M=this.matchIndexes[d];return o.splice(0,d),Object.assign(o,M)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const o=new n;return this.rules.slice(i).forEach(([d,M])=>o.addRule(d,M)),o.compile(),this.multiRegexes[i]=o,o}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,o){this.rules.push([i,o]),o.type==="begin"&&this.count++}exec(i){const o=this.getMatcher(this.regexIndex);o.lastIndex=this.lastIndex;let d=o.exec(i);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const M=this.getMatcher(0);M.lastIndex=this.lastIndex+1,d=M.exec(i)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function u(s){const i=new l;return s.contains.forEach(o=>i.addRule(o.begin,{rule:o,type:"begin"})),s.terminatorEnd&&i.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&i.addRule(s.illegal,{type:"illegal"}),i}function a(s,i){const o=s;if(s.isCompiled)return o;[ln,un,yn,fn].forEach(M=>M(s,i)),e.compilerExtensions.forEach(M=>M(s,i)),s.__beforeBegin=null,[on,cn,gn].forEach(M=>M(s,i)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=Ze(s.keywords,e.case_insensitive)),o.keywordPatternRe=t(d,!0),i&&(s.begin||(s.begin=/\B|\b/),o.beginRe=t(o.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(o.endRe=t(o.end)),o.terminatorEnd=G(o.end)||"",s.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),s.illegal&&(o.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(M){return On(M==="self"?s:M)})),s.contains.forEach(function(M){a(M,o)}),s.starts&&a(s.starts,i),o.matcher=u(o),o}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=I(e.classNameAliases||{}),a(e)}function qe(e){return e?e.endsWithParent||qe(e.starts):!1}function On(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return I(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:qe(e)?I(e,{starts:e.starts?I(e.starts):null}):Object.isFrozen(e)?I(e):e}var Rn="11.7.0";class xn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const ie=Ge,Te=I,me=Symbol("nomatch"),Nn=7,Sn=function(e){const t=Object.create(null),n=Object.create(null),l=[];let u=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Ct};function o(r){return i.noHighlightRe.test(r)}function d(r){let f=r.className+" ";f+=r.parentNode?r.parentNode.className:"";const _=i.languageDetectRe.exec(f);if(_){const E=A(_[1]);return E||(Ae(a.replace("{}",_[1])),Ae("Falling back to no-highlight mode for this block.",r)),E?_[1]:"no-highlight"}return f.split(/\s+/).find(E=>o(E)||A(E))}function M(r,f,_){let E="",w="";typeof f=="object"?(E=r,_=f.ignoreIllegals,w=f.language):(B("10.7.0","highlight(lang, code, ...args) has been deprecated."),B("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),w=r,E=f),_===void 0&&(_=!0);const S={code:E,language:w};F("before:highlight",S);const T=S.result?S.result:j(S.language,S.code,_);return T.code=S.code,F("after:highlight",T),T}function j(r,f,_,E){const w=Object.create(null);function S(c,g){return c.keywords[g]}function T(){if(!h.keywords){O.addText(y);return}let c=0;h.keywordPatternRe.lastIndex=0;let g=h.keywordPatternRe.exec(y),p="";for(;g;){p+=y.substring(c,g.index);const b=v.case_insensitive?g[0].toLowerCase():g[0],R=S(h,b);if(R){const[k,ht]=R;if(O.addText(p),p="",w[b]=(w[b]||0)+1,w[b]<=Nn&&(Z+=ht),k.startsWith("_"))p+=g[0];else{const dt=v.classNameAliases[k]||k;O.addKeyword(g[0],dt)}}else p+=g[0];c=h.keywordPatternRe.lastIndex,g=h.keywordPatternRe.exec(y)}p+=y.substring(c),O.addText(p)}function X(){if(y==="")return;let c=null;if(typeof h.subLanguage=="string"){if(!t[h.subLanguage]){O.addText(y);return}c=j(h.subLanguage,y,!0,Ee[h.subLanguage]),Ee[h.subLanguage]=c._top}else c=$(y,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(Z+=c.relevance),O.addSublanguage(c._emitter,c.language)}function N(){h.subLanguage!=null?X():T(),y=""}function m(c,g){let p=1;const b=g.length-1;for(;p<=b;){if(!c._emit[p]){p++;continue}const R=v.classNameAliases[c[p]]||c[p],k=g[p];R?O.addKeyword(k,R):(y=k,T(),y=""),p++}}function pe(c,g){return c.scope&&typeof c.scope=="string"&&O.openNode(v.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(O.addKeyword(y,v.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),y=""):c.beginScope._multi&&(m(c.beginScope,g),y="")),h=Object.create(c,{parent:{value:h}}),h}function _e(c,g,p){let b=Ut(c.endRe,p);if(b){if(c["on:end"]){const R=new Ne(c);c["on:end"](g,R),R.isMatchIgnored&&(b=!1)}if(b){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return _e(c.parent,g,p)}function ot(c){return h.matcher.regexIndex===0?(y+=c[0],1):(se=!0,0)}function ct(c){const g=c[0],p=c.rule,b=new Ne(p),R=[p.__beforeBegin,p["on:begin"]];for(const k of R)if(k&&(k(c,b),b.isMatchIgnored))return ot(g);return p.skip?y+=g:(p.excludeBegin&&(y+=g),N(),!p.returnBegin&&!p.excludeBegin&&(y=g)),pe(p,c),p.returnBegin?0:g.length}function ut(c){const g=c[0],p=f.substring(c.index),b=_e(h,c,p);if(!b)return me;const R=h;h.endScope&&h.endScope._wrap?(N(),O.addKeyword(g,h.endScope._wrap)):h.endScope&&h.endScope._multi?(N(),m(h.endScope,c)):R.skip?y+=g:(R.returnEnd||R.excludeEnd||(y+=g),N(),R.excludeEnd&&(y=g));do h.scope&&O.closeNode(),!h.skip&&!h.subLanguage&&(Z+=h.relevance),h=h.parent;while(h!==b.parent);return b.starts&&pe(b.starts,c),R.returnEnd?0:g.length}function gt(){const c=[];for(let g=h;g!==v;g=g.parent)g.scope&&c.unshift(g.scope);c.forEach(g=>O.openNode(g))}let Y={};function be(c,g){const p=g&&g[0];if(y+=c,p==null)return N(),0;if(Y.type==="begin"&&g.type==="end"&&Y.index===g.index&&p===""){if(y+=f.slice(g.index,g.index+1),!u){const b=new Error(`0 width match regex (${r})`);throw b.languageName=r,b.badRule=Y.rule,b}return 1}if(Y=g,g.type==="begin")return ct(g);if(g.type==="illegal"&&!_){const b=new Error('Illegal lexeme "'+p+'" for mode "'+(h.scope||"<unnamed>")+'"');throw b.mode=h,b}else if(g.type==="end"){const b=ut(g);if(b!==me)return b}if(g.type==="illegal"&&p==="")return 1;if(ne>1e5&&ne>g.index*3)throw new Error("potential infinite loop, way more iterations than matches");return y+=p,p.length}const v=A(r);if(!v)throw L(a.replace("{}",r)),new Error('Unknown language: "'+r+'"');const ft=wn(v);let te="",h=E||ft;const Ee={},O=new i.__emitter(i);gt();let y="",Z=0,D=0,ne=0,se=!1;try{for(h.matcher.considerAll();;){ne++,se?se=!1:h.matcher.considerAll(),h.matcher.lastIndex=D;const c=h.matcher.exec(f);if(!c)break;const g=f.substring(D,c.index),p=be(g,c);D=c.index+p}return be(f.substring(D)),O.closeAllNodes(),O.finalize(),te=O.toHTML(),{language:r,value:te,relevance:Z,illegal:!1,_emitter:O,_top:h}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:r,value:ie(f),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:D,context:f.slice(D-100,D+100),mode:c.mode,resultSoFar:te},_emitter:O};if(u)return{language:r,value:ie(f),illegal:!1,relevance:0,errorRaised:c,_emitter:O,_top:h};throw c}}function x(r){const f={value:ie(r),illegal:!1,relevance:0,_top:s,_emitter:new i.__emitter(i)};return f._emitter.addText(r),f}function $(r,f){f=f||i.languages||Object.keys(t);const _=x(r),E=f.filter(A).filter(de).map(N=>j(N,r,!1));E.unshift(_);const w=E.sort((N,m)=>{if(N.relevance!==m.relevance)return m.relevance-N.relevance;if(N.language&&m.language){if(A(N.language).supersetOf===m.language)return 1;if(A(m.language).supersetOf===N.language)return-1}return 0}),[S,T]=w,X=S;return X.secondBest=T,X}function Ve(r,f,_){const E=f&&n[f]||_;r.classList.add("hljs"),r.classList.add(`language-${E}`)}function ee(r){let f=null;const _=d(r);if(o(_))return;if(F("before:highlightElement",{el:r,language:_}),r.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(r)),i.throwUnescapedHTML))throw new xn("One of your code blocks includes unescaped HTML.",r.innerHTML);f=r;const E=f.textContent,w=_?M(E,{language:_,ignoreIllegals:!0}):$(E);r.innerHTML=w.value,Ve(r,_,w.language),r.result={language:w.language,re:w.relevance,relevance:w.relevance},w.secondBest&&(r.secondBest={language:w.secondBest.language,relevance:w.secondBest.relevance}),F("after:highlightElement",{el:r,result:w,text:E})}function Qe(r){i=Te(i,r)}const $e=()=>{z(),B("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function et(){z(),B("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let fe=!1;function z(){if(document.readyState==="loading"){fe=!0;return}document.querySelectorAll(i.cssSelector).forEach(ee)}function tt(){fe&&z()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",tt,!1);function nt(r,f){let _=null;try{_=f(e)}catch(E){if(L("Language definition for '{}' could not be registered.".replace("{}",r)),u)L(E);else throw E;_=s}_.name||(_.name=r),t[r]=_,_.rawDefinition=f.bind(null,e),_.aliases&&he(_.aliases,{languageName:r})}function st(r){delete t[r];for(const f of Object.keys(n))n[f]===r&&delete n[f]}function it(){return Object.keys(t)}function A(r){return r=(r||"").toLowerCase(),t[r]||t[n[r]]}function he(r,{languageName:f}){typeof r=="string"&&(r=[r]),r.forEach(_=>{n[_.toLowerCase()]=f})}function de(r){const f=A(r);return f&&!f.disableAutodetect}function rt(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=f=>{r["before:highlightBlock"](Object.assign({block:f.el},f))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=f=>{r["after:highlightBlock"](Object.assign({block:f.el},f))})}function at(r){rt(r),l.push(r)}function F(r,f){const _=r;l.forEach(function(E){E[_]&&E[_](f)})}function lt(r){return B("10.7.0","highlightBlock will be removed entirely in v12.0"),B("10.7.0","Please use highlightElement now."),ee(r)}Object.assign(e,{highlight:M,highlightAuto:$,highlightAll:z,highlightElement:ee,highlightBlock:lt,configure:Qe,initHighlighting:$e,initHighlightingOnLoad:et,registerLanguage:nt,unregisterLanguage:st,listLanguages:it,getLanguage:A,registerAliases:he,autoDetection:de,inherit:Te,addPlugin:at}),e.debugMode=function(){u=!1},e.safeMode=function(){u=!0},e.versionString=Rn,e.regex={concat:C,lookahead:Ke,either:ce,optional:Ht,anyNumberOfTimes:Bt};for(const r in J)typeof J[r]=="object"&&ae.exports(J[r]);return Object.assign(e,J),e};var W=Sn({}),jn=W;W.HighlightJS=W;W.default=W;const ve=vt(jn);function kn(e){let t;return{c(){t=_t(e[2])},l(n){t=bt(n,e[2])},m(n,l){re(n,t,l)},p(n,l){l&4&&Et(t,n[2])},d(n){n&&U(t)}}}function An(e){let t,n;return{c(){t=new Mt(!1),n=xe(),this.h()},l(l){t=yt(l,!1),n=xe(),this.h()},h(){t.a=n},m(l,u){t.m(e[1],l,u),re(l,n,u)},p(l,u){u&2&&t.p(l[1])},d(l){l&&U(n),l&&t.d()}}}function Tn(e){let t,n;function l(o,d){return o[1]?An:kn}let u=l(e),a=u(e),s=[{"data-language":e[3]},e[4]],i={};for(let o=0;o<s.length;o+=1)i=H(i,s[o]);return{c(){t=Me("pre"),n=Me("code"),a.c(),this.h()},l(o){t=ye(o,"PRE",{"data-language":!0});var d=we(t);n=ye(d,"CODE",{});var M=we(n);a.l(M),M.forEach(U),d.forEach(U),this.h()},h(){P(n,"hljs",!0),Oe(t,i),P(t,"langtag",e[0]),P(t,"svelte-11sh29b",!0)},m(o,d){re(o,t,d),pt(t,n),a.m(n,null)},p(o,[d]){u===(u=l(o))&&a?a.p(o,d):(a.d(1),a=u(o),a&&(a.c(),a.m(n,null))),Oe(t,i=Be(s,[d&8&&{"data-language":o[3]},d&16&&o[4]])),P(t,"langtag",o[0]),P(t,"svelte-11sh29b",!0)},i:Re,o:Re,d(o){o&&U(t),a.d()}}}function mn(e,t,n){const l=["langtag","highlighted","code","languageName"];let u=q(t,l),{langtag:a=!1}=t,{highlighted:s}=t,{code:i}=t,{languageName:o="plaintext"}=t;return e.$$set=d=>{t=H(H({},t),He(d)),n(4,u=q(t,l)),"langtag"in d&&n(0,a=d.langtag),"highlighted"in d&&n(1,s=d.highlighted),"code"in d&&n(2,i=d.code),"languageName"in d&&n(3,o=d.languageName)},[a,s,i,o,u]}class vn extends De{constructor(t){super(),Le(this,t,mn,Tn,Ce,{langtag:0,highlighted:1,code:2,languageName:3})}}const In=vn,Dn=e=>({highlighted:e&8}),Ie=e=>({highlighted:e[3]});function Ln(e){let t,n;const l=[e[4],{languageName:e[0].name},{langtag:e[2]},{highlighted:e[3]},{code:e[1]}];let u={};for(let a=0;a<l.length;a+=1)u=H(u,l[a]);return t=new In({props:u}),{c(){jt(t.$$.fragment)},l(a){kt(t.$$.fragment,a)},m(a,s){At(t,a,s),n=!0},p(a,s){const i=s&31?Be(l,[s&16&&Tt(a[4]),s&1&&{languageName:a[0].name},s&4&&{langtag:a[2]},s&8&&{highlighted:a[3]},s&2&&{code:a[1]}]):{};t.$set(i)},i(a){n||(Pe(t.$$.fragment,a),n=!0)},o(a){Ue(t.$$.fragment,a),n=!1},d(a){mt(t,a)}}}function Cn(e){let t;const n=e[6].default,l=wt(n,e,e[5],Ie),u=l||Ln(e);return{c(){u&&u.c()},l(a){u&&u.l(a)},m(a,s){u&&u.m(a,s),t=!0},p(a,[s]){l?l.p&&(!t||s&40)&&Ot(l,n,a,a[5],t?xt(n,a[5],s,Dn):Rt(a[5]),Ie):u&&u.p&&(!t||s&31)&&u.p(a,t?s:-1)},i(a){t||(Pe(u,a),t=!0)},o(a){Ue(u,a),t=!1},d(a){u&&u.d(a)}}}function Bn(e,t,n){const l=["language","code","langtag"];let u=q(t,l),{$$slots:a={},$$scope:s}=t,{language:i}=t,{code:o}=t,{langtag:d=!1}=t;const M=Nt();let j="";return St(()=>{j&&M("highlight",{highlighted:j})}),e.$$set=x=>{t=H(H({},t),He(x)),n(4,u=q(t,l)),"language"in x&&n(0,i=x.language),"code"in x&&n(1,o=x.code),"langtag"in x&&n(2,d=x.langtag),"$$scope"in x&&n(5,s=x.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&(ve.registerLanguage(i.name,i.register),n(3,j=ve.highlight(o,{language:i.name}).value))},[i,o,d,j,u,s,a]}class Hn extends De{constructor(t){super(),Le(this,t,Bn,Cn,Ce,{language:0,code:1,langtag:2})}}const Gn=Hn,Pn=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`,Kn=Pn;export{Gn as H,Kn as g};