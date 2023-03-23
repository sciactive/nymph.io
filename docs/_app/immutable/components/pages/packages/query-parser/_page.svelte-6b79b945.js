import{S as Wu,i as Zu,s as eE,R as tE,e as Fu,a as c,k as a,q as o,w as Qu,E as aE,T as lE,h as t,c as i,l,m as r,r as n,x as Bu,p as rE,n as Y,C as e,b as Yu,y as Mu,B as oE,f as Xu,t as zu,z as Gu}from"../../../../chunks/index-8e853c83.js";import{H as Ku,g as nE}from"../../../../chunks/github-07e092b5.js";import{b as sE}from"../../../../chunks/bash-2b754df6.js";import{t as dE}from"../../../../chunks/typescript-7dd1ec19.js";function cE(Vu){let M,Fe,or,s,pe,_e,Ir,Hr,Qe,qr,Ur,me,Be,Pr,Sr,X,Ar,ye,Ye,Nr,xr,z,Rr,Me,Jr,$r,Tr,G,jr,ge,Xe,Fr,Qr,ze,Br,Yr,k,Ge,Ke,Mr,Xr,Ve,We,zr,Gr,m,Ze,Kr,Vr,et,Wr,Zr,tt,eo,to,at,ao,lo,lt,ro,oo,Ce,rt,no,so,ot,co,io,nt,st,ho,fo,dt,uo,Eo,L,K,ct,vo,po,it,_o,mo,I,ht,yo,go,ft,Co,Oo,ut,Et,Do,bo,H,vt,wo,ko,pt,Lo,Io,_t,f,Ho,mt,qo,Uo,yt,Po,So,gt,Ao,No,Ct,oi='{"prop":"val"}',xo,Ro,Jo,Ot,Dt,$o,To,bt,jo,Fo,wt,V,kt,ni="{guid}",Qo,Bo,Lt,si="{!guid}",Yo,Mo,It,Ht,Xo,zo,qt,Go,Ko,Ut,W,Pt,Vo,Wo,St,Zo,en,At,Nt,tn,an,xt,ln,rn,Rt,Z,Jt,on,nn,$t,sn,dn,Tt,jt,cn,hn,Ft,fn,un,Qt,ee,Bt,di="name<{guid}>",En,vn,Yt,ci="name!<{guid}>",pn,_n,Mt,Xt,mn,yn,zt,gn,Cn,Gt,q,Kt,ii="name<{refclassname inner query}>",On,Dn,Vt,hi="name!<{refclassname inner query}>",bn,wn,te,Wt,kn,Ln,Zt,In,Hn,ea,ta,qn,Un,aa,Pn,Sn,ae,U,la,fi="name<value>",An,Nn,ra,ui="name!<value>",xn,Rn,oa,na,Jn,$n,P,sa,Ei="name<JSON>",Tn,jn,da,vi="name!<JSON>",Fn,Qn,ca,u,Bn,ia,Yn,Mn,ha,Xn,zn,fa,Gn,Kn,ua,pi='{"prop":"val"}',Vn,Wn,Zn,Ea,va,es,ts,pa,as,ls,_a,le,ma,rs,os,ya,ns,ss,ga,Ca,ds,cs,Oa,is,hs,Da,re,ba,fs,us,wa,Es,vs,ka,La,ps,_s,Ia,ms,ys,oe,ne,Ha,gs,Cs,qa,Os,Ds,S,Ua,bs,ws,Pa,ks,Ls,Sa,Aa,Is,Hs,Na,xa,qs,Us,Ra,Ps,Ss,Ja,se,$a,As,Ns,Ta,xs,Rs,ja,Fa,Js,$s,Qa,Ts,js,A,Ba,Ya,Fs,Qs,de,Ma,Bs,Ys,Xa,N,Ms,za,Xs,zs,Ga,Gs,Ks,Vs,ce,Ka,Ws,Zs,Va,E,ed,Wa,td,ad,Za,ld,rd,el,od,nd,tl,sd,dd,cd,al,ll,id,hd,rl,fd,ud,x,ol,nl,Ed,vd,ie,sl,pd,_d,dl,R,md,cl,yd,gd,il,Cd,Od,Dd,he,hl,bd,wd,fl,v,kd,ul,Ld,Id,El,Hd,qd,vl,Ud,Pd,pl,Sd,Ad,Nd,_l,ml,xd,Rd,yl,Jd,$d,J,gl,Cl,Td,jd,fe,Ol,Fd,Qd,Dl,$,Bd,bl,Yd,Md,wl,Xd,zd,Gd,ue,kl,Kd,Vd,Ll,p,Wd,Il,Zd,ec,Hl,tc,ac,ql,lc,rc,Ul,oc,nc,sc,Pl,Sl,dc,cc,Al,ic,hc,T,Nl,xl,fc,uc,Ee,Rl,Ec,vc,Jl,j,pc,$l,_c,mc,Tl,yc,gc,Cc,ve,jl,Oc,Dc,Fl,_,bc,Ql,wc,kc,Bl,Lc,Ic,Yl,Hc,qc,Ml,Uc,Pc,Sc,Oe,Xl,Ac,Nc,zl,xc,Rc,Gl,Jc,$c,Kl,Tc,jc,De,Vl,Fc,Qc,y,Bc,Wl,Yc,Mc,Zl,Xc,zc,er,Gc,Kc,Vc,be,tr,Wc,Zc,F,ei,ar,ti,ai,lr,li,ri,nr;return X=new Ku({props:{language:sE,code:"npm install --save @nymphjs/query-parser"}}),G=new Ku({props:{language:dE,code:`import queryParser from '@nymphjs/query-parser';

import BlogPost from './BlogPost';
import Category from './Category';

async function doQuery() {
  const [options, ...selectors] = queryParser({
    query:
      'limit:4 foobar (| [archived] mdate<"2 weeks ago") category<{cat Tech}>',
    entityClass: BlogPost,
    defaultFields: ['title', 'body'],
    qrefMap: {
      cat: {
        class: Category,
        defaultFields: ['name'],
      },
    },
  });
  /*
  Options will be
    {
      class: BlogPost,
      limit: 4
    }

  And selectors will be (equivalent to)
    [
      {
        type: "|",
        truthy: [
          "archived"
        ],
        lt: [
          ["mdate", null, "2 weeks ago"]
        ]
      },
      {
        type: "&",
        qref: [
          "category",
          [
            {
              class: Category
            },
            {
              type: "|",
              ilike: ["name", "%Tech%"]
            }
          ]
        ]
      },
      {
        type: "|",
        ilike: [
          ["title", "%foobar%"],
          ["body", "%foobar%"]
        ]
      }
    ]
  */
  const entities = await nymph.getEntities(options, ...selectors);
}`}}),{c(){M=new tE(!1),Fe=Fu(),or=c(),s=a("section"),pe=a("header"),_e=a("h1"),Ir=o("Query Parser"),Hr=c(),Qe=a("p"),qr=o(`The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.`),Ur=c(),me=a("header"),Be=a("h2"),Pr=o("Installation"),Sr=c(),Qu(X.$$.fragment),Ar=c(),ye=a("header"),Ye=a("h2"),Nr=o("Usage"),xr=c(),z=a("p"),Rr=o(`The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for `),Me=a("em"),Jr=o("most"),$r=o(` features of a
    Nymph query to be expressed in a text input.`),Tr=c(),Qu(G.$$.fragment),jr=c(),ge=a("header"),Xe=a("h2"),Fr=o("Usage"),Qr=c(),ze=a("p"),Br=o("You can set limit, offset, and reverse like this."),Yr=c(),k=a("ul"),Ge=a("li"),Ke=a("code"),Mr=o("limit:number"),Xr=c(),Ve=a("li"),We=a("code"),zr=o("offset:number"),Gr=c(),m=a("li"),Ze=a("code"),Kr=o("reverse:true"),Vr=o(", "),et=a("code"),Wr=o("reverse:false"),Zr=o(`,
      `),tt=a("code"),eo=o("reverse:1"),to=o(", or "),at=a("code"),ao=o("reverse:0"),lo=c(),lt=a("p"),ro=o(`These must appear in the top level of the query (outside of any
    parentheses).`),oo=c(),Ce=a("header"),rt=a("h2"),no=o("Clauses"),so=c(),ot=a("p"),co=o("These are the available clauses, and their syntax."),io=c(),nt=a("header"),st=a("h3"),ho=o("equal and !equal"),fo=c(),dt=a("p"),uo=o("Check for string or JSON representation equality."),Eo=c(),L=a("ul"),K=a("li"),ct=a("code"),vo=o("name=string"),po=o(" or "),it=a("code"),_o=o("name!=string"),mo=c(),I=a("li"),ht=a("code"),yo=o('name="string value"'),go=o(" or "),ft=a("code"),Co=o('name!="string value"'),Oo=c(),ut=a("ul"),Et=a("li"),Do=o(`(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)`),bo=c(),H=a("li"),vt=a("code"),wo=o("name=JSON"),ko=o(" or "),pt=a("code"),Lo=o("name!=JSON"),Io=c(),_t=a("ul"),f=a("li"),Ho=o("(Match a JSON encoded value (like "),mt=a("code"),qo=o("true"),Uo=o(", "),yt=a("code"),Po=o("1"),So=o(`,
          `),gt=a("code"),Ao=o("[1,2,3]"),No=o(", or "),Ct=a("code"),xo=o(oi),Ro=o(").)"),Jo=c(),Ot=a("header"),Dt=a("h3"),$o=o("guid and !guid"),To=c(),bt=a("p"),jo=o("Check for entity GUID."),Fo=c(),wt=a("ul"),V=a("li"),kt=a("code"),Qo=o(ni),Bo=o(" or "),Lt=a("code"),Yo=o(si),Mo=c(),It=a("header"),Ht=a("h3"),Xo=o("tag and !tag"),zo=c(),qt=a("p"),Go=o("Check for a tag."),Ko=c(),Ut=a("ul"),W=a("li"),Pt=a("code"),Vo=o("<tag>"),Wo=o(" or "),St=a("code"),Zo=o("<!tag>"),en=c(),At=a("header"),Nt=a("h3"),tn=o("truthy and !truthy"),an=c(),xt=a("p"),ln=o("Check for truthiness."),rn=c(),Rt=a("ul"),Z=a("li"),Jt=a("code"),on=o("[name]"),nn=o(" or "),$t=a("code"),sn=o("[!name]"),dn=c(),Tt=a("header"),jt=a("h3"),cn=o("ref and !ref"),hn=c(),Ft=a("p"),fn=o("Check for a reference to another entity."),un=c(),Qt=a("ul"),ee=a("li"),Bt=a("code"),En=o(di),vn=o(" or "),Yt=a("code"),pn=o(ci),_n=c(),Mt=a("header"),Xt=a("h3"),mn=o("qref and !qref"),yn=c(),zt=a("p"),gn=o("Check for a reference to another entity using a query."),Cn=c(),Gt=a("ul"),q=a("li"),Kt=a("code"),On=o(ii),Dn=o(` or
      `),Vt=a("code"),bn=o(hi),wn=c(),te=a("ul"),Wt=a("li"),kn=o("(Esacpe curly brackets with a leading backslash.)"),Ln=c(),Zt=a("li"),In=o(`(Requires a map of refclassname to their actual class and default
          fields.)`),Hn=c(),ea=a("header"),ta=a("h3"),qn=o("contain and !contain"),Un=c(),aa=a("p"),Pn=o(`Check for a JSON representation appearing within the JSON representation of
    the named property.`),Sn=c(),ae=a("ul"),U=a("li"),la=a("code"),An=o(fi),Nn=o(` or
      `),ra=a("code"),xn=o(ui),Rn=c(),oa=a("ul"),na=a("li"),Jn=o(`(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)`),$n=c(),P=a("li"),sa=a("code"),Tn=o(Ei),jn=o(` or
      `),da=a("code"),Fn=o(vi),Qn=c(),ca=a("ul"),u=a("li"),Bn=o("(Search for a JSON encoded value (like "),ia=a("code"),Yn=o("true"),Mn=o(`,
          `),ha=a("code"),Xn=o("1"),zn=o(`,
          `),fa=a("code"),Gn=o("[1,2,3]"),Kn=o(", or "),ua=a("code"),Vn=o(pi),Wn=o(").)"),Zn=c(),Ea=a("header"),va=a("h3"),es=o("match and !match"),ts=c(),pa=a("p"),as=o("Check for POSIX regex match."),ls=c(),_a=a("ul"),le=a("li"),ma=a("code"),rs=o("name~/pattern/"),os=o(" or "),ya=a("code"),ns=o("name!~/pattern/"),ss=c(),ga=a("header"),Ca=a("h3"),ds=o("imatch and !imatch"),cs=c(),Oa=a("p"),is=o("Check for case insensitive POSIX regex match."),hs=c(),Da=a("ul"),re=a("li"),ba=a("code"),fs=o("name~/pattern/i"),us=o(" or "),wa=a("code"),Es=o("name!~/pattern/i"),vs=c(),ka=a("header"),La=a("h3"),ps=o("like and !like"),_s=c(),Ia=a("p"),ms=o(`Check for pattern match where _ is single char wildcard and % is any length
    wildcard.`),ys=c(),oe=a("ul"),ne=a("li"),Ha=a("code"),gs=o("name~pattern"),Cs=o(" or "),qa=a("code"),Os=o("name!~pattern"),Ds=c(),S=a("li"),Ua=a("code"),bs=o('name~"pattern"'),ws=o(" or "),Pa=a("code"),ks=o('name!~"pattern"'),Ls=c(),Sa=a("ul"),Aa=a("li"),Is=o("(Use this if you have a space in your pattern.)"),Hs=c(),Na=a("header"),xa=a("h3"),qs=o("ilike and !ilike"),Us=c(),Ra=a("p"),Ps=o(`Check for case insensitive pattern match where _ is single char wildcard and
    % is any length wildcard.`),Ss=c(),Ja=a("ul"),se=a("li"),$a=a("code"),As=o('name~"pattern"i'),Ns=o(" or "),Ta=a("code"),xs=o('name!~"pattern"i'),Rs=c(),ja=a("header"),Fa=a("h3"),Js=o("gt"),$s=c(),Qa=a("p"),Ts=o("Check a prop's value is greater than a given value."),js=c(),A=a("ul"),Ba=a("li"),Ya=a("code"),Fs=o("name>number"),Qs=c(),de=a("li"),Ma=a("code"),Bs=o("name>relative"),Ys=c(),Xa=a("ul"),N=a("li"),Ms=o("(A single relative time value like "),za=a("code"),Xs=o("now"),zs=o(` or
          `),Ga=a("code"),Gs=o("yesterday"),Ks=o(".)"),Vs=c(),ce=a("li"),Ka=a("code"),Ws=o('name>"relative time value"'),Zs=c(),Va=a("ul"),E=a("li"),ed=o("(Use this for a time value with a space like "),Wa=a("code"),td=o('"two days from now"'),ad=o(`,
          `),Za=a("code"),ld=o('"last thursday"'),rd=o(", "),el=a("code"),od=o('"+4 weeks"'),nd=o(`, or
          `),tl=a("code"),sd=o('"5 minutes ago"'),dd=o(".)"),cd=c(),al=a("header"),ll=a("h3"),id=o("gte"),hd=c(),rl=a("p"),fd=o("Check a prop's value is greater than or equal to a given value."),ud=c(),x=a("ul"),ol=a("li"),nl=a("code"),Ed=o("name>=number"),vd=c(),ie=a("li"),sl=a("code"),pd=o("name>=relative"),_d=c(),dl=a("ul"),R=a("li"),md=o("(A single relative time value like "),cl=a("code"),yd=o("now"),gd=o(` or
          `),il=a("code"),Cd=o("yesterday"),Od=o(".)"),Dd=c(),he=a("li"),hl=a("code"),bd=o('name>="relative time value"'),wd=c(),fl=a("ul"),v=a("li"),kd=o("(Use this for a time value with a space like "),ul=a("code"),Ld=o('"two days from now"'),Id=o(`,
          `),El=a("code"),Hd=o('"last thursday"'),qd=o(", "),vl=a("code"),Ud=o('"+4 weeks"'),Pd=o(`, or
          `),pl=a("code"),Sd=o('"5 minutes ago"'),Ad=o(".)"),Nd=c(),_l=a("header"),ml=a("h3"),xd=o("lt"),Rd=c(),yl=a("p"),Jd=o("Check a prop's value is less than a given value."),$d=c(),J=a("ul"),gl=a("li"),Cl=a("code"),Td=o("name<number"),jd=c(),fe=a("li"),Ol=a("code"),Fd=o("name<relative"),Qd=c(),Dl=a("ul"),$=a("li"),Bd=o("(A single relative time value like "),bl=a("code"),Yd=o("now"),Md=o(` or
          `),wl=a("code"),Xd=o("yesterday"),zd=o(".)"),Gd=c(),ue=a("li"),kl=a("code"),Kd=o('name<"relative time value"'),Vd=c(),Ll=a("ul"),p=a("li"),Wd=o("(Use this for a time value with a space like "),Il=a("code"),Zd=o('"two days from now"'),ec=o(`,
          `),Hl=a("code"),tc=o('"last thursday"'),ac=o(", "),ql=a("code"),lc=o('"+4 weeks"'),rc=o(`, or
          `),Ul=a("code"),oc=o('"5 minutes ago"'),nc=o(".)"),sc=c(),Pl=a("header"),Sl=a("h3"),dc=o("lte"),cc=c(),Al=a("p"),ic=o("Check a prop's value is less than or equal to a given value."),hc=c(),T=a("ul"),Nl=a("li"),xl=a("code"),fc=o("name<=number"),uc=c(),Ee=a("li"),Rl=a("code"),Ec=o("name<=relative"),vc=c(),Jl=a("ul"),j=a("li"),pc=o("(A single relative time value like "),$l=a("code"),_c=o("now"),mc=o(` or
          `),Tl=a("code"),yc=o("yesterday"),gc=o(".)"),Cc=c(),ve=a("li"),jl=a("code"),Oc=o('name<="relative time value"'),Dc=c(),Fl=a("ul"),_=a("li"),bc=o("(Use this for a time value with a space like "),Ql=a("code"),wc=o('"two days from now"'),kc=o(`,
          `),Bl=a("code"),Lc=o('"last thursday"'),Ic=o(", "),Yl=a("code"),Hc=o('"+4 weeks"'),qc=o(`, or
          `),Ml=a("code"),Uc=o('"5 minutes ago"'),Pc=o(".)"),Sc=c(),Oe=a("header"),Xl=a("h2"),Ac=o("Selectors"),Nc=c(),zl=a("p"),xc=o(`You can specify nested selectors with different types using pairs of
    parentheses. The first character (or two) inside the parentheses can be a
    type: "&", "!&", "|", "!|", or "!" (the same as "!&").`),Rc=c(),Gl=a("p"),Jc=o("Here are some examples of nested selectors."),$c=c(),Kl=a("pre"),Tc=o(`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`),jc=c(),De=a("header"),Vl=a("h2"),Fc=o("Default Fields"),Qc=c(),y=a("p"),Bc=o(`Anything contained in the query (including in selector parentheses) that
    doesn't match any of the options or clause syntaxes listed above (bare query
    parts) will be added (at the appropriate nesting level) to a selector with
    an `),Wl=a("code"),Yc=o('"|"'),Mc=o(" type in an "),Zl=a("code"),Xc=o("ilike"),zc=o(` clause surrounded by "%"
    characters for each field passed in to the `),er=a("code"),Gc=o("defaultFields"),Kc=o(" argument."),Vc=c(),be=a("header"),tr=a("h2"),Wc=o("Bare Query Handler"),Zc=c(),F=a("p"),ei=o("You can also supply a function in the option "),ar=a("code"),ti=o("bareHandler"),ai=o(` that
    will handle bare query parts instead of the "Default Fields" behavior
    described above. It will receive three arguments, the query parts, the
    entity class, and the default fields entry for that class. It should return
    a partial selector that will replace or extend the `),lr=a("code"),li=o('"|"'),ri=o(" selector."),this.h()},l(h){const rr=aE("svelte-18iv594",document.head);M=lE(rr,!1),Fe=Fu(),rr.forEach(t),or=i(h),s=l(h,"SECTION",{});var d=r(s);pe=l(d,"HEADER",{class:!0});var _i=r(pe);_e=l(_i,"H1",{style:!0});var mi=r(_e);Ir=n(mi,"Query Parser"),mi.forEach(t),_i.forEach(t),Hr=i(d),Qe=l(d,"P",{});var yi=r(Qe);qr=n(yi,`The Query Parser is a utility for creating complex Nymph entity queries from
    a simple text input. Essentially, it turns a string into a Nymph query.`),yi.forEach(t),Ur=i(d),me=l(d,"HEADER",{class:!0});var gi=r(me);Be=l(gi,"H2",{});var Ci=r(Be);Pr=n(Ci,"Installation"),Ci.forEach(t),gi.forEach(t),Sr=i(d),Bu(X.$$.fragment,d),Ar=i(d),ye=l(d,"HEADER",{class:!0});var Oi=r(ye);Ye=l(Oi,"H2",{});var Di=r(Ye);Nr=n(Di,"Usage"),Di.forEach(t),Oi.forEach(t),xr=i(d),z=l(d,"P",{});var sr=r(z);Rr=n(sr,`The query parser will turn a string into an Options and Selectors array for
    the Nymph Client. It has a syntax that allows for `),Me=l(sr,"EM",{});var bi=r(Me);Jr=n(bi,"most"),bi.forEach(t),$r=n(sr,` features of a
    Nymph query to be expressed in a text input.`),sr.forEach(t),Tr=i(d),Bu(G.$$.fragment,d),jr=i(d),ge=l(d,"HEADER",{class:!0});var wi=r(ge);Xe=l(wi,"H2",{});var ki=r(Xe);Fr=n(ki,"Usage"),ki.forEach(t),wi.forEach(t),Qr=i(d),ze=l(d,"P",{});var Li=r(ze);Br=n(Li,"You can set limit, offset, and reverse like this."),Li.forEach(t),Yr=i(d),k=l(d,"UL",{});var we=r(k);Ge=l(we,"LI",{});var Ii=r(Ge);Ke=l(Ii,"CODE",{});var Hi=r(Ke);Mr=n(Hi,"limit:number"),Hi.forEach(t),Ii.forEach(t),Xr=i(we),Ve=l(we,"LI",{});var qi=r(Ve);We=l(qi,"CODE",{});var Ui=r(We);zr=n(Ui,"offset:number"),Ui.forEach(t),qi.forEach(t),Gr=i(we),m=l(we,"LI",{});var Q=r(m);Ze=l(Q,"CODE",{});var Pi=r(Ze);Kr=n(Pi,"reverse:true"),Pi.forEach(t),Vr=n(Q,", "),et=l(Q,"CODE",{});var Si=r(et);Wr=n(Si,"reverse:false"),Si.forEach(t),Zr=n(Q,`,
      `),tt=l(Q,"CODE",{});var Ai=r(tt);eo=n(Ai,"reverse:1"),Ai.forEach(t),to=n(Q,", or "),at=l(Q,"CODE",{});var Ni=r(at);ao=n(Ni,"reverse:0"),Ni.forEach(t),Q.forEach(t),we.forEach(t),lo=i(d),lt=l(d,"P",{});var xi=r(lt);ro=n(xi,`These must appear in the top level of the query (outside of any
    parentheses).`),xi.forEach(t),oo=i(d),Ce=l(d,"HEADER",{class:!0});var Ri=r(Ce);rt=l(Ri,"H2",{});var Ji=r(rt);no=n(Ji,"Clauses"),Ji.forEach(t),Ri.forEach(t),so=i(d),ot=l(d,"P",{});var $i=r(ot);co=n($i,"These are the available clauses, and their syntax."),$i.forEach(t),io=i(d),nt=l(d,"HEADER",{});var Ti=r(nt);st=l(Ti,"H3",{});var ji=r(st);ho=n(ji,"equal and !equal"),ji.forEach(t),Ti.forEach(t),fo=i(d),dt=l(d,"P",{});var Fi=r(dt);uo=n(Fi,"Check for string or JSON representation equality."),Fi.forEach(t),Eo=i(d),L=l(d,"UL",{});var ke=r(L);K=l(ke,"LI",{});var dr=r(K);ct=l(dr,"CODE",{});var Qi=r(ct);vo=n(Qi,"name=string"),Qi.forEach(t),po=n(dr," or "),it=l(dr,"CODE",{});var Bi=r(it);_o=n(Bi,"name!=string"),Bi.forEach(t),dr.forEach(t),mo=i(ke),I=l(ke,"LI",{});var Le=r(I);ht=l(Le,"CODE",{});var Yi=r(ht);yo=n(Yi,'name="string value"'),Yi.forEach(t),go=n(Le," or "),ft=l(Le,"CODE",{});var Mi=r(ft);Co=n(Mi,'name!="string value"'),Mi.forEach(t),Oo=i(Le),ut=l(Le,"UL",{});var Xi=r(ut);Et=l(Xi,"LI",{});var zi=r(Et);Do=n(zi,`(Use this if you have a space in your string, or if your string could
          be interpreted as valid JSON. Escape double quotes with a leading
          backslash.)`),zi.forEach(t),Xi.forEach(t),Le.forEach(t),bo=i(ke),H=l(ke,"LI",{});var Ie=r(H);vt=l(Ie,"CODE",{});var Gi=r(vt);wo=n(Gi,"name=JSON"),Gi.forEach(t),ko=n(Ie," or "),pt=l(Ie,"CODE",{});var Ki=r(pt);Lo=n(Ki,"name!=JSON"),Ki.forEach(t),Io=i(Ie),_t=l(Ie,"UL",{});var Vi=r(_t);f=l(Vi,"LI",{});var g=r(f);Ho=n(g,"(Match a JSON encoded value (like "),mt=l(g,"CODE",{});var Wi=r(mt);qo=n(Wi,"true"),Wi.forEach(t),Uo=n(g,", "),yt=l(g,"CODE",{});var Zi=r(yt);Po=n(Zi,"1"),Zi.forEach(t),So=n(g,`,
          `),gt=l(g,"CODE",{});var eh=r(gt);Ao=n(eh,"[1,2,3]"),eh.forEach(t),No=n(g,", or "),Ct=l(g,"CODE",{});var th=r(Ct);xo=n(th,oi),th.forEach(t),Ro=n(g,").)"),g.forEach(t),Vi.forEach(t),Ie.forEach(t),ke.forEach(t),Jo=i(d),Ot=l(d,"HEADER",{});var ah=r(Ot);Dt=l(ah,"H3",{});var lh=r(Dt);$o=n(lh,"guid and !guid"),lh.forEach(t),ah.forEach(t),To=i(d),bt=l(d,"P",{});var rh=r(bt);jo=n(rh,"Check for entity GUID."),rh.forEach(t),Fo=i(d),wt=l(d,"UL",{});var oh=r(wt);V=l(oh,"LI",{});var cr=r(V);kt=l(cr,"CODE",{});var nh=r(kt);Qo=n(nh,ni),nh.forEach(t),Bo=n(cr," or "),Lt=l(cr,"CODE",{});var sh=r(Lt);Yo=n(sh,si),sh.forEach(t),cr.forEach(t),oh.forEach(t),Mo=i(d),It=l(d,"HEADER",{});var dh=r(It);Ht=l(dh,"H3",{});var ch=r(Ht);Xo=n(ch,"tag and !tag"),ch.forEach(t),dh.forEach(t),zo=i(d),qt=l(d,"P",{});var ih=r(qt);Go=n(ih,"Check for a tag."),ih.forEach(t),Ko=i(d),Ut=l(d,"UL",{});var hh=r(Ut);W=l(hh,"LI",{});var ir=r(W);Pt=l(ir,"CODE",{});var fh=r(Pt);Vo=n(fh,"<tag>"),fh.forEach(t),Wo=n(ir," or "),St=l(ir,"CODE",{});var uh=r(St);Zo=n(uh,"<!tag>"),uh.forEach(t),ir.forEach(t),hh.forEach(t),en=i(d),At=l(d,"HEADER",{});var Eh=r(At);Nt=l(Eh,"H3",{});var vh=r(Nt);tn=n(vh,"truthy and !truthy"),vh.forEach(t),Eh.forEach(t),an=i(d),xt=l(d,"P",{});var ph=r(xt);ln=n(ph,"Check for truthiness."),ph.forEach(t),rn=i(d),Rt=l(d,"UL",{});var _h=r(Rt);Z=l(_h,"LI",{});var hr=r(Z);Jt=l(hr,"CODE",{});var mh=r(Jt);on=n(mh,"[name]"),mh.forEach(t),nn=n(hr," or "),$t=l(hr,"CODE",{});var yh=r($t);sn=n(yh,"[!name]"),yh.forEach(t),hr.forEach(t),_h.forEach(t),dn=i(d),Tt=l(d,"HEADER",{});var gh=r(Tt);jt=l(gh,"H3",{});var Ch=r(jt);cn=n(Ch,"ref and !ref"),Ch.forEach(t),gh.forEach(t),hn=i(d),Ft=l(d,"P",{});var Oh=r(Ft);fn=n(Oh,"Check for a reference to another entity."),Oh.forEach(t),un=i(d),Qt=l(d,"UL",{});var Dh=r(Qt);ee=l(Dh,"LI",{});var fr=r(ee);Bt=l(fr,"CODE",{});var bh=r(Bt);En=n(bh,di),bh.forEach(t),vn=n(fr," or "),Yt=l(fr,"CODE",{});var wh=r(Yt);pn=n(wh,ci),wh.forEach(t),fr.forEach(t),Dh.forEach(t),_n=i(d),Mt=l(d,"HEADER",{});var kh=r(Mt);Xt=l(kh,"H3",{});var Lh=r(Xt);mn=n(Lh,"qref and !qref"),Lh.forEach(t),kh.forEach(t),yn=i(d),zt=l(d,"P",{});var Ih=r(zt);gn=n(Ih,"Check for a reference to another entity using a query."),Ih.forEach(t),Cn=i(d),Gt=l(d,"UL",{});var Hh=r(Gt);q=l(Hh,"LI",{});var He=r(q);Kt=l(He,"CODE",{});var qh=r(Kt);On=n(qh,ii),qh.forEach(t),Dn=n(He,` or
      `),Vt=l(He,"CODE",{});var Uh=r(Vt);bn=n(Uh,hi),Uh.forEach(t),wn=i(He),te=l(He,"UL",{});var ur=r(te);Wt=l(ur,"LI",{});var Ph=r(Wt);kn=n(Ph,"(Esacpe curly brackets with a leading backslash.)"),Ph.forEach(t),Ln=i(ur),Zt=l(ur,"LI",{});var Sh=r(Zt);In=n(Sh,`(Requires a map of refclassname to their actual class and default
          fields.)`),Sh.forEach(t),ur.forEach(t),He.forEach(t),Hh.forEach(t),Hn=i(d),ea=l(d,"HEADER",{});var Ah=r(ea);ta=l(Ah,"H3",{});var Nh=r(ta);qn=n(Nh,"contain and !contain"),Nh.forEach(t),Ah.forEach(t),Un=i(d),aa=l(d,"P",{});var xh=r(aa);Pn=n(xh,`Check for a JSON representation appearing within the JSON representation of
    the named property.`),xh.forEach(t),Sn=i(d),ae=l(d,"UL",{});var Er=r(ae);U=l(Er,"LI",{});var qe=r(U);la=l(qe,"CODE",{});var Rh=r(la);An=n(Rh,fi),Rh.forEach(t),Nn=n(qe,` or
      `),ra=l(qe,"CODE",{});var Jh=r(ra);xn=n(Jh,ui),Jh.forEach(t),Rn=i(qe),oa=l(qe,"UL",{});var $h=r(oa);na=l($h,"LI",{});var Th=r(na);Jn=n(Th,`(Escape angle brackets with a leading backslash. If your value could
          be interpreted as valid JSON, encode it as a JSON string and use the
          JSON syntax instead.)`),Th.forEach(t),$h.forEach(t),qe.forEach(t),$n=i(Er),P=l(Er,"LI",{});var Ue=r(P);sa=l(Ue,"CODE",{});var jh=r(sa);Tn=n(jh,Ei),jh.forEach(t),jn=n(Ue,` or
      `),da=l(Ue,"CODE",{});var Fh=r(da);Fn=n(Fh,vi),Fh.forEach(t),Qn=i(Ue),ca=l(Ue,"UL",{});var Qh=r(ca);u=l(Qh,"LI",{});var C=r(u);Bn=n(C,"(Search for a JSON encoded value (like "),ia=l(C,"CODE",{});var Bh=r(ia);Yn=n(Bh,"true"),Bh.forEach(t),Mn=n(C,`,
          `),ha=l(C,"CODE",{});var Yh=r(ha);Xn=n(Yh,"1"),Yh.forEach(t),zn=n(C,`,
          `),fa=l(C,"CODE",{});var Mh=r(fa);Gn=n(Mh,"[1,2,3]"),Mh.forEach(t),Kn=n(C,", or "),ua=l(C,"CODE",{});var Xh=r(ua);Vn=n(Xh,pi),Xh.forEach(t),Wn=n(C,").)"),C.forEach(t),Qh.forEach(t),Ue.forEach(t),Er.forEach(t),Zn=i(d),Ea=l(d,"HEADER",{});var zh=r(Ea);va=l(zh,"H3",{});var Gh=r(va);es=n(Gh,"match and !match"),Gh.forEach(t),zh.forEach(t),ts=i(d),pa=l(d,"P",{});var Kh=r(pa);as=n(Kh,"Check for POSIX regex match."),Kh.forEach(t),ls=i(d),_a=l(d,"UL",{});var Vh=r(_a);le=l(Vh,"LI",{});var vr=r(le);ma=l(vr,"CODE",{});var Wh=r(ma);rs=n(Wh,"name~/pattern/"),Wh.forEach(t),os=n(vr," or "),ya=l(vr,"CODE",{});var Zh=r(ya);ns=n(Zh,"name!~/pattern/"),Zh.forEach(t),vr.forEach(t),Vh.forEach(t),ss=i(d),ga=l(d,"HEADER",{});var ef=r(ga);Ca=l(ef,"H3",{});var tf=r(Ca);ds=n(tf,"imatch and !imatch"),tf.forEach(t),ef.forEach(t),cs=i(d),Oa=l(d,"P",{});var af=r(Oa);is=n(af,"Check for case insensitive POSIX regex match."),af.forEach(t),hs=i(d),Da=l(d,"UL",{});var lf=r(Da);re=l(lf,"LI",{});var pr=r(re);ba=l(pr,"CODE",{});var rf=r(ba);fs=n(rf,"name~/pattern/i"),rf.forEach(t),us=n(pr," or "),wa=l(pr,"CODE",{});var of=r(wa);Es=n(of,"name!~/pattern/i"),of.forEach(t),pr.forEach(t),lf.forEach(t),vs=i(d),ka=l(d,"HEADER",{});var nf=r(ka);La=l(nf,"H3",{});var sf=r(La);ps=n(sf,"like and !like"),sf.forEach(t),nf.forEach(t),_s=i(d),Ia=l(d,"P",{});var df=r(Ia);ms=n(df,`Check for pattern match where _ is single char wildcard and % is any length
    wildcard.`),df.forEach(t),ys=i(d),oe=l(d,"UL",{});var _r=r(oe);ne=l(_r,"LI",{});var mr=r(ne);Ha=l(mr,"CODE",{});var cf=r(Ha);gs=n(cf,"name~pattern"),cf.forEach(t),Cs=n(mr," or "),qa=l(mr,"CODE",{});var hf=r(qa);Os=n(hf,"name!~pattern"),hf.forEach(t),mr.forEach(t),Ds=i(_r),S=l(_r,"LI",{});var Pe=r(S);Ua=l(Pe,"CODE",{});var ff=r(Ua);bs=n(ff,'name~"pattern"'),ff.forEach(t),ws=n(Pe," or "),Pa=l(Pe,"CODE",{});var uf=r(Pa);ks=n(uf,'name!~"pattern"'),uf.forEach(t),Ls=i(Pe),Sa=l(Pe,"UL",{});var Ef=r(Sa);Aa=l(Ef,"LI",{});var vf=r(Aa);Is=n(vf,"(Use this if you have a space in your pattern.)"),vf.forEach(t),Ef.forEach(t),Pe.forEach(t),_r.forEach(t),Hs=i(d),Na=l(d,"HEADER",{});var pf=r(Na);xa=l(pf,"H3",{});var _f=r(xa);qs=n(_f,"ilike and !ilike"),_f.forEach(t),pf.forEach(t),Us=i(d),Ra=l(d,"P",{});var mf=r(Ra);Ps=n(mf,`Check for case insensitive pattern match where _ is single char wildcard and
    % is any length wildcard.`),mf.forEach(t),Ss=i(d),Ja=l(d,"UL",{});var yf=r(Ja);se=l(yf,"LI",{});var yr=r(se);$a=l(yr,"CODE",{});var gf=r($a);As=n(gf,'name~"pattern"i'),gf.forEach(t),Ns=n(yr," or "),Ta=l(yr,"CODE",{});var Cf=r(Ta);xs=n(Cf,'name!~"pattern"i'),Cf.forEach(t),yr.forEach(t),yf.forEach(t),Rs=i(d),ja=l(d,"HEADER",{});var Of=r(ja);Fa=l(Of,"H3",{});var Df=r(Fa);Js=n(Df,"gt"),Df.forEach(t),Of.forEach(t),$s=i(d),Qa=l(d,"P",{});var bf=r(Qa);Ts=n(bf,"Check a prop's value is greater than a given value."),bf.forEach(t),js=i(d),A=l(d,"UL",{});var Se=r(A);Ba=l(Se,"LI",{});var wf=r(Ba);Ya=l(wf,"CODE",{});var kf=r(Ya);Fs=n(kf,"name>number"),kf.forEach(t),wf.forEach(t),Qs=i(Se),de=l(Se,"LI",{});var gr=r(de);Ma=l(gr,"CODE",{});var Lf=r(Ma);Bs=n(Lf,"name>relative"),Lf.forEach(t),Ys=i(gr),Xa=l(gr,"UL",{});var If=r(Xa);N=l(If,"LI",{});var Ae=r(N);Ms=n(Ae,"(A single relative time value like "),za=l(Ae,"CODE",{});var Hf=r(za);Xs=n(Hf,"now"),Hf.forEach(t),zs=n(Ae,` or
          `),Ga=l(Ae,"CODE",{});var qf=r(Ga);Gs=n(qf,"yesterday"),qf.forEach(t),Ks=n(Ae,".)"),Ae.forEach(t),If.forEach(t),gr.forEach(t),Vs=i(Se),ce=l(Se,"LI",{});var Cr=r(ce);Ka=l(Cr,"CODE",{});var Uf=r(Ka);Ws=n(Uf,'name>"relative time value"'),Uf.forEach(t),Zs=i(Cr),Va=l(Cr,"UL",{});var Pf=r(Va);E=l(Pf,"LI",{});var O=r(E);ed=n(O,"(Use this for a time value with a space like "),Wa=l(O,"CODE",{});var Sf=r(Wa);td=n(Sf,'"two days from now"'),Sf.forEach(t),ad=n(O,`,
          `),Za=l(O,"CODE",{});var Af=r(Za);ld=n(Af,'"last thursday"'),Af.forEach(t),rd=n(O,", "),el=l(O,"CODE",{});var Nf=r(el);od=n(Nf,'"+4 weeks"'),Nf.forEach(t),nd=n(O,`, or
          `),tl=l(O,"CODE",{});var xf=r(tl);sd=n(xf,'"5 minutes ago"'),xf.forEach(t),dd=n(O,".)"),O.forEach(t),Pf.forEach(t),Cr.forEach(t),Se.forEach(t),cd=i(d),al=l(d,"HEADER",{});var Rf=r(al);ll=l(Rf,"H3",{});var Jf=r(ll);id=n(Jf,"gte"),Jf.forEach(t),Rf.forEach(t),hd=i(d),rl=l(d,"P",{});var $f=r(rl);fd=n($f,"Check a prop's value is greater than or equal to a given value."),$f.forEach(t),ud=i(d),x=l(d,"UL",{});var Ne=r(x);ol=l(Ne,"LI",{});var Tf=r(ol);nl=l(Tf,"CODE",{});var jf=r(nl);Ed=n(jf,"name>=number"),jf.forEach(t),Tf.forEach(t),vd=i(Ne),ie=l(Ne,"LI",{});var Or=r(ie);sl=l(Or,"CODE",{});var Ff=r(sl);pd=n(Ff,"name>=relative"),Ff.forEach(t),_d=i(Or),dl=l(Or,"UL",{});var Qf=r(dl);R=l(Qf,"LI",{});var xe=r(R);md=n(xe,"(A single relative time value like "),cl=l(xe,"CODE",{});var Bf=r(cl);yd=n(Bf,"now"),Bf.forEach(t),gd=n(xe,` or
          `),il=l(xe,"CODE",{});var Yf=r(il);Cd=n(Yf,"yesterday"),Yf.forEach(t),Od=n(xe,".)"),xe.forEach(t),Qf.forEach(t),Or.forEach(t),Dd=i(Ne),he=l(Ne,"LI",{});var Dr=r(he);hl=l(Dr,"CODE",{});var Mf=r(hl);bd=n(Mf,'name>="relative time value"'),Mf.forEach(t),wd=i(Dr),fl=l(Dr,"UL",{});var Xf=r(fl);v=l(Xf,"LI",{});var D=r(v);kd=n(D,"(Use this for a time value with a space like "),ul=l(D,"CODE",{});var zf=r(ul);Ld=n(zf,'"two days from now"'),zf.forEach(t),Id=n(D,`,
          `),El=l(D,"CODE",{});var Gf=r(El);Hd=n(Gf,'"last thursday"'),Gf.forEach(t),qd=n(D,", "),vl=l(D,"CODE",{});var Kf=r(vl);Ud=n(Kf,'"+4 weeks"'),Kf.forEach(t),Pd=n(D,`, or
          `),pl=l(D,"CODE",{});var Vf=r(pl);Sd=n(Vf,'"5 minutes ago"'),Vf.forEach(t),Ad=n(D,".)"),D.forEach(t),Xf.forEach(t),Dr.forEach(t),Ne.forEach(t),Nd=i(d),_l=l(d,"HEADER",{});var Wf=r(_l);ml=l(Wf,"H3",{});var Zf=r(ml);xd=n(Zf,"lt"),Zf.forEach(t),Wf.forEach(t),Rd=i(d),yl=l(d,"P",{});var eu=r(yl);Jd=n(eu,"Check a prop's value is less than a given value."),eu.forEach(t),$d=i(d),J=l(d,"UL",{});var Re=r(J);gl=l(Re,"LI",{});var tu=r(gl);Cl=l(tu,"CODE",{});var au=r(Cl);Td=n(au,"name<number"),au.forEach(t),tu.forEach(t),jd=i(Re),fe=l(Re,"LI",{});var br=r(fe);Ol=l(br,"CODE",{});var lu=r(Ol);Fd=n(lu,"name<relative"),lu.forEach(t),Qd=i(br),Dl=l(br,"UL",{});var ru=r(Dl);$=l(ru,"LI",{});var Je=r($);Bd=n(Je,"(A single relative time value like "),bl=l(Je,"CODE",{});var ou=r(bl);Yd=n(ou,"now"),ou.forEach(t),Md=n(Je,` or
          `),wl=l(Je,"CODE",{});var nu=r(wl);Xd=n(nu,"yesterday"),nu.forEach(t),zd=n(Je,".)"),Je.forEach(t),ru.forEach(t),br.forEach(t),Gd=i(Re),ue=l(Re,"LI",{});var wr=r(ue);kl=l(wr,"CODE",{});var su=r(kl);Kd=n(su,'name<"relative time value"'),su.forEach(t),Vd=i(wr),Ll=l(wr,"UL",{});var du=r(Ll);p=l(du,"LI",{});var b=r(p);Wd=n(b,"(Use this for a time value with a space like "),Il=l(b,"CODE",{});var cu=r(Il);Zd=n(cu,'"two days from now"'),cu.forEach(t),ec=n(b,`,
          `),Hl=l(b,"CODE",{});var iu=r(Hl);tc=n(iu,'"last thursday"'),iu.forEach(t),ac=n(b,", "),ql=l(b,"CODE",{});var hu=r(ql);lc=n(hu,'"+4 weeks"'),hu.forEach(t),rc=n(b,`, or
          `),Ul=l(b,"CODE",{});var fu=r(Ul);oc=n(fu,'"5 minutes ago"'),fu.forEach(t),nc=n(b,".)"),b.forEach(t),du.forEach(t),wr.forEach(t),Re.forEach(t),sc=i(d),Pl=l(d,"HEADER",{});var uu=r(Pl);Sl=l(uu,"H3",{});var Eu=r(Sl);dc=n(Eu,"lte"),Eu.forEach(t),uu.forEach(t),cc=i(d),Al=l(d,"P",{});var vu=r(Al);ic=n(vu,"Check a prop's value is less than or equal to a given value."),vu.forEach(t),hc=i(d),T=l(d,"UL",{});var $e=r(T);Nl=l($e,"LI",{});var pu=r(Nl);xl=l(pu,"CODE",{});var _u=r(xl);fc=n(_u,"name<=number"),_u.forEach(t),pu.forEach(t),uc=i($e),Ee=l($e,"LI",{});var kr=r(Ee);Rl=l(kr,"CODE",{});var mu=r(Rl);Ec=n(mu,"name<=relative"),mu.forEach(t),vc=i(kr),Jl=l(kr,"UL",{});var yu=r(Jl);j=l(yu,"LI",{});var Te=r(j);pc=n(Te,"(A single relative time value like "),$l=l(Te,"CODE",{});var gu=r($l);_c=n(gu,"now"),gu.forEach(t),mc=n(Te,` or
          `),Tl=l(Te,"CODE",{});var Cu=r(Tl);yc=n(Cu,"yesterday"),Cu.forEach(t),gc=n(Te,".)"),Te.forEach(t),yu.forEach(t),kr.forEach(t),Cc=i($e),ve=l($e,"LI",{});var Lr=r(ve);jl=l(Lr,"CODE",{});var Ou=r(jl);Oc=n(Ou,'name<="relative time value"'),Ou.forEach(t),Dc=i(Lr),Fl=l(Lr,"UL",{});var Du=r(Fl);_=l(Du,"LI",{});var w=r(_);bc=n(w,"(Use this for a time value with a space like "),Ql=l(w,"CODE",{});var bu=r(Ql);wc=n(bu,'"two days from now"'),bu.forEach(t),kc=n(w,`,
          `),Bl=l(w,"CODE",{});var wu=r(Bl);Lc=n(wu,'"last thursday"'),wu.forEach(t),Ic=n(w,", "),Yl=l(w,"CODE",{});var ku=r(Yl);Hc=n(ku,'"+4 weeks"'),ku.forEach(t),qc=n(w,`, or
          `),Ml=l(w,"CODE",{});var Lu=r(Ml);Uc=n(Lu,'"5 minutes ago"'),Lu.forEach(t),Pc=n(w,".)"),w.forEach(t),Du.forEach(t),Lr.forEach(t),$e.forEach(t),Sc=i(d),Oe=l(d,"HEADER",{class:!0});var Iu=r(Oe);Xl=l(Iu,"H2",{});var Hu=r(Xl);Ac=n(Hu,"Selectors"),Hu.forEach(t),Iu.forEach(t),Nc=i(d),zl=l(d,"P",{});var qu=r(zl);xc=n(qu,`You can specify nested selectors with different types using pairs of
    parentheses. The first character (or two) inside the parentheses can be a
    type: "&", "!&", "|", "!|", or "!" (the same as "!&").`),qu.forEach(t),Rc=i(d),Gl=l(d,"P",{});var Uu=r(Gl);Jc=n(Uu,"Here are some examples of nested selectors."),Uu.forEach(t),$c=i(d),Kl=l(d,"PRE",{});var Pu=r(Kl);Tc=n(Pu,`Either enabled is truthy and abilities contains "subscriber", or abilities contains "lifelong-subscriber".

(| ([enabled] abilities<"subscriber">) abilities<"lifeline-subscriber">)


Published is not truthy and cdate is not greater than 6 months ago.

(! [published] cdate>"6 months ago")`),Pu.forEach(t),jc=i(d),De=l(d,"HEADER",{class:!0});var Su=r(De);Vl=l(Su,"H2",{});var Au=r(Vl);Fc=n(Au,"Default Fields"),Au.forEach(t),Su.forEach(t),Qc=i(d),y=l(d,"P",{});var B=r(y);Bc=n(B,`Anything contained in the query (including in selector parentheses) that
    doesn't match any of the options or clause syntaxes listed above (bare query
    parts) will be added (at the appropriate nesting level) to a selector with
    an `),Wl=l(B,"CODE",{});var Nu=r(Wl);Yc=n(Nu,'"|"'),Nu.forEach(t),Mc=n(B," type in an "),Zl=l(B,"CODE",{});var xu=r(Zl);Xc=n(xu,"ilike"),xu.forEach(t),zc=n(B,` clause surrounded by "%"
    characters for each field passed in to the `),er=l(B,"CODE",{});var Ru=r(er);Gc=n(Ru,"defaultFields"),Ru.forEach(t),Kc=n(B," argument."),B.forEach(t),Vc=i(d),be=l(d,"HEADER",{class:!0});var Ju=r(be);tr=l(Ju,"H2",{});var $u=r(tr);Wc=n($u,"Bare Query Handler"),$u.forEach(t),Ju.forEach(t),Zc=i(d),F=l(d,"P",{});var je=r(F);ei=n(je,"You can also supply a function in the option "),ar=l(je,"CODE",{});var Tu=r(ar);ti=n(Tu,"bareHandler"),Tu.forEach(t),ai=n(je,` that
    will handle bare query parts instead of the "Default Fields" behavior
    described above. It will receive three arguments, the query parts, the
    entity class, and the default fields entry for that class. It should return
    a partial selector that will replace or extend the `),lr=l(je,"CODE",{});var ju=r(lr);li=n(ju,'"|"'),ju.forEach(t),ri=n(je," selector."),je.forEach(t),d.forEach(t),this.h()},h(){document.title="Query Parser - Packages - Nymph.js",M.a=Fe,rE(_e,"font-size","3em"),Y(pe,"class","major"),Y(me,"class","major"),Y(ye,"class","major"),Y(ge,"class","major"),Y(Ce,"class","major"),Y(Oe,"class","major"),Y(De,"class","major"),Y(be,"class","major")},m(h,rr){M.m(nE,document.head),e(document.head,Fe),Yu(h,or,rr),Yu(h,s,rr),e(s,pe),e(pe,_e),e(_e,Ir),e(s,Hr),e(s,Qe),e(Qe,qr),e(s,Ur),e(s,me),e(me,Be),e(Be,Pr),e(s,Sr),Mu(X,s,null),e(s,Ar),e(s,ye),e(ye,Ye),e(Ye,Nr),e(s,xr),e(s,z),e(z,Rr),e(z,Me),e(Me,Jr),e(z,$r),e(s,Tr),Mu(G,s,null),e(s,jr),e(s,ge),e(ge,Xe),e(Xe,Fr),e(s,Qr),e(s,ze),e(ze,Br),e(s,Yr),e(s,k),e(k,Ge),e(Ge,Ke),e(Ke,Mr),e(k,Xr),e(k,Ve),e(Ve,We),e(We,zr),e(k,Gr),e(k,m),e(m,Ze),e(Ze,Kr),e(m,Vr),e(m,et),e(et,Wr),e(m,Zr),e(m,tt),e(tt,eo),e(m,to),e(m,at),e(at,ao),e(s,lo),e(s,lt),e(lt,ro),e(s,oo),e(s,Ce),e(Ce,rt),e(rt,no),e(s,so),e(s,ot),e(ot,co),e(s,io),e(s,nt),e(nt,st),e(st,ho),e(s,fo),e(s,dt),e(dt,uo),e(s,Eo),e(s,L),e(L,K),e(K,ct),e(ct,vo),e(K,po),e(K,it),e(it,_o),e(L,mo),e(L,I),e(I,ht),e(ht,yo),e(I,go),e(I,ft),e(ft,Co),e(I,Oo),e(I,ut),e(ut,Et),e(Et,Do),e(L,bo),e(L,H),e(H,vt),e(vt,wo),e(H,ko),e(H,pt),e(pt,Lo),e(H,Io),e(H,_t),e(_t,f),e(f,Ho),e(f,mt),e(mt,qo),e(f,Uo),e(f,yt),e(yt,Po),e(f,So),e(f,gt),e(gt,Ao),e(f,No),e(f,Ct),e(Ct,xo),e(f,Ro),e(s,Jo),e(s,Ot),e(Ot,Dt),e(Dt,$o),e(s,To),e(s,bt),e(bt,jo),e(s,Fo),e(s,wt),e(wt,V),e(V,kt),e(kt,Qo),e(V,Bo),e(V,Lt),e(Lt,Yo),e(s,Mo),e(s,It),e(It,Ht),e(Ht,Xo),e(s,zo),e(s,qt),e(qt,Go),e(s,Ko),e(s,Ut),e(Ut,W),e(W,Pt),e(Pt,Vo),e(W,Wo),e(W,St),e(St,Zo),e(s,en),e(s,At),e(At,Nt),e(Nt,tn),e(s,an),e(s,xt),e(xt,ln),e(s,rn),e(s,Rt),e(Rt,Z),e(Z,Jt),e(Jt,on),e(Z,nn),e(Z,$t),e($t,sn),e(s,dn),e(s,Tt),e(Tt,jt),e(jt,cn),e(s,hn),e(s,Ft),e(Ft,fn),e(s,un),e(s,Qt),e(Qt,ee),e(ee,Bt),e(Bt,En),e(ee,vn),e(ee,Yt),e(Yt,pn),e(s,_n),e(s,Mt),e(Mt,Xt),e(Xt,mn),e(s,yn),e(s,zt),e(zt,gn),e(s,Cn),e(s,Gt),e(Gt,q),e(q,Kt),e(Kt,On),e(q,Dn),e(q,Vt),e(Vt,bn),e(q,wn),e(q,te),e(te,Wt),e(Wt,kn),e(te,Ln),e(te,Zt),e(Zt,In),e(s,Hn),e(s,ea),e(ea,ta),e(ta,qn),e(s,Un),e(s,aa),e(aa,Pn),e(s,Sn),e(s,ae),e(ae,U),e(U,la),e(la,An),e(U,Nn),e(U,ra),e(ra,xn),e(U,Rn),e(U,oa),e(oa,na),e(na,Jn),e(ae,$n),e(ae,P),e(P,sa),e(sa,Tn),e(P,jn),e(P,da),e(da,Fn),e(P,Qn),e(P,ca),e(ca,u),e(u,Bn),e(u,ia),e(ia,Yn),e(u,Mn),e(u,ha),e(ha,Xn),e(u,zn),e(u,fa),e(fa,Gn),e(u,Kn),e(u,ua),e(ua,Vn),e(u,Wn),e(s,Zn),e(s,Ea),e(Ea,va),e(va,es),e(s,ts),e(s,pa),e(pa,as),e(s,ls),e(s,_a),e(_a,le),e(le,ma),e(ma,rs),e(le,os),e(le,ya),e(ya,ns),e(s,ss),e(s,ga),e(ga,Ca),e(Ca,ds),e(s,cs),e(s,Oa),e(Oa,is),e(s,hs),e(s,Da),e(Da,re),e(re,ba),e(ba,fs),e(re,us),e(re,wa),e(wa,Es),e(s,vs),e(s,ka),e(ka,La),e(La,ps),e(s,_s),e(s,Ia),e(Ia,ms),e(s,ys),e(s,oe),e(oe,ne),e(ne,Ha),e(Ha,gs),e(ne,Cs),e(ne,qa),e(qa,Os),e(oe,Ds),e(oe,S),e(S,Ua),e(Ua,bs),e(S,ws),e(S,Pa),e(Pa,ks),e(S,Ls),e(S,Sa),e(Sa,Aa),e(Aa,Is),e(s,Hs),e(s,Na),e(Na,xa),e(xa,qs),e(s,Us),e(s,Ra),e(Ra,Ps),e(s,Ss),e(s,Ja),e(Ja,se),e(se,$a),e($a,As),e(se,Ns),e(se,Ta),e(Ta,xs),e(s,Rs),e(s,ja),e(ja,Fa),e(Fa,Js),e(s,$s),e(s,Qa),e(Qa,Ts),e(s,js),e(s,A),e(A,Ba),e(Ba,Ya),e(Ya,Fs),e(A,Qs),e(A,de),e(de,Ma),e(Ma,Bs),e(de,Ys),e(de,Xa),e(Xa,N),e(N,Ms),e(N,za),e(za,Xs),e(N,zs),e(N,Ga),e(Ga,Gs),e(N,Ks),e(A,Vs),e(A,ce),e(ce,Ka),e(Ka,Ws),e(ce,Zs),e(ce,Va),e(Va,E),e(E,ed),e(E,Wa),e(Wa,td),e(E,ad),e(E,Za),e(Za,ld),e(E,rd),e(E,el),e(el,od),e(E,nd),e(E,tl),e(tl,sd),e(E,dd),e(s,cd),e(s,al),e(al,ll),e(ll,id),e(s,hd),e(s,rl),e(rl,fd),e(s,ud),e(s,x),e(x,ol),e(ol,nl),e(nl,Ed),e(x,vd),e(x,ie),e(ie,sl),e(sl,pd),e(ie,_d),e(ie,dl),e(dl,R),e(R,md),e(R,cl),e(cl,yd),e(R,gd),e(R,il),e(il,Cd),e(R,Od),e(x,Dd),e(x,he),e(he,hl),e(hl,bd),e(he,wd),e(he,fl),e(fl,v),e(v,kd),e(v,ul),e(ul,Ld),e(v,Id),e(v,El),e(El,Hd),e(v,qd),e(v,vl),e(vl,Ud),e(v,Pd),e(v,pl),e(pl,Sd),e(v,Ad),e(s,Nd),e(s,_l),e(_l,ml),e(ml,xd),e(s,Rd),e(s,yl),e(yl,Jd),e(s,$d),e(s,J),e(J,gl),e(gl,Cl),e(Cl,Td),e(J,jd),e(J,fe),e(fe,Ol),e(Ol,Fd),e(fe,Qd),e(fe,Dl),e(Dl,$),e($,Bd),e($,bl),e(bl,Yd),e($,Md),e($,wl),e(wl,Xd),e($,zd),e(J,Gd),e(J,ue),e(ue,kl),e(kl,Kd),e(ue,Vd),e(ue,Ll),e(Ll,p),e(p,Wd),e(p,Il),e(Il,Zd),e(p,ec),e(p,Hl),e(Hl,tc),e(p,ac),e(p,ql),e(ql,lc),e(p,rc),e(p,Ul),e(Ul,oc),e(p,nc),e(s,sc),e(s,Pl),e(Pl,Sl),e(Sl,dc),e(s,cc),e(s,Al),e(Al,ic),e(s,hc),e(s,T),e(T,Nl),e(Nl,xl),e(xl,fc),e(T,uc),e(T,Ee),e(Ee,Rl),e(Rl,Ec),e(Ee,vc),e(Ee,Jl),e(Jl,j),e(j,pc),e(j,$l),e($l,_c),e(j,mc),e(j,Tl),e(Tl,yc),e(j,gc),e(T,Cc),e(T,ve),e(ve,jl),e(jl,Oc),e(ve,Dc),e(ve,Fl),e(Fl,_),e(_,bc),e(_,Ql),e(Ql,wc),e(_,kc),e(_,Bl),e(Bl,Lc),e(_,Ic),e(_,Yl),e(Yl,Hc),e(_,qc),e(_,Ml),e(Ml,Uc),e(_,Pc),e(s,Sc),e(s,Oe),e(Oe,Xl),e(Xl,Ac),e(s,Nc),e(s,zl),e(zl,xc),e(s,Rc),e(s,Gl),e(Gl,Jc),e(s,$c),e(s,Kl),e(Kl,Tc),e(s,jc),e(s,De),e(De,Vl),e(Vl,Fc),e(s,Qc),e(s,y),e(y,Bc),e(y,Wl),e(Wl,Yc),e(y,Mc),e(y,Zl),e(Zl,Xc),e(y,zc),e(y,er),e(er,Gc),e(y,Kc),e(s,Vc),e(s,be),e(be,tr),e(tr,Wc),e(s,Zc),e(s,F),e(F,ei),e(F,ar),e(ar,ti),e(F,ai),e(F,lr),e(lr,li),e(F,ri),nr=!0},p:oE,i(h){nr||(Xu(X.$$.fragment,h),Xu(G.$$.fragment,h),nr=!0)},o(h){zu(X.$$.fragment,h),zu(G.$$.fragment,h),nr=!1},d(h){t(Fe),h&&M.d(),h&&t(or),h&&t(s),Gu(X),Gu(G)}}}class EE extends Wu{constructor(M){super(),Zu(this,M,null,cE,eE,{})}}export{EE as default};