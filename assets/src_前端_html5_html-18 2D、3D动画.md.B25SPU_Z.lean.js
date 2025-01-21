import{_ as a,c as i,ag as s,o as e}from"./chunks/framework.C0nxaLfM.js";const k=JSON.parse('{"title":"html-18 2D、3D动画","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/html5/html-18 2D、3D动画.md","filePath":"src/前端/html5/html-18 2D、3D动画.md","lastUpdated":1710326451000}'),p={name:"src/前端/html5/html-18 2D、3D动画.md"};function d(n,t,l,r,o,h){return e(),i("div",null,t[0]||(t[0]=[s(`<h1 id="html-18-2d、3d动画" tabindex="-1">html-18 2D、3D动画 <a class="header-anchor" href="#html-18-2d、3d动画" aria-label="Permalink to &quot;html-18 2D、3D动画&quot;">​</a></h1><h2 id="一、过渡属性" tabindex="-1">一、过渡属性： <a class="header-anchor" href="#一、过渡属性" aria-label="Permalink to &quot;一、过渡属性：&quot;">​</a></h2><ol><li><p>属性名</p><p><code>transition-property</code>;</p><p>不写默认是all，表示全部加入过渡的属性；</p></li><li><p>时间</p><p><code>transition-duration;</code></p><p>中间用逗号隔开,和过渡属性一一对应。</p><p>单位是s,ms，如果是0.5s，可以直接写.5s。</p></li><li><p>速度变化曲线</p><p><code>transition-timing-function</code>;</p><p>默认是ease，匀速是linear，写多个是和属性一一对应。</p><p>贝塞尔曲线，<a href="http://cubic-bezier.com" target="_blank" rel="noreferrer">http://cubic-bezier.com</a>，cubic-bezier()，括号写不同的值。</p></li><li><p>延长时间</p><p><code>transion-delay</code></p><p>单位是ms,s可以写多个。</p></li><li><p>复合写法：</p><p><code>transition:过渡名 时间 速度 延时；</code></p><p>过渡时间不可以省略，属性默认是all，变化曲线默认是ease，延时0；</p></li></ol><p>过渡的属性放到本身的盒子上，慢慢回来，放到滑过的盒子上，瞬间回去；</p><h2 id="二、变形" tabindex="-1">二、变形 <a class="header-anchor" href="#二、变形" aria-label="Permalink to &quot;二、变形&quot;">​</a></h2><ol><li><p>平移</p><p><code>transform:translate();</code></p><p>单位px；</p><p>一个值:水平 两个值:水平，垂直，x轴和y轴。</p><p>也可以写：translateX x轴 translateY y轴</p></li><li><p>旋转</p><p><code>transform:rotate()</code></p><p>单位deg</p><p>正值：顺时针，负值：逆时针；</p><p><code>backface-visibility:hidden</code> 背部不可见，可以做扑克牌效果；</p></li><li><p>缩放</p><p><code>transform:scale();</code></p><p>没有单位，数字表示缩放的倍数</p><p>两个值:水平，垂直</p><p>一个值:水平垂直同时缩放，负值的时候先翻转再缩放。</p></li><li><p>倾斜</p><p><code>transform:skew();</code></p><p>和translate用法一样；</p></li><li><p>改变基准点</p><p><code>transform-orign</code> 改变基准点</p><p>两个值:x y</p><p>一个值:表示x轴，y轴中心点。</p><p>单位px % 方向。</p></li><li><p>复合写法，多个属性值用空格隔开，属性值的值用逗号隔开。</p></li></ol><h2 id="三、3d" tabindex="-1">三、3D <a class="header-anchor" href="#三、3d" aria-label="Permalink to &quot;三、3D&quot;">​</a></h2><ol><li><p><code>perspective</code>；舒服的距离是500到1000；</p><p>视距，景深，我们眼睛离屏幕的距离</p><p>可以让子元素有近大远小的效果，配合3d使用，</p><p>立体的3d x轴为中间的上下，y轴为左右两边，z轴顺时针旋转。</p><p>左手定则，手握住轴，大拇指朝向是正值负值方向，四个指头是旋转的方向，轴的方向。</p></li><li><p>旋转</p><p><code>rotateX()</code>，沿着x轴旋转，上下旋转。</p><p><code>rotateY(45deg)</code> 沿着y轴旋转，左右旋转。</p><p><code>rotateZ(45deg)</code> 沿着z轴旋转，顺时针旋转。</p><p><code>rotate3d(0,0,-1,45deg)</code>，复合写法，手机会启动3d加速，更快。</p></li><li><p>平移</p><p>translateX() 沿着x轴旋转，负值左边，正值右边。</p><p>translateY() 沿着y轴旋转，正值向下，负值向上。</p><p>translateZ() 沿着z轴旋转，正值朝前，负值朝后。</p><p>translate3d(100px,100px,100px) 复合写法。</p><p>x轴看元素的右侧，顺时针是正值，逆时针是负值</p><p>y轴从元素下面看，顺时针正值，逆时针负值。</p></li><li><p><code>transform-style:preserve-3d</code> 让子元素保留3d效果</p><p>perspective只能有近大远小的效果，需要设置style保留3d。</p></li></ol><h2 id="四、动画" tabindex="-1">四、动画 <a class="header-anchor" href="#四、动画" aria-label="Permalink to &quot;四、动画&quot;">​</a></h2><ol><li><p>animation必须配合keyframes使用。</p><p>keyframes里面写的关键帧是从0%写到100%，也可以写<code>from</code>，<code>to</code>。</p><p><code>@keyframes 动画的名字</code>(必须写)；</p></li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: rotates </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> rotetas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="2"><li>动画属性：</li></ol><table tabindex="0"><thead><tr><th>animation-name</th><th>名字(必填)</th><th>name</th></tr></thead><tbody><tr><td>animation-duration</td><td>时间(必填)</td><td>单位是s,ms</td></tr><tr><td>animation-timing-function</td><td>速度变化曲线</td><td></td></tr><tr><td>animation-delay</td><td>延时</td><td></td></tr><tr><td>animation-iteration-count</td><td>循环次数</td><td>infinite(无限循环)</td></tr><tr><td>animation-direction</td><td>反向运动</td><td>alternate(至少循环次数2)</td></tr><tr><td>animation-fill-mode</td><td>改变开始结束状态</td><td>属性值在下方</td></tr><tr><td>animation-play-state</td><td>暂停/开始</td><td>paused/running</td></tr><tr><td>复合写法：name duration timing-function delay iteration-count direction fill-mode;</td><td></td><td></td></tr></tbody></table><ol start="3"><li>暂停动画可以通过hover启动；</li><li>改变动画的开始结束状态属性值；</li></ol><table tabindex="0"><thead><tr><th>属性值</th><th>等待时候</th><th>结束以后</th></tr></thead><tbody><tr><td>none</td><td>初始</td><td>初始</td></tr><tr><td>backwards</td><td>0%</td><td>初始</td></tr><tr><td>forwards</td><td>初始</td><td>100%</td></tr><tr><td>both</td><td>0%</td><td>100%</td></tr></tbody></table>`,15)]))}const m=a(p,[["render",d]]);export{k as __pageData,m as default};
