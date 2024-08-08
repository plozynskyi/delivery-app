"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[220],{220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(5043),n=r(3216),l=r(5248),i=r(1529);const s=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: row;
    gap: 30px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: column;
    gap: 30px;
  }
`,a=i.Ay.h2`
  text-align: center;
  max-width: 280px;
  margin-top: ${e=>{let{theme:t}=e;return t.space[5]+"px"}};
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main.bold}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes[3]}};
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    max-width: 588px;
    height: 200px;
    margin-top: ${e=>{let{theme:t}=e;return t.space[6]+16+"px"}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[8]}};
    line-height: 1.47;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    max-width: 501px;
    margin-top: ${e=>{let{theme:t}=e;return t.space[6]+111+"px"}};
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main.extraBold}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[7]}};
    line-height: 1.3;
  }
`;var d=r(579);const c=()=>{const e=(0,n.Zp)();return(0,o.useEffect)((()=>(document.body.classList.add("no-scroll"),()=>document.body.classList.remove("no-scroll"))),[]),(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{children:"Order the best products with fast delivery"}),(0,d.jsx)(l.A,{type:"button",text:"Go to order",clickHandler:()=>e("/shop")})]})}},5248:(e,t,r)=>{r.d(t,{A:()=>l});const o=r(1529).Ay.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: ${e=>{let{short:t}=e;return t?"129px":"252px"}};
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

  z-index: 2;

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

  :disabled {
    color: ${e=>{let{theme:t}=e;return t.colors.whiteStandart}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.lightBlue}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.lightBlue}};
  }
`;var n=r(579);const l=e=>{let{type:t,text:r,clickHandler:l,disabled:i=!1}=e;return(0,n.jsx)(o,{disabled:i,type:t,onClick:l,children:r})}}}]);
//# sourceMappingURL=220.083abe48.chunk.js.map