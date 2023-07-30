<script setup lang="ts">
import { defineOptions, defineProps, withDefaults, computed } from "vue";
import { useClassName } from "@/hooks/useClassName";
const props = withDefaults(
  defineProps<{
    type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
    disabled?: boolean;
    underline?: boolean;
    href?: string;
  }>(),
  {
    underline: true,
  }
);
defineOptions({
  name: "JLink",
});

const baseClassName = useClassName("j-link", props);

// 根据传入的属性，动态生成class
const ClassNames = computed(() => {
  let names = [];
  props.underline && names.push("is-underline");
  return [baseClassName.value, ...names];
});
</script>
<template>
  <a :href="disabled ? null : href" :class="ClassNames"><slot></slot></a>
</template>
