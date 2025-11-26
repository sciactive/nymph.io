import{f as b,a as h,c as v}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as n,t as y,e as w,s as t,c as r,$ as x,n as k,a as d}from"../chunks/uMqmAk-V.js";import{h as T,g as _}from"../chunks/BSVgqX3x.js";import{h as S,s as l}from"../chunks/Dx1ptvL_.js";import{t as z}from"../chunks/Ce9AoNbY.js";import{b as g}from"../chunks/DJsMn768.js";import{H as F}from"../chunks/DZfDsH_2.js";var N=b(`<section><header class="major"><h1 style="font-size: 3em;">Full Text Search</h1></header> <p>Nymph provides a case insensitive full text search engine based on the <a href="https://github.com/sciactive/tokenizer" target="_blank">SciActive Tokenizer</a>. It has the ability to search for sequential tokens, exact tokens, "or"
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
    "delighted".</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Transactions</a> <a class="button" style="margin: .5em;">Next: Export and Import</a></section>`,1);function B(c){var i=N();S("16lxu2m",f=>{var s=v(),u=n(s);T(u,()=>_),w(()=>{x.title="Full Text Search - User Guide - Nymph.js"}),h(f,s)});var e=n(i),m=t(r(e),12);F(m,{get language(){return z},code:`nymph.getEntities(
  { class: SomeEntity },
  { type: '&', search: ['prop', 'light mode'] },
);`}),k(2),d(e);var o=t(e,2),a=r(o),p=t(a,2);d(o),y(()=>{l(a,"href",`${g??""}/user-guide/transactions`),l(p,"href",`${g??""}/user-guide/export-and-import`)}),h(c,i)}export{B as component};
