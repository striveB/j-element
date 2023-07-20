import { computed } from 'vue';

const createClass = (baseClass: string, classTypeName: string) => {
  if (!classTypeName) return [baseClass];
  return [baseClass, `${baseClass}--${classTypeName}`].join(" ");
};
const useClassTypeName = (baseClass: string, porps: {type:string})=>{
  return computed(()=>{
    return createClass(baseClass, porps.type)
  })
}
export { useClassTypeName };
