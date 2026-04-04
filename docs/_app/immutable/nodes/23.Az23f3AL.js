import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/k6Ybk7qv.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/DIXNzCvi.js";import{t as _}from"../chunks/jqiW6npt.js";var v=a(`<section><header class="major"><h1 style="font-size: 3em;">Full Text Search</h1></header> <p>Nymph provides a case insensitive full text search engine based on the <a href="https://forge.sciactive.com/sciactive/tokenizer" target="_blank">SciActive Tokenizer</a>. It has the ability to search for sequential tokens, exact tokens, "or"
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
    "delighted".</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Transactions</a> <a class="button" style="margin: .5em;">Next: Export and Import</a></section>`,1);function y(a){var y=v();c(`16lxu2m`,i=>{var a=f();s(t(a),()=>_),r(()=>{n.title=`Full Text Search - User Guide - Nymph.js`}),e(i,a)});var b=t(y);h(i(o(b),12),{get language(){return g},code:`nymph.getEntities(
  { class: SomeEntity },
  { type: '&', search: ['prop', 'light mode'] },
);`}),d(2),l(b);var x=i(b,2),S=o(x),C=i(S,2);l(x),p(()=>{u(S,`href`,`${m??``}/user-guide/transactions`),u(C,`href`,`${m??``}/user-guide/export-and-import`)}),e(a,y)}export{y as component};