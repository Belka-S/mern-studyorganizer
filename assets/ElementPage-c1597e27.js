import{t as E,P as d,u as _,b as ee,q as V,j as e,S as ie,T as F,K as P,w as K,D as q,U as J,V as I,Q as C,W as de,n as S,s as c,X as M,Y as ue,r as w,Z as he,_ as pe,$ as H,a0 as be,y as U,a1 as me,F as G,C as ge,A as xe,z as fe,a2 as $e,J as ve}from"./index-3e4c5685.js";import{T as ye}from"./index.esm-ab918ff9.js";import{v as ke,u as je}from"./index.esm-f10eb72d.js";import{S as Ce}from"./index.esm-bf0ce446.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],L=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:Q,backgroundHoverd:A,white:R,borderLight:z}=E.colors,{button:X}=E.shadows,te=({filtredElements:t,setLiColor:u})=>{const i=_(),{user:v}=ee(),{activeCluster:n}=V(),b=({value:o})=>{i(K({_id:n._id,lang:o})).unwrap().then(s=>i(q(s.result.cluster)))},k=({value:o})=>{i(K({_id:n._id,rate:o})).unwrap().then(s=>i(q(s.result.cluster)))},l=({value:o})=>{const s=new FormData;s.append("lang",o),i(J(s))},$=({value:o})=>{const s=new FormData;s.append("rate",o),i(J(s))},h=o=>{u(Q);let s="";const r="$*@";for(let m=0;m<t.length;m+=1){const{element:p}=t[m];s+=p+r}const a=I({setLiColor:u,divider:r,text:s,lang:n.lang,rate:n.rate});o.target.blur(),a&&C.error(a)},x=o=>{u(Q);let s="";const r="$*@";for(let m=0;m<t.length;m+=1){const{element:p,caption:g,lang:j}=t[m];s+=p+`@±@${j}`+g+r}const a=de({setLiColor:u,divider:r,text:s,lang:n.lang,rate:n.rate});o.target.blur(),a&&C.error(a)};return e.jsxs(ie,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[e.jsx(F,{options:D,defaultValue:D.find(o=>o.value===(n==null?void 0:n.lang)),onChange:b,placeholder:"Language...",$ol:A,$b:R,$bh:z}),e.jsx(F,{options:L,defaultValue:L.find(o=>o.value==(n==null?void 0:n.rate)),onChange:k,placeholder:"Rate...",$ol:A,$b:R,$bh:z}),e.jsx(P,{onClick:h,$s:"m",$bs:X,children:"play"}),e.jsx(P,{onClick:x,$s:"m",$bs:X,children:"all"}),e.jsx(F,{options:D,defaultValue:D.find(o=>o.value===v.lang),onChange:l,$ol:A,$b:R,$bh:z}),e.jsx(F,{options:L,defaultValue:L.find(o=>o.value==v.rate),onChange:$,$ol:A,$b:R,$bh:z})]})};te.propTypes={filtredElements:d.object,setLiColor:d.func};const{colors:f,shadows:we,indents:W}=E,Ee=S`
  /* margin-bottom: ${W.s}; */
  margin-bottom: 7px;
  padding-block: ${W.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:t})=>t};
  border-radius: ${W.xs};
  font-size: 22px;
`,Te=c.li`
  ${Ee}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${f.border};
  }

  &:hover {
    border-color: ${f.border};
    box-shadow: ${we.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,se=S`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${ke}
  }
`,Se=c.label`
  ${se}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?f.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Be=c.label`
  ${se}
  opacity: ${({$hovered:t})=>t?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${f.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?f.border:"transparent"};
  }
  &:hover svg {
    border-color: ${f.placeholder};
    color: ${({$hovered:t})=>t?f.placeholder:"transparent"};
  }
`,B=S`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${f.black};

  & svg {
    transition: color 250ms;
    color: ${f.border};
  }
  &:hover,
  &:hover svg {
    color: ${f.placeholder};
  }
`,Fe=c.button`
  ${B}

  opacity: ${({$hovered:t})=>t?1:0};
`,De=c.button`
  ${B}

  opacity: 0;
`,{colors:T,indents:oe}=E,ne=S`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Le=c.div`
  ${ne}
`,Ae=c.form`
  ${ne}

  grid-template-columns: 12fr 1fr 12fr;
`,Y=c.textarea`
  outline: none;
  border: 1px solid ${T.accent};
  border-radius: ${oe.xs};
  resize: none;
`,Re=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    height: calc(100% - 8px);
    width: 1px;
    border: 1px solid ${T.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${T.placeholder};
  }
`,ze=c.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,_e=c.button`
  ${B}
`,Ve=c.button`
  ${B}
`,We=c.button`
  ${B}
`,Z=c.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${oe.xs};
  color: ${T.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${T.backgroundHoverd};
  }
`,re=S`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ie=c.iframe`
  ${re}

  height: 60px;
  border-radius: 30px;
`,He=c.audio`
  ${re}
`,ae=({el:t,sortByDate:u,setSortByDate:i})=>{const{activeCluster:v}=V(),{element:n,caption:b}=t,k=async()=>{const s=I({text:n,lang:v.lang,rate:v.rate});await ue(n),s&&C.error(s)},l=()=>{const s=I({text:b,lang:t.lang,rate:t.rate});s&&C.error(s)},$=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),i(!u),u?C.success("Ascending by Date"):C.success("Descending by Date")},h=b.endsWith("mp3"),x=!h&&b.startsWith("http"),o=!h&&!x;return e.jsxs(Le,{children:[e.jsx(Z,{onClick:k,children:n}),e.jsx(Re,{onClick:$}),h&&e.jsx(He,{controls:!0,src:M(b)}),x&&e.jsx(Ie,{src:M(b)}),o&&e.jsx(Z,{onClick:l,children:b})]})};ae.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool};const le=({el:t,isForm:u,setIsForm:i})=>{const v=_(),{user:n}=ee(),{activeCluster:b}=V(),{_id:k,element:l,caption:$}=t,h=u+24,{register:x,watch:o,setValue:s,handleSubmit:r}=je({mode:"onBlur",defaultValues:{element:l,caption:$}});w.useEffect(()=>{const p=async g=>{g.key==="+"&&(g.preventDefault(),await m(),r(a)()),g.key==="Enter"&&(g.preventDefault(),r(a)()),g.key==="Escape"&&i(!1)};return addEventListener("keydown",p),()=>{removeEventListener("keydown",p)}},[]);const a=p=>{v(H({_id:k,lang:n.lang,...p})),i(!1)},m=async()=>{const p=o("element"),g={from:b.lang,to:n.lang},j=await be(p,g);s("caption",j)};return e.jsxs(Ae,{onSubmit:r(a),children:[e.jsx(Y,{...x("element"),style:{height:h}}),e.jsxs(ze,{children:[e.jsx(_e,{children:e.jsx(he,{size:"16px"})}),e.jsx(Ve,{type:"button",onClick:()=>i(h),children:e.jsx(pe,{size:"16px"})}),e.jsx(We,{type:"button",onClick:m,children:e.jsx(Ce,{size:"16px"})})]}),e.jsx(Y,{...x("caption"),style:{height:h}})]})};le.propTypes={el:d.object,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ce=({el:t,sortByDate:u,setSortByDate:i,liColor:v})=>{const n=_(),{elementTrash:b,activeElement:k}=U(),[l,$]=w.useState(!1),{_id:h,element:x,favorite:o,checked:s}=t,r=b.find(y=>y._id===h),a=x===k;w.useEffect(()=>{const y=document.getElementById("active-element");y?(()=>{y==null||y.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const m=()=>{n(H({_id:h,favorite:!o}))},p=()=>{n(H({_id:h,checked:!s}))},g=()=>n($e(t)),j=y=>{if(l)$(!1);else{const O=y.target.closest("div").clientHeight;$(O)}};return e.jsxs(Te,{id:a?"active-element":null,onClick:()=>n(me(x)),liColor:v,children:[e.jsxs(G,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Se,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:m}),e.jsx(ye,{size:"20px"})]}),e.jsxs(Be,{$hovered:s,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:s,onChange:p}),e.jsx(ge,{size:"15px"})]})]}),l&&e.jsx(le,{el:t,isForm:l,setIsForm:$}),!l&&e.jsx(ae,{el:t,sortByDate:u,setSortByDate:i}),e.jsxs(G,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(Fe,{$hovered:r,onClick:g,children:e.jsx(xe,{size:"16px"})}),e.jsx(De,{onClick:j,children:e.jsx(fe,{size:"15px"})})]})]})};ce.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,liColor:d.string};const Ue=c.ul`
  width: 100%;
  list-style: none;
`,{background:Qe,white:Ge}=E.colors,Oe=()=>{const t=_(),{activeCluster:u}=V(),{allElements:i,elementTrash:v,elementFilter:n}=U(),[b,k]=w.useState(Ge);let{elementSelect:l}=U();l=l||[];const[$,h]=w.useState(!1);w.useEffect(()=>{t(ve())},[t]);const x=i.filter(r=>r.cluster===(u==null?void 0:u._id)).sort((r,a)=>r.createdAt.localeCompare(a.createdAt)),s=(()=>{const r=v.map(a=>a._id);return l.includes("trash")?x.filter(a=>r.includes(a._id)):x})().filter(({element:r,caption:a,favorite:m,checked:p})=>{const g=r.toLowerCase().includes(n)||a.toLowerCase().includes(n),j=l.includes("favorite")?g&&m===!0:g;return l.some(y=>["checked","unchecked"].includes(y))?l.includes("checked")?j&&p===!0:j&&p===!1:j}).sort($?(r,a)=>a.createdAt.localeCompare(r.createdAt):(r,a)=>r.createdAt.localeCompare(a.createdAt));return e.jsxs(Ue,{children:[s.map(r=>e.jsx(ce,{el:r,sortByDate:$,setSortByDate:h,liColor:b},r._id)),e.jsx(te,{filtredElements:s,setLiColor:k})]})},{s:N,m:Pe}=E.indents,Xe=()=>e.jsx(G,{$p:`0 ${Pe} ${N} ${N}`,children:e.jsx(Oe,{})});export{Xe as default};
