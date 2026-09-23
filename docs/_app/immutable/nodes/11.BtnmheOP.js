import{E as e,G as t,J as n,K as ee,L as te,T as ne,U as re,_ as ie,at as r,ot as i,w as a,x as ae}from"../chunks/H09IMVH7.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as oe}from"../chunks/D_gJAAal.js";import{t as se}from"../chunks/BF3MJUBc.js";import{t as ce}from"../chunks/DDTgMnDM.js";import{t as le}from"../chunks/Ciszbs-_.js";var ue=e(`<section><header class="major"><h1 style="font-size: 3em;">Query Parser</h1></header> <p>The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.</p> <header class="major"><h2>Installation</h2></header> <!> <header class="major"><h2>Usage</h2></header> <p>The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for <em>most</em> features of a
    Nymph query to be expressed in a text input.</p> <!> <header class="major"><h2>Options</h2></header> <p>You can set limit, offset, sort, and reverse like this.</p> <ul><li><code>limit:number</code></li> <li><code>offset:number</code></li> <li><code>sort:string</code> or <code>sort:-</code></li> <li><code>reverse:true</code>, <code>reverse:false</code>, <code>reverse:1</code>, or <code>reverse:0</code></li></ul> <p>These must appear in the top level of the query (outside of any
    parentheses).</p> <p>Using a dash for sort means the results will not be sorted in any particular
    order. You can also use "cdate" for created date and "mdate" for modified
    date.</p> <header class="major"><h2>Clauses</h2></header> <p>These are the available clauses, and their syntax.</p> <header><h3>equal and not equal</h3></header> <p>Check for string or JSON representation equality.</p> <ul><li><code>name=string</code> or <code>-name=string</code></li> <li><code>name="string value"</code> or <code>-name="string value"</code> <ul><li>(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)</li></ul></li> <li><code>name=JSON</code> or <code>-name=JSON</code> <ul><li>(Match a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>guid and not guid</h3></header> <p>Check for entity GUID.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>tag and not tag</h3></header> <p>Check for a tag.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>truthy and not truthy</h3></header> <p>Check for truthiness.</p> <ul><li><code>[name]</code> or <code>-[name]</code></li></ul> <header><h3>ref and not ref</h3></header> <p>Check for a reference to another entity.</p> <ul><li><code></code> or <code></code></li></ul> <header><h3>qref and not qref</h3></header> <p>Check for a reference to another entity using a query.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape curly brackets with a leading backslash.)</li> <li>(Requires a map of refclassname to their actual class and default
          fields.)</li></ul></li></ul> <header><h3>contain and not contain</h3></header> <p>Check if the array at the named property contains a value.</p> <ul><li><code></code> or <code></code> <ul><li>(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Search for a JSON encoded value (like <code>true</code>, <code>1</code>, <code>[1,2,3]</code>, or <code></code>).)</li></ul></li></ul> <header><h3>search and not search</h3></header> <p>Check for full-text search query match. Use single quotes to find sequential
    terms and double quotes to find exact terms. Use "or" as the or operator.
    Use "-" before a term as the negation operator. Stop words and punctuation
    are stripped. Case insensitive.</p> <ul><li><code></code> or <code></code></li> <li><code></code> or <code></code> or <code></code> or <code></code> or <code></code> or <code></code> <ul><li>(The "limit", "offset", "sort", and "reverse" properties cannot be
          used with the colon syntax.)</li></ul></li></ul> <header><h3>match and not match</h3></header> <p>Check for POSIX regex match.</p> <ul><li><code>name~/pattern/</code> or <code>-name~/pattern/</code></li></ul> <header><h3>imatch and not imatch</h3></header> <p>Check for case insensitive POSIX regex match.</p> <ul><li><code>name~/pattern/i</code> or <code>-name~/pattern/i</code></li></ul> <header><h3>like and not like</h3></header> <p>Check for pattern match where _ is single char wildcard and % is any length
    wildcard.</p> <ul><li><code>name~pattern</code> or <code>-name~pattern</code></li> <li><code>name~"pattern"</code> or <code>-name~"pattern"</code> <ul><li>(Use this if you have a space in your pattern.)</li></ul></li></ul> <header><h3>ilike and not ilike</h3></header> <p>Check for case insensitive pattern match where _ is single char wildcard and
    % is any length wildcard.</p> <ul><li><code>name~"pattern"i</code> or <code>-name~"pattern"i</code></li></ul> <header><h3>gt and not gt</h3></header> <p>Check a prop's value is greater than a given value.</p> <ul><li><code></code> or <code></code></li> <li><code></code> or <code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>gte and not gte</h3></header> <p>Check a prop's value is greater than or equal to a given value.</p> <ul><li><code></code> or <code></code></li> <li><code></code> or <code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>lt and not lt</h3></header> <p>Check a prop's value is less than a given value.</p> <ul><li><code></code> or <code></code></li> <li><code></code> or <code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header><h3>lte and not lte</h3></header> <p>Check a prop's value is less than or equal to a given value.</p> <ul><li><code></code> or <code></code></li> <li><code></code> or <code></code> <ul><li>(A single relative time value like <code>now</code> or <code>yesterday</code>.)</li></ul></li> <li><code></code> or <code></code> <ul><li>(Use this for a time value with a space like <code>"two days from now"</code>, <code>"last thursday"</code>, <code>"+4 weeks"</code>, or <code>"5 minutes ago"</code>.)</li></ul></li></ul> <header class="major"><h2>Selectors</h2></header> <p>You can specify nested selectors with different types using pairs of
    parentheses. The first character (or two) inside the parentheses can be a
    type: "&", "!&", "|", "!|", or "!" (the same as "!&").</p> <p>Here are some examples of nested selectors.</p> <pre></pre> <header class="major"><h2>Default Fields</h2></header> <p>Anything contained in the query (including in selector parentheses) that
    doesn't match any of the options or clause syntaxes listed above (bare query
    parts) will be added (at the appropriate nesting level) to a selector with
    an <code>"|"</code> type in an <code>ilike</code> clause surrounded by "%"
    characters for each field passed in to the <code>defaultFields</code> argument.</p> <header class="major"><h2>Bare Query Handler</h2></header> <p>You can also supply a function in the option <code>bareHandler</code> that
    will handle bare query parts instead of the "Default Fields" behavior
    described above. It will receive three arguments, the query parts, the
    entity class, and the default fields entry for that class. It should return
    a partial selector that will replace or extend the <code>"|"</code> selector.</p></section>`);function o(e){var o=ue();ie(`yrz37l`,e=>{var t=ne(),n=ee(t);ae(n,()=>le),te(()=>{re.title=`Query Parser - Packages - Nymph.js`}),a(e,t)});var s=n(t(o),6);oe(s,{get language(){return ce},code:`npm install --save @nymphjs/query-parser`});var c=n(s,6);oe(c,{get language(){return se},code:`import queryParser from '@nymphjs/query-parser';

import BlogPost from './BlogPost';
import Category from './Category';

async function doQuery() {
  const [options, ...selectors] = queryParser({
    query:
      'limit:4 sort:mdate foobar (| [archived] mdate<"2 weeks ago") category<{Cat Tech}>',
    entityClass: BlogPost,
    defaultFields: ['title', 'body'],
    qrefMap: {
      Cat: {
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
}`});var l=n(c,20),de=n(t(l),4),fe=n(t(de),4),u=t(fe),pe=n(t(u),7);pe.textContent=`{"prop":"val"}`,r(),i(u),i(fe),i(de),i(l);var d=n(l,6),f=t(d),p=t(f);p.textContent=`{guid}`;var me=n(p,2);me.textContent=`-{guid}`,i(f),i(d);var m=n(d,6),h=t(m),g=t(h);g.textContent=`<name>`;var he=n(g,2);he.textContent=`-<name>`,i(h),i(m);var _=n(m,12),v=t(_),ge=t(v);ge.textContent=`name<{guid}>`;var _e=n(ge,2);_e.textContent=`-name<{guid}>`,i(v),i(_);var y=n(_,6),ve=t(y),ye=t(ve);ye.textContent=`name<{refclassname inner query}>`;var be=n(ye,2);be.textContent=`-name<{refclassname inner query}>`,r(2),i(ve),i(y);var b=n(y,6),x=t(b),xe=t(x);xe.textContent=`name<value>`;var Se=n(xe,2);Se.textContent=`-name<value>`,r(2),i(x);var S=n(x,2),C=t(S);C.textContent=`name<JSON>`;var w=n(C,2);w.textContent=`-name<JSON>`;var T=n(w,2),E=t(T),Ce=n(t(E),7);Ce.textContent=`{"prop":"val"}`,r(),i(E),i(T),i(S),i(b);var D=n(b,6),O=t(D),k=t(O);k.textContent=`name(query)`;var we=n(k,2);we.textContent=`-name(query)`,i(O);var A=n(O,2),j=t(A);j.textContent=`name:query`;var M=n(j,2);M.textContent=`name:'sequence query'`;var N=n(M,2);N.textContent=`name:"exact query"`;var P=n(N,2);P.textContent=`-name:query`;var F=n(P,2);F.textContent=`-name:'sequence query'`;var Te=n(F,2);Te.textContent=`-name:"exact query"`,r(2),i(A),i(D);var I=n(D,30),L=t(I),R=t(L);R.textContent=`name>number`;var Ee=n(R,2);Ee.textContent=`-name>number`,i(L);var z=n(L,2),B=t(z);B.textContent=`name>relative`;var De=n(B,2);De.textContent=`-name>relative`,r(2),i(z);var V=n(z,2),Oe=t(V);Oe.textContent=`name>"relative time value"`;var ke=n(Oe,2);ke.textContent=`-name>"relative time value"`,r(2),i(V),i(I);var H=n(I,6),U=t(H),W=t(U);W.textContent=`name>=number`;var Ae=n(W,2);Ae.textContent=`-name>=number`,i(U);var G=n(U,2),K=t(G);K.textContent=`name>=relative`;var je=n(K,2);je.textContent=`-name>=relative`,r(2),i(G);var q=n(G,2),Me=t(q);Me.textContent=`name>="relative time value"`;var Ne=n(Me,2);Ne.textContent=`-name>="relative time value"`,r(2),i(q),i(H);var J=n(H,6),Y=t(J),Pe=t(Y);Pe.textContent=`name<number`;var Fe=n(Pe,2);Fe.textContent=`-name<number`,i(Y);var X=n(Y,2),Ie=t(X);Ie.textContent=`name<relative`;var Le=n(Ie,2);Le.textContent=`-name<relative`,r(2),i(X);var Re=n(X,2),ze=t(Re);ze.textContent=`name<"relative time value"`;var Be=n(ze,2);Be.textContent=`-name<"relative time value"`,r(2),i(Re),i(J);var Z=n(J,6),Q=t(Z),Ve=t(Q);Ve.textContent=`name<=number`;var He=n(Ve,2);He.textContent=`-name<=number`,i(Q);var $=n(Q,2),Ue=t($);Ue.textContent=`name<=relative`;var We=n(Ue,2);We.textContent=`-name<=relative`,r(2),i($);var Ge=n($,2),Ke=t(Ge);Ke.textContent=`name<="relative time value"`;var qe=n(Ke,2);qe.textContent=`-name<="relative time value"`,r(2),i(Ge),i(Z);var Je=n(Z,8);Je.textContent=`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`,r(8),i(o),a(e,o)}export{o as component};