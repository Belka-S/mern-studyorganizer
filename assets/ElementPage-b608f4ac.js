import{t as T,P as c,u as V,b as oe,q as W,y as I,j as t,S as me,T as F,K as q,w as J,D as Q,U as X,V as O,Q as E,W as be,n as B,s as d,X as Y,Y as xe,r as w,Z as fe,_ as ge,$ as P,a0 as $e,a1 as ve,F as K,C as ye,A as ke,z as je,a2 as Ce,J as we}from"./index-a63bde7f.js";import{T as Ee}from"./index.esm-0674adfe.js";import{a as Te}from"./index.esm-7bd5d5db.js";import{v as Se,u as Be}from"./index.esm-9f596d5b.js";import{S as Le}from"./index.esm-1bfd5ee1.js";const A=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],R=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:Z,backgroundHoverd:D,white:z,borderLight:_}=T.colors,{button:N}=T.shadows,re=({filtredElements:s,setLiColor:u})=>{const f=V(),{user:g}=oe(),{activeCluster:a}=W(),{activeElement:p}=I(),b=({value:n})=>{f(J({_id:a._id,lang:n})).unwrap().then(e=>f(Q(e.result.cluster)))},x=({value:n})=>{f(J({_id:a._id,rate:n})).unwrap().then(e=>f(Q(e.result.cluster)))},h=({value:n})=>{const e=new FormData;e.append("lang",n),f(X(e))},y=({value:n})=>{const e=new FormData;e.append("rate",n),f(X(e))},m=n=>{u(Z);let e="";const r="$*@",$=s.findIndex(o=>o.element===p),i=s.splice($===-1?0:$);for(let o=0;o<i.length;o+=1){const{element:j}=i[o];e+=j+r}const l=O({setLiColor:u,divider:r,text:e,lang:a.lang,rate:a.rate});n.target.blur(),l&&E.error(l)},k=n=>{u(Z);let e="";const r="$*@",$=s.findIndex(o=>o.element===p),i=s.splice($===-1?0:$);for(let o=0;o<i.length;o+=1){const{element:j,caption:H,lang:U}=i[o];e+=j+`@±@${U}`+H+r}const l=be({setLiColor:u,divider:r,text:e,lang:a.lang,rate:a.rate});n.target.blur(),l&&E.error(l)};return t.jsxs(me,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(F,{options:A,defaultValue:A.find(n=>n.value===(a==null?void 0:a.lang)),onChange:b,placeholder:"Language...",$ol:D,$b:z,$bh:_}),t.jsx(F,{options:R,defaultValue:R.find(n=>n.value==(a==null?void 0:a.rate)),onChange:x,placeholder:"Rate...",$ol:D,$b:z,$bh:_}),t.jsx(q,{onClick:m,$s:"m",$bs:N,children:"play"}),t.jsx(q,{onClick:k,$s:"m",$bs:N,children:"all"}),t.jsx(F,{options:A,defaultValue:A.find(n=>n.value===g.lang),onChange:h,$ol:D,$b:z,$bh:_}),t.jsx(F,{options:R,defaultValue:R.find(n=>n.value==g.rate),onChange:y,$ol:D,$b:z,$bh:_})]})};re.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:v,shadows:Fe,indents:G}=T,Ae=B`
  /* margin-bottom: ${G.s}; */
  margin-bottom: 7px;
  padding-block: ${G.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${G.xs};
  font-size: 22px;
`,Re=d.li`
  ${Ae}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${v.border};
  }

  &:hover {
    border-color: ${v.border};
    box-shadow: ${Fe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ae=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Se}
  }
`,De=d.label`
  ${ae}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?v.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?v.yellow:v.border};
  }
  &:hover svg {
    stroke: ${v.placeholder};
  }
`,ze=d.label`
  ${ae}
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
`,L=B`
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
`,_e=d.button`
  ${L}

  opacity: ${({$hovered:s})=>s?1:0};
`,ee=d.button`
  ${L}

  opacity: 0;
`,{colors:S,indents:le}=T,ce=B`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Ie=d.div`
  ${ce}
`,Ve=d.form`
  ${ce}

  grid-template-columns: 12fr 1fr 12fr;
`,te=d.textarea`
  outline: none;
  border: 1px solid ${S.accent};
  border-radius: ${le.xs};
  resize: none;
`,We=d.div`
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
`,He=d.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ue=d.button`
  ${L}
`,Ge=d.button`
  ${L}
`,Oe=d.button`
  ${L}
`,se=d.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${le.xs};
  color: ${S.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${S.backgroundHoverd};
  }
`,ie=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Pe=d.iframe`
  ${ie}

  height: 60px;
  border-radius: 30px;
`,Ke=d.audio`
  ${ie}
`,de=({el:s,sortByDate:u,setSortByDate:f,setLiColor:g})=>{const{activeCluster:a}=W(),{element:p,caption:b}=s,x=async()=>{const e=O({setLiColor:g,text:p,lang:a.lang,rate:a.rate});await xe(p),e&&E.error(e)},h=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=O({setLiColor:g,text:b,lang:s.lang,rate:s.rate});e&&E.error(e)},y=e=>{f(!u),u?E.success("Below is Recent"):E.success("Above is Recent"),e.stopImmediatePropagation()},m=b.endsWith("mp3"),k=!m&&b.startsWith("http"),n=!m&&!k;return t.jsxs(Ie,{children:[t.jsx(se,{onClick:x,children:p}),t.jsx(We,{onClick:y}),m&&t.jsx(Ke,{controls:!0,src:Y(b)}),k&&t.jsx(Pe,{src:Y(b)}),n&&t.jsx(se,{onClick:h,children:b})]})};de.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const ue=({el:s,article:u,isForm:f,setIsForm:g})=>{const a=V(),{user:p}=oe(),{activeCluster:b}=W(),{_id:x,element:h,caption:y}=s,m=f+24,{register:k,watch:n,setValue:e,handleSubmit:r}=Be({mode:"onBlur",defaultValues:{element:h,caption:y}});w.useEffect(()=>{e("element",u+h)},[u,h,e]),w.useEffect(()=>{const l=async o=>{o.key==="+"&&(o.preventDefault(),await i(),r($)()),o.key==="Enter"&&(o.preventDefault(),r($)()),o.key==="Escape"&&g(!1)};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const $=l=>{a(P({_id:x,lang:p.lang,...l})),g(!1)},i=async()=>{const l=n("element"),o={from:b.lang,to:p.lang},j=await $e(l,o);e("caption",j)};return t.jsxs(Ve,{onSubmit:r($),children:[t.jsx(te,{...k("element"),style:{height:m}}),t.jsxs(He,{children:[t.jsx(Ue,{children:t.jsx(fe,{size:"16px"})}),t.jsx(Ge,{type:"button",onClick:()=>g(m),children:t.jsx(ge,{size:"16px"})}),t.jsx(Oe,{type:"button",onClick:i,children:t.jsx(Le,{size:"16px"})})]}),t.jsx(te,{...k("caption"),style:{height:m}})]})};ue.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const pe=({el:s,sortByDate:u,setSortByDate:f,liColor:g,setLiColor:a})=>{const p=V(),{elementTrash:b,activeElement:x}=I(),[h,y]=w.useState(!1),{_id:m,element:k,favorite:n,checked:e}=s,r=b.find(C=>C._id===m),$=k===x,[i,l]=w.useState("");w.useEffect(()=>{const C=document.getElementById("active-element");C?(()=>{C==null||C.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const o=()=>{p(P({_id:m,favorite:!n}))},j=()=>{p(P({_id:m,checked:!e}))},H=()=>p(Ce(s)),U=C=>{if(h)y(!1);else{const M=C.target.closest("div").clientHeight;y(M)}},he=()=>{i===""&&l("der "),i==="der "&&l("die "),i==="die "&&l("das "),i==="das "&&l("")};return t.jsxs(Re,{id:$?"active-element":null,onClick:()=>p(ve(k)),liColor:g,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(De,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:o}),t.jsx(Ee,{size:"20px"})]}),t.jsxs(ze,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:j}),t.jsx(ye,{size:"15px"})]})]}),h&&t.jsx(ue,{el:s,article:i,isForm:h,setIsForm:y}),!h&&t.jsx(de,{el:s,sortByDate:u,setSortByDate:f,setLiColor:a}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(_e,{$hovered:r,onClick:H,children:t.jsx(ke,{size:"16px"})}),h&&t.jsx(ee,{onClick:he,children:t.jsx(Te,{size:"18px"})}),t.jsx(ee,{onClick:U,children:t.jsx(je,{size:"15px"})})]})]})};pe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Me=d.ul`
  width: 100%;
  list-style: none;
`,{white:qe}=T.colors,Je=()=>{const s=V(),{activeCluster:u}=W(),{allElements:f,elementTrash:g,elementFilter:a}=I(),[p,b]=w.useState(qe);let{elementSelect:x}=I();x=x||[];const[h,y]=w.useState(!1);w.useEffect(()=>{s(we())},[s]);const m=f.filter(e=>e.cluster===(u==null?void 0:u._id)).sort((e,r)=>e.createdAt.localeCompare(r.createdAt)),n=(()=>{const e=g.map(r=>r._id);return x.includes("trash")?m.filter(r=>e.includes(r._id)):m})().filter(({element:e,caption:r,favorite:$,checked:i})=>{const l=e.toLowerCase().includes(a)||r.toLowerCase().includes(a),o=x.includes("favorite")?l&&$===!0:l;return x.some(j=>["checked","unchecked"].includes(j))?x.includes("checked")?o&&i===!0:o&&i===!1:o}).sort(h?(e,r)=>r.createdAt.localeCompare(e.createdAt):(e,r)=>e.createdAt.localeCompare(r.createdAt));return t.jsxs(Me,{children:[n.map(e=>t.jsx(pe,{el:e,sortByDate:h,setSortByDate:y,liColor:p,setLiColor:b},e._id)),t.jsx(re,{filtredElements:n,setLiColor:b})]})},{s:ne,m:Qe}=T.indents,tt=()=>t.jsx(K,{$p:`0 ${Qe} ${ne} ${ne}`,children:t.jsx(Je,{})});export{tt as default};
