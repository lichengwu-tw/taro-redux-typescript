## Taro JS + Taro UI Starter kit
--- 
### 項目介绍

TaroJS 是一个跨平台的前端解决方案，旨在通过编写html,js,css 主流前端的代码来生成多端的原生可运行的代码(例如微信小程序，支付宝，字节跳动等)。TaroJS借鉴了React中的组件开发原理，对于每一个Taro组件有自己的生命周期管理，详情请参考[Taro 官网] (https://taro.js.org/).  
>> Note: Taro中的组件不支持在 render() 之外的方法中定义 JSX, 这是和React的差异之一


TaroUI 是一套前端的UI框架，该框架涵盖现在移动端主流的组件，例如卡片，导航栏，列表等. 详情请参考: [Taro UI](https://taro-ui.aotu.io/#/docs/quickstart)
### 项目结构规范 
项目结构的规范请参考[Taro 官网] (https://taro.js.org/)，项目是通过`taro cli`自动生成，只有局部有一些定制化，例如redux数据处理层。 
* `asserts` : 该📁下包含所有项目中需要的相关资源，例如svgs, images 等。 
* `components` : 该文件夹下包含整个项目中需要的公用组件。
* `decorators` : 该文件夹下包含项目中需要的装饰器, 。  
* `asserts` : 该📁下包含所有项目中需要的相关资源，例如svgs, images 等。 
* `typed` : 该📁下包含typescript中全局定义的一些`interface`


### 代码分支规范 
对于其他非`master`, `uat`, `release` 分支，请参考`scripts/pre-push-hook.sh`的设置。对于分支命名请参照以下列表 
* `feat/*`  : 该分支为新功能分支，对于所有的新功能分支，请遵循该命名格式。 
* `fix/*` : 该分支为修复分支，对于所有的一些已经merged的分支，如若发现一些bug，可以创建该格式的分支来进行开发修复，请遵循该命名格式。
* `test/*`: 该分支为测试分支，对于后期测试用例的添加，请遵循该命名格式。 
* `refactor/*`: 该分支为重构分支，对于所有的一些重构代码，请遵循该命名格式。
* `spike/*`: 该分支为待评估功能分支，对于当前还不能完全评估，风险大的story创建的分支，请遵循该命名格式。
* `docs/*`: 文档修改

### 项目font icons的设置 
所有的项目中的自定义svg icons，都必须放在`src/assets/svgs`目录下面，详情请参考以下命令  
`icon-font-generator src/assets/svgs/**/*.svg -o src/assets/font-icons/ --csstp src/assets/icon-css-tmpl.hbs`
该命令可生成一个svg 列表的html预览页面以及项目的svg 的css样式。


### 项目文件及文件夹命名规范 
* pages目录下面所有的文件夹须均为小写，文件夹的命名必须要和业务上的命名保持一致，例如  登入页面 -- login,  俱乐部页面 -- club 
* 页面层级下的文件命名index.tsx, index.scss, components/,  containers/  
* 除了公用组件以外，其余的文件命名遵循标准驼峰格式.  例如公用组件文件名 SearchBar。



### 其他规范 

[git commit 规范指南](https://www.jianshu.com/p/201bd81e7dc9?utm_source=oschina-app) 
[validate commit msg](https://github.com/conventional-changelog-archived-repos/validate-commit-msg)

