import{s as u,t as T,u as A,j as t,T as xe,U as ae,P as c,b as le,q as P,y as H,S as ge,V as z,K as M,w as J,D as Q,W as X,X as G,Q as B,Y as $e,n as F,Z as Y,_ as ve,r as S,$ as ye,a0 as ke,a1 as O,a2 as je,F as q,C as Ce,A as we,z as Ee,a3 as Se,J as Te}from"./index-0a38d01b.js";import{T as Be}from"./index.esm-43cba07d.js";import{a as Le}from"./index.esm-009eb1fc.js";import{v as Ae,u as Fe}from"./index.esm-e476fce7.js";import{S as Re}from"./index.esm-3afa58dd.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],W=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=T,ze=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${U.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${U.placeholder};
    /* stroke: ${({$colored:s})=>s&&U.yellow}; */

    @keyframes refresh-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
    animation: refresh-spin infinite 12s linear;
  }
`,De=()=>{const s=A(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),s(ae(null))};return t.jsx(ze,{onClick:o,children:t.jsx(xe,{size:"26px"})})},{background:Z,backgroundHoverd:_,white:I,borderLight:V}=T.colors,{button:N}=T.shadows,ie=({filtredElements:s,setLiColor:o})=>{const b=A(),{user:x}=le(),{activeCluster:a}=P(),{activeElement:h}=H(),g=({value:n})=>{b(J({_id:a._id,lang:n})).unwrap().then(e=>b(Q(e.result.cluster)))},$=({value:n})=>{b(J({_id:a._id,rate:n})).unwrap().then(e=>b(Q(e.result.cluster)))},l=({value:n})=>{const e=new FormData;e.append("lang",n),b(X(e))},j=({value:n})=>{const e=new FormData;e.append("rate",n),b(X(e))},m=n=>{o(Z);let e="";const i="$*@",k=s.findIndex(r=>r.element===h),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:p}=d[r];e+=p+i}const f=G({setLiColor:o,divider:i,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&B.error(f)},C=n=>{o(Z);let e="";const i="$*@",k=s.findIndex(r=>r.element===h),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:p,caption:v,lang:w}=d[r];e+=p+`@±@${w}`+v+i}const f=$e({setLiColor:o,divider:i,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&B.error(f)};return t.jsxs(ge,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===(a==null?void 0:a.lang)),onChange:g,placeholder:"Language...",$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==(a==null?void 0:a.rate)),onChange:$,placeholder:"Rate...",$ol:_,$b:I,$bh:V}),t.jsx(M,{onClick:m,$s:"m",$bs:N,children:"play"}),t.jsx(De,{}),t.jsx(M,{onClick:C,$s:"m",$bs:N,children:"all"}),t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===x.lang),onChange:l,$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==x.rate),onChange:j,$ol:_,$b:I,$bh:V})]})};ie.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:y,shadows:ee,indents:te}=T,We=F`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${te.xs};
  font-size: 22px;
`,_e=u.li`
  ${We}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${y.border};
    box-shadow: ${ee.back};
  }

  &:hover {
    border-color: ${y.border};
    box-shadow: ${ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ce=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ae}
  }
`,Ie=u.label`
  ${ce}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?y.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?y.yellow:y.border};
  }
  &:hover svg {
    stroke: ${y.placeholder};
  }
`,Ve=u.label`
  ${ce}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${y.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?y.border:"transparent"};
  }
  &:hover svg {
    border-color: ${y.placeholder};
    color: ${({$hovered:s})=>s?y.placeholder:"transparent"};
  }
`,R=F`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${y.black};

  & svg {
    transition: color 250ms;
    color: ${y.border};
  }
  &:hover,
  &:hover svg {
    color: ${y.placeholder};
  }
`,He=u.button`
  ${R}

  opacity: ${({$hovered:s})=>s?1:0};
`,se=u.button`
  ${R}

  opacity: 0;
`,{colors:L,indents:de}=T,ue=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Pe=u.div`
  ${ue}
`,Ue=u.form`
  ${ue}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ne=u.textarea`
  outline: none;
  border: 1px solid ${L.accent};
  border-radius: ${de.xs};
  resize: none;
`,Ge=u.div`
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
`,Oe=u.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,qe=u.button`
  ${R}
`,Ke=u.button`
  ${R}
`,Me=u.button`
  ${R}
`,oe=u.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${de.xs};
  color: ${L.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${L.background};
  }
`,pe=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Je=u.iframe`
  ${pe}

  height: 60px;
  border-radius: 30px;
`,Qe=u.audio`
  ${pe}
`,he=({el:s,sortByDate:o,setSortByDate:b,setLiColor:x})=>{const{activeCluster:a}=P(),{element:h,caption:g}=s,$=async()=>{const e=G({setLiColor:x,text:h,lang:a.lang,rate:a.rate});await ve(h),e&&B.error(e)},l=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=G({setLiColor:x,text:g,lang:s.lang,rate:s.rate});e&&B.error(e)},j=e=>{b(!o),o?B.success("Below is Recent"):B.success("Above is Recent"),e.stopImmediatePropagation()},m=g.endsWith("mp3"),C=!m&&g.startsWith("http"),n=!m&&!C;return t.jsxs(Pe,{children:[t.jsx(oe,{onClick:$,children:h}),t.jsx(Ge,{onClick:j}),m&&t.jsx(Qe,{controls:!0,src:Y(g)}),C&&t.jsx(Je,{src:Y(g)}),n&&t.jsx(oe,{onClick:l,children:g})]})};he.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const me=({el:s,article:o,isForm:b,setIsForm:x})=>{const a=A(),{user:h}=le(),{activeCluster:g}=P(),{_id:$,element:l,caption:j}=s,m=b+24,{register:C,watch:n,setValue:e,handleSubmit:i,setFocus:k}=Fe({mode:"onBlur",defaultValues:{element:l,caption:j}});S.useEffect(()=>{k("element"),o&&l.trim().startsWith("der")?e("element",o+l.replace("der","").trim()+", "):o&&l.trim().startsWith("die")?e("element",o+l.replace("die","").trim()+", "):o&&l.trim().startsWith("das")?e("element",o+l.replace("das","").trim()+", "):o?e("element",o+l+", "):e("element",o+l)},[o,l,k,e]),S.useEffect(()=>{const r=async p=>{p.key==="+"&&(p.preventDefault(),await f(),i(d)()),p.key==="Enter"&&(p.preventDefault(),i(d)()),p.key==="Escape"&&x(!1)};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const d=r=>{const p=h.lang;let v=r.element.trim(),w=r.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes(" ·")&&(v=v.replaceAll(" ·",",")),w.endsWith(",")&&(w=w.substring(0,w.length-1)),a(O({_id:$,lang:p,element:v,caption:w})),x(!1)},f=async()=>{const r=n("element"),p={from:g.lang,to:h.lang},v=await je(r,p);e("caption",v)};return t.jsxs(Ue,{onSubmit:i(d),children:[t.jsx(ne,{...C("element"),style:{height:m}}),t.jsxs(Oe,{children:[t.jsx(qe,{children:t.jsx(ye,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:()=>x(m),children:t.jsx(ke,{size:"16px"})}),t.jsx(Me,{type:"button",onClick:f,children:t.jsx(Re,{size:"16px"})})]}),t.jsx(ne,{...C("caption"),style:{height:m}})]})};me.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const fe=({el:s,sortByDate:o,setSortByDate:b,liColor:x,setLiColor:a})=>{const h=A(),{elementTrash:g,activeElement:$}=H(),[l,j]=S.useState(!1),{_id:m,element:C,favorite:n,checked:e}=s,i=g.find(E=>E._id===m),k=C===$,[d,f]=S.useState("");S.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const r=()=>{h(O({_id:m,favorite:!n}))},p=()=>{h(O({_id:m,checked:!e}))},v=()=>h(Se(s)),w=E=>{if(l)j(!1);else{const K=E.target.closest("div").clientHeight;j(K)}},be=()=>{d===""&&f("der "),d==="der "&&f("die "),d==="die "&&f("das "),d==="das "&&f("")};return t.jsxs(_e,{id:k?"active-element":null,onClick:()=>h(ae(C)),liColor:x,children:[t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ie,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),t.jsx(Be,{size:"20px"})]}),t.jsxs(Ve,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:p}),t.jsx(Ce,{size:"15px"})]})]}),l&&t.jsx(me,{el:s,article:d,isForm:l,setIsForm:j}),!l&&t.jsx(he,{el:s,sortByDate:o,setSortByDate:b,setLiColor:a}),t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:i,onClick:v,children:t.jsx(we,{size:"16px"})}),l&&t.jsx(se,{onClick:be,children:t.jsx(Le,{size:"18px"})}),t.jsx(se,{onClick:w,children:t.jsx(Ee,{size:"15px"})})]})]})};fe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Xe=u.ul`
  width: 100%;
  list-style: none;
`,{white:Ye}=T.colors,Ze=()=>{const s=A(),{activeCluster:o}=P(),{allElements:b,elementTrash:x,elementFilter:a}=H(),[h,g]=S.useState(Ye);let{elementSelect:$}=H();$=$||[];const[l,j]=S.useState(!1);S.useEffect(()=>{s(Te())},[s]);const m=b.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,i)=>e.createdAt.localeCompare(i.createdAt)),n=(()=>{const e=x.map(i=>i._id);return $.includes("trash")?m.filter(i=>e.includes(i._id)):m})().filter(({element:e,caption:i,favorite:k,checked:d})=>{const f=e.toLowerCase().replace("·","").includes(a)||e.toLowerCase().includes(a)||i.toLowerCase().includes(a),r=$.includes("favorite")?f&&k===!0:f;return $.some(p=>["checked","unchecked"].includes(p))?$.includes("checked")?r&&d===!0:r&&d===!1:r}).sort(l?(e,i)=>i.createdAt.localeCompare(e.createdAt):(e,i)=>e.createdAt.localeCompare(i.createdAt));return t.jsxs(Xe,{children:[n.map(e=>t.jsx(fe,{el:e,sortByDate:l,setSortByDate:j,liColor:h,setLiColor:g},e._id)),t.jsx(ie,{filtredElements:n,setLiColor:g})]})},{s:re,m:Ne}=T.indents,rt=()=>t.jsx(q,{$p:`0 ${Ne} ${re} ${re}`,children:t.jsx(Ze,{})});export{rt as default};
