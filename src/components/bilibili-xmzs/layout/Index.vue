<script setup lang="ts">
import Header from "./header/Index.vue";
import Content from "./content/Index.vue";
import Menu from "./Menu/Index.vue";
</script>
<template>
  <div class="yj-layout">
    <div>
      <Menu></Menu>
    </div>
    <div class="yj-layout__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@include b(layout) {
  @include bfc;
  height: 500px;
  display: flex;
  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
