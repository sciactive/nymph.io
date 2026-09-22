import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/C4hVk8aN.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/Ciszbs-_.js";var v=t(`<section><header class="major"><h1 style="font-size: 3em;">UIDs</h1></header> <p>UIDs, or unique IDs, provide an easier way for users to identify entities.
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
    It's much better to just throw away that UID.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Defining Entities</a> <a class="button" style="margin: .5em;">Next: Transactions</a></section>`,1);function y(t){var y=v();c(`19i047b`,e=>{var t=o(),n=i(t);p(n,()=>_),a(()=>{s.title=`UIDs - User Guide - Nymph.js`}),f(e,t)});var b=i(y),x=r(n(b),8);h(x,{get language(){return g},code:`let entity = await Post.factory();

entity.id = await nymph.newUID('Blog/Post');
await entity.$save();`}),l(4),d(b);var S=r(b,2),C=n(S),w=r(C,2);d(S),e(()=>{u(C,`href`,`${m??``}/user-guide/defining-entities`),u(w,`href`,`${m??``}/user-guide/transactions`)}),f(t,y)}export{y as component};