let api ,
    baseUrl = 'http://127.0.0.1/';

 api = {
   "getMenuByUserRole":baseUrl+'static/menu/menu.json'
 }
export default api;//默认接口的意思，在一个文件里面默认的只能有一个 其区别就是import 时需要用{}来盛放
