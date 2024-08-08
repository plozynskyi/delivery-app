"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[999],{5962:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043);const l=e=>{let{initialState:t,onSubmit:r}=e;const[l,o]=(0,n.useState)({...t}),a=(0,n.useCallback)((e=>{let{target:t}=e;const{name:r,value:n}=t;o((e=>({...e,[r]:n})))}),[o]);return{state:l,setState:o,handleChange:a,handleSubmit:e=>{e.preventDefault(),r({...l}),o({...t})}}}},1999:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(3003),l=r(3216),o=r(2953),a=r(9561),i=r(5962);const s={email:"p.lozynskyi5@gmail.com",password:"123456qwerty"},d={email:{type:"email",name:"email",required:!0,label:"User email"},password:{type:"password",name:"password",required:!0,label:"User password"}};var m=r(8012);const c=r(1529).Ay.form`
  display: flex;
  flex-direction: column;
`;var u=r(579);const h=e=>{let{onSubmit:t}=e;const{state:r,handleChange:n,handleSubmit:l}=(0,i.A)({initialState:s,onSubmit:t}),{email:o,password:h}=r;return(0,u.jsxs)(c,{onSubmit:l,children:[(0,u.jsx)(a.A,{sx:{width:"350px"},value:o,handleChange:n,...d.email}),(0,u.jsx)(a.A,{sx:{width:"350px",marginTop:"15px"},value:h,handleChange:n,...d.password}),(0,u.jsx)(m.A,{sx:{width:"350px",marginTop:"15px"},variant:"contained",type:"submit",margin:"normal",children:"Sign in"})]})};var p=r(3317);const x=()=>{const e=(0,n.wA)(),t=(0,l.Zp)();return(0,u.jsx)(p.Z3,{children:(0,u.jsx)(h,{onSubmit:r=>{e((0,o.Pm)(r)),t("/shop")}})})}},3317:(e,t,r)=>{r.d(t,{N_:()=>i,Z3:()=>s,cO:()=>a,mO:()=>o});var n=r(1529),l=r(5475);const o=n.Ay.div`
  /* padding: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
`,a=n.Ay.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`,i=(0,n.Ay)(l.k2)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  min-width: 129px;
  max-height: 40px;
  padding: ${e=>{let{theme:t}=e;return 2*t.space[2]+"px"}} 0;

  font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes[2]}};
  color: ${e=>{let{theme:t}=e;return t.colors.blue}};

  background-color: ${e=>{let{theme:t,filled:r}=e;return r?t.colors.blue:"transparent"}};
  border-width: ${e=>{let{filled:t}=e;return t?0:"2px"}};
  border-color: ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-style: solid;
  border-radius: 40px;

  z-index: 0;

  transition: color 300ms ${e=>{let{theme:t}=e;return t.transition.main}},
    border-color 300ms ${e=>{let{theme:t}=e;return t.transition.main}},
    background-color 300ms ${e=>{let{theme:t}=e;return t.transition.main}};

  &:hover,
  &:focus {
    color: ${e=>{let{theme:t}=e;return t.colors.whiteStandart}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }

  &.active {
    color: ${e=>{let{theme:t}=e;return t.colors.whiteStandart}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }
`,s=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
`},9561:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(5043),l=r(3712),o=r(3235),a=r(579);const i=e=>{let{handleChange:t,...r}=e;const i=(0,n.useMemo)((()=>(0,l.Ak)()),[]);return(0,a.jsx)(o.A,{htmlFor:i,variant:"outlined",onChange:t,...r})}}}]);
//# sourceMappingURL=999.16c3b975.chunk.js.map