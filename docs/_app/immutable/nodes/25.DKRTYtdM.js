import{h as g,a as i,t as w,c as $}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{f as r,$ as b,s as e,c,n as N,a as h}from"../chunks/xPuFI3q7.js";import{h as T,g as v}from"../chunks/C0NHSKHS.js";import{s as d}from"../chunks/Dx4IbXf0.js";import{t as E}from"../chunks/Ce9AoNbY.js";import{b as l}from"../chunks/DnMb0p-7.js";import{H as k}from"../chunks/9N_cuTOb.js";var x=w(`<section><header class="major"><h1 style="font-size: 3em;">Transactions</h1></header> <p>In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.</p> <p>When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.</p> <p><code>Nymph</code> has the following methods for managing transactions.</p> <ul><li><code>startTransaction</code> - Start a named transaction.</li> <li><code>commit</code> - Commit a named transaction.</li> <li><code>rollback</code> - Rollback a named transaction.</li> <li><code>inTransaction</code> - Check if Nymph is currently running within a transaction.</li></ul> <p><code>startTransaction</code> will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.</p> <p>The transaction instance of Nymph has its own set of classes. You can use
    its <code>getEntityClass</code> method to get the proper classes for that instance
    of Nymph.</p> <p>When you start a new transaction, entities retrieved from that transaction's
    Nymph instance will have that instance within their static <code>nymph</code> property and instance <code>$nymph</code> property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.</p> <p>Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.</p> <p>Here is an example of a class that uses a transaction to delete all of its
    children when it is deleted. If any of its children cannot be deleted, then
    the transaction is rolled back, meaning none of its children get deleted.</p> <!> <p>The <code>$setNymph</code> method is used to make sure the entity and all
    referenced entities use the transactional Nymph instance. The <code>tnymph</code> Nymph instance is used during the transaction, and the
    children are retrieved using the proper class with <code>tnymph.getEntityClass(Todo)</code>.</p></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: UIDs</a> <a class="button" style="margin: .5em;">Next: Export and Import</a></section>`,1);function A(p){var a=x();g(u=>{var o=$();b.title="Transactions - User Guide - Nymph.js";var f=r(o);T(f,()=>v,!1,!1),i(u,o)});var t=r(a),m=e(c(t),20);k(m,{language:E,code:`import { EntityUniqueConstraintError, type Nymph } from '@nymphjs/nymph';
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

  /**
   * Set a new Nymph instance on this and all contained entities.
   */
  $setNymph(nymph: Nymph) {
    this.$nymph = nymph;
    if (!this.$asleep()) {
      if (this.$data.user) {
        this.$data.user.$setNymph(nymph);
      }
      if (this.$data.group) {
        this.$data.group.$setNymph(nymph);
      }
      if (this.$data.parent) {
        this.$data.parent.$setNymph(nymph);
      }
    }
  }

  async $save() {
    const tilmeld = enforceTilmeld(this);
    if (!tilmeld.gatekeeper()) {
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
        parent: Joi.object().instance(Todo),
      }),
      'Invalid Todo: ',
    );

    try {
      return await super.$save();
    } catch (e: any) {
      if (e instanceof EntityUniqueConstraintError) {
        throw new Error('There is already a todo for that.');
      }
      throw e;
    }
  }

  async $delete() {
    const transaction = 'todo-delete-' + this.guid;
    const nymph = this.$nymph;
    const tnymph = await nymph.startTransaction(transaction);
    this.$setNymph(tnymph);

    try {
      // Delete this todo's children.
      const children = await tnymph.getEntities(
        {
          class: tnymph.getEntityClass(Todo),
          skipAc: true,
        },
        {
          type: '&',
          ref: ['parent', this],
        },
      );

      for (let child of children) {
        if (!(await child.$delete())) {
          throw new Error("Couldn't delete child todo.");
        }
      }

      // Delete todo.
      let success = await super.$delete();
      if (success) {
        success = await tnymph.commit(transaction);
      } else {
        await tnymph.rollback(transaction);
      }
      this.$setNymph(nymph);
      return success;
    } catch (e: any) {
      await tnymph.rollback(transaction);
      this.$setNymph(nymph);
      throw e;
    }
  }
}
`}),N(2),h(t);var n=e(t,2),s=c(n);d(s,"href",`${l??""}/user-guide/uids`);var y=e(s,2);d(y,"href",`${l??""}/user-guide/export-and-import`),h(n),i(p,a)}export{A as component};
