<h1 align="center"> umi 采坑</h1>
<p>结合了antd-pro部分配置</p>

###配置
- node -v  >8.x
- yarn global add umi
- umi -v > 2.x 


<p>如果umi-v, 提示不是内部命令，你可能需要添加新的环境变量,详见(http://www.easysb.cn/index.php/2017/06/04/11/)</p>

###启动
- umi g/generate page index   : 创建一个页面 直接就可以 umi dev 启动了
###部署发布
- umi build
##启动本地验证服务器
- yarn global add serve
- serve ./dist
- 初级流程完成

<h1 align="center"> 使用脚手架</h1>

- mkdir umicli
- cd umicli
- yarn create umi
-- 选择你需要的工具/方式
? What functionality do your want to enable?
 (*) antd(https://ant.design/index-cn)
>(*) dva(https://dvajs.com/)
 ( ) code splitting(https://www.cnblogs.com/webARM/p/5945208.html) (分批打包、按需下载)
 ( ) pwa(https://segmentfault.com/a/1190000012353473) //不建议开启，会报错
 ( ) dll
 ( ) hard source(https://cnpmjs.org/package/hard-source-webpack-plugin) (第一次打包时间会更久,以后就快了)
- 得到下面的目录结构
│  .editorconfig
│  .env
│  .eslintrc
│  .gitignore
│  .prettierignore
│  .prettierrc
│  .umirc.js
│  package.json
│
├─mock
│      .gitkeep
│
└─src
    │  dva.js
    │  global.css
    │
    ├─assets
    │      yay.jpg
    │
    ├─layouts
    │      index.css
    │      index.js
    │
    ├─models
    │      .gitkeep
    │
    └─pages
            index.css
            index.js
- yarn/npm i (安装依赖)(国内网速不行的时候，会报错，重新装一次)
-- 错误一 ：fs.js:646
return binding.open(pathModule._makeLong(path), stringToFlags(flags), 
mode); 
-- 解决： 关闭pwa