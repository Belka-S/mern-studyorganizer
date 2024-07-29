import{t as E,P as l,u as _,b as te,q as V,j as e,S as de,T as F,K,w as q,D as J,U as M,V as H,Q as C,W as ue,n as S,s as c,X as Q,Y as he,r as w,Z as pe,_ as me,$ as U,a0 as be,y as G,a1 as ge,F as O,C as xe,A as fe,z as $e,a2 as ve,J as ye}from"./index-c85c64d1.js";import{T as ke}from"./index.esm-bb51e25d.js";import{v as je,u as Ce}from"./index.esm-136b5d32.js";import{S as we}from"./index.esm-1447b4bb.js";const L=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],D=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:X,backgroundHoverd:A,white:R,borderLight:z}=E.colors,{button:Y}=E.shadows,se=({filtredElements:s,setLiColor:d})=>{const i=_(),{user:y}=te(),{activeCluster:r}=V(),b=({value:o})=>{i(q({_id:r._id,lang:o})).unwrap().then(n=>i(J(n.result.cluster)))},u=({value:o})=>{i(q({_id:r._id,rate:o})).unwrap().then(n=>i(J(n.result.cluster)))},h=({value:o})=>{const n=new FormData;n.append("lang",o),i(M(n))},f=({value:o})=>{const n=new FormData;n.append("rate",o),i(M(n))},$=o=>{d(X);let n="";const t="$*@";for(let g=0;g<s.length;g+=1){const{element:m}=s[g];n+=m+t}const a=H({setLiColor:d,divider:t,text:n,lang:r.lang,rate:r.rate});o.target.blur(),a&&C.error(a)},p=o=>{d(X);let n="";const t="$*@";for(let g=0;g<s.length;g+=1){const{element:m,caption:x,lang:k}=s[g];n+=m+`@±@${k}`+x+t}const a=ue({setLiColor:d,divider:t,text:n,lang:r.lang,rate:r.rate});o.target.blur(),a&&C.error(a)};return e.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[e.jsx(F,{options:L,defaultValue:L.find(o=>o.value===(r==null?void 0:r.lang)),onChange:b,placeholder:"Language...",$ol:A,$b:R,$bh:z}),e.jsx(F,{options:D,defaultValue:D.find(o=>o.value==(r==null?void 0:r.rate)),onChange:u,placeholder:"Rate...",$ol:A,$b:R,$bh:z}),e.jsx(K,{onClick:$,$s:"m",$bs:Y,children:"play"}),e.jsx(K,{onClick:p,$s:"m",$bs:Y,children:"all"}),e.jsx(F,{options:L,defaultValue:L.find(o=>o.value===y.lang),onChange:h,$ol:A,$b:R,$bh:z}),e.jsx(F,{options:D,defaultValue:D.find(o=>o.value==y.rate),onChange:f,$ol:A,$b:R,$bh:z})]})};se.propTypes={filtredElements:l.object,setLiColor:l.func};const{colors:v,shadows:Ee,indents:I}=E,Te=S`
  /* margin-bottom: ${I.s}; */
  margin-bottom: 7px;
  padding-block: ${I.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${I.xs};
  font-size: 22px;
`,Se=c.li`
  ${Te}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${v.border};
  }

  &:hover {
    border-color: ${v.border};
    box-shadow: ${Ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,oe=S`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${je}
  }
`,Be=c.label`
  ${oe}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?v.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?v.yellow:v.border};
  }
  &:hover svg {
    stroke: ${v.placeholder};
  }
`,Fe=c.label`
  ${oe}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${v.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?v.border:"transparent"};
  }
  &:hover svg {
    border-color: ${v.placeholder};
    color: ${({$hovered:s})=>s?v.placeholder:"transparent"};
  }
`,B=S`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${v.black};

  & svg {
    transition: color 250ms;
    color: ${v.border};
  }
  &:hover,
  &:hover svg {
    color: ${v.placeholder};
  }
`,Le=c.button`
  ${B}

  opacity: ${({$hovered:s})=>s?1:0};
`,De=c.button`
  ${B}

  opacity: 0;
`,{colors:T,indents:ne}=E,re=S`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Ae=c.div`
  ${re}
`,Re=c.form`
  ${re}

  grid-template-columns: 12fr 1fr 12fr;
`,Z=c.textarea`
  outline: none;
  border: 1px solid ${T.accent};
  border-radius: ${ne.xs};
  resize: none;
`,ze=c.div`
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
`,_e=c.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ve=c.button`
  ${B}
`,We=c.button`
  ${B}
`,Ie=c.button`
  ${B}
`,N=c.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ne.xs};
  color: ${T.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${T.backgroundHoverd};
  }
`,ae=S`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,He=c.iframe`
  ${ae}

  height: 60px;
  border-radius: 30px;
`,Ue=c.audio`
  ${ae}
`,le=({el:s,sortByDate:d,setSortByDate:i,setLiColor:y})=>{const{activeCluster:r}=V(),{element:b,caption:u}=s,h=async()=>{const t=H({setLiColor:y,text:b,lang:r.lang,rate:r.rate});await he(b),t&&C.error(t)},f=()=>{const t=H({setLiColor:y,text:u,lang:s.lang,rate:s.rate});t&&C.error(t)},$=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),i(!d),d?C.success("Ascending by Date"):C.success("Descending by Date")},p=u.endsWith("mp3"),o=!p&&u.startsWith("http"),n=!p&&!o;return e.jsxs(Ae,{children:[e.jsx(N,{onClick:h,children:b}),e.jsx(ze,{onClick:$}),p&&e.jsx(Ue,{controls:!0,src:Q(u)}),o&&e.jsx(He,{src:Q(u)}),n&&e.jsx(N,{onClick:f,children:u})]})};le.propTypes={el:l.object,sortByDate:l.bool,setSortByDate:l.func,$active:l.bool,$hovered:l.bool,setLiColor:l.func};const ce=({el:s,isForm:d,setIsForm:i})=>{const y=_(),{user:r}=te(),{activeCluster:b}=V(),{_id:u,element:h,caption:f}=s,$=d+24,{register:p,watch:o,setValue:n,handleSubmit:t}=Ce({mode:"onBlur",defaultValues:{element:h,caption:f}});w.useEffect(()=>{const m=async x=>{x.key==="+"&&(x.preventDefault(),await g(),t(a)()),x.key==="Enter"&&(x.preventDefault(),t(a)()),x.key==="Escape"&&i(!1)};return addEventListener("keydown",m),()=>{removeEventListener("keydown",m)}},[]);const a=m=>{y(U({_id:u,lang:r.lang,...m})),i(!1)},g=async()=>{const m=o("element"),x={from:b.lang,to:r.lang},k=await be(m,x);n("caption",k)};return e.jsxs(Re,{onSubmit:t(a),children:[e.jsx(Z,{...p("element"),style:{height:$}}),e.jsxs(_e,{children:[e.jsx(Ve,{children:e.jsx(pe,{size:"16px"})}),e.jsx(We,{type:"button",onClick:()=>i($),children:e.jsx(me,{size:"16px"})}),e.jsx(Ie,{type:"button",onClick:g,children:e.jsx(we,{size:"16px"})})]}),e.jsx(Z,{...p("caption"),style:{height:$}})]})};ce.propTypes={el:l.object,isForm:l.oneOfType([l.bool,l.number]),setIsForm:l.func};const ie=({el:s,sortByDate:d,setSortByDate:i,liColor:y,setLiColor:r})=>{const b=_(),{elementTrash:u,activeElement:h}=G(),[f,$]=w.useState(!1),{_id:p,element:o,favorite:n,checked:t}=s,a=u.find(j=>j._id===p),g=o===h;w.useEffect(()=>{const j=document.getElementById("active-element");j?(()=>{j==null||j.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const m=()=>{b(U({_id:p,favorite:!n}))},x=()=>{b(U({_id:p,checked:!t}))},k=()=>b(ve(s)),W=j=>{if(f)$(!1);else{const P=j.target.closest("div").clientHeight;$(P)}};return e.jsxs(Se,{id:g?"active-element":null,onClick:()=>b(ge(o)),liColor:y,children:[e.jsxs(O,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Be,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:m}),e.jsx(ke,{size:"20px"})]}),e.jsxs(Fe,{$hovered:t,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:t,onChange:x}),e.jsx(xe,{size:"15px"})]})]}),f&&e.jsx(ce,{el:s,isForm:f,setIsForm:$}),!f&&e.jsx(le,{el:s,sortByDate:d,setSortByDate:i,setLiColor:r}),e.jsxs(O,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(Le,{$hovered:a,onClick:k,children:e.jsx(fe,{size:"16px"})}),e.jsx(De,{onClick:W,children:e.jsx($e,{size:"15px"})})]})]})};ie.propTypes={el:l.object,sortByDate:l.bool,setSortByDate:l.func,liColor:l.string,setLiColor:l.func};const Ge=c.ul`
  width: 100%;
  list-style: none;
`,{white:Oe}=E.colors,Pe=()=>{const s=_(),{activeCluster:d}=V(),{allElements:i,elementTrash:y,elementFilter:r}=G(),[b,u]=w.useState(Oe);let{elementSelect:h}=G();h=h||[];const[f,$]=w.useState(!1);w.useEffect(()=>{s(ye())},[s]);const p=i.filter(t=>t.cluster===(d==null?void 0:d._id)).sort((t,a)=>t.createdAt.localeCompare(a.createdAt)),n=(()=>{const t=y.map(a=>a._id);return h.includes("trash")?p.filter(a=>t.includes(a._id)):p})().filter(({element:t,caption:a,favorite:g,checked:m})=>{const x=t.toLowerCase().includes(r)||a.toLowerCase().includes(r),k=h.includes("favorite")?x&&g===!0:x;return h.some(W=>["checked","unchecked"].includes(W))?h.includes("checked")?k&&m===!0:k&&m===!1:k}).sort(f?(t,a)=>a.createdAt.localeCompare(t.createdAt):(t,a)=>t.createdAt.localeCompare(a.createdAt));return e.jsxs(Ge,{children:[n.map(t=>e.jsx(ie,{el:t,sortByDate:f,setSortByDate:$,liColor:b,setLiColor:u},t._id)),e.jsx(se,{filtredElements:n,setLiColor:u})]})},{s:ee,m:Ke}=E.indents,Xe=()=>e.jsx(O,{$p:`0 ${Ke} ${ee} ${ee}`,children:e.jsx(Pe,{})});export{Xe as default};
