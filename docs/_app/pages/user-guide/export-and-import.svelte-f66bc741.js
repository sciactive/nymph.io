import{S as Ce,i as Ue,s as He,a2 as be,a3 as Oe,a4 as qe,l as we,k as l,e as s,t as d,w as Ie,N as Se,a5 as je,d as t,m as h,c as n,a as r,h as c,x as $e,f as he,b as D,a6 as Ae,H as e,g as V,y as Te,I as Le,q as Ne,o as De,B as ke}from"../../chunks/vendor-57c99eaa.js";import{b as Ve}from"../../chunks/paths-396f020f.js";function ze(Pe){let u,k,S,i,y,E,z,F,P,G,X,C,B,J,m,x,U,R,W,K,b,H,M,Q,Y,w,O,Z,ee,te,g,ae,q,ie,se,v,j,I,p,$,f,ne,re,T,A;return g=new be({props:{language:Oe,code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}}),v=new be({props:{code:`#nex2
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
    newline="\\n"`}}),{c(){u=new qe,k=we(),S=l(),i=s("section"),y=s("header"),E=s("h1"),z=d("Export and Import"),F=l(),P=s("p"),G=d(`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),X=l(),C=s("p"),B=d("Nymph has the following methods for exporting and importing entities."),J=l(),m=s("ul"),x=s("li"),U=s("code"),R=d("export"),W=d(" - Export entities to a file."),K=l(),b=s("li"),H=s("code"),M=d("exportPrint"),Q=d(` - Export entities to the client as a downloadable
      file.`),Y=l(),w=s("li"),O=s("code"),Z=d("import"),ee=d(" - Import entities from a file."),te=l(),Ie(g.$$.fragment),ae=l(),q=s("p"),ie=d(`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),se=l(),Ie(v.$$.fragment),j=l(),I=s("section"),p=s("div"),$=s("div"),f=s("a"),ne=d("Previous: Transactions"),re=l(),T=s("div"),this.h()},l(a){const _=Se('[data-svelte="svelte-efizmr"]',document.head);u=je(_),k=we(),_.forEach(t),S=h(a),i=n(a,"SECTION",{});var o=r(i);y=n(o,"HEADER",{class:!0});var ce=r(y);E=n(ce,"H1",{style:!0});var me=r(E);z=c(me,"Export and Import"),me.forEach(t),ce.forEach(t),F=h(o),P=n(o,"P",{});var pe=r(P);G=c(pe,`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),pe.forEach(t),X=h(o),C=n(o,"P",{});var fe=r(C);B=c(fe,"Nymph has the following methods for exporting and importing entities."),fe.forEach(t),J=h(o),m=n(o,"UL",{});var N=r(m);x=n(N,"LI",{});var oe=r(x);U=n(oe,"CODE",{});var ue=r(U);R=c(ue,"export"),ue.forEach(t),W=c(oe," - Export entities to a file."),oe.forEach(t),K=h(N),b=n(N,"LI",{});var le=r(b);H=n(le,"CODE",{});var ge=r(H);M=c(ge,"exportPrint"),ge.forEach(t),Q=c(le,` - Export entities to the client as a downloadable
      file.`),le.forEach(t),Y=h(N),w=n(N,"LI",{});var de=r(w);O=n(de,"CODE",{});var ve=r(O);Z=c(ve,"import"),ve.forEach(t),ee=c(de," - Import entities from a file."),de.forEach(t),N.forEach(t),te=h(o),$e(g.$$.fragment,o),ae=h(o),q=n(o,"P",{});var _e=r(q);ie=c(_e,`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),_e.forEach(t),se=h(o),$e(v.$$.fragment,o),o.forEach(t),j=h(a),I=n(a,"SECTION",{});var ye=r(I);p=n(ye,"DIV",{class:!0});var L=r(p);$=n(L,"DIV",{class:!0});var Ee=r($);f=n(Ee,"A",{href:!0,class:!0,style:!0});var xe=r(f);ne=c(xe,"Previous: Transactions"),xe.forEach(t),Ee.forEach(t),re=h(L),T=n(L,"DIV",{class:!0,style:!0}),r(T).forEach(t),L.forEach(t),ye.forEach(t),this.h()},h(){document.title="Export and Import - User Guide - Nymph.js",u.a=k,he(E,"font-size","3em"),D(y,"class","major"),D(f,"href",""+(Ve+"/user-guide/transactions")),D(f,"class","button"),he(f,"margin",".5em"),D($,"class","col-6 col-12-small"),D(T,"class","col-6 col-12-small"),he(T,"text-align","end"),D(p,"class","row")},m(a,_){u.m(Ae,document.head),e(document.head,k),V(a,S,_),V(a,i,_),e(i,y),e(y,E),e(E,z),e(i,F),e(i,P),e(P,G),e(i,X),e(i,C),e(C,B),e(i,J),e(i,m),e(m,x),e(x,U),e(U,R),e(x,W),e(m,K),e(m,b),e(b,H),e(H,M),e(b,Q),e(m,Y),e(m,w),e(w,O),e(O,Z),e(w,ee),e(i,te),Te(g,i,null),e(i,ae),e(i,q),e(q,ie),e(i,se),Te(v,i,null),V(a,j,_),V(a,I,_),e(I,p),e(p,$),e($,f),e(f,ne),e(p,re),e(p,T),A=!0},p:Le,i(a){A||(Ne(g.$$.fragment,a),Ne(v.$$.fragment,a),A=!0)},o(a){De(g.$$.fragment,a),De(v.$$.fragment,a),A=!1},d(a){t(k),a&&u.d(),a&&t(S),a&&t(i),ke(g),ke(v),a&&t(j),a&&t(I)}}}class Xe extends Ce{constructor(u){super();Ue(this,u,null,ze,He,{})}}export{Xe as default};
