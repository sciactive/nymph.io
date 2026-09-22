import{B as ee,E as e,G as t,J as n,K as r,L as te,T as ne,U as re,_ as ie,m as i,ot as a,w as o,x as ae}from"../chunks/H09IMVH7.js";import{o as oe}from"../chunks/D4HAnt_U.js";import"../chunks/xihTtKlq.js";import"../chunks/D8EN8fFf.js";import{t as s}from"../chunks/D_gJAAal.js";import{t as c}from"../chunks/BF3MJUBc.js";import{t as se}from"../chunks/Ciszbs-_.js";var ce=e(`<section><header class="major"><h1 style="font-size: 3em;">Entity Querying</h1></header> <p>The real power behind Nymph is the entity querying system.</p> <header class="major"><h2>Factory Method</h2></header> <p>The <code>Entity</code> class' factory method can take a GUID as an
    argument. You can provide other factory functions that can take things as
    well. For example, the <code>User</code> class in Tilmeld has a <code>factoryUsername</code> method that takes a username. The method will return
    a new entity if the queried entity is not found. You can determine if it was found
    by checking that its GUID is not null.</p> <!> <header class="major"><h2>Nymph's Query Language</h2></header> <p>The powerful way of querying entities is Nymph's <code>getEntities</code> and <code>getEntity</code> methods. The first argument is an Options object.</p> <div class="table-wrapper"><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>typeof Entity</td><td>Entity</td><td>The Entity class to query.</td></tr><tr><td>limit</td><td>number</td><td>undefined</td><td>The limit of entities to be returned. Not needed when using <code>getEntity</code>, as it always returns only one.</td></tr><tr><td>offset</td><td>number</td><td>0</td><td>The offset from the first matching entity, in order, to start
            retrieving.</td></tr><tr><td>reverse</td><td>boolean</td><td>false</td><td>If true, entities will be retrieved from newest to oldest/largest
            to smallest (with regard to <code>sort</code>).</td></tr><tr><td>sort</td><td>'cdate' | 'mdate' | string</td><td>'cdate'</td><td>How to sort the entities. Should be "cdate", "mdate", the name of a
            property, or null.</td></tr><tr><td>return</td><td>'entity' | 'object' | 'guid' | 'count'</td><td>'entity'</td><td>What to return, the entities with their data, just their data, just
            the GUIDs, or just a count.</td></tr><tr><td>source</td><td>string</td><td>undefined</td><td>Will be 'client' if the query came from a REST request or the
            PubSub server. (Mainly used in Tilmeld for access control.)</td></tr><tr><td>skipCache</td><td>boolean</td><td>false</td><td>If true, Nymph will skip the cache and retrieve the entity from the
            DB.</td></tr><tr><td>acRequest</td><td>TilmeldAccessRequest</td><td>ALL_LEVELS</td><td>Controls what kind of access levels the query looks for. For
            example, you can limit a query to only entities owned by one of the
            user's secondary groups. The levels can be ORed together (using <code>|</code>) to include multiple levels.</td></tr><tr><td>skipAc</td><td>boolean</td><td>false</td><td>If true, Tilmeld will not filter returned entities according to
            access controls. (If Tilmeld is installed.) (This is always set to
            false by the REST endpoint and PubSub server.)</td></tr></tbody></table></div> <p>Every argument following the Options is a Selector object. They contain
    clauses and a type. An entity must match each selector to be returned. There
    are four selector types, and they are defined on the <code>type</code> property.</p> <div class="table-wrapper"><table><thead><tr><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>&amp;</td><td>And</td><td>All clauses in the selector must match.</td></tr><tr><td>|</td><td>Or</td><td>At least one clause in the selector must match.</td></tr><tr><td>!&amp;</td><td>Not And</td><td>All clauses in the selector must not match.</td></tr><tr><td>!|</td><td>Not Or</td><td>At least one clause in the selector must not match.</td></tr></tbody></table></div> <p>The other properties of the Selector are clauses. Clauses use the form <code>name: value</code>, or <code>name: [value1, value2, ...]</code>. They can be negated by prepending
    a bang (!) to the name, like <code>'!name': value</code>. A clause that has
    multiple values is considered as multiple clauses in terms of matching for
    "or" selectors.</p> <div class="table-wrapper"><table><thead><tr><th>Property</th><th>Description</th><th>Example</th><th>Works On</th></tr></thead><tbody><tr><td>guid</td><td>The entity's GUID is equal.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>tag</td><td>The entity has the tag.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>defined</td><td>The named property is not undefined (i.e. it has <strong>any</strong> value).</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>truthy</td><td>The named property evaluates to true.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>equal</td><td>The named property is defined and equals the value (their JSON
            strings are identical).</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>contain</td><td>The named property is an array that contains the value.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>search</td><td>The named property matches the query. Single quotes find sequential
            terms. Double quotes find exact terms. "or" is the or operator. "-"
            before a term is the negation operator. Stop words and punctuation
            are stripped. Case insensitive.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>match</td><td>The named property matches. Uses POSIX RegExp. Case sensitive. Must
            *not* be surrounded by any delimiters.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>imatch</td><td>The named property matches. Uses POSIX RegExp. Case insensitive.
            Must *not* be surrounded by any delimiters.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>like</td><td>The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case sensitive.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>ilike</td><td>The named property matches. Uses % for variable length wildcard and
            _ for single character wildcard. Case insensitive.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>gt</td><td>The named property is greater than the value.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>gte</td><td>The named property is greater than or equal to the value.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>lt</td><td>The named property is less than the value.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>lte</td><td>The named property is less than or equal to the value.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>ref</td><td>The named property is the entity or contains the entity (you can
            give an entity or its GUID).</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>qref</td><td>The named property is an entity that matches the query or contains
            an entity that matches the query.</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre style="white-space: pre-wrap;"></pre></td></tr><tr><td>selector</td><td>A selector. (Keep in mind, you can also use an array of these, just
            like any other clause.)</td><td><pre style="white-space: pre-wrap;"></pre></td><td><pre></pre></td></tr></tbody></table></div> <p>The clauses "equal", "contain", "gt", "gte", "lt", and "lte" can also accept
    a third element. If value is null and the third element is a string, the
    third element will be used with <a href="https://locutus.io/php/datetime/strtotime/" target="_blank" rel="noreferrer">Locutus' strtotime function</a> to set the value to a relative timestamp. For example, the following selector
    will look for all entities that were created in the last day.</p> <!> <header class="major"><h2>Querying Examples</h2></header> <p>So putting it all together, you can specify the options and selectors to
    find the exact entities you want.</p> <p>Get the first FoobarBaz entity.</p> <!> <p>Get the latest FoobarBaz entity.</p> <!> <p>Get all baz tagged entities, using the FoobarBaz class.</p> <!> <p>Get the five last created bar and baz tagged entities.</p> <!> <p>Get the five last modified bar and baz tagged entities.</p> <!> <p>Get the third page of sorted by name, baz tagged entities (if pages are 5
    entities long).</p> <!> <p>Get baz tagged entities with names.</p> <!> <p>Get baz tagged entities without names.</p> <!> <p>Get baz tagged entities without names or bar tagged entities with names.</p> <!> <p>Get baz tagged entities with either first names or last names.</p> <!> <p>Get baz tagged entities created in the last day.</p> <!> <p>Get baz tagged entities with names, who either make only up to 8 dollars pay
    or are under 22.</p> <!> <p>Get baz tagged entities named Clark, James, Chris, Christopher, Jake, or
    Jacob.</p> <!> <p>Get baz tagged entities that belong to any user named "John" or "James".</p> <!></section> <section class="page-steps"><a class="button" style="margin: .5em;">Previous: Creating Entities</a> <a class="button" style="margin: .5em;">Next: Subscribing to Queries</a></section>`,1);function l(e){var l=ce();ie(`1ab5vvc`,ee=>{var e=ne(),t=r(e);ae(t,()=>se),te(()=>{re.title=`Entity Querying - User Guide - Nymph.js`}),o(ee,e)});var u=r(l),le=n(t(u),8);s(le,{get language(){return c},code:`const baz = await FoobarBaz.factory(guid);
if (baz.guid == null) {
  console.error("Can't find the Foobar Baz!");
}

// Tilmeld's User class has a username factory function.
const cronUser = await User.factoryUsername('cron');
if (cronUser.guid == null) {
  console.error("Can't find the cron user!");
}`});var d=n(le,14),f=t(d),p=n(t(f)),m=t(p),h=n(t(m),2),ue=t(h);ue.textContent=`{type: '&', guid: '790229ae527f1511b3120b71'}`,a(h);var de=n(h),fe=t(de);fe.textContent=`entity.guid = '790229ae527f1511b3120b71'`,a(de),a(m);var g=n(m),_=n(t(g),2),pe=t(_);pe.textContent=`{type: '&', tag: 'foobar'}`,a(_);var me=n(_),he=t(me);he.textContent=`entity.$addTag('foobar')`,a(me),a(g);var v=n(g),y=n(t(v),2),ge=t(y);ge.textContent=`{type: '&', defined: 'foo'}`,a(y);var _e=n(y),ve=t(_e);ve.textContent=`entity.foo = null`,a(_e),a(v);var b=n(v),x=n(t(b),2),ye=t(x);ye.textContent=`{type: '&', truthy: 'foo'}`,a(x);var be=n(x),xe=t(be);xe.textContent=`entity.foo = 1`,a(be),a(b);var S=n(b),C=n(t(S),2),Se=t(C);Se.textContent=`{type: '&', equal: ['foo', 0]}`,a(C);var w=n(C),Ce=t(w);Ce.textContent=`entity.foo = 0`,a(w),a(S);var T=n(S),E=n(t(T),2),we=t(E);we.textContent=`{type: '&', contain: ['foo', 'bar']}`,a(E);var D=n(E),Te=t(D);Te.textContent=`entity.foo = ['bar', 'baz']`,a(D),a(T);var O=n(T),k=n(t(O),2),Ee=t(k);Ee.textContent=`{type: '&', search: ['foo', 'bar']}`,a(k);var A=n(k),De=t(A);De.textContent=`entity.foo = 'A string with the word bar.'`,a(A),a(O);var j=n(O),M=n(t(j),2),Oe=t(M);Oe.textContent=`{type: '&', match: ['foo', 'bar.*z']}`,a(M);var ke=n(M),Ae=t(ke);Ae.textContent=`entity.foo = 'foobarbaz'`,a(ke),a(j);var N=n(j),P=n(t(N),2),je=t(P);je.textContent=`{type: '&', imatch: ['foo', 'BaR.*Z']}`,a(P);var Me=n(P),Ne=t(Me);Ne.textContent=`entity.foo = 'foobarbaz'`,a(Me),a(N);var F=n(N),I=n(t(F),2),Pe=t(I);Pe.textContent=`{type: '&', like: ['foo', 'f%bar_az']}`,a(I);var L=n(I),Fe=t(L);Fe.textContent=`entity.foo = 'foobarbaz'`,a(L),a(F);var R=n(F),z=n(t(R),2),Ie=t(z);Ie.textContent=`{type: '&', ilike: ['foo', 'F%bAr_aZ']}`,a(z);var Le=n(z),Re=t(Le);Re.textContent=`entity.foo = 'foobarbaz'`,a(Le),a(R);var B=n(R),V=n(t(B),2),ze=t(V);ze.textContent=`{type: '&', gt: ['foo', 5]}`,a(V);var Be=n(V),Ve=t(Be);Ve.textContent=`entity.foo = 6`,a(Be),a(B);var H=n(B),U=n(t(H),2),He=t(U);He.textContent=`{type: '&', gte: ['foo', 6]}`,a(U);var Ue=n(U),We=t(Ue);We.textContent=`entity.foo = 6`,a(Ue),a(H);var W=n(H),G=n(t(W),2),Ge=t(G);Ge.textContent=`{type: '&', lt: ['foo', 7]}`,a(G);var Ke=n(G),qe=t(Ke);qe.textContent=`entity.foo = 6`,a(Ke),a(W);var K=n(W),q=n(t(K),2),Je=t(q);Je.textContent=`{type: '&', lte: ['foo', 6]}`,a(q);var Ye=n(q),Xe=t(Ye);Xe.textContent=`entity.foo = 6`,a(Ye),a(K);var J=n(K),Y=n(t(J),2),Ze=t(Y);Ze.textContent=`{
  type: '&',
  ref: [
    'foo',
    '790229ae527f1511b3120b71'
  ]
}`,a(Y);var Qe=n(Y),$e=t(Qe);$e.textContent=`entity.foo =
  await Entity.factory(
    '790229ae527f1511b3120b71'
  )`,a(Qe),a(J);var X=n(J),Z=n(t(X),2),et=t(Z);et.textContent=`{
  type: '&',
  qref: [
    'foo',
    [
      {class: Entity},
      {
        type: '&',
        equal: ['name', 'Foobar']
      }
    ]
  ]
}`,a(Z);var tt=n(Z),nt=t(tt);nt.textContent=`entity.foo =
  await nymph.getEntity(
    {class: Entity},
    {
      type: '&',
      equal: ['name', 'Foobar']
    }
  )`,a(tt),a(X);var rt=n(X),Q=n(t(rt),2),it=t(Q);it.textContent=`{
  type: '&',
  selector: {
    type: '|',
    tag: ['foo', 'bar']
  }
}`,a(Q);var at=n(Q),ot=t(at);ot.textContent=`entity.$addTag('bar')`,a(at),a(rt),a(p),a(f),a(d);var st=n(d,4);s(st,{get language(){return c},code:`{
  type: '&',
  gte: ['cdate', null, '-1 day']
}`});var ct=n(st,8);s(ct,{get language(){return c},code:`const entity = await nymph.getEntity({ class: FoobarBaz });`});var lt=n(ct,4);s(lt,{get language(){return c},code:`const entity = await nymph.getEntity({
  class: FoobarBaz,
  reverse: true
});`});var ut=n(lt,4);s(ut,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz'
  }
);`});var dt=n(ut,4);s(dt,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz,
    reverse: true,
    limit: 5
  },
  {
    type: '&',
    tag: ['bar', 'baz']
  }
);`});var ft=n(dt,4);s(ft,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`});var pt=n(ft,4);s(pt,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`});var mt=n(pt,4);s(mt,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    defined: 'name'
  }
);`});var ht=n(mt,4);s(ht,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    '!defined': 'name'
  }
);`});var gt=n(ht,4);s(gt,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`});var _t=n(gt,4);s(_t,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`});var vt=n(_t,4);s(vt,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  {
    type: '&',
    tag: 'baz',
    gt: ['cdate', null, '-1 day']
  }
);`});var yt=n(vt,4);s(yt,{get language(){return c},code:`const entities = await nymph.getEntities(
  {
    class: FoobarBaz
  },
  { type: '&', tag: 'baz', defined: 'name' },
  {
    type: '!|', // at least one must be false
    gte: ['age', 22],
    gt: ['pay', 8]
  }
);`});var bt=n(yt,4);s(bt,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`});var xt=n(bt,4);s(xt,{get language(){return c},code:`const entities = await nymph.getEntities(
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
);`}),a(u);var St=n(u,2),$=t(St),Ct=n($,2);a(St),ee(()=>{i($,`href`,`${oe??``}/user-guide/creating-entities`),i(Ct,`href`,`${oe??``}/user-guide/subscribing-to-queries`)}),o(e,l)}export{l as component};