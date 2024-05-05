import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.C8gWICj3.js";const F=JSON.parse('{"title":"Webpack 插件推荐","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/Webpack/webpack插件.md","filePath":"src/前端/Webpack/webpack插件.md","lastUpdated":1710326451000}'),e={name:"src/前端/Webpack/webpack插件.md"},p=n(`<h1 id="webpack-插件推荐" tabindex="-1">Webpack 插件推荐 <a class="header-anchor" href="#webpack-插件推荐" aria-label="Permalink to &quot;Webpack 插件推荐&quot;">​</a></h1><h2 id="svgr-webpack" tabindex="-1">@svgr/webpack <a class="header-anchor" href="#svgr-webpack" aria-label="Permalink to &quot;@svgr/webpack&quot;">​</a></h2><p>引入svg文件，直接当作组件使用</p><h2 id="pmmmwh-react-refresh-webpack-plugin" tabindex="-1">@pmmmwh/react-refresh-webpack-plugin <a class="header-anchor" href="#pmmmwh-react-refresh-webpack-plugin" aria-label="Permalink to &quot;@pmmmwh/react-refresh-webpack-plugin&quot;">​</a></h2><p>热重载，react开发页面刷新速度更快，还可以优化错误显示到页面上</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @pmmmwh/react-refresh-webpack-plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-refresh</span></span></code></pre></div><h2 id="dotenv-webpack" tabindex="-1">dotenv-webpack <a class="header-anchor" href="#dotenv-webpack" aria-label="Permalink to &quot;dotenv-webpack&quot;">​</a></h2><p>添加.env环境文件</p><h2 id="webpackbar" tabindex="-1">webpackbar <a class="header-anchor" href="#webpackbar" aria-label="Permalink to &quot;webpackbar&quot;">​</a></h2><p>优化进度条显示</p><h2 id="markdown-to-html" tabindex="-1">markdown to html <a class="header-anchor" href="#markdown-to-html" aria-label="Permalink to &quot;markdown to html&quot;">​</a></h2><ul><li>remark-breaks 处理换行添加br</li><li>remark-html markdown to html</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remark</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remark-breaks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remark-html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remark-loader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> html-loader</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">module.exports</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	module:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		rules:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            use:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                loader:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;html-loader&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                loader:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;remark-loader&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                options:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                  remarkOptions:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    plugins:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [RemarkHTML, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RemarkBreaks],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14),l=[p];function h(t,k,r,d,c,o){return i(),a("div",null,l)}const g=s(e,[["render",h]]);export{F as __pageData,g as default};
