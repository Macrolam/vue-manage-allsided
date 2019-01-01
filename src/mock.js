// 引入mockjs
import Mock from 'mockjs'//es6模块化使用方式
//const Mock = require('mockjs');//common js模块化使用方式--nodejs

// 导入各个模块的模拟数据-api
import table from './mock/table/table'



// 注册
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/table/table?page=1&pageSize=20', 'get', table);

export default Mock;
