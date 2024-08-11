import{t as B,P as c,u as H,b as oe,q as U,y as V,j as t,S as me,T as R,K as q,w as J,D as Q,U as X,V as O,Q as S,W as be,n as F,s as p,X as Y,Y as fe,r as T,Z as xe,_ as ge,$ as P,a0 as $e,a1 as ve,F as K,C as ye,A as ke,z as je,a2 as Ce,J as we}from"./index-c90fdac5.js";import{T as Ee}from"./index.esm-6f55b434.js";import{a as Te}from"./index.esm-16e6238a.js";import{v as Se,u as Be}from"./index.esm-63965258.js";import{S as Le}from"./index.esm-9422855f.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:Z,backgroundHoverd:W,white:_,borderLight:I}=B.colors,{button:N}=B.shadows,re=({filtredElements:s,setLiColor:r})=>{const g=H(),{user:$}=oe(),{activeCluster:i}=U(),{activeElement:h}=V(),f=({value:n})=>{g(J({_id:i._id,lang:n})).unwrap().then(e=>g(Q(e.result.cluster)))},x=({value:n})=>{g(J({_id:i._id,rate:n})).unwrap().then(e=>g(Q(e.result.cluster)))},a=({value:n})=>{const e=new FormData;e.append("lang",n),g(X(e))},k=({value:n})=>{const e=new FormData;e.append("rate",n),g(X(e))},m=n=>{r(Z);let e="";const l="$*@",y=s.findIndex(o=>o.element===h),d=s.splice(y===-1?0:y);for(let o=0;o<d.length;o+=1){const{element:u}=d[o];e+=u+l}const b=O({setLiColor:r,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),b&&S.error(b)},j=n=>{r(Z);let e="";const l="$*@",y=s.findIndex(o=>o.element===h),d=s.splice(y===-1?0:y);for(let o=0;o<d.length;o+=1){const{element:u,caption:C,lang:w}=d[o];e+=u+`@±@${w}`+C+l}const b=be({setLiColor:r,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),b&&S.error(b)};return t.jsxs(me,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(R,{options:D,defaultValue:D.find(n=>n.value===(i==null?void 0:i.lang)),onChange:f,placeholder:"Language...",$ol:W,$b:_,$bh:I}),t.jsx(R,{options:z,defaultValue:z.find(n=>n.value==(i==null?void 0:i.rate)),onChange:x,placeholder:"Rate...",$ol:W,$b:_,$bh:I}),t.jsx(q,{onClick:m,$s:"m",$bs:N,children:"play"}),t.jsx(q,{onClick:j,$s:"m",$bs:N,children:"all"}),t.jsx(R,{options:D,defaultValue:D.find(n=>n.value===$.lang),onChange:a,$ol:W,$b:_,$bh:I}),t.jsx(R,{options:z,defaultValue:z.find(n=>n.value==$.rate),onChange:k,$ol:W,$b:_,$bh:I})]})};re.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:v,shadows:Fe,indents:G}=B,Ae=F`
  /* margin-bottom: ${G.s}; */
  margin-bottom: 7px;
  padding-block: ${G.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${G.xs};
  font-size: 22px;
`,Re=p.li`
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
`,ae=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Se}
  }
`,De=p.label`
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
`,ze=p.label`
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
`,A=F`
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
`,We=p.button`
  ${A}

  opacity: ${({$hovered:s})=>s?1:0};
`,ee=p.button`
  ${A}

  opacity: 0;
`,{colors:L,indents:le}=B,ie=F`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,_e=p.div`
  ${ie}
`,Ie=p.form`
  ${ie}

  grid-template-columns: 12fr 1fr 12fr;
`,te=p.textarea`
  outline: none;
  border: 1px solid ${L.accent};
  border-radius: ${le.xs};
  resize: none;
`,Ve=p.div`
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
    border: 1px solid ${L.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${L.placeholder};
  }
`,He=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ue=p.button`
  ${A}
`,Ge=p.button`
  ${A}
`,Oe=p.button`
  ${A}
`,se=p.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${le.xs};
  color: ${L.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${L.backgroundHoverd};
  }
`,ce=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Pe=p.iframe`
  ${ce}

  height: 60px;
  border-radius: 30px;
`,Ke=p.audio`
  ${ce}
`,de=({el:s,sortByDate:r,setSortByDate:g,setLiColor:$})=>{const{activeCluster:i}=U(),{element:h,caption:f}=s,x=async()=>{const e=O({setLiColor:$,text:h,lang:i.lang,rate:i.rate});await fe(h),e&&S.error(e)},a=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=O({setLiColor:$,text:f,lang:s.lang,rate:s.rate});e&&S.error(e)},k=e=>{g(!r),r?S.success("Below is Recent"):S.success("Above is Recent"),e.stopImmediatePropagation()},m=f.endsWith("mp3"),j=!m&&f.startsWith("http"),n=!m&&!j;return t.jsxs(_e,{children:[t.jsx(se,{onClick:x,children:h}),t.jsx(Ve,{onClick:k}),m&&t.jsx(Ke,{controls:!0,src:Y(f)}),j&&t.jsx(Pe,{src:Y(f)}),n&&t.jsx(se,{onClick:a,children:f})]})};de.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const ue=({el:s,article:r,isForm:g,setIsForm:$})=>{const i=H(),{user:h}=oe(),{activeCluster:f}=U(),{_id:x,element:a,caption:k}=s,m=g+24,{register:j,watch:n,setValue:e,handleSubmit:l,setFocus:y}=Be({mode:"onBlur",defaultValues:{element:a,caption:k}});T.useEffect(()=>{y("element"),r&&a.trim().startsWith("der")?e("element",r+a.replace("der","").trim()+", "):r&&a.trim().startsWith("die")?e("element",r+a.replace("die","").trim()+", "):r&&a.trim().startsWith("das")?e("element",r+a.replace("das","").trim()+", "):r?e("element",r+a+", "):e("element",r+a)},[r,a,y,e]),T.useEffect(()=>{const o=async u=>{u.key==="+"&&(u.preventDefault(),await b(),l(d)()),u.key==="Enter"&&(u.preventDefault(),l(d)()),u.key==="Escape"&&$(!1)};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const d=o=>{const u=h.lang;let C=o.element.trim(),w=o.caption.trim();C.endsWith(",")&&(C=C.substring(0,C.length-1)),w.endsWith(",")&&(w=w.substring(0,w.length-1)),i(P({_id:x,lang:u,element:C,caption:w})),$(!1)},b=async()=>{const o=n("element"),u={from:f.lang,to:h.lang},C=await $e(o,u);e("caption",C)};return t.jsxs(Ie,{onSubmit:l(d),children:[t.jsx(te,{...j("element"),style:{height:m}}),t.jsxs(He,{children:[t.jsx(Ue,{children:t.jsx(xe,{size:"16px"})}),t.jsx(Ge,{type:"button",onClick:()=>$(m),children:t.jsx(ge,{size:"16px"})}),t.jsx(Oe,{type:"button",onClick:b,children:t.jsx(Le,{size:"16px"})})]}),t.jsx(te,{...j("caption"),style:{height:m}})]})};ue.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const pe=({el:s,sortByDate:r,setSortByDate:g,liColor:$,setLiColor:i})=>{const h=H(),{elementTrash:f,activeElement:x}=V(),[a,k]=T.useState(!1),{_id:m,element:j,favorite:n,checked:e}=s,l=f.find(E=>E._id===m),y=j===x,[d,b]=T.useState("");T.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const o=()=>{h(P({_id:m,favorite:!n}))},u=()=>{h(P({_id:m,checked:!e}))},C=()=>h(Ce(s)),w=E=>{if(a)k(!1);else{const M=E.target.closest("div").clientHeight;k(M)}},he=()=>{d===""&&b("der "),d==="der "&&b("die "),d==="die "&&b("das "),d==="das "&&b("")};return t.jsxs(Re,{id:y?"active-element":null,onClick:()=>h(ve(j)),liColor:$,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(De,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:o}),t.jsx(Ee,{size:"20px"})]}),t.jsxs(ze,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:u}),t.jsx(ye,{size:"15px"})]})]}),a&&t.jsx(ue,{el:s,article:d,isForm:a,setIsForm:k}),!a&&t.jsx(de,{el:s,sortByDate:r,setSortByDate:g,setLiColor:i}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(We,{$hovered:l,onClick:C,children:t.jsx(ke,{size:"16px"})}),a&&t.jsx(ee,{onClick:he,children:t.jsx(Te,{size:"18px"})}),t.jsx(ee,{onClick:w,children:t.jsx(je,{size:"15px"})})]})]})};pe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Me=p.ul`
  width: 100%;
  list-style: none;
`,{white:qe}=B.colors,Je=()=>{const s=H(),{activeCluster:r}=U(),{allElements:g,elementTrash:$,elementFilter:i}=V(),[h,f]=T.useState(qe);let{elementSelect:x}=V();x=x||[];const[a,k]=T.useState(!1);T.useEffect(()=>{s(we())},[s]);const m=g.filter(e=>e.cluster===(r==null?void 0:r._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=$.map(l=>l._id);return x.includes("trash")?m.filter(l=>e.includes(l._id)):m})().filter(({element:e,caption:l,favorite:y,checked:d})=>{const b=e.toLowerCase().includes(i)||l.toLowerCase().includes(i),o=x.includes("favorite")?b&&y===!0:b;return x.some(u=>["checked","unchecked"].includes(u))?x.includes("checked")?o&&d===!0:o&&d===!1:o}).sort(a?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt));return t.jsxs(Me,{children:[n.map(e=>t.jsx(pe,{el:e,sortByDate:a,setSortByDate:k,liColor:h,setLiColor:f},e._id)),t.jsx(re,{filtredElements:n,setLiColor:f})]})},{s:ne,m:Qe}=B.indents,tt=()=>t.jsx(K,{$p:`0 ${Qe} ${ne} ${ne}`,children:t.jsx(Je,{})});export{tt as default};
