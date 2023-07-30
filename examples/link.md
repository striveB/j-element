# Link 文字链接
文字超链接

## 基础用法

基础的文字链接用法

<hr/>

<j-row>
  <j-link>默认按钮</j-link>
  <j-link type="primary">主要按钮</j-link>
  <j-link type="success">成功按钮</j-link>
  <j-link type="info">信息按钮</j-link>
  <j-link type="warning">警告按钮</j-link>
  <j-link type="danger">危险按钮</j-link>
</j-row>

<hr/>


::: details Show Code
```vue
<template>
  <j-row>
    <j-link>默认按钮</j-link>
    <j-link type="primary">主要按钮</j-link>
    <j-link type="success">成功按钮</j-link>
    <j-link type="info">信息按钮</j-link>
    <j-link type="warning">警告按钮</j-link>
    <j-link type="danger">危险按钮</j-link>
  </j-row>
</template>
```
:::

## 禁用状态

文字链接不可用状态

<hr/>

<j-row>
  <j-link disabled>默认按钮</j-link>
  <j-link type="primary" disabled>主要按钮</j-link>
  <j-link type="success" disabled>成功按钮</j-link>
  <j-link type="info" disabled>信息按钮</j-link>
  <j-link type="warning" disabled>警告按钮</j-link>
  <j-link type="danger" disabled>危险按钮</j-link>
</j-row>

<hr/>


::: details Show Code
```vue
<template>
  <j-row>
    <j-link disabled>默认按钮</j-link>
    <j-link type="primary" disabled>主要按钮</j-link>
    <j-link type="success" disabled>成功按钮</j-link>
    <j-link type="info" disabled>信息按钮</j-link>
    <j-link type="warning" disabled>警告按钮</j-link>
    <j-link type="danger" disabled>危险按钮</j-link>
  </j-row>
</template>
```
:::

## 下划线

文字链接下划线

<hr/>

<j-row>
  <j-link :underline="false">无下划线</j-link>
  <j-link>有下划线</j-link>
</j-row>

<hr/>

::: details Show Code
```vue
<template>
  <j-row>
    <j-link :underline="false">无下划线</j-link>
    <j-link>有下划线</j-link>
  </j-row>
</template>
```
:::



