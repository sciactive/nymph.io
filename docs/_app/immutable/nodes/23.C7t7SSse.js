import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/C4hVk8aN.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/Ciszbs-_.js";var v=t(`<section><header class="major"><h1 style="font-size: 3em;">Full Text Search</h1></header> <p>Nymph provides a case insensitive full text search engine based on the <a href="https://forge.sciactive.com/sciactive/tokenizer" target="_blank">SciActive Tokenizer</a>. It has the ability to search for sequential tokens, exact tokens, "or"
    searches, and negation of tokens.</p> <p>When an entity is saved into the database, it has a chance (through the <code>getFTSText</code> static function) to alter text from its properties before FTS indexing (removing
    HTML tags, extracting text from Base64, etc). Once the text is finalized, it's
    converted to lower case, broken apart into words, stop words are removed, each
    word is stemmed (running -&gt; run, etc), and the stem and the original are turned
    into 32-bit tokens. The tokens, along with their position and whether they're
    a stem, are stored in the database.</p> <p>The following example queries show how to use the available features.</p> <ul><li><code>light</code> - finds "light", "lights", "lighting", "lighted"</li> <li><code>light mode</code> - finds "light mode", "The disctinct mode ... bright
      lighting around..."</li> <li><code>'light mode'</code> - finds "light mode", "lighting mode", "lighting
      the mode", "lighted and moded"</li> <li><code>"light mode"</code> - finds "light mode", "light and mode", "light a
      mode"</li> <li><code>light or dark</code> - finds "this is light" or "dark is here"</li> <li><code>"light mode" or "dark mode"</code> - finds "light mode on" or "dark mode
      above"</li> <li><code>-light</code> - finds anything without "light", "lights", "lighting",
      "lighted"</li> <li><code>-'light mode'</code> - finds anything without "light mode", "lighting
      mode", "lighting the mode", "lighted and moded"</li> <li><code>-"light mode"</code> - finds anything without "light mode", "light and
      mode", "light a mode"</li> <li><code>"light mode" or -"grayscale"</code> - finds "light mode", "light and
      mode", "light a mode" or anything without "grayscale"</li></ul> <p>You can use the search feature with the <code>search</code> clause in a Nymph
    query:</p> <!> <p>One thing to note is that this is not a substring search, so a search for
    "light" will not match strings with the words, "slight", "blight", or
    "delighted".</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Transactions</a> <a class="button" style="margin: .5em;">Next: Export and Import</a></section>`,1);function y(t){var y=v();c(`16lxu2m`,e=>{var t=o(),n=i(t);p(n,()=>_),a(()=>{s.title=`Full Text Search - User Guide - Nymph.js`}),f(e,t)});var b=i(y),x=r(n(b),12);h(x,{get language(){return g},code:`nymph.getEntities(
  { class: SomeEntity },
  { type: '&', search: ['prop', 'light mode'] },
);`}),l(2),d(b);var S=r(b,2),C=n(S),w=r(C,2);d(S),e(()=>{u(C,`href`,`${m??``}/user-guide/transactions`),u(w,`href`,`${m??``}/user-guide/export-and-import`)}),f(t,y)}export{y as component};