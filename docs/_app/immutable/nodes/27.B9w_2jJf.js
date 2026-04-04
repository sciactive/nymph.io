import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/BEISqkDj.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/DIXNzCvi.js";import{t as _}from"../chunks/jqiW6npt.js";var v=a(`<section><header class="major"><h1 style="font-size: 3em;">UIDs</h1></header> <p>UIDs, or unique IDs, provide an easier way for users to identify entities.
    UIDs are just sequential numbers and can be used for anything you like, not
    just entities. As opposed to a GUID, which is a unique ID for all entities,
    a UID is only unique for its own sequence. Therefore, they are more visually
    appealing to be used as an ID. (Think Sale #615 vs Sale
    #790219d8fb67a1357707b71d.)</p> <p>Nymph has the following methods for handling UIDs:</p> <ul><li><code>deleteUID</code> - Delete a unique ID from the system.</li> <li><code>getUID</code> - Get the current value of a unique ID.</li> <li><code>newUID</code> - Increment or create a unique ID and return the new value.</li> <li><code>renameUID</code> - Rename a unique ID.</li> <li><code>setUID</code> - Set the value of a unique ID.</li></ul> <!> <p>You probably don't want to allow any UIDs from the client. Then a malicious
    user can mess with the UID. Instead, from the server side, you can create a
    UID when the entity is saved. You can also gate UIDs using abilities like
    "uid/get/nameofuid", "uid/new/nameofuid", and "uid/set/nameofuid". These
    abilities are <strong>only</strong> checked for client queries. If you're
    using UIDs from Node.js and want to gate them, use the <code>checkClientUIDPermissions</code> method on Tilmeld.</p> <p>Caution: If a UID is incremented, and the entity you're using it on can't be
    saved, there is no safe way to decrement the UID back to its previous value.
    It's much better to just throw away that UID.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Defining Entities</a> <a class="button" style="margin: .5em;">Next: Transactions</a></section>`,1);function y(a){var y=v();c(`19i047b`,i=>{var a=f();s(t(a),()=>_),r(()=>{n.title=`UIDs - User Guide - Nymph.js`}),e(i,a)});var b=t(y);h(i(o(b),8),{get language(){return g},code:`let entity = await Post.factory();

entity.id = await nymph.newUID('Blog/Post');
await entity.$save();`}),d(4),l(b);var x=i(b,2),S=o(x),C=i(S,2);l(x),p(()=>{u(S,`href`,`${m??``}/user-guide/defining-entities`),u(C,`href`,`${m??``}/user-guide/transactions`)}),e(a,y)}export{y as component};