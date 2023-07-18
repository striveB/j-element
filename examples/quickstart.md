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

import VueAmazingUI from 'j-element'
import 'j-element/css'

const app = createApp(App)
app.use(VueAmazingUI)

app.mount('#app')
```