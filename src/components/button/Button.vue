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
    <i v-if="props.icon" :class="[props.icon]"></i>
    <slot></slot>
  </button>
</template>
