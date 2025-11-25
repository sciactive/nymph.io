import{f as k,a as u,c as I}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f,t as C,e as D,s as e,c as m,$ as O,a as p}from"../chunks/uMqmAk-V.js";import{h as j,g as N}from"../chunks/BSVgqX3x.js";import{h as _,s as g}from"../chunks/Dx1ptvL_.js";import{t}from"../chunks/Ce9AoNbY.js";import{b as w}from"../chunks/DIlDRvmK.js";import{H as a}from"../chunks/DZfDsH_2.js";var A=k(`<section><header class="major"><h1 style="font-size: 3em;">Entity Class</h1></header> <p>Entities in Nymph work pretty much like regular objects, and this is due to
    the Entity class. The Entity class constructor returns a proxy to allow
    accessing data on it just like a regular object while keeping track of
    changes and only unserializing data from the DB when it's first accessed.
    Instance methods and properties begin with "$" to differentiate them from
    data.</p> <p>In the client, assigning a property internally marks that property as
    "dirty", and calling <code>$patch</code> will push just the changed
    properties up to the server, whereas <code>$save</code> would push all properties.</p> <p>Entities can be organized using tags. To add, remove, and check tags, the
    methods <code>$addTag</code>, <code>$removeTag</code>, and <code>$hasTag</code> are used, respectively. Each takes any number of tags as
    arguments.</p> <!> <p>Entities that have been saved inside another entity's property are loaded as
    "sleeping references". This means their data is not actually pulled from the
    database/server. It will "wake up" when you use <code>$wake</code> on it or <code>$wakeAll</code> on the entity that contains it.</p> <p>To clear the cache of referenced entities, so that the next time one is
    awoken, it will be pulled from the database, use the <code>$clearCache</code> method in Node.js or the <code>$refresh</code> method in the client.</p> <!> <p>Much like clearing the entity cache, you may need to refresh the entity's
    own data in Node.js. Use the <code>$refresh</code> method, just like in the client,
    for this.</p> <!> <p>To save an entity, use the <code>$save</code> method. Likewise, to delete
    the entity, use the <code>$delete</code> method. You can also call the <code>saveEntity</code>, <code>deleteEntity</code>, and <code>deleteEntityByID</code> methods of <code>Nymph</code>. The <code>Entity</code> class uses these methods.</p> <!> <p>Entities can't be checked using the <code>==</code> operator. Instead, you can
    use the following entity methods.</p> <ul><li><code>$is</code> - Perform a less strict comparison of two entities
      (basically a GUID check). To return true, the entities must meet the
      following criteria. <ul><li>They must be entities.</li> <li>They must have equal GUIDs, or both can have no GUID.</li> <li>If they have no GUIDs, their data and tags must be equal.</li></ul></li> <li><code>$equals</code> - Perform a more strict comparison of two entities
      (basically a GUID + data + tags check). To return true, the entities must
      meet the following criteria. Unlike <code>$is</code>, this method can't be
      used on sleeping references. <ul><li>They must be entities.</li> <li>They must have equal GUIDs, or both can have no GUID.</li> <li>Their data and tags must be equal.</li></ul></li> <li><code>$inArray</code> - Check whether the entity is in an array. Takes two
      arguments, the array and a boolean <code>strict</code>. If <code>strict</code> is false or undefined, the function uses <code>$is</code> to compare, and
      if it's true, the function uses <code>$equals</code>.</li> <li><code>$arraySearch</code> - Search an array for the entity and return its
      index, or <code>-1</code> if it's not found. Takes two arguments, the
      array and a boolean <code>strict</code>. If <code>strict</code> is false or undefined, the
      function uses <code>$is</code> to compare, and if it's true, the function uses <code>$equals</code>. This
      method may return 0, which evaluates to false, so you should use <code>$inArray</code> if you are only checking whether the entity is in the
      array.</li></ul> <!> <p>Client side Nymph entities can use the <code>$serverCall</code> method to
    call methods on a server side instance of the entity. <code>$serverCall</code> expects three parameters.</p> <ul><li><code>method</code> - the name of the method to call on the server side object.</li> <li><code>params</code> - an array of the parameters to pass to the method.</li> <li><code>stateless</code> - if set to true, the method won't update the entity
      with the returned server side representation.</li></ul> <p>Normally, when you use this method, just before the promise is fulfilled,
    the entity's data will be replaced with that of the entity on the server
    side after the method was run. This will cause any awoken entities in the
    data of your entity to be replaced with sleeping entities, so you will have
    to run <code>$readyAll</code> again. If you know that the server side method
    will not change any of the data on the entity, you can set <code>stateless</code> to true.</p> <p>You can also call static methods on the server with <code>serverCallStatic</code>.</p> <p>In order to be called from the client side, the method must be listed in the <code>$clientEnabledMethods</code> or <code>clientEnabledStaticMethods</code> property in the Node.js class. This
    guards against a user submitting tailored requests to perform potentially
    dangerous tasks on the server side. If the method is not listed, the request
    will fail with a <code>403 Forbidden</code> status.</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Subscribing to Queries</a> <a class="button" style="margin: .5em;">Next: Defining Entities</a></section>`,1);function z(v){var i=A();_("1jwzn9u",E=>{var y=I(),T=f(y);j(T,()=>N),D(()=>{O.title="Entity Class - User Guide - Nymph.js"}),u(E,y)});var o=f(i),n=e(m(o),8);a(n,{get language(){return t},code:`const entity = await MyEntity.factory();

entity.$addTag('foo', 'bar');
entity.$hasTag('foo'); // True

entity.$removeTag('foo', 'bar');
entity.$hasTag('foo'); // False`});var s=e(n,6);a(s,{get language(){return t},code:`// Create some entities.
let entity = await MyEntity.factory();
entity.foo = await MyEntity.factory();
entity.foo.bar = 'Old value.';
await entity.foo.$save();
await entity.$save();

// Get a copy of the referenced entity.
let instOfFoo = await nymph.getEntity(
  { class: MyEntity },
  { type: '&', guid: entity.foo.guid }
);
// And change a value on it.
instOfFoo.bar = 'New value.';
await instOfFoo.$save();

console.log(entity.foo.bar); // Outputs 'Old value.'
// If on Node.js
entity.$clearCache();
await entity.foo.$wake();
// Else if on the client
await entity.$refresh();
await entity.foo.$wake();
// End if
console.log(entity.foo.bar); // Outputs 'New value.'`});var r=e(s,4);a(r,{get language(){return t},code:`// Create an entity.
const entity = await MyEntity.factory();
entity.foo = 'Old value.';
await entity.$save();

// Get a copy of the entity.
const instOfEnt = await nymph.getEntity(
  { class: MyEntity },
  { type: '&', guid: entity.guid }
);
// And change a value on it.
instOfEnt.foo = 'New value.';
await instOfEnt.$save();

console.log(entity.foo); // Outputs 'Old value.'
await entity.$refresh();
console.log(entity.foo); // Outputs 'New value.'`});var c=e(r,4);a(c,{get language(){return t},code:`const entity = await MyEntity.factory();

// Save the entity.
await entity.$save();
// or
await nymph.saveEntity(entity);
// or
await nymph.saveEntities([entity]);

// (Client only.) Save only the data that has changed.
await entity.$patch();
// or
await nymph.patchEntity(entity);
// or
await nymph.patchEntities([entity]);

// Delete the entity.
await entity.$delete();
// or
await nymph.deleteEntity(entity);
// or
await nymph.deleteEntities([entity]);`});var d=e(c,6);a(d,{get language(){return t},code:`// Assuming the entity with GUID 'a4c1591d6ea91c8450d2d360' exists.
let entity = await MyEntity.factory('a4c1591d6ea91c8450d2d360');
let entity2 = await MyEntity.factory('a4c1591d6ea91c8450d2d360');

entity.$is(entity2); // True
entity.$equals(entity2); // True

entity2.someProp = 'some new value';
entity.$is(entity2); // True
entity.$equals(entity2); // False

const arr = [null, null, entity2];
entity.$arraySearch(arr); // 2
entity.$inArray(arr); // True
entity.$arraySearch(arr, true); // -1
entity.$inArray(arr, true); // false`});var $=e(d,12);a($,{get language(){return t},code:`// You can use $serverCall and serverCallStatic directly.
try {
  const success: boolean = await todo.$serverCall('$archive', []);
  if (!success) {
    alert("Couldn't archive " + todo.name);
  }
} catch (e) {
  alert('Error: ' + e.textStatus + "
Couldn't archive " + todo.name);
}

// Or you can define methods like this in your client class.
class Todo extends Entity<TodoData> {
  // ...

  static async archiveAllDone(onlyOlderThanDay: boolean): Promise<boolean> {
    return await this.serverCallStatic('archiveAllDone', [onlyOlderThanDay]);
  }

  async $archive(): Promise<boolean> {
    return await this.$serverCall('archive', []);
  }
}

// You'd use them like this.
const success = await Todo.archiveAllDone(true);

// And
const todo = await Todo.factory(someGuid);
const success = await todo.$archive();`}),p(o);var l=e(o,2),h=m(l),b=e(h,2);p(l),C(()=>{g(h,"href",`${w??""}/user-guide/subscribing-to-queries`),g(b,"href",`${w??""}/user-guide/defining-entities`)}),u(v,i)}export{z as component};
