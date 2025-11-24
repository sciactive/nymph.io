import{f as we,a as V,c as xe}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{s as t,c as e,f as qe,e as Se,$ as Ne,n as o,a}from"../chunks/uMqmAk-V.js";import{h as Oe,g as Pe}from"../chunks/BSVgqX3x.js";import{h as je}from"../chunks/Dx1ptvL_.js";import{b as Je}from"../chunks/c8uDcNtF.js";import{t as Ue}from"../chunks/Ce9AoNbY.js";import{H as W}from"../chunks/DZfDsH_2.js";var Ie=we(`<section><header class="major"><h1 style="font-size: 3em;">Query Parser</h1></header> <p>The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for <em>most</em> features of a
    Nymph query to be expressed in a text input.</p> <!> <header class="major"><h2>Options</h2></header> <p>You can set limit, offset, sort, and reverse like this.</p> <ul><li><code>limit:number</code></li> <li><code>offset:number</code></li> <li><code>sort:string</code></li> <li><code>reverse:true</code>, <code>reverse:false</code>, <code>reverse:1</code>, or <code>reverse:0</code></li></ul> <p>These must appear in the top level of the query (outside of any
    parentheses).</p> <header class="major"><h2>Clauses</h2></header> <p>These are the available clauses, and their syntax.</p> <header><h3>equal and !equal</h3></header> <p>Check for string or JSON representation equality.</p> <ul><li><code>name=string</code> or <code>name!=string</code></li> <li><code>name="string value"</code> or <code>name!="string value"</code> <ul><li>(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)</li></ul></li> <li><code>name=JSON</code> or <code>name!=JSON</code> <ul><li>(Match a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>guid and !guid</h3></header> <p>Check for entity GUID.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>tag and !tag</h3></header> <p>Check for a tag.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>truthy and !truthy</h3></header> <p>Check for truthiness.</p> <ul><li><code>[name]</code> or <code>[!name]</code></li></ul> <header><h3>ref and !ref</h3></header> <p>Check for a reference to another entity.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>qref and !qref</h3></header> <p>Check for a reference to another entity using a query.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape curly brackets with a leading backslash.)</li> <li>(Requires a map of refclassname to their actual class and default
          fields.)</li></ul></li></ul> <header><h3>contain and !contain</h3></header> <p>Check if the array at the named property contains a value.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Search for a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>search and !search</h3></header> <p>An array with a name, then search query. True if the named property matches
    the query. Use single quotes to find sequential terms and double quotes to
    find exact terms. Use "or" as the or operator. Use "-" before a term as the
    negation operator. Stop words and punctuation are stripped. Case
    insensitive.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>match and !match</h3></header> <p>Check for POSIX regex match.</p> <ul><li><code>name~/pattern/</code> or <code>name!~/pattern/</code></li></ul> <header><h3>imatch and !imatch</h3></header> <p>Check for case insensitive POSIX regex match.</p> <ul><li><code>name~/pattern/i</code> or <code>name!~/pattern/i</code></li></ul> <header><h3>like and !like</h3></header> <p>Check for pattern match where _ is single char wildcard and % is any length
    wildcard.</p> <ul><li><code>name~pattern</code> or <code>name!~pattern</code></li> <li><code>name~"pattern"</code> or <code>name!~"pattern"</code> <ul><li>(Use this if you have a space in your pattern.)</li></ul></li></ul> <header><h3>ilike and !ilike</h3></header> <p>Check for case insensitive pattern match where _ is single char wildcard and
    % is any length wildcard.</p> <ul><li><code>name~"pattern"i</code> or <code>name!~"pattern"i</code></li></ul> <header><h3>gt</h3></header> <p>Check a prop's value is greater than a given value.</p> <ul><li><code></code></li> <li><code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>gte</h3></header> <p>Check a prop's value is greater than or equal to a given value.</p> <ul><li><code></code></li> <li><code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>lt</h3></header> <p>Check a prop's value is less than a given value.</p> <ul><li><code></code></li> <li><code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>lte</h3></header> <p>Check a prop's value is less than or equal to a given value.</p> <ul><li><code></code></li> <li><code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header class="major"><h2>Selectors</h2></header> <p>You can specify nested selectors with different types using pairs of
    parentheses. The first character (or two) inside the parentheses can be a
    type: "&", "!&", "|", "!|", or "!" (the same as "!&").</p> <p>Here are some examples of nested selectors.</p> <pre></pre> <header class="major"><h2>Default Fields</h2></header> <p>Anything contained in the query (including in selector parentheses) that
    doesn't match any of the options or clause syntaxes listed above (bare query
    parts) will be added (at the appropriate nesting level) to a selector with
    an <code>"|"</code> type in an <code>ilike</code> clause surrounded by "%"
    characters for each field passed in to the <code>defaultFields</code> argument.</p> <header class="major"><h2>Bare Query Handler</h2></header> <p>You can also supply a function in the option <code>bareHandler</code> that
    will handle bare query parts instead of the "Default Fields" behavior
    described above. It will receive three arguments, the query parts, the
    entity class, and the default fields entry for that class. It should return
    a partial selector that will replace or extend the <code>"|"</code> selector.</p></section>`);function Ye(Z){var r=Ie();je("yrz37l",Ce=>{var L=xe(),ke=qe(L);Oe(ke,()=>Pe),Se(()=>{Ne.title="Query Parser - Packages - Nymph.js"}),V(Ce,L)});var q=t(e(r),6);W(q,{get language(){return Je},code:"npm install --save @nymphjs/query-parser"});var S=t(q,6);W(S,{get language(){return Ue},code:`import queryParser from '@nymphjs/query-parser';

import BlogPost from './BlogPost';
import Category from './Category';

async function doQuery() {
  const [options, ...selectors] = queryParser({
    query:
      'limit:4 sort:mdate foobar (| [archived] mdate<"2 weeks ago") category<{cat Tech}>',
    entityClass: BlogPost,
    defaultFields: ['title', 'body'],
    qrefMap: {
      cat: {
        class: Category,
        defaultFields: ['name'],
      },
    },
  });
  /*
  Options will be
    {
      class: BlogPost,
      limit: 4,
      sort: 'mdate'
    }

  And selectors will be (equivalent to)
    [
      {
        type: "|",
        truthy: [
          "archived"
        ],
        lt: [
          ["mdate", null, "2 weeks ago"]
        ]
      },
      {
        type: "&",
        qref: [
          "category",
          [
            {
              class: Category
            },
            {
              type: "|",
              ilike: ["name", "%Tech%"]
            }
          ]
        ]
      },
      {
        type: "|",
        ilike: [
          ["title", "%foobar%"],
          ["body", "%foobar%"]
        ]
      }
    ]
  */
  const entities = await nymph.getEntities(options, ...selectors);
}`});var l=t(S,18),N=t(e(l),4),O=t(e(N),4),P=e(O),ee=t(e(P),7);ee.textContent='{"prop":"val"}',o(),a(P),a(O),a(N),a(l);var i=t(l,6),j=e(i),J=e(j);J.textContent="{guid}";var ae=t(J,2);ae.textContent="{!guid}",a(j),a(i);var d=t(i,6),U=e(d),I=e(U);I.textContent="<name>";var te=t(I,2);te.textContent="<!name>",a(U),a(d);var n=t(d,12),T=e(n),A=e(T);A.textContent="name<{guid}>";var oe=t(A,2);oe.textContent="name!<{guid}>",a(T),a(n);var c=t(n,6),E=e(c),B=e(E);B.textContent="name<{refclassname inner query}>";var re=t(B,2);re.textContent="name!<{refclassname inner query}>",o(2),a(E),a(c);var s=t(c,6),h=e(s),F=e(h);F.textContent="name<value>";var le=t(F,2);le.textContent="name!<value>",o(2),a(h);var H=t(h,2),Q=e(H);Q.textContent="name<JSON>";var D=t(Q,2);D.textContent="name!<JSON>";var Y=t(D,2),z=e(Y),ie=t(e(z),7);ie.textContent='{"prop":"val"}',o(),a(z),a(Y),a(H),a(s);var u=t(s,6),M=e(u),X=e(M);X.textContent="name(query)";var de=t(X,2);de.textContent="name!(query)",a(M),a(u);var p=t(u,30),m=e(p),ne=e(m);ne.textContent="name>number",a(m);var v=t(m,2),ce=e(v);ce.textContent="name>relative",o(2),a(v);var $=t(v,2),se=e($);se.textContent='name>"relative time value"',o(2),a($),a(p);var y=t(p,6),f=e(y),he=e(f);he.textContent="name>=number",a(f);var g=t(f,2),ue=e(g);ue.textContent="name>=relative",o(2),a(g);var G=t(g,2),pe=e(G);pe.textContent='name>="relative time value"',o(2),a(G),a(y);var _=t(y,6),b=e(_),me=e(b);me.textContent="name<number",a(b);var C=t(b,2),ve=e(C);ve.textContent="name<relative",o(2),a(C);var R=t(C,2),ye=e(R);ye.textContent='name<"relative time value"',o(2),a(R),a(_);var k=t(_,6),w=e(k),fe=e(w);fe.textContent="name<=number",a(w);var x=t(w,2),ge=e(x);ge.textContent="name<=relative",o(2),a(x);var K=t(x,2),_e=e(K);_e.textContent='name<="relative time value"',o(2),a(K),a(k);var be=t(k,8);be.textContent=`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`,o(8),a(r),V(Z,r)}export{Ye as component};
