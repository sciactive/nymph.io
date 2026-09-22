import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/C4hVk8aN.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/Ciszbs-_.js";var v={name:`plaintext`,aliases:[`text`,`txt`],register:{name:`plaintext`,caseInsensitive:!1,unicode:!1,disableAutodetect:!0,states:[{rules:[]}],aliases:[`text`,`txt`]}},y=t(`<section><header class="major"><h1 style="font-size: 3em;">Export and Import</h1></header> <p>Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.</p> <p>Nymph has the following methods for exporting and importing entities.</p> <ul><li><code>export</code> - Export entities to a file.</li> <li><code>exportPrint</code> - Export entities to the console.</li> <li><code>import</code> - Import entities from a file.</li></ul> <!> <p>The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Full Text Search</a> <span></span></section>`,1);function b(t){var b=y();c(`1juh9vi`,e=>{var t=o(),n=i(t);p(n,()=>_),a(()=>{s.title=`Export and Import - User Guide - Nymph.js`}),f(e,t)});var x=i(b),S=r(n(x),8);h(S,{get language(){return g},code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`});var C=r(S,4);h(C,{get language(){return v},code:`#nex2
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
    newline="\\n"`}),d(x);var w=r(x,2),T=n(w);l(2),d(w),e(()=>u(T,`href`,`${m??``}/user-guide/full-text-search`)),f(t,b)}export{b as component};