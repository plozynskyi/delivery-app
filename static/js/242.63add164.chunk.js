"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[242],{242:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(5043),i=r(3003),o=r(3216),l=r(7133);const s=e=>{let{shops:t}=e;return t.items},d=e=>{let{shops:t}=e;return t.isLoading},a=e=>{let{shops:t}=e;return t.error};var p=r(6367),h=r(1529),c=r(5475);const u=h.Ay.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    width: 360px;

    align-items: center;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    width: 360px;
  }
`,m=h.Ay.li`
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }
`,x=(0,h.Ay)(c.k2)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

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
`;var b=r(579);const k=e=>{let{companys:t}=e;const r=(0,i.d4)(p.yo),n=t.map((e=>(0,b.jsx)(m,{children:(0,b.jsxs)(x,{to:`${e._id}`,children:[(0,b.jsx)("img",{src:e.imgUrl,alt:e.title,width:"25px",height:"25px"}),e.title]})},e._id)));return(0,b.jsx)(u,{children:Boolean(r[0])?(0,b.jsx)(x,{to:`${r[0].shop}`,children:r[0].shopTitle}):n})};var w=r(7322),$=r(552);const f=()=>{const e=(0,i.d4)(s),t=(0,i.d4)(d),r=(0,i.d4)(a),p=(0,i.wA)();(0,n.useEffect)((()=>{p((0,l._)())}),[p]);const h=Boolean(e.length);return(0,b.jsxs)(w.Mx,{children:[(0,b.jsxs)(w.Rq,{children:[(0,b.jsx)(w.aW,{children:"Shops:"}),t&&(0,b.jsx)($.A,{}),h&&(0,b.jsx)(k,{companys:e}),!h&&(0,b.jsx)(w.ED,{children:"No shops in list"}),r&&(0,b.jsx)(w.ED,{children:`${r}, try again later`})]}),(0,b.jsx)(w.A$,{children:(0,b.jsx)(n.Suspense,{children:(0,b.jsx)(o.sv,{})})})]})}},7322:(e,t,r)=>{r.d(t,{A$:()=>l,ED:()=>d,Mx:()=>i,Rq:()=>o,aW:()=>s});var n=r(1529);const i=n.Ay.div`
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
`,s=n.Ay.h3`
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    text-align: center;
  }
`,d=n.Ay.p`
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
`},6367:(e,t,r)=>{r.d(t,{$V:()=>i,dc:()=>n,hW:()=>o,sM:()=>l,yo:()=>s});const n=e=>{let{busket:t}=e;return t.busket},i=e=>{let{busket:t}=e;return t.busket.length},o=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{quantity:r}=t;return e+r}),0)},l=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{price:r,quantity:n}=t;return e+Number(r*n)}),0)},s=e=>{let{busket:t}=e;return t.busket.map((e=>{let{shop:t,shopTitle:r}=e;return{shop:t,shopTitle:r}}))||null}}}]);
//# sourceMappingURL=242.63add164.chunk.js.map