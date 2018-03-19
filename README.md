# webpack-taste
本地静态页面webpack构建工具---当需要快速在本地静态页使用新的es6语法或者新的webpack版本时，你需要它

# 使用方法
1. git clone 到本地;
2. cd 到该模块目录下， 执行npm link， npm install;
3. 然后在自己的静态页面下直接执行 taste 即可编译

静态页面满足结构：

    demo    ...................................  // 
    |- index.html    ......................  //
    |- src/   ...................................  // 
    |  |- index.js    ......................  // 
    


    
> ##### 更新日志（*并记录遇到的问题*？）

###### 第一版
无任何插件，只有单纯的编译功能
###### 第二版
增加babel-loader插件，支持ES6转译ES5

遇到的问题：
####### 2.1 
'Entry module not found: Error: Can\'t resolve \'babel-loader\' in \'E:\\test
page\\newPage\\webpack\\webpack-demo4\'\nresolve \'babel-loader\' in \'E:\\test
page\\newPage\\webpack\\webpack-demo4\'\n 

解决办法：
在webpack.config文件增加resolveLoader配置项：

    resolveLoader:{
        modules:[
        path.join(__dirname, "node_modules")
        ]
    }
    
####### 2.2   
'./src/index.js\nModule build failed: Error: Couldn\'t find preset "env" relat
ive to directory "E:\\\\test page\\\\newPage\\\\webpack\\\\webpack-demo4\\\\src"
\n    at F:\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\optio...

需要将env的配置路径改为绝对路径：

    preset:[
    [path.resolve(__dirname + "/node_modules/babel-preset-env"), {module: "false"}]
    ]


