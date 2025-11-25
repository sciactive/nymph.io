import{f as u,a as o,c as b}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as l,t as x,e as y,s as t,c as p,$ as v,a as m,n as w}from"../chunks/uMqmAk-V.js";import{h as _,g as I}from"../chunks/BSVgqX3x.js";import{h as T,s as k}from"../chunks/Dx1ptvL_.js";import{t as E}from"../chunks/Ce9AoNbY.js";import{b as N}from"../chunks/DIlDRvmK.js";import{H as h}from"../chunks/DZfDsH_2.js";function P(i){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const U={name:"plaintext",register:P};var j=u(`<section><header class="major"><h1 style="font-size: 3em;">Export and Import</h1></header> <p>Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.</p> <p>Nymph has the following methods for exporting and importing entities.</p> <ul><li><code>export</code> - Export entities to a file.</li> <li><code>exportPrint</code> - Export entities to the console.</li> <li><code>import</code> - Import entities from a file.</li></ul> <!> <p>The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Full Text Search</a> <span></span></section>`,1);function z(i){var a=j();T("1juh9vi",c=>{var n=b(),g=l(n);_(g,()=>I),y(()=>{v.title="Export and Import - User Guide - Nymph.js"}),o(c,n)});var e=l(a),s=t(p(e),8);h(s,{get language(){return E},code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`});var d=t(s,4);h(d,{get language(){return U},code:`#nex2
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
    newline="\\n"`}),m(e);var r=t(e,2),f=p(r);w(2),m(r),x(()=>k(f,"href",`${N??""}/user-guide/full-text-search`)),o(i,a)}export{z as component};
