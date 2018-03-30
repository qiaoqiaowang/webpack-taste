const path = require("path");

module.exports = {
	"entry": "./src/index.js",
	"output": {
		"filename": "bundle.js",
		"path": path.resolve(process.cwd(), 'dist')
	},
	"module": {
		"rules": [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
					[path.resolve(__dirname+ "/node_modules/babel-preset-env"), {module: "false"}],
					path.resolve(__dirname+ "/node_modules/babel-preset-react")
					],
					babelrc: false
					}
			}]
		}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
                path.join(__dirname, "node_modules")
            ]
	},
	resolveLoader: {
            modules: [
                path.join(__dirname, "node_modules")
            ]
			},
	
	"mode": "development",
	externals: {
		"react": "React",
		'react-dom': "ReactDOM"
	}
}