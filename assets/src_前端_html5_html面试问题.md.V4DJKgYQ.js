import{_ as i,c as l,o as e,a4 as a}from"./chunks/framework.C8gWICj3.js";const u=JSON.parse('{"title":"html面试问题","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/html5/html面试问题.md","filePath":"src/前端/html5/html面试问题.md","lastUpdated":1710326451000}'),t={name:"src/前端/html5/html面试问题.md"},o=a('<h1 id="html面试问题" tabindex="-1">html面试问题 <a class="header-anchor" href="#html面试问题" aria-label="Permalink to &quot;html面试问题&quot;">​</a></h1><h2 id="浏览器渲染过程-背" tabindex="-1">浏览器渲染过程（背） <a class="header-anchor" href="#浏览器渲染过程-背" aria-label="Permalink to &quot;浏览器渲染过程（背）&quot;">​</a></h2><ol><li>解析HTML，生成DOM树，解析CSS，生成CSSOM树；</li><li>将DOM树和CSSOM树结合，生成渲染树(Render Tree)；</li><li><code>Layout</code>(回流)：根据生成的渲染树，进行回流，得到节点的几何信息（位置，大小）；</li><li><code>Painting</code>（重绘）：根据渲染树以及回流得到的几何信息，得到节点的绝对像素；</li><li><code>Display</code>：将像素发送给GPU，展示在页面上；</li></ol><p>学习浏览器渲染原理更多的是为了解决性能上的问题；并且渲染原理在面试中答得好，也是一个能与其他候选人拉开差距的一点，在JS中有一个JS引擎，执行渲染也有一个渲染引擎，渲染引擎在不同的浏览器也都是不同的，内核不一样，主要关注webkit的渲染引擎；</p><h2 id="生成渲染树的过程" tabindex="-1">生成渲染树的过程 <a class="header-anchor" href="#生成渲染树的过程" aria-label="Permalink to &quot;生成渲染树的过程&quot;">​</a></h2><ol><li>从dom树的根节点开始遍历每个可见的节点</li><li>对于每个可见的节点，找到cssom树中对应的规则，并应用它们；</li><li>根据每个可见的节点以及其对应的样式，组合生成渲染树；</li></ol><p>渲染树只包含可见的节点：script、meta、link等，包含display:none都是不可见的节点；visiblity为可见的；</p><h2 id="回流和重绘" tabindex="-1">回流和重绘 <a class="header-anchor" href="#回流和重绘" aria-label="Permalink to &quot;回流和重绘&quot;">​</a></h2><p>回流和重绘会很大程度影响性能；</p><p>回流：布局或者几何属性需要改变就叫回流；</p><p>生成构造渲染树，将可以的DOM节点以及对应的样式结合起来，计算它们在设备视口内的确切位置和大小，这个过程就是回流；</p><p>重绘：当节点需要更改外观而不会影响布局的，叫作重绘；</p><p>在知道了每个节点的具体几何信息，将渲染树的每个节点都转换为屏幕上的实际像素，这个阶段就叫重绘；</p><h3 id="何时发生回流重绘" tabindex="-1">何时发生回流重绘 <a class="header-anchor" href="#何时发生回流重绘" aria-label="Permalink to &quot;何时发生回流重绘&quot;">​</a></h3><p>回流这一阶段主要是计算节点的位置和几何信息；</p><ul><li>改变window大小</li><li>改变字体</li><li>添加或删除样式</li><li>文字改变</li><li>定位或者浮动</li><li>盒模型</li></ul><p><strong>回流一定会触发重绘，而重绘不一定会回流</strong></p><h3 id="浏览器优化" tabindex="-1">浏览器优化 <a class="header-anchor" href="#浏览器优化" aria-label="Permalink to &quot;浏览器优化&quot;">​</a></h3><p>由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程；浏览器会将修改操作放入队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列；但是，当获取布局信息的操作的时候，会强制队列刷新，比如当你访问以下属性或者方法时：</p><ul><li><code>offsetTop/left/width/height</code></li><li><code>scrollTop/left/width/height</code></li><li><code>clientTop/left/width/height</code></li><li><code>getComputedStyle</code></li><li><code>getBoundingClientRect</code></li></ul><p>上面的属性和方法都需要返回最新的布局信息，因此浏览器必须清空队列，触发回流重绘来计算正确的值，因此在修改样式时最好避免使用上面的属性，他们都会刷新渲染队列；</p><h3 id="减少重绘与回流" tabindex="-1">减少重绘与回流 <a class="header-anchor" href="#减少重绘与回流" aria-label="Permalink to &quot;减少重绘与回流&quot;">​</a></h3><ol><li>使用<code>translate</code>替代<code>top</code>，在移动元素绝对定位时，使用translate而不是top、left；</li><li>使用<code>visibility</code>替换<code>display:none</code>，因为前者只引起重绘，而后者直接回流；</li><li>把dom离线后修改，比如：先把DOM给display:none，有一次回流，然后修改100次，然后再把它显示出来；</li><li>不要把DOM结点的属性值放在一个循环里当成循环里的变量；</li><li>不要使用table布局，可能很小的一个小改动会造成整个table的重新布局；</li><li>动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用<code>requestAnimationFrame</code></li><li>CSS选择符从右往左匹配查找，避免DOM深度过深</li><li>将频繁运行的动画变成图层，图层能够阻止该节点回流影响别的元素，比如对于video标签，浏览器会自动将该节点变成图层；</li></ol><h2 id="优雅降级和渐进增强" tabindex="-1">优雅降级和渐进增强 <a class="header-anchor" href="#优雅降级和渐进增强" aria-label="Permalink to &quot;优雅降级和渐进增强&quot;">​</a></h2><p>优雅降级：解决用户使用的是低版本浏览器的问题，针对不同的浏览器的ie的hack级别，为那些不支持功能的浏览器增加候选方案；</p><p>渐进增强：从兼容低版本浏览器开始，逐渐兼容高版本浏览器；</p><h2 id="iframe有哪些缺点" tabindex="-1">iframe有哪些缺点 <a class="header-anchor" href="#iframe有哪些缺点" aria-label="Permalink to &quot;iframe有哪些缺点&quot;">​</a></h2><p>页面样式调试麻烦，出现多个滚动条；</p><p>（2）浏览器的后退按钮失效；</p><p>（3）过多会增加服务器的HTTP请求；</p><p>（4）小型的移动设备无法完全显示框架；</p><p>（5）产生多个页面，不易管理；</p><p>（6）不容易打印；</p><p>（7）代码复杂，无法被一些搜索引擎解读。</p><h2 id="浏览器解析css选择器" tabindex="-1">浏览器解析css选择器 <a class="header-anchor" href="#浏览器解析css选择器" aria-label="Permalink to &quot;浏览器解析css选择器&quot;">​</a></h2><p>从上到下，从右到左</p><p><code>.li a{}</code> 先找所有的a标签，再找a标签上面的li标签；</p><h2 id="页面重构怎么操作" tabindex="-1">页面重构怎么操作 <a class="header-anchor" href="#页面重构怎么操作" aria-label="Permalink to &quot;页面重构怎么操作&quot;">​</a></h2><p>网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前提保持一到的行为；（ 在不改变ui的情况下，对网站进行优化， 在扩展的同时保持一致的uI）</p><h2 id="为什么要重置浏览器默认样式" tabindex="-1">为什么要重置浏览器默认样式 <a class="header-anchor" href="#为什么要重置浏览器默认样式" aria-label="Permalink to &quot;为什么要重置浏览器默认样式&quot;">​</a></h2><p>因为不同的浏览器对有些标签的默认值是不同的，如果没有初始化浏览器默认样式，会出现不同浏览器页面有不同的差异；</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ol><li>大盒子小盒子，大：宽500 高600 背景红；小：宽200 高300 背景黄，小盒子垂直水平居中（两中方法）</li><li>插入一张背景图片，不平铺，把背景图片放在距离上50px 左100（复合写法和分开写法）</li><li>Margin遇到的两个问题以及解决方法</li><li>随便写个三角形，css写width:0px bordere-width:100px;border-style:solid;border-color:#000 transparent transparent</li><li>如何生成BFC?</li><li>(根标签html，float，overflow：hidden auto scroll。Display：inline-block，position：fixed或absolute)</li><li>BFC能解决什么问题？</li><li>外边距重叠、自适应两栏或三栏布局，防止字体环绕，清除浮动，margin值塌陷问题</li><li>宽500，高300，放在浏览器最中间？</li><li>Position:fixed;left:50%;top:50%;margin-left:-250px;margin-top:-150px;</li><li>大盒子小盒子父子关系，大盒子宽高未知，小盒子宽100 高200 把小盒子放在大盒子最中间的位置。</li><li>如何引入外部样式表</li><li>处理图片小空白（三种方法）；</li><li>Ie里边小高度问题（给元素设置 font-size:0;line-height:0;overflow：hidden);</li><li>Ie8里边a标签包的图片边框处理（给图片设置border：none）</li><li>Ie浮动双边距问题：_display:inline</li><li>写出一种三栏的等高布局</li><li>写出双飞翼布局</li><li>设置透明度，两种方法，区别？</li><li>精灵图的优缺点</li><li>Bfc的中文名字叫什么？</li><li>用css设置三角形，ie6里面透明边框显示黑色，解决方法？</li><li>Doctype是什么，是干什么用的</li><li>H5新增了哪些特性。</li><li>Css3新增了哪些特性。</li><li>选中input type类型为text的文本框。</li><li>Css3新增选择器（三个）。</li><li>弹性盒布局，改变主轴方向。设置主轴方向居中对齐。交叉轴末端对齐。自动换行。</li><li>选择器选中偶数个</li><li>选中所有a标签中含有href属性并且属性值以a结束的</li><li>Html新增标签低版本浏览器不兼容 使用两种方法使他兼容</li><li>插入视频文件，两种播放格式，自动播放 循环播放 静音播放</li><li>表单元素 数字 最大10 最小1 步长2 设置必填项</li><li>border-radius 四个值表示什么</li><li>box-sizing：border-box</li><li>多列布局 设置5列</li><li>设置弹性盒，主轴方向是垂直方向的</li><li>设置盒子阴影</li><li>设置用户在水平方向上拖拽一个元素</li><li>设置一个文本框，自动获取焦点</li><li>单选框，默认选中</li><li>选择已经被选中的表单元素</li><li>Less两种注释方式，哪种可以编译，哪种不可以编译</li><li>Less 混入</li><li>移动端布局 几种方式</li><li>单行文本溢出变点状</li><li>清除浮动的办法（五种）</li><li>语义化的好处是什么</li><li>如何把表格的边框合并成一条线</li><li>宽500高300 一行文字，文字水平和垂直居中</li><li>用css实现三角形</li><li>有一个宽500高300的盒子，始终显示在浏览器最中间的位置。</li><li>如何生成BFC，bfc可以解决什么问题</li><li>Ie6小高度问题，如何解决 line-height：0；font-size：0；overflow：hidden</li><li>在ie6里，浮动元素的双边距问题，如何解决（_display:inline）</li><li>设置title小图标</li><li>让鼠标变手型</li><li>Display:none和 visibility：hidden的区别</li><li>文本框点击时，蓝色的线如何去掉 outline：none</li><li>大的banner图如何布局</li><li>用精灵图的优缺点</li><li>给网页设置关键字如何设置</li><li>页面上使用非安全字体，如何实现</li><li>Html5新增标签，低版本浏览器不兼容，如何解决（两种办法）</li><li>写两个单选框，点击文字可以把单选框选中，默认选中男</li><li>设置一个文本框是必填项</li><li>Css样式选中偶数个</li><li>Checked的input的框，改变宽高（状态伪类选择器）</li><li>让每个段落里的第一个字字号变成50px；</li><li>div+p选择器表示什么；</li><li>box-sizing：border-box；</li><li>当屏幕的宽度大于1000px引入1.css。大于1000&lt;1200引入2.css</li><li>设置过渡效果，经过1s，宽度由100px变200px 匀速，延迟2s。</li><li>写移动端有几种方案</li><li>给span设置position：abslute/fixed/relative可以设置宽高吗</li></ol>',43),r=[o];function d(s,n,h,c,p,m){return e(),l("div",null,r)}const f=i(t,[["render",d]]);export{u as __pageData,f as default};
