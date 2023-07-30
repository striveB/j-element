import Button from './components/button/Button.vue';
import ButtonGroup from './components/button/ButtonGroup.vue';
import Link from './components/link/Link.vue';
import Row from './components/row/Row.vue';
import Message from './components/message/methods';
import "./components/theme-chalk/index.scss"
// @ts-ignore
import type { App } from '@vue/runtime-core'
const components = [Row,Button,ButtonGroup,Link]
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default {
  version: '0.3.1',
  install,
  JMessage: Message
}