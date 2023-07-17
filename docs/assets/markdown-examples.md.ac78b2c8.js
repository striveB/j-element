import{d as r,a1 as d,g as h,o as l,c as e,l as n,n as o,R as u,e as C,r as y,J as m,w as g,U as i,a as A}from"./chunks/framework.f7b6e97f.js";const D=r({name:"JButton",__name:"Button",props:{type:{},icon:{},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},plain:{type:Boolean}},setup(t){const s=t,p=d(),c=h(()=>{let a=[];return s.type&&a.push("j-button--"+s.type),s.round&&a.push("is-round"),s.circle&&a.push("is-circle"),s.disabled&&a.push("is-disabled"),s.plain&&a.push("is-plain"),a});return(a,f)=>(l(),e("button",{class:o(["j-button",c.value])},[n(s).icon?(l(),e("i",{key:0,class:o([n(s).icon]),style:u(n(p).default?{marginRight:"3px"}:{})},null,6)):C("",!0),y(a.$slots,"default")],2))}}),_=i('<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting: 123</p>',4),b=i(`<p><strong>Input</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,15),x=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),k={name:"markdown-examples.md"},T=Object.assign(k,{setup(t){return(s,p)=>(l(),e("div",null,[_,m(D,null,{default:g(()=>[A("1234")]),_:1}),b]))}});export{x as __pageData,T as default};
