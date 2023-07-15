import{s as M,a as g,f as u,l as k,x as j,d as n,c as v,g as m,r as q,h as w,m as I,j as c,k as E,i as p,u as l,v as _}from"../chunks/scheduler.d7e45cc8.js";import{S as A,i as P}from"../chunks/index.77720afb.js";import{b as S}from"../chunks/paths.dbb47c61.js";function L(C){let i,o,N=`<header class="major"><h1 style="font-size: 3em;">Transactions</h1></header> <p>In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database&#39;s storage, and no PubSub subscribers will be
    notified, until the highest level transaction is committed. When a nested
    transaction is rolled back, the database will be in the state where the
    transaction above it started that nested transaction.</p> <p>When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you&#39;re doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the &quot;nymph-&quot; prefix, so don&#39;t use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.</p> <p><code>Nymph</code> has the following methods for managing transactions.</p> <ul><li><code>startTransaction</code> - Start a named transaction.</li> <li><code>commit</code> - Commit a named transaction.</li> <li><code>rollback</code> - Rollback a named transaction.</li> <li><code>inTransaction</code> - Check if Nymph is currently running within a transaction.</li></ul> <p><code>startTransaction</code> will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.</p> <p>When you start a new transaction, entities retrieved from that transaction&#39;s
    Nymph instance will have that instance within their static <code>nymph</code>
    property and instance <code>$nymph</code> property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.</p> <p>Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn&#39;t support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it&#39;s highly recommended to use a
    configuration that supports transactions.</p>`,h,e,a,y,f,s,b;return{c(){i=g(),o=u("section"),o.innerHTML=N,h=g(),e=u("section"),a=u("a"),y=k("Previous: UIDs"),f=g(),s=u("a"),b=k("Next: Export and Import"),this.h()},l(t){j("svelte-opfhcg",document.head).forEach(n),i=v(t),o=m(t,"SECTION",{"data-svelte-h":!0}),q(o)!=="svelte-1yumfph"&&(o.innerHTML=N),h=v(t),e=m(t,"SECTION",{class:!0});var d=w(e);a=m(d,"A",{href:!0,class:!0,style:!0});var x=w(a);y=I(x,"Previous: UIDs"),x.forEach(n),f=v(d),s=m(d,"A",{href:!0,class:!0,style:!0});var T=w(s);b=I(T,"Next: Export and Import"),T.forEach(n),d.forEach(n),this.h()},h(){document.title="Transactions - User Guide - Nymph.js",c(a,"href",S+"/user-guide/uids"),c(a,"class","button"),E(a,"margin",".5em"),c(s,"href",S+"/user-guide/export-and-import"),c(s,"class","button"),E(s,"margin",".5em"),c(e,"class","page-steps")},m(t,r){p(t,i,r),p(t,o,r),p(t,h,r),p(t,e,r),l(e,a),l(a,y),l(e,f),l(e,s),l(s,b)},p:_,i:_,o:_,d(t){t&&(n(i),n(o),n(h),n(e))}}}class H extends A{constructor(i){super(),P(this,i,null,L,M,{})}}export{H as component};
