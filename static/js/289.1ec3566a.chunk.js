"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[289],{9028:(e,t,r)=>{r.d(t,{wz:()=>o,xI:()=>i,zQ:()=>n});const n=e=>{let{auth:t}=e;return t.isLogin},o=e=>{let{auth:t}=e;return t.user},i=e=>{let{auth:t}=e;const{isLogin:r,token:n,error:o}=t;return{isLogin:r,token:n,error:o}}},6367:(e,t,r)=>{r.d(t,{$V:()=>o,dc:()=>n,hW:()=>i,sM:()=>l,yo:()=>s});const n=e=>{let{busket:t}=e;return t.busket},o=e=>{let{busket:t}=e;return t.busket.length},i=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{quantity:r}=t;return e+r}),0)},l=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{price:r,quantity:n}=t;return e+Number(r*n)}),0)},s=e=>{let{busket:t}=e;return t.busket.map((e=>{let{shop:t,shopTitle:r}=e;return{shop:t,shopTitle:r}}))||null}},2289:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(3003),o=r(9028),i=r(1529);const l=i.Ay.div`
  padding: 0 ${e=>{let{theme:t}=e;return 5*t.space[2]+"px"}};
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}};
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}};
    padding: 0 ${e=>{let{theme:t}=e;return t.space[5]+"px"}};
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}};
    padding: 0 ${e=>{let{theme:t}=e;return t.space[4]+"px"}};
  }
`;var s=r(579);const a=e=>{let{children:t}=e;return(0,s.jsx)(l,{children:t})};var d=r(5475);const c=(0,i.Ay)(d.N_)`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 50;
`,h=i.Ay.h1`
  color: ${e=>{let{theme:t}=e;return t.colors.blue}};

  transition: color 350ms ${e=>{let{theme:t}=e;return t.transition.main}};

  :hover,
  :focus {
    color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }
`,m=()=>(0,s.jsx)(c,{to:"/","aria-label":"Site logo",children:(0,s.jsx)(h,{children:"DELIVERY"})}),u=[{text:"Shop",path:"/shop",private:!1},{text:"Shopping Cart",path:"/shopping",private:!1},{text:"History",path:"/history",private:!0},{text:"Coupons",path:"/coupons",private:!0}];var p=r(6367);const x=i.Ay.ul`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  gap: ${e=>{let{theme:t}=e;return 1*t.space[2]+"px"}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    align-items: flex-start;
    gap: ${e=>{let{theme:t}=e;return 1*t.space[2]+"px"}};
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row;
    gap: ${e=>{let{theme:t}=e;return 1*t.space[3]+"px"}};
  }
`,b=i.Ay.li`
  position: relative;
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    border-right: 2px solid ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }
`,f=(0,i.Ay)(d.k2)`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes[4]}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};

  transition: color 350ms ${e=>{let{theme:t}=e;return t.transition.main}};

  &:hover,
  &:focus {
    color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }

  &.active {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main.bold}};
    color: ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[4]}};

    &.active {
      font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
    }
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    padding: ${e=>{let{theme:t}=e;return 8*t.space[1]+"px"}};

    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[3]}};
  }
`,g=i.Ay.div`
  position: absolute;
  right: -35px;
  top: -10px;

  width: 20px;
  height: 20px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;

  color: ${e=>{let{theme:t}=e;return t.colors.blue}};
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    right: -35px;
    top: -10px;

    width: 25px;
    height: 25px;

    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    right: 0;
    top: -10px;

    width: 35px;
    height: 35px;

    font-size: 18px;
    font-weight: 500;
  }
`,$=()=>{const e=(0,n.d4)(p.hW),t=((0,n.d4)(o.zQ)?u:u.filter((e=>!e.private))).map((t=>{let{text:r,path:n}=t;return(0,s.jsx)(b,{children:"Shopping Cart"===r&&e?(0,s.jsxs)(f,{to:n,children:[r,(0,s.jsx)(g,{children:e})]}):(0,s.jsx)(f,{to:n,children:r})},r)}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{children:(0,s.jsx)(x,{children:t})})})};var w=r(3317),y=r(3712);const k=[{id:(0,y.Ak)(),to:"/signin",text:"Sign In"},{id:(0,y.Ak)(),to:"/signup",text:"Sign Up"}],j=()=>{const e=k.map((e=>{let{id:t,to:r,text:n}=e;return(0,s.jsx)("li",{children:(0,s.jsx)(w.N_,{to:r,children:n})},t)}));return(0,s.jsx)(w.mO,{children:(0,s.jsx)(w.cO,{children:e})})};var v=r(2953);const A=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`,z=i.Ay.p`
  font-weight: bold;
`,S=i.Ay.button`
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
`,L=()=>{const{name:e}=(0,n.d4)(o.wz),t=(0,n.wA)();return(0,s.jsxs)(A,{children:[(0,s.jsx)(z,{children:e}),(0,s.jsx)(S,{onClick:()=>{t((0,v.ri)())},children:"Logout"})]})},B=i.Ay.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
`,C=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  padding-top: ${e=>{let{theme:t}=e;return 5*t.space[1]+"px"}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`,O=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    width: 100%;
  }
`,T=()=>{const e=(0,n.d4)(o.zQ);return(0,s.jsx)(B,{children:(0,s.jsx)(a,{children:(0,s.jsxs)(C,{children:[(0,s.jsx)(m,{}),(0,s.jsx)(O,{children:(0,s.jsx)($,{})}),e?(0,s.jsx)(L,{}):(0,s.jsx)(j,{})]})})})},E=i.Ay.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100vw;
  height: 100%;
`,_=e=>{let{children:t}=e;return(0,s.jsx)(E,{children:t})};var I=r(5043);const N=i.Ay.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.lightBlue}};
  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};
  border-radius: 50%;
  cursor: pointer;
  stroke: ${e=>{let{theme:t}=e;return t.colors.blue}};

  background-color: transparent;

  z-index: 15;
  transition: all 350ms ${e=>{let{theme:t}=e;return t.transition.main}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
  }

  :hover {
    border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
    box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.secondary}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.blue}};
    svg {
      stroke: ${e=>{let{theme:t}=e;return t.colors.white}};
    }
  }
`;var R;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(null,arguments)}function V(e,t){let{title:r,titleId:n,...o}=e;return I.createElement("svg",Q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?I.createElement("title",{id:n},r):null,R||(R=I.createElement("path",{d:"M20 15L12 7L4 15",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const W=I.forwardRef(V),q=(r.p,()=>{const e=(0,I.useRef)();window.onscroll=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?e.current.style.display="flex":e.current.style.display="none"};return(0,s.jsx)(N,{ref:e,id:"BtnScrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},type:"button",children:(0,s.jsx)(W,{})})});var F=r(3216);const H=i.Ay.div`
  min-height: 100vh;
`,M=i.Ay.main`
  height: calc(${e=>{let{screenHeight:t}=e;return t}} - 72px);
  padding-bottom: 103px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    padding-bottom: 192px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    padding-bottom: 103px;
  }
`,U=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(H,{children:[(0,s.jsx)(q,{}),(0,s.jsx)(T,{}),(0,s.jsx)(M,{children:(0,s.jsx)(_,{children:(0,s.jsx)(a,{children:(0,s.jsx)(I.Suspense,{fallback:null,children:(0,s.jsx)(F.sv,{})})})})})]})})},3317:(e,t,r)=>{r.d(t,{N_:()=>s,Z3:()=>a,cO:()=>l,mO:()=>i});var n=r(1529),o=r(5475);const i=n.Ay.div`
  /* padding: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
`,l=n.Ay.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`,s=(0,n.Ay)(o.k2)`
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
`,a=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
`},3712:(e,t,r)=>{r.d(t,{Ak:()=>n});let n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&r[e]];return t}}}]);
//# sourceMappingURL=289.1ec3566a.chunk.js.map