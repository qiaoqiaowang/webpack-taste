const path = require("path");

console.log(process.cwd());

module.exports = {
	"entry": "./src/index.js",
	"output": {
		"filename": "bundle.js",
		"path": path.resolve(process.cwd(), 'dist')
	},
	"mode": "development"
}