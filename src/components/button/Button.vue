<script setup lang="ts">
import { defineOptions, defineProps, computed } from "vue";
let props = defineProps<{
  type?: string;
  icon?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  plain?: boolean;
}>();
defineOptions({
  name: "JButton",
});
const ClassNames = computed(() => {
  let names = [];
  props.type && names.push("j-button--" + props.type);
  props.round && names.push("is-round");
  props.circle && names.push("is-circle");
  props.disabled && names.push("is-disabled");
  props.plain && names.push("is-plain");
  return names;
});
</script>
<template>
  <button class="j-button" :class="ClassNames">
    <i v-if="props.icon" :class="[props.icon]">124</i>
    <slot></slot>
  </button>
</template>
<style lang="scss">
.j-button {
  border: 1px solid #f2f2f2;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  &.is-circle {
    border-radius: 50%;
    padding: 10px;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &.is-round {
    border-radius: 10px;
    padding: 12px 23px;
  }
  &:hover {
    opacity: 0.8;
  }
  &--primary {
    background-color: #409eff;
    color: #fff;
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  &--success {
    background-color: #67c23a;
    color: #fff;
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  &--warning {
    background-color: #e6a23c;
    color: #fff;
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  &--danger {
    background-color: #f56c6c;
    color: #fff;
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  &--info {
    background-color: #909399;
    color: #fff;
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
}
</style>
