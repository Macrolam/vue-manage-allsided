
## npm
npm实际是基于couchdb的一个数据库，详细记录了每个包的信息，包括作者、版本、依赖、授权信息等。它的一个很重要的作用就是：将开发者从繁琐的包管理工作（版本、依赖等）中解放出来，更加专注于功能的开发。同时可以开发者们可以分享自己写好的轮子。

**常用命令**
npm的命令格式就是：`npm <command> [options]`
```

 npm help <npm command>
 npm list grunt       查看本地某个模块的版本号
 npm ls --depth=0 -g  查看本地所有全局安装的模块（第一层）
 npm list -g          查看本地所有全局安装的模块依赖树
 npm view vue version 查看npm 服务器上的版本信息 (aliases: info, show, v)
 npm view http-server dependencies 查看依赖的信息
 npm bugs <packge>    查看项目bug
 npm update express 更新模块
 npm search express 搜索模块
 npm i --production 只会安装 dependencies 里面的包
 npm view gulp dependencies: 查看模块的依赖关系
 npm view gulp repository.url: 查看模块的源文件地址
 npm prune 移除当前不在package.json中但是存在node_modules中的依赖
 npm repo <package> 浏览器端打开项目地址（GitHub）
 npm docs <packge> 查看项目文档
 npm shrinkwrap: 锁定依赖版本。 运行后增加了npm-shrinkwrap.json，依赖包的版本号将锁定到固定版本
 npm publish [发布模块](http://www.runoob.com/nodejs/nodejs-npm.html)
 unpublish	取消发布您已发布到注册表的一个模块（在某些情况下，还需使用 --force 选项）
 npm whoami	（根据指定注册表模块）打印用户名
 npm adduser	将用户信息添加到当前的开发环境
 npm login	等同于adduser	npm login
 npm logout	将用户信息从当前的开发环境中清除
 npm init 在此目录生成package.json文件，可以添加-y | --yes 参数则默认所有配置为默认yes

```

**NPM使用语义版本号来管理代码**

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
如果只是修复bug，需要更新Z位。
如果是新增了功能，但是向下兼容，需要更新Y位。
如果有大变动，向下不兼容，需要更新X位。
ex:
```
"~1.2.3" = ">=1.2.3 <1.3.0"
"1.2.x" = ">=1.2.0 <1.3.0"
"^1.2.3" = ">=1.2.3 <2.0.0"
```

**npm脚本语法**
npm 脚本衍生于shell脚本 ，所以语法上遵循shell，因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。即它不一定是 Node 脚本，任何可执行文件都可以写在里面。
每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。

-- : 命令的参数。例如：$ npm ls --depth=0 -g 中的 -- ,查看第一层依赖信息; -g: 代码查看全局的
&& : 串行执行两条命令
&  : 并行执行两条命令





### 其他不常用：
**设置proxy**
内网使用npm很头痛的一个问题就是代理，假设我们的代理是 http://proxy.example.com:8080，那么命令如下：

npm config set proxy http://proxy.example.com:8080
由于npm config set命令比较常用，于是可以如下简写

npm set proxy http://proxy.example.com:8080
查看proxy
设置完，我们查看下当前代理设置

npm config get proxy
输出如下：

http://proxy.example.com:8080/
同样可如下简写：

npm get proxy
删除proxy
代理不需要用到了，那删了吧

npm delete proxy
查看所有配置
npm config list
直接修改配置文件
有时候觉得一条配置一条配置地修改有些麻烦，就直接进配置文件修改了

npm config edit

 **npm link**
 不使用npm install 而连接某个依赖包，通常用作开发本地依赖包 [使用示例](http://javascript.ruanyifeng.com/nodejs/npm.html#toc18，https://www.youtube.com/watch?v=nKFe1lhGSk0)
