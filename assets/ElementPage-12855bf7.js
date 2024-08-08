import{t as E,P as l,u as V,b as te,q as W,y as I,j as t,S as de,T as F,K,w as q,D as J,U as M,V as U,Q as C,W as ue,n as B,s as i,X as Q,Y as pe,r as w,Z as he,_ as me,$ as G,a0 as be,a1 as xe,F as P,C as ge,A as fe,z as $e,a2 as ve,J as ye}from"./index-9d95ddd4.js";import{T as ke}from"./index.esm-77f4669a.js";import{v as je,u as Ce}from"./index.esm-40782e94.js";import{S as we}from"./index.esm-a453b800.js";const A=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],R=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:X,backgroundHoverd:D,white:z,borderLight:_}=E.colors,{button:Y}=E.shadows,se=({filtredElements:s,setLiColor:u})=>{const d=V(),{user:v}=te(),{activeCluster:r}=W(),{activeElement:p}=I(),h=({value:o})=>{d(q({_id:r._id,lang:o})).unwrap().then(e=>d(J(e.result.cluster)))},m=({value:o})=>{d(q({_id:r._id,rate:o})).unwrap().then(e=>d(J(e.result.cluster)))},x=({value:o})=>{const e=new FormData;e.append("lang",o),d(M(e))},g=({value:o})=>{const e=new FormData;e.append("rate",o),d(M(e))},b=o=>{u(X);let e="";const a="$*@",$=s.splice(s.findIndex(n=>n.element===p));for(let n=0;n<$.length;n+=1){const{element:y}=$[n];e+=y+a}const c=U({setLiColor:u,divider:a,text:e,lang:r.lang,rate:r.rate});o.target.blur(),c&&C.error(c)},k=o=>{u(X);let e="";const a="$*@",$=s.splice(s.findIndex(n=>n.element===p));for(let n=0;n<$.length;n+=1){const{element:y,caption:T,lang:j}=$[n];e+=y+`@±@${j}`+T+a}const c=ue({setLiColor:u,divider:a,text:e,lang:r.lang,rate:r.rate});o.target.blur(),c&&C.error(c)};return t.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(F,{options:A,defaultValue:A.find(o=>o.value===(r==null?void 0:r.lang)),onChange:h,placeholder:"Language...",$ol:D,$b:z,$bh:_}),t.jsx(F,{options:R,defaultValue:R.find(o=>o.value==(r==null?void 0:r.rate)),onChange:m,placeholder:"Rate...",$ol:D,$b:z,$bh:_}),t.jsx(K,{onClick:b,$s:"m",$bs:Y,children:"play"}),t.jsx(K,{onClick:k,$s:"m",$bs:Y,children:"all"}),t.jsx(F,{options:A,defaultValue:A.find(o=>o.value===v.lang),onChange:x,$ol:D,$b:z,$bh:_}),t.jsx(F,{options:R,defaultValue:R.find(o=>o.value==v.rate),onChange:g,$ol:D,$b:z,$bh:_})]})};se.propTypes={filtredElements:l.object,setLiColor:l.func};const{colors:f,shadows:Ee,indents:H}=E,Te=B`
  /* margin-bottom: ${H.s}; */
  margin-bottom: 7px;
  padding-block: ${H.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${H.xs};
  font-size: 22px;
`,Se=i.li`
  ${Te}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${f.border};
  }

  &:hover {
    border-color: ${f.border};
    box-shadow: ${Ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,oe=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${je}
  }
`,Be=i.label`
  ${oe}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?f.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Le=i.label`
  ${oe}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${f.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?f.border:"transparent"};
  }
  &:hover svg {
    border-color: ${f.placeholder};
    color: ${({$hovered:s})=>s?f.placeholder:"transparent"};
  }
`,L=B`
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
`,Fe=i.button`
  ${L}

  opacity: ${({$hovered:s})=>s?1:0};
`,Ae=i.button`
  ${L}

  opacity: 0;
`,{colors:S,indents:ne}=E,re=B`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Re=i.div`
  ${re}
`,De=i.form`
  ${re}

  grid-template-columns: 12fr 1fr 12fr;
`,Z=i.textarea`
  outline: none;
  border: 1px solid ${S.accent};
  border-radius: ${ne.xs};
  resize: none;
`,ze=i.div`
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
`,_e=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ie=i.button`
  ${L}
`,Ve=i.button`
  ${L}
`,We=i.button`
  ${L}
`,N=i.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ne.xs};
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
`,He=i.iframe`
  ${ae}

  height: 60px;
  border-radius: 30px;
`,Ue=i.audio`
  ${ae}
`,le=({el:s,sortByDate:u,setSortByDate:d,setLiColor:v})=>{const{activeCluster:r}=W(),{element:p,caption:h}=s,m=async()=>{const e=U({setLiColor:v,text:p,lang:r.lang,rate:r.rate});await pe(p),e&&C.error(e)},x=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=U({setLiColor:v,text:h,lang:s.lang,rate:s.rate});e&&C.error(e)},g=e=>{d(!u),u?C.success("Below is Recent"):C.success("Above is Recent"),e.stopImmediatePropagation()},b=h.endsWith("mp3"),k=!b&&h.startsWith("http"),o=!b&&!k;return t.jsxs(Re,{children:[t.jsx(N,{onClick:m,children:p}),t.jsx(ze,{onClick:g}),b&&t.jsx(Ue,{controls:!0,src:Q(h)}),k&&t.jsx(He,{src:Q(h)}),o&&t.jsx(N,{onClick:x,children:h})]})};le.propTypes={el:l.object,sortByDate:l.bool,setSortByDate:l.func,$active:l.bool,$hovered:l.bool,setLiColor:l.func};const ce=({el:s,isForm:u,setIsForm:d})=>{const v=V(),{user:r}=te(),{activeCluster:p}=W(),{_id:h,element:m,caption:x}=s,g=u+24,{register:b,watch:k,setValue:o,handleSubmit:e}=Ce({mode:"onBlur",defaultValues:{element:m,caption:x}});w.useEffect(()=>{const c=async n=>{n.key==="+"&&(n.preventDefault(),await $(),e(a)()),n.key==="Enter"&&(n.preventDefault(),e(a)()),n.key==="Escape"&&d(!1)};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const a=c=>{v(G({_id:h,lang:r.lang,...c})),d(!1)},$=async()=>{const c=k("element"),n={from:p.lang,to:r.lang},y=await be(c,n);o("caption",y)};return t.jsxs(De,{onSubmit:e(a),children:[t.jsx(Z,{...b("element"),style:{height:g}}),t.jsxs(_e,{children:[t.jsx(Ie,{children:t.jsx(he,{size:"16px"})}),t.jsx(Ve,{type:"button",onClick:()=>d(g),children:t.jsx(me,{size:"16px"})}),t.jsx(We,{type:"button",onClick:$,children:t.jsx(we,{size:"16px"})})]}),t.jsx(Z,{...b("caption"),style:{height:g}})]})};ce.propTypes={el:l.object,isForm:l.oneOfType([l.bool,l.number]),setIsForm:l.func};const ie=({el:s,sortByDate:u,setSortByDate:d,liColor:v,setLiColor:r})=>{const p=V(),{elementTrash:h,activeElement:m}=I(),[x,g]=w.useState(!1),{_id:b,element:k,favorite:o,checked:e}=s,a=h.find(j=>j._id===b),$=k===m;w.useEffect(()=>{const j=document.getElementById("active-element");j?(()=>{j==null||j.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const c=()=>{p(G({_id:b,favorite:!o}))},n=()=>{p(G({_id:b,checked:!e}))},y=()=>p(ve(s)),T=j=>{if(x)g(!1);else{const O=j.target.closest("div").clientHeight;g(O)}};return t.jsxs(Se,{id:$?"active-element":null,onClick:()=>p(xe(k)),liColor:v,children:[t.jsxs(P,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Be,{$hovered:o,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:c}),t.jsx(ke,{size:"20px"})]}),t.jsxs(Le,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:n}),t.jsx(ge,{size:"15px"})]})]}),x&&t.jsx(ce,{el:s,isForm:x,setIsForm:g}),!x&&t.jsx(le,{el:s,sortByDate:u,setSortByDate:d,setLiColor:r}),t.jsxs(P,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(Fe,{$hovered:a,onClick:y,children:t.jsx(fe,{size:"16px"})}),t.jsx(Ae,{onClick:T,children:t.jsx($e,{size:"15px"})})]})]})};ie.propTypes={el:l.object,sortByDate:l.bool,setSortByDate:l.func,liColor:l.string,setLiColor:l.func};const Ge=i.ul`
  width: 100%;
  list-style: none;
`,{white:Pe}=E.colors,Oe=()=>{const s=V(),{activeCluster:u}=W(),{allElements:d,elementTrash:v,elementFilter:r}=I(),[p,h]=w.useState(Pe);let{elementSelect:m}=I();m=m||[];const[x,g]=w.useState(!1);w.useEffect(()=>{s(ye())},[s]);const b=d.filter(e=>e.cluster===(u==null?void 0:u._id)).sort((e,a)=>e.createdAt.localeCompare(a.createdAt)),o=(()=>{const e=v.map(a=>a._id);return m.includes("trash")?b.filter(a=>e.includes(a._id)):b})().filter(({element:e,caption:a,favorite:$,checked:c})=>{const n=e.toLowerCase().includes(r)||a.toLowerCase().includes(r),y=m.includes("favorite")?n&&$===!0:n;return m.some(T=>["checked","unchecked"].includes(T))?m.includes("checked")?y&&c===!0:y&&c===!1:y}).sort(x?(e,a)=>a.createdAt.localeCompare(e.createdAt):(e,a)=>e.createdAt.localeCompare(a.createdAt));return t.jsxs(Ge,{children:[o.map(e=>t.jsx(ie,{el:e,sortByDate:x,setSortByDate:g,liColor:p,setLiColor:h},e._id)),t.jsx(se,{filtredElements:o,setLiColor:h})]})},{s:ee,m:Ke}=E.indents,Xe=()=>t.jsx(P,{$p:`0 ${Ke} ${ee} ${ee}`,children:t.jsx(Oe,{})});export{Xe as default};
