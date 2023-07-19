import Button from './components/button/Button.vue';
import ButtonGroup from './components/button/ButtonGroup.vue';
import Row from './components/row/Row.vue';
import Message from './components/message/methods';
import "./components/theme-chalk/index.scss"
// @ts-ignore
import type { App } from '@vue/runtime-core'
const components = [Button,Row,ButtonGroup]
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default {
  install,
  JMessage: Message
}