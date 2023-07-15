import{s as Z,I as ee,e as R,a as r,f as o,l as te,x as ne,J as ae,d as s,c as l,g as m,h as I,r as b,m as se,j as P,k as ie,u as n,i as H,v as re}from"../chunks/scheduler.d7e45cc8.js";import{S as oe,i as le,b as W,d as X,m as B,a as K,t as Q,e as V}from"../chunks/index.77720afb.js";import{H as Y,g as me}from"../chunks/github.64534d2c.js";import{t as he}from"../chunks/typescript.09c48802.js";import{b as pe}from"../chunks/paths.dbb47c61.js";function ce(L){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const de={name:"plaintext",register:ce},fe=de;function ue(L){let p,y,$,e,c,M='<h1 style="font-size: 3em;">Export and Import</h1>',N,g,z=`Nymph provides a method for exporting and importing its entities and UIDs,
    regardless of which driver is currently in use. This allows backup, restore,
    duplication, or transferring an entire database, even with different
    database drivers.`,k,x,O="Nymph has the following methods for exporting and importing entities.",A,_,F="<li><code>export</code> - Export entities to a file.</li> <li><code>exportPrint</code> - Export entities to the console.</li> <li><code>import</code> - Import entities from a file.</li>",S,d,U,v,G=`The format of a Nymph export file is simple, and readable by all drivers.
    The file extension, nex, stands for Nymph Entity eXchange.`,j,f,E,i,h,q,D,T,C;return d=new Y({props:{language:he,code:`// Export entities to a file.
nymph.export(filename);

// Export entities to the console.
nymph.exportPrint();

// Import entities from a file.
nymph.import(filename);`}}),f=new Y({props:{language:fe,code:`#nex2
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
    newline="\\n"`}}),{c(){p=new ee(!1),y=R(),$=r(),e=o("section"),c=o("header"),c.innerHTML=M,N=r(),g=o("p"),g.textContent=z,k=r(),x=o("p"),x.textContent=O,A=r(),_=o("ul"),_.innerHTML=F,S=r(),W(d.$$.fragment),U=r(),v=o("p"),v.textContent=G,j=r(),W(f.$$.fragment),E=r(),i=o("section"),h=o("a"),q=te("Previous: Transactions"),D=r(),T=o("span"),this.h()},l(t){const u=ne("svelte-efizmr",document.head);p=ae(u,!1),y=R(),u.forEach(s),$=l(t),e=m(t,"SECTION",{});var a=I(e);c=m(a,"HEADER",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1g2nrve"&&(c.innerHTML=M),N=l(a),g=m(a,"P",{"data-svelte-h":!0}),b(g)!=="svelte-1j8yzcq"&&(g.textContent=z),k=l(a),x=m(a,"P",{"data-svelte-h":!0}),b(x)!=="svelte-1mscffm"&&(x.textContent=O),A=l(a),_=m(a,"UL",{"data-svelte-h":!0}),b(_)!=="svelte-1rx3iut"&&(_.innerHTML=F),S=l(a),X(d.$$.fragment,a),U=l(a),v=m(a,"P",{"data-svelte-h":!0}),b(v)!=="svelte-q1go0x"&&(v.textContent=G),j=l(a),X(f.$$.fragment,a),a.forEach(s),E=l(t),i=m(t,"SECTION",{class:!0});var w=I(i);h=m(w,"A",{href:!0,class:!0,style:!0});var J=I(h);q=se(J,"Previous: Transactions"),J.forEach(s),D=l(w),T=m(w,"SPAN",{}),I(T).forEach(s),w.forEach(s),this.h()},h(){document.title="Export and Import - User Guide - Nymph.js",p.a=y,P(c,"class","major"),P(h,"href",pe+"/user-guide/transactions"),P(h,"class","button"),ie(h,"margin",".5em"),P(i,"class","page-steps")},m(t,u){p.m(me,document.head),n(document.head,y),H(t,$,u),H(t,e,u),n(e,c),n(e,N),n(e,g),n(e,k),n(e,x),n(e,A),n(e,_),n(e,S),B(d,e,null),n(e,U),n(e,v),n(e,j),B(f,e,null),H(t,E,u),H(t,i,u),n(i,h),n(h,q),n(i,D),n(i,T),C=!0},p:re,i(t){C||(K(d.$$.fragment,t),K(f.$$.fragment,t),C=!0)},o(t){Q(d.$$.fragment,t),Q(f.$$.fragment,t),C=!1},d(t){t&&(p.d(),s($),s(e),s(E),s(i)),s(y),V(d),V(f)}}}class be extends oe{constructor(p){super(),le(this,p,null,ue,Z,{})}}export{be as component};
