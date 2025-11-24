import{h as u,a as o,t as b,c as x}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{f as l,$ as y,s as t,c as p,a as m,n as v}from"../chunks/xPuFI3q7.js";import{h as w,g as I}from"../chunks/C0NHSKHS.js";import{s as T}from"../chunks/Dx4IbXf0.js";import{t as k}from"../chunks/Ce9AoNbY.js";import{b as E}from"../chunks/DnMb0p-7.js";import{H as h}from"../chunks/9N_cuTOb.js";function _(i){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const N={name:"plaintext",register:_};var P=b(`<section><header class="major"><h1 style="font-size: 3em;">Export and Import</h1></header> <p>Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.</p> <p>Nymph has the following methods for exporting and importing entities.</p> <ul><li><code>export</code> - Export entities to a file.</li> <li><code>exportPrint</code> - Export entities to the console.</li> <li><code>import</code> - Import entities from a file.</li></ul> <!> <p>The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Transactions</a> <span></span></section>`,1);function H(i){var a=P();u(f=>{var r=x();y.title="Export and Import - User Guide - Nymph.js";var g=l(r);w(g,()=>I,!1,!1),o(f,r)});var e=l(a),s=t(p(e),8);h(s,{language:k,code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`});var d=t(s,4);h(d,{language:N,code:`#nex2
# The above line must be the first thing in the file.
# Comments begin with #
   # And can have white space before them.
# This defines a UID.
<name/of/uid>[5]
<another uid>[8000]
# For UIDs, the name is in angle brackets (<>) and the value follows
# in square brackets ([]).
# This starts a new entity.
{1234abcd}<etype>[tag,list,with,commas]
# For entities, the GUID is in curly brackets ({}), then the etype in
#  angle brackets, then the comma separated tag list follows in square
#  brackets ([]).
# Properties are stored like this:
# propname=JSON.stringify(value)
    abilities=["system/all"]
    groups=[]
    inheritAbilities=false
    name="admin"
# White space before/after "=" and at beginning/end of line is ignored.
        username  =     "admin"
{2}<etype>[tag,list]
    another="This is another entity."
    newline="\\n"`}),m(e);var n=t(e,2),c=p(n);T(c,"href",`${E??""}/user-guide/transactions`),v(2),m(n),o(i,a)}export{H as component};
