import{t as S,P as f,u as V,b as Y,q as z,j as t,S as le,T as L,K as H,w as M,D as O,U as K,Q as j,n as T,s as b,V as N,W as ce,r as C,X as ie,Y as de,Z as U,_ as ue,y as I,$ as pe,F as W,C as he,A as me,z as be,a0 as ge,J as xe}from"./index-d97f4119.js";import{T as fe}from"./index.esm-a828c35c.js";import{v as ve,u as $e}from"./index.esm-d123a80b.js";import{S as ye}from"./index.esm-fad39ae4.js";const P=({text:n,lang:d,rate:m=1,divider:a="$*@"})=>{const c=window.speechSynthesis,o=n.split(a);let i=0;const p=g=>{const l=new SpeechSynthesisUtterance,s=c.getVoices().filter(e=>e.lang.includes(d));if(l.voice=s[0],l.volume=1,l.rate=m,l.pitch=.1,l.text=g,l.onend=()=>{i+=1,i<o.length&&setTimeout(()=>{p(o[i])},o[i-1].length*120)},!s[0])return`No ${d.toUpperCase()} voice available`;speechSynthesis.speak(l)};c.speaking?c.cancel():p(o[0])},ke=({text:n,lang:d,rate:m=1,divider:a="$*@"})=>{const c=window.speechSynthesis,o=n.split(a);let i=0;const p=o[i],g=p.split("@±@")[1].substring(0,2),l=new SpeechSynthesisUtterance,s=c.getVoices().filter(u=>u.lang.includes(d));l.voice=s[0],l.rate=m,l.text=p.split("@±@")[0];const e=new SpeechSynthesisUtterance,r=c.getVoices().filter(u=>u.lang.includes(g));if(e.voice=r[0],e.rate=m,e.text=p.split("@±@")[1].substring(2),e.onend=()=>{if(i+=1,i<o.length){const u=o[i],h=u.split("@±@")[1].substring(0,2),$=c.getVoices().filter(x=>x.lang.includes(h));e.voice=$[0],l.text=u.split("@±@")[0],e.text=u.split("@±@")[1].substring(2),setTimeout(()=>{c.speak(l),c.speak(e)},o[i-1].length*80)}},!s[0])return`No ${d.toUpperCase()} voice available`;c.speak(l),c.speak(e)},B=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],F=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{backgroundHoverd:D,white:A,borderLight:R}=S.colors,{button:q}=S.shadows,Z=({filtredElements:n})=>{const d=V(),{user:m}=Y(),{activeCluster:a}=z(),c=({value:s})=>{d(M({_id:a._id,lang:s})).unwrap().then(e=>d(O(e.result.cluster)))},o=({value:s})=>{d(M({_id:a._id,rate:s})).unwrap().then(e=>d(O(e.result.cluster)))},i=({value:s})=>{const e=new FormData;e.append("lang",s),d(K(e))},p=({value:s})=>{const e=new FormData;e.append("rate",s),d(K(e))},g=s=>{let e="";const r="$*@";for(let h=0;h<n.length;h+=1){const{element:$}=n[h];e+=$+r}const u=P({divider:r,text:e,lang:a.lang,rate:a.rate});s.target.blur(),u&&j.error(u)},l=s=>{let e="";const r="$*@";for(let h=0;h<n.length;h+=1){const{element:$,caption:x,lang:y}=n[h];e+=$+`@±@${y}`+x+r}const u=ke({divider:r,text:e,lang:a.lang,rate:a.rate});s.target.blur(),u&&j.error(u)};return t.jsxs(le,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr 1fr 2fr 2fr",children:[t.jsx(L,{options:B,defaultValue:B.find(s=>s.value===(a==null?void 0:a.lang)),onChange:c,placeholder:"Language...",$ol:D,$b:A,$bh:R}),t.jsx(L,{options:F,defaultValue:F.find(s=>s.value==(a==null?void 0:a.rate)),onChange:o,placeholder:"Rate...",$ol:D,$b:A,$bh:R}),t.jsx(H,{onClick:g,$s:"m",$bs:q,children:"play"}),t.jsx(H,{onClick:l,$s:"m",$bs:q,children:"all"}),t.jsx(L,{options:B,defaultValue:B.find(s=>s.value===m.lang),onChange:i,$ol:D,$b:A,$bh:R}),t.jsx(L,{options:F,defaultValue:F.find(s=>s.value==m.rate),onChange:p,$ol:D,$b:A,$bh:R})]})};Z.propTypes={filtredElements:f.object};const{colors:v,shadows:je,indents:_}=S,Ce=T`
  /* margin-bottom: ${_.s}; */
  margin-bottom: 7px;
  padding-block: ${_.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${v.white};
  border-radius: ${_.xs};
  font-size: 22px;
`,we=b.li`
  ${Ce}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${v.border};
  }

  &:hover {
    border-color: ${v.border};
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
`,Se=b.label`
  ${ee}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:n})=>n?v.yellow:"transparent"};
    stroke: ${({$hovered:n})=>n?v.yellow:v.border};
  }
  &:hover svg {
    stroke: ${v.placeholder};
  }
`,Te=b.label`
  ${ee}
  opacity: ${({$hovered:n})=>n?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${v.border};
    border-radius: 50%;
    color: ${({$hovered:n})=>n?v.border:"transparent"};
  }
  &:hover svg {
    border-color: ${v.placeholder};
    color: ${({$hovered:n})=>n?v.placeholder:"transparent"};
  }
`,E=T`
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
`,Ee=b.button`
  ${E}

  opacity: ${({$hovered:n})=>n?1:0};
`,Le=b.button`
  ${E}

  opacity: 0;
`,{colors:w,indents:te}=S,se=T`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Be=b.div`
  ${se}
`,Fe=b.form`
  ${se}

  grid-template-columns: 12fr 1fr 12fr;
`,J=b.textarea`
  outline: none;
  border: 1px solid ${w.accent};
  border-radius: ${te.xs};
  resize: none;
`,De=b.div`
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
`,Ae=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Re=b.button`
  ${E}
`,Ve=b.button`
  ${E}
`,ze=b.button`
  ${E}
`,Q=b.button`
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
`,ne=T`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,_e=b.iframe`
  ${ne}

  height: 60px;
  border-radius: 30px;
`,Ue=b.audio`
  ${ne}
`,oe=({el:n,sortByDate:d,setSortByDate:m})=>{const{activeCluster:a}=z(),{element:c,caption:o}=n,i=async()=>{const r=P({text:c,lang:a.lang,rate:a.rate});await ce(c),r&&j.error(r)},p=()=>{const r=P({text:o,lang:n.lang,rate:n.rate});r&&j.error(r)},g=()=>{m(!d),d?j.success("Ascending by Date"):j.success("Descending by Date")},l=o.endsWith("mp3"),s=!l&&o.startsWith("http"),e=!l&&!s;return t.jsxs(Be,{children:[t.jsx(Q,{onClick:i,children:c}),t.jsx(De,{onClick:g}),l&&t.jsx(Ue,{controls:!0,src:N(o)}),s&&t.jsx(_e,{src:N(o)}),e&&t.jsx(Q,{onClick:p,children:o})]})};oe.propTypes={el:f.object,sortByDate:f.bool,setSortByDate:f.func,$active:f.bool,$hovered:f.bool};const re=({el:n,isForm:d,setIsForm:m})=>{const a=V(),{user:c}=Y(),{activeCluster:o}=z(),{_id:i,element:p,caption:g}=n,l=d+24,{register:s,watch:e,setValue:r,handleSubmit:u}=$e({mode:"onBlur",defaultValues:{element:p,caption:g}});C.useEffect(()=>{const x=async y=>{y.key==="+"&&(y.preventDefault(),await $(),u(h)()),y.key==="Enter"&&(y.preventDefault(),u(h)()),y.key==="Escape"&&m(!1)};return addEventListener("keydown",x),()=>{removeEventListener("keydown",x)}},[]);const h=x=>{a(U({_id:i,lang:c.lang,...x})),m(!1)},$=async()=>{const x=e("element"),y={from:o.lang,to:c.lang},k=await ue(x,y);r("caption",k)};return t.jsxs(Fe,{onSubmit:u(h),children:[t.jsx(J,{...s("element"),style:{height:l}}),t.jsxs(Ae,{children:[t.jsx(Re,{children:t.jsx(ie,{size:"16px"})}),t.jsx(Ve,{type:"button",onClick:()=>m(l),children:t.jsx(de,{size:"16px"})}),t.jsx(ze,{type:"button",onClick:$,children:t.jsx(ye,{size:"16px"})})]}),t.jsx(J,{...s("caption"),style:{height:l}})]})};re.propTypes={el:f.object,isForm:f.oneOfType([f.bool,f.number]),setIsForm:f.func};const ae=({el:n,sortByDate:d,setSortByDate:m})=>{const a=V(),{elementTrash:c,activeElement:o}=I(),[i,p]=C.useState(!1),{_id:g,element:l,favorite:s,checked:e}=n,r=c.find(k=>k._id===g),u=l===o;C.useEffect(()=>{const k=document.getElementById("active-element");(()=>{k==null||k.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const h=()=>{a(U({_id:g,favorite:!s}))},$=()=>{a(U({_id:g,checked:!e}))},x=()=>a(ge(n)),y=k=>{if(i)p(!1);else{const G=k.target.closest("div").clientHeight;p(G)}};return t.jsxs(we,{id:u?"active-element":null,onClick:()=>a(pe(l)),children:[t.jsxs(W,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Se,{$hovered:s,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:s,onChange:h}),t.jsx(fe,{size:"20px"})]}),t.jsxs(Te,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:$}),t.jsx(he,{size:"15px"})]})]}),i&&t.jsx(re,{el:n,isForm:i,setIsForm:p}),!i&&t.jsx(oe,{el:n,sortByDate:d,setSortByDate:m}),t.jsxs(W,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(Ee,{$hovered:r,onClick:x,children:t.jsx(me,{size:"16px"})}),t.jsx(Le,{onClick:y,children:t.jsx(be,{size:"15px"})})]})]})};ae.propTypes={el:f.object,sortByDate:f.bool,setSortByDate:f.func};const Ie=b.ul`
  width: 100%;
  list-style: none;
`,We=()=>{const n=V(),{activeCluster:d}=z(),{allElements:m,elementTrash:a,elementFilter:c}=I();let{elementSelect:o}=I();o=o||[];const[i,p]=C.useState(!1);C.useEffect(()=>{n(xe())},[n]);const g=m.filter(e=>e.cluster===(d==null?void 0:d._id)).sort((e,r)=>e.createdAt.localeCompare(r.createdAt)),s=(()=>{const e=a.map(r=>r._id);return o.includes("trash")?g.filter(r=>e.includes(r._id)):g})().filter(({element:e,caption:r,favorite:u,checked:h})=>{const $=e.toLowerCase().includes(c)||r.toLowerCase().includes(c),x=o.includes("favorite")?$&&u===!0:$;return o.some(y=>["checked","unchecked"].includes(y))?o.includes("checked")?x&&h===!0:x&&h===!1:x}).sort(i?(e,r)=>r.createdAt.localeCompare(e.createdAt):(e,r)=>e.createdAt.localeCompare(r.createdAt));return t.jsxs(Ie,{children:[s.map(e=>t.jsx(ae,{el:e,sortByDate:i,setSortByDate:p},e._id)),t.jsx(Z,{filtredElements:s})]})},{s:X,m:Pe}=S.indents,Ke=()=>t.jsx(W,{$p:`0 ${Pe} ${X} ${X}`,children:t.jsx(We,{})});export{Ke as default};
