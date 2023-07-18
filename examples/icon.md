---
outline: deep
---
<script setup>
import icons from "./public/icon.json"
</script>
<style scoped>
  .source > i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  button {
    margin: 0 20px;
  }


ul.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: solid 1px #eaeefb;
  border-radius: 4px;
}
.icon-list li {
  float: left;
  width: 16.81%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
  margin-top: 0px !important;
}
.icon-list li::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}

.icon-list li span {
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  color: #99a9bf;
  transition: color 0.15s linear;
}

.icon-list li i {
  display: block;
  font-size: 32px;
  margin-bottom: 15px;
  color: #606266;
  transition: color 0.15s linear;
}

.icon-list li .icon-name {
  display: inline-block;
  padding: 0 3px;
  height: 1em;
}

.icon-list li:hover span, 
.icon-list li:hover i{
  color: rgb(92, 182, 255);
}

</style>


# Icon 图标
提供了一套常用的图标集合。

## 使用方法
直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

<span class="source">
<i class="j-icon-edit"></i>
<i class="j-icon-share"></i>
<i class="j-icon-delete"></i>
</span><j-button type="primary" icon="j-icon-search">搜索</j-button>

<hr/>

::: details Show Code
```vue
<template>
  <i class="j-icon-edit"></i>
  <i class="j-icon-share"></i>
  <i class="j-icon-delete"></i>
  <j-button type="primary" icon="j-icon-search">搜索</j-button>
</template>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'j-icon-' + name"></i>
      <span class="icon-name">{{'j-icon-' + name}}</span>
    </span>
  </li>
</ul>