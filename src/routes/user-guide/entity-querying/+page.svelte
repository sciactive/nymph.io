<svelte:head>
  <title>Entity Querying - User Guide - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Entity Querying</h1>
  </header>

  <p>The real power behind Nymph is the entity querying system.</p>

  <header class="major">
    <h2>Factory Method</h2>
  </header>

  <p>
    The <code>Entity</code> class's factory method can take a GUID as an
    argument. You can provide other factory functions that can take things as
    well. For example, the <code>User</code> class in Tilmeld has a
    <code>factoryUsername</code> method that takes a username. The method will return
    a new entity if the queried entity is not found. You can determine if it was
    found by checking that its GUID is not null.
  </p>

  <Highlight
    language={typescript}
    code={`// FoobarBaz expects a GUID.
const baz = await FoobarBaz.factory(guid);
if (baz.guid == null) {
  console.error("Can't find the Foobar Baz!");
}

// Tilmeld's User class expects a GUID or a username.
const cronUser = await User.factoryUsername('cron');
if (cronUser.guid == null) {
  console.error("Can't find the cron user!");
}`}
  />

  <header class="major">
    <h2>Nymph's Query Language</h2>
  </header>

  <p>
    The powerful way of querying entities is Nymph's <code>getEntities</code>
    and <code>getEntity</code> methods. The first argument is an Options object.
  </p>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>class</td>
          <td>typeof Entity</td>
          <td>Entity</td>
          <td
            >The class used to create each entity. It must have a <code
              >factory</code
            > static method that returns a new instance.</td
          >
        </tr>
        <tr>
          <td>limit</td>
          <td>number</td>
          <td>undefined</td>
          <td
            >The limit of entities to be returned. Not needed when using <code
              >getEntity</code
            >, as it always returns only one.</td
          >
        </tr>
        <tr>
          <td>offset</td>
          <td>number</td>
          <td>0</td>
          <td
            >The offset from the first matching entity, in order, to start
            retrieving.</td
          >
        </tr>
        <tr>
          <td>reverse</td>
          <td>boolean</td>
          <td>false</td>
          <td
            >If true, entities will be retrieved from newest to oldest/largest
            to smallest (with regard to <code>sort</code>).</td
          >
        </tr>
        <tr>
          <td>sort</td>
          <td>'cdate' | 'mdate' | string</td>
          <td>'cdate'</td>
          <td
            >How to sort the entities. Should be "cdate", "mdate", or the name
            of a property.</td
          >
        </tr>
        <tr>
          <td>return</td>
          <td>'entity' | 'guid' | 'count'</td>
          <td>'entity'</td>
          <td
            >What to return, the entities with their data, just the GUIDs, or
            just a count.</td
          >
        </tr>
        <tr>
          <td>source</td>
          <td>string</td>
          <td>undefined</td>
          <td
            >Will be 'client' if the query came from a REST request or the
            PubSub server. (Mainly used in Tilmeld for access control.)</td
          >
        </tr>
        <tr>
          <td>skipCache</td>
          <td>boolean</td>
          <td>false</td>
          <td
            >If true, Nymph will skip the cache and retrieve the entity from the
            DB.</td
          >
        </tr>
        <tr>
          <td>skipAc</td>
          <td>boolean</td>
          <td>false</td>
          <td
            >If true, Tilmeld will not filter returned entities according to
            access controls. (If Tilmeld is installed.) (This is always set to
            false by the REST endpoint and PubSub server.)</td
          >
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Every argument following the Options is a Selector object. They contain
    clauses and a type. An entity must match each selector to be returned. There
    are four selector types, and they are defined on the <code>type</code> property.
  </p>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&amp;</td>
          <td>And</td>
          <td>All clauses in the selector must match.</td>
        </tr>
        <tr>
          <td>|</td>
          <td>Or</td>
          <td>At least one clause in the selector must match.</td>
        </tr>
        <tr>
          <td>!&amp;</td>
          <td>Not And</td>
          <td>All clauses in the selector must not match.</td>
        </tr>
        <tr>
          <td>!|</td>
          <td>Not Or</td>
          <td>At least one clause in the selector must not match.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    The other properties of the Selector are clauses. Clauses use the form <code
      >name: value</code
    >, or
    <code>name: [value1, value2, ...]</code>. They can be negated by prepending
    a bang (!) to the name, like <code>'!name': value</code>. A clause that has
    multiple values is considered as multiple clauses in terms of matching for
    "or" selectors.
  </p>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Example</th>
          <th>Works On</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>guid</td>
          <td>The entity's GUID is equal.</td>
          <td><code>{"{type: '&', guid: '790229ae527f1511b3120b71'}"}</code></td
          >
          <td><code>{"entity.guid = '790229ae527f1511b3120b71'"}</code></td>
        </tr>
        <tr>
          <td>tag</td>
          <td>The entity has the tag.</td>
          <td><code>{"{type: '&', tag: 'foobar'}"}</code></td>
          <td><code>{"entity.$addTag('foobar')"}</code></td>
        </tr>
        <tr>
          <td>defined</td>
          <td>The named property is not undefined.</td>
          <td><code>{"{type: '&', defined: 'foo'}"}</code></td>
          <td><code>{'entity.foo = 0'}</code></td>
        </tr>
        <tr>
          <td>truthy</td>
          <td>The named property evaluates to true.</td>
          <td><code>{"{type: '&', truthy: 'foo'}"}</code></td>
          <td><code>{'entity.foo = 1'}</code></td>
        </tr>
        <tr>
          <td>equal</td>
          <td
            >The named property is defined and equals the value (their JSON
            strings are identical).</td
          >
          <td><code>{"{type: '&', equal: ['foo', 0]}"}</code></td>
          <td><code>{'entity.foo = 0'}</code></td>
        </tr>
        <tr>
          <td>contain</td>
          <td
            >The named property contains the value (its JSON string is found
            within the property's JSON string).</td
          >
          <td><code>{"{type: '&', array: ['foo', 'bar']}"}</code></td>
          <td><code>{"entity.foo = ['bar', 'baz']"}</code></td>
        </tr>
        <tr>
          <td>match</td>
          <td
            >The named property matches. Uses POSIX RegExp. Case sensitive. Must
            *not* be surrounded by any delimiters.</td
          >
          <td><code>{"{type: '&', match: ['foo', 'bar.*z']}"}</code></td>
          <td><code>{"entity.foo = 'foobarbaz'"}</code></td>
        </tr>
        <tr>
          <td>imatch</td>
          <td
            >The named property matches. Uses POSIX RegExp. Case insensitive.
            Must *not* be surrounded by any delimiters.</td
          >
          <td><code>{"{type: '&', imatch: ['foo', 'BaR.*Z']}"}</code></td>
          <td><code>{"entity.foo = 'foobarbaz'"}</code></td>
        </tr>
        <tr>
          <td>like</td>
          <td
            >The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case sensitive.</td
          >
          <td><code>{"{type: '&', like: ['foo', 'f%bar_az']}"}</code></td>
          <td><code>{"entity.foo = 'foobarbaz'"}</code></td>
        </tr>
        <tr>
          <td>ilike</td>
          <td
            >The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case insensitive.</td
          >
          <td><code>{"{type: '&', ilike: ['foo', 'F%bAr_aZ']}"}</code></td>
          <td><code>{"entity.foo = 'foobarbaz'"}</code></td>
        </tr>
        <tr>
          <td>gt</td>
          <td>The named property is greater than the value.</td>
          <td><code>{"{type: '&', gt: ['foo', 5]}"}</code></td>
          <td><code>{'entity.foo = 6'}</code></td>
        </tr>
        <tr>
          <td>gte</td>
          <td>The named property is greater than or equal to the value.</td>
          <td><code>{"{type: '&', gte: ['foo', 6]}"}</code></td>
          <td><code>{'entity.foo = 6'}</code></td>
        </tr>
        <tr>
          <td>lt</td>
          <td>The named property is less than the value.</td>
          <td><code>{"{type: '&', lt: ['foo', 7]}"}</code></td>
          <td><code>{'entity.foo = 6'}</code></td>
        </tr>
        <tr>
          <td>lte</td>
          <td>The named property is less than or equal to the value.</td>
          <td><code>{"{type: '&', lte: ['foo', 6]}"}</code></td>
          <td><code>{'entity.foo = 6'}</code></td>
        </tr>
        <tr>
          <td>ref</td>
          <td>The named property is the entity or contains the entity.</td>
          <td
            ><code
              >{"{type: '&', ref: ['foo', '790229ae527f1511b3120b71']}"}</code
            ></td
          >
          <td
            ><code
              >{"entity.foo = await Entity.factory('790229ae527f1511b3120b71')"}</code
            ></td
          >
        </tr>
        <tr>
          <td>qref</td>
          <td
            >The named property is an entity that matches the query or contains
            an entity that matches the query.</td
          >
          <td
            ><code
              >{"{type: '&', qref: ['foo', [{class: Entity}, {type: '&', equal: ['name', 'Foobar']}]]}"}</code
            ></td
          >
          <td
            ><code
              >{"entity.foo = await nymph.getEntity({class: Entity}, {type: '&', equal: ['name', 'Foobar']})"}</code
            ></td
          >
        </tr>
        <tr>
          <td>selector</td>
          <td
            >A selector. (Keep in mind, you can also use an array of these, just
            like any other clause.)</td
          >
          <td
            ><code
              >{"{type: '&', selector: {type: '|', tag: ['foo', 'bar']}}"}</code
            ></td
          >
          <td><code>{"entity.$addTag('bar')"}</code></td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    The clauses "equal", "contain", "gt", "gte", "lt", and "lte" can also accept
    a third element. If value is null and the third element is a string, the
    third element will be used with <a
      href="https://locutus.io/php/datetime/strtotime/"
      target="_blank"
      rel="noreferrer">Locutus' strtotime function</a
    > to set the value to a relative timestamp. For example, the following selector
    will look for all entities that were created in the last day.
  </p>

  <Highlight
    language={typescript}
    code={`{
  type: '&',
  gte: ['cdate', null, '-1 day']
}`}
  />

  <header class="major">
    <h2>Querying Examples</h2>
  </header>

  <p>
    So putting it all together, you can specify the options and selectors to
    find the exact entities you want.
  </p>

  <p>Get the first FoobarBaz entity.</p>

  <Highlight
    language={typescript}
    code={`const entity = await nymph.getEntity({ class: FoobarBaz });`}
  />

  <p>Get the latest FoobarBaz entity.</p>

  <Highlight
    language={typescript}
    code={`const entity = await nymph.getEntity({
  class: FoobarBaz,
  reverse: true
});`}
  />

  <p>Get all baz tagged entities, using the FoobarBaz class.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  }
);`}
  />

  <p>Get the five last created bar and baz tagged entities.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`}
  />

  <p>Get the five last modified bar and baz tagged entities.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5,
    sort: 'mdate'
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`}
  />

  <p>Get baz tagged entities with names.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    defined: 'name'
  }
);`}
  />

  <p>Get baz tagged entities without names.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    '!defined': 'name'
  }
);`}
  />

  <p>
    Get baz tagged entities without names or bar tagged entities with names.
  </p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '|',
    selector: [
      {
        type: '&',
        tag: 'baz',
        '!defined': 'name'
      },
      {
        type: '&',
        tag: 'bar',
        defined: 'name'
      }
    ]
  }
);`}
  />

  <p>Get baz tagged entities with either first names or last names.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  },
  {
    type: '|',
    defined: ['firstName', 'lastName']
  }
);`}
  />

  <p>Get baz tagged entities created in the last day.</p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    gt: ['cdate', null, '-1 day']
  }
);`}
  />

  <p>
    Get baz tagged entities with names, who either make not greater than 8
    dollars pay or are under 22.
  </p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  { type: '&', tag: 'baz', defined: 'name' },
  {
    type: '!|', // at least one must be false
    gte: ['age', 22],
    gt: ['pay', 8]
  }
);`}
  />

  <p>
    Get baz tagged entities named Clark, James, Chris, Christopher, Jake, or
    Jacob.
  </p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  { class: FoobarBaz },
  { type: '&', tag: 'baz' },
  {
    type: '|',
    equal: [
      ['name', 'Clark'],
      ['name', 'James']
    ],
    match: [
      ['name', 'Chris(topher)?'],
      ['name', 'Ja(ke|cob)']
    ]
  }
);`}
  />

  <p>
    Get baz tagged entities that belong to any user named "John" or "James".
  </p>

  <Highlight
    language={typescript}
    code={`const entities = await nymph.getEntities(
  { class: FoobarBaz },
  {
    type: '&',
    tag: 'baz',
    qref: [
      'user',
      [
        { class: User },
        {
          type: '|',
          like: [
            ['name', 'John %'],
            ['name', 'James %']
          ]
        }
      ]
    ]
  }
);`}
  />
</section>

<section class="page-steps">
  <a
    href="{base}/user-guide/creating-entities"
    class="button"
    style="margin: .5em;">Previous: Creating Entities</a
  >
  <a
    href="{base}/user-guide/subscribing-to-queries"
    class="button"
    style="margin: .5em;">Next: Subscribing to Queries</a
  >
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  import { base } from '$app/paths';
</script>
