<script setup lang="ts">
import { defineOptions } from "vue";
defineOptions({
  name: "JRow",
});
</script>
<template>
  <div class="j-button-group"><slot></slot></div>
</template>
<style lang="scss">
.j-button-group {
  display: inline;
  margin: 5px;
  & > .j-button {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
  }
}
</style>
