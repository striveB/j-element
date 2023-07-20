<script setup lang="ts">
import { defineProps, ref } from "vue";
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
  duration: {
    type: Number,
    default: 3000,
  },
});
const baseClassName = useClassTypeName("j-message", props);

const visible = ref<boolean>(true);

setTimeout(() => {
  visible.value = false;
}, props.duration);
</script>
<template>
  <transition name="el-message-fade" @after-leave="$emit('destroy')">
    <div v-show="visible" :class="baseClassName">
      {{ props.message }}<slot></slot>
    </div>
  </transition>
</template>
<style lang="sass" scoped></style>
