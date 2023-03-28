<svelte:head>
  <title>Defining Entities - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Defining Entities</h1>
  </header>

  <p>
    To create a new type of data object in Nymph, you extend the <code
      >Entity</code
    > class. This is equivalent to creating a new table in a relational database.
    If you are going to use the class on the client side, you also need to create
    a corresponding client class. Below are two examples, one for Node.js, and one
    for the client. A more in depth explanation follows the examples.
  </p>

  <div>
    <div style="text-align: end;">Extending Entity in Node.js</div>
    <Highlight
      language={typescript}
      code={`import { Entity, Selector, nymphJoiProps } from '@nymphjs/nymph';
import { tilmeldJoiProps } from '@nymphjs/tilmeld';
import Joi from 'joi';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  static ETYPE = 'todo';
  static class = 'Todo';

  protected $clientEnabledMethods = ['$archive'];
  protected $allowlistData? = ['name', 'done'];
  protected $protectedTags = ['archived'];
  protected $allowlistTags? = [];

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(guid?: string): Todo & TodoData {
    return super.factorySync(guid) as Todo & TodoData;
  }

  constructor(guid?: string) {
    super(guid);

    if (this.guid == null) {
      this.$data.name = '';
      this.$data.done = false;
    }
  }

  async $archive() {
    if (this.$hasTag('archived')) {
      return true;
    }
    this.$addTag('archived');
    return await this.$save();
  }

  async $save() {
    if (!this.$nymph.tilmeld?.gatekeeper()) {
      // Only allow logged in users to save.
      throw new Error('You are not logged in.');
    }

    // Validate the entity's data.
    Joi.attempt(
      this.$getValidatable(),
      Joi.object().keys({
        ...nymphJoiProps,
        ...tilmeldJoiProps,

        name: Joi.string().trim(false).max(500, 'utf8').required(),
        done: Joi.boolean().required(),
      }),
      'Invalid Todo: '
    );

    // Check that this is not a duplicate Todo.
    const selector: Selector = {
      type: '&',
      equal: ['name', this.$data.name],
    };
    if (this.guid) {
      selector['!guid'] = this.guid;
    }
    if (
      await this.$nymph.getEntity(
        {
          class: this.constructor as typeof Todo,
        },
        selector
      )
    ) {
      throw new Error('There is already a todo for that.');
    }

    return await super.$save();
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}
    />
  </div>

  <div>
    <div style="text-align: end;">Extending Entity in the Client</div>
    <Highlight
      language={typescript}
      code={`import { Entity } from '@nymphjs/client';

export type TodoData = {
  name?: string;
  done?: boolean;
};

export class Todo extends Entity<TodoData> {
  // The name of the server class
  public static class = 'Todo';

  constructor(guid?: string) {
    super(guid);

    if (guid == null) {
      this.$data.name = '';
      this.$data.done = false;
    }
  }

  static async factory(guid?: string): Promise<Todo & TodoData> {
    return (await super.factory(guid)) as Todo & TodoData;
  }

  static factorySync(guid?: string): Todo & TodoData {
    return super.factorySync(guid) as Todo & TodoData;
  }

  async $archive(): Promise<boolean> {
    return await this.$serverCall('$archive', []);
  }
}

// Elsewhere, after initializing Nymph.
import { Todo as TodoClass } from './Todo.js';
const Todo = nymph.addEntityClass(TodoClass);`}
    />
  </div>

  <p>
    In both cases, defaults are set in the constructor (the <code>done</code>
    property is set to false and the <code>name</code> property is set to an
    empty string). You can see that from within the methods of an entity, the
    entity's data (other than guid, cdate, mdate, and tags) are accessed from
    <code>this.$data</code>. The
    <code>$data</code> part is not necessary outside of the entity's own methods.
  </p>

  <p>
    You'll also notice that when using Nymph from within an entity's methods,
    there is an instance of Nymph available in <code>this.$nymph</code> (or
    <code>this.nymph</code> in static methods). In Node.js, these instances will
    know which user is logged in and add appropriate permission checks, and will
    maintain a persistent DB connection during a transaction. On the client, these
    instances will know how to communicate with the configured REST server. Basically,
    you have to use these instances.
  </p>

  <p>
    In Node.js, the etype is set to <code>"todo"</code>. The etype of an entity
    determines which table(s) the entity will be placed in. When you search for
    an entity, you give Nymph a class. Nymph will use that class' etype to
    determine where to search for entities. If you don't provide a class, the
    <code>Entity</code> class and the "entity" etype will be used.
  </p>

  <p>
    The <code>$clientEnabledMethods</code> property and the
    <code>clientEnabledStaticMethods</code>
    static property in Node.js determine which methods and static methods can be
    called from the client using <code>$serverCall</code> and
    <code>serverCallStatic</code>. In the client class, the
    <code>return await this.$serverCall('$archive', []);</code> statement takes advantage
    of this feature.
  </p>

  <p>
    On both the Node.js class and the client class, the class name is set in the <code
      >class</code
    > static property. This class name should match on each side. It is how Nymph
    maps the client class to the Node.js class and vice versa.
  </p>

  <p>
    Finally, in Node.js, the <code>Todo</code> class validates all of its data
    in the <code>$save</code> method using
    <a href="https://joi.dev/" target="_blank" rel="noreferrer">Joi</a>. Without
    this validation, a malicious user could send invalid data types or even
    megabytes worth of data in an entity. Any validation library should support
    validation in Nymph using the <code>$getValidatable</code> method. The
    <code>$allowlistData</code> property will ensure no extra properties are set.
  </p>
</section>

<section class="page-steps">
  <a href="{base}/user-guide/entity-class" class="button" style="margin: .5em;"
    >Previous: Entity Class</a
  >
  <a href="{base}/user-guide/uids" class="button" style="margin: .5em;"
    >Next: UIDs</a
  >
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
