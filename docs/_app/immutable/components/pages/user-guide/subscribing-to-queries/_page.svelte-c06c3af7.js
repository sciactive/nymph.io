import{S as bt,i as dt,s as mt,R as pt,e as lt,a as l,k as o,q as n,w as L,E as ft,T as yt,h as a,c as h,l as u,m as c,r as i,x as X,p as Z,n as p,C as e,b as ee,y as te,B as gt,f as ae,t as se,z as re}from"../../../../chunks/index-8e853c83.js";import{H as ne,g as vt}from"../../../../chunks/github-07e092b5.js";import{t as ie}from"../../../../chunks/typescript-7dd1ec19.js";import{b as ze}from"../../../../chunks/paths-b4419565.js";function wt(ht){let v,I,R,t,q,k,oe,ue,O,ce,le,w,he,D,be,de,me,b,pe,N,fe,ye,W,ge,ve,we,E,Ee,H,_e,Se,_,$e,d,Pe,Y,Te,qe,Q,ke,De,je,S,xe,m,Ce,B,Ae,Ue,M,Ie,Oe,Ne,$,We,V,He,Ye,z,Qe,G,j,f,x,y,Be,Me,P,g,Ve,F;return E=new ne({props:{language:ie,code:`let smiths: (User & UserData)[] = [];
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
);`}}),_=new ne({props:{language:ie,code:`let smiths: (User & UserData)[] = [];
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
);`}}),S=new ne({props:{language:ie,code:`let smiths: (User & UserData)[] = [];
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
});`}}),$=new ne({props:{language:ie,code:`let subscription = pubsub.subscribeWith(
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
});`}}),{c(){v=new pt(!1),I=lt(),R=l(),t=o("section"),q=o("header"),k=o("h1"),oe=n("Subscribing to Queries"),ue=l(),O=o("p"),ce=n(`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),le=l(),w=o("p"),he=n("Before we get started, you can follow the "),D=o("a"),be=n("PubSub Server Package"),de=n(" page to set up a Nymph PubSub server."),me=l(),b=o("p"),pe=n("You can use the "),N=o("code"),fe=n("subscribeEntities"),ye=n(` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),W=o("code"),ge=n("updateArray"),ve=n(" uses to update the original array."),we=l(),L(E.$$.fragment),Ee=l(),H=o("p"),_e=n(`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),Se=l(),L(_.$$.fragment),$e=l(),d=o("p"),Pe=n("To unsubscribe from the query, use the "),Y=o("code"),Te=n("unsubscribe"),qe=n(` method on
    the
    `),Q=o("code"),ke=n("PubSubSubscription"),De=n(" object returned by the function."),je=l(),L(S.$$.fragment),xe=l(),m=o("p"),Ce=n("You can subscribe to changes to an entity with the "),B=o("code"),Ae=n("subscribeWith"),Ue=n(`
    method. This method accepts the callbacks directly and returns a
    `),M=o("code"),Ie=n("PubSubSubscription"),Oe=n(`
    object.`),Ne=l(),L($.$$.fragment),We=l(),V=o("p"),He=n(`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),Ye=l(),z=o("p"),Qe=n(`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),G=l(),j=o("section"),f=o("div"),x=o("div"),y=o("a"),Be=n("Previous: Entity Querying"),Me=l(),P=o("div"),g=o("a"),Ve=n("Next: Entity Class"),this.h()},l(r){const T=ft("svelte-4wlam7",document.head);v=yt(T,!1),I=lt(),T.forEach(a),R=h(r),t=u(r,"SECTION",{});var s=c(t);q=u(s,"HEADER",{class:!0});var Re=c(q);k=u(Re,"H1",{style:!0});var Ge=c(k);oe=i(Ge,"Subscribing to Queries"),Ge.forEach(a),Re.forEach(a),ue=h(s),O=u(s,"P",{});var Fe=c(O);ce=i(Fe,`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),Fe.forEach(a),le=h(s),w=u(s,"P",{});var J=c(w);he=i(J,"Before we get started, you can follow the "),D=u(J,"A",{href:!0});var Je=c(D);be=i(Je,"PubSub Server Package"),Je.forEach(a),de=i(J," page to set up a Nymph PubSub server."),J.forEach(a),me=h(s),b=u(s,"P",{});var C=c(b);pe=i(C,"You can use the "),N=u(C,"CODE",{});var Ke=c(N);fe=i(Ke,"subscribeEntities"),Ke.forEach(a),ye=i(C,` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),W=u(C,"CODE",{});var Le=c(W);ge=i(Le,"updateArray"),Le.forEach(a),ve=i(C," uses to update the original array."),C.forEach(a),we=h(s),X(E.$$.fragment,s),Ee=h(s),H=u(s,"P",{});var Xe=c(H);_e=i(Xe,`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),Xe.forEach(a),Se=h(s),X(_.$$.fragment,s),$e=h(s),d=u(s,"P",{});var A=c(d);Pe=i(A,"To unsubscribe from the query, use the "),Y=u(A,"CODE",{});var Ze=c(Y);Te=i(Ze,"unsubscribe"),Ze.forEach(a),qe=i(A,` method on
    the
    `),Q=u(A,"CODE",{});var et=c(Q);ke=i(et,"PubSubSubscription"),et.forEach(a),De=i(A," object returned by the function."),A.forEach(a),je=h(s),X(S.$$.fragment,s),xe=h(s),m=u(s,"P",{});var U=c(m);Ce=i(U,"You can subscribe to changes to an entity with the "),B=u(U,"CODE",{});var tt=c(B);Ae=i(tt,"subscribeWith"),tt.forEach(a),Ue=i(U,`
    method. This method accepts the callbacks directly and returns a
    `),M=u(U,"CODE",{});var at=c(M);Ie=i(at,"PubSubSubscription"),at.forEach(a),Oe=i(U,`
    object.`),U.forEach(a),Ne=h(s),X($.$$.fragment,s),We=h(s),V=u(s,"P",{});var st=c(V);He=i(st,`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),st.forEach(a),Ye=h(s),z=u(s,"P",{});var rt=c(z);Qe=i(rt,`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),rt.forEach(a),s.forEach(a),G=h(r),j=u(r,"SECTION",{});var nt=c(j);f=u(nt,"DIV",{class:!0});var K=c(f);x=u(K,"DIV",{class:!0});var it=c(x);y=u(it,"A",{href:!0,class:!0,style:!0});var ot=c(y);Be=i(ot,"Previous: Entity Querying"),ot.forEach(a),it.forEach(a),Me=h(K),P=u(K,"DIV",{class:!0,style:!0});var ut=c(P);g=u(ut,"A",{href:!0,class:!0,style:!0});var ct=c(g);Ve=i(ct,"Next: Entity Class"),ct.forEach(a),ut.forEach(a),K.forEach(a),nt.forEach(a),this.h()},h(){document.title="Subscribing to Queries - User Guide - Nymph.js",v.a=I,Z(k,"font-size","3em"),p(q,"class","major"),p(D,"href",ze+"/packages/pubsub/"),p(y,"href",ze+"/user-guide/entity-querying"),p(y,"class","button"),Z(y,"margin",".5em"),p(x,"class","col-6 col-12-small"),p(g,"href",ze+"/user-guide/entity-class"),p(g,"class","button"),Z(g,"margin",".5em"),p(P,"class","col-6 col-12-small"),Z(P,"text-align","end"),p(f,"class","row")},m(r,T){v.m(vt,document.head),e(document.head,I),ee(r,R,T),ee(r,t,T),e(t,q),e(q,k),e(k,oe),e(t,ue),e(t,O),e(O,ce),e(t,le),e(t,w),e(w,he),e(w,D),e(D,be),e(w,de),e(t,me),e(t,b),e(b,pe),e(b,N),e(N,fe),e(b,ye),e(b,W),e(W,ge),e(b,ve),e(t,we),te(E,t,null),e(t,Ee),e(t,H),e(H,_e),e(t,Se),te(_,t,null),e(t,$e),e(t,d),e(d,Pe),e(d,Y),e(Y,Te),e(d,qe),e(d,Q),e(Q,ke),e(d,De),e(t,je),te(S,t,null),e(t,xe),e(t,m),e(m,Ce),e(m,B),e(B,Ae),e(m,Ue),e(m,M),e(M,Ie),e(m,Oe),e(t,Ne),te($,t,null),e(t,We),e(t,V),e(V,He),e(t,Ye),e(t,z),e(z,Qe),ee(r,G,T),ee(r,j,T),e(j,f),e(f,x),e(x,y),e(y,Be),e(f,Me),e(f,P),e(P,g),e(g,Ve),F=!0},p:gt,i(r){F||(ae(E.$$.fragment,r),ae(_.$$.fragment,r),ae(S.$$.fragment,r),ae($.$$.fragment,r),F=!0)},o(r){se(E.$$.fragment,r),se(_.$$.fragment,r),se(S.$$.fragment,r),se($.$$.fragment,r),F=!1},d(r){a(I),r&&v.d(),r&&a(R),r&&a(t),re(E),re(_),re(S),re($),r&&a(G),r&&a(j)}}}class Pt extends bt{constructor(v){super(),dt(this,v,null,wt,mt,{})}}export{Pt as default};
