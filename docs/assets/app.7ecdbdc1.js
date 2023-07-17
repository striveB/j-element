import{d as p,a1 as g,g as A,o as r,c as u,l,n as d,R as b,e as _,r as c,a2 as h,V as i,a3 as v,a4 as B,a5 as w,a6 as R,a7 as C,a8 as P,a9 as j,aa as $,ab as E,ac as S,ad as x,u as D,j as L,A as T,ae as V,af as O,ag as k}from"./chunks/framework.f7b6e97f.js";import{t as m}from"./chunks/theme.83fbba3f.js";const F=p({name:"JButton",__name:"Button",props:{type:{},icon:{},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},plain:{type:Boolean}},setup(t){const e=t,a=g(),n=A(()=>{let o=[];return e.type&&o.push("j-button--"+e.type),e.round&&o.push("is-round"),e.circle&&o.push("is-circle"),e.disabled&&o.push("is-disabled"),e.plain&&o.push("is-plain"),o});return(o,W)=>(r(),u("button",{class:d(["j-button",n.value])},[l(e).icon?(r(),u("i",{key:0,class:d([l(e).icon]),style:b(l(a).default?{marginRight:"3px"}:{})},null,6)):_("",!0),c(o.$slots,"default")],2))}}),G={class:"j-button-group"},J=p({name:"JButtonGroup",__name:"ButtonGroup",setup(t){return(e,a)=>(r(),u("div",G,[c(e.$slots,"default")]))}}),z={class:"j-row"},I=p({name:"JRow",__name:"Row",setup(t){return(e,a)=>(r(),u("div",z,[c(e.$slots,"default")]))}}),N=[F,I,J],H=t=>{N.forEach(e=>{t.component(e.name,e)})},f={install:H};const M={extends:m,Layout:()=>h(m.Layout,null,{}),enhanceApp({app:t,router:e,siteData:a}){t.use(f),console.log(f)}};function y(t){if(t.extends){const e=y(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const s=y(M),U=p({name:"VitePressApp",setup(){const{site:t}=D();return L(()=>{T(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),V(),O(),k(),s.setup&&s.setup(),()=>h(s.Layout)}});async function q(){const t=Q(),e=K();e.provide(B,t);const a=w(t.route);return e.provide(R,a),e.component("Content",C),e.component("ClientOnly",P),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:e,router:t,siteData:j}),{app:e,router:t,data:a}}function K(){return $(U)}function Q(){let t=i,e;return E(a=>{let n=S(a);return n?(t&&(e=n),(t||e===n)&&(n=n.replace(/\.js$/,".lean.js")),i&&(t=!1),x(()=>import(n),[])):null},s.NotFound)}i&&q().then(({app:t,router:e,data:a})=>{e.go().then(()=>{v(e.route,a.site),t.mount("#app")})});export{q as createApp};