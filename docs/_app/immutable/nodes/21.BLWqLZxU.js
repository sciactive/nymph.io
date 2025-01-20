import{h as me,a as Tt,t as ue,c as ge}from"../chunks/qRCaFh0V.js";import"../chunks/CgZvsY_p.js";import{f as Et,$ as ve,s as t,c as e,a}from"../chunks/xPuFI3q7.js";import{h as fe,g as be}from"../chunks/C0NHSKHS.js";import{s as Ft}from"../chunks/Dx4IbXf0.js";import{t as d}from"../chunks/Ce9AoNbY.js";import{b as kt}from"../chunks/DnMb0p-7.js";import{H as o}from"../chunks/9N_cuTOb.js";var _e=ue(`<section><header class="major"><h1 style="font-size: 3em;">Entity Querying</h1></header> <p>The real power behind Nymph is the entity querying system.</p> <header class="major"><h2>Factory Method</h2></header> <p>The <code>Entity</code> class' factory method can take a GUID as an
    argument. You can provide other factory functions that can take things as
    well. For example, the <code>User</code> class in Tilmeld has a <code>factoryUsername</code> method that takes a username. The method will return
    a new entity if the queried entity is not found. You can determine if it was
    found by checking that its GUID is not null.</p> <!> <header class="major"><h2>Nymph's Query Language</h2></header> <p>The powerful way of querying entities is Nymph's <code>getEntities</code> and <code>getEntity</code> methods. The first argument is an Options object.</p> <div class="table-wrapper"><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>typeof Entity</td><td>Entity</td><td>The Entity class to query.</td></tr><tr><td>limit</td><td>number</td><td>undefined</td><td>The limit of entities to be returned. Not needed when using <code>getEntity</code>, as it always returns only one.</td></tr><tr><td>offset</td><td>number</td><td>0</td><td>The offset from the first matching entity, in order, to start
            retrieving.</td></tr><tr><td>reverse</td><td>boolean</td><td>false</td><td>If true, entities will be retrieved from newest to oldest/largest
            to smallest (with regard to <code>sort</code>).</td></tr><tr><td>sort</td><td>'cdate' | 'mdate' | string</td><td>'cdate'</td><td>How to sort the entities. Should be "cdate", "mdate", or the name
            of a property.</td></tr><tr><td>return</td><td>'entity' | 'guid' | 'count'</td><td>'entity'</td><td>What to return, the entities with their data, just the GUIDs, or
            just a count.</td></tr><tr><td>source</td><td>string</td><td>undefined</td><td>Will be 'client' if the query came from a REST request or the
            PubSub server. (Mainly used in Tilmeld for access control.)</td></tr><tr><td>skipCache</td><td>boolean</td><td>false</td><td>If true, Nymph will skip the cache and retrieve the entity from the
            DB.</td></tr><tr><td>skipAc</td><td>boolean</td><td>false</td><td>If true, Tilmeld will not filter returned entities according to
            access controls. (If Tilmeld is installed.) (This is always set to
            false by the REST endpoint and PubSub server.)</td></tr></tbody></table></div> <p>Every argument following the Options is a Selector object. They contain
    clauses and a type. An entity must match each selector to be returned. There
    are four selector types, and they are defined on the <code>type</code> property.</p> <div class="table-wrapper"><table><thead><tr><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>And</td><td>All clauses in the selector must match.</td></tr><tr><td>|</td><td>Or</td><td>At least one clause in the selector must match.</td></tr><tr><td>!&amp;</td><td>Not And</td><td>All clauses in the selector must not match.</td></tr><tr><td>!|</td><td>Not Or</td><td>At least one clause in the selector must not match.</td></tr></tbody></table></div> <p>The other properties of the Selector are clauses. Clauses use the form <code>name: value</code>, or <code>name: [value1, value2, ...]</code>. They can be negated by prepending
    a bang (!) to the name, like <code>'!name': value</code>. A clause that has
    multiple values is considered as multiple clauses in terms of matching for
    "or" selectors.</p> <div class="table-wrapper"><table><thead><tr><th>Property</th><th>Description</th><th>Example</th><th>Works On</th></tr></thead><tbody><tr><td>guid</td><td>The entity's GUID is equal.</td><td><code></code></td><td><code></code></td></tr><tr><td>tag</td><td>The entity has the tag.</td><td><code></code></td><td><code></code></td></tr><tr><td>defined</td><td>The named property is not undefined.</td><td><code></code></td><td><code></code></td></tr><tr><td>truthy</td><td>The named property evaluates to true.</td><td><code></code></td><td><code></code></td></tr><tr><td>equal</td><td>The named property is defined and equals the value (their JSON
            strings are identical).</td><td><code></code></td><td><code></code></td></tr><tr><td>contain</td><td>The named property is an array that contains the value.</td><td><code></code></td><td><code></code></td></tr><tr><td>match</td><td>The named property matches. Uses POSIX RegExp. Case sensitive. Must
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
    Jacob.</p> <!> <p>Get baz tagged entities that belong to any user named "John" or "James".</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Creating Entities</a> <a class="button" style="margin: .5em;">Next: Subscribing to Queries</a></section>`,1);function qe(qt){var O=_e();me(pe=>{var xt=ge();ve.title="Entity Querying - User Guide - Nymph.js";var ye=Et(xt);fe(ye,()=>be,!1,!1),Tt(pe,xt)});var r=Et(O),$=t(e(r),8);o($,{language:d,code:`const baz = await FoobarBaz.factory(guid);
if (baz.guid == null) {
  console.error("Can't find the Foobar Baz!");
}

// Tilmeld's User class has a username factory function.
const cronUser = await User.factoryUsername('cron');
if (cronUser.guid == null) {
  console.error("Can't find the cron user!");
}`});var n=t($,14),P=e(n),Q=t(e(P)),i=e(Q),s=t(e(i),2),Bt=e(s);Bt.textContent="{type: '&', guid: '790229ae527f1511b3120b71'}",a(s);var R=t(s),Gt=e(R);Gt.textContent="entity.guid = '790229ae527f1511b3120b71'",a(R),a(i);var c=t(i),l=t(e(c),2),Nt=e(l);Nt.textContent="{type: '&', tag: 'foobar'}",a(l);var M=t(l),Ut=e(M);Ut.textContent="entity.$addTag('foobar')",a(M),a(c);var h=t(c),p=t(e(h),2),St=e(p);St.textContent="{type: '&', defined: 'foo'}",a(p);var H=t(p),At=e(H);At.textContent="entity.foo = 0",a(H),a(h);var y=t(h),m=t(e(y),2),It=e(m);It.textContent="{type: '&', truthy: 'foo'}",a(m);var W=t(m),jt=e(W);jt.textContent="entity.foo = 1",a(W),a(y);var u=t(y),g=t(e(u),2),Jt=e(g);Jt.textContent="{type: '&', equal: ['foo', 0]}",a(g);var L=t(g),Dt=e(L);Dt.textContent="entity.foo = 0",a(L),a(u);var v=t(u),f=t(e(v),2),Ot=e(f);Ot.textContent="{type: '&', contain: ['foo', 'bar']}",a(f);var X=t(f),$t=e(X);$t.textContent="entity.foo = ['bar', 'baz']",a(X),a(v);var b=t(v),_=t(e(b),2),Pt=e(_);Pt.textContent="{type: '&', match: ['foo', 'bar.*z']}",a(_);var Y=t(_),Qt=e(Y);Qt.textContent="entity.foo = 'foobarbaz'",a(Y),a(b);var w=t(b),z=t(e(w),2),Rt=e(z);Rt.textContent="{type: '&', imatch: ['foo', 'BaR.*Z']}",a(z);var Z=t(z),Mt=e(Z);Mt.textContent="entity.foo = 'foobarbaz'",a(Z),a(w);var C=t(w),x=t(e(C),2),Ht=e(x);Ht.textContent="{type: '&', like: ['foo', 'f%bar_az']}",a(x);var K=t(x),Wt=e(K);Wt.textContent="entity.foo = 'foobarbaz'",a(K),a(C);var T=t(C),E=t(e(T),2),Lt=e(E);Lt.textContent="{type: '&', ilike: ['foo', 'F%bAr_aZ']}",a(E);var V=t(E),Xt=e(V);Xt.textContent="entity.foo = 'foobarbaz'",a(V),a(T);var F=t(T),k=t(e(F),2),Yt=e(k);Yt.textContent="{type: '&', gt: ['foo', 5]}",a(k);var tt=t(k),Zt=e(tt);Zt.textContent="entity.foo = 6",a(tt),a(F);var q=t(F),B=t(e(q),2),Kt=e(B);Kt.textContent="{type: '&', gte: ['foo', 6]}",a(B);var et=t(B),Vt=e(et);Vt.textContent="entity.foo = 6",a(et),a(q);var G=t(q),N=t(e(G),2),te=e(N);te.textContent="{type: '&', lt: ['foo', 7]}",a(N);var at=t(N),ee=e(at);ee.textContent="entity.foo = 6",a(at),a(G);var U=t(G),S=t(e(U),2),ae=e(S);ae.textContent="{type: '&', lte: ['foo', 6]}",a(S);var dt=t(S),de=e(dt);de.textContent="entity.foo = 6",a(dt),a(U);var A=t(U),I=t(e(A),2),oe=e(I);oe.textContent="{type: '&', ref: ['foo', '790229ae527f1511b3120b71']}",a(I);var ot=t(I),re=e(ot);re.textContent="entity.foo = await Entity.factory('790229ae527f1511b3120b71')",a(ot),a(A);var j=t(A),J=t(e(j),2),ne=e(J);ne.textContent="{type: '&', qref: ['foo', [{class: Entity}, {type: '&', equal: ['name', 'Foobar']}]]}",a(J);var rt=t(J),ie=e(rt);ie.textContent="entity.foo = await nymph.getEntity({class: Entity}, {type: '&', equal: ['name', 'Foobar']})",a(rt),a(j);var nt=t(j),D=t(e(nt),2),se=e(D);se.textContent="{type: '&', selector: {type: '|', tag: ['foo', 'bar']}}",a(D);var it=t(D),ce=e(it);ce.textContent="entity.$addTag('bar')",a(it),a(nt),a(Q),a(P),a(n);var st=t(n,4);o(st,{language:d,code:`{
  type: '&',
  gte: ['cdate', null, '-1 day']
}`});var ct=t(st,8);o(ct,{language:d,code:"const entity = await nymph.getEntity({ class: FoobarBaz });"});var lt=t(ct,4);o(lt,{language:d,code:`const entity = await nymph.getEntity({
  class: FoobarBaz,
  reverse: true
});`});var ht=t(lt,4);o(ht,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  }
);`});var pt=t(ht,4);o(pt,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`});var yt=t(pt,4);o(yt,{language:d,code:`const entities = await nymph.getEntities(
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
);`});var mt=t(yt,4);o(mt,{language:d,code:`const entities = await nymph.getEntities(
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
);`});var ut=t(mt,4);o(ut,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    defined: 'name'
  }
);`});var gt=t(ut,4);o(gt,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    '!defined': 'name'
  }
);`});var vt=t(gt,4);o(vt,{language:d,code:`const entities = await nymph.getEntities(
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
);`});var ft=t(vt,4);o(ft,{language:d,code:`const entities = await nymph.getEntities(
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
);`});var bt=t(ft,4);o(bt,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    gt: ['cdate', null, '-1 day']
  }
);`});var _t=t(bt,4);o(_t,{language:d,code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  { type: '&', tag: 'baz', defined: 'name' },
  {
    type: '!|', // at least one must be false
    gte: ['age', 22],
    gt: ['pay', 8]
  }
);`});var wt=t(_t,4);o(wt,{language:d,code:`const entities = await nymph.getEntities(
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
);`});var le=t(wt,4);o(le,{language:d,code:`const entities = await nymph.getEntities(
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
);`}),a(r);var zt=t(r,2),Ct=e(zt);Ft(Ct,"href",`${kt??""}/user-guide/creating-entities`);var he=t(Ct,2);Ft(he,"href",`${kt??""}/user-guide/subscribing-to-queries`),a(zt),Tt(qt,O)}export{qe as component};
