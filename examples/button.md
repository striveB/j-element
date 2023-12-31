# Button 按钮
常用的操作按钮
## 基本用法
基础的按钮用法
<hr/>

<j-row>
  <j-button>默认按钮</j-button>
  <j-button type="primary">主要按钮</j-button>
  <j-button type="success">成功按钮</j-button>
  <j-button type="info">信息按钮</j-button>
  <j-button type="warning">警告按钮</j-button>
  <j-button type="danger">危险按钮</j-button>
</j-row>

<j-row>
  <j-button plain>朴素按钮</j-button>
  <j-button type="primary" plain>主要按钮</j-button>
  <j-button type="success" plain>成功按钮</j-button>
  <j-button type="info" plain>信息按钮</j-button>
  <j-button type="warning" plain>警告按钮</j-button>
  <j-button type="danger" plain>危险按钮</j-button>
</j-row>

<j-row>
  <j-button round>圆角按钮</j-button>
  <j-button type="primary" round>主要按钮</j-button>
  <j-button type="success" round>成功按钮</j-button>
  <j-button type="info" round>信息按钮</j-button>
  <j-button type="warning" round>警告按钮</j-button>
  <j-button type="danger" round>危险按钮</j-button>
</j-row>

<j-row>
  <j-button icon="j-icon-search" circle></j-button>
  <j-button type="primary" icon="j-icon-edit" circle></j-button>
  <j-button type="success" icon="j-icon-check" circle></j-button>
  <j-button type="info" icon="j-icon-message" circle></j-button>
  <j-button type="warning" icon="j-icon-star-off" circle></j-button>
  <j-button type="danger" icon="j-icon-delete" circle></j-button>
</j-row>

<hr/>

使用`type`、 `plain` 、`round` 和 `circle` 属性来定义 Button 的样式。

::: details Show Code

````vue
<template>
  <j-row>
    <j-button>默认按钮</j-button>
    <j-button type="primary">主要按钮</j-button>
    <j-button type="success">成功按钮</j-button>
    <j-button type="info">信息按钮</j-button>
    <j-button type="warning">警告按钮</j-button>
    <j-button type="danger">危险按钮</j-button>
  </j-row>

  <j-row>
    <j-button plain>朴素按钮</j-button>
    <j-button type="primary" plain>主要按钮</j-button>
    <j-button type="success" plain>成功按钮</j-button>
    <j-button type="info" plain>信息按钮</j-button>
    <j-button type="warning" plain>警告按钮</j-button>
    <j-button type="danger" plain>危险按钮</j-button>
  </j-row>

  <j-row>
    <j-button round>圆角按钮</j-button>
    <j-button type="primary" round>主要按钮</j-button>
    <j-button type="success" round>成功按钮</j-button>
    <j-button type="info" round>信息按钮</j-button>
    <j-button type="warning" round>警告按钮</j-button>
    <j-button type="danger" round>危险按钮</j-button>
  </j-row>

  <j-row>
    <j-button icon="j-icon-search" circle></j-button>
    <j-button type="primary" icon="j-icon-edit" circle></j-button>
    <j-button type="success" icon="j-icon-check" circle></j-button>
    <j-button type="info" icon="j-icon-message" circle></j-button>
    <j-button type="warning" icon="j-icon-star-off" circle></j-button>
    <j-button type="danger" icon="j-icon-djete" circle></j-button>
  </j-row>
</template>
````
:::
## 禁用状态
按钮不可用状态

<hr/>
<j-row>
  <j-button disabled>默认按钮</j-button>
  <j-button type="primary" disabled>主要按钮</j-button>
  <j-button type="success" disabled>成功按钮</j-button>
  <j-button type="info" disabled>信息按钮</j-button>
  <j-button type="warning" disabled>警告按钮</j-button>
  <j-button type="danger" disabled>危险按钮</j-button>
</j-row>

<j-row>
  <j-button plain disabled>朴素按钮</j-button>
  <j-button type="primary" plain disabled>主要按钮</j-button>
  <j-button type="success" plain disabled>成功按钮</j-button>
  <j-button type="info" plain disabled>信息按钮</j-button>
  <j-button type="warning" plain disabled>警告按钮</j-button>
  <j-button type="danger" plain disabled>危险按钮</j-button>
</j-row>


<hr/>

你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

::: details Show Code

```vue
<template>
  <j-row>
    <j-button disabled>默认按钮</j-button>
    <j-button type="primary" disabled>主要按钮</j-button>
    <j-button type="success" disabled>成功按钮</j-button>
    <j-button type="info" disabled>信息按钮</j-button>
    <j-button type="warning" disabled>警告按钮</j-button>
    <j-button type="danger" disabled>危险按钮</j-button>
  </j-row>

  <j-row>
    <j-button plain disabled>朴素按钮</j-button>
    <j-button type="primary" plain disabled>主要按钮</j-button>
    <j-button type="success" plain disabled>成功按钮</j-button>
    <j-button type="info" plain disabled>信息按钮</j-button>
    <j-button type="warning" plain disabled>警告按钮</j-button>
    <j-button type="danger" plain disabled>危险按钮</j-button>
  </j-row>
</template>
```
:::

## 文字按钮

没有边框和背景色的按钮

<j-button type="text">文字按钮</j-button>
<j-button type="text" disabled>文字按钮</j-button>

<hr/>

::: details Show Code

```vue
<template>
  <j-button type="text">文字按钮</j-button>
  <j-button type="text" disabled>文字按钮</j-button>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<hr/>

<j-button type="primary" icon="j-icon-edit"></j-button>
<j-button type="primary" icon="j-icon-share"></j-button>
<j-button type="primary" icon="j-icon-delete"></j-button>
<j-button type="primary" icon="j-icon-search">搜索</j-button>
<j-button type="primary">上传<i class="j-icon-upload j-icon--right"></i></j-button>

<hr/>

设置 `icon` 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 `i` 标签即可，可以使用自定义图标。

::: details Show Code
```vue
<template>
  <j-button type="primary" icon="j-icon-edit"></j-button>
  <j-button type="primary" icon="j-icon-share"></j-button>
  <j-button type="primary" icon="j-icon-delete"></j-button>
  <j-button type="primary" icon="j-icon-search">搜索</j-button>
  <j-button type="primary">上传<i class="j-icon-upload j-icon--right"></i></j-button>
</template>
```
:::
## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<hr/>

<j-button-group>
  <j-button type="primary" icon="j-icon-arrow-left">上一页</j-button>
  <j-button type="primary">下一页<i class="j-icon-arrow-right j-icon--right"></i></j-button>
</j-button-group>
<j-button-group>
  <j-button type="primary" icon="j-icon-edit"></j-button>
  <j-button type="primary" icon="j-icon-share"></j-button>
  <j-button type="primary" icon="j-icon-delete"></j-button>
</j-button-group>

<hr/>

使用 `<j-button-group>` 标签来嵌套你的按钮。

::: details Show Code
```vue
<template>
  <j-button-group>
    <j-button type="primary" icon="j-icon-arrow-left">上一页</j-button>
    <j-button type="primary">下一页<i class="j-icon-arrow-right j-icon--right"></i></j-button>
  </j-button-group>
  <j-button-group>
    <j-button type="primary" icon="j-icon-edit"></j-button>
    <j-button type="primary" icon="j-icon-share"></j-button>
    <j-button type="primary" icon="j-icon-delete"></j-button>
  </j-button-group>
</template>
```
:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<hr/>

<j-button type="primary" :loading="true">加载中</j-button>

<hr/>

要设置为loading 状态，只要设置 `loading` 属性为 `true` 即可。

::: details Show Code
```vue
<template>
  <el-button type="primary" :loading="true">加载中</el-button>
</template>
```
:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸

<hr/>

<j-row>
  <j-button>默认按钮</j-button>
  <j-button size="medium">中等按钮</j-button>
  <j-button size="small">小型按钮</j-button>
  <j-button size="mini">超小按钮</j-button>
</j-row>
<j-row>
  <j-button round>默认按钮</j-button>
  <j-button size="medium" round>中等按钮</j-button>
  <j-button size="small" round>小型按钮</j-button>
  <j-button size="mini" round>超小按钮</j-button>
</j-row>

<hr/>

:::details Show Code
```vue
<template>
  <j-row>
    <j-button>默认按钮</j-button>
    <j-button size="medium">中等按钮</j-button>
    <j-button size="small">小型按钮</j-button>
    <j-button size="mini">超小按钮</j-button>
  </j-row>
  <j-row>
    <j-button round>默认按钮</j-button>
    <j-button size="medium" round>中等按钮</j-button>
    <j-button size="small" round>小型按钮</j-button>
    <j-button size="mini" round>超小按钮</j-button>
  </j-row>
</template>
```
::: 

## 属性

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | :------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
