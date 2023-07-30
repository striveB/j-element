<script setup lang="ts">
import {
  defineOptions,
  defineProps,
  defineEmits,
  computed,
  useSlots,
} from "vue";
import { useClassName } from "@/hooks/useClassName";

defineOptions({
  name: "JButton",
});

let props = defineProps<{
  type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
  icon?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  plain?: boolean;
  loading?: boolean;
  size?: "large" | "small" | "mini";
  nativeType?: "button" | "submit" | "reset";
}>();
const baseClassName = useClassName("j-button", props);

const $slot = useSlots();

const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
});
function handleClick(evt: MouseEvent) {
  if (props.disabled || props.loading) return;
  emit("click", evt);
}

// 根据传入的属性，动态生成class
const ClassNames = computed(() => {
  let names = [];
  props.round && names.push("is-round");
  props.circle && names.push("is-circle");
  props.loading && names.push("is-disabled");
  props.loading && names.push("is-loading");
  props.plain && names.push("is-plain");
  props.size && names.push("j-button--" + props.size);
  return [baseClassName.value, ...names];
});
</script>
<template>
  <button
    :class="ClassNames"
    :type="props.nativeType || 'button'"
    @click="handleClick"
  >
    <i v-if="props.loading" class="j-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="[props.icon]"></i>
    <span v-if="$slot.default"><slot></slot></span>
  </button>
</template>
