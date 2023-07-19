import { createVNode, render } from 'vue'
import MessageConstructor from './Message.vue'
import { isString } from '../../utils/types'
const container: HTMLDivElement = document.createElement('div')

type MessageParams = {
  type: string,
  message: string
}


const Message = (content: string | MessageParams)=>{
  let props = isString(content) ? {message: content} : content
  const vnode = createVNode(MessageConstructor, props)
  console.log(container,vnode);
  render(vnode,container)
  document.body.appendChild(container.firstElementChild as HTMLElement)
}
export default Message