<script setup lang="ts">
  import JUi from '../dist/j-element.js'
  function success() {
  JUi.JMessage({
      type: "success",
      message: "恭喜你，这是一条成功消息",
    });
  }
  function warning() {
    JUi.JMessage({
      type: "warning",
      message: "警告哦，这是一条警告消息",
    });
  }
  function info() {
    JUi.JMessage({
      type: "info",
      message: "这是一条消息提示",
    });
  }
  function error() {
    JUi.JMessage({
      type: "error",
      message: "错了哦，这是一条错误消息",
    });
  }
  function openHTML() {
    JUi.JMessage({
      dangerouslyUseHTMLString: true,
      message: "<strong>这是 <i>HTML</i> 片段</strong>",
    });
  }

  function openCenter() {
    JUi.JMessage({
      message: "居中内容",
      center: true,
    });
  }
</script>

# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基本用法

从顶部出现，3 秒后自动消失。

<hr />

<j-row>
  <j-button @click="success">成功</j-button>
  <j-button @click="warning">警告</j-button>
  <j-button @click="info">消息</j-button>
  <j-button @click="error">错误</j-button>
</j-row>

<hr />

::: details Show Code
```vue
<template>
  <j-row>
    <j-button @click="success">成功</j-button>
    <j-button @click="warning">警告</j-button>
    <j-button @click="info">消息</j-button>
    <j-button @click="error">错误</j-button>
  </j-row>
</template>

<script setup lang="ts">
  import {JMessage} from 'j-element'
  function success() {
    JMessage({
      type: "success",
      message: "恭喜你，这是一条成功消息",
    });
  }
  function warning() {
    JMessage({
      type: "warning",
      message: "警告哦，这是一条警告消息",
    });
  }
  function info() {
    JMessage({
      type: "info",
      message: "这是一条消息提示",
    });
  }
  function error() {
    JMessage({
      type: "error",
      message: "错了哦，这是一条错误消息",
    });
  }
</script>
```
:::

## 文字居中

使用 `center` 属性让文字水平居中

<hr/>

<j-button @click="openCenter">文字居中</j-button>

<hr/>

::: details Show Code
```vue
<template>
  <j-button @click="openCenter">文字居中</j-button>
</template>

<script setup lang="ts">
  import {JMessage} from 'j-element'
  function openCenter() {
    JMessage({
      center: true,
      message: "居中内容",
    });
  }
</script>
```
:::


## 使用HTML片段

`message` 属性支持传入HTML片段

<hr/>

<j-button @click="openHTML">使用HTML片段</j-button>

<hr/>

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 就会被当作 HTML 片段处理。

::: details Show Code
```vue
<template>
  <j-button @click="openHTML">使用HTML片段</j-button>
</template>

<script setup lang="ts">
  import {JMessage} from 'j-element'
  function openHTML() {
    JMessage({
      dangerouslyUseHTMLString: true,
      message: "<strong>这是 <i>HTML</i> 片段</strong>",
    });
  }
</script>
```
:::
