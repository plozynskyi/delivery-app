"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[540],{7322:(e,t,r)=>{r.d(t,{A$:()=>l,ED:()=>a,Mx:()=>i,Rq:()=>o,aW:()=>d});var n=r(1529);const i=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-top: 50px;
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row;
  }
`,o=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  width: 100%;

  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 5px;

  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    padding: 50px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    width: 464px;
    padding: 50px;
  }
`,l=n.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;

  width: 100%;

  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 5px;

  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 50px;

    width: 100%;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 50px;

    width: 100%;
    height: 606px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      padding: 20px;
      background-color: #ebebeb;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 15px;
      border-radius: 15px;
      background: #998686;
    }

    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
    border-radius: 5px;

    box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};
  }
`,d=n.Ay.h3`
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    text-align: center;
  }
`,a=n.Ay.p`
  text-align: center;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main.bold}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes[4]}};
  line-height: 1.375;

  margin: 0;

  padding: 10px 0 10px 0;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[7]}};
    padding: 20px 0 20px 0;
  }
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[7]}};
    padding: 30px 0 30px 0;
  }
`},268:(e,t,r)=>{r.d(t,{AS:()=>n,Lq:()=>i,z3:()=>o});const n=e=>{let{products:t}=e;return t.items},i=e=>{let{products:t}=e;return t.isLoading},o=e=>{let{products:t}=e;return t.error}},5248:(e,t,r)=>{r.d(t,{A:()=>o});const n=r(1529).Ay.button`
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
`;var i=r(579);const o=e=>{let{type:t,text:r,clickHandler:o,disabled:l=!1}=e;return(0,i.jsx)(n,{disabled:l,type:t,onClick:o,children:r})}},540:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(5043),i=r(3003),o=r(3216),l=r(8438),d=r(268),a=r(691),s=r(5248),c=r(552),p=r(1529);const m=p.Ay.ul`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    justify-content: center;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    justify-content: center;
  }
`,h=p.Ay.li`
  width: calc((100% - 20px) / 1);
  padding: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 10px;
  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};

  background-color: ${e=>{let{theme:t}=e;return t.colors.whiteStandart}};

  transition: all 350ms ${e=>{let{theme:t}=e;return t.transition.main}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }

  :hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.secondary}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }
`,u=p.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }
`;var x=r(7322),b=r(579);const w=()=>{let e=(0,i.d4)(d.AS);const t=(0,i.d4)(d.Lq),r=(0,i.d4)(d.z3),{shopId:p}=(0,o.g)(),w=(0,i.wA)();(0,n.useEffect)((()=>{w((0,l.j)(p))}),[w,p]);const $=e.map((e=>(0,b.jsx)(h,{children:(0,b.jsxs)(u,{children:[(0,b.jsx)("img",{src:e.imgUrl,width:"150px",height:"150px",alt:e.name}),(0,b.jsx)("p",{children:e.name}),(0,b.jsxs)("p",{children:[e.price," - \u0433\u0440\u043d."]}),(0,b.jsx)(s.A,{text:"Add",value:e._id,type:"button",clickHandler:()=>(e=>{w((0,a.rZ)(e))})(e),short:!0})]})},e._id)));return(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)(c.A,{}),(0,b.jsx)(m,{children:$}),",",r&&(0,b.jsx)(x.ED,{children:`${r}, try again later`})]})}}}]);
//# sourceMappingURL=540.24c7be00.chunk.js.map