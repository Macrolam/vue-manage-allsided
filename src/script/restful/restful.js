import axios from 'axios'
import api from '@/script/api/api'
import {tools} from '@/script/tool/tools.js'

let restful = {}
// 每个接口都需要的公共参数
let defaultParams = {
  lang: window.localStorage.getItem('lang') || 'zh-cn',//语言环境,默认中文
}


// get
restful.get = function (obj) {
  if (!obj.url)return;
  let params = obj.params && tools.type.isObject(obj.params) ? tools.dataHandle.minxObj([defaultParams, obj.params]) : defaultParams;//参数合并
  axios.get(obj.url, {
    params: params
  }).then((res)=> {
    if (obj.callback) obj.callback(res);
  }).catch((err)=> {
    console.log(err, "restful-get-err:")
  })
}

//post
restful.post = function (obj) {
  if (!obj.url)return;
  let contentType = (obj.contentType && obj.contentType === 'formData') ? "application/x-www-form-urlencoded" : "application/json" //默认json
  let params = obj.params && tools.type.isObject(obj.params) ? tools.dataHandle.minxObj([defaultParams, obj.params]) : defaultParams;//参数合并
  // 参数格式处理
  switch (contentType) {
    case contentType.indexOf('form') > -1:
      params = tools.dataHandle.addAndMarkForObj(params)//{name:"mac",sex:1} => name="mac"&sex=1
      break;
    case contentType.indexOf('json') > -1:
      params = JSON.stringify(params)//=> 字符串json
  }
  // 发送
  axios({
    method: 'post',
    url: obj.url,
    data: params,
    headers: {'Content-Type': contentType},
    //timeout: 1000,// 请求超过此 ms 将会中端 1000ms = 1s
    withCredentials: false, // 默认的 表示跨域请求时是否需要使用凭证
  }).then((res)=> {
    if (obj.callback) obj.callback(res);
  }).catch((err)=> {
    console.log(err, "restful-post-err:")
  })

}
// 导出模块api
export {restful};
