import{C as ee,G as te,H as ne,I as re,K as e,T as t,W as n,b as ie,g as ae,it as r,p as i,w as oe,z as se}from"../chunks/DZDv-zr6.js";import{c as ce}from"../chunks/BEISqkDj.js";import"../chunks/f23f8hhM.js";import"../chunks/C0cHpkde.js";import{t as a}from"../chunks/DUAD-eIe.js";import{t as o}from"../chunks/DIXNzCvi.js";import{t as le}from"../chunks/jqiW6npt.js";var ue=t(`<section><header class="major"><h1 style="font-size: 3em;">Entity Querying</h1></header> <p>The real power behind Nymph is the entity querying system.</p> <header class="major"><h2>Factory Method</h2></header> <p>The <code>Entity</code> class' factory method can take a GUID as an
    argument. You can provide other factory functions that can take things as
    well. For example, the <code>User</code> class in Tilmeld has a <code>factoryUsername</code> method that takes a username. The method will return
    a new entity if the queried entity is not found. You can determine if it was
    found by checking that its GUID is not null.</p> <!> <header class="major"><h2>Nymph's Query Language</h2></header> <p>The powerful way of querying entities is Nymph's <code>getEntities</code> and <code>getEntity</code> methods. The first argument is an Options object.</p> <div class="table-wrapper"><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>typeof Entity</td><td>Entity</td><td>The Entity class to query.</td></tr><tr><td>limit</td><td>number</td><td>undefined</td><td>The limit of entities to be returned. Not needed when using <code>getEntity</code>, as it always returns only one.</td></tr><tr><td>offset</td><td>number</td><td>0</td><td>The offset from the first matching entity, in order, to start
            retrieving.</td></tr><tr><td>reverse</td><td>boolean</td><td>false</td><td>If true, entities will be retrieved from newest to oldest/largest
            to smallest (with regard to <code>sort</code>).</td></tr><tr><td>sort</td><td>'cdate' | 'mdate' | string</td><td>'cdate'</td><td>How to sort the entities. Should be "cdate", "mdate", the name of a
            property, or null.</td></tr><tr><td>return</td><td>'entity' | 'object' | 'guid' | 'count'</td><td>'entity'</td><td>What to return, the entities with their data, just their data, just
            the GUIDs, or just a count.</td></tr><tr><td>source</td><td>string</td><td>undefined</td><td>Will be 'client' if the query came from a REST request or the
            PubSub server. (Mainly used in Tilmeld for access control.)</td></tr><tr><td>skipCache</td><td>boolean</td><td>false</td><td>If true, Nymph will skip the cache and retrieve the entity from the
            DB.</td></tr><tr><td>skipAc</td><td>boolean</td><td>false</td><td>If true, Tilmeld will not filter returned entities according to
            access controls. (If Tilmeld is installed.) (This is always set to
            false by the REST endpoint and PubSub server.)</td></tr></tbody></table></div> <p>Every argument following the Options is a Selector object. They contain
    clauses and a type. An entity must match each selector to be returned. There
    are four selector types, and they are defined on the <code>type</code> property.</p> <div class="table-wrapper"><table><thead><tr><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>And</td><td>All clauses in the selector must match.</td></tr><tr><td>|</td><td>Or</td><td>At least one clause in the selector must match.</td></tr><tr><td>!&amp;</td><td>Not And</td><td>All clauses in the selector must not match.</td></tr><tr><td>!|</td><td>Not Or</td><td>At least one clause in the selector must not match.</td></tr></tbody></table></div> <p>The other properties of the Selector are clauses. Clauses use the form <code>name: value</code>, or <code>name: [value1, value2, ...]</code>. They can be negated by prepending
    a bang (!) to the name, like <code>'!name': value</code>. A clause that has
    multiple values is considered as multiple clauses in terms of matching for
    "or" selectors.</p> <div class="table-wrapper"><table><thead><tr><th>Property</th><th>Description</th><th>Example</th><th>Works On</th></tr></thead><tbody><tr><td>guid</td><td>The entity's GUID is equal.</td><td><code></code></td><td><code></code></td></tr><tr><td>tag</td><td>The entity has the tag.</td><td><code></code></td><td><code></code></td></tr><tr><td>defined</td><td>The named property is not undefined.</td><td><code></code></td><td><code></code></td></tr><tr><td>truthy</td><td>The named property evaluates to true.</td><td><code></code></td><td><code></code></td></tr><tr><td>equal</td><td>The named property is defined and equals the value (their JSON
            strings are identical).</td><td><code></code></td><td><code></code></td></tr><tr><td>contain</td><td>The named property is an array that contains the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>search</td><td>The named property matches the query. Single quotes find sequential
            terms. Double quotes find exact terms. "or" is the or operator. "-"
            before a term is the negation operator. Stop words and punctuation
            are stripped. Case insensitive.</td><td><code></code></td><td><code></code></td></tr><tr><td>match</td><td>The named property matches. Uses POSIX RegExp. Case sensitive. Must
            *not* be surrounded by any delimiters.</td><td><code></code></td><td><code></code></td></tr><tr><td>imatch</td><td>The named property matches. Uses POSIX RegExp. Case insensitive.
            Must *not* be surrounded by any delimiters.</td><td><code></code></td><td><code></code></td></tr><tr><td>like</td><td>The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case sensitive.</td><td><code></code></td><td><code></code></td></tr><tr><td>ilike</td><td>The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case insensitive.</td><td><code></code></td><td><code></code></td></tr><tr><td>gt</td><td>The named property is greater than the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>gte</td><td>The named property is greater than or equal to the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>lt</td><td>The named property is less than the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>lte</td><td>The named property is less than or equal to the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>ref</td><td>The named property is the entity or contains the entity.</td><td><code></code></td><td><code></code></td></tr><tr><td>qref</td><td>The named property is an entity that matches the query or contains
            an entity that matches the query.</td><td><code></code></td><td><code></code></td></tr><tr><td>selector</td><td>A selector. (Keep in mind, you can also use an array of these, just
            like any other clause.)</td><td><code></code></td><td><code></code></td></tr></tbody></table></div> <p>The clauses "equal", "contain", "gt", "gte", "lt", and "lte" can also accept
    a third element. If value is null and the third element is a string, the
    third element will be used with <a href="https://locutus.io/php/datetime/strtotime/" target="_blank" rel="noreferrer">Locutus' strtotime function</a> to set the value to a relative timestamp. For example, the following selector
    will look for all entities that were created in the last day.</p> <!> <header class="major"><h2>Querying Examples</h2></header> <p>So putting it all together, you can specify the options and selectors to
    find the exact entities you want.</p> <p>Get the first FoobarBaz entity.</p> <!> <p>Get the latest FoobarBaz entity.</p> <!> <p>Get all baz tagged entities, using the FoobarBaz class.</p> <!> <p>Get the five last created bar and baz tagged entities.</p> <!> <p>Get the five last modified bar and baz tagged entities.</p> <!> <p>Get the third page of sorted by name, baz tagged entities (if pages are 5
    entities long).</p> <!> <p>Get baz tagged entities with names.</p> <!> <p>Get baz tagged entities without names.</p> <!> <p>Get baz tagged entities without names or bar tagged entities with names.</p> <!> <p>Get baz tagged entities with either first names or last names.</p> <!> <p>Get baz tagged entities created in the last day.</p> <!> <p>Get baz tagged entities with names, who either make only up to 8 dollars pay
    or are under 22.</p> <!> <p>Get baz tagged entities named Clark, James, Chris, Christopher, Jake, or
    Jacob.</p> <!> <p>Get baz tagged entities that belong to any user named "John" or "James".</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Creating Entities</a> <a class="button" style="margin: .5em;">Next: Subscribing to Queries</a></section>`,1);function s(t){var s=ue();ae(`1ab5vvc`,e=>{var t=oe();ie(te(t),()=>le),re(()=>{ne.title=`Entity Querying - User Guide - Nymph.js`}),ee(e,t)});var c=te(s),de=e(n(c),8);a(de,{get language(){return o},code:`const baz = await FoobarBaz.factory(guid);
if (baz.guid == null) {
  console.error("Can't find the Foobar Baz!");
}

// Tilmeld's User class has a username factory function.
const cronUser = await User.factoryUsername('cron');
if (cronUser.guid == null) {
  console.error("Can't find the cron user!");
}`});var l=e(de,14),u=n(l),d=e(n(u)),f=n(d),p=e(n(f),2),fe=n(p);fe.textContent=`{type: '&', guid: '790229ae527f1511b3120b71'}`,r(p);var m=e(p),pe=n(m);pe.textContent=`entity.guid = '790229ae527f1511b3120b71'`,r(m),r(f);var h=e(f),g=e(n(h),2),me=n(g);me.textContent=`{type: '&', tag: 'foobar'}`,r(g);var he=e(g),ge=n(he);ge.textContent=`entity.$addTag('foobar')`,r(he),r(h);var _=e(h),v=e(n(_),2),_e=n(v);_e.textContent=`{type: '&', defined: 'foo'}`,r(v);var ve=e(v),ye=n(ve);ye.textContent=`entity.foo = 0`,r(ve),r(_);var y=e(_),b=e(n(y),2),be=n(b);be.textContent=`{type: '&', truthy: 'foo'}`,r(b);var xe=e(b),Se=n(xe);Se.textContent=`entity.foo = 1`,r(xe),r(y);var x=e(y),S=e(n(x),2),Ce=n(S);Ce.textContent=`{type: '&', equal: ['foo', 0]}`,r(S);var C=e(S),we=n(C);we.textContent=`entity.foo = 0`,r(C),r(x);var w=e(x),T=e(n(w),2),Te=n(T);Te.textContent=`{type: '&', contain: ['foo', 'bar']}`,r(T);var E=e(T),Ee=n(E);Ee.textContent=`entity.foo = ['bar', 'baz']`,r(E),r(w);var D=e(w),O=e(n(D),2),De=n(O);De.textContent=`{type: '&', search: ['foo', 'bar']}`,r(O);var k=e(O),Oe=n(k);Oe.textContent=`entity.foo = 'A string with the word bar.'`,r(k),r(D);var A=e(D),j=e(n(A),2),ke=n(j);ke.textContent=`{type: '&', match: ['foo', 'bar.*z']}`,r(j);var M=e(j),Ae=n(M);Ae.textContent=`entity.foo = 'foobarbaz'`,r(M),r(A);var N=e(A),P=e(n(N),2),je=n(P);je.textContent=`{type: '&', imatch: ['foo', 'BaR.*Z']}`,r(P);var Me=e(P),Ne=n(Me);Ne.textContent=`entity.foo = 'foobarbaz'`,r(Me),r(N);var F=e(N),I=e(n(F),2),Pe=n(I);Pe.textContent=`{type: '&', like: ['foo', 'f%bar_az']}`,r(I);var L=e(I),Fe=n(L);Fe.textContent=`entity.foo = 'foobarbaz'`,r(L),r(F);var R=e(F),z=e(n(R),2),Ie=n(z);Ie.textContent=`{type: '&', ilike: ['foo', 'F%bAr_aZ']}`,r(z);var Le=e(z),Re=n(Le);Re.textContent=`entity.foo = 'foobarbaz'`,r(Le),r(R);var B=e(R),V=e(n(B),2),ze=n(V);ze.textContent=`{type: '&', gt: ['foo', 5]}`,r(V);var Be=e(V),Ve=n(Be);Ve.textContent=`entity.foo = 6`,r(Be),r(B);var H=e(B),U=e(n(H),2),He=n(U);He.textContent=`{type: '&', gte: ['foo', 6]}`,r(U);var Ue=e(U),We=n(Ue);We.textContent=`entity.foo = 6`,r(Ue),r(H);var W=e(H),G=e(n(W),2),Ge=n(G);Ge.textContent=`{type: '&', lt: ['foo', 7]}`,r(G);var Ke=e(G),qe=n(Ke);qe.textContent=`entity.foo = 6`,r(Ke),r(W);var K=e(W),q=e(n(K),2),Je=n(q);Je.textContent=`{type: '&', lte: ['foo', 6]}`,r(q);var Ye=e(q),Xe=n(Ye);Xe.textContent=`entity.foo = 6`,r(Ye),r(K);var J=e(K),Y=e(n(J),2),Ze=n(Y);Ze.textContent=`{type: '&', ref: ['foo', '790229ae527f1511b3120b71']}`,r(Y);var Qe=e(Y),$e=n(Qe);$e.textContent=`entity.foo = await Entity.factory('790229ae527f1511b3120b71')`,r(Qe),r(J);var X=e(J),Z=e(n(X),2),et=n(Z);et.textContent=`{type: '&', qref: ['foo', [{class: Entity}, {type: '&', equal: ['name', 'Foobar']}]]}`,r(Z);var tt=e(Z),nt=n(tt);nt.textContent=`entity.foo = await nymph.getEntity({class: Entity}, {type: '&', equal: ['name', 'Foobar']})`,r(tt),r(X);var rt=e(X),Q=e(n(rt),2),it=n(Q);it.textContent=`{type: '&', selector: {type: '|', tag: ['foo', 'bar']}}`,r(Q);var at=e(Q),ot=n(at);ot.textContent=`entity.$addTag('bar')`,r(at),r(rt),r(d),r(u),r(l);var st=e(l,4);a(st,{get language(){return o},code:`{
  type: '&',
  gte: ['cdate', null, '-1 day']
}`});var ct=e(st,8);a(ct,{get language(){return o},code:`const entity = await nymph.getEntity({ class: FoobarBaz });`});var lt=e(ct,4);a(lt,{get language(){return o},code:`const entity = await nymph.getEntity({
  class: FoobarBaz,
  reverse: true
});`});var ut=e(lt,4);a(ut,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  }
);`});var dt=e(ut,4);a(dt,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`});var ft=e(dt,4);a(ft,{get language(){return o},code:`const entities = await nymph.getEntities(
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
);`});var pt=e(ft,4);a(pt,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    limit: 5,
    offset: 10,
    sort: 'name'
  },
  {
    type: '&',
    tag: ['baz']
  }
);`});var mt=e(pt,4);a(mt,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    defined: 'name'
  }
);`});var ht=e(mt,4);a(ht,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    '!defined': 'name'
  }
);`});var gt=e(ht,4);a(gt,{get language(){return o},code:`const entities = await nymph.getEntities(
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
);`});var _t=e(gt,4);a(_t,{get language(){return o},code:`const entities = await nymph.getEntities(
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
);`});var vt=e(_t,4);a(vt,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    gt: ['cdate', null, '-1 day']
  }
);`});var yt=e(vt,4);a(yt,{get language(){return o},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  { type: '&', tag: 'baz', defined: 'name' },
  {
    type: '!|', // at least one must be false
    gte: ['age', 22],
    gt: ['pay', 8]
  }
);`});var bt=e(yt,4);a(bt,{get language(){return o},code:`const entities = await nymph.getEntities(
  { class: FoobarBaz },
  { type: '&', tag: 'baz' },
  {
    type: '|',
    equal: [
      ['firstName', 'Clark'],
      ['firstName', 'James']
    ],
    match: [
      ['firstName', '^Chris(topher)?$'],
      ['firstName', '^Ja(ke|cob)$']
    ]
  }
);`}),a(e(bt,4),{get language(){return o},code:`const entities = await nymph.getEntities(
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
);`}),r(c);var xt=e(c,2),$=n(xt),St=e($,2);r(xt),se(()=>{i($,`href`,`${ce??``}/user-guide/creating-entities`),i(St,`href`,`${ce??``}/user-guide/subscribing-to-queries`)}),ee(t,s)}export{s as component};