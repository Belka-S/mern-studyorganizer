import{t as E,P as u,u as z,b as Z,q as _,j as e,S as le,T as B,K as O,w as P,D as K,U as q,V as W,Q as j,W as ce,n as T,s as c,X as J,Y as ie,r as C,Z as de,_ as ue,$ as I,a0 as he,y as H,a1 as pe,F as U,C as be,A as me,z as ge,a2 as xe,J as fe}from"./index-3e525676.js";import{T as $e}from"./index.esm-39290b6a.js";import{v as ve,u as ye}from"./index.esm-d4bbd608.js";import{S as ke}from"./index.esm-47c73779.js";const F=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],L=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{backgroundHoverd:D,white:A,borderLight:R}=E.colors,{button:M}=E.shadows,N=({filtredElements:o})=>{const l=z(),{user:f}=Z(),{activeCluster:r}=_(),p=({value:s})=>{l(P({_id:r._id,lang:s})).unwrap().then(t=>l(K(t.result.cluster)))},a=({value:s})=>{l(P({_id:r._id,rate:s})).unwrap().then(t=>l(K(t.result.cluster)))},b=({value:s})=>{const t=new FormData;t.append("lang",s),l(q(t))},v=({value:s})=>{const t=new FormData;t.append("rate",s),l(q(t))},$=s=>{let t="";const n="$*@";for(let i=0;i<o.length;i+=1){const{element:y}=o[i];t+=y+n}const g=W({divider:n,text:t,lang:r.lang,rate:r.rate});s.target.blur(),g&&j.error(g)},m=s=>{let t="";const n="$*@";for(let i=0;i<o.length;i+=1){const{element:y,caption:d,lang:x}=o[i];t+=y+`@±@${x}`+d+n}const g=ce({divider:n,text:t,lang:r.lang,rate:r.rate});s.target.blur(),g&&j.error(g)};return e.jsxs(le,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[e.jsx(B,{options:F,defaultValue:F.find(s=>s.value===(r==null?void 0:r.lang)),onChange:p,placeholder:"Language...",$ol:D,$b:A,$bh:R}),e.jsx(B,{options:L,defaultValue:L.find(s=>s.value==(r==null?void 0:r.rate)),onChange:a,placeholder:"Rate...",$ol:D,$b:A,$bh:R}),e.jsx(O,{onClick:$,$s:"m",$bs:M,children:"play"}),e.jsx(O,{onClick:m,$s:"m",$bs:M,children:"all"}),e.jsx(B,{options:F,defaultValue:F.find(s=>s.value===f.lang),onChange:b,$ol:D,$b:A,$bh:R}),e.jsx(B,{options:L,defaultValue:L.find(s=>s.value==f.rate),onChange:v,$ol:D,$b:A,$bh:R})]})};N.propTypes={filtredElements:u.object};const{colors:h,shadows:je,indents:V}=E,Ce=T`
  /* margin-bottom: ${V.s}; */
  margin-bottom: 7px;
  padding-block: ${V.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${h.white};
  border-radius: ${V.xs};
  font-size: 22px;
`,we=c.li`
  ${Ce}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${h.border};
  }

  &:hover {
    border-color: ${h.border};
    box-shadow: ${je.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ee=T`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${ve}
  }
`,Ee=c.label`
  ${ee}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:o})=>o?h.yellow:"transparent"};
    stroke: ${({$hovered:o})=>o?h.yellow:h.border};
  }
  &:hover svg {
    stroke: ${h.placeholder};
  }
`,Te=c.label`
  ${ee}
  opacity: ${({$hovered:o})=>o?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${h.border};
    border-radius: 50%;
    color: ${({$hovered:o})=>o?h.border:"transparent"};
  }
  &:hover svg {
    border-color: ${h.placeholder};
    color: ${({$hovered:o})=>o?h.placeholder:"transparent"};
  }
`,S=T`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${h.black};

  & svg {
    transition: color 250ms;
    color: ${h.border};
  }
  &:hover,
  &:hover svg {
    color: ${h.placeholder};
  }
`,Se=c.button`
  ${S}

  opacity: ${({$hovered:o})=>o?1:0};
`,Be=c.button`
  ${S}

  opacity: 0;
`,{colors:w,indents:te}=E,se=T`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Fe=c.div`
  ${se}
`,Le=c.form`
  ${se}

  grid-template-columns: 12fr 1fr 12fr;
`,Q=c.textarea`
  outline: none;
  border: 1px solid ${w.accent};
  border-radius: ${te.xs};
  resize: none;
`,De=c.div`
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
    border: 1px solid ${w.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${w.placeholder};
  }
`,Ae=c.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Re=c.button`
  ${S}
`,ze=c.button`
  ${S}
`,_e=c.button`
  ${S}
`,X=c.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${te.xs};
  color: ${w.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${w.backgroundHoverd};
  }
`,oe=T`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ve=c.iframe`
  ${oe}

  height: 60px;
  border-radius: 30px;
`,We=c.audio`
  ${oe}
`,ne=({el:o,sortByDate:l,setSortByDate:f})=>{const{activeCluster:r}=_(),{element:p,caption:a}=o,b=async()=>{const n=W({text:p,lang:r.lang,rate:r.rate});await ie(p),n&&j.error(n)},v=()=>{const n=W({text:a,lang:o.lang,rate:o.rate});n&&j.error(n)},$=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),f(!l),l?j.success("Ascending by Date"):j.success("Descending by Date")},m=a.endsWith("mp3"),s=!m&&a.startsWith("http"),t=!m&&!s;return e.jsxs(Fe,{children:[e.jsx(X,{onClick:b,children:p}),e.jsx(De,{onClick:$}),m&&e.jsx(We,{controls:!0,src:J(a)}),s&&e.jsx(Ve,{src:J(a)}),t&&e.jsx(X,{onClick:v,children:a})]})};ne.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func,$active:u.bool,$hovered:u.bool};const re=({el:o,isForm:l,setIsForm:f})=>{const r=z(),{user:p}=Z(),{activeCluster:a}=_(),{_id:b,element:v,caption:$}=o,m=l+24,{register:s,watch:t,setValue:n,handleSubmit:g}=ye({mode:"onBlur",defaultValues:{element:v,caption:$}});C.useEffect(()=>{const d=async x=>{x.key==="+"&&(x.preventDefault(),await y(),g(i)()),x.key==="Enter"&&(x.preventDefault(),g(i)()),x.key==="Escape"&&f(!1)};return addEventListener("keydown",d),()=>{removeEventListener("keydown",d)}},[]);const i=d=>{r(I({_id:b,lang:p.lang,...d})),f(!1)},y=async()=>{const d=t("element"),x={from:a.lang,to:p.lang},k=await he(d,x);n("caption",k)};return e.jsxs(Le,{onSubmit:g(i),children:[e.jsx(Q,{...s("element"),style:{height:m}}),e.jsxs(Ae,{children:[e.jsx(Re,{children:e.jsx(de,{size:"16px"})}),e.jsx(ze,{type:"button",onClick:()=>f(m),children:e.jsx(ue,{size:"16px"})}),e.jsx(_e,{type:"button",onClick:y,children:e.jsx(ke,{size:"16px"})})]}),e.jsx(Q,{...s("caption"),style:{height:m}})]})};re.propTypes={el:u.object,isForm:u.oneOfType([u.bool,u.number]),setIsForm:u.func};const ae=({el:o,sortByDate:l,setSortByDate:f})=>{const r=z(),{elementTrash:p,activeElement:a}=H(),[b,v]=C.useState(!1),{_id:$,element:m,favorite:s,checked:t}=o,n=p.find(k=>k._id===$),g=m===a;C.useEffect(()=>{const k=document.getElementById("active-element");k?(()=>{k==null||k.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const i=()=>{r(I({_id:$,favorite:!s}))},y=()=>{r(I({_id:$,checked:!t}))},d=()=>r(xe(o)),x=k=>{if(b)v(!1);else{const G=k.target.closest("div").clientHeight;v(G)}};return e.jsxs(we,{id:g?"active-element":null,onClick:()=>r(pe(m)),children:[e.jsxs(U,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Ee,{$hovered:s,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:s,onChange:i}),e.jsx($e,{size:"20px"})]}),e.jsxs(Te,{$hovered:t,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:t,onChange:y}),e.jsx(be,{size:"15px"})]})]}),b&&e.jsx(re,{el:o,isForm:b,setIsForm:v}),!b&&e.jsx(ne,{el:o,sortByDate:l,setSortByDate:f}),e.jsxs(U,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(Se,{$hovered:n,onClick:d,children:e.jsx(me,{size:"16px"})}),e.jsx(Be,{onClick:x,children:e.jsx(ge,{size:"15px"})})]})]})};ae.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func};const Ie=c.ul`
  width: 100%;
  list-style: none;
`,He=()=>{const o=z(),{activeCluster:l}=_(),{allElements:f,elementTrash:r,elementFilter:p}=H();let{elementSelect:a}=H();a=a||[];const[b,v]=C.useState(!1);C.useEffect(()=>{o(fe())},[o]);const $=f.filter(t=>t.cluster===(l==null?void 0:l._id)).sort((t,n)=>t.createdAt.localeCompare(n.createdAt)),s=(()=>{const t=r.map(n=>n._id);return a.includes("trash")?$.filter(n=>t.includes(n._id)):$})().filter(({element:t,caption:n,favorite:g,checked:i})=>{const y=t.toLowerCase().includes(p)||n.toLowerCase().includes(p),d=a.includes("favorite")?y&&g===!0:y;return a.some(x=>["checked","unchecked"].includes(x))?a.includes("checked")?d&&i===!0:d&&i===!1:d}).sort(b?(t,n)=>n.createdAt.localeCompare(t.createdAt):(t,n)=>t.createdAt.localeCompare(n.createdAt));return e.jsxs(Ie,{children:[s.map(t=>e.jsx(ae,{el:t,sortByDate:b,setSortByDate:v},t._id)),e.jsx(N,{filtredElements:s})]})},{s:Y,m:Ue}=E.indents,qe=()=>e.jsx(U,{$p:`0 ${Ue} ${Y} ${Y}`,children:e.jsx(He,{})});export{qe as default};
