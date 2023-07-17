<script setup lang="ts">
import { defineOptions, defineProps, computed, useSlots } from "vue";
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
const $slot = useSlots();

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
    <template v-if="props.icon">
      <i
        :class="[props.icon]"
        :style="$slot.default ? { marginRight: '3px' } : {}"
      ></i>
    </template>
    <slot></slot>
  </button>
</template>
