---
icon: wiki-icon
---

# 扩展语法

## Wikitext

使用 mediawiki 风格的标记语言。

### 链接

PS: 或许您更熟悉且喜欢使用这种写法，但我仍建议您考虑一下 [Markdown](./markdown#链接)。当然，使用什么风格是您的自由，但请注意不要多种写法在**同一处**混用。i.e. 用什么标签开始一段语句，就要用什么标签结束它。

::: tabs

@tab 演示

```markdown
<!-- 页面标题：请只写文件名，不要加路径或扩展名 -->
[[编辑指南]]
<!-- 带说明文字的链接 -->
[[编辑指南|编辑指北]]
<!-- 带章节名的链接 -->
[[markdown#链接|链接语法说明]]

```

[[编辑指南]]

[[编辑指南|编辑指北]]

[[markdown#链接|链接语法说明]]

@tab 规则

`[[链接目标|链接说明 (可选)]]`

- 链接目标只需写入文件名，程序会自动查找并匹配
  - 注意是文件名不是页面标题，这一点和 md 是一样的
- 链接说明请**不要**包含`]`

:::

### 格式化

基本语法：`::类型|内容::`

::: tip

可以解析“内容”中不包含增强功能的 [Markdown 语法](./md-show)。

注：由于双大括号在 Vue 中会被解析成其他内容，因此使用双冒号代替。同时，请注意，此模板只支持单行文本。

建议：格式化语句前后加个空格。

另外，您应当避免在“内容”中使用控制字符 `: or |`

:::

#### 指定一段文字的颜色

::: tabs

@tab 演示

```markdown
::color|purple|当然可以直接填词::
::color|#66ff00|十六进制代码前加上“#”::
::color|rgb(0,233,233)|使用rgb编码::
::color|rgba(0,66,233,0.66)|使用rgba编码，a是不透明度::
::color|#0042e9a8|与上一条等价的8位十六进制代码，在部分手机浏览器上不受支持，故**不建议使用**::
```

::color|purple|当然可以直接填词::

::color|#66ff00|十六进制代码前加上“#”::

::color|rgb(0,233,233)|使用rgb编码::

::color|rgba(0,66,233,0.66)|使用rgba编码，a是不透明度::

::color|#0042e9a8|与上一条等价的8位十六进制代码，在部分手机浏览器上不受支持，故**不建议使用**::

@tab 规则

`::color|颜色代码|文本内容::`

- 颜色代码：必填，CSS 合法的颜色代码
- 文本内容：必填，不然用它干啥呢

:::

#### 指定一段文字的字体大小

::: tabs

@tab 演示

```markdown
::fsize|16px|一段话::
::fsize|1.5em|1.5 倍相对大小::
::fsize|1.2em|1.2 倍相对大小，但是**加粗**::
```
::fsize|字体大小|文本内容::
::fsize|1.5em|1.5 倍相对大小::
::fsize|1.2em|1.2 倍相对大小，但是**加粗**::

@tab 规则

`::fsize|字体大小|文本内容::`

- 字体大小：必填，CSS 能理解的字体大小
- 文本内容：必填，不然用它干啥呢

:::

#### 指定一段文字的任意格式

使用 CSS 控制一段文本的格式。如果您想对完整的一段话应用样式，可以考虑[这种方法](./md-enhance.html#属性支持)。

::: tabs

@tab 演示

```markdown
::styles|color=red|一些文字::
::styles|color=green;font-size=6px|更多文字::
```

::styles|color=red|一些文字::
::styles|color=green;font-size=6px|更多文字::

@tab 规则

`::styles|样式表|文本内容::`

- 样式表：必填，CSS 样式表，注意为了避免冲突，使用 `=` 代替 CSS 的冒号
- 文本内容：必填，不然用它干啥呢

:::

#### 黑幕文本

::: tabs

@tab 演示

```markdown
::heimu|一些文字，中~~间~~|可以有::
```

::heimu|一些文字，中~~间~~|可以有::

@tab 规则

`::heimu|文本内容::`

- 文本内容：必填，不填的话整段语句删了得了（）

:::

#### 旁注标记

写作 A，读作 B。

::: tabs

@tab 演示

```markdown
::rubys|旁|páng::::rubys|注|zhù::::rubys|标|biāo::::rubys|记|jì::

::rubys|旁注*标记*|páng zhù biāo jì ::
```

::rubys|旁|páng::::rubys|注|zhù::::rubys|标|biāo::::rubys|记|jì::

::rubys|旁注*标记*|páng zhù biāo jì ::

@tab 规则

`::rubys|被标记文本|标记内容::`

- 被标记文本&标记内容：必填，你猜猜为什么是必填

:::

注意：如果标记文本较长或二者长度差距较大，建议调整文本内容以平衡长度，::rubys|否则|会看起来*比较怪* ::。

## 其他：我还没想好

### 侧边面板

用法类似[自定义容器](./md-enhance.html#容器)。事实上，它和自定义容器都是由同一组件扩展而来。

```markdown

之前的内容...

::: side-panel

中间放入相仿的内容，这段代码与下面的内容位于同一高度（也即顶端对齐）。

:::

之后的内容...

```

#### 示例

话虽如此，医疗部的同事们仍然看得出，嘉维尔发生了一些微妙的变化。这绝不是说她在朝着更多愁善感或者类似的方向变化，她只是更加自信、更加健谈，而且更喜欢谈及自己的家乡了。::color|violet|（组件在源码中位于这段话*下面*）::

::: side-panel

![](/assets/职业图标/近卫_带文字.png)

:::

::color|purple|（组件在源码中位于这段话*上面*）::必须澄清的是，就算是刚刚加入罗德岛时，她也并未对自己的家乡有什么避讳。对那时的她而言，家乡就是家乡而已，不必着重强调，也无需避而不谈。只是罗德岛既然无意对她的过去刨根问底，她自然也没必要时时刻刻把阿卡胡拉挂在嘴边。

然而，以那次奇妙的雨林假期为开端，罗德岛上陆陆续续多了不少来自阿卡胡拉的干员，嘉维尔关于家乡的话匣子也逐渐打开。于是，我们对这片区域的认识也与日俱增：一片过去被认为是无人区的丛林，大大小小的部族，尚武好战的提亚卡乌，还有缓慢而不可逆的工业化进程……现在又加上了数十万从地下涌上来的杜林人。这么多要素放在一起，哪怕是大地上最富有远见的规划家，在想到阿卡胡拉的未来时，恐怕也要觉得头痛。

### 含图标的名词链接

![npm](https://img.shields.io/npm/v/akicons?logo=npm&style=for-the-badge)

部分特有名词自动加图标并支持跳转。[查看全部图标](https://www.npmjs.com/package/akicons)

[另一种](./md-enhance.html#fonticon)插入图标的方式

::: tabs

@tab 示例

这是一名*先锋*干员，专精*情报官*，招募需要 600*合成玉*。

```markdown
这是一名*先锋*干员，专精*情报官*，招募需要 600*合成玉*。
```

@tab 说明

将名词用一对星号包裹，不要掺杂空格或其他多余字符。

支持的类型有：

- [x] 职业与分支
- [x] [货币/数值](/系统/数值.html)
- [ ] 阵营（包含国家/地区、组织）

:::