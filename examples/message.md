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