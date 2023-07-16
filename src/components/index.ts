import Button from './button/Button.vue';
import ButtonGroup from './button/ButtonGroup.vue';
import Row from './row/Row.vue';
import type { App } from '@vue/runtime-core'
const components = [Button,Row,ButtonGroup]
const JUi = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default JUi