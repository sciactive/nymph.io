import{S as bt,i as dt,s as mt,a2 as L,a3 as X,a4 as pt,l as lt,k as l,e as o,t as n,w as Z,N as yt,a5 as ft,d as a,m as h,c as u,a as c,h as i,x as ee,f as te,b as p,a6 as gt,H as e,g as ae,y as se,I as vt,q as re,o as ne,B as ie}from"../../chunks/vendor-57c99eaa.js";import{b as ze}from"../../chunks/paths-396f020f.js";function wt(ht){let v,U,G,t,T,k,oe,ue,N,ce,le,w,he,D,be,de,me,b,pe,O,ye,fe,W,ge,ve,we,E,Ee,H,_e,Se,_,$e,d,qe,Y,Pe,Te,Q,ke,De,je,S,xe,m,Ce,B,Ae,Ie,M,Ue,Ne,Oe,$,We,V,He,Ye,z,Qe,R,j,y,x,f,Be,Me,q,g,Ve,F;return E=new L({props:{language:X,code:`let smiths: (User & UserData)[] = [];
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
);`}}),_=new L({props:{language:X,code:`let smiths: (User & UserData)[] = [];
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
);`}}),S=new L({props:{language:X,code:`let smiths: (User & UserData)[] = [];
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
});`}}),$=new L({props:{language:X,code:`let subscription = pubsub.subscribeWith(
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
});`}}),{c(){v=new pt,U=lt(),G=l(),t=o("section"),T=o("header"),k=o("h1"),oe=n("Subscribing to Queries"),ue=l(),N=o("p"),ce=n(`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),le=l(),w=o("p"),he=n("Before we get started, you can follow the "),D=o("a"),be=n("PubSub Server Package"),de=n(" page to set up a Nymph PubSub server."),me=l(),b=o("p"),pe=n("You can use the "),O=o("code"),ye=n("subscribeEntities"),fe=n(` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),W=o("code"),ge=n("updateArray"),ve=n(" uses to update the original array."),we=l(),Z(E.$$.fragment),Ee=l(),H=o("p"),_e=n(`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),Se=l(),Z(_.$$.fragment),$e=l(),d=o("p"),qe=n("To unsubscribe from the query, use the "),Y=o("code"),Pe=n("unsubscribe"),Te=n(` method on
    the
    `),Q=o("code"),ke=n("PubSubSubscription"),De=n(" object returned by the function."),je=l(),Z(S.$$.fragment),xe=l(),m=o("p"),Ce=n("You can subscribe to changes to an entity with the "),B=o("code"),Ae=n("subscribeWith"),Ie=n(`
    method. This method accepts the callbacks directly and returns a
    `),M=o("code"),Ue=n("PubSubSubscription"),Ne=n(`
    object.`),Oe=l(),Z($.$$.fragment),We=l(),V=o("p"),He=n(`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),Ye=l(),z=o("p"),Qe=n(`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),R=l(),j=o("section"),y=o("div"),x=o("div"),f=o("a"),Be=n("Previous: Entity Querying"),Me=l(),q=o("div"),g=o("a"),Ve=n("Next: Entity Class"),this.h()},l(r){const P=yt('[data-svelte="svelte-4wlam7"]',document.head);v=ft(P),U=lt(),P.forEach(a),G=h(r),t=u(r,"SECTION",{});var s=c(t);T=u(s,"HEADER",{class:!0});var Ge=c(T);k=u(Ge,"H1",{style:!0});var Re=c(k);oe=i(Re,"Subscribing to Queries"),Re.forEach(a),Ge.forEach(a),ue=h(s),N=u(s,"P",{});var Fe=c(N);ce=i(Fe,`Subscribing to a query lets you receive updates to that query. This is a
    powerful tool for collaborative apps. It's also just as easy as making a
    regular entity query.`),Fe.forEach(a),le=h(s),w=u(s,"P",{});var J=c(w);he=i(J,"Before we get started, you can follow the "),D=u(J,"A",{href:!0});var Je=c(D);be=i(Je,"PubSub Server Package"),Je.forEach(a),de=i(J," page to set up a Nymph PubSub server."),J.forEach(a),me=h(s),b=u(s,"P",{});var C=c(b);pe=i(C,"You can use the "),O=u(C,"CODE",{});var Ke=c(O);ye=i(Ke,"subscribeEntities"),Ke.forEach(a),fe=i(C,` method on PubSub to subscribe
    to a query. It will return a function you can call to subscribe to the
    query. That function accepts a resolve and reject callback, similar to a
    promise. The resolve function will receive an update, which will at first be
    an array of entities, then will be an update object with instructions that
    `),W=u(C,"CODE",{});var Le=c(W);ge=i(Le,"updateArray"),Le.forEach(a),ve=i(C," uses to update the original array."),C.forEach(a),we=h(s),ee(E.$$.fragment,s),Ee=h(s),H=u(s,"P",{});var Xe=c(H);_e=i(Xe,`You can also receive a count of how many subscribers there are to that
    query. The count is given to a third callback.`),Xe.forEach(a),Se=h(s),ee(_.$$.fragment,s),$e=h(s),d=u(s,"P",{});var A=c(d);qe=i(A,"To unsubscribe from the query, use the "),Y=u(A,"CODE",{});var Ze=c(Y);Pe=i(Ze,"unsubscribe"),Ze.forEach(a),Te=i(A,` method on
    the
    `),Q=u(A,"CODE",{});var et=c(Q);ke=i(et,"PubSubSubscription"),et.forEach(a),De=i(A," object returned by the function."),A.forEach(a),je=h(s),ee(S.$$.fragment,s),xe=h(s),m=u(s,"P",{});var I=c(m);Ce=i(I,"You can subscribe to changes to an entity with the "),B=u(I,"CODE",{});var tt=c(B);Ae=i(tt,"subscribeWith"),tt.forEach(a),Ie=i(I,`
    method. This method accepts the callbacks directly and returns a
    `),M=u(I,"CODE",{});var at=c(M);Ue=i(at,"PubSubSubscription"),at.forEach(a),Ne=i(I,`
    object.`),I.forEach(a),Oe=h(s),ee($.$$.fragment,s),We=h(s),V=u(s,"P",{});var st=c(V);He=i(st,`Warning: Subscriptions can lead to resource leaks if left open. Take care to
    unsubscribe to every query you are no longer watching.`),st.forEach(a),Ye=h(s),z=u(s,"P",{});var rt=c(z);Qe=i(rt,`Warning: The PubSub server is smart about removing entities that no longer
    match when a new entity matches, but there are some queries that can have
    changes in their matching entities without any change to the server (like
    relative time queries). These queries won't necessarily be updated correctly
    in due time by the PubSub server.`),rt.forEach(a),s.forEach(a),R=h(r),j=u(r,"SECTION",{});var nt=c(j);y=u(nt,"DIV",{class:!0});var K=c(y);x=u(K,"DIV",{class:!0});var it=c(x);f=u(it,"A",{href:!0,class:!0,style:!0});var ot=c(f);Be=i(ot,"Previous: Entity Querying"),ot.forEach(a),it.forEach(a),Me=h(K),q=u(K,"DIV",{class:!0,style:!0});var ut=c(q);g=u(ut,"A",{href:!0,class:!0,style:!0});var ct=c(g);Ve=i(ct,"Next: Entity Class"),ct.forEach(a),ut.forEach(a),K.forEach(a),nt.forEach(a),this.h()},h(){document.title="Subscribing to Queries - User Guide - Nymph.js",v.a=U,te(k,"font-size","3em"),p(T,"class","major"),p(D,"href",""+(ze+"/packages/pubsub/")),p(f,"href",""+(ze+"/user-guide/entity-querying")),p(f,"class","button"),te(f,"margin",".5em"),p(x,"class","col-6 col-12-small"),p(g,"href",""+(ze+"/user-guide/entity-class")),p(g,"class","button"),te(g,"margin",".5em"),p(q,"class","col-6 col-12-small"),te(q,"text-align","end"),p(y,"class","row")},m(r,P){v.m(gt,document.head),e(document.head,U),ae(r,G,P),ae(r,t,P),e(t,T),e(T,k),e(k,oe),e(t,ue),e(t,N),e(N,ce),e(t,le),e(t,w),e(w,he),e(w,D),e(D,be),e(w,de),e(t,me),e(t,b),e(b,pe),e(b,O),e(O,ye),e(b,fe),e(b,W),e(W,ge),e(b,ve),e(t,we),se(E,t,null),e(t,Ee),e(t,H),e(H,_e),e(t,Se),se(_,t,null),e(t,$e),e(t,d),e(d,qe),e(d,Y),e(Y,Pe),e(d,Te),e(d,Q),e(Q,ke),e(d,De),e(t,je),se(S,t,null),e(t,xe),e(t,m),e(m,Ce),e(m,B),e(B,Ae),e(m,Ie),e(m,M),e(M,Ue),e(m,Ne),e(t,Oe),se($,t,null),e(t,We),e(t,V),e(V,He),e(t,Ye),e(t,z),e(z,Qe),ae(r,R,P),ae(r,j,P),e(j,y),e(y,x),e(x,f),e(f,Be),e(y,Me),e(y,q),e(q,g),e(g,Ve),F=!0},p:vt,i(r){F||(re(E.$$.fragment,r),re(_.$$.fragment,r),re(S.$$.fragment,r),re($.$$.fragment,r),F=!0)},o(r){ne(E.$$.fragment,r),ne(_.$$.fragment,r),ne(S.$$.fragment,r),ne($.$$.fragment,r),F=!1},d(r){a(U),r&&v.d(),r&&a(G),r&&a(t),ie(E),ie(_),ie(S),ie($),r&&a(R),r&&a(j)}}}class St extends bt{constructor(v){super();dt(this,v,null,wt,mt,{})}}export{St as default};
