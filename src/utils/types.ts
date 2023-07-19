export function isString(obj: any) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isHtmlElement(node: any) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

/**
 *  - Inspired:
 *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
 */
let isFunction = (functionToCheck: any) => {
  var getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === "[object Function]"
  );
};

if (
  typeof /./ !== "function" &&
  typeof Int8Array !== "object" &&
  (typeof document.childNodes !== "function")
) {
  isFunction = function (obj) {
    return typeof obj === "function" || false;
  };
}

export { isFunction };

export const isUndefined = (val: any) => {
  return val === void 0;
};

export const isDefined = (val: any) => {
  return val !== undefined && val !== null;
};
