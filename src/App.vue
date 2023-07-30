<script setup lang="ts">
import Message from "./components/message/methods";
function success() {
  Message({
    type: "success",
    message: "恭喜你，这是一条成功消息",
    duration: 5000,
    showClose: true,
  });
}
function warning() {
  Message({
    type: "warning",
    dangerouslyUseHTMLString: true,
    message: "警告哦，这是一条警告消息",
  });
}
function info() {
  Message({
    type: "info",
    message: "这是一条消息提示",
  });
}
function error() {
  Message({
    type: "error",
    message: "错了哦，这是一条错误消息",
  });
}
function htmlNode() {
  Message({
    dangerouslyUseHTMLString: true,
    message: "<strong>这是 <i>HTML</i> 片段</strong>",
  });
}
function center() {
  Message({
    message: "居中内容",
    center: true,
  });
}
function notClose() {
  Message({
    message: "不会自动关闭的内容",
    duration: 0,
    center: true,
  });
}
</script>

<template>
  <j-row>
    <j-link :disabled="true">默认按钮</j-link>
    <j-link type="primary">主要按钮</j-link>
    <j-link type="success">成功按钮</j-link>
    <j-link type="info">信息按钮</j-link>
    <j-link type="warning">警告按钮</j-link>
    <j-link type="danger">危险按钮</j-link>
  </j-row>
  <j-row>
    <j-button @click="success">成功</j-button>
    <j-button @click="warning">警告</j-button>
    <j-button @click="info">消息</j-button>
    <j-button @click="error">错误</j-button>
    <j-button @click="htmlNode">解析html</j-button>
    <j-button @click="center">居中内容</j-button>
    <j-button @click="notClose">不会自动关闭</j-button>
  </j-row>
  <j-row>
    <i class="j-icon-edit"></i>
    <i class="j-icon-share"></i>
    <i class="j-icon-delete"></i>
    <j-button type="primary" icon="j-icon-search">搜索</j-button>
  </j-row>
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
    <j-button type="danger" icon="j-icon-loading" circle></j-button>
  </j-row>
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
  <j-row>
    <j-button-group>
      <j-button type="primary" icon="j-icon-arrow-left">上一页</j-button>
      <j-button type="primary"
        >下一页<i class="j-icon-arrow-right j-icon--right"></i
      ></j-button>
    </j-button-group>
    <j-button-group>
      <j-button type="primary" icon="j-icon-edit"></j-button>
      <j-button type="primary" icon="j-icon-share"></j-button>
      <j-button type="primary" icon="j-icon-delete"></j-button>
    </j-button-group>
  </j-row>
  <j-row>
    <j-button type="primary" icon="j-icon-edit"></j-button>
    <j-button type="primary" icon="j-icon-share"></j-button>
    <j-button type="primary" icon="j-icon-delete"></j-button>
    <j-button type="primary" icon="j-icon-search">搜索</j-button>
    <j-button type="primary"
      >上传<i class="j-icon-upload j-icon--right"></i
    ></j-button>
  </j-row>
  <j-row>
    <j-button type="primary" :loading="true" icon="j-icon-search"
      >加载中</j-button
    >
  </j-row>
  <j-row>
    <j-button type="text">文字按钮</j-button>
    <j-button type="text" disabled>文字按钮</j-button>
  </j-row>
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
<style lang="scss">
.j-row {
  margin-top: 10px;
  .j-button {
    margin-right: 10px;
  }
}
</style>
