import{f as g,a as o,c as D}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as r,t as y,e as U,s as t,c as u,$ as v,n as b,a as l}from"../chunks/uMqmAk-V.js";import{h as w,g as q}from"../chunks/BSVgqX3x.js";import{h as _,s as c}from"../chunks/Dx1ptvL_.js";import{t as j}from"../chunks/Ce9AoNbY.js";import{b as d}from"../chunks/BtwkVUQB.js";import{H as k}from"../chunks/DZfDsH_2.js";var T=g(`<section><header class="major"><h1 style="font-size: 3em;">UIDs</h1></header> <p>UIDs, or unique IDs, provide an easier way for users to identify entities.
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
    It's much better to just throw away that UID.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Defining Entities</a> <a class="button" style="margin: .5em;">Next: Transactions</a></section>`,1);function Y(m){var a=T();_("19i047b",p=>{var n=D(),I=r(n);w(I,()=>q),U(()=>{v.title="UIDs - User Guide - Nymph.js"}),o(p,n)});var e=r(a),h=t(u(e),8);k(h,{get language(){return j},code:`let entity = await Post.factory();

entity.id = await nymph.newUID('Blog/Post');
await entity.$save();`}),b(4),l(e);var s=t(e,2),i=u(s),f=t(i,2);l(s),y(()=>{c(i,"href",`${d??""}/user-guide/defining-entities`),c(f,"href",`${d??""}/user-guide/transactions`)}),o(m,a)}export{Y as component};
