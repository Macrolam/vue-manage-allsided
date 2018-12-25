let tools = {}

tools.dataHandle = {}//数据处理相关的方法
tools.type = {}//判断数据类型

tools.type = {
  // 是否是数组
  isArray : function (param) {
    return Object.prototype.toString.call(param) === '[object Array]'//fun.call(thisArg, arg1, arg2, ...)如果没有传递第一个参数，this的值将会被绑定为全局对象
  },
  // 是否是字符串
  isString : function(param){
    return Object.prototype.toString.call(param) === '[object String]'
  },
  // 是否是对象
  isObject : function(param){
    return Object.prototype.toString.call(param) === '[object Object]'
  },
  // 是否是函数
  isFunction : function(param){
    return Object.prototype.toString.call(param) === '[object Function]'
  },
  // 是否是数字
  isNumber : function(param){
    return Object.prototype.toString.call(param) === '[object Number]'
  },
  // 是否是布尔
  isBoolean : function(param){
    return Object.prototype.toString.call(param) === '[object Boolean]'
  },
  // 是否是undefined
  isUndefined : function(param){
    return Object.prototype.toString.call(param) === '[object Undefined]'
  },
  // 是否是null
  isNull : function(param){
    return Object.prototype.toString.call(param) === '[object Null]'
  },
};


tools.dataHandle = {

  // 混合多个对象 @params arrInobj [array] 数组>N个对象 需要进行混合的对象数组
  minxObj : function(arrInObj){
  if(!arrInObj || !tools.type.isArray(arrInObj) || (tools.type.isArray(arrInObj)&& arrInObj.length==0))return;
  let minxObj = {};
  let len = arrInObj.length
  let i = len-1
  for(;i>=0;i--){
    Object.assign(minxObj,arrInObj[i])
  }
  return minxObj

  },

};


// js模块文件导出的api
export {tools}
