import{S as it,i as ot,s as ut,R as ct,e as rt,a as l,k as o,q as n,y as J,F as lt,T as ht,h as a,c as h,l as u,m as c,r as i,z as K,p as Qe,n as P,C as e,b as L,A as V,D as bt,g as X,d as Z,B as ee}from"../chunks/index.d7cc8d8b.js";import{H as te,g as dt}from"../chunks/github.df9008b1.js";import{t as ae}from"../chunks/typescript.7dd1ec19.js";import{b as Be}from"../chunks/paths.d307dac8.js";function pt(nt){let g,x,M,t,T,q,se,re,A,ne,ie,v,oe,k,ue,ce,le,b,he,U,be,de,O,pe,me,ye,w,fe,N,ge,ve,E,we,d,Ee,W,Se,_e,H,$e,Pe,Te,S,qe,p,ke,I,De,je,Y,Ce,xe,Ae,_,Ue,Q,Oe,Ne,B,We,z,m,y,He,Ie,f,Ye,R;return w=new te({props:{language:ae,code:`let smiths: (User & UserData)[] = [];
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
);`}}),E=new te({props:{language:ae,code:`let smiths: (User & UserData)[] = [];
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
);`}}),S=new te({props:{language:ae,code:`let smiths: (User & UserData)[] = [];
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
});`}}),_=new te({props:{language:ae,code:`let subscription = pubsub.subscribeWith(
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
});`}}),{c(){g=new ct(!1),x=rt(),M=l(),t=o("section"),T=o("header"),q=o("h1"),se=n("Subscribing to Queries"),re=l(),A=o("p"),ne=n(`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),ie=l(),v=o("p"),oe=n("Before we get started, you can follow the "),k=o("a"),ue=n("PubSub Server Package"),ce=n(" page to set up a Nymph PubSub server."),le=l(),b=o("p"),he=n("You can use the "),U=o("code"),be=n("subscribeEntities"),de=n(` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),O=o("code"),pe=n("updateArray"),me=n(" uses to update the original array."),ye=l(),J(w.$$.fragment),fe=l(),N=o("p"),ge=n(`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),ve=l(),J(E.$$.fragment),we=l(),d=o("p"),Ee=n("To unsubscribe from the query, use the "),W=o("code"),Se=n("unsubscribe"),_e=n(` method on
    the
    `),H=o("code"),$e=n("PubSubSubscription"),Pe=n(" object returned by the function."),Te=l(),J(S.$$.fragment),qe=l(),p=o("p"),ke=n("You can subscribe to changes to an entity with the "),I=o("code"),De=n("subscribeWith"),je=n(`
    method. This method accepts the callbacks directly and returns a
    `),Y=o("code"),Ce=n("PubSubSubscription"),xe=n(`
    object.`),Ae=l(),J(_.$$.fragment),Ue=l(),Q=o("p"),Oe=n(`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),Ne=l(),B=o("p"),We=n(`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),z=l(),m=o("section"),y=o("a"),He=n("Previous: Entity Querying"),Ie=l(),f=o("a"),Ye=n("Next: Entity Class"),this.h()},l(r){const $=lt("svelte-4wlam7",document.head);g=ht($,!1),x=rt(),$.forEach(a),M=h(r),t=u(r,"SECTION",{});var s=c(t);T=u(s,"HEADER",{class:!0});var Me=c(T);q=u(Me,"H1",{style:!0});var ze=c(q);se=i(ze,"Subscribing to Queries"),ze.forEach(a),Me.forEach(a),re=h(s),A=u(s,"P",{});var Re=c(A);ne=i(Re,`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),Re.forEach(a),ie=h(s),v=u(s,"P",{});var F=c(v);oe=i(F,"Before we get started, you can follow the "),k=u(F,"A",{href:!0});var Fe=c(k);ue=i(Fe,"PubSub Server Package"),Fe.forEach(a),ce=i(F," page to set up a Nymph PubSub server."),F.forEach(a),le=h(s),b=u(s,"P",{});var D=c(b);he=i(D,"You can use the "),U=u(D,"CODE",{});var Ge=c(U);be=i(Ge,"subscribeEntities"),Ge.forEach(a),de=i(D,` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),O=u(D,"CODE",{});var Je=c(O);pe=i(Je,"updateArray"),Je.forEach(a),me=i(D," uses to update the original array."),D.forEach(a),ye=h(s),K(w.$$.fragment,s),fe=h(s),N=u(s,"P",{});var Ke=c(N);ge=i(Ke,`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),Ke.forEach(a),ve=h(s),K(E.$$.fragment,s),we=h(s),d=u(s,"P",{});var j=c(d);Ee=i(j,"To unsubscribe from the query, use the "),W=u(j,"CODE",{});var Le=c(W);Se=i(Le,"unsubscribe"),Le.forEach(a),_e=i(j,` method on
    the
    `),H=u(j,"CODE",{});var Ve=c(H);$e=i(Ve,"PubSubSubscription"),Ve.forEach(a),Pe=i(j," object returned by the function."),j.forEach(a),Te=h(s),K(S.$$.fragment,s),qe=h(s),p=u(s,"P",{});var C=c(p);ke=i(C,"You can subscribe to changes to an entity with the "),I=u(C,"CODE",{});var Xe=c(I);De=i(Xe,"subscribeWith"),Xe.forEach(a),je=i(C,`
    method. This method accepts the callbacks directly and returns a
    `),Y=u(C,"CODE",{});var Ze=c(Y);Ce=i(Ze,"PubSubSubscription"),Ze.forEach(a),xe=i(C,`
    object.`),C.forEach(a),Ae=h(s),K(_.$$.fragment,s),Ue=h(s),Q=u(s,"P",{});var et=c(Q);Oe=i(et,`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),et.forEach(a),Ne=h(s),B=u(s,"P",{});var tt=c(B);We=i(tt,`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),tt.forEach(a),s.forEach(a),z=h(r),m=u(r,"SECTION",{class:!0});var G=c(m);y=u(G,"A",{href:!0,class:!0,style:!0});var at=c(y);He=i(at,"Previous: Entity Querying"),at.forEach(a),Ie=h(G),f=u(G,"A",{href:!0,class:!0,style:!0});var st=c(f);Ye=i(st,"Next: Entity Class"),st.forEach(a),G.forEach(a),this.h()},h(){document.title="Subscribing to Queries - User Guide - Nymph.js",g.a=x,Qe(q,"font-size","3em"),P(T,"class","major"),P(k,"href",Be+"/packages/pubsub/"),P(y,"href",Be+"/user-guide/entity-querying"),P(y,"class","button"),Qe(y,"margin",".5em"),P(f,"href",Be+"/user-guide/entity-class"),P(f,"class","button"),Qe(f,"margin",".5em"),P(m,"class","page-steps")},m(r,$){g.m(dt,document.head),e(document.head,x),L(r,M,$),L(r,t,$),e(t,T),e(T,q),e(q,se),e(t,re),e(t,A),e(A,ne),e(t,ie),e(t,v),e(v,oe),e(v,k),e(k,ue),e(v,ce),e(t,le),e(t,b),e(b,he),e(b,U),e(U,be),e(b,de),e(b,O),e(O,pe),e(b,me),e(t,ye),V(w,t,null),e(t,fe),e(t,N),e(N,ge),e(t,ve),V(E,t,null),e(t,we),e(t,d),e(d,Ee),e(d,W),e(W,Se),e(d,_e),e(d,H),e(H,$e),e(d,Pe),e(t,Te),V(S,t,null),e(t,qe),e(t,p),e(p,ke),e(p,I),e(I,De),e(p,je),e(p,Y),e(Y,Ce),e(p,xe),e(t,Ae),V(_,t,null),e(t,Ue),e(t,Q),e(Q,Oe),e(t,Ne),e(t,B),e(B,We),L(r,z,$),L(r,m,$),e(m,y),e(y,He),e(m,Ie),e(m,f),e(f,Ye),R=!0},p:bt,i(r){R||(X(w.$$.fragment,r),X(E.$$.fragment,r),X(S.$$.fragment,r),X(_.$$.fragment,r),R=!0)},o(r){Z(w.$$.fragment,r),Z(E.$$.fragment,r),Z(S.$$.fragment,r),Z(_.$$.fragment,r),R=!1},d(r){a(x),r&&g.d(),r&&a(M),r&&a(t),ee(w),ee(E),ee(S),ee(_),r&&a(z),r&&a(m)}}}class vt extends it{constructor(g){super(),ot(this,g,null,pt,ut,{})}}export{vt as component};
