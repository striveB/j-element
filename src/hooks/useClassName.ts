import { computed } from 'vue';

type Porps = {type:string, disabled: boolean}

const createClass = (baseClass: string, porps: Porps) => {
  let classArr = [baseClass]
  if (porps.type) classArr.push(`${baseClass}--${porps.type}`)
  if (porps.disabled) classArr.push(`is-disabled`)
  return classArr.join(" ");
};
const useClassName = (baseClass: string, porps:Porps )=>{
  return computed(()=>{
    return createClass(baseClass, porps)
  })
}
export { useClassName };
