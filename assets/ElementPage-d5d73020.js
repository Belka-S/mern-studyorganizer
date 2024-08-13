import{s as u,t as T,u as F,j as t,T as xe,U as ae,P as c,b as le,q as P,y as H,S as ge,V as z,K as J,w as Q,D as X,W as Y,X as O,Q as B,Y as $e,n as L,Z,_ as ve,r as S,$ as ye,a0 as ke,a1 as q,a2 as je,F as K,C as Ce,A as we,z as Ee,a3 as Se,J as Te}from"./index-68026560.js";import{T as Be}from"./index.esm-cfee7510.js";import{a as Ae}from"./index.esm-4cd670ee.js";import{v as Fe,u as Le}from"./index.esm-00e8d24a.js";import{S as Re}from"./index.esm-01608405.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],W=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=T,ze=u.div`
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
`,De=()=>{const s=F(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),s(ae(null))};return t.jsx(ze,{onClick:o,children:t.jsx(xe,{size:"26px"})})},{background:N,backgroundHoverd:_,white:I,borderLight:V}=T.colors,{button:ee}=T.shadows,ie=({filtredElements:s,setLiColor:o})=>{const b=F(),{user:x}=le(),{activeCluster:i}=P(),{activeElement:p}=H(),g=({value:n})=>{b(Q({_id:i._id,lang:n})).unwrap().then(e=>b(X(e.result.cluster)))},$=({value:n})=>{b(Q({_id:i._id,rate:n})).unwrap().then(e=>b(X(e.result.cluster)))},a=({value:n})=>{const e=new FormData;e.append("lang",n),b(Y(e))},j=({value:n})=>{const e=new FormData;e.append("rate",n),b(Y(e))},m=n=>{o(N);let e="";const l="$*@",k=s.findIndex(r=>r.element===p),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:h}=d[r];e+=h+l}const f=O({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)},C=n=>{o(N);let e="";const l="$*@",k=s.findIndex(r=>r.element===p),d=s.splice(k===-1?0:k);for(let r=0;r<d.length;r+=1){const{element:h,caption:v,lang:w}=d[r];e+=h+`@±@${w}`+v+l}const f=$e({setLiColor:o,divider:l,text:e,lang:i.lang,rate:i.rate});n.target.blur(),f&&B.error(f)};return t.jsxs(ge,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===(i==null?void 0:i.lang)),onChange:g,placeholder:"Language...",$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==(i==null?void 0:i.rate)),onChange:$,placeholder:"Rate...",$ol:_,$b:I,$bh:V}),t.jsx(J,{onClick:m,$s:"m",$bs:ee,children:"play"}),t.jsx(De,{}),t.jsx(J,{onClick:C,$s:"m",$bs:ee,children:"all"}),t.jsx(z,{options:D,defaultValue:D.find(n=>n.value===x.lang),onChange:a,$ol:_,$b:I,$bh:V}),t.jsx(z,{options:W,defaultValue:W.find(n=>n.value==x.rate),onChange:j,$ol:_,$b:I,$bh:V})]})};ie.propTypes={filtredElements:c.object,setLiColor:c.func};const{colors:y,shadows:te,indents:G}=T,We=L`
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
    border: 1px solid ${y.border};
    box-shadow: ${te.back};
  }

  &:hover {
    border-color: ${y.border};
    box-shadow: ${te.back};
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
  /* padding-block: 4px; */
  /* height: 100%; */
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
`,he=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Je=u.iframe`
  ${he}

  height: 60px;
  border-radius: 30px;
`,Qe=u.audio`
  ${he}
`,pe=({el:s,sortByDate:o,setSortByDate:b,setLiColor:x})=>{const{activeCluster:i}=P(),{element:p,caption:g}=s,$=async()=>{const e=O({setLiColor:x,text:p,lang:i.lang,rate:i.rate});await ve(p),e&&B.error(e)},a=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=O({setLiColor:x,text:g,lang:s.lang,rate:s.rate});e&&B.error(e)},j=e=>{b(!o),o?B.success("Below is Recent"):B.success("Above is Recent"),e.stopImmediatePropagation()},m=g.endsWith("mp3"),C=!m&&g.startsWith("http"),n=!m&&!C;return t.jsxs(Pe,{children:[t.jsx(oe,{onClick:$,children:p}),t.jsx(Ge,{onClick:j}),m&&t.jsx(Qe,{controls:!0,src:Z(g)}),C&&t.jsx(Je,{src:Z(g)}),n&&t.jsx(oe,{onClick:a,children:g})]})};pe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,$active:c.bool,$hovered:c.bool,setLiColor:c.func};const me=({el:s,article:o,isForm:b,setIsForm:x})=>{const i=F(),{user:p}=le(),{activeCluster:g}=P(),{_id:$,element:a,caption:j}=s,m=b+24,{register:C,watch:n,setValue:e,handleSubmit:l,setFocus:k}=Le({mode:"onBlur",defaultValues:{element:a,caption:j}});S.useEffect(()=>{k("element"),o&&a.trim().startsWith("der")?e("element",o+a.replace("der","").trim()+", "):o&&a.trim().startsWith("die")?e("element",o+a.replace("die","").trim()+", "):o&&a.trim().startsWith("das")?e("element",o+a.replace("das","").trim()+", "):o?e("element",o+a+", "):e("element",o+a)},[o,a,k,e]),S.useEffect(()=>{const r=async h=>{h.key==="+"&&(h.preventDefault(),await f(),l(d)()),h.key==="Enter"&&(h.preventDefault(),l(d)()),h.key==="Escape"&&x(!1)};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const d=r=>{const h=p.lang;let v=r.element.trim(),w=r.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes(" ·")&&(v=v.replaceAll(" ·",",")),w.endsWith(",")&&(w=w.substring(0,w.length-1)),i(q({_id:$,lang:h,element:v,caption:w})),x(!1)},f=async()=>{const r=n("element"),h={from:g.lang,to:p.lang},v=await je(r,h);e("caption",v)};return t.jsxs(Ue,{onSubmit:l(d),children:[t.jsx(ne,{...C("element"),style:{height:m}}),t.jsxs(Oe,{children:[t.jsx(qe,{children:t.jsx(ye,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:()=>x(m),children:t.jsx(ke,{size:"16px"})}),t.jsx(Me,{type:"button",onClick:f,children:t.jsx(Re,{size:"16px"})})]}),t.jsx(ne,{...C("caption"),style:{height:m}})]})};me.propTypes={el:c.object,article:c.string,isForm:c.oneOfType([c.bool,c.number]),setIsForm:c.func};const fe=({el:s,sortByDate:o,setSortByDate:b,liColor:x,setLiColor:i})=>{const p=F(),{elementTrash:g,activeElement:$}=H(),[a,j]=S.useState(!1),{_id:m,element:C,favorite:n,checked:e}=s,l=g.find(E=>E._id===m),k=C===$,[d,f]=S.useState("");S.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const r=()=>{p(q({_id:m,favorite:!n}))},h=()=>{p(q({_id:m,checked:!e}))},v=()=>p(Se(s)),w=E=>{if(a)j(!1);else{const M=E.target.closest("div").clientHeight;j(M)}},be=()=>{d===""&&f("der "),d==="der "&&f("die "),d==="die "&&f("das "),d==="das "&&f("")};return t.jsxs(_e,{id:k?"active-element":null,onClick:()=>p(ae(C)),liColor:x,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ie,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),t.jsx(Be,{size:"20px"})]}),t.jsxs(Ve,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:h}),t.jsx(Ce,{size:"15px"})]})]}),a&&t.jsx(me,{el:s,article:d,isForm:a,setIsForm:j}),!a&&t.jsx(pe,{el:s,sortByDate:o,setSortByDate:b,setLiColor:i}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:l,onClick:v,children:t.jsx(we,{size:"16px"})}),a&&t.jsx(se,{onClick:be,children:t.jsx(Ae,{size:"18px"})}),t.jsx(se,{onClick:w,children:t.jsx(Ee,{size:"15px"})})]})]})};fe.propTypes={el:c.object,sortByDate:c.bool,setSortByDate:c.func,liColor:c.string,setLiColor:c.func};const Xe=u.ul`
  width: 100%;
  list-style: none;
`,{white:Ye}=T.colors,Ze=()=>{const s=F(),{activeCluster:o}=P(),{allElements:b,elementTrash:x,elementFilter:i}=H(),[p,g]=S.useState(Ye);let{elementSelect:$}=H();$=$||[];const[a,j]=S.useState(!1);S.useEffect(()=>{s(Te())},[s]);const m=b.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=x.map(l=>l._id);return $.includes("trash")?m.filter(l=>e.includes(l._id)):m})().filter(({element:e,caption:l,favorite:k,checked:d})=>{const f=e.toLowerCase().includes(i)||l.toLowerCase().includes(i),r=$.includes("favorite")?f&&k===!0:f;return $.some(h=>["checked","unchecked"].includes(h))?$.includes("checked")?r&&d===!0:r&&d===!1:r}).sort(a?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt));return t.jsxs(Xe,{children:[n.map(e=>t.jsx(fe,{el:e,sortByDate:a,setSortByDate:j,liColor:p,setLiColor:g},e._id)),t.jsx(ie,{filtredElements:n,setLiColor:g})]})},{s:re,m:Ne}=T.indents,rt=()=>t.jsx(K,{$p:`0 ${Ne} ${re} ${re}`,children:t.jsx(Ze,{})});export{rt as default};
