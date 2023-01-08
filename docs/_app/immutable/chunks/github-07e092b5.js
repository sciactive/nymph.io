import{S as at,i as ot,s as ct,D as ut,I as ft,J as gt,K as ht,f as dt,t as pt,U as Ee,V as bt,j as _t,W as se,X as Et,k as we,l as Me,m as ye,h as m,n as wt,Y as xe,G as Y,b as ie,C as Mt,Z as yt,q as xt,r as Ot,u as Rt,R as St,e as Oe,T as Nt}from"./index-8e853c83.js";var re={exports:{}};function le(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&le(n)}),e}re.exports=le;re.exports.default=le;class Re{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function De(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function D(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach(function(a){for(const f in a)n[f]=a[f]}),n}const kt="</span>",Se=e=>!!e.scope||e.sublanguage&&e.language,jt=(e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((a,f)=>`${a}${"_".repeat(f+1)}`)].join(" ")}return`${t}${e}`};class At{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=De(t)}openNode(t){if(!Se(t))return;let n="";t.sublanguage?n=`language-${t.language}`:n=jt(t.scope,{prefix:this.classPrefix}),this.span(n)}closeNode(t){Se(t)&&(this.buffer+=kt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Ne=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class ae{constructor(){this.rootNode=Ne(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Ne({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(a=>this._walk(t,a)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{ae._collapse(n)}))}}class Tt extends ae{constructor(t){super(),this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){const a=t.root;a.sublanguage=!0,a.language=n,this.add(a)}toHTML(){return new At(this,this.options).value()}finalize(){return!0}}function P(e){return e?typeof e=="string"?e:e.source:null}function Ce(e){return L("(?=",e,")")}function vt(e){return L("(?:",e,")*")}function It(e){return L("(?:",e,")?")}function L(...e){return e.map(n=>P(n)).join("")}function Dt(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function oe(...e){return"("+(Dt(e).capture?"":"?:")+e.map(a=>P(a)).join("|")+")"}function Be(e){return new RegExp(e.toString()+"|").exec("").length-1}function Ct(e,t){const n=e&&e.exec(t);return n&&n.index===0}const Bt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ce(e,{joinWith:t}){let n=0;return e.map(a=>{n+=1;const f=n;let g=P(a),s="";for(;g.length>0;){const r=Bt.exec(g);if(!r){s+=g;break}s+=g.substring(0,r.index),g=g.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?s+="\\"+String(Number(r[1])+f):(s+=r[0],r[0]==="("&&n++)}return s}).map(a=>`(${a})`).join(t)}const Lt=/\b\B/,Le="[a-zA-Z]\\w*",ue="[a-zA-Z_]\\w*",He="\\b\\d+(\\.\\d+)?",me="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Pe="\\b(0b[01]+)",Ht="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",mt=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=L(t,/.*\b/,e.binary,/\b.*/)),D({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,a)=>{n.index!==0&&a.ignoreMatch()}},e)},U={begin:"\\\\[\\s\\S]",relevance:0},Pt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[U]},Ut={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[U]},Gt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},q=function(e,t,n={}){const a=D({scope:"comment",begin:e,end:t,contains:[]},n);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const f=oe("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:L(/[ ]+/,"(",f,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},Kt=q("//","$"),Wt=q("/\\*","\\*/"),zt=q("#","$"),Ft={scope:"number",begin:He,relevance:0},Xt={scope:"number",begin:me,relevance:0},Yt={scope:"number",begin:Pe,relevance:0},Zt={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[U,{begin:/\[/,end:/\]/,relevance:0,contains:[U]}]}]},Jt={scope:"title",begin:Le,relevance:0},qt={scope:"title",begin:ue,relevance:0},Vt={begin:"\\.\\s*"+ue,relevance:0},Qt=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var Z=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Lt,IDENT_RE:Le,UNDERSCORE_IDENT_RE:ue,NUMBER_RE:He,C_NUMBER_RE:me,BINARY_NUMBER_RE:Pe,RE_STARTERS_RE:Ht,SHEBANG:mt,BACKSLASH_ESCAPE:U,APOS_STRING_MODE:Pt,QUOTE_STRING_MODE:Ut,PHRASAL_WORDS_MODE:Gt,COMMENT:q,C_LINE_COMMENT_MODE:Kt,C_BLOCK_COMMENT_MODE:Wt,HASH_COMMENT_MODE:zt,NUMBER_MODE:Ft,C_NUMBER_MODE:Xt,BINARY_NUMBER_MODE:Yt,REGEXP_MODE:Zt,TITLE_MODE:Jt,UNDERSCORE_TITLE_MODE:qt,METHOD_GUARD:Vt,END_SAME_AS_BEGIN:Qt});function $t(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function en(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function tn(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=$t,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function nn(e,t){Array.isArray(e.illegal)&&(e.illegal=oe(...e.illegal))}function sn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function rn(e,t){e.relevance===void 0&&(e.relevance=1)}const ln=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=n.keywords,e.begin=L(n.beforeMatch,Ce(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},an=["of","and","for","in","not","or","if","then","parent","list","value"],on="keyword";function Ue(e,t,n=on){const a=Object.create(null);return typeof e=="string"?f(n,e.split(" ")):Array.isArray(e)?f(n,e):Object.keys(e).forEach(function(g){Object.assign(a,Ue(e[g],t,g))}),a;function f(g,s){t&&(s=s.map(r=>r.toLowerCase())),s.forEach(function(r){const o=r.split("|");a[o[0]]=[g,cn(o[0],o[1])]})}}function cn(e,t){return t?Number(t):un(e)?0:1}function un(e){return an.includes(e.toLowerCase())}const ke={},B=e=>{console.error(e)},je=(e,...t)=>{console.log(`WARN: ${e}`,...t)},H=(e,t)=>{ke[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),ke[`${e}/${t}`]=!0)},J=new Error;function Ge(e,t,{key:n}){let a=0;const f=e[n],g={},s={};for(let r=1;r<=t.length;r++)s[r+a]=f[r],g[r+a]=!0,a+=Be(t[r-1]);e[n]=s,e[n]._emit=g,e[n]._multi=!0}function fn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw B("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),J;if(typeof e.beginScope!="object"||e.beginScope===null)throw B("beginScope must be object"),J;Ge(e,e.begin,{key:"beginScope"}),e.begin=ce(e.begin,{joinWith:""})}}function gn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw B("skip, excludeEnd, returnEnd not compatible with endScope: {}"),J;if(typeof e.endScope!="object"||e.endScope===null)throw B("endScope must be object"),J;Ge(e,e.end,{key:"endScope"}),e.end=ce(e.end,{joinWith:""})}}function hn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function dn(e){hn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),fn(e),gn(e)}function pn(e){function t(s,r){return new RegExp(P(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,o){o.position=this.position++,this.matchIndexes[this.matchAt]=o,this.regexes.push([o,r]),this.matchAt+=Be(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(o=>o[1]);this.matcherRe=t(ce(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const o=this.matcherRe.exec(r);if(!o)return null;const d=o.findIndex((R,S)=>S>0&&R!==void 0),_=this.matchIndexes[d];return o.splice(0,d),Object.assign(o,_)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const o=new n;return this.rules.slice(r).forEach(([d,_])=>o.addRule(d,_)),o.compile(),this.multiRegexes[r]=o,o}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,o){this.rules.push([r,o]),o.type==="begin"&&this.count++}exec(r){const o=this.getMatcher(this.regexIndex);o.lastIndex=this.lastIndex;let d=o.exec(r);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const _=this.getMatcher(0);_.lastIndex=this.lastIndex+1,d=_.exec(r)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function f(s){const r=new a;return s.contains.forEach(o=>r.addRule(o.begin,{rule:o,type:"begin"})),s.terminatorEnd&&r.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&r.addRule(s.illegal,{type:"illegal"}),r}function g(s,r){const o=s;if(s.isCompiled)return o;[en,sn,dn,ln].forEach(_=>_(s,r)),e.compilerExtensions.forEach(_=>_(s,r)),s.__beforeBegin=null,[tn,nn,rn].forEach(_=>_(s,r)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=Ue(s.keywords,e.case_insensitive)),o.keywordPatternRe=t(d,!0),r&&(s.begin||(s.begin=/\B|\b/),o.beginRe=t(o.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(o.endRe=t(o.end)),o.terminatorEnd=P(o.end)||"",s.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(s.end?"|":"")+r.terminatorEnd)),s.illegal&&(o.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(_){return bn(_==="self"?s:_)})),s.contains.forEach(function(_){g(_,o)}),s.starts&&g(s.starts,r),o.matcher=f(o),o}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=D(e.classNameAliases||{}),g(e)}function Ke(e){return e?e.endsWithParent||Ke(e.starts):!1}function bn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return D(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ke(e)?D(e,{starts:e.starts?D(e.starts):null}):Object.isFrozen(e)?D(e):e}var _n="11.7.0";class En extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const ne=De,Ae=D,Te=Symbol("nomatch"),wn=7,Mn=function(e){const t=Object.create(null),n=Object.create(null),a=[];let f=!0;const g="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Tt};function o(i){return r.noHighlightRe.test(i)}function d(i){let u=i.className+" ";u+=i.parentNode?i.parentNode.className:"";const b=r.languageDetectRe.exec(u);if(b){const w=A(b[1]);return w||(je(g.replace("{}",b[1])),je("Falling back to no-highlight mode for this block.",i)),w?b[1]:"no-highlight"}return u.split(/\s+/).find(w=>o(w)||A(w))}function _(i,u,b){let w="",y="";typeof u=="object"?(w=i,b=u.ignoreIllegals,y=u.language):(H("10.7.0","highlight(lang, code, ...args) has been deprecated."),H("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),y=i,w=u),b===void 0&&(b=!0);const k={code:w,language:y};W("before:highlight",k);const T=k.result?k.result:R(k.language,k.code,b);return T.code=k.code,W("after:highlight",T),T}function R(i,u,b,w){const y=Object.create(null);function k(l,c){return l.keywords[c]}function T(){if(!h.keywords){x.addText(M);return}let l=0;h.keywordPatternRe.lastIndex=0;let c=h.keywordPatternRe.exec(M),p="";for(;c;){p+=M.substring(l,c.index);const E=I.case_insensitive?c[0].toLowerCase():c[0],O=k(h,E);if(O){const[j,rt]=O;if(x.addText(p),p="",y[E]=(y[E]||0)+1,y[E]<=wn&&(X+=rt),j.startsWith("_"))p+=c[0];else{const lt=I.classNameAliases[j]||j;x.addKeyword(c[0],lt)}}else p+=c[0];l=h.keywordPatternRe.lastIndex,c=h.keywordPatternRe.exec(M)}p+=M.substring(l),x.addText(p)}function z(){if(M==="")return;let l=null;if(typeof h.subLanguage=="string"){if(!t[h.subLanguage]){x.addText(M);return}l=R(h.subLanguage,M,!0,_e[h.subLanguage]),_e[h.subLanguage]=l._top}else l=V(M,h.subLanguage.length?h.subLanguage:null);h.relevance>0&&(X+=l.relevance),x.addSublanguage(l._emitter,l.language)}function N(){h.subLanguage!=null?z():T(),M=""}function v(l,c){let p=1;const E=c.length-1;for(;p<=E;){if(!l._emit[p]){p++;continue}const O=I.classNameAliases[l[p]]||l[p],j=c[p];O?x.addKeyword(j,O):(M=j,T(),M=""),p++}}function de(l,c){return l.scope&&typeof l.scope=="string"&&x.openNode(I.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(x.addKeyword(M,I.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),M=""):l.beginScope._multi&&(v(l.beginScope,c),M="")),h=Object.create(l,{parent:{value:h}}),h}function pe(l,c,p){let E=Ct(l.endRe,p);if(E){if(l["on:end"]){const O=new Re(l);l["on:end"](c,O),O.isMatchIgnored&&(E=!1)}if(E){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return pe(l.parent,c,p)}function et(l){return h.matcher.regexIndex===0?(M+=l[0],1):(te=!0,0)}function tt(l){const c=l[0],p=l.rule,E=new Re(p),O=[p.__beforeBegin,p["on:begin"]];for(const j of O)if(j&&(j(l,E),E.isMatchIgnored))return et(c);return p.skip?M+=c:(p.excludeBegin&&(M+=c),N(),!p.returnBegin&&!p.excludeBegin&&(M=c)),de(p,l),p.returnBegin?0:c.length}function nt(l){const c=l[0],p=u.substring(l.index),E=pe(h,l,p);if(!E)return Te;const O=h;h.endScope&&h.endScope._wrap?(N(),x.addKeyword(c,h.endScope._wrap)):h.endScope&&h.endScope._multi?(N(),v(h.endScope,l)):O.skip?M+=c:(O.returnEnd||O.excludeEnd||(M+=c),N(),O.excludeEnd&&(M=c));do h.scope&&x.closeNode(),!h.skip&&!h.subLanguage&&(X+=h.relevance),h=h.parent;while(h!==E.parent);return E.starts&&de(E.starts,l),O.returnEnd?0:c.length}function st(){const l=[];for(let c=h;c!==I;c=c.parent)c.scope&&l.unshift(c.scope);l.forEach(c=>x.openNode(c))}let F={};function be(l,c){const p=c&&c[0];if(M+=l,p==null)return N(),0;if(F.type==="begin"&&c.type==="end"&&F.index===c.index&&p===""){if(M+=u.slice(c.index,c.index+1),!f){const E=new Error(`0 width match regex (${i})`);throw E.languageName=i,E.badRule=F.rule,E}return 1}if(F=c,c.type==="begin")return tt(c);if(c.type==="illegal"&&!b){const E=new Error('Illegal lexeme "'+p+'" for mode "'+(h.scope||"<unnamed>")+'"');throw E.mode=h,E}else if(c.type==="end"){const E=nt(c);if(E!==Te)return E}if(c.type==="illegal"&&p==="")return 1;if(ee>1e5&&ee>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return M+=p,p.length}const I=A(i);if(!I)throw B(g.replace("{}",i)),new Error('Unknown language: "'+i+'"');const it=pn(I);let $="",h=w||it;const _e={},x=new r.__emitter(r);st();let M="",X=0,C=0,ee=0,te=!1;try{for(h.matcher.considerAll();;){ee++,te?te=!1:h.matcher.considerAll(),h.matcher.lastIndex=C;const l=h.matcher.exec(u);if(!l)break;const c=u.substring(C,l.index),p=be(c,l);C=l.index+p}return be(u.substring(C)),x.closeAllNodes(),x.finalize(),$=x.toHTML(),{language:i,value:$,relevance:X,illegal:!1,_emitter:x,_top:h}}catch(l){if(l.message&&l.message.includes("Illegal"))return{language:i,value:ne(u),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:C,context:u.slice(C-100,C+100),mode:l.mode,resultSoFar:$},_emitter:x};if(f)return{language:i,value:ne(u),illegal:!1,relevance:0,errorRaised:l,_emitter:x,_top:h};throw l}}function S(i){const u={value:ne(i),illegal:!1,relevance:0,_top:s,_emitter:new r.__emitter(r)};return u._emitter.addText(i),u}function V(i,u){u=u||r.languages||Object.keys(t);const b=S(i),w=u.filter(A).filter(he).map(N=>R(N,i,!1));w.unshift(b);const y=w.sort((N,v)=>{if(N.relevance!==v.relevance)return v.relevance-N.relevance;if(N.language&&v.language){if(A(N.language).supersetOf===v.language)return 1;if(A(v.language).supersetOf===N.language)return-1}return 0}),[k,T]=y,z=k;return z.secondBest=T,z}function We(i,u,b){const w=u&&n[u]||b;i.classList.add("hljs"),i.classList.add(`language-${w}`)}function Q(i){let u=null;const b=d(i);if(o(b))return;if(W("before:highlightElement",{el:i,language:b}),i.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(i)),r.throwUnescapedHTML))throw new En("One of your code blocks includes unescaped HTML.",i.innerHTML);u=i;const w=u.textContent,y=b?_(w,{language:b,ignoreIllegals:!0}):V(w);i.innerHTML=y.value,We(i,b,y.language),i.result={language:y.language,re:y.relevance,relevance:y.relevance},y.secondBest&&(i.secondBest={language:y.secondBest.language,relevance:y.secondBest.relevance}),W("after:highlightElement",{el:i,result:y,text:w})}function ze(i){r=Ae(r,i)}const Fe=()=>{K(),H("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Xe(){K(),H("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let fe=!1;function K(){if(document.readyState==="loading"){fe=!0;return}document.querySelectorAll(r.cssSelector).forEach(Q)}function Ye(){fe&&K()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ye,!1);function Ze(i,u){let b=null;try{b=u(e)}catch(w){if(B("Language definition for '{}' could not be registered.".replace("{}",i)),f)B(w);else throw w;b=s}b.name||(b.name=i),t[i]=b,b.rawDefinition=u.bind(null,e),b.aliases&&ge(b.aliases,{languageName:i})}function Je(i){delete t[i];for(const u of Object.keys(n))n[u]===i&&delete n[u]}function qe(){return Object.keys(t)}function A(i){return i=(i||"").toLowerCase(),t[i]||t[n[i]]}function ge(i,{languageName:u}){typeof i=="string"&&(i=[i]),i.forEach(b=>{n[b.toLowerCase()]=u})}function he(i){const u=A(i);return u&&!u.disableAutodetect}function Ve(i){i["before:highlightBlock"]&&!i["before:highlightElement"]&&(i["before:highlightElement"]=u=>{i["before:highlightBlock"](Object.assign({block:u.el},u))}),i["after:highlightBlock"]&&!i["after:highlightElement"]&&(i["after:highlightElement"]=u=>{i["after:highlightBlock"](Object.assign({block:u.el},u))})}function Qe(i){Ve(i),a.push(i)}function W(i,u){const b=i;a.forEach(function(w){w[b]&&w[b](u)})}function $e(i){return H("10.7.0","highlightBlock will be removed entirely in v12.0"),H("10.7.0","Please use highlightElement now."),Q(i)}Object.assign(e,{highlight:_,highlightAuto:V,highlightAll:K,highlightElement:Q,highlightBlock:$e,configure:ze,initHighlighting:Fe,initHighlightingOnLoad:Xe,registerLanguage:Ze,unregisterLanguage:Je,listLanguages:qe,getLanguage:A,registerAliases:ge,autoDetection:he,inherit:Ae,addPlugin:Qe}),e.debugMode=function(){f=!1},e.safeMode=function(){f=!0},e.versionString=_n,e.regex={concat:L,lookahead:Ce,either:oe,optional:It,anyNumberOfTimes:vt};for(const i in Z)typeof Z[i]=="object"&&re.exports(Z[i]);return Object.assign(e,Z),e};var G=Mn({}),yn=G;G.HighlightJS=G;G.default=G;const ve=yn;const xn=e=>({highlighted:e&8}),Ie=e=>({highlighted:e[3]});function On(e){let t;return{c(){t=xt(e[1])},l(n){t=Ot(n,e[1])},m(n,a){ie(n,t,a)},p(n,a){a&2&&Rt(t,n[1])},d(n){n&&m(t)}}}function Rn(e){let t,n;return{c(){t=new St(!1),n=Oe(),this.h()},l(a){t=Nt(a,!1),n=Oe(),this.h()},h(){t.a=n},m(a,f){t.m(e[3],a,f),ie(a,n,f)},p(a,f){f&8&&t.p(a[3])},d(a){a&&m(n),a&&t.d()}}}function Sn(e){let t,n,a;function f(d,_){return d[3]!==void 0?Rn:On}let g=f(e),s=g(e),r=[{"data-language":a=e[0].name||"plaintext"},e[4]],o={};for(let d=0;d<r.length;d+=1)o=se(o,r[d]);return{c(){t=we("pre"),n=we("code"),s.c(),this.h()},l(d){t=Me(d,"PRE",{"data-language":!0});var _=ye(t);n=Me(_,"CODE",{class:!0});var R=ye(n);s.l(R),R.forEach(m),_.forEach(m),this.h()},h(){wt(n,"class","hljs"),xe(t,o),Y(t,"langtag",e[2]),Y(t,"svelte-d72vtw",!0)},m(d,_){ie(d,t,_),Mt(t,n),s.m(n,null)},p(d,_){g===(g=f(d))&&s?s.p(d,_):(s.d(1),s=g(d),s&&(s.c(),s.m(n,null))),xe(t,o=yt(r,[_&1&&a!==(a=d[0].name||"plaintext")&&{"data-language":a},_&16&&d[4]])),Y(t,"langtag",d[2]),Y(t,"svelte-d72vtw",!0)},d(d){d&&m(t),s.d()}}}function Nn(e){let t;const n=e[6].default,a=ut(n,e,e[5],Ie),f=a||Sn(e);return{c(){f&&f.c()},l(g){f&&f.l(g)},m(g,s){f&&f.m(g,s),t=!0},p(g,[s]){a?a.p&&(!t||s&40)&&ft(a,n,g,g[5],t?ht(n,g[5],s,xn):gt(g[5]),Ie):f&&f.p&&(!t||s&31)&&f.p(g,t?s:-1)},i(g){t||(dt(f,g),t=!0)},o(g){pt(f,g),t=!1},d(g){f&&f.d(g)}}}function kn(e,t,n){const a=["language","code","langtag"];let f=Ee(t,a),{$$slots:g={},$$scope:s}=t,{language:r}=t,{code:o}=t,{langtag:d=!1}=t;const _=bt();let R="";return _t(()=>{R&&_("highlight",{highlighted:R})}),e.$$set=S=>{t=se(se({},t),Et(S)),n(4,f=Ee(t,a)),"language"in S&&n(0,r=S.language),"code"in S&&n(1,o=S.code),"langtag"in S&&n(2,d=S.langtag),"$$scope"in S&&n(5,s=S.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&r.name&&r.register&&(ve.registerLanguage(r.name,r.register),n(3,R=ve.highlight(o,{language:r.name}).value))},[r,o,d,R,f,s,g]}class jn extends at{constructor(t){super(),ot(this,t,kn,Nn,ct,{language:0,code:1,langtag:2})}}const vn=jn,An=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`,In=An;export{vn as H,In as g};
