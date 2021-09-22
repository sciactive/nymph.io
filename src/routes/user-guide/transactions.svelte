<svelte:head>
  <title>Transactions - User Guide - Nymph</title>
</svelte:head>

<section>
  <header class="major">
    <h1 style="font-size: 3em;">Transactions</h1>
  </header>

  <p>
    In Node.js, Nymph supports nested transactions. Nothing will be written to
    the database's permanent storage until the highest level transaction is
    committed. When you start a transaction, you give it a name, then you can
    commit or roll back that transaction, by name. This means if you're doing
    transactions recursively, you should use a counter in your name. Nymph uses
    internal transactions that start with the "nymph-" prefix. You should be
    sure to commit or rollback transactions in the reverse order that they were
    started, or you might run into trouble.
  </p>

  <p><code>Nymph</code> has the following methods for managing transactions.</p>

  <ul>
    <li><code>startTransaction</code> - Start a named transaction.</li>
    <li><code>commit</code> - Commit a named transaction.</li>
    <li><code>rollback</code> - Rollback a named transaction.</li>
    <li>
      <code>inTransaction</code> - Check if Nymph is currently running within a transaction.
    </li>
  </ul>

  <p>
    <code>startTransaction</code> will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.
  </p>

  <p>
    Not all databases that Nymph supports (namely, MySQL with an engine that
    doesn't support transactions, like the MyISAM engine) can use transactions.
    To ensure data consistency, it's highly recommended to use a configuration
    that supports transactions.
  </p>
</section>

<section>
  <div class="row">
    <div class="col-6 col-12-small">
      <a href="{base}/user-guide/uids" class="button" style="margin: .5em;"
        >Previous: UIDs</a
      >
    </div>
    <div class="col-6 col-12-small" style="text-align: end;">
      <a
        href="{base}/user-guide/exporting-and-importing-entities"
        class="button"
        style="margin: .5em;">Next: Exp. and Imp. Entities</a
      >
    </div>
  </div>
</section>

<script lang="ts">
  import { base } from '$app/paths';
</script>
