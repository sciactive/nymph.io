import{h as _e,a as R,t as be,c as Ce}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{$ as ke,f as we,s as t,c as e,n as o,a}from"../chunks/xPuFI3q7.js";import{h as xe,g as qe}from"../chunks/C0NHSKHS.js";import{b as Ne}from"../chunks/c8uDcNtF.js";import{t as Oe}from"../chunks/Ce9AoNbY.js";import{H as K}from"../chunks/9N_cuTOb.js";var Se=be(`<section><header class="major"><h1 style="font-size: 3em;">Query Parser</h1></header> <p>The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for <em>most</em> features of a
    Nymph query to be expressed in a text input.</p> <!> <header class="major"><h2>Options</h2></header> <p>You can set limit, offset, sort, and reverse like this.</p> <ul><li><code>limit:number</code></li> <li><code>offset:number</code></li> <li><code>sort:string</code></li> <li><code>reverse:true</code>, <code>reverse:false</code>, <code>reverse:1</code>, or <code>reverse:0</code></li></ul> <p>These must appear in the top level of the query (outside of any
    parentheses).</p> <header class="major"><h2>Clauses</h2></header> <p>These are the available clauses, and their syntax.</p> <header><h3>equal and !equal</h3></header> <p>Check for string or JSON representation equality.</p> <ul><li><code>name=string</code> or <code>name!=string</code></li> <li><code>name="string value"</code> or <code>name!="string value"</code> <ul><li>(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)</li></ul></li> <li><code>name=JSON</code> or <code>name!=JSON</code> <ul><li>(Match a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>guid and !guid</h3></header> <p>Check for entity GUID.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>tag and !tag</h3></header> <p>Check for a tag.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>truthy and !truthy</h3></header> <p>Check for truthiness.</p> <ul><li><code>[name]</code> or <code>[!name]</code></li></ul> <header><h3>ref and !ref</h3></header> <p>Check for a reference to another entity.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>qref and !qref</h3></header> <p>Check for a reference to another entity using a query.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape curly brackets with a leading backslash.)</li> <li>(Requires a map of refclassname to their actual class and default
          fields.)</li></ul></li></ul> <header><h3>contain and !contain</h3></header> <p>Check if the array at the named property contains a value.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Search for a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>match and !match</h3></header> <p>Check for POSIX regex match.</p> <ul><li><code>name~/pattern/</code> or <code>name!~/pattern/</code></li></ul> <header><h3>imatch and !imatch</h3></header> <p>Check for case insensitive POSIX regex match.</p> <ul><li><code>name~/pattern/i</code> or <code>name!~/pattern/i</code></li></ul> <header><h3>like and !like</h3></header> <p>Check for pattern match where _ is single char wildcard and % is any length
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
    a partial selector that will replace or extend the <code>"|"</code> selector.</p></section>`);function Ee(L){var r=Se();_e(fe=>{var G=Ce();ke.title="Query Parser - Packages - Nymph.js";var ge=we(G);xe(ge,()=>qe,!1,!1),R(fe,G)});var x=t(e(r),6);K(x,{language:Ne,code:"npm install --save @nymphjs/query-parser"});var q=t(x,6);K(q,{language:Oe,code:`import queryParser from '@nymphjs/query-parser';

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
}`});var l=t(q,18),N=t(e(l),4),O=t(e(N),4),S=e(O),V=t(e(S),7);V.textContent='{"prop":"val"}',o(),a(S),a(O),a(N),a(l);var i=t(l,6),P=e(i),j=e(P);j.textContent="{guid}";var W=t(j,2);W.textContent="{!guid}",a(P),a(i);var d=t(i,6),J=e(d),I=e(J);I.textContent="<name>";var Z=t(I,2);Z.textContent="<!name>",a(J),a(d);var c=t(d,12),U=e(c),T=e(U);T.textContent="name<{guid}>";var ee=t(T,2);ee.textContent="name!<{guid}>",a(U),a(c);var n=t(c,6),A=e(n),E=e(A);E.textContent="name<{refclassname inner query}>";var ae=t(E,2);ae.textContent="name!<{refclassname inner query}>",o(2),a(A),a(n);var s=t(n,6),h=e(s),B=e(h);B.textContent="name<value>";var te=t(B,2);te.textContent="name!<value>",o(2),a(h);var F=t(h,2),H=e(F);H.textContent="name<JSON>";var Q=t(H,2);Q.textContent="name!<JSON>";var D=t(Q,2),Y=e(D),oe=t(e(Y),7);oe.textContent='{"prop":"val"}',o(),a(Y),a(D),a(F),a(s);var u=t(s,30),p=e(u),re=e(p);re.textContent="name>number",a(p);var m=t(p,2),le=e(m);le.textContent="name>relative",o(2),a(m);var M=t(m,2),ie=e(M);ie.textContent='name>"relative time value"',o(2),a(M),a(u);var v=t(u,6),y=e(v),de=e(y);de.textContent="name>=number",a(y);var f=t(y,2),ce=e(f);ce.textContent="name>=relative",o(2),a(f);var X=t(f,2),ne=e(X);ne.textContent='name>="relative time value"',o(2),a(X),a(v);var g=t(v,6),_=e(g),se=e(_);se.textContent="name<number",a(_);var b=t(_,2),he=e(b);he.textContent="name<relative",o(2),a(b);var $=t(b,2),ue=e($);ue.textContent='name<"relative time value"',o(2),a($),a(g);var C=t(g,6),k=e(C),pe=e(k);pe.textContent="name<=number",a(k);var w=t(k,2),me=e(w);me.textContent="name<=relative",o(2),a(w);var z=t(w,2),ve=e(z);ve.textContent='name<="relative time value"',o(2),a(z),a(C);var ye=t(C,8);ye.textContent=`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`,o(8),a(r),R(L,r)}export{Ee as component};
