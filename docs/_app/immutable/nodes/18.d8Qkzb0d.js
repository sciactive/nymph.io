import{B as e,E as t,G as n,J as r,K as i,L as a,T as o,U as s,_ as c,at as l,m as u,ot as d,w as f,x as p}from"../chunks/H09IMVH7.js";import{o as m}from"../chunks/CIAV_iJ2.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as h}from"../chunks/D_gJAAal.js";import{t as g}from"../chunks/BF3MJUBc.js";import{t as _}from"../chunks/Ciszbs-_.js";var v=t(`<section><header class="major"><h1 style="font-size: 3em;">Creating Entities</h1></header> <p>To create or retrieve an entity, you can call the <code>factory</code> static method of an entity's class and pass in an optional GUID. You can also
    use the <code>factorySync</code> method if you need to create a new entity
    synchronously. The benefit of using the factory methods is that they can
    return the correct type in TypeScript. To check that an entity hasn't been
    saved yet, check that the GUID is null (<code>entity.guid == null</code>).</p> <!> <p>Much like entries in many blogging systems, entities can be organized using
    tags. The tags provide a fast way to query entities.</p> <!> <p>Be cautious when saving an entity in another entity's property. If the
    referenced entity is newly created and does not have a GUID, Nymph will not
    be able to retrieve it later. Always save the referenced entity first.</p> <div><div style="text-align: end;">Saving a Referenced Entity the <strong>Right</strong> Way</div> <!></div> <div><div style="text-align: end;">Saving a Referenced Entity the <strong>Wrong</strong> Way</div> <!></div> <p>Caution: Since the referenced entity's class name is stored in the reference
    on the parent entity, if you change the class name in an update, you need to
    reassign all referenced entities of that class and resave.</p> <p>When an entity is loaded, it does not request its referenced entities from
    Nymph. Instead, it creates instances without data called "sleeping
    references". You can use \`$wake\` on the entity or \`$wakeAll\` on the parent
    entity to get the entity's data from the DB. The <code>$wakeAll</code> method will awaken all sleeping references in the entity's data. You can call <code>$clearCache</code> in Node.js or <code>$refresh</code> in the client to turn all the entities back
    into sleeping references.</p></section> <section class="page-steps"><a class="button">Previous: Introduction</a> <a class="button">Next: Entity Querying</a></section>`,1);function y(t){var y=v();c(`bgoxg5`,e=>{var t=o(),n=i(t);p(n,()=>_),a(()=>{s.title=`Creating Entities - User Guide - Nymph.js`}),f(e,t)});var b=i(y),x=r(n(b),4);h(x,{get language(){return g},code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`});var S=r(x,4);h(S,{get language(){return g},code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`});var C=r(S,4),w=r(n(C),2);h(w,{get language(){return g},code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}),d(C);var T=r(C,2),E=r(n(T),2);h(E,{get language(){return g},code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}),d(T),l(4),d(b);var D=r(b,2),O=n(D),k=r(O,2);d(D),e(()=>{u(O,`href`,`${m??``}/user-guide/introduction`),u(k,`href`,`${m??``}/user-guide/entity-querying`)}),f(t,y)}export{y as component};