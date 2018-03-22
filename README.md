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

####### 遇到的问题：
####### 第一个问题(2.1)

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
    
####### 第二个问题(2.2)

    './src/index.js\nModule build failed: Error: Couldn\'t find preset "env" relat
    ive to directory "E:\\\\test page\\\\newPage\\\\webpack\\\\webpack-demo4\\\\src"
    \n    at F:\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\optio...

需要将env的配置路径改为绝对路径：

    preset:[
    [path.resolve(__dirname + "/node_modules/babel-preset-env"), {module: "false"}]
    ]

####### .babelrc is not working（2.3）

如果把babel-loader的options的相关配置放在.babelrc配置文件中，webpack.config.js的配置需要改成：
    
    "module": {
		"rules": [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
		}
		]
	}
    
.babelrc文件：

    {
	"presets": [
        ["env", { "modules": false }]
	]
    }

因为babel的文档又说会自动读取.babelrc文件。但是，这个自动读取是怎么读取的呢？ 以上配置，放在项目根目录的.babelrc文件并没有被加载，这是为什么呢？

其实babel查找.babelrc文件，默认是从执行命令的文件夹开始，并不是从项目的目录查找。所以需要提供下.babelrc文件的目录:
    
    "module": {
		"rules": [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					babelrc: path.resolve(__dirname + "/.babelrc")
				}
			}
		}
		]
	}
    
   这样，.babelrc文件就会被加载。但是此时又遇到了 2.2的那个问题， presets env 又去执行目录那边找，此时我不知道如何在 .babelrc文件中将env的路径设置成绝对路径，或者有其他方法？ 

