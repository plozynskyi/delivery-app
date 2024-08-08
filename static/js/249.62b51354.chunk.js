"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[249],{3249:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(5043),i=r(3003),l=r(3550),o=(r(2342),r(6367)),a=r(691),d=r(5248),s=r(1529);const m=s.Ay.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    justify-content: flex-start;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    display: flex;
    flex-direction: row;

    margin-top: 0;

    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }
`,c=s.Ay.li`
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
    width: calc((100% - 20px) / 2);
    padding: 10px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
    border-radius: 10px;
    box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};

    background-color: ${e=>{let{theme:t}=e;return t.colors.whiteStandart}};

    transition: all 350ms ${e=>{let{theme:t}=e;return t.transition.main}};
  }

  :hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.secondary}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.yellow}};
  }
`,u=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }
`;var h=r(579);const p=()=>{const e=(0,i.wA)();let t=(0,i.d4)(o.dc).reduce(((e,t)=>(e.map[t._id]||(e.map[t._id]=!0,e.products.push(t)),e)),{map:{},products:[]}).products;const r=t.map((t=>(0,h.jsx)(c,{children:(0,h.jsxs)(u,{children:[(0,h.jsx)("img",{src:t.imgUrl,width:"150px",alt:t.name}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:[t.price," - \u0433\u0440\u043d."]}),(0,h.jsx)("p",{children:`\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c - ${t.quantity}`}),(0,h.jsx)(d.A,{text:"Add",clickHandler:()=>{var r;r=t._id,e((0,a.sz)(r))},type:"button",short:!0}),(0,h.jsx)(d.A,{text:"Delete",clickHandler:()=>{var r;r=t._id,e((0,a.pv)(r))},type:"button",short:!0})]})},t._id)));return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(m,{children:r})})};var b=r(2538),x=r(9028),w=r(9561);const k={name:"Pavlo",email:"pavlo@gmail.com",phone:"+380634475654",address:"Irpin",busket:[],id:""},g={name:{type:"text",name:"name",required:!0,label:"Name"},email:{type:"email",name:"email",required:!0,label:"Email"},phone:{type:"phone",name:"phone",required:!0,label:"Phone"},address:{type:"address",name:"address",required:!0,label:"Address"}},$=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row;
  }
`,f=s.Ay.form`
  padding-top: 50px;
  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
  }
`,y=s.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  min-width: 100%;

  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 5px;
  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    min-width: 100%;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    padding: 50px;
    min-width: 464px;
  }
`,v=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  width: 100%;

  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.blue}};
  border-radius: 5px;

  box-shadow: ${e=>{let{theme:t}=e;return t.boxShadows.main}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    padding: 20px 20px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    display: flex;
    flex-direction: column;
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
  }
`,j=s.Ay.h3`
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    margin-bottom: 25px;
  }
`,A=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    flex-direction: row;
  }
`,S=s.Ay.p`
  font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes[3]}};

  color: ${e=>{let{theme:t}=e;return t.colors.blue}};

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
  }

  @media screen and (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.main.semiBold}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes[3]}};

    color: ${e=>{let{theme:t}=e;return t.colors.blue}};
  }
`,C=()=>{const e=(0,i.d4)(o.dc),t=(0,i.d4)(x.wz),r=(0,i.d4)(o.sM),[s,m]=(0,n.useState)({...k,busket:e,id:t._id,totalPrice:r}),c=(0,i.d4)(o.$V),u=(0,i.wA)(),C=(0,n.useCallback)((e=>{let{target:t}=e;const{name:r,value:n}=t;m((e=>({...e,[r]:n})))}),[m]);let{name:z,email:_,phone:q,address:B}=s;return(0,h.jsxs)(f,{onSubmit:async e=>{e.preventDefault(),m({...s}),u((0,b.O)(s)),u((0,a.cn)()),l.oR.success("Order success",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),m({...k})},children:[(0,h.jsxs)($,{children:[(0,h.jsxs)(y,{children:[(0,h.jsx)(j,{children:"Order details:"}),(0,h.jsx)(w.A,{classes:{color:"red"},value:z,handleChange:C,...g.name,margin:"dense"}),(0,h.jsx)(w.A,{value:q,handleChange:C,...g.phone,margin:"dense"}),(0,h.jsx)(w.A,{value:_,handleChange:C,...g.email,margin:"dense"}),(0,h.jsx)(w.A,{value:B,handleChange:C,...g.address,margin:"dense"})]}),(0,h.jsxs)(v,{children:[Number(c)?(0,h.jsx)(d.A,{text:"Remove All",type:"button",clickHandler:()=>{var e;u((0,a.cn)(e))}}):"",Number(c)?(0,h.jsx)(p,{}):""]})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(S,{children:`Total price - ${r.toFixed(2)}`}),c?(0,h.jsx)(d.A,{type:"submit",text:"Submit"}):(0,h.jsx)(d.A,{disabled:!0,type:"submit",text:"Submit"})]})]})}},9028:(e,t,r)=>{r.d(t,{wz:()=>i,xI:()=>l,zQ:()=>n});const n=e=>{let{auth:t}=e;return t.isLogin},i=e=>{let{auth:t}=e;return t.user},l=e=>{let{auth:t}=e;const{isLogin:r,token:n,error:i}=t;return{isLogin:r,token:n,error:i}}},6367:(e,t,r)=>{r.d(t,{$V:()=>i,dc:()=>n,hW:()=>l,sM:()=>o,yo:()=>a});const n=e=>{let{busket:t}=e;return t.busket},i=e=>{let{busket:t}=e;return t.busket.length},l=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{quantity:r}=t;return e+r}),0)},o=e=>{let{busket:t}=e;return t.busket.reduce(((e,t)=>{let{price:r,quantity:n}=t;return e+Number(r*n)}),0)},a=e=>{let{busket:t}=e;return t.busket.map((e=>{let{shop:t,shopTitle:r}=e;return{shop:t,shopTitle:r}}))||null}},5248:(e,t,r)=>{r.d(t,{A:()=>l});const n=r(1529).Ay.button`
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
`;var i=r(579);const l=e=>{let{type:t,text:r,clickHandler:l,disabled:o=!1}=e;return(0,i.jsx)(n,{disabled:o,type:t,onClick:l,children:r})}},9561:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(5043),i=r(3712),l=r(3235),o=r(579);const a=e=>{let{handleChange:t,...r}=e;const a=(0,n.useMemo)((()=>(0,i.Ak)()),[]);return(0,o.jsx)(l.A,{htmlFor:a,variant:"outlined",onChange:t,...r})}}}]);
//# sourceMappingURL=249.62b51354.chunk.js.map