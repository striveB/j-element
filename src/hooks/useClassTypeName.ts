import { computed } from 'vue';

const createClass = (baseClass: string, classTypeName: string) => {
  console.log(baseClass, classTypeName);
  if (!classTypeName) return [baseClass];
  return [baseClass, `${baseClass}--${classTypeName}`].join(" ");
};
const useClassTypeName = (baseClass: string, porps: {type:string})=>{
  return computed(()=>{
    return createClass(baseClass, porps.type)
  })
}
export { useClassTypeName };
