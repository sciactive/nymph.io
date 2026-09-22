<svelte:head>
  <title>Transactions - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Transactions</h1>
  </header>

  <p>
    In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.
  </p>

  <p>
    When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.
  </p>

  <header class="major">
    <h2>Manually Creating Transactions</h2>
  </header>

  <p>
    <code>Nymph</code> has the following instance methods for manually managing transactions.
  </p>

  <ul>
    <li><code>startTransaction</code> - Start a named transaction.</li>
    <li><code>commit</code> - Commit a named transaction.</li>
    <li><code>rollback</code> - Rollback a named transaction.</li>
    <li>
      <code>inTransaction</code> - Check if Nymph is currently running within a transaction.
    </li>
  </ul>

  <p>
    <code>startTransaction</code> will return a new, transactional instance of Nymph.
    For the rest of the transaction, until it is committed or rolled back, you should
    use this instance. It will be tied to a specific connection to the database.
  </p>

  <header class="major">
    <h2>The <code>transactional</code> Decorator</h2>
  </header>

  <p>
    Nymph also exports a decorator, <code>transactional</code>, that can be used
    on an async entity instance method to run the entire method in a
    transaction. If the method resolves, the transaction will be committed, and
    if the method throws, the transaction will be rolled back. If needed, you
    can then run <code>$refresh</code> on the entity to undo any changes to its data
    that didn't end up in the database. This decorator doesn't require that you name
    a transaction, because it will use the method's name, appended with a long random
    string.
  </p>

  <header class="major">
    <h2>The <code>transaction</code> Helper Function</h2>
  </header>

  <p>
    Nymph also exports a <code>transaction</code> helper function that accepts
    another async function to run within a transaction. The passed in function
    is given a transactional instance of <code>Nymph</code>. If the function
    resolves, the transaction is committed, and if the function throws, the
    transaction is rolled back. Regardless, a finally function is allowed to run
    before promise resolution/rejection and is passed the original instance of
    <code>Nymph</code>. This is helpful if you need a transaction around only
    part of a method, or something that isn't an entity instance method.
  </p>

  <header class="major">
    <h2>Handling Transactional Instances</h2>
  </header>

  <p>
    The transactional instance of Nymph has its own set of classes. You can use
    its <code>getEntityClass</code> method to get the proper classes for that
    instance of Nymph. This is only stictly necessary for <code>factory</code>
    and other static methods, since <code>Nymph</code>'s
    <code>getEntities</code>
    and <code>getEntity</code> methods will always use the correct classes to instantiate
    entities, even if you pass in one from a higher instance.
  </p>

  <p>
    When you start a new transaction, entity classes and instances retrieved
    from that transactional Nymph instance will have that instance within their
    static <code>nymph</code>
    property and instance <code>$nymph</code> property. As long as the code in your
    entities always uses these instances, every query and change should occur within
    that transaction.
  </p>

  <p>
    Since it is <strong>very</strong> important to use the right instance when
    you are using transactions, you should use the
    <code>$setNymph(nymph)</code>
    method on your entities within transactions. When you are done with the transaction,
    you can call the <code>$setNymph</code> method again, with the original
    Nymph instance. The <code>transactional</code> decorator will do this for
    you, but you need to do it yourself if you are using the manual transaction
    functions or the <code>transaction</code> helper function.
  </p>

  <header class="major">
    <h2>Transaction Support</h2>
  </header>

  <p>
    Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.
  </p>

  <header class="major">
    <h2>Examples</h2>
  </header>

  <p>
    Here is an example of a class that uses a transaction to delete all of its
    children when it is deleted. If any of its children cannot be deleted, then
    the transaction is rolled back, meaning none of its children get deleted.
    There is an example for each method of creating this transaction.
  </p>

  <Highlight
    language={typescript}
    code={`import {
  EntityUniqueConstraintError,
  type Nymph,
  transactional,
  transaction,
} from "@nymphjs/nymph";
import { Entity, nymphJoiProps } from '@nymphjs/nymph';
import type { AccessControlData } from '@nymphjs/tilmeld';
import { enforceTilmeld, tilmeldJoiProps } from '@nymphjs/tilmeld';
import Joi from 'joi';

export type TodoData = {
  name: string;
  done: boolean;
  parent?: Todo & TodoData;
} & AccessControlData;

export class Todo extends Entity<TodoData> {
  static ETYPE = 'todo';
  static class = 'Todo';

  protected $clientEnabledMethods = [];
  protected $allowlistData? = ['name', 'done', 'parent'];
  protected $protectedTags = [];
  protected $allowlistTags? = [];

  constructor() {
    super();

    this.$data.name = '';
    this.$data.done = false;
  }

  async $getUniques() {
    return [
      \`\${this.$data.user?.guid}:\${this.$data.parent?.guid}:\${this.$data.name}\`,
    ];
  }

  async $save() {
    const tilmeld = enforceTilmeld(this);
    if (!tilmeld.gatekeeper()) {
      // Only allow logged in users to save.
      throw new Error("You are not logged in.");
    }

    // Validate the entity's data.
    Joi.attempt(
      this.$getValidatable(),
      Joi.object().keys({
        ...nymphJoiProps,
        ...tilmeldJoiProps,

        name: Joi.string().trim(false).max(500, "utf8").required(),
        done: Joi.boolean().required(),
        parent: Joi.object().instance(Todo),
      }),
      "Invalid Todo: ",
    );

    try {
      await super.$save();
    } catch (e: any) {
      if (e instanceof EntityUniqueConstraintError) {
        throw new Error("There is already a todo for that.");
      }
      throw e;
    }
  }

  // Using the transactional decorator.
  @transactional
  async $delete() {
    // Delete this todo's children.
    const children = await this.$nymph.getEntities(
      { class: Todo, skipAc: true },
      { type: "&", ref: ["parent", this] },
    );

    for (let child of children) {
      await child.$delete();
    }

    // Delete todo.
    await super.$delete();
  }

  // Using the transaction helper function.
  async $delete() {
    return await transaction(
      this.$nymph,
      "todo-delete-" + this.guid,
      async (nymph: Nymph) => {
        // Set the instance nymph to the transactional nymph.
        this.$setNymph(nymph);

        // Delete this todo's children.
        const children = await this.$nymph.getEntities(
          { class: Todo, skipAc: true },
          { type: "&", ref: ["parent", this] },
        );

        for (let child of children) {
          await child.$delete();
        }

        // Delete todo.
        await super.$delete();
      },
      async (nymph: Nymph) => {
        // Set the instance nymph back to the original nymph.
        this.$setNymph(nymph);
      },
    );
  }

  // Manually handling a transaction.
  async $delete() {
    const transaction = "todo-delete-" + this.guid;
    const nymph = this.$nymph;
    const tnymph = await nymph.startTransaction(transaction);
    this.$setNymph(tnymph);

    try {
      // Delete this todo's children.
      const children = await tnymph.getEntities(
        { class: Todo, skipAc: true },
        { type: "&", ref: ["parent", this] },
      );

      for (let child of children) {
        await child.$delete();
      }

      // Delete todo.
      await super.$delete();

      // Commit transaction.
      await tnymph.commit(transaction);

      this.$setNymph(nymph);
    } catch (e: any) {
      await tnymph.rollback(transaction);
      this.$setNymph(nymph);
      throw e;
    }
  }
}
`}
  />

  <p>
    The <code>$setNymph</code> method is used to make sure the entity and all
    referenced entities use the transactional Nymph instance. The
    <code>tnymph</code> Nymph instance is used during the transaction. You don't
    need to worry about which instance you pass to <code>getEntities</code>,
    because it will always retrieve and use the correct instance. Factory
    methods will not, however.
  </p>
</section>

<section class="page-steps">
  <a href="{base}/user-guide/uids" class="button" style="margin: .5em;"
    >Previous: UIDs</a
  >
  <a
    href="{base}/user-guide/full-text-search"
    class="button"
    style="margin: .5em;">Next: Full Text Search</a
  >
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
