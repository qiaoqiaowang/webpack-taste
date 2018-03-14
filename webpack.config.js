const path = require("path");

console.log(process.cwd());

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
					presets: [['env', {module: "false"}]]
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