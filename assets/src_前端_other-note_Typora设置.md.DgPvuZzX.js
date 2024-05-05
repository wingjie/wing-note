import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.C8gWICj3.js";const u=JSON.parse('{"title":"Typora 常用设置选项","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/other-note/Typora设置.md","filePath":"src/前端/other-note/Typora设置.md","lastUpdated":1710326451000}'),n={name:"src/前端/other-note/Typora设置.md"},l=t(`<h1 id="typora-常用设置选项" tabindex="-1">Typora 常用设置选项 <a class="header-anchor" href="#typora-常用设置选项" aria-label="Permalink to &quot;Typora 常用设置选项&quot;">​</a></h1><h2 id="设置图片自动上传github" tabindex="-1">设置图片自动上传github <a class="header-anchor" href="#设置图片自动上传github" aria-label="Permalink to &quot;设置图片自动上传github&quot;">​</a></h2><ol><li>转到文件-&gt;偏好设置-&gt;图像</li><li>按照以下示例，首先选好对应的上传服务，之后再下载更新文件</li></ol><p><img src="https://notecdn.hrhe.cn/images/Typora%E8%AE%BE%E7%BD%AE-01.png" alt="image"></p><ol start="3"><li>打开配置文件； <ul><li>repo输入格式：wing/h-note，前者为github用户名, 后者为目录名</li><li>path路径为 图片上传的路径，下列表示在当前目录的img目录下</li></ul></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;picBed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;repo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${github-username/github-repo}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${github-token}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;img/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;customUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;branch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;current&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;uploader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;picgoPlugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="4"><li>进入github，按照以下操作 <ul><li>点击头像--&gt;点击settings--&gt;点击Developer settings--&gt;点击Personal access tokens--&gt;点击create new token--&gt;输入token的名字--&gt;仅勾选repo选项即可；</li></ul></li></ol><p><img src="https://notecdn.hrhe.cn/images/Typora%E8%AE%BE%E7%BD%AE-02.png" alt="image"></p><p>之后点击创建，复制给出的token，token刷新之后再也无法看见，注意保存好，最后将token输入到配置文件的对应位置即可；</p><ol start="5"><li>设置好之后点击测试是否可以上传了，可能会上传失败，可以多试几次</li></ol><p>我的最终配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;picBed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;repo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wing/h-note&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;e53233d92e704ec4529ba1ec37d34dd43f7f96d7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;customUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;branch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;current&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;uploader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;picgoPlugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>参考博客：<a href="https://blog.csdn.net/xiaozecheng/article/details/105197126" target="_blank" rel="noreferrer">https://blog.csdn.net/xiaozecheng/article/details/105197126</a></p><h2 id="配置typora样式文件" tabindex="-1">配置Typora样式文件 <a class="header-anchor" href="#配置typora样式文件" aria-label="Permalink to &quot;配置Typora样式文件&quot;">​</a></h2><ol><li>进入文件--&gt;偏好设置--&gt;外观--&gt;打开主题文件夹</li><li>创建base.user.css文件</li><li>在Typora工具中，按shift+f12打开开发者工具</li><li>使用箭头选中元素，复制对应的类名，修改样式即可</li></ol><h2 id="配置自动上传到七牛云" tabindex="-1">配置自动上传到七牛云 <a class="header-anchor" href="#配置自动上传到七牛云" aria-label="Permalink to &quot;配置自动上传到七牛云&quot;">​</a></h2><p><a href="https://blog.csdn.net/weimeibuqieryu/article/details/105315807" target="_blank" rel="noreferrer">typora+picgo+七牛云实现图片上传</a></p>`,17),h=[l];function p(e,k,E,o,r,g){return a(),i("div",null,h)}const c=s(n,[["render",p]]);export{u as __pageData,c as default};
