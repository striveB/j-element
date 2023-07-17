<script setup lang="ts">
function say(e) {
  console.log("hello", e);
}
</script>

<template>
  <j-row>
    <j-button @click="say">默认按钮</j-button>
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
<style lang="scss">
.j-row {
  margin-top: 10px;
  .j-button {
    margin-right: 10px;
  }
}
</style>
