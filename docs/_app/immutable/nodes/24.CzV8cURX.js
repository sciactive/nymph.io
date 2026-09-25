import{B as e,E as t,G as n,J as r,K as i,L as a,U as o,_ as s,m as c,ot as l,w as u}from"../chunks/H09IMVH7.js";import{o as d}from"../chunks/B53uXem5.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";var f=t(`<section><header class="major"><h1 style="font-size: 3em;">Introduction</h1></header> <p>Nymph is an application data framework for Node.js and the browser, written
    in TypeScript. Nymph data objects, called entities, are accessed just like
    plain objects. Nymph includes a REST server, a Publish/Subscribe server, and
    a user/group manager with authentication.</p> <header class="major"><h2>Understanding Nymph Applications</h2></header> <p>Data in Nymph is stored and manipulated in objects called <strong>entities</strong>. Entities can hold most types of data available in JavaScript, including
    other entities. Entities are not strictly structured, so data of any type
    can be added and saved just by assigning it to a property on the entity and
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
    access control.</p> <p>When you save an entity in another entity's properties, that relationship is
    saved in the database, and you can query for those kinds of relationships.
    When you pull out the parent entity from the database, the child entity is
    in a reference state called a "sleeping entity". When an entity is asleep,
    only its GUID is known. You can "awaken" the entity, which pulls all of its
    data from the database/server. Referenced entities' class names are saved
    along with their GUIDs. When this entity is isntantiated, Nymph will
    retrieve it using the saved class, so it will have the correct class even
    when it's asleep. You can awaken a sleeping entity by using the <code>$wake</code> method on it. You can also use the <code>$wakeAll</code> method on an entity to
    awaken all of the sleeping entities in its data.</p> <p>When querying entities with Nymph, the ETYPE constant on the class
    determines which database table(s) Nymph will look in. Usually, one etype
    will map to exactly one class, but that's not a requirement.</p> <p>You now know the basics of how data is managed in a Nymph application. When
    you're ready to start getting into the details, move to the next section.</p> <p style="font-size: smaller;">Caution: When changing an entity's class name, any entities referencing it
    must be resaved after setting the reference again using the new class name.</p> <header class="major"><h2>API Docs</h2></header> <p>If you want to really dive deep into Nymph, you can also browse the <a href="/api/latest/" rel="external">API docs</a>, which covers every part of Nymph's API.</p></section> <section class="page-steps"><span></span> <a class="button" style="margin: .5em;">Next: Creating Entities</a></section>`,1);function p(t){var p=f();s(`eu006k`,e=>{a(()=>{o.title=`Introduction - User Guide - Nymph.js`})});var m=r(i(p),2),h=r(n(m),2);l(m),e(()=>c(h,`href`,`${d??``}/user-guide/creating-entities`)),u(t,p)}export{p as component};