import{_ as i,c as s,o as a,a4 as e}from"./chunks/framework.C8gWICj3.js";const k=JSON.parse('{"title":"ubuntu配置","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/Server/ubuntu教程.md","filePath":"src/前端/Server/ubuntu教程.md","lastUpdated":1710326451000}'),t={name:"src/前端/Server/ubuntu教程.md"},o=e('<h1 id="ubuntu配置" tabindex="-1">ubuntu配置 <a class="header-anchor" href="#ubuntu配置" aria-label="Permalink to &quot;ubuntu配置&quot;">​</a></h1><p>将包提升到最新：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h2 id="ubuntu系统目录" tabindex="-1">ubuntu系统目录 <a class="header-anchor" href="#ubuntu系统目录" aria-label="Permalink to &quot;ubuntu系统目录&quot;">​</a></h2><ul><li>搭建静态网站：<code>/data/html/</code> 放置静态文件</li><li>配置nginx：<code>/data/config/nginx/conf.d/</code></li><li>配置之后重启docker：<code>docker restart data_nginx_1</code></li><li>查看错误日志： <ul><li><code>docker logs data_nginx_1</code></li><li><code>tail /data/log/nginx/error.log</code></li></ul></li><li>配置网站的root根路径：<code>/usr/share/nginx/html</code> 开头，文件放在<code>/data/html</code>下</li><li>查看对应目录：<code>cat /data/docker-compose.yml</code></li><li>修改vim配置：<code>vim /etc/vim/vimrc</code></li></ul><h2 id="ubuntu下安装mongodb" tabindex="-1">ubuntu下安装mongodb <a class="header-anchor" href="#ubuntu下安装mongodb" aria-label="Permalink to &quot;ubuntu下安装mongodb&quot;">​</a></h2><ol><li><p>安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongodb</span></span></code></pre></div></li><li><p>使用命令</p><ul><li><code>sudo systemctl status mongodb</code> 查看状态</li><li><code>sudo systemctl stop mongodb</code> 停止</li><li><code>sudo systemctl start mongodb</code> 启动</li><li><code>sudo systemctl restart mongodb</code> 重启</li></ul></li><li><p>修改是否自动随系统启动（默认启用）</p><ul><li><code>sudo systemctl disable mongodb</code></li><li><code>sudo systemctl enable mongodb</code></li></ul></li><li><p><code>mongo</code> 开始使用数据库</p></li><li><p>卸载</p><ul><li><code>sudo systemctl stop mongodb</code></li><li><code>sudo apt purge mongodb</code></li><li><code>sudo apt autoremove</code></li></ul></li></ol>',7),l=[o];function d(n,c,u,p,r,h){return a(),s("div",null,l)}const b=i(t,[["render",d]]);export{k as __pageData,b as default};
