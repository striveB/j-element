<script setup lang="ts">
import { defineProps } from "vue";
import { useClassTypeName } from "@/hooks/useClassTypeName";
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
});
const baseClassName = useClassTypeName("j-message", props);
</script>
<template>
  <div :class="baseClassName">{{ props.message }}<slot></slot></div>
</template>
<style lang="sass" scoped></style>
