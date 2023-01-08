import{S as Ce,i as Ue,s as He,R as Oe,e as we,a as l,k as n,q as d,w as Ie,E as Ae,T as Se,h as t,c as h,l as s,m as r,r as m,x as $e,p as he,n as N,C as e,b as z,y as Te,B as qe,f as De,t as Ne,z as Pe}from"../../../../chunks/index-8e853c83.js";import{H as ke,g as Le}from"../../../../chunks/github-07e092b5.js";import{t as je}from"../../../../chunks/typescript-7dd1ec19.js";import{b as ze}from"../../../../chunks/paths-b4419565.js";function Ve(me){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Fe={name:"plaintext",register:Ve},Ge=Fe;function Re(me){let u,P,S,i,E,_,V,F,k,G,R,C,X,B,c,y,U,J,W,K,b,H,M,Q,Y,w,O,Z,ee,te,g,ae,A,ie,ne,v,q,I,p,$,f,se,re,T,L;return g=new ke({props:{language:je,code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}}),v=new ke({props:{language:Ge,code:`#nex2
# The above line must be the first thing in the file.
# Comments begin with #
   # And can have white space before them.
# This defines a UID.
<name/of/uid>[5]
<another uid>[8000]
# For UIDs, the name is in angle brackets (<>) and the value follows
# in square brackets ([]).
# This starts a new entity.
{1234abcd}<etype>[tag,list,with,commas]
# For entities, the GUID is in curly brackets ({}), then the etype in
#  angle brackets, then the comma separated tag list follows in square
#  brackets ([]).
# Properties are stored like this:
# propname=JSON.stringify(value)
    abilities=["system/all"]
    groups=[]
    inheritAbilities=false
    name="admin"
# White space before/after "=" and at beginning/end of line is ignored.
        username  =     "admin"
{2}<etype>[tag,list]
    another="This is another entity."
    newline="\\n"`}}),{c(){u=new Oe(!1),P=we(),S=l(),i=n("section"),E=n("header"),_=n("h1"),V=d("Export and Import"),F=l(),k=n("p"),G=d(`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),R=l(),C=n("p"),X=d("Nymph has the following methods for exporting and importing entities."),B=l(),c=n("ul"),y=n("li"),U=n("code"),J=d("export"),W=d(" - Export entities to a file."),K=l(),b=n("li"),H=n("code"),M=d("exportPrint"),Q=d(` - Export entities to the client as a downloadable
      file.`),Y=l(),w=n("li"),O=n("code"),Z=d("import"),ee=d(" - Import entities from a file."),te=l(),Ie(g.$$.fragment),ae=l(),A=n("p"),ie=d(`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),ne=l(),Ie(v.$$.fragment),q=l(),I=n("section"),p=n("div"),$=n("div"),f=n("a"),se=d("Previous: Transactions"),re=l(),T=n("div"),this.h()},l(a){const x=Ae("svelte-efizmr",document.head);u=Se(x,!1),P=we(),x.forEach(t),S=h(a),i=s(a,"SECTION",{});var o=r(i);E=s(o,"HEADER",{class:!0});var ce=r(E);_=s(ce,"H1",{style:!0});var pe=r(_);V=m(pe,"Export and Import"),pe.forEach(t),ce.forEach(t),F=h(o),k=s(o,"P",{});var fe=r(k);G=m(fe,`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),fe.forEach(t),R=h(o),C=s(o,"P",{});var ue=r(C);X=m(ue,"Nymph has the following methods for exporting and importing entities."),ue.forEach(t),B=h(o),c=s(o,"UL",{});var D=r(c);y=s(D,"LI",{});var oe=r(y);U=s(oe,"CODE",{});var ge=r(U);J=m(ge,"export"),ge.forEach(t),W=m(oe," - Export entities to a file."),oe.forEach(t),K=h(D),b=s(D,"LI",{});var le=r(b);H=s(le,"CODE",{});var ve=r(H);M=m(ve,"exportPrint"),ve.forEach(t),Q=m(le,` - Export entities to the client as a downloadable
      file.`),le.forEach(t),Y=h(D),w=s(D,"LI",{});var de=r(w);O=s(de,"CODE",{});var xe=r(O);Z=m(xe,"import"),xe.forEach(t),ee=m(de," - Import entities from a file."),de.forEach(t),D.forEach(t),te=h(o),$e(g.$$.fragment,o),ae=h(o),A=s(o,"P",{});var Ee=r(A);ie=m(Ee,`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),Ee.forEach(t),ne=h(o),$e(v.$$.fragment,o),o.forEach(t),q=h(a),I=s(a,"SECTION",{});var _e=r(I);p=s(_e,"DIV",{class:!0});var j=r(p);$=s(j,"DIV",{class:!0});var ye=r($);f=s(ye,"A",{href:!0,class:!0,style:!0});var be=r(f);se=m(be,"Previous: Transactions"),be.forEach(t),ye.forEach(t),re=h(j),T=s(j,"DIV",{class:!0,style:!0}),r(T).forEach(t),j.forEach(t),_e.forEach(t),this.h()},h(){document.title="Export and Import - User Guide - Nymph.js",u.a=P,he(_,"font-size","3em"),N(E,"class","major"),N(f,"href",ze+"/user-guide/transactions"),N(f,"class","button"),he(f,"margin",".5em"),N($,"class","col-6 col-12-small"),N(T,"class","col-6 col-12-small"),he(T,"text-align","end"),N(p,"class","row")},m(a,x){u.m(Le,document.head),e(document.head,P),z(a,S,x),z(a,i,x),e(i,E),e(E,_),e(_,V),e(i,F),e(i,k),e(k,G),e(i,R),e(i,C),e(C,X),e(i,B),e(i,c),e(c,y),e(y,U),e(U,J),e(y,W),e(c,K),e(c,b),e(b,H),e(H,M),e(b,Q),e(c,Y),e(c,w),e(w,O),e(O,Z),e(w,ee),e(i,te),Te(g,i,null),e(i,ae),e(i,A),e(A,ie),e(i,ne),Te(v,i,null),z(a,q,x),z(a,I,x),e(I,p),e(p,$),e($,f),e(f,se),e(p,re),e(p,T),L=!0},p:qe,i(a){L||(De(g.$$.fragment,a),De(v.$$.fragment,a),L=!0)},o(a){Ne(g.$$.fragment,a),Ne(v.$$.fragment,a),L=!1},d(a){t(P),a&&u.d(),a&&t(S),a&&t(i),Pe(g),Pe(v),a&&t(q),a&&t(I)}}}class Ke extends Ce{constructor(u){super(),Ue(this,u,null,Re,He,{})}}export{Ke as default};
