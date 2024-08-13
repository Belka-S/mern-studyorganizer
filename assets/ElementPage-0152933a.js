import{s as u,t as T,u as L,j as t,T as be,U as re,P as c,b as ae,q as P,y as H,S as xe,V as z,K as J,w as Q,D as X,W as Y,X as O,Q as B,Y as ge,n as A,Z,_ as $e,r as S,$ as ve,a0 as ye,a1 as q,a2 as ke,F as K,C as je,A as Ce,z as we,a3 as Ee,J as Se}from"./index-7952de9a.js";import{T as Te}from"./index.esm-dabfc6c5.js";import{a as Be}from"./index.esm-ff59636c.js";import{v as Fe,u as Le}from"./index.esm-2caeadd2.js";import{S as Ae}from"./index.esm-339f406a.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],W=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=T,Re=u.div`
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
`,ze=()=>{const s=L(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),s(re(null))};return t.jsx(Re,{onClick:o,children:t.jsx(be,{size:"26px"})})},{background:N,backgroundHoverd:_,white:I,borderLight:V}=T.colors,{button:ee}=T.shadows,le=({filtredElements:s,setLiColor:o})=>{const b=L(),{user:x}=ae(),{activeCluster:i}=P(),{activeElement:h}=H(),g=({value:n})=>{b(Q({_id:i._id,lang:n})).unwrap().then(e=>b(X(e.result.cluster)))},$=({value:n})=>{b(Q({_id:i._id,rate:n})).unwrap().then(e=>b(X(e.result.cluster)))},a=({value:n})=>{const e=new FormData;e.append("lang",n),b(Y(e))},k=({value:n})=>{const e=new FormData;e.append("rate",n),b(Y(e))},m=n=>{o(N);let e="";const l="$*@",y=s.findIndex(r=>r.element===h),d=s.splice(y===-1?0:y);for(let r=0;r<d.length;r+=1){const{element:p}=d[r];e+=p+l}const f=O({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)},j=n=>{o(N);let e="";const l="$*@",y=s.findIndex(r=>r.element===h),d=s.splice(y===-1?0:y);for(let r=0;r<d.length;r+=1){const{element:p,caption:C,lang:w}=d[r];e+=p+`@±@${w}`+C+l}const f=ge({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)};return t.jsxs(xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===(i==null?void 0:i.lang)),onChange:g,placeholder:"Language...",$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==(i==null?void 0:i.rate)),onChange:$,placeholder:"Rate...",$ol:_,$b:I,$bh:V}),t.jsx(J,{onClick:m,$s:"m",$bs:ee,children:"play"}),t.jsx(ze,{}),t.jsx(J,{onClick:j,$s:"m",$bs:ee,children:"all"}),t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===x.lang),onChange:a,$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==x.rate),onChange:k,$ol:_,$b:I,$bh:V})]})};le.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:v,shadows:De,indents:G}=T,We=A`
  /* margin-bottom: ${G.s}; */
  margin-bottom: 7px;
  padding-block: ${G.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${G.xs};
  font-size: 22px;
`,_e=u.li`
  ${We}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${v.border};
  }

  &:hover {
    border-color: ${v.border};
    box-shadow: ${De.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ie=A`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Fe}
  }
`,Ie=u.label`
  ${ie}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?v.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?v.yellow:v.border};
  }
  &:hover svg {
    stroke: ${v.placeholder};
  }
`,Ve=u.label`
  ${ie}
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
`,R=A`
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
`,He=u.button`
  ${R}

  opacity: ${({$hovered:s})=>s?1:0};
`,te=u.button`
  ${R}

  opacity: 0;
`,{colors:F,indents:ce}=T,de=A`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Pe=u.div`
  ${de}
`,Ue=u.form`
  ${de}

  grid-template-columns: 12fr 1fr 12fr;
`,se=u.textarea`
  outline: none;
  border: 1px solid ${F.accent};
  border-radius: ${ce.xs};
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
    border: 1px solid ${F.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${F.placeholder};
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
`,ne=u.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ce.xs};
  color: ${F.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${F.backgroundHoverd};
  }
`,ue=A`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Je=u.iframe`
  ${ue}

  height: 60px;
  border-radius: 30px;
`,Qe=u.audio`
  ${ue}
`,pe=({el:s,sortByDate:o,setSortByDate:b,setLiColor:x})=>{const{activeCluster:i}=P(),{element:h,caption:g}=s,$=async()=>{const e=O({setLiColor:x,text:h,lang:i.lang,rate:i.rate});await $e(h),e&&B.error(e)},a=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=O({setLiColor:x,text:g,lang:s.lang,rate:s.rate});e&&B.error(e)},k=e=>{b(!o),o?B.success("Below is Recent"):B.success("Above is Recent"),e.stopImmediatePropagation()},m=g.endsWith("mp3"),j=!m&&g.startsWith("http"),n=!m&&!j;return t.jsxs(Pe,{children:[t.jsx(ne,{onClick:$,children:h}),t.jsx(Ge,{onClick:k}),m&&t.jsx(Qe,{controls:!0,src:Z(g)}),j&&t.jsx(Je,{src:Z(g)}),n&&t.jsx(ne,{onClick:a,children:g})]})};pe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const he=({el:s,article:o,isForm:b,setIsForm:x})=>{const i=L(),{user:h}=ae(),{activeCluster:g}=P(),{_id:$,element:a,caption:k}=s,m=b+24,{register:j,watch:n,setValue:e,handleSubmit:l,setFocus:y}=Le({mode:"onBlur",defaultValues:{element:a,caption:k}});S.useEffect(()=>{y("element"),o&&a.trim().startsWith("der")?e("element",o+a.replace("der","").trim()+", "):o&&a.trim().startsWith("die")?e("element",o+a.replace("die","").trim()+", "):o&&a.trim().startsWith("das")?e("element",o+a.replace("das","").trim()+", "):o?e("element",o+a+", "):e("element",o+a)},[o,a,y,e]),S.useEffect(()=>{const r=async p=>{p.key==="+"&&(p.preventDefault(),await f(),l(d)()),p.key==="Enter"&&(p.preventDefault(),l(d)()),p.key==="Escape"&&x(!1)};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const d=r=>{const p=h.lang;let C=r.element.trim(),w=r.caption.trim();C.endsWith(",")&&(C=C.substring(0,C.length-1)),w.endsWith(",")&&(w=w.substring(0,w.length-1)),i(q({_id:$,lang:p,element:C,caption:w})),x(!1)},f=async()=>{const r=n("element"),p={from:g.lang,to:h.lang},C=await ke(r,p);e("caption",C)};return t.jsxs(Ue,{onSubmit:l(d),children:[t.jsx(se,{...j("element"),style:{height:m}}),t.jsxs(Oe,{children:[t.jsx(qe,{children:t.jsx(ve,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:()=>x(m),children:t.jsx(ye,{size:"16px"})}),t.jsx(Me,{type:"button",onClick:f,children:t.jsx(Ae,{size:"16px"})})]}),t.jsx(se,{...j("caption"),style:{height:m}})]})};he.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const me=({el:s,sortByDate:o,setSortByDate:b,liColor:x,setLiColor:i})=>{const h=L(),{elementTrash:g,activeElement:$}=H(),[a,k]=S.useState(!1),{_id:m,element:j,favorite:n,checked:e}=s,l=g.find(E=>E._id===m),y=j===$,[d,f]=S.useState("");S.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const r=()=>{h(q({_id:m,favorite:!n}))},p=()=>{h(q({_id:m,checked:!e}))},C=()=>h(Ee(s)),w=E=>{if(a)k(!1);else{const M=E.target.closest("div").clientHeight;k(M)}},fe=()=>{d===""&&f("der "),d==="der "&&f("die "),d==="die "&&f("das "),d==="das "&&f("")};return t.jsxs(_e,{id:y?"active-element":null,onClick:()=>h(re(j)),liColor:x,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ie,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),t.jsx(Te,{size:"20px"})]}),t.jsxs(Ve,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:p}),t.jsx(je,{size:"15px"})]})]}),a&&t.jsx(he,{el:s,article:d,isForm:a,setIsForm:k}),!a&&t.jsx(pe,{el:s,sortByDate:o,setSortByDate:b,setLiColor:i}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:l,onClick:C,children:t.jsx(Ce,{size:"16px"})}),a&&t.jsx(te,{onClick:fe,children:t.jsx(Be,{size:"18px"})}),t.jsx(te,{onClick:w,children:t.jsx(we,{size:"15px"})})]})]})};me.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Xe=u.ul`
  width: 100%;
  list-style: none;
`,{white:Ye}=T.colors,Ze=()=>{const s=L(),{activeCluster:o}=P(),{allElements:b,elementTrash:x,elementFilter:i}=H(),[h,g]=S.useState(Ye);let{elementSelect:$}=H();$=$||[];const[a,k]=S.useState(!1);S.useEffect(()=>{s(Se())},[s]);const m=b.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=x.map(l=>l._id);return $.includes("trash")?m.filter(l=>e.includes(l._id)):m})().filter(({element:e,caption:l,favorite:y,checked:d})=>{const f=e.toLowerCase().includes(i)||l.toLowerCase().includes(i),r=$.includes("favorite")?f&&y===!0:f;return $.some(p=>["checked","unchecked"].includes(p))?$.includes("checked")?r&&d===!0:r&&d===!1:r}).sort(a?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt));return t.jsxs(Xe,{children:[n.map(e=>t.jsx(me,{el:e,sortByDate:a,setSortByDate:k,liColor:h,setLiColor:g},e._id)),t.jsx(le,{filtredElements:n,setLiColor:g})]})},{s:oe,m:Ne}=T.indents,rt=()=>t.jsx(K,{$p:`0 ${Ne} ${oe} ${oe}`,children:t.jsx(Ze,{})});export{rt as default};
