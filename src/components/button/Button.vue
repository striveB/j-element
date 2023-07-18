<script setup lang="ts">
import {
  defineOptions,
  defineProps,
  defineEmits,
  computed,
  useSlots,
} from "vue";

defineOptions({
  name: "JButton",
});

let props = defineProps<{
  type?: string;
  icon?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  plain?: boolean;
  loading?: boolean;
  size?: "large" | "small" | "mini";
  nativeType?: "button" | "submit" | "reset";
}>();

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
  props.type && names.push("j-button--" + props.type);
  props.round && names.push("is-round");
  props.circle && names.push("is-circle");
  (props.disabled || props.loading) && names.push("is-disabled");
  props.loading && names.push("is-loading");
  props.plain && names.push("is-plain");
  props.size && names.push("j-button--" + props.size);
  return names;
});
</script>
<template>
  <button
    class="j-button"
    :class="ClassNames"
    :type="props.nativeType || 'button'"
    @click="handleClick"
  >
    <i v-if="props.loading" class="j-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="[props.icon]"></i>
    <span v-if="$slot.default"><slot></slot></span>
  </button>
</template>
