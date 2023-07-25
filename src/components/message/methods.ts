import { createVNode, render } from 'vue'
import MessageConstructor from './Message.vue'
import { isString } from '../../utils/types'

type Props = {
  type?: string,
  message: string,
  duration?: number,
  dangerouslyUseHTMLString?: boolean,// 内容是否解析为html
  center?: boolean,
  showClose?: boolean
}

type MessageParams = Props & {
  id: string,
  close: (id: string)=>void,
  onDestroy: ()=>void
}

type Instance = {
  id: string;
  vnode: any;
  props: MessageParams,
  offsetHeight: number
}

let instances : Instance[] = [];
let seed = 1;

const createMessage = (props: MessageParams): Instance =>{
  const container: HTMLDivElement = document.createElement('div')
  let id = 'message_' + seed++
  props = {
    ...props,
    id,
    onDestroy: ()=>{
      close(id)
    }
  }
  const vnode = createVNode(MessageConstructor, props)
  render(vnode,container)
  
  let verticalOffset = 20
  document.body.appendChild(container.firstElementChild as HTMLElement)
  instances.forEach(item => {
    verticalOffset += item.vnode.el.offsetHeight + 16;
  });
  if(vnode.el){
    vnode.el.style.top = verticalOffset + 'px';
  }
  let instance = {
    id,
    vnode,
    props,
    offsetHeight: vnode?.el?.offsetHeight
  }
  instances.push(instance)
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
      break;
    }
  }
  for (let i = index; i < instances.length; i++) {
    const instance = instances[i];
    let pos = parseInt(instance.vnode.el.style.top, 10) - removedHeight - 16 ;
    instance.vnode.el.style.top = pos + 'px';
  }
}

const Message = (content: string | Props)=>{
  let props = (isString(content) ? {message: content} : content) as MessageParams
  createMessage(props)
}
export default Message