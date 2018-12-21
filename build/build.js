'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'// 指向当前shell的环境变量，比如process.env.HOME process.pid：当前进程的进程号 process.version：Node的版本，比如v0.10.18

const ora = require('ora')// shell 窗口显示的打包中动画
const rm = require('rimraf')//rm -rf 文件夹路径 为 Unix/linux 下命令, Windows 并不支持。要做到跨平台。可以用第三包rimraf,做到在不同平台都能删除文件夹
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({// process 全局对象，进程相关 process.stdout 在命令行窗口向用户显示内容 write方法等同于console.log
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    console.log(chalk.red(path.resolve(__dirname, '../dist')));//D:\Acode\self\vue-manage-allsided\dist
    console.log(chalk.red(path.join(config.build.assetsRoot, config.build.assetsSubDirectory)));//D:\Acode\self\vue-manage-allsided\dist\static
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
