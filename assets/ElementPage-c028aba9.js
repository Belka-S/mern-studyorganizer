import{t as T,P as c,u as W,b as te,q as H,y as V,j as t,S as de,T as A,K,w as q,D as J,U as M,V as G,Q as w,W as ue,n as B,s as d,X as Q,Y as pe,r as E,Z as he,_ as me,$ as P,a0 as be,a1 as xe,F as O,C as ge,A as fe,z as $e,a2 as ve,J as ye}from"./index-0cfbf1dc.js";import{T as ke}from"./index.esm-c1e11932.js";import{v as je,u as Ce}from"./index.esm-4174866b.js";import{S as we}from"./index.esm-812c237e.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],D=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:X,backgroundHoverd:z,white:_,borderLight:I}=T.colors,{button:Y}=T.shadows,se=({filtredElements:s,setLiColor:p})=>{const u=W(),{user:y}=te(),{activeCluster:o}=H(),{activeElement:h}=V(),m=({value:n})=>{u(q({_id:o._id,lang:n})).unwrap().then(e=>u(J(e.result.cluster)))},b=({value:n})=>{u(q({_id:o._id,rate:n})).unwrap().then(e=>u(J(e.result.cluster)))},g=({value:n})=>{const e=new FormData;e.append("lang",n),u(M(e))},f=({value:n})=>{const e=new FormData;e.append("rate",n),u(M(e))},x=n=>{p(X);let e="";const r="$*@",v=s.findIndex(a=>a.element===h),i=s.splice(v===-1?0:v);for(let a=0;a<i.length;a+=1){const{element:C}=i[a];e+=C+r}const l=G({setLiColor:p,divider:r,text:e,lang:o.lang,rate:o.rate});n.target.blur(),l&&w.error(l)},k=n=>{p(X);let e="";const r="$*@",v=s.findIndex(a=>a.element===h),i=s.splice(v===-1?0:v);for(let a=0;a<i.length;a+=1){const{element:C,caption:j,lang:F}=i[a];e+=C+`@±@${F}`+j+r}const l=ue({setLiColor:p,divider:r,text:e,lang:o.lang,rate:o.rate});n.target.blur(),l&&w.error(l)};return t.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===(o==null?void 0:o.lang)),onChange:m,placeholder:"Language...",$ol:z,$b:_,$bh:I}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==(o==null?void 0:o.rate)),onChange:b,placeholder:"Rate...",$ol:z,$b:_,$bh:I}),t.jsx(K,{onClick:x,$s:"m",$bs:Y,children:"play"}),t.jsx(K,{onClick:k,$s:"m",$bs:Y,children:"all"}),t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===y.lang),onChange:g,$ol:z,$b:_,$bh:I}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==y.rate),onChange:f,$ol:z,$b:_,$bh:I})]})};se.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:$,shadows:Ee,indents:U}=T,Te=B`
  /* margin-bottom: ${U.s}; */
  margin-bottom: 7px;
  padding-block: ${U.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${U.xs};
  font-size: 22px;
`,Se=d.li`
  ${Te}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${$.border};
  }

  &:hover {
    border-color: ${$.border};
    box-shadow: ${Ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ne=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${je}
  }
`,Be=d.label`
  ${ne}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?$.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?$.yellow:$.border};
  }
  &:hover svg {
    stroke: ${$.placeholder};
  }
`,Le=d.label`
  ${ne}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${$.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?$.border:"transparent"};
  }
  &:hover svg {
    border-color: ${$.placeholder};
    color: ${({$hovered:s})=>s?$.placeholder:"transparent"};
  }
`,L=B`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${$.black};

  & svg {
    transition: color 250ms;
    color: ${$.border};
  }
  &:hover,
  &:hover svg {
    color: ${$.placeholder};
  }
`,Fe=d.button`
  ${L}

  opacity: ${({$hovered:s})=>s?1:0};
`,Ae=d.button`
  ${L}

  opacity: 0;
`,{colors:S,indents:oe}=T,re=B`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Re=d.div`
  ${re}
`,De=d.form`
  ${re}

  grid-template-columns: 12fr 1fr 12fr;
`,Z=d.textarea`
  outline: none;
  border: 1px solid ${S.accent};
  border-radius: ${oe.xs};
  resize: none;
`,ze=d.div`
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
    border: 1px solid ${S.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${S.placeholder};
  }
`,_e=d.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ie=d.button`
  ${L}
`,Ve=d.button`
  ${L}
`,We=d.button`
  ${L}
`,N=d.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${oe.xs};
  color: ${S.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${S.backgroundHoverd};
  }
`,ae=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,He=d.iframe`
  ${ae}

  height: 60px;
  border-radius: 30px;
`,Ue=d.audio`
  ${ae}
`,le=({el:s,sortByDate:p,setSortByDate:u,setLiColor:y})=>{const{activeCluster:o}=H(),{element:h,caption:m}=s,b=async()=>{const e=G({setLiColor:y,text:h,lang:o.lang,rate:o.rate});await pe(h),e&&w.error(e)},g=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=G({setLiColor:y,text:m,lang:s.lang,rate:s.rate});e&&w.error(e)},f=e=>{u(!p),p?w.success("Below is Recent"):w.success("Above is Recent"),e.stopImmediatePropagation()},x=m.endsWith("mp3"),k=!x&&m.startsWith("http"),n=!x&&!k;return t.jsxs(Re,{children:[t.jsx(N,{onClick:b,children:h}),t.jsx(ze,{onClick:f}),x&&t.jsx(Ue,{controls:!0,src:Q(m)}),k&&t.jsx(He,{src:Q(m)}),n&&t.jsx(N,{onClick:g,children:m})]})};le.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const ce=({el:s,isForm:p,setIsForm:u})=>{const y=W(),{user:o}=te(),{activeCluster:h}=H(),{_id:m,element:b,caption:g}=s,f=p+24,{register:x,watch:k,setValue:n,handleSubmit:e}=Ce({mode:"onBlur",defaultValues:{element:b,caption:g}});E.useEffect(()=>{const i=async l=>{l.key==="+"&&(l.preventDefault(),await v(),e(r)()),l.key==="Enter"&&(l.preventDefault(),e(r)()),l.key==="Escape"&&u(!1)};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[]);const r=i=>{y(P({_id:m,lang:o.lang,...i})),u(!1)},v=async()=>{const i=k("element"),l={from:h.lang,to:o.lang},a=await be(i,l);n("caption",a)};return t.jsxs(De,{onSubmit:e(r),children:[t.jsx(Z,{...x("element"),style:{height:f}}),t.jsxs(_e,{children:[t.jsx(Ie,{children:t.jsx(he,{size:"16px"})}),t.jsx(Ve,{type:"button",onClick:()=>u(f),children:t.jsx(me,{size:"16px"})}),t.jsx(We,{type:"button",onClick:v,children:t.jsx(we,{size:"16px"})})]}),t.jsx(Z,{...x("caption"),style:{height:f}})]})};ce.propTypes={el:c.object,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const ie=({el:s,sortByDate:p,setSortByDate:u,liColor:y,setLiColor:o})=>{const h=W(),{elementTrash:m,activeElement:b}=V(),[g,f]=E.useState(!1),{_id:x,element:k,favorite:n,checked:e}=s,r=m.find(j=>j._id===x),v=k===b;E.useEffect(()=>{const j=document.getElementById("active-element");j?(()=>{j==null||j.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const i=()=>{h(P({_id:x,favorite:!n}))},l=()=>{h(P({_id:x,checked:!e}))},a=()=>h(ve(s)),C=j=>{if(g)f(!1);else{const F=j.target.closest("div").clientHeight;f(F)}};return t.jsxs(Se,{id:v?"active-element":null,onClick:()=>h(xe(k)),liColor:y,children:[t.jsxs(O,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Be,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:i}),t.jsx(ke,{size:"20px"})]}),t.jsxs(Le,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:l}),t.jsx(ge,{size:"15px"})]})]}),g&&t.jsx(ce,{el:s,isForm:g,setIsForm:f}),!g&&t.jsx(le,{el:s,sortByDate:p,setSortByDate:u,setLiColor:o}),t.jsxs(O,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(Fe,{$hovered:r,onClick:a,children:t.jsx(fe,{size:"16px"})}),t.jsx(Ae,{onClick:C,children:t.jsx($e,{size:"15px"})})]})]})};ie.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Ge=d.ul`
  width: 100%;
  list-style: none;
`,{white:Pe}=T.colors,Oe=()=>{const s=W(),{activeCluster:p}=H(),{allElements:u,elementTrash:y,elementFilter:o}=V(),[h,m]=E.useState(Pe);let{elementSelect:b}=V();b=b||[];const[g,f]=E.useState(!1);E.useEffect(()=>{s(ye())},[s]);const x=u.filter(e=>e.cluster===(p==null?void 0:p._id)).sort((e,r)=>e.createdAt.localeCompare(r.createdAt)),n=(()=>{const e=y.map(r=>r._id);return b.includes("trash")?x.filter(r=>e.includes(r._id)):x})().filter(({element:e,caption:r,favorite:v,checked:i})=>{const l=e.toLowerCase().includes(o)||r.toLowerCase().includes(o),a=b.includes("favorite")?l&&v===!0:l;return b.some(C=>["checked","unchecked"].includes(C))?b.includes("checked")?a&&i===!0:a&&i===!1:a}).sort(g?(e,r)=>r.createdAt.localeCompare(e.createdAt):(e,r)=>e.createdAt.localeCompare(r.createdAt));return t.jsxs(Ge,{children:[n.map(e=>t.jsx(ie,{el:e,sortByDate:g,setSortByDate:f,liColor:h,setLiColor:m},e._id)),t.jsx(se,{filtredElements:n,setLiColor:m})]})},{s:ee,m:Ke}=T.indents,Xe=()=>t.jsx(O,{$p:`0 ${Ke} ${ee} ${ee}`,children:t.jsx(Oe,{})});export{Xe as default};
