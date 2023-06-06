import{S as Jt,i as Kt,s as Vt,a as h,k as a,q as o,F as Xt,h as e,c as d,l as n,m as s,r,p as Ot,n as x,b as Q,C as t,D as St}from"../chunks/index.d7cc8d8b.js";import{b as Gt}from"../chunks/paths.3059cfc3.js";function Zt(Bt){let E,i,b,_,Y,$,D,z,G,O,B,J,g,S,K,V,X,u,w,P,Z,tt,et,N,A,at,nt,st,k,L,ot,rt,it,C,M,ct,lt,ht,I,W,dt,ut,mt,m,pt,j,yt,ft,q,vt,Et,bt,U,_t,R,p,y,gt,wt,f,Nt;return{c(){E=h(),i=a("section"),b=a("header"),_=a("h1"),Y=o("Transactions"),$=h(),D=a("p"),z=o(`In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage until the highest level transaction is
    committed. When a nested transaction is rolled back, the database will be in
    the state where the transaction above it started that nested transaction.`),G=h(),O=a("p"),B=o(`When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.`),J=h(),g=a("p"),S=a("code"),K=o("Nymph"),V=o(" has the following methods for managing transactions."),X=h(),u=a("ul"),w=a("li"),P=a("code"),Z=o("startTransaction"),tt=o(" - Start a named transaction."),et=h(),N=a("li"),A=a("code"),at=o("commit"),nt=o(" - Commit a named transaction."),st=h(),k=a("li"),L=a("code"),ot=o("rollback"),rt=o(" - Rollback a named transaction."),it=h(),C=a("li"),M=a("code"),ct=o("inTransaction"),lt=o(" - Check if Nymph is currently running within a transaction."),ht=h(),I=a("p"),W=a("code"),dt=o("startTransaction"),ut=o(` will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.`),mt=h(),m=a("p"),pt=o(`When you start a new transaction, entities retrieved from that transaction's
    Nymph instance will have that instance within their static `),j=a("code"),yt=o("nymph"),ft=o(`
    property and instance `),q=a("code"),vt=o("$nymph"),Et=o(` property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.`),bt=h(),U=a("p"),_t=o(`Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.`),R=h(),p=a("section"),y=a("a"),gt=o("Previous: UIDs"),wt=h(),f=a("a"),Nt=o("Next: Export and Import"),this.h()},l(l){Xt("svelte-opfhcg",document.head).forEach(e),E=d(l),i=n(l,"SECTION",{});var c=s(i);b=n(c,"HEADER",{class:!0});var Pt=s(b);_=n(Pt,"H1",{style:!0});var At=s(_);Y=r(At,"Transactions"),At.forEach(e),Pt.forEach(e),$=d(c),D=n(c,"P",{});var Lt=s(D);z=r(Lt,`In Node.js, Nymph supports nested transactions. Nothing will be permanently
    written to the database's storage until the highest level transaction is
    committed. When a nested transaction is rolled back, the database will be in
    the state where the transaction above it started that nested transaction.`),Lt.forEach(e),G=d(c),O=n(c,"P",{});var Mt=s(O);B=r(Mt,`When you start a transaction, you give it a name, then you can commit or
    roll back that transaction, by name. This means if you're doing transactions
    recursively, you should use a counter in your name. Nymph uses internal
    transactions that start with the "nymph-" prefix, so don't use that. You
    should be sure to commit or rollback transactions in the reverse order that
    they were started, or you might run into trouble.`),Mt.forEach(e),J=d(c),g=n(c,"P",{});var kt=s(g);S=n(kt,"CODE",{});var Wt=s(S);K=r(Wt,"Nymph"),Wt.forEach(e),V=r(kt," has the following methods for managing transactions."),kt.forEach(e),X=d(c),u=n(c,"UL",{});var v=s(u);w=n(v,"LI",{});var Ct=s(w);P=n(Ct,"CODE",{});var jt=s(P);Z=r(jt,"startTransaction"),jt.forEach(e),tt=r(Ct," - Start a named transaction."),Ct.forEach(e),et=d(v),N=n(v,"LI",{});var It=s(N);A=n(It,"CODE",{});var qt=s(A);at=r(qt,"commit"),qt.forEach(e),nt=r(It," - Commit a named transaction."),It.forEach(e),st=d(v),k=n(v,"LI",{});var Tt=s(k);L=n(Tt,"CODE",{});var Ut=s(L);ot=r(Ut,"rollback"),Ut.forEach(e),rt=r(Tt," - Rollback a named transaction."),Tt.forEach(e),it=d(v),C=n(v,"LI",{});var xt=s(C);M=n(xt,"CODE",{});var Ft=s(M);ct=r(Ft,"inTransaction"),Ft.forEach(e),lt=r(xt," - Check if Nymph is currently running within a transaction."),xt.forEach(e),v.forEach(e),ht=d(c),I=n(c,"P",{});var Dt=s(I);W=n(Dt,"CODE",{});var Rt=s(W);dt=r(Rt,"startTransaction"),Rt.forEach(e),ut=r(Dt,` will return a new instance of Nymph. For the rest
    of the transaction, until it is committed or rolled back, you should use this
    instance. It will be tied to a specific connection to the database.`),Dt.forEach(e),mt=d(c),m=n(c,"P",{});var T=s(m);pt=r(T,`When you start a new transaction, entities retrieved from that transaction's
    Nymph instance will have that instance within their static `),j=n(T,"CODE",{});var Ht=s(j);yt=r(Ht,"nymph"),Ht.forEach(e),ft=r(T,`
    property and instance `),q=n(T,"CODE",{});var Qt=s(q);vt=r(Qt,"$nymph"),Qt.forEach(e),Et=r(T,` property. As long as the entity code
    always uses these instances, every query and change should occur within that
    transaction.`),T.forEach(e),bt=d(c),U=n(c,"P",{});var Yt=s(U);_t=r(Yt,`Not all databases that Nymph supports (specifically, MySQL with an engine
    that doesn't support transactions, like the MyISAM engine) can use
    transactions. To ensure data consistency, it's highly recommended to use a
    configuration that supports transactions.`),Yt.forEach(e),c.forEach(e),R=d(l),p=n(l,"SECTION",{class:!0});var H=s(p);y=n(H,"A",{href:!0,class:!0,style:!0});var $t=s(y);gt=r($t,"Previous: UIDs"),$t.forEach(e),wt=d(H),f=n(H,"A",{href:!0,class:!0,style:!0});var zt=s(f);Nt=r(zt,"Next: Export and Import"),zt.forEach(e),H.forEach(e),this.h()},h(){document.title="Transactions - User Guide - Nymph.js",Ot(_,"font-size","3em"),x(b,"class","major"),x(y,"href",Gt+"/user-guide/uids"),x(y,"class","button"),Ot(y,"margin",".5em"),x(f,"href",Gt+"/user-guide/export-and-import"),x(f,"class","button"),Ot(f,"margin",".5em"),x(p,"class","page-steps")},m(l,F){Q(l,E,F),Q(l,i,F),t(i,b),t(b,_),t(_,Y),t(i,$),t(i,D),t(D,z),t(i,G),t(i,O),t(O,B),t(i,J),t(i,g),t(g,S),t(S,K),t(g,V),t(i,X),t(i,u),t(u,w),t(w,P),t(P,Z),t(w,tt),t(u,et),t(u,N),t(N,A),t(A,at),t(N,nt),t(u,st),t(u,k),t(k,L),t(L,ot),t(k,rt),t(u,it),t(u,C),t(C,M),t(M,ct),t(C,lt),t(i,ht),t(i,I),t(I,W),t(W,dt),t(I,ut),t(i,mt),t(i,m),t(m,pt),t(m,j),t(j,yt),t(m,ft),t(m,q),t(q,vt),t(m,Et),t(i,bt),t(i,U),t(U,_t),Q(l,R,F),Q(l,p,F),t(p,y),t(y,gt),t(p,wt),t(p,f),t(f,Nt)},p:St,i:St,o:St,d(l){l&&e(E),l&&e(i),l&&e(R),l&&e(p)}}}class ae extends Jt{constructor(E){super(),Kt(this,E,null,Zt,Vt,{})}}export{ae as component};