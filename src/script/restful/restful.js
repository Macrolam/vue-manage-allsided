import axios from 'axios'
import api from '@/script/api/api'
import {tools} from '@/script/tool/tools.js'

let retful = {}


// get
retful.get = function(obj){
  if(!obj.url)return;
  obj.params = obj.params || {}
  axios.get(obj.url,{
    params:obj.params
  }).then((res)=>{
    if(obj.callback) obj.callback(res)
  }).catch((err)=>{
    console.log(err,"restful-get-err:")
  })
}
//post
tools.dataHandle.minxObj([{"b":"b","a":"a"},{a:"a"}])
