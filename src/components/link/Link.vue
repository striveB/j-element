<script setup lang="ts">
import { defineOptions, defineProps } from "vue";
import { useClassName } from "@/hooks/useClassName";
const props = defineProps<{
  type: "primary" | "success" | "warning" | "danger" | "info" | "default";
  disabled: boolean;
  href: string;
}>();
defineOptions({
  name: "JLink",
});

const baseClassName = useClassName("j-link", props);
</script>
<template>
  <a :href="disabled ? null : href" :class="baseClassName"><slot></slot></a>
</template>
