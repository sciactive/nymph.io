<svelte:head>
  <title>Query Parser - Packages - Nymph.js</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Query Parser</h1>
  </header>

  <p>
    The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.
  </p>

  <header class="major">
    <h2>Installation</h2>
  </header>

  <Highlight
    language={bash}
    code={`npm install --save @nymphjs/query-parser`}
  />

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>
    The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for <em>most</em> features of a
    Nymph query to be expressed in a text input.
  </p>

  <Highlight
    language={typescript}
    code={`import queryParser from '@nymphjs/query-parser';

import BlogPost from './BlogPost';
import Category from './Category';

async function doQuery() {
  const [options, ...selectors] = queryParser({
    query:
      'limit:4 foobar (| [archived] mdate<"2 weeks ago") category<{cat Tech}>',
    entityClass: BlogPost,
    defaultFields: ['title', 'body'],
    qrefMap: {
      cat: {
        class: Category,
        defaultFields: ['name'],
      },
    },
  });
  /*
  Options will be
    {
      class: BlogPost,
      limit: 4
    }

  And selectors will be (equivalent to)
    [
      {
        type: "|",
        truthy: [
          "archived"
        ],
        lt: [
          ["mdate", null, "2 weeks ago"]
        ]
      },
      {
        type: "&",
        qref: [
          "category",
          [
            {
              class: Category
            },
            {
              type: "|",
              ilike: ["name", "%Tech%"]
            }
          ]
        ]
      },
      {
        type: "|",
        ilike: [
          ["title", "%foobar%"],
          ["body", "%foobar%"]
        ]
      }
    ]
  */
  const entities = await nymph.getEntities(options, ...selectors);
}`}
  />

  <header class="major">
    <h2>Usage</h2>
  </header>

  <p>You can set limit, offset, and reverse like this.</p>

  <ul>
    <li><code>limit:number</code></li>
    <li><code>offset:number</code></li>
    <li>
      <code>reverse:true</code>, <code>reverse:false</code>,
      <code>reverse:1</code>, or <code>reverse:0</code>
    </li>
  </ul>

  <p>
    These must appear in the top level of the query (outside of any
    parentheses).
  </p>

  <header class="major">
    <h2>Clauses</h2>
  </header>

  <p>These are the available clauses, and their syntax.</p>

  <header>
    <h3>equal and !equal</h3>
  </header>

  <p>Check for string or JSON representation equality.</p>

  <ul>
    <li><code>name=string</code> or <code>name!=string</code></li>
    <li>
      <code>name="string value"</code> or <code>name!="string value"</code>
      <ul>
        <li>
          (Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)
        </li>
      </ul>
    </li>
    <li>
      <code>name=JSON</code> or <code>name!=JSON</code>
      <ul>
        <li>
          (Match a JSON encoded value (like <code>true</code>, <code>1</code>,
          <code>[1,2,3]</code>, or <code>{'{"prop":"val"}'}</code>).)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>guid and !guid</h3>
  </header>

  <p>Check for entity GUID.</p>

  <ul>
    <li><code>{'{guid}'}</code> or <code>{'{!guid}'}</code></li>
  </ul>

  <header>
    <h3>tag and !tag</h3>
  </header>

  <p>Check for a tag.</p>

  <ul>
    <li><code>&lt;tag&gt;</code> or <code>&lt;!tag&gt;</code></li>
  </ul>

  <header>
    <h3>truthy and !truthy</h3>
  </header>

  <p>Check for truthiness.</p>

  <ul>
    <li><code>[name]</code> or <code>[!name]</code></li>
  </ul>

  <header>
    <h3>ref and !ref</h3>
  </header>

  <p>Check for a reference to another entity.</p>

  <ul>
    <li><code>{'name<{guid}>'}</code> or <code>{'name!<{guid}>'}</code></li>
  </ul>

  <header>
    <h3>qref and !qref</h3>
  </header>

  <p>Check for a reference to another entity using a query.</p>

  <ul>
    <li>
      <code>{'name<{refclassname inner query}>'}</code> or
      <code>{'name!<{refclassname inner query}>'}</code>
      <ul>
        <li>(Esacpe curly brackets with a leading backslash.)</li>
        <li>
          (Requires a map of refclassname to their actual class and default
          fields.)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>contain and !contain</h3>
  </header>

  <p>
    Check for a JSON representation appearing within the JSON representation of
    the named property.
  </p>

  <ul>
    <li>
      <code>{'name<value>'}</code> or
      <code>{'name!<value>'}</code>
      <ul>
        <li>
          (Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)
        </li>
      </ul>
    </li>
    <li>
      <code>{'name<JSON>'}</code> or
      <code>{'name!<JSON>'}</code>
      <ul>
        <li>
          (Search for a JSON encoded value (like <code>true</code>,
          <code>1</code>,
          <code>[1,2,3]</code>, or <code>{'{"prop":"val"}'}</code>).)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>match and !match</h3>
  </header>

  <p>Check for POSIX regex match.</p>

  <ul>
    <li><code>name~/pattern/</code> or <code>name!~/pattern/</code></li>
  </ul>

  <header>
    <h3>imatch and !imatch</h3>
  </header>

  <p>Check for case insensitive POSIX regex match.</p>

  <ul>
    <li><code>name~/pattern/i</code> or <code>name!~/pattern/i</code></li>
  </ul>

  <header>
    <h3>like and !like</h3>
  </header>

  <p>
    Check for pattern match where _ is single char wildcard and % is any length
    wildcard.
  </p>

  <ul>
    <li><code>name~pattern</code> or <code>name!~pattern</code></li>
    <li>
      <code>name~"pattern"</code> or <code>name!~"pattern"</code>
      <ul><li>(Use this if you have a space in your pattern.)</li></ul>
    </li>
  </ul>

  <header>
    <h3>ilike and !ilike</h3>
  </header>

  <p>
    Check for case insensitive pattern match where _ is single char wildcard and
    % is any length wildcard.
  </p>

  <ul>
    <li><code>name~"pattern"i</code> or <code>name!~"pattern"i</code></li>
  </ul>

  <header>
    <h3>gt</h3>
  </header>

  <p>Check a prop's value is greater than a given value.</p>

  <ul>
    <li><code>name&gt;number</code></li>
    <li>
      <code>name&gt;relative</code>
      <ul>
        <li>
          (A single relative time value like <code>now</code> or
          <code>yesterday</code>.)
        </li>
      </ul>
    </li>
    <li>
      <code>name&gt;"relative time value"</code>
      <ul>
        <li>
          (Use this for a time value with a space like <code
            >"two days from now"</code
          >,
          <code>"last thursday"</code>, <code>"+4 weeks"</code>, or
          <code>"5 minutes ago"</code>.)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>gte</h3>
  </header>

  <p>Check a prop's value is greater than or equal to a given value.</p>

  <ul>
    <li><code>name&gt;=number</code></li>
    <li>
      <code>name&gt;=relative</code>
      <ul>
        <li>
          (A single relative time value like <code>now</code> or
          <code>yesterday</code>.)
        </li>
      </ul>
    </li>
    <li>
      <code>name&gt;="relative time value"</code>
      <ul>
        <li>
          (Use this for a time value with a space like <code
            >"two days from now"</code
          >,
          <code>"last thursday"</code>, <code>"+4 weeks"</code>, or
          <code>"5 minutes ago"</code>.)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>lt</h3>
  </header>

  <p>Check a prop's value is less than a given value.</p>

  <ul>
    <li><code>name&lt;number</code></li>
    <li>
      <code>name&lt;relative</code>
      <ul>
        <li>
          (A single relative time value like <code>now</code> or
          <code>yesterday</code>.)
        </li>
      </ul>
    </li>
    <li>
      <code>name&lt;"relative time value"</code>
      <ul>
        <li>
          (Use this for a time value with a space like <code
            >"two days from now"</code
          >,
          <code>"last thursday"</code>, <code>"+4 weeks"</code>, or
          <code>"5 minutes ago"</code>.)
        </li>
      </ul>
    </li>
  </ul>

  <header>
    <h3>lte</h3>
  </header>

  <p>Check a prop's value is less than or equal to a given value.</p>

  <ul>
    <li><code>name&lt;=number</code></li>
    <li>
      <code>name&lt;=relative</code>
      <ul>
        <li>
          (A single relative time value like <code>now</code> or
          <code>yesterday</code>.)
        </li>
      </ul>
    </li>
    <li>
      <code>name&lt;="relative time value"</code>
      <ul>
        <li>
          (Use this for a time value with a space like <code
            >"two days from now"</code
          >,
          <code>"last thursday"</code>, <code>"+4 weeks"</code>, or
          <code>"5 minutes ago"</code>.)
        </li>
      </ul>
    </li>
  </ul>

  <header class="major">
    <h2>Selectors</h2>
  </header>

  <p>
    You can specify nested selectors with different types using pairs of
    parentheses. The first character (or two) inside the parentheses can be a
    type: "&", "!&", "|", "!|", or "!" (the same as "!&").
  </p>

  <p>Here are some examples of nested selectors.</p>

  <pre>Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities&lt;"subscriber"&gt;) abilities&lt;"lifeline-subscriber"&gt;)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate&gt;"6 months ago")</pre>

  <header class="major">
    <h2>Default Fields</h2>
  </header>

  <p>
    Anything contained in the query (including in selector parentheses) that
    doesn't match any of the options or clause syntaxes listed above (bare query
    parts) will be added (at the appropriate nesting level) to a selector with
    an <code>"|"</code> type in an <code>ilike</code> clause surrounded by "%"
    characters for each field passed in to the <code>defaultFields</code> argument.
  </p>

  <header class="major">
    <h2>Bare Query Handler</h2>
  </header>

  <p>
    You can also supply a function in the option <code>bareHandler</code> that
    will handle bare query parts instead of the "Default Fields" behavior
    described above. It will receive three arguments, the query parts, the
    entity class, and the default fields entry for that class. It should return
    a partial selector that will replace or extend the <code>"|"</code> selector.
  </p>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import bash from 'svelte-highlight/src/languages/bash';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';
</script>
