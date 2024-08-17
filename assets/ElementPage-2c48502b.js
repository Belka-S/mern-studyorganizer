import{s as u,t as T,u as F,j as t,T as xe,U as ae,P as c,b as le,q as P,y as H,S as ge,V as z,K as M,w as J,D as Q,W as X,X as G,Q as B,Y as $e,n as L,Z as Y,_ as ve,r as S,$ as ye,a0 as ke,a1 as O,a2 as je,F as q,C as Ce,A as we,z as Ee,a3 as Se,J as Te}from"./index-b3ff70e7.js";import{T as Be}from"./index.esm-4a815635.js";import{a as Ae}from"./index.esm-3c9f5bdc.js";import{v as Fe,u as Le}from"./index.esm-db85dffb.js";import{S as Re}from"./index.esm-ef57f8e2.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],W=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=T,ze=u.div`
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
`,De=()=>{const s=F(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),s(ae(null))};return t.jsx(ze,{onClick:o,children:t.jsx(xe,{size:"26px"})})},{background:Z,backgroundHoverd:_,white:I,borderLight:V}=T.colors,{button:N}=T.shadows,ie=({filtredElements:s,setLiColor:o})=>{const b=F(),{user:x}=le(),{activeCluster:i}=P(),{activeElement:h}=H(),g=({value:n})=>{b(J({_id:i._id,lang:n})).unwrap().then(e=>b(Q(e.result.cluster)))},$=({value:n})=>{b(J({_id:i._id,rate:n})).unwrap().then(e=>b(Q(e.result.cluster)))},a=({value:n})=>{const e=new FormData;e.append("lang",n),b(X(e))},j=({value:n})=>{const e=new FormData;e.append("rate",n),b(X(e))},m=n=>{o(Z);let e="";const l="$*@",k=s.findIndex(r=>r.element===h),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:p}=d[r];e+=p+l}const f=G({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)},C=n=>{o(Z);let e="";const l="$*@",k=s.findIndex(r=>r.element===h),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:p,caption:v,lang:w}=d[r];e+=p+`@±@${w}`+v+l}const f=$e({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)};return t.jsxs(ge,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===(i==null?void 0:i.lang)),onChange:g,placeholder:"Language...",$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==(i==null?void 0:i.rate)),onChange:$,placeholder:"Rate...",$ol:_,$b:I,$bh:V}),t.jsx(M,{onClick:m,$s:"m",$bs:N,children:"play"}),t.jsx(De,{}),t.jsx(M,{onClick:C,$s:"m",$bs:N,children:"all"}),t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===x.lang),onChange:a,$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==x.rate),onChange:j,$ol:_,$b:I,$bh:V})]})};ie.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:y,shadows:ee,indents:te}=T,We=L`
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
`,ce=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Fe}
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
`,R=L`
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
`,{colors:A,indents:de}=T,ue=L`
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
  border: 1px solid ${A.accent};
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
    border: 1px solid ${A.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${A.placeholder};
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
  color: ${A.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${A.background};
  }
`,pe=L`
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
`,he=({el:s,sortByDate:o,setSortByDate:b,setLiColor:x})=>{const{activeCluster:i}=P(),{element:h,caption:g}=s,$=async()=>{const e=G({setLiColor:x,text:h,lang:i.lang,rate:i.rate});await ve(h),e&&B.error(e)},a=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=G({setLiColor:x,text:g,lang:s.lang,rate:s.rate});e&&B.error(e)},j=e=>{b(!o),o?B.success("Below is Recent"):B.success("Above is Recent"),e.stopImmediatePropagation()},m=g.endsWith("mp3"),C=!m&&g.startsWith("http"),n=!m&&!C;return t.jsxs(Pe,{children:[t.jsx(oe,{onClick:$,children:h}),t.jsx(Ge,{onClick:j}),m&&t.jsx(Qe,{controls:!0,src:Y(g)}),C&&t.jsx(Je,{src:Y(g)}),n&&t.jsx(oe,{onClick:a,children:g})]})};he.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const me=({el:s,article:o,isForm:b,setIsForm:x})=>{const i=F(),{user:h}=le(),{activeCluster:g}=P(),{_id:$,element:a,caption:j}=s,m=b+24,{register:C,watch:n,setValue:e,handleSubmit:l,setFocus:k}=Le({mode:"onBlur",defaultValues:{element:a,caption:j}});S.useEffect(()=>{k("element"),o&&a.trim().startsWith("der")?e("element",o+a.replace("der","").trim()+", "):o&&a.trim().startsWith("die")?e("element",o+a.replace("die","").trim()+", "):o&&a.trim().startsWith("das")?e("element",o+a.replace("das","").trim()+", "):o?e("element",o+a+", "):e("element",o+a)},[o,a,k,e]),S.useEffect(()=>{const r=async p=>{p.key==="+"&&(p.preventDefault(),await f(),l(d)()),p.key==="Enter"&&(p.preventDefault(),l(d)()),p.key==="Escape"&&x(!1)};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const d=r=>{const p=h.lang;let v=r.element.trim(),w=r.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes(" ·")&&(v=v.replaceAll(" ·",",")),w.endsWith(",")&&(w=w.substring(0,w.length-1)),i(O({_id:$,lang:p,element:v,caption:w})),x(!1)},f=async()=>{const r=n("element"),p={from:g.lang,to:h.lang},v=await je(r,p);e("caption",v)};return t.jsxs(Ue,{onSubmit:l(d),children:[t.jsx(ne,{...C("element"),style:{height:m}}),t.jsxs(Oe,{children:[t.jsx(qe,{children:t.jsx(ye,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:()=>x(m),children:t.jsx(ke,{size:"16px"})}),t.jsx(Me,{type:"button",onClick:f,children:t.jsx(Re,{size:"16px"})})]}),t.jsx(ne,{...C("caption"),style:{height:m}})]})};me.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const fe=({el:s,sortByDate:o,setSortByDate:b,liColor:x,setLiColor:i})=>{const h=F(),{elementTrash:g,activeElement:$}=H(),[a,j]=S.useState(!1),{_id:m,element:C,favorite:n,checked:e}=s,l=g.find(E=>E._id===m),k=C===$,[d,f]=S.useState("");S.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const r=()=>{h(O({_id:m,favorite:!n}))},p=()=>{h(O({_id:m,checked:!e}))},v=()=>h(Se(s)),w=E=>{if(a)j(!1);else{const K=E.target.closest("div").clientHeight;j(K)}},be=()=>{d===""&&f("der "),d==="der "&&f("die "),d==="die "&&f("das "),d==="das "&&f("")};return t.jsxs(_e,{id:k?"active-element":null,onClick:()=>h(ae(C)),liColor:x,children:[t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ie,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),t.jsx(Be,{size:"20px"})]}),t.jsxs(Ve,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:p}),t.jsx(Ce,{size:"15px"})]})]}),a&&t.jsx(me,{el:s,article:d,isForm:a,setIsForm:j}),!a&&t.jsx(he,{el:s,sortByDate:o,setSortByDate:b,setLiColor:i}),t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:l,onClick:v,children:t.jsx(we,{size:"16px"})}),a&&t.jsx(se,{onClick:be,children:t.jsx(Ae,{size:"18px"})}),t.jsx(se,{onClick:w,children:t.jsx(Ee,{size:"15px"})})]})]})};fe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Xe=u.ul`
  width: 100%;
  list-style: none;
`,{white:Ye}=T.colors,Ze=()=>{const s=F(),{activeCluster:o}=P(),{allElements:b,elementTrash:x,elementFilter:i}=H(),[h,g]=S.useState(Ye);let{elementSelect:$}=H();$=$||[];const[a,j]=S.useState(!1);S.useEffect(()=>{s(Te())},[s]);const m=b.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=x.map(l=>l._id);return $.includes("trash")?m.filter(l=>e.includes(l._id)):m})().filter(({element:e,caption:l,favorite:k,checked:d})=>{const f=e.toLowerCase().includes(i)||l.toLowerCase().includes(i),r=$.includes("favorite")?f&&k===!0:f;return $.some(p=>["checked","unchecked"].includes(p))?$.includes("checked")?r&&d===!0:r&&d===!1:r}).sort(a?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt));return t.jsxs(Xe,{children:[n.map(e=>t.jsx(fe,{el:e,sortByDate:a,setSortByDate:j,liColor:h,setLiColor:g},e._id)),t.jsx(ie,{filtredElements:n,setLiColor:g})]})},{s:re,m:Ne}=T.indents,rt=()=>t.jsx(q,{$p:`0 ${Ne} ${re} ${re}`,children:t.jsx(Ze,{})});export{rt as default};
