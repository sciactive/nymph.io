import{h as P,a as u,t as _,c as I}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{f,$ as T,s as e,c as t,a,n as x}from"../chunks/xPuFI3q7.js";import{h as B,g as S}from"../chunks/C0NHSKHS.js";import{s as p}from"../chunks/Dx4IbXf0.js";import{t as n}from"../chunks/Ce9AoNbY.js";import{b as v}from"../chunks/DnMb0p-7.js";import{H as i}from"../chunks/9N_cuTOb.js";var C=_(`<section><header class="major"><h1 style="font-size: 3em;">Creating Entities</h1></header> <p>To create or retrieve an entity, you can call the <code>factory</code> static method of an entity's class and pass in an optional GUID. You can also
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
    into sleeping references.</p></section> <section class="page-steps"><a class="button">Previous: Introduction</a> <a class="button">Next: Entity Querying</a></section>`,1);function R(m){var r=C();P(E=>{var g=I();T.title="Creating Entities - User Guide - Nymph.js";var k=f(g);B(k,()=>S,!1,!1),u(E,g)});var o=f(r),c=e(t(o),4);i(c,{language:n,code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`});var d=e(c,4);i(d,{language:n,code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`});var s=e(d,4),w=e(t(s),2);i(w,{language:n,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}),a(s);var l=e(s,2),b=e(t(l),2);i(b,{language:n,code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}),a(l),x(4),a(o);var y=e(o,2),h=t(y);p(h,"href",`${v??""}/user-guide/introduction`);var $=e(h,2);p($,"href",`${v??""}/user-guide/entity-querying`),a(y),u(m,r)}export{R as component};
