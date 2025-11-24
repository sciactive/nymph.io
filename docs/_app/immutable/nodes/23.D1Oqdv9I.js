import{h as s,a as r,t as o}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{s as a,f as h,$ as c,c as d,a as l}from"../chunks/xPuFI3q7.js";import{s as p}from"../chunks/Dx4IbXf0.js";import{b as y}from"../chunks/DnMb0p-7.js";var u=o(`<section><header class="major"><h1 style="font-size: 3em;">Introduction</h1></header> <p>Nymph is an ORM for Node.js and the browser, written in TypeScript. Nymph
    data objects, called entities, are accessed just like plain objects. Nymph
    includes a REST server and a Publish/Subscribe server.</p> <header class="major"><h2>Understanding Nymph Applications</h2></header> <p>Data in Nymph is stored and manipulated in objects called <strong>entities</strong>. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning a property on the entity and
    calling <code>$save</code>. This makes data manipulation and rapid
    prototyping in Nymph very easy. Then when you're ready to launch to
    production, you would use a validation library to enforce a schema for your
    entities. <a href="https://joi.dev/" target="_blank" rel="noreferrer">Joi</a> is a good one. You can do this in the <code>$save</code> method on your entities before calling <code>return await super.$save();</code>. This means that during
    development, you don't need to worry about managing schemas at all, but you
    still get the benefit of strict checks in production.</p> <p>All entities are given a globally unique identifier (GUID), which is a
    random, cryptographically secure, 12 byte integer, encoded in a 24
    character, lowercase HEX string. Since these are random and quite large,
    there should never be any two entities in any Nymph installation with the
    same GUIDs (unless that's done on purpose). Nymph also provides UIDs, which
    are sequential and can be used to number entities (or anything else).</p> <p>Using Nymph, nearly all of an app's business logic can be written on either
    the client side or the server side, since you interact with data the same
    way in each. Anything that relies on access control can be handled on the
    server side where Tilmeld, Nymph's optional user/group manager, provides
    access control.</p> <p>If an entity is referenced in another entity's property, the class name is
    saved along with the GUID. When this referenced entity is awoken, Nymph will
    retrieve it using the saved class.</p> <p>When an entity containing a referenced entity is pulled from the database,
    the referenced entity will exist in the data as a "sleeping reference".
    Sleeping references have the right class and know their GUID, but other data
    is not accessible until its pulled from the database. This happens when you
    use the <code>$wake</code> method on it, or the <code>$wakeAll</code> method
    on its parent.</p> <p>When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in.</p> <p>Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.</p> <header class="major"><h2>API Docs</h2></header> <p>If you want to really dive deep into Nymph, you can also browse the <a href="/api/latest/" rel="external">API docs</a>, which covers every part of Nymph's API.</p></section> <section class="page-steps"><span></span> <a class="button" style="margin: .5em;">Next: Creating Entities</a></section>`,1);function N(n){var e=u();s(m=>{c.title="Introduction - User Guide - Nymph.js"});var t=a(h(e),2),i=a(d(t),2);p(i,"href",`${y??""}/user-guide/creating-entities`),l(t),r(n,e)}export{N as component};
