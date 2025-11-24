import{f as be,a as Ft,c as _e}from"../chunks/DFbsVUdL.js";import"../chunks/DGj7M2y4.js";import{f as kt,c as e,t as we,e as ze,s as t,$ as Ce,a}from"../chunks/uMqmAk-V.js";import{h as xe,g as Te}from"../chunks/BSVgqX3x.js";import{h as Ee,s as Bt}from"../chunks/Dx1ptvL_.js";import{t as d}from"../chunks/Ce9AoNbY.js";import{b as Gt}from"../chunks/BtwkVUQB.js";import{H as r}from"../chunks/DZfDsH_2.js";var qe=be(`<section><header class="major"><h1 style="font-size: 3em;">Entity Querying</h1></header> <p>The real power behind Nymph is the entity querying system.</p> <header class="major"><h2>Factory Method</h2></header> <p>The <code>Entity</code> class' factory method can take a GUID as an
    argument. You can provide other factory functions that can take things as
    well. For example, the <code>User</code> class in Tilmeld has a <code>factoryUsername</code> method that takes a username. The method will return
    a new entity if the queried entity is not found. You can determine if it was
    found by checking that its GUID is not null.</p> <!> <header class="major"><h2>Nymph's Query Language</h2></header> <p>The powerful way of querying entities is Nymph's <code>getEntities</code> and <code>getEntity</code> methods. The first argument is an Options object.</p> <div class="table-wrapper"><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>typeof Entity</td><td>Entity</td><td>The Entity class to query.</td></tr><tr><td>limit</td><td>number</td><td>undefined</td><td>The limit of entities to be returned. Not needed when using <code>getEntity</code>, as it always returns only one.</td></tr><tr><td>offset</td><td>number</td><td>0</td><td>The offset from the first matching entity, in order, to start
            retrieving.</td></tr><tr><td>reverse</td><td>boolean</td><td>false</td><td>If true, entities will be retrieved from newest to oldest/largest
            to smallest (with regard to <code>sort</code>).</td></tr><tr><td>sort</td><td>'cdate' | 'mdate' | string</td><td>'cdate'</td><td>How to sort the entities. Should be "cdate", "mdate", or the name
            of a property.</td></tr><tr><td>return</td><td>'entity' | 'object' | 'guid' | 'count'</td><td>'entity'</td><td>What to return, the entities with their data, just their data, just
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
    Jacob.</p> <!> <p>Get baz tagged entities that belong to any user named "John" or "James".</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Creating Entities</a> <a class="button" style="margin: .5em;">Next: Subscribing to Queries</a></section>`,1);function Ae(Nt){var P=qe();Ee("1ab5vvc",fe=>{var qt=_e(),ve=kt(qt);xe(ve,()=>Te),ze(()=>{Ce.title="Entity Querying - User Guide - Nymph.js"}),Ft(fe,qt)});var o=kt(P),Q=t(e(o),8);r(Q,{get language(){return d},code:`const baz = await FoobarBaz.factory(guid);
if (baz.guid == null) {
  console.error("Can't find the Foobar Baz!");
}

// Tilmeld's User class has a username factory function.
const cronUser = await User.factoryUsername('cron');
if (cronUser.guid == null) {
  console.error("Can't find the cron user!");
}`});var n=t(Q,14),R=e(n),M=t(e(R)),i=e(M),s=t(e(i),2),Ut=e(s);Ut.textContent="{type: '&', guid: '790229ae527f1511b3120b71'}",a(s);var H=t(s),St=e(H);St.textContent="entity.guid = '790229ae527f1511b3120b71'",a(H),a(i);var c=t(i),l=t(e(c),2),jt=e(l);jt.textContent="{type: '&', tag: 'foobar'}",a(l);var W=t(l),At=e(W);At.textContent="entity.$addTag('foobar')",a(W),a(c);var h=t(c),p=t(e(h),2),It=e(p);It.textContent="{type: '&', defined: 'foo'}",a(p);var L=t(p),Dt=e(L);Dt.textContent="entity.foo = 0",a(L),a(h);var u=t(h),y=t(e(u),2),Jt=e(y);Jt.textContent="{type: '&', truthy: 'foo'}",a(y);var X=t(y),Ot=e(X);Ot.textContent="entity.foo = 1",a(X),a(u);var g=t(u),m=t(e(g),2),$t=e(m);$t.textContent="{type: '&', equal: ['foo', 0]}",a(m);var Y=t(m),Pt=e(Y);Pt.textContent="entity.foo = 0",a(Y),a(g);var f=t(g),v=t(e(f),2),Qt=e(v);Qt.textContent="{type: '&', contain: ['foo', 'bar']}",a(v);var Z=t(v),Rt=e(Z);Rt.textContent="entity.foo = ['bar', 'baz']",a(Z),a(f);var b=t(f),_=t(e(b),2),Mt=e(_);Mt.textContent="{type: '&', search: ['foo', 'bar']}",a(_);var K=t(_),Ht=e(K);Ht.textContent="entity.foo = 'A string with the word bar.'",a(K),a(b);var w=t(b),z=t(e(w),2),Wt=e(z);Wt.textContent="{type: '&', match: ['foo', 'bar.*z']}",a(z);var V=t(z),Lt=e(V);Lt.textContent="entity.foo = 'foobarbaz'",a(V),a(w);var C=t(w),x=t(e(C),2),Xt=e(x);Xt.textContent="{type: '&', imatch: ['foo', 'BaR.*Z']}",a(x);var tt=t(x),Yt=e(tt);Yt.textContent="entity.foo = 'foobarbaz'",a(tt),a(C);var T=t(C),E=t(e(T),2),Zt=e(E);Zt.textContent="{type: '&', like: ['foo', 'f%bar_az']}",a(E);var et=t(E),Kt=e(et);Kt.textContent="entity.foo = 'foobarbaz'",a(et),a(T);var q=t(T),F=t(e(q),2),Vt=e(F);Vt.textContent="{type: '&', ilike: ['foo', 'F%bAr_aZ']}",a(F);var at=t(F),te=e(at);te.textContent="entity.foo = 'foobarbaz'",a(at),a(q);var k=t(q),B=t(e(k),2),ee=e(B);ee.textContent="{type: '&', gt: ['foo', 5]}",a(B);var dt=t(B),ae=e(dt);ae.textContent="entity.foo = 6",a(dt),a(k);var G=t(k),N=t(e(G),2),de=e(N);de.textContent="{type: '&', gte: ['foo', 6]}",a(N);var rt=t(N),re=e(rt);re.textContent="entity.foo = 6",a(rt),a(G);var U=t(G),S=t(e(U),2),oe=e(S);oe.textContent="{type: '&', lt: ['foo', 7]}",a(S);var ot=t(S),ne=e(ot);ne.textContent="entity.foo = 6",a(ot),a(U);var j=t(U),A=t(e(j),2),ie=e(A);ie.textContent="{type: '&', lte: ['foo', 6]}",a(A);var nt=t(A),se=e(nt);se.textContent="entity.foo = 6",a(nt),a(j);var I=t(j),D=t(e(I),2),ce=e(D);ce.textContent="{type: '&', ref: ['foo', '790229ae527f1511b3120b71']}",a(D);var it=t(D),le=e(it);le.textContent="entity.foo = await Entity.factory('790229ae527f1511b3120b71')",a(it),a(I);var J=t(I),O=t(e(J),2),he=e(O);he.textContent="{type: '&', qref: ['foo', [{class: Entity}, {type: '&', equal: ['name', 'Foobar']}]]}",a(O);var st=t(O),pe=e(st);pe.textContent="entity.foo = await nymph.getEntity({class: Entity}, {type: '&', equal: ['name', 'Foobar']})",a(st),a(J);var ct=t(J),$=t(e(ct),2),ue=e($);ue.textContent="{type: '&', selector: {type: '|', tag: ['foo', 'bar']}}",a($);var lt=t($),ye=e(lt);ye.textContent="entity.$addTag('bar')",a(lt),a(ct),a(M),a(R),a(n);var ht=t(n,4);r(ht,{get language(){return d},code:`{
  type: '&',
  gte: ['cdate', null, '-1 day']
}`});var pt=t(ht,8);r(pt,{get language(){return d},code:"const entity = await nymph.getEntity({ class: FoobarBaz });"});var ut=t(pt,4);r(ut,{get language(){return d},code:`const entity = await nymph.getEntity({
  class: FoobarBaz,
  reverse: true
});`});var yt=t(ut,4);r(yt,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  }
);`});var gt=t(yt,4);r(gt,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`});var mt=t(gt,4);r(mt,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`});var ft=t(mt,4);r(ft,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`});var vt=t(ft,4);r(vt,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    defined: 'name'
  }
);`});var bt=t(vt,4);r(bt,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    '!defined': 'name'
  }
);`});var _t=t(bt,4);r(_t,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`});var wt=t(_t,4);r(wt,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`});var zt=t(wt,4);r(zt,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    gt: ['cdate', null, '-1 day']
  }
);`});var Ct=t(zt,4);r(Ct,{get language(){return d},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  { type: '&', tag: 'baz', defined: 'name' },
  {
    type: '!|', // at least one must be false
    gte: ['age', 22],
    gt: ['pay', 8]
  }
);`});var xt=t(Ct,4);r(xt,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`});var ge=t(xt,4);r(ge,{get language(){return d},code:`const entities = await nymph.getEntities(
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
);`}),a(o);var Tt=t(o,2),Et=e(Tt),me=t(Et,2);a(Tt),we(()=>{Bt(Et,"href",`${Gt??""}/user-guide/creating-entities`),Bt(me,"href",`${Gt??""}/user-guide/subscribing-to-queries`)}),Ft(Nt,P)}export{Ae as component};
