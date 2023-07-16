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

使用 `<el-button-group>` 标签来嵌套你的按钮。

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