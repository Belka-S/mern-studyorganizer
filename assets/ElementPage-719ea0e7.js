import{t as T,P as i,u as H,b as oe,q as U,y as I,j as t,S as me,T as A,K as q,w as J,D as Q,U as X,V as P,Q as E,W as be,n as L,s as h,X as Y,Y as fe,r as w,Z as xe,_ as ge,$ as V,a0 as $e,a1 as ve,F as K,C as ye,A as ke,z as je,a2 as Ce,J as we}from"./index-63974d6b.js";import{T as Ee}from"./index.esm-68db3539.js";import{a as Te}from"./index.esm-3dd48ab3.js";import{v as Se,u as Be}from"./index.esm-6e6f95f2.js";import{S as Le}from"./index.esm-1161a5e5.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],D=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{background:Z,backgroundHoverd:z,white:W,borderLight:_}=T.colors,{button:N}=T.shadows,re=({filtredElements:s,setLiColor:r})=>{const g=H(),{user:$}=oe(),{activeCluster:a}=U(),{activeElement:u}=I(),x=({value:n})=>{g(J({_id:a._id,lang:n})).unwrap().then(e=>g(Q(e.result.cluster)))},m=({value:n})=>{g(J({_id:a._id,rate:n})).unwrap().then(e=>g(Q(e.result.cluster)))},l=({value:n})=>{const e=new FormData;e.append("lang",n),g(X(e))},k=({value:n})=>{const e=new FormData;e.append("rate",n),g(X(e))},b=n=>{r(Z);let e="";const c="$*@",y=s.findIndex(o=>o.element===u),d=s.splice(y===-1?0:y);for(let o=0;o<d.length;o+=1){const{element:p}=d[o];e+=p+c}const f=P({setLiColor:r,divider:c,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&E.error(f)},j=n=>{r(Z);let e="";const c="$*@",y=s.findIndex(o=>o.element===u),d=s.splice(y===-1?0:y);for(let o=0;o<d.length;o+=1){const{element:p,caption:S,lang:G}=d[o];e+=p+`@±@${G}`+S+c}const f=be({setLiColor:r,divider:c,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&E.error(f)};return t.jsxs(me,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===(a==null?void 0:a.lang)),onChange:x,placeholder:"Language...",$ol:z,$b:W,$bh:_}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==(a==null?void 0:a.rate)),onChange:m,placeholder:"Rate...",$ol:z,$b:W,$bh:_}),t.jsx(q,{onClick:b,$s:"m",$bs:N,children:"play"}),t.jsx(q,{onClick:j,$s:"m",$bs:N,children:"all"}),t.jsx(A,{options:R,defaultValue:R.find(n=>n.value===$.lang),onChange:l,$ol:z,$b:W,$bh:_}),t.jsx(A,{options:D,defaultValue:D.find(n=>n.value==$.rate),onChange:k,$ol:z,$b:W,$bh:_})]})};re.propTypes={filtredElements:i.object,setLiColor:i.func};const{colors:v,shadows:Fe,indents:O}=T,Ae=L`
  /* margin-bottom: ${O.s}; */
  margin-bottom: 7px;
  padding-block: ${O.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${O.xs};
  font-size: 22px;
`,Re=h.li`
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
`,De=h.label`
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
`,ze=h.label`
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
`,We=h.button`
  ${F}

  opacity: ${({$hovered:s})=>s?1:0};
`,ee=h.button`
  ${F}

  opacity: 0;
`,{colors:B,indents:le}=T,ce=L`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,_e=h.div`
  ${ce}
`,Ie=h.form`
  ${ce}

  grid-template-columns: 12fr 1fr 12fr;
`,te=h.textarea`
  outline: none;
  border: 1px solid ${B.accent};
  border-radius: ${le.xs};
  resize: none;
`,Ve=h.div`
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
`,He=h.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ue=h.button`
  ${F}
`,Ge=h.button`
  ${F}
`,Oe=h.button`
  ${F}
`,se=h.button`
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
`,Pe=h.iframe`
  ${ie}

  height: 60px;
  border-radius: 30px;
`,Ke=h.audio`
  ${ie}
`,de=({el:s,sortByDate:r,setSortByDate:g,setLiColor:$})=>{const{activeCluster:a}=U(),{element:u,caption:x}=s,m=async()=>{const e=P({setLiColor:$,text:u,lang:a.lang,rate:a.rate});await fe(u),e&&E.error(e)},l=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=P({setLiColor:$,text:x,lang:s.lang,rate:s.rate});e&&E.error(e)},k=e=>{g(!r),r?E.success("Below is Recent"):E.success("Above is Recent"),e.stopImmediatePropagation()},b=x.endsWith("mp3"),j=!b&&x.startsWith("http"),n=!b&&!j;return t.jsxs(_e,{children:[t.jsx(se,{onClick:m,children:u}),t.jsx(Ve,{onClick:k}),b&&t.jsx(Ke,{controls:!0,src:Y(x)}),j&&t.jsx(Pe,{src:Y(x)}),n&&t.jsx(se,{onClick:l,children:x})]})};de.propTypes={el:i.object,sortByDate:i.bool,setSortByDate:i.func,$active:i.bool,$hovered:i.bool,setLiColor:i.func};const ue=({el:s,article:r,isForm:g,setIsForm:$})=>{const a=H(),{user:u}=oe(),{activeCluster:x}=U(),{_id:m,element:l,caption:k}=s,b=g+24,{register:j,watch:n,setValue:e,handleSubmit:c,setFocus:y}=Be({mode:"onBlur",defaultValues:{element:l,caption:k}});w.useEffect(()=>{y("element"),r&&l.trim().startsWith("der")?e("element",r+l.replace("der","").trim()+", "):r&&l.trim().startsWith("die")?e("element",r+l.replace("die","").trim()+", "):r&&l.trim().startsWith("das")?e("element",r+l.replace("das","").trim()+", "):r?e("element",r+l+", "):e("element",r+l)},[r,l,y,e]),w.useEffect(()=>{const o=async p=>{p.key==="+"&&(p.preventDefault(),await f(),c(d)()),p.key==="Enter"&&(p.preventDefault(),c(d)()),p.key==="Escape"&&$(!1)};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const d=o=>{if(o.element.endsWith(", ")){const p=o.element.substring(0,o.element.length-2);a(V({_id:m,lang:u.lang,...o,element:p}))}else a(V({_id:m,lang:u.lang,...o}));$(!1)},f=async()=>{const o=n("element"),p={from:x.lang,to:u.lang},S=await $e(o,p);e("caption",S)};return t.jsxs(Ie,{onSubmit:c(d),children:[t.jsx(te,{...j("element"),style:{height:b}}),t.jsxs(He,{children:[t.jsx(Ue,{children:t.jsx(xe,{size:"16px"})}),t.jsx(Ge,{type:"button",onClick:()=>$(b),children:t.jsx(ge,{size:"16px"})}),t.jsx(Oe,{type:"button",onClick:f,children:t.jsx(Le,{size:"16px"})})]}),t.jsx(te,{...j("caption"),style:{height:b}})]})};ue.propTypes={el:i.object,article:i.string,isForm:i.oneOfType([i.bool,i.number]),setIsForm:i.func};const pe=({el:s,sortByDate:r,setSortByDate:g,liColor:$,setLiColor:a})=>{const u=H(),{elementTrash:x,activeElement:m}=I(),[l,k]=w.useState(!1),{_id:b,element:j,favorite:n,checked:e}=s,c=x.find(C=>C._id===b),y=j===m,[d,f]=w.useState("");w.useEffect(()=>{const C=document.getElementById("active-element");C?(()=>{C==null||C.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const o=()=>{u(V({_id:b,favorite:!n}))},p=()=>{u(V({_id:b,checked:!e}))},S=()=>u(Ce(s)),G=C=>{if(l)k(!1);else{const M=C.target.closest("div").clientHeight;k(M)}},he=()=>{d===""&&f("der "),d==="der "&&f("die "),d==="die "&&f("das "),d==="das "&&f("")};return t.jsxs(Re,{id:y?"active-element":null,onClick:()=>u(ve(j)),liColor:$,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(De,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:o}),t.jsx(Ee,{size:"20px"})]}),t.jsxs(ze,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:p}),t.jsx(ye,{size:"15px"})]})]}),l&&t.jsx(ue,{el:s,article:d,isForm:l,setIsForm:k}),!l&&t.jsx(de,{el:s,sortByDate:r,setSortByDate:g,setLiColor:a}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(We,{$hovered:c,onClick:S,children:t.jsx(ke,{size:"16px"})}),l&&t.jsx(ee,{onClick:he,children:t.jsx(Te,{size:"18px"})}),t.jsx(ee,{onClick:G,children:t.jsx(je,{size:"15px"})})]})]})};pe.propTypes={el:i.object,sortByDate:i.bool,setSortByDate:i.func,liColor:i.string,setLiColor:i.func};const Me=h.ul`
  width: 100%;
  list-style: none;
`,{white:qe}=T.colors,Je=()=>{const s=H(),{activeCluster:r}=U(),{allElements:g,elementTrash:$,elementFilter:a}=I(),[u,x]=w.useState(qe);let{elementSelect:m}=I();m=m||[];const[l,k]=w.useState(!1);w.useEffect(()=>{s(we())},[s]);const b=g.filter(e=>e.cluster===(r==null?void 0:r._id)).sort((e,c)=>e.createdAt.localeCompare(c.createdAt)),n=(()=>{const e=$.map(c=>c._id);return m.includes("trash")?b.filter(c=>e.includes(c._id)):b})().filter(({element:e,caption:c,favorite:y,checked:d})=>{const f=e.toLowerCase().includes(a)||c.toLowerCase().includes(a),o=m.includes("favorite")?f&&y===!0:f;return m.some(p=>["checked","unchecked"].includes(p))?m.includes("checked")?o&&d===!0:o&&d===!1:o}).sort(l?(e,c)=>c.createdAt.localeCompare(e.createdAt):(e,c)=>e.createdAt.localeCompare(c.createdAt));return t.jsxs(Me,{children:[n.map(e=>t.jsx(pe,{el:e,sortByDate:l,setSortByDate:k,liColor:u,setLiColor:x},e._id)),t.jsx(re,{filtredElements:n,setLiColor:x})]})},{s:ne,m:Qe}=T.indents,tt=()=>t.jsx(K,{$p:`0 ${Qe} ${ne} ${ne}`,children:t.jsx(Je,{})});export{tt as default};
