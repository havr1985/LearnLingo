import{u as m,a as r,b,j as e,c as S,d as C,e as E,r as o,f as k,g as M}from"./index-CZpoFGVB.js";import{s as L,a as w,b as F,c as P,L as z,T as A,d as I}from"./TeachersList.styled-aKj_1ha9.js";const y=m.div`
margin-left: 280px;
display: flex;
gap: 20px;
margin-bottom: 50px;
margin-top: 50px;
`,v=m.label`
  display: block;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%; /* 128.571% */
  margin-bottom: 8px;
`,f=m.select`
  border-radius: 14px;
  background: #fff;
  padding: 10px;
  height: 48px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 111.111%; /* 111.111% */
  border: none;
  outline: none;
`,V=()=>{const a=r(L),t=b(),g=[10,20,30,40],u=a.flatMap(s=>s.languages),i=[...new Set(u)],c=a.flatMap(s=>s.levels),h=[...new Set(c)],x=s=>{t(S(s.target.value))},p=s=>{t(C(s.target.value))},n=s=>{t(E(s.target.value))};return e.jsxs(y,{children:[e.jsxs("div",{children:[e.jsx(v,{htmlFor:"languages",children:"Languages"}),e.jsxs(f,{id:"languages",name:"languages",onChange:x,children:[e.jsx("option",{value:"",label:"All"}),i.map((s,l)=>e.jsx("option",{value:s,label:s},l))]})]}),e.jsxs("div",{children:[e.jsx(v,{htmlFor:"levels",children:"Level of knowledge"}),e.jsxs(f,{id:"levels",name:"levels",onChange:p,children:[e.jsx("option",{value:"",label:"All"}),h.map((s,l)=>e.jsx("option",{value:s,label:s},l))]})]}),e.jsxs("div",{children:[e.jsx(v,{htmlFor:"price",children:"Price"}),e.jsxs(f,{id:"price",name:"price",onChange:n,children:[e.jsx("option",{value:"",label:"All"}),g.map((s,l)=>e.jsx("option",{value:s,label:s},l))]})]})]})},q=()=>{const a=r(w),t=r(L),g=r(F),u=r(P),[i,c]=o.useState([]),[h,x]=o.useState(8),[p,n]=o.useState(!0),[s,l]=o.useState([]);o.useEffect(()=>{l(a||t),c(s.slice(0,4)),s.length<=4?n(!1):n(!0)},[s,a,t]);const T=()=>{const d=i.length;x(j=>j+4),c(j=>[...j,...s.slice(d,h)]),s.length<=h?n(!1):n(!0)};return e.jsxs("div",{children:[g&&e.jsx(k,{}),u&&e.jsx("div",{children:"Error"}),e.jsx(V,{}),e.jsxs(z,{children:[i.map(d=>e.jsx("li",{children:e.jsx(A,{teacher:d})},d.id)),p&&e.jsx(I,{type:"button",onClick:T,children:"Load more"})]})]})},R=()=>{const a=b();return o.useEffect(()=>{a(M())},[a]),e.jsx("main",{children:e.jsx(q,{})})};export{R as default};
