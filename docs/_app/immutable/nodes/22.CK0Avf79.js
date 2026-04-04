import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/BEISqkDj.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/DIXNzCvi.js";import{t as _}from"../chunks/jqiW6npt.js";import{t as v}from"../chunks/BvZlXv7L.js";var y=a(`<section><header class="major"><h1 style="font-size: 3em;">Export and Import</h1></header> <p>Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.</p> <p>Nymph has the following methods for exporting and importing entities.</p> <ul><li><code>export</code> - Export entities to a file.</li> <li><code>exportPrint</code> - Export entities to the console.</li> <li><code>import</code> - Import entities from a file.</li></ul> <!> <p>The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Full Text Search</a> <span></span></section>`,1);function b(a){var b=y();c(`1juh9vi`,i=>{var a=f();s(t(a),()=>_),r(()=>{n.title=`Export and Import - User Guide - Nymph.js`}),e(i,a)});var x=t(b),S=i(o(x),8);h(S,{get language(){return g},code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}),h(i(S,4),{get language(){return v},code:`#nex2
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
    newline="\\n"`}),l(x);var C=i(x,2),w=o(C);d(2),l(C),p(()=>u(w,`href`,`${m??``}/user-guide/full-text-search`)),e(a,b)}export{b as component};