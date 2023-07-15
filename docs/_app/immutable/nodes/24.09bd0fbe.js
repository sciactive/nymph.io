import{s as Pe,I as Ce,e as xe,a as n,f as i,l as H,x as ke,J as qe,d as u,c as r,g as o,h as q,r as m,m as M,j as _,k as Ee,u as e,i as I,v as je}from"../chunks/scheduler.d7e45cc8.js";import{S as He,i as Me,b as z,d as Q,m as W,a as Y,t as B,e as O}from"../chunks/index.77720afb.js";import{H as G,g as Ue}from"../chunks/github.64534d2c.js";import{t as J}from"../chunks/typescript.09c48802.js";import{b as me}from"../chunks/paths.dbb47c61.js";function Ae(Te){let b,j,U,t,p,be='<h1 style="font-size: 3em;">Subscribing to Queries</h1>',R,$,pe=`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`,F,d,K,S,V,X,Z,x,de=`You can use the <code>subscribeEntities</code> method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    <code>updateArray</code> uses to update the original array.`,ee,g,te,E,ge=`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`,ae,f,se,T,fe=`To unsubscribe from the query, use the <code>unsubscribe</code> method on
    the
    <code>PubSubSubscription</code> object returned by the function.`,ne,y,re,P,ye=`You can subscribe to changes to an entity with the <code>subscribeWith</code>
    method. This method accepts the callbacks directly and returns a
    <code>PubSubSubscription</code>
    object.`,ie,v,oe,C,ve=`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`,ue,k,we=`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`,A,l,c,le,ce,h,he,L;return g=new G({props:{language:J,code:`let smiths: (User & UserData)[] = [];
pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)(
  (update) => {
    // This function will be called once initially with an array of
    // entities, then again every time there's a change with an
    // update object.
    // The updateArray function will add any newly matching entities,
    // update any existing entities that have changed, and remove any
    // entities that no longer match (including deleted entities).
    pubsub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  }
);`}}),f=new G({props:{language:J,code:`let smiths: (User & UserData)[] = [];
pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)(
  (update) => {
    pubsub.updateArray(smiths, update);
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  },
  (count) => {
    // This function will be called each time the count of
    // subscribers to this query changes.
    console.log(\`There are now \${count} users watching the Smiths.\`);
  }
);`}}),y=new G({props:{language:J,code:`let smiths: (User & UserData)[] = [];
let subscription = pubsub.subscribeEntities(
  {
    class: User
  },
  {
    type: '&',
    like: ['name', '% Smith']
  }
)((update) => {
  pubsub.updateArray(smiths, update);
});

onDestroy(() => {
  subscription.unsubscribe();
});`}}),v=new G({props:{language:J,code:`let subscription = pubsub.subscribeWith(
  smithEntity,
  () => {
    if (smithEntity.guid == null) {
      if (confirm('Someone deleted Mr. Smith! Do you want to restore him?')) {
        smithEntity.$save();
      }
    } else {
      alert("Mr. Smith's entity has changed!");
    }
  },
  (e) => {
    alert('Error: ' + e.textStatus);
  },
  (count) => {
    console.log(\`There are now \${count} users watching Mr. Smith.\`);
  }
);

onDestroy(() => {
  subscription.unsubscribe();
});`}}),{c(){b=new Ce(!1),j=xe(),U=n(),t=i("section"),p=i("header"),p.innerHTML=be,R=n(),$=i("p"),$.textContent=pe,F=n(),d=i("p"),K=H("Before we get started, you can follow the "),S=i("a"),V=H("PubSub Server Package"),X=H(" page to set up a Nymph PubSub server."),Z=n(),x=i("p"),x.innerHTML=de,ee=n(),z(g.$$.fragment),te=n(),E=i("p"),E.textContent=ge,ae=n(),z(f.$$.fragment),se=n(),T=i("p"),T.innerHTML=fe,ne=n(),z(y.$$.fragment),re=n(),P=i("p"),P.innerHTML=ye,ie=n(),z(v.$$.fragment),oe=n(),C=i("p"),C.textContent=ve,ue=n(),k=i("p"),k.textContent=we,A=n(),l=i("section"),c=i("a"),le=H("Previous: Entity Querying"),ce=n(),h=i("a"),he=H("Next: Entity Class"),this.h()},l(s){const w=ke("svelte-4wlam7",document.head);b=qe(w,!1),j=xe(),w.forEach(u),U=r(s),t=o(s,"SECTION",{});var a=q(t);p=o(a,"HEADER",{class:!0,"data-svelte-h":!0}),m(p)!=="svelte-1wxvjwc"&&(p.innerHTML=be),R=r(a),$=o(a,"P",{"data-svelte-h":!0}),m($)!=="svelte-zptfod"&&($.textContent=pe),F=r(a),d=o(a,"P",{});var D=q(d);K=M(D,"Before we get started, you can follow the "),S=o(D,"A",{href:!0});var _e=q(S);V=M(_e,"PubSub Server Package"),_e.forEach(u),X=M(D," page to set up a Nymph PubSub server."),D.forEach(u),Z=r(a),x=o(a,"P",{"data-svelte-h":!0}),m(x)!=="svelte-1nwoqjz"&&(x.innerHTML=de),ee=r(a),Q(g.$$.fragment,a),te=r(a),E=o(a,"P",{"data-svelte-h":!0}),m(E)!=="svelte-sbbhjn"&&(E.textContent=ge),ae=r(a),Q(f.$$.fragment,a),se=r(a),T=o(a,"P",{"data-svelte-h":!0}),m(T)!=="svelte-107lklx"&&(T.innerHTML=fe),ne=r(a),Q(y.$$.fragment,a),re=r(a),P=o(a,"P",{"data-svelte-h":!0}),m(P)!=="svelte-1hyvonj"&&(P.innerHTML=ye),ie=r(a),Q(v.$$.fragment,a),oe=r(a),C=o(a,"P",{"data-svelte-h":!0}),m(C)!=="svelte-1uz9efr"&&(C.textContent=ve),ue=r(a),k=o(a,"P",{"data-svelte-h":!0}),m(k)!=="svelte-1p6g7on"&&(k.textContent=we),a.forEach(u),A=r(s),l=o(s,"SECTION",{class:!0});var N=q(l);c=o(N,"A",{href:!0,class:!0,style:!0});var $e=q(c);le=M($e,"Previous: Entity Querying"),$e.forEach(u),ce=r(N),h=o(N,"A",{href:!0,class:!0,style:!0});var Se=q(h);he=M(Se,"Next: Entity Class"),Se.forEach(u),N.forEach(u),this.h()},h(){document.title="Subscribing to Queries - User Guide - Nymph.js",b.a=j,_(p,"class","major"),_(S,"href",me+"/packages/pubsub/"),_(c,"href",me+"/user-guide/entity-querying"),_(c,"class","button"),Ee(c,"margin",".5em"),_(h,"href",me+"/user-guide/entity-class"),_(h,"class","button"),Ee(h,"margin",".5em"),_(l,"class","page-steps")},m(s,w){b.m(Ue,document.head),e(document.head,j),I(s,U,w),I(s,t,w),e(t,p),e(t,R),e(t,$),e(t,F),e(t,d),e(d,K),e(d,S),e(S,V),e(d,X),e(t,Z),e(t,x),e(t,ee),W(g,t,null),e(t,te),e(t,E),e(t,ae),W(f,t,null),e(t,se),e(t,T),e(t,ne),W(y,t,null),e(t,re),e(t,P),e(t,ie),W(v,t,null),e(t,oe),e(t,C),e(t,ue),e(t,k),I(s,A,w),I(s,l,w),e(l,c),e(c,le),e(l,ce),e(l,h),e(h,he),L=!0},p:je,i(s){L||(Y(g.$$.fragment,s),Y(f.$$.fragment,s),Y(y.$$.fragment,s),Y(v.$$.fragment,s),L=!0)},o(s){B(g.$$.fragment,s),B(f.$$.fragment,s),B(y.$$.fragment,s),B(v.$$.fragment,s),L=!1},d(s){s&&(b.d(),u(U),u(t),u(A),u(l)),u(j),O(g),O(f),O(y),O(v)}}}class Qe extends He{constructor(b){super(),Me(this,b,null,Ae,Pe,{})}}export{Qe as component};
