## 相关链接

浏览器兼容信息
- [Can I Use](http://caniuse.com)
- [WebPlatform.org](http://webplatform.org)
- [Mozilla Developer Network](http://developer.mozilla.org)
- [维基百科上的“浏览器排版引擎对比(CSS 兼容性)”词条](http://en.wikipedia.org/wiki/Comparison_of_layout_engines_(Cascading_Style_Sheets))
- [modernizr](https://modernizr.com/) - js库 - 检测浏览器是否支持特性

[O’Reilly 图书制作系统](https://atlas.oreilly.com/)
[Dabblet](http://dabblet.com/) - 类似 codepen 等

[www-style](http://lists.w3.org/Archives/Public/www-style) - W3C 工作组邮件列表  
[电话会议记录](http://irc.w3.org/) - W3C IRC 服务器
  
## js
获取 dom 元素
```js
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}
```

检测 css 属性
```js
function testProperty(property) {
    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    }
    root.classList.add('no-' + property.toLowerCase());
    return false;
}
```

检测 css 属性值
```js
function testValue(id, value, property) {
    var dummy = document.createElement('p');
    dummy.style[property] = value;

    if (dummy.style[property]) {
        root.classList.add(id);
        return true;
    }
    root.classList.add('no-' + id);
    return false;
}
```

## 关于未来
占位

## 建议
- DRY、可维护、灵活性、轻量级并且 尽可能符合标准

## 第1章 - 引言
### 1. web 标准：是敌是友
#### 1.1 冰与火之歌：浏览器前缀

> 一场史诗般的失败

- **实验性特性** 需要开发者反馈给工作组，以便生产环境能够使用。
- 为了开发者能够使用这些特性，**浏览器前缀** 作为方案中的一个被提了出来。
- 开发者在不同浏览器上使用不同前缀尝试这些特性，并把结果反馈给工作组，最终生成不带前缀的 **标准化特性**。
- 然而这些特性能够实现以前大费周章才能实现的效果，于是开发者开始争先恐后的使用它们。
- 为了 **兼容** 不同浏览器及以后的标准，前缀写法便诞生了。

```css
-moz-border-radius: 10px; 
-ms-border-radius: 10px; 
-o-border-radius: 10px; 
-webkit-border-radius: 10px; 
border-radius: 10px;
```
这里面有两条声明是完全多余的：-ms-border-radius 和 -o-border-radius，IE 和 opera 直接实现了无前缀版。

### 2. css 编码技巧
#### 2.1 尽量减少代码重复
尽量减少改动时要编辑的地方  
当某些值相互依赖时,应该把它们的相互关系用代码表达出来

```css
/* before */
padding: 6px 16px;
border: 1px solid #446d88;
background: #58a linear-gradient(#77a0bb, #58a);
border-radius: 4px;
box-shadow: 0 1px 5px gray;
color: white;
text-shadow: 0 -1px 1px #335166;
font-size: 20px;
line-height: 30px;

/* after */
padding: .3em .8em;
border: 1px solid rgba(0, 0, 0, .1);
background: #58a linear-gradient(hsla(0, 0%, 100%, .2), transparent);
border-radius: .2em;
box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
color: white;
text-shadow: 0 -.05em .05em rgba(0, 0, 0, .5);
font-size: 125%;
line-height: 1.5;

只要改变背景色,就可以得到其 他颜色版本的按钮了
```

代码易维护 vs 代码量少
```css
/* before */
border-width: 10px 10px 10px 0;

/* after */
border-width: 10px;
border-left-width: 0;
```

currentColor  
与文本的颜色保持一致
```css
hr {
    background: currentColor;
}
```

inherit
```css
a {
    color: inherit;
}

/* 小箭头 > 继承背景和边框的样式 */
.callout {
    position: relative;
}

.callout::before {
    content: "";
    position: absolute;
    top: -.4em;
    left: 1em;
    padding: .35em;
    background: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
}
```

#### 2.2 相信你的眼睛，而不是数字
人的眼睛并不是一台完美的输入设备。有时候精准的尺度看起来并不精准,而我们的设计需要顺应这种偏差。举一个在视觉设计领域广为人知的例子吧,我们的眼睛在看到一个完美垂直居中的物体时,会感觉它并不居中。实际上,我们应该把这个物体从几何学的中心点再稍微向上挪一点,才能取得理想的视觉效果。

#### 2.3 关于响应式设计
每个媒体查询都会增加成本  
你只应该把它作为最后的手段,只要用对了,它就是利器  
媒体查询的断点不应该由具体的设备来决定,而应该根据设计自身来决定,如果你有信心自己的设计在任何可能出现的视口尺寸下都能良好工作,谁关心这些设备的分辨率具体是多少呢?

- 使用百分比长度来取代固定长度。如果实在做不到这一点,也应该尝试使用与视口相关的单位(vw、vh、vmin 和 vmax),它们的值解析为视口宽度或高度的百分比。
- 当你需要在较大分辨率下得到固定宽度时,使用 max-width 而不是 width,因为它可以适应较小的分辨率,而无需使用媒体查询。
- 不要忘记为替换元素(比如 img、object、video、iframe 等)设置一个 max-width,值为 100%。
- 假如背景图片需要完整地铺满一个容器,不管容器的尺寸如何变化, background-size: cover这个属性都可以做到。但是,我们也要时刻牢记——带宽并不是无限的,因此在移动网页中通过 CSS 把一张大图缩小显示往往是不太明智的。
- 当图片(或其他元素)以行列式进行布局时,让视口的宽度来决定列的数量。弹性盒布局(即 Flexbox)或者 display: inline-block 加上常规的文本折行行为,都可以实现这一点。
- 在使用多列文本时,指定column-width(列宽)而不是指定 column-count(列数),这样它就可以在较小的屏幕上自动显示为单列布局。

#### 2.4 合理使用简写
```css
/* before */
background: url(tr.png) no-repeat top right / 2em 2em,
            url(br.png) no-repeat bottom right / 2em 2em,
            url(bl.png) no-repeat bottom left / 2em 2em;

/* after */
background: url(tr.png) top right,
            url(br.png) bottom right,
            url(bl.png) bottom left;
background-size: 2em 2em;
background-repeat: no-repeat;
```

#### 2.5 我应该使用预处理器吗
在每个项目开始时使用纯 CSS,只有当代码开始变得无法保持 DRY 时,才切换到预处理器的方案。为了避免可能发生的“依赖”或“滥用”,在引入预处理器的问题上需要冷静决策,不应该在每个项目一开始时就不动脑筋顺着惯性来。

## 第2章 - 背景与边框
### 1. 半透明边框
默认状态下，背景会延伸到边框的区域下层

```css
/* before */

/* after */
```