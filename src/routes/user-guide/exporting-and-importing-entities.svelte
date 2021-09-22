<svelte:head>
  <title>Exporting and Importing Entities - User Guide - Nymph</title>
  {@html github}
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Exporting and Importing Entities</h1>
  </header>

  <p>
    Nymph provides a method for exporting and importing entities, regardless of
    which driver is currently in use. This allows backup, restore, duplication,
    or transferring an entire database of entities, even with different database
    drivers.
  </p>

  <p>Nymph has the following methods for exporting and importing entities.</p>

  <ul>
    <li><code>export</code> - Export entities to a file.</li>
    <li>
      <code>exportPrint</code> - Export entities to the client as a downloadable
      file.
    </li>
    <li><code>import</code> - Import entities from a file.</li>
  </ul>

  <Highlight
    language={typescript}
    code={`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}
  />

  <p>
    The format of an entity export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.
  </p>

  <Highlight
    code={`#nex2
# The above line must be the first thing in the file.
# Comments begin with #
   # And can have white space before them.
# This defines a UID.
<name/of/uid>[5]
<another uid>[8000]
# For UIDs, the name is in angle brackets (<>) and the value follows
# in square brackets ([]).
# This starts a new entity.
{1234abcd}<etype>[tag,list,with,commas]
# For entities, the GUID is in curly brackets ({}), then the etype in
#  angle brackets, then the comma separated tag list follows in square
#  brackets ([]).
# Properties are stored like this:
# propname=JSON.stringify(value)
    abilities=["system/all"]
    groups=[]
    inheritAbilities=false
    name="admin"
# White space before/after "=" and at beginning/end of line is ignored.
        username  =     "admin"
{2}<etype>[tag,list]
    another="This is another entity."
    newline="\\n"`}
  />
</section>

<section>
  <div class="row">
    <div class="col-6 col-12-small">
      <a
        href="{base}/user-guide/transactions"
        class="button"
        style="margin: .5em;">Previous: Transactions</a
      >
    </div>
    <div class="col-6 col-12-small" style="text-align: end;" />
  </div>
</section>

<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/src/languages/typescript';
  import github from 'svelte-highlight/src/styles/github';

  import { base } from '$app/paths';
</script>
