import { createVNode, render } from 'vue'
import MessageConstructor from './Message.vue'
import { isString } from '../../utils/types'

type Props = {
  type?: string,
  message: string,
  duration?: number,
  dangerouslyUseHTMLString?: boolean,// 内容是否解析为html
  center?: boolean,
}

type MessageParams = Props & {
  id: string,
  top: number,
  close: (id: string)=>void,
  onDestroy: ()=>void
}

type Instance = {
  id: string;
  vnode: any;
  props: MessageParams
}

let instances : Instance[] = [];
let seed = 1;
let top = 20;
let step = 70

const createMessage = (props: MessageParams): Instance =>{
  const container: HTMLDivElement = document.createElement('div')
  let id = 'message_' + seed++
  props = {
    ...props,
    id,
    top: 20,
    onDestroy: ()=>{
      close(id)
    }
  }
  const vnode = createVNode(MessageConstructor, props)
  render(vnode,container)
  
  if(vnode.el && instances.length > 0) {
    top += step;
    vnode.el.style.top = top + 'px';
  }
  document.body.appendChild(container.firstElementChild as HTMLElement)
  return {
    id,
    vnode,
    props
  }
}

// 元素被清除后重新设置top值
const close = (id: string) => {
  let index = -1;
  let removedHeight = 0;
  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i];
    if(instance.id === id){
      index = i;
      removedHeight = instance.vnode.el.offsetHeight;
      document.body.removeChild(instance.vnode.el);
      instances.splice(i, 1);
      if(top > instance.props.top){
        top -= step
      }
      break;
    }
  }
  for (let i = index; i < instances.length; i++) {
    const instance = instances[i];
    let pos = parseInt(instance.vnode.el.style.top, 10) - removedHeight - step;
    instance.vnode.el.style.top = pos + 'px';
  }
}

const Message = (content: string | Props)=>{
  let props = (isString(content) ? {message: content} : content) as MessageParams
  let instance = createMessage(props)
  instances.push(instance)
}
export default Message