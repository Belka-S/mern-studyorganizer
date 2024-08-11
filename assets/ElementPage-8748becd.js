import{t as T,P as i,u as V,b as oe,q as H,y as W,j as t,S as me,T as A,K as q,w as J,D as Q,U as X,V as O,Q as E,W as be,n as L,s as u,X as Y,Y as fe,r as w,Z as xe,_ as ge,$ as P,a0 as $e,a1 as ve,F as K,C as ye,A as ke,z as je,a2 as Ce,J as we}from"./index-bd3e312a.js";import{T as Ee}from"./index.esm-3615bbd5.js";import{a as Te}from"./index.esm-71c658f9.js";import{v as Se,u as Be}from"./index.esm-e2f06554.js";import{S as Le}from"./index.esm-85467924.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],D=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:Z,backgroundHoverd:z,white:_,borderLight:I}=T.colors,{button:N}=T.shadows,re=({filtredElements:s,setLiColor:o})=>{const g=V(),{user:$}=oe(),{activeCluster:c}=H(),{activeElement:p}=W(),b=({value:n})=>{g(J({_id:c._id,lang:n})).unwrap().then(e=>g(Q(e.result.cluster)))},f=({value:n})=>{g(J({_id:c._id,rate:n})).unwrap().then(e=>g(Q(e.result.cluster)))},a=({value:n})=>{const e=new FormData;e.append("lang",n),g(X(e))},k=({value:n})=>{const e=new FormData;e.append("rate",n),g(X(e))},h=n=>{o(Z);let e="";const l="$*@",y=s.findIndex(r=>r.element===p),d=s.splice(y===-1?0:y);for(let r=0;r<d.length;r+=1){const{element:x}=d[r];e+=x+l}const m=O({setLiColor:o,divider:l,text:e,lang:c.lang,rate:c.rate});n.target.blur(),m&&E.error(m)},j=n=>{o(Z);let e="";const l="$*@",y=s.findIndex(r=>r.element===p),d=s.splice(y===-1?0:y);for(let r=0;r<d.length;r+=1){const{element:x,caption:S,lang:U}=d[r];e+=x+`@±@${U}`+S+l}const m=be({setLiColor:o,divider:l,text:e,lang:c.lang,rate:c.rate});n.target.blur(),m&&E.error(m)};return t.jsxs(me,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===(c==null?void 0:c.lang)),onChange:b,placeholder:"Language...",$ol:z,$b:_,$bh:I}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==(c==null?void 0:c.rate)),onChange:f,placeholder:"Rate...",$ol:z,$b:_,$bh:I}),t.jsx(q,{onClick:h,$s:"m",$bs:N,children:"play"}),t.jsx(q,{onClick:j,$s:"m",$bs:N,children:"all"}),t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===$.lang),onChange:a,$ol:z,$b:_,$bh:I}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==$.rate),onChange:k,$ol:z,$b:_,$bh:I})]})};re.propTypes={filtredElements:i.object,setLiColor:i.func};const{colors:v,shadows:Fe,indents:G}=T,Ae=L`
  /* margin-bottom: ${G.s}; */
  margin-bottom: 7px;
  padding-block: ${G.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${G.xs};
  font-size: 22px;
`,Re=u.li`
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
`,ae=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Se}
  }
`,De=u.label`
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
`,ze=u.label`
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
`,F=L`
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
`,_e=u.button`
  ${F}

  opacity: ${({$hovered:s})=>s?1:0};
`,ee=u.button`
  ${F}

  opacity: 0;
`,{colors:B,indents:le}=T,ce=L`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Ie=u.div`
  ${ce}
`,We=u.form`
  ${ce}

  grid-template-columns: 12fr 1fr 12fr;
`,te=u.textarea`
  outline: none;
  border: 1px solid ${B.accent};
  border-radius: ${le.xs};
  resize: none;
`,Ve=u.div`
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
    border: 1px solid ${B.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${B.placeholder};
  }
`,He=u.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ue=u.button`
  ${F}
`,Ge=u.button`
  ${F}
`,Oe=u.button`
  ${F}
`,se=u.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${le.xs};
  color: ${B.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${B.backgroundHoverd};
  }
`,ie=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Pe=u.iframe`
  ${ie}

  height: 60px;
  border-radius: 30px;
`,Ke=u.audio`
  ${ie}
`,de=({el:s,sortByDate:o,setSortByDate:g,setLiColor:$})=>{const{activeCluster:c}=H(),{element:p,caption:b}=s,f=async()=>{const e=O({setLiColor:$,text:p,lang:c.lang,rate:c.rate});await fe(p),e&&E.error(e)},a=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=O({setLiColor:$,text:b,lang:s.lang,rate:s.rate});e&&E.error(e)},k=e=>{g(!o),o?E.success("Below is Recent"):E.success("Above is Recent"),e.stopImmediatePropagation()},h=b.endsWith("mp3"),j=!h&&b.startsWith("http"),n=!h&&!j;return t.jsxs(Ie,{children:[t.jsx(se,{onClick:f,children:p}),t.jsx(Ve,{onClick:k}),h&&t.jsx(Ke,{controls:!0,src:Y(b)}),j&&t.jsx(Pe,{src:Y(b)}),n&&t.jsx(se,{onClick:a,children:b})]})};de.propTypes={el:i.object,sortByDate:i.bool,setSortByDate:i.func,$active:i.bool,$hovered:i.bool,setLiColor:i.func};const ue=({el:s,article:o,isForm:g,setIsForm:$})=>{const c=V(),{user:p}=oe(),{activeCluster:b}=H(),{_id:f,element:a,caption:k}=s,h=g+24,{register:j,watch:n,setValue:e,handleSubmit:l,setFocus:y}=Be({mode:"onBlur",defaultValues:{element:a,caption:k}});w.useEffect(()=>{y("element"),o&&a.trim().startsWith("der")?e("element",o+a.replace("der","").trim()+", "):o&&a.trim().startsWith("die")?e("element",o+a.replace("die","").trim()+", "):o&&a.trim().startsWith("das")?e("element",o+a.replace("das","").trim()+", "):o?e("element",o+a+", "):e("element",o+a)},[o,a,y,e]),w.useEffect(()=>{const r=async x=>{x.key==="+"&&(x.preventDefault(),await m(),l(d)()),x.key==="Enter"&&(x.preventDefault(),l(d)()),x.key==="Escape"&&$(!1)};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const d=r=>{c(P({_id:f,lang:p.lang,...r})),$(!1)},m=async()=>{const r=n("element"),x={from:b.lang,to:p.lang},S=await $e(r,x);e("caption",S)};return t.jsxs(We,{onSubmit:l(d),children:[t.jsx(te,{...j("element"),style:{height:h}}),t.jsxs(He,{children:[t.jsx(Ue,{children:t.jsx(xe,{size:"16px"})}),t.jsx(Ge,{type:"button",onClick:()=>$(h),children:t.jsx(ge,{size:"16px"})}),t.jsx(Oe,{type:"button",onClick:m,children:t.jsx(Le,{size:"16px"})})]}),t.jsx(te,{...j("caption"),style:{height:h}})]})};ue.propTypes={el:i.object,article:i.string,isForm:i.oneOfType([i.bool,i.number]),setIsForm:i.func};const pe=({el:s,sortByDate:o,setSortByDate:g,liColor:$,setLiColor:c})=>{const p=V(),{elementTrash:b,activeElement:f}=W(),[a,k]=w.useState(!1),{_id:h,element:j,favorite:n,checked:e}=s,l=b.find(C=>C._id===h),y=j===f,[d,m]=w.useState("");w.useEffect(()=>{const C=document.getElementById("active-element");C?(()=>{C==null||C.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const r=()=>{p(P({_id:h,favorite:!n}))},x=()=>{p(P({_id:h,checked:!e}))},S=()=>p(Ce(s)),U=C=>{if(a)k(!1);else{const M=C.target.closest("div").clientHeight;k(M)}},he=()=>{d===""&&m("der "),d==="der "&&m("die "),d==="die "&&m("das "),d==="das "&&m("")};return t.jsxs(Re,{id:y?"active-element":null,onClick:()=>p(ve(j)),liColor:$,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(De,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),t.jsx(Ee,{size:"20px"})]}),t.jsxs(ze,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:x}),t.jsx(ye,{size:"15px"})]})]}),a&&t.jsx(ue,{el:s,article:d,isForm:a,setIsForm:k}),!a&&t.jsx(de,{el:s,sortByDate:o,setSortByDate:g,setLiColor:c}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(_e,{$hovered:l,onClick:S,children:t.jsx(ke,{size:"16px"})}),a&&t.jsx(ee,{onClick:he,children:t.jsx(Te,{size:"18px"})}),t.jsx(ee,{onClick:U,children:t.jsx(je,{size:"15px"})})]})]})};pe.propTypes={el:i.object,sortByDate:i.bool,setSortByDate:i.func,liColor:i.string,setLiColor:i.func};const Me=u.ul`
  width: 100%;
  list-style: none;
`,{white:qe}=T.colors,Je=()=>{const s=V(),{activeCluster:o}=H(),{allElements:g,elementTrash:$,elementFilter:c}=W(),[p,b]=w.useState(qe);let{elementSelect:f}=W();f=f||[];const[a,k]=w.useState(!1);w.useEffect(()=>{s(we())},[s]);const h=g.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=$.map(l=>l._id);return f.includes("trash")?h.filter(l=>e.includes(l._id)):h})().filter(({element:e,caption:l,favorite:y,checked:d})=>{const m=e.toLowerCase().includes(c)||l.toLowerCase().includes(c),r=f.includes("favorite")?m&&y===!0:m;return f.some(x=>["checked","unchecked"].includes(x))?f.includes("checked")?r&&d===!0:r&&d===!1:r}).sort(a?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt));return t.jsxs(Me,{children:[n.map(e=>t.jsx(pe,{el:e,sortByDate:a,setSortByDate:k,liColor:p,setLiColor:b},e._id)),t.jsx(re,{filtredElements:n,setLiColor:b})]})},{s:ne,m:Qe}=T.indents,tt=()=>t.jsx(K,{$p:`0 ${Qe} ${ne} ${ne}`,children:t.jsx(Je,{})});export{tt as default};
