'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const chalk = require('chalk')//打包过程中 shell中输出的信息 会彩色打印

function resolve (dir) {
  return path.join(__dirname, '..', dir)//用于连接路径。这里将三个参数连接在一起:当前路径向上走一级的dir 目录.该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
}
console.log(chalk.red(path.join(__dirname,'..',"dir")));//D:\Acode\self\vue-manage-allsided\dir


module.exports = {
  context: path.resolve(__dirname, '../'),//path.resolve()方法会结合两个参数最后生成绝对路径，
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,//path.resolve(__dirname, '../dist')
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//可以省略的扩展名.当同一路径下 既有.Vue 又有.js 文件时候 引入时候省略后缀名时默认导入的是js文件.
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',//import Vue from 'vue' 就相当于import Vue from 'node_modules/vue/dist/vue.esm.js'
      '@': resolve('src'),//path.join(__dirname, '..', 'src')  ==> 第一个参数__dirname代表当前文件的位置即: build ;第二个参数: ../;第三个参数: src ;最后连接完:也就是项目根目录下的src目录
      'common':resolve('src/common'),
      'components':resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
