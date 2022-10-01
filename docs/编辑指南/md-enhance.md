---
icon: co-upgrade
---

# Markdown 增强

除了 VuePress 本身新增了一些 Markdown 语法外，本项目在 Markdown 中启用了更多的语法与新功能。

全部功能可参考[这里](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/intro.html)，但出于性能考虑只开启了以下功能：

- [Markdown 增强](#markdown-增强)
  - [属性支持](#属性支持)
  - [选项卡](#选项卡)
    - [用法](#用法)
    - [案例](#案例)
  - [Tex 语法](#tex-语法)
    - [行内语法](#行内语法)
    - [块语法](#块语法)
  - [上下角标](#上下角标)
  - [任务列表](#任务列表)
  - [图片](#图片)
    - [图片 ID 标记](#图片-id-标记)
    - [图片尺寸](#图片尺寸)
  - [高亮标记](#高亮标记)
  - [脚注](#脚注)
  - [容器](#容器)
  - [自定义对齐](#自定义对齐)
  - [组件](#组件)
    - [Badge](#badge)
    - [FontIcon](#fonticon)
  - [Echarts 图表](#echarts-图表)
  - [HTML](#html)

如需更多请留言。

## 属性支持

使用特殊标记为 Markdown 元素添加属性。

:::: tabs

@tab 使用

你可以使用语法 `{attrs}` 来为 Markdown 元素添加属性。

比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:

```md
## Hello World {#say-hello-world}
```

如果你想要一个有 full-width Class 的图片，你可以使用:

```md
![img](link/to/image.png) {.full-width}
```

同时，其他属性也收到支持:

```md
一个包含文字的段落。 {#p .a .b align=center customize-attr="content with spaces"}
```

会被渲染为:

```html
<p id="p" class="a b" align="center" customize-attr="content with spaces">
  一个包含文字的段落。
</p>
```

@tab 演示

包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.emphasis} 和 **加粗**{.bold}。

| 表格 |
| ---- |
| 内容 |

{.table}

- 列表内容{.list-item}

  - 嵌套列表内容
    {.nested}

{.list}

一行换行的文字
{.break}

--- {.horizontal}

块级元素 {.block}

```md
包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.emphasis} 和 **加粗**{.bold}。

| 表格 |
| ---- |
| 内容 |

{.table}

- list item{.list-item}

  - nested list item
    {.nested}

{.list}

一行换行的文字
{.break}

--- {.horizontal}

块级元素 {.block}
```


::::

## 选项卡

让你的 Markdown 文件支持供选项卡。

### 用法

你需要将选项卡包装在 `tabs` 容器中。

你可以在 `tabs` 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。

```md
::: tabs#fruit

<!-- 这里，fruit 将用作 id，它是可选的 -->

<!-- 选项卡内容 -->

:::
```

在这个容器内，你应该使用 `@tab` 标记来标记和分隔选项卡内容。

在 `@tab` 标记后，你可以添加文本 `:active` 默认激活选项卡，之后的文本将被解析为选项卡标题。

```md
::: tabs

@tab 标题 1
<!-- tab 1 内容 -->

@tab 标题 2
<!-- tab 2 内容 -->

@tab:active 标题 3
<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->

:::
```

默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。

```md
::: tabs

@tab 标题 1
<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

<!-- tab 1 内容 -->

@tab 标题 2#值 2
<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

<!-- tab 2 内容 -->

:::
```

::: info 一起切换并保持选择

如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。针对每个选项卡 ID 的选择会被存储并进行持久化。

:::

### 案例

一个水果选项卡列表:

::: tabs#fruit
@tab apple#apple

Apple

@tab banana#banana

Banana

:::

```md
::: tabs#fruit
@tab apple#apple

Apple
@tab banana#banana

Banana
:::
```

另一个水果选项卡列表:

::: tabs#fruit
@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

```md
::: tabs#fruit
@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
```

一个没有绑定 id 的水果选项卡列表:

::: tabs
@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

```md
::: tabs
@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
```

## Tex 语法

### 行内语法

使用 `$codes$` 来表示。

```md
Euler’s identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
```

Euler’s identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

### 块语法

使用 `$$codes$$` 来表示。

```md
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
```

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

## 上下角标

::: tabs

@tab 语法

- 使用`^ ^`进行上角标标注。
- 使用`~ ~`进行下角标标注。

@tab 例子

- 19^th^
- H~2~O

```md
- 19^th^
- H~2~O
```

:::

## 任务列表

支持任务列表。

::: tabs

@tab 语法

- 使用 `- [ ] 一些文字` 渲染一个未勾选的任务项
- 使用 `- [x] 一些文字` 渲染一个勾选了的任务项 (我们也支持大写的 `X`)

@tab 例子

- [ ] Plan A
- [x] Plan B

```md
- [ ] Plan A
- [x] Plan B
```

:::

## 图片

### 图片 ID 标记

GFM 支持通过 ID 标记图片，使得图片只在特定的模式显示。同时支持 GitHub 的标记与简易标记 `#light` 和 `#dark`。

```md
![GitHub Light](/assets/icon/github-light.png#dark)
![GitHub Dark](/assets/icon/github-dark.png#light)
```

::: details 案例

上述演示会渲染如下结果

![GitHub Light](/assets/icon/github-light.png#dark)
![GitHub Dark](/assets/icon/github-dark.png#light)

:::

### 图片尺寸

当你在主题选项中设置 `plugin.mdEhance.imageSize: true` 时，可以使用 `=widthxheight` 指定图像大小。

::: tabs

@tab 用法

```md
![Alt](/example.png =200x300)

![Alt](/example.jpg "图片标题" =200x)
![Alt](/example.bmp =x300)
```

@tab 效果

上面的 Markdown 将被解析为:

```html
<img src="/example.png" width="200" height="300" />
<img src="/example.jpg" title="图片标题" width="200" />
<img src="/example.bmp" height="300" />
```

:::

## 高亮标记

支持 highlight

::: tabs

@tab 语法

使用 `== ==` 进行标记。请注意两边需要有空格。

@tab 例子

VuePress ==非常== 强大!

```md
VuePress ==非常== 强大!
```

:::

## 脚注

::: tabs

@tab 语法

- 在 Markdown 中使用 `[^锚点文字]` 来定义脚注。

- 在之后的任何位置使用 `[^锚点文字]: ...` 来描述脚注内容。

- 如果脚注包含多个段落，其后的段落应当保持双层缩进。

@tab 例子

脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚定义[^second].

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

```md
脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚定义[^second].

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。
```

:::

## 容器

添加提示、注释、信息、注意、警告和详情自定义容器。

:::: tabs

@tab 演示

::: info
信息容器。
:::

::: note
如果希望嵌套容器，最外层使用一对四个冒号
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 `代码` 和 [链接](#容器) 的信息容器。

```js
const a = 1;
```

:::

@tab 代码

````md
::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题

一个有 `代码` 和 [链接](#演示) 的信息容器。

```js
const a = 1;
```

````

::::

## 自定义对齐

通过对[容器](#容器)进行额外的配置注入，实现自定义段落对齐。

::::: tabs

@tab 用法

```md
::: center
要居中的段落
:::

::: right
要居右的段落
:::
```

@tab 演示

:::: danger W.I.P
针对本项目自行开发的组件仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果你在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/Nemo1166/appianus-archive/issues)。
:::

::::

```md
:::: danger W.I.P
针对本项目自行开发的组件仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果你在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/Nemo1166/appianus-archive/issues)。
:::

::::
```
:::::

PS: 正如你所见，[容器](#容器)可以多层嵌套。

## 组件

通过使用`vuepress-plugin-components`，你可以在你的 Markdown 文件中导入和使用一些组件。

可用组件:

- [Badge](#badge)
- [FontIcon]

[更多说明](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/components.html)

### Badge

支持自定义颜色的徽章。

::: tabs

@tab 演示

<Badge text="tip" type="tip" vertical="middle" />
<Badge text="warning" type="warning" vertical="middle" />
<Badge text="danger" type="danger" vertical="middle" />
<Badge text="info" type="info" vertical="middle" />
<Badge text="note" type="note" vertical="middle" />

```markdown
<Badge text="tip" type="tip" vertical="middle" />
<Badge text="warning" type="warning" vertical="middle" />
<Badge text="danger" type="danger" vertical="middle" />
<Badge text="info" type="info" vertical="middle" />
<Badge text="note" type="note" vertical="middle" />
```

@tab 配置

- text: 徽章的文字
  - 类型: `string`
  - 必填: 是
- type: 徽章的类型
  - 类型: `"tip" | "warning" | "danger" | "info" | "note"`
  - 默认值: `"info"`
- color: 徽章的颜色，填入在 CSS 中合法的颜色值
  - 类型: `string`
  - 必填: 否

:::

### FontIcon

此组件用于展示字体图标。

::: tabs

@tab 演示

- 主页图标: <FontIcon icon="home" />

- 一个大红 Markdown 图标: <FontIcon icon="markdown" color="red" :size="32" />

```md
- 主页图标: <FontIcon icon="home" />

- 一个大红 Markdown 图标: <FontIcon icon="markdown" color="red" :size="32" />
```

@tab 配置

- icon: 图标名称 [参考](https://nemo1166.github.io/akicons/)
  - 类型: `string`
  - 必填: 是
- color: 图标颜色
  - 类型: `string`
  - 默认值: `当前字体颜色`
- size: 图标像素大小
  - 类型: `number`
  - 默认值: `当前字体大小`

:::

::: info 备注

事实上，组件的本质是插入一个 Vue component ，换言之，只要定义好组件的样式，然后调用时填入特定参数，就可以生成风格统一的一组页面。然而正如我在[这里](./#一些约定)所言，需要设计哪些模板并没有确定，因此该项计划暂未实施。

:::

## Echarts 图表

详见[这里](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/echarts.html)

## HTML

虽然选用 markdown 的初衷是尽量减少标签的使用，但总有些它做不到的。除了在 Markdown 内部使用新语法来增强内容外，你也可以使用 `<iframe>` 或 `<img>` 从外部引入链接来增强你的 Markdown 内容。

[参考](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/external.html)
