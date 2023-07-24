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
  startTimer();
});

// 关闭
function close() {}

// 倒计时关闭
function startTimer() {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}

// 获取icon类名
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
  <transition name="el-message-fade" @before-leave="$emit('destroy')">
    <div v-show="visible" :class="ClassNames">
      <i :class="iconClass"></i> &nbsp;
      <span v-if="!dangerouslyUseHTMLString" class="j-message__content">{{
        message
      }}</span>
      <div v-else class="j-message__content" v-html="message"></div>
      <!-- <i class="j-message__closeBtn j-icon-close" @click="$emit('destroy')"></i> -->
    </div>
  </transition>
</template>
<style lang="sass" scoped></style>
