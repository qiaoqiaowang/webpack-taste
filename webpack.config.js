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
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
					[path.resolve(__dirname+ "/node_modules/babel-preset-env"), {module: "false"}]
					]
					}
			}
		}
		]
	},
	
	resolveLoader: {
            modules: [
                path.join(__dirname, "node_modules")
            ]
        },
	
	"mode": "development"
}