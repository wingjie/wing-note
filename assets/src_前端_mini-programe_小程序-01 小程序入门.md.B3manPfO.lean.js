import{_ as t,c as i,ag as e,j as a,a as p,t as d,o as s}from"./chunks/framework.C0nxaLfM.js";const b=JSON.parse('{"title":"小程序-01 小程序入门","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端/mini-programe/小程序-01 小程序入门.md","filePath":"src/前端/mini-programe/小程序-01 小程序入门.md","lastUpdated":1710326451000}'),n={name:"src/前端/mini-programe/小程序-01 小程序入门.md"};function r(l,o,c,h,u,m){return s(),i("div",null,[o[3]||(o[3]=e(`<h1 id="小程序-01-小程序入门" tabindex="-1">小程序-01 小程序入门 <a class="header-anchor" href="#小程序-01-小程序入门" aria-label="Permalink to &quot;小程序-01 小程序入门&quot;">​</a></h1><h2 id="一、注册小程序" tabindex="-1">一、注册小程序 <a class="header-anchor" href="#一、注册小程序" aria-label="Permalink to &quot;一、注册小程序&quot;">​</a></h2><ol><li>注册账号：mp.weixin.qq.com</li><li>小程序的特点：不需要安装就可以使用；</li></ol><p>注册注意事项：在选择服务类目时，不能选择游戏，否则以后就不能修改，其他可以修改；</p><h2 id="二、小程序目录结构" tabindex="-1">二、小程序目录结构 <a class="header-anchor" href="#二、小程序目录结构" aria-label="Permalink to &quot;二、小程序目录结构&quot;">​</a></h2><ol><li>一个小程序主体部分由三个文件组成，必须放在项目根目录；</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── app.js    # 项目入口文件，小程序逻辑</span></span>
<span class="line"><span>├── app.json  # 小程序公共配置</span></span>
<span class="line"><span>└── app.wxss  # 小程序公共样式表</span></span></code></pre></div><ol start="2"><li>一个小程序页面由四个文件组成：</li></ol><ul><li><p>js ---- 页面逻辑</p></li><li><p>wxml ---- 页面结构，相当于html，在页面结构html大部分标签都不能使用；</p></li><li><p>json ---- 页面配置</p></li><li><p>wxss ---- 页面样式表</p></li></ul><h2 id="三、全局配置-配置窗口信息" tabindex="-1">三、全局配置（配置窗口信息） <a class="header-anchor" href="#三、全局配置-配置窗口信息" aria-label="Permalink to &quot;三、全局配置（配置窗口信息）&quot;">​</a></h2><p>在app.json文件填写全局配置，为严格的json对象模式；</p><ol><li>pages：（页面路径）</li></ol><p>（1）新建页面，以数组的形式填写，</p><p>（2）填写路径名会自动创建一个小程序页面，会自动生成四个文件，不需要手动创建</p><p>（3）在pages里，谁在第一项，谁就是第一个页面，文件名不需要写后缀；</p><p>（4）小程序中新增/减少页面都需要对pages数组修改；</p><ol start="2"><li>window：配置小程序的状态栏、导航条、标题、窗口背景色；（窗口表现）</li></ol><p>常用的：</p><p><code>navigationBarBackgroundColor</code> ：导航栏背景色，必须16进制；</p><p><code>navigationBarTextStyle</code> : 导航栏标题颜色，仅支持black/white</p><p><code>navigationBarTitleText</code> : 导航栏标题文字内容</p><p><code>enablePullDownRefresh</code> ： 开启全局下拉刷新</p><p><code>backgroundColor</code> : 下拉窗口的背景色（需要开启下拉刷新）</p><p><code>backgroundTextStyle</code>: 下拉loading的样式，仅支持dark/light 小点的颜色;</p><ol start="3"><li>tabBar：导航栏，</li></ol><p>常用选项：</p><p><code>color</code> : tab文字默认颜色，仅支持16进制；</p><p><code>selectedColor</code> : 文字选中时的颜色，仅支持16进制；</p><p><code>backgroundColor</code> : tab背景色，仅支持16进制；</p><p><code>borderStyle</code> : black/white tab上边框的颜色</p><p><code>list</code> : tab列表，最少2个，最多5个；</p><p><code>position</code> : bottom/top tab的位置</p><p>list为一个数组，其中的项：</p><p><code>pagePath</code> : 页面路径，必须在pages有定义的</p><p><code>text</code> : tab上按钮文字</p><p><code>iconPath</code> : 图片路径，限制40k，不支持网络图片，建议81px*81px，当position:top时不显示icon；</p><p><code>selectedIconPath</code> : 选中时图片路径；</p><p>JSON的值只能是以下几种数据格式，其他任何格式都会触发报错，例如 JavaScript 中的 undefined。 1. 数字，包含浮点数和整数 2. 字符串，需要包裹在双引号中 3. Bool值，true 或者 false 4. 数组，需要包裹在方括号中 [] 5. 对象，需要包裹在大括号中 {} 6. Null</p><p>还需要注意的是 JSON 文件中无法使用注释，试图添加注释将会引发报错。</p><h2 id="四、页面配置" tabindex="-1">四、页面配置 <a class="header-anchor" href="#四、页面配置" aria-label="Permalink to &quot;四、页面配置&quot;">​</a></h2><ol><li>在组件里的json文件里，添加app.json的window中相同的配置项；</li></ol><h2 id="五、wxml模板" tabindex="-1">五、wxml模板 <a class="header-anchor" href="#五、wxml模板" aria-label="Permalink to &quot;五、wxml模板&quot;">​</a></h2><p>在小程序里面，标签名字不能使用div、p、span等，</p><p>在小程序里面使用的是view、text、button、image；</p><p>在小程序里面，也是MVVM的开发模式， 提倡把渲染和逻辑分离，不要让js直接操作dom，js只需要管理状态即可；</p>`,45)),a("ol",null,[a("li",null,[a("p",null,[o[0]||(o[0]=p("在使用字符串插值：")),a("code",null,d(l.msg),1),o[1]||(o[1]=p("，标签上使用动态属性时也需要双大括号；"))])]),o[2]||(o[2]=a("li",null,[a("p",null,[p("修改值："),a("code",null,"this.setData({msg: 'hello'})")])],-1))]),o[4]||(o[4]=e('<p>注意：修改值时，即使使用push方法改变原数组，也没用，不会实时更新；</p><h2 id="六、wxss" tabindex="-1">六、wxss <a class="header-anchor" href="#六、wxss" aria-label="Permalink to &quot;六、wxss&quot;">​</a></h2><p>wxss具有css大部分特性，同时wxss扩展了一些特性有</p><ol><li><p>尺寸单位：</p><p>rpx： 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。</p><p>如： iPhone6 上，屏幕宽度为375px，共有750个物理像素，</p><p>则750rpx = 375px = 750物理像素，</p><p>1rpx = 0.5px = 1物理像素。页面不同，换算的单位也不同；</p></li></ol><p>注意：在使用px时，375px会自动转换750px；</p><ol start="2"><li>样式导入</li></ol><p>使用@import 语句导入外联样式表</p><p>@import &#39;common.wxss&#39;;</p><h2 id="七、page" tabindex="-1">七、page <a class="header-anchor" href="#七、page" aria-label="Permalink to &quot;七、page&quot;">​</a></h2><p>组件里的js文件，都由Page({})包裹，有以下属性；</p><ol><li>data函数</li></ol><p>第一次渲染使用的初始数据，data数据必须是字符串、数字、布尔值、对象、数组类型的；</p><h3 id="生命周期函数" tabindex="-1">生命周期函数 <a class="header-anchor" href="#生命周期函数" aria-label="Permalink to &quot;生命周期函数&quot;">​</a></h3><p>（1）<code>onLoad(options)</code>：页面加载，只会调用一次，可以在onLoad的参数中获取打开当前页面路径中的参数</p><p>（2）<code>onShow</code>：页面显示，页面切入前台时触发；</p><p>（3）<code>onReady</code>：页面初次渲染完成，只会调用一次；</p><p>（4）<code>onHide</code>：页面隐藏，页面切入后台时触发；</p><p>（5）<code>onUnload</code>：页面卸载，离开当前页面触发；</p><p>页面一进入触发：<code>onLoad</code>、<code>onShow</code>、<code>onReady</code>;</p><p>当在tabBar中切换时，切入只会触发onShow；</p><ol start="3"><li>页面事件处理函数</li></ol><p><code>onPullDownRefresh()</code>：监听用户下拉刷新事件；需要开启下拉事件；</p><p><code>wx.stopPullDownRefresh()</code>，停止当前页面下拉刷新；</p><p><code>onReachBottom()</code>：监听用户上拉触底事件；</p><p><code>onPageScroll()</code>：监听用户滑动页面事件，会实时触发；一个参数（scrollTop）</p><h2 id="八、事件" tabindex="-1">八、事件 <a class="header-anchor" href="#八、事件" aria-label="Permalink to &quot;八、事件&quot;">​</a></h2><ol><li>事件分类：</li></ol><p>bind：冒泡事件，触摸子元素会触发父元素的事件；</p><p>catch：非冒泡事件；</p><p>例：bindtap=&#39;skip&#39;、catchtap=&#39;skip&#39;</p><p>后面也可以紧跟一个冒号；bind:tap=&#39;skip&#39;；</p><p>注意：事件不能传参；可以通过在页面绑定id，或者通过data-，后面添加内容，在事件通过event获取；</p><ol start="2"><li>事件</li></ol><p>tap：触摸马上离开，类似click事件；</p><p>touchstart：手指触摸动作开始</p><p>touchmove：手指触摸后移动；</p><p>touchcancel：手指触摸动作打断，如来电提醒，弹窗；</p><p>touchend：手指触摸动作结束</p><ol start="3"><li>监听子元素事件</li></ol><p>给父元素绑定capture-bind:touchstart=&#39;事件名&#39;，当触摸子元素时，则会触发该事件；</p>',40))])}const g=t(n,[["render",r]]);export{b as __pageData,g as default};
