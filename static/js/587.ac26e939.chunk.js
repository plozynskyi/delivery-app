"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[587],{1587:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var n=t(3003),i=t(3216),l=t(5043),o=t(642);const d=e=>{let{history:r}=e;return r.items};var s=t(8429),a=t(579);const p=()=>{const e=(0,n.wA)();(0,l.useEffect)((()=>{e((0,o.j)())}),[e]);const r=(0,n.d4)(d).map((e=>(0,a.jsx)(s.O0,{children:(0,a.jsxs)(s.EY,{to:`${e._id}`,children:[(0,a.jsxs)("p",{children:["Order id - ",e._id]}),(0,a.jsxs)("p",{children:["Order phone - ",e.phone]}),(0,a.jsxs)("p",{children:["Order status - ",e.status]}),(0,a.jsxs)("p",{children:["Order total price - ",e.totalPrice]})]})},e._id)));return(0,a.jsxs)(s.K9,{children:[(0,a.jsx)(s.F9,{children:r}),(0,a.jsx)(s._Q,{children:(0,a.jsx)(l.Suspense,{children:(0,a.jsx)(i.sv,{})})})]})}},8429:(e,r,t)=>{t.d(r,{EY:()=>p,F9:()=>s,K9:()=>l,O0:()=>a,PM:()=>o,_Q:()=>d});var n=t(1529),i=t(5475);const l=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 50px;
  padding: 50px;

  border: 2px solid ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-radius: 5px;

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
    flex-direction: row;
  }
`,o=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 2px solid ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-radius: 5px;

  width: 100%;
  height: 500px;

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
  }
`,d=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 2px solid ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-radius: 5px;

  width: 100%;

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
  }
`,s=n.Ay.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  border: 2px solid ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-radius: 5px;
  padding: 15px;

  width: 464px;

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
  }
`,a=n.Ay.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border: 2px solid ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-radius: 5px;

  width: 100%;

  transition: all 300ms ${e=>{let{theme:r}=e;return r.transition.main}};

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
  }

  :hover {
    border: 2px solid ${e=>{let{theme:r}=e;return r.colors.yellow}};
  }
`,p=(0,n.Ay)(i.k2)`
  width: 100%;
  /* position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  min-width: ${e=>{let{short:r}=e;return r?"129px":"252px"}};
  max-height: 40px;
  padding: ${e=>{let{theme:r}=e;return 2*r.space[2]+"px"}} 0;

  font-family: ${e=>{let{theme:r}=e;return r.fonts.main.semiBold}};
  font-size: ${e=>{let{theme:r}=e;return r.fontSizes[2]}};
  color: ${e=>{let{theme:r}=e;return r.colors.blue}};

  background-color: ${e=>{let{theme:r,filled:t}=e;return t?r.colors.blue:"transparent"}};
  border-width: ${e=>{let{filled:r}=e;return r?0:"2px"}};
  border-color: ${e=>{let{theme:r}=e;return r.colors.blue}};
  border-style: solid;
  border-radius: 40px;

  z-index: 0; */
  /* 
  transition: color 300ms ${e=>{let{theme:r}=e;return r.transition.main}},
    border-color 300ms ${e=>{let{theme:r}=e;return r.transition.main}},
    background-color 300ms ${e=>{let{theme:r}=e;return r.transition.main}};

  &:hover,
  &:focus {
    color: ${e=>{let{theme:r}=e;return r.colors.whiteStandart}};
    border-color: ${e=>{let{theme:r}=e;return r.colors.yellow}};
    background-color: ${e=>{let{theme:r}=e;return r.colors.yellow}};
  }

  &.active {
    color: ${e=>{let{theme:r}=e;return r.colors.whiteStandart}};
    border-color: ${e=>{let{theme:r}=e;return r.colors.yellow}};
    background-color: ${e=>{let{theme:r}=e;return r.colors.yellow}};
  }
  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.desktop}}) {
  } */
`}}]);
//# sourceMappingURL=587.ac26e939.chunk.js.map