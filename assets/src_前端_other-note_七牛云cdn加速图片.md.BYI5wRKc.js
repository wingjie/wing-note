import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.C8gWICj3.js";const m=JSON.parse('{"title":"七牛云存储","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/other-note/七牛云cdn加速图片.md","filePath":"src/前端/other-note/七牛云cdn加速图片.md","lastUpdated":1710326451000}'),i={name:"src/前端/other-note/七牛云cdn加速图片.md"},o=n('<h1 id="七牛云存储" tabindex="-1">七牛云存储 <a class="header-anchor" href="#七牛云存储" aria-label="Permalink to &quot;七牛云存储&quot;">​</a></h1><h2 id="注册使用" tabindex="-1">注册使用 <a class="header-anchor" href="#注册使用" aria-label="Permalink to &quot;注册使用&quot;">​</a></h2><ol><li>注册地址：<a href="https://portal.qiniu.com/signup" target="_blank" rel="noreferrer">七牛云</a></li><li>进入控制台--&gt;进入对象储存</li><li>空间管理--&gt;新建空间</li><li>建议好空间就可以进入域名，进行添加域名了</li><li>添加域名之后记得在域名平台进行解析域名提供的CNAME了</li><li>之后就可以直接上传图片到七牛云了</li></ol><h2 id="文件管理" tabindex="-1">文件管理 <a class="header-anchor" href="#文件管理" aria-label="Permalink to &quot;文件管理&quot;">​</a></h2><ol><li>进入空间管理，点击上传文件，之后使用绑定的域名</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_03.png" alt="image-20200410130849552"></p><ol start="2"><li><p>之后复制文件名，添加前缀为你的域名地址就可以直接访问该图片了（需要对空间设置<strong>公共空间</strong>）</p><p>如：<code>https://notecdn.hrhe.cn/images/logo.png</code></p></li></ol><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_09.png" alt="image"></p><h2 id="图片裁剪" tabindex="-1">图片裁剪 <a class="header-anchor" href="#图片裁剪" aria-label="Permalink to &quot;图片裁剪&quot;">​</a></h2><img src="https://notecdn.hrhe.cn/images/七牛云cdn加速图片_04.png" alt="image-20200410133310805" style="zoom:25%;"><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_05.png" alt="image-20200410133340019"></p><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_06.png" alt="image-20200410133353668"></p><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_07.png" alt="image-20200410133411955"></p><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_08.png" alt="image-20200410133430938"></p><p>之后直接指定宽高即可，处理接口拼接在图片地址后面，就可以直接访问了，如下：</p><p><code>https://notecdn.hrhe.cn/logo.png?imageView2/1/w/1920/h/1080/q/75</code></p><h2 id="获取密钥" tabindex="-1">获取密钥 <a class="header-anchor" href="#获取密钥" aria-label="Permalink to &quot;获取密钥&quot;">​</a></h2><ol><li>进入密钥管理，就可以获取密钥了</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_01.png" alt="image-20200410130518239"></p><p><img src="https://notecdn.hrhe.cn/images/%E4%B8%83%E7%89%9B%E4%BA%91cdn%E5%8A%A0%E9%80%9F%E5%9B%BE%E7%89%87_02.png" alt="image-20200410130627490"></p>',20),c=[o];function r(l,s,h,E,p,d){return a(),t("div",null,c)}const _=e(i,[["render",r]]);export{m as __pageData,_ as default};
