import{C as e,G as ee,H as te,I as ne,K as t,T as n,W as r,b as re,g as ie,it as i,rt as a,w as ae}from"../chunks/DZDv-zr6.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as o}from"../chunks/DUAD-eIe.js";import{t as oe}from"../chunks/XOiHpZri.js";import{t as se}from"../chunks/DIXNzCvi.js";import{t as ce}from"../chunks/jqiW6npt.js";var s=n(`<section><header class="major"><h1 style="font-size: 3em;">Query Parser</h1></header> <p>The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for <em>most</em> features of a
    Nymph query to be expressed in a text input.</p> <!> <header class="major"><h2>Options</h2></header> <p>You can set limit, offset, sort, and reverse like this.</p> <ul><li><code>limit:number</code></li> <li><code>offset:number</code></li> <li><code>sort:string</code> or <code>sort:-</code></li> <li><code>reverse:true</code>, <code>reverse:false</code>, <code>reverse:1</code>, or <code>reverse:0</code></li></ul> <p>These must appear in the top level of the query (outside of any
    parentheses).</p> <p>Using a dash for sort means the results will not be sorted in any particular
    order. You can also use "cdate" for created date and "mdate" for modified
    date.</p> <header class="major"><h2>Clauses</h2></header> <p>These are the available clauses, and their syntax.</p> <header><h3>equal and !equal</h3></header> <p>Check for string or JSON representation equality.</p> <ul><li><code>name=string</code> or <code>name!=string</code></li> <li><code>name="string value"</code> or <code>name!="string value"</code> <ul><li>(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)</li></ul></li> <li><code>name=JSON</code> or <code>name!=JSON</code> <ul><li>(Match a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>guid and !guid</h3></header> <p>Check for entity GUID.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>tag and !tag</h3></header> <p>Check for a tag.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>truthy and !truthy</h3></header> <p>Check for truthiness.</p> <ul><li><code>[name]</code> or <code>[!name]</code></li></ul> <header><h3>ref and !ref</h3></header> <p>Check for a reference to another entity.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>qref and !qref</h3></header> <p>Check for a reference to another entity using a query.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape curly brackets with a leading backslash.)</li> <li>(Requires a map of refclassname to their actual class and default
          fields.)</li></ul></li></ul> <header><h3>contain and !contain</h3></header> <p>Check if the array at the named property contains a value.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Search for a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>search and !search</h3></header> <p>Check for full-text search query match. Use single quotes to find sequential
    terms and double quotes to find exact terms. Use "or" as the or operator.
    Use "-" before a term as the negation operator. Stop words and punctuation
    are stripped. Case insensitive.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>match and !match</h3></header> <p>Check for POSIX regex match.</p> <ul><li><code>name~/pattern/</code> or <code>name!~/pattern/</code></li></ul> <header><h3>imatch and !imatch</h3></header> <p>Check for case insensitive POSIX regex match.</p> <ul><li><code>name~/pattern/i</code> or <code>name!~/pattern/i</code></li></ul> <header><h3>like and !like</h3></header> <p>Check for pattern match where _ is single char wildcard and % is any length
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
    a partial selector that will replace or extend the <code>"|"</code> selector.</p></section>`);function c(n){var c=s();ie(`yrz37l`,t=>{var n=ae();re(ee(n),()=>ce),ne(()=>{te.title=`Query Parser - Packages - Nymph.js`}),e(t,n)});var l=t(r(c),6);o(l,{get language(){return oe},code:`npm install --save @nymphjs/query-parser`});var u=t(l,6);o(u,{get language(){return se},code:`import queryParser from '@nymphjs/query-parser';

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
}`});var d=t(u,20),f=t(r(d),4),p=t(r(f),4),m=r(p),le=t(r(m),7);le.textContent=`{"prop":"val"}`,a(),i(m),i(p),i(f),i(d);var h=t(d,6),g=r(h),_=r(g);_.textContent=`{guid}`;var ue=t(_,2);ue.textContent=`{!guid}`,i(g),i(h);var v=t(h,6),y=r(v),b=r(y);b.textContent=`<name>`;var de=t(b,2);de.textContent=`<!name>`,i(y),i(v);var x=t(v,12),S=r(x),C=r(S);C.textContent=`name<{guid}>`;var fe=t(C,2);fe.textContent=`name!<{guid}>`,i(S),i(x);var w=t(x,6),T=r(w),E=r(T);E.textContent=`name<{refclassname inner query}>`;var pe=t(E,2);pe.textContent=`name!<{refclassname inner query}>`,a(2),i(T),i(w);var D=t(w,6),O=r(D),k=r(O);k.textContent=`name<value>`;var me=t(k,2);me.textContent=`name!<value>`,a(2),i(O);var A=t(O,2),j=r(A);j.textContent=`name<JSON>`;var M=t(j,2);M.textContent=`name!<JSON>`;var N=t(M,2),P=r(N),he=t(r(P),7);he.textContent=`{"prop":"val"}`,a(),i(P),i(N),i(A),i(D);var F=t(D,6),I=r(F),L=r(I);L.textContent=`name(query)`;var ge=t(L,2);ge.textContent=`name!(query)`,i(I),i(F);var R=t(F,30),z=r(R),_e=r(z);_e.textContent=`name>number`,i(z);var B=t(z,2),ve=r(B);ve.textContent=`name>relative`,a(2),i(B);var V=t(B,2),ye=r(V);ye.textContent=`name>"relative time value"`,a(2),i(V),i(R);var H=t(R,6),U=r(H),be=r(U);be.textContent=`name>=number`,i(U);var W=t(U,2),xe=r(W);xe.textContent=`name>=relative`,a(2),i(W);var G=t(W,2),Se=r(G);Se.textContent=`name>="relative time value"`,a(2),i(G),i(H);var K=t(H,6),q=r(K),Ce=r(q);Ce.textContent=`name<number`,i(q);var J=t(q,2),we=r(J);we.textContent=`name<relative`,a(2),i(J);var Y=t(J,2),Te=r(Y);Te.textContent=`name<"relative time value"`,a(2),i(Y),i(K);var X=t(K,6),Z=r(X),Ee=r(Z);Ee.textContent=`name<=number`,i(Z);var Q=t(Z,2),De=r(Q);De.textContent=`name<=relative`,a(2),i(Q);var $=t(Q,2),Oe=r($);Oe.textContent=`name<="relative time value"`,a(2),i($),i(X);var ke=t(X,8);ke.textContent=`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`,a(8),i(c),e(n,c)}export{c as component};