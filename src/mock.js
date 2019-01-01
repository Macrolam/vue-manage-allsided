// 引入mockjs
let mock;
import Mock from 'mockjs'//es6模块化使用方式
//const Mock = require('mockjs');//common js模块化使用方式--nodejs
import table from './mock/table/table'
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', table);

//mock={
//  productData:productData,//key val 同值
//}
//console.log(productData)
//export default mock;
