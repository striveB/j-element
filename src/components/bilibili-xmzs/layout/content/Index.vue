<script setup lang="ts"></script>
<template>
  <div class="yj-content">
    <p v-for="i in 100" :key="i">{{ i }}</p>
  </div>
</template>
<style lang="scss" scoped>
@include b(content) {
  flex: 1;
  border-top: 1px solid #ccc;
  overflow-y: auto;
}
</style>
