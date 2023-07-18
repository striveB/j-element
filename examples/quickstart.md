# 快速上手
## 安装

**使用 pnpm**

```bash
$ npm i j-element
```

**使用 yarn**

```bash
$ yarn add j-element
```

**使用 npm**

```bash
$ npm i j-element
```

## 使用

> **全局引入**

```ts
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库（必须）
import JElementUI from 'j-element'
// 引入样式（必须）
import 'j-element/css'

const app = createApp(App)
// 使用组件库
app.use(JElementUI)

app.mount('#app')
```
::: tip 版本限制
**`vue` 版本 >= `3.2.47`**
:::