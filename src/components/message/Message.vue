<script setup lang="ts">
import { defineProps, onMounted, ref, computed } from "vue";
import { useClassTypeName } from "@/hooks/useClassTypeName";
const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  message: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
});
const baseClassName = useClassTypeName("j-message", props);

const visible = ref<boolean>(false);
onMounted(() => {
  // 组件加载后再显示为了动画执行
  visible.value = true;
});

setTimeout(() => {
  visible.value = false;
}, props.duration);

const iconClass = computed(() => {
  let type = props.type || "info";
  return "j-icon-" + type;
});

// 根据传入的属性，动态生成class
const ClassNames = computed(() => {
  let names = [];
  props.center && names.push("is-center");
  return [baseClassName.value, ...names];
});
</script>
<template>
  <transition name="el-message-fade" @after-leave="$emit('destroy')">
    <div v-show="visible" :class="ClassNames">
      <i :class="iconClass"></i> &nbsp;
      <span v-if="!dangerouslyUseHTMLString" class="j-message__content">{{
        message
      }}</span>
      <div v-else class="j-message__content" v-html="message"></div>
    </div>
  </transition>
</template>
<style lang="sass" scoped></style>
