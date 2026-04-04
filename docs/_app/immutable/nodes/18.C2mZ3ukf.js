import{C as e,G as t,H as n,I as r,K as i,T as a,W as o,b as s,g as c,it as l,p as u,rt as d,w as f,z as p}from"../chunks/DZDv-zr6.js";import{c as m}from"../chunks/BEISqkDj.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as h}from"../chunks/DUAD-eIe.js";import{t as g}from"../chunks/DIXNzCvi.js";import{t as _}from"../chunks/jqiW6npt.js";var v=a(`<section><header class="major"><h1 style="font-size: 3em;">Creating Entities</h1></header> <p>To create or retrieve an entity, you can call the <code>factory</code> static method of an entity's class and pass in an optional GUID. You can also
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
    into sleeping references.</p></section> <section class="page-steps"><a class="button">Previous: Introduction</a> <a class="button">Next: Entity Querying</a></section>`,1);function y(a){var y=v();c(`bgoxg5`,i=>{var a=f();s(t(a),()=>_),r(()=>{n.title=`Creating Entities - User Guide - Nymph.js`}),e(i,a)});var b=t(y),x=i(o(b),4);h(x,{get language(){return g},code:`// BlogPost extends the Entity class.
let blogPost = await BlogPost.factory();

// Check that the entity is new.
if (someBlogPost.guid == null) {
  alert("This blog post hasn't been saved yet!");
}`});var S=i(x,4);h(S,{get language(){return g},code:`blogPost.$addTag('super-post');
await blogPost.$save();

let superPosts = await nymph.getEntities(
  { class: BlogPost },
  { type: '&', tag: 'super-post' }
);

blogPost.$inArray(superPosts); // true`});var C=i(S,4);h(i(o(C),2),{get language(){return g},code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

entity.foo.bar = 'It works!';
await entity.foo.$save(); // Saving the referenced entity first! :)
await entity.$save(); // now foo has been saved.

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // False
console.log(entity.foo.bar); // Outputs 'It works!'.`}),l(C);var w=i(C,2);h(i(o(w),2),{get language(){return g},code:`let entity = await Entity.factory();
entity.foo = await Entity.factory();

await entity.$save(); // foo hasn't been saved yet!

entity.foo.bar = 'It works!';
await entity.foo.$save();

const guid = entity.guid;
entity = await Entity.factory(guid);

entity.foo.guid == null; // True
console.log(entity.foo.bar); // Outputs undefined.`}),l(w),d(4),l(b);var T=i(b,2),E=o(T),D=i(E,2);l(T),p(()=>{u(E,`href`,`${m??``}/user-guide/introduction`),u(D,`href`,`${m??``}/user-guide/entity-querying`)}),e(a,y)}export{y as component};