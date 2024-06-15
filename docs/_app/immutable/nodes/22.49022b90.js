import{S as Ne,i as Pe,s as De,R as ke,e as ye,a as l,k as i,q as h,y as _e,F as Ce,T as Ae,h as t,c as p,l as s,m as r,r as m,z as Ee,p as ve,n as q,C as e,b as L,A as be,D as Ue,g as we,d as $e,B as Ie}from"../chunks/index.d7cc8d8b.js";import{H as Te,g as He}from"../chunks/github.df9008b1.js";import{t as Oe}from"../chunks/typescript.7dd1ec19.js";import{b as Se}from"../chunks/paths.d307dac8.js";function qe(le){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Le={name:"plaintext",register:qe},je=Le;function ze(le){let u,I,A,n,_,E,j,z,T,F,G,N,R,X,d,v,P,B,J,W,b,D,K,M,Q,w,k,V,Y,Z,g,ee,C,te,ae,x,U,c,f,ne,ie,H,O;return g=new Te({props:{language:Oe,code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}}),x=new Te({props:{language:je,code:`#nex2
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
    newline="\\n"`}}),{c(){u=new ke(!1),I=ye(),A=l(),n=i("section"),_=i("header"),E=i("h1"),j=h("Export and Import"),z=l(),T=i("p"),F=h(`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),G=l(),N=i("p"),R=h("Nymph has the following methods for exporting and importing entities."),X=l(),d=i("ul"),v=i("li"),P=i("code"),B=h("export"),J=h(" - Export entities to a file."),W=l(),b=i("li"),D=i("code"),K=h("exportPrint"),M=h(" - Export entities to the console."),Q=l(),w=i("li"),k=i("code"),V=h("import"),Y=h(" - Import entities from a file."),Z=l(),_e(g.$$.fragment),ee=l(),C=i("p"),te=h(`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),ae=l(),_e(x.$$.fragment),U=l(),c=i("section"),f=i("a"),ne=h("Previous: Transactions"),ie=l(),H=i("span"),this.h()},l(a){const y=Ce("svelte-efizmr",document.head);u=Ae(y,!1),I=ye(),y.forEach(t),A=p(a),n=s(a,"SECTION",{});var o=r(n);_=s(o,"HEADER",{class:!0});var he=r(_);E=s(he,"H1",{style:!0});var pe=r(E);j=m(pe,"Export and Import"),pe.forEach(t),he.forEach(t),z=p(o),T=s(o,"P",{});var me=r(T);F=m(me,`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`),me.forEach(t),G=p(o),N=s(o,"P",{});var de=r(N);R=m(de,"Nymph has the following methods for exporting and importing entities."),de.forEach(t),X=p(o),d=s(o,"UL",{});var $=r(d);v=s($,"LI",{});var se=r(v);P=s(se,"CODE",{});var ce=r(P);B=m(ce,"export"),ce.forEach(t),J=m(se," - Export entities to a file."),se.forEach(t),W=p($),b=s($,"LI",{});var re=r(b);D=s(re,"CODE",{});var fe=r(D);K=m(fe,"exportPrint"),fe.forEach(t),M=m(re," - Export entities to the console."),re.forEach(t),Q=p($),w=s($,"LI",{});var oe=r(w);k=s(oe,"CODE",{});var ue=r(k);V=m(ue,"import"),ue.forEach(t),Y=m(oe," - Import entities from a file."),oe.forEach(t),$.forEach(t),Z=p(o),Ee(g.$$.fragment,o),ee=p(o),C=s(o,"P",{});var ge=r(C);te=m(ge,`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`),ge.forEach(t),ae=p(o),Ee(x.$$.fragment,o),o.forEach(t),U=p(a),c=s(a,"SECTION",{class:!0});var S=r(c);f=s(S,"A",{href:!0,class:!0,style:!0});var xe=r(f);ne=m(xe,"Previous: Transactions"),xe.forEach(t),ie=p(S),H=s(S,"SPAN",{}),r(H).forEach(t),S.forEach(t),this.h()},h(){document.title="Export and Import - User Guide - Nymph.js",u.a=I,ve(E,"font-size","3em"),q(_,"class","major"),q(f,"href",Se+"/user-guide/transactions"),q(f,"class","button"),ve(f,"margin",".5em"),q(c,"class","page-steps")},m(a,y){u.m(He,document.head),e(document.head,I),L(a,A,y),L(a,n,y),e(n,_),e(_,E),e(E,j),e(n,z),e(n,T),e(T,F),e(n,G),e(n,N),e(N,R),e(n,X),e(n,d),e(d,v),e(v,P),e(P,B),e(v,J),e(d,W),e(d,b),e(b,D),e(D,K),e(b,M),e(d,Q),e(d,w),e(w,k),e(k,V),e(w,Y),e(n,Z),be(g,n,null),e(n,ee),e(n,C),e(C,te),e(n,ae),be(x,n,null),L(a,U,y),L(a,c,y),e(c,f),e(f,ne),e(c,ie),e(c,H),O=!0},p:Ue,i(a){O||(we(g.$$.fragment,a),we(x.$$.fragment,a),O=!0)},o(a){$e(g.$$.fragment,a),$e(x.$$.fragment,a),O=!1},d(a){t(I),a&&u.d(),a&&t(A),a&&t(n),Ie(g),Ie(x),a&&t(U),a&&t(c)}}}class Be extends Ne{constructor(u){super(),Pe(this,u,null,ze,De,{})}}export{Be as component};
