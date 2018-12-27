let tools = {}

tools.dataHandle = {}//数据处理相关的方法
tools.type = {}//判断数据类型
tools.date = {}// 时间相关
tools.type = {
  // 是否是数组
  isArray: function (param) {
    return Object.prototype.toString.call(param) === '[object Array]'//fun.call(thisArg, arg1, arg2, ...)如果没有传递第一个参数，this的值将会被绑定为全局对象
  },
  // 是否是字符串
  isString: function (param) {
    return Object.prototype.toString.call(param) === '[object String]'
  },
  // 是否是对象
  isObject: function (param) {
    return Object.prototype.toString.call(param) === '[object Object]'
  },
  // 是否是函数
  isFunction: function (param) {
    return Object.prototype.toString.call(param) === '[object Function]'
  },
  // 是否是数字
  isNumber: function (param) {
    return Object.prototype.toString.call(param) === '[object Number]'
  },
  // 是否是布尔
  isBoolean: function (param) {
    return Object.prototype.toString.call(param) === '[object Boolean]'
  },
  // 是否是undefined
  isUndefined: function (param) {
    return Object.prototype.toString.call(param) === '[object Undefined]'
  },
  // 是否是null
  isNull: function (param) {
    return Object.prototype.toString.call(param) === '[object Null]'
  },
};


tools.dataHandle = {

  // 混合多个对象 @params arrInobj [array] 数组>N个对象 需要进行混合的对象数组
  minxObj: function (arrInObj) {
    if (!arrInObj || !tools.type.isArray(arrInObj) || (tools.type.isArray(arrInObj) && arrInObj.length == 0))return;
    let minxObj = {};
    let len = arrInObj.length
    let i = len - 1
    for (; i >= 0; i--) {
      Object.assign(minxObj, arrInObj[i])
    }
    return minxObj

  },

  // 对象转成字符串,每对间用 & 符号间隔,应用在请求类型为 form data的情况下 处理入参
  addAndMarkForObj: function (obj) {
    if (!obj || !tools.type.isObject(obj))return;
    let str = ""
    for (var key in obj) {
      str += key + "=" + obj[key] + '&' //=> es6: `${key}=${obj[key]}&`
    }
    str = str.slice(0, str.length - 1)//最后一位不要
    return str
  },

};


tools.date = {
  //获取当前时间戳的方法
  getTimestamp:function () {
    return new Date().getTime().toString();//"1545907921968" //or Date.parse(new Date()) or (new Date()).valueOf()
  }
}

// js模块文件导出的api
export {tools}
