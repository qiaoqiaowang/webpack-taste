
exports = module.exports = function(options){
	
const webpack = require("webpack");

const config = require("./webpack.config.js");

const compiler = webpack(config);

var fileHash = "";
compiler.watch({
	aggregateTimeout: 300,
	poll: true
}, (err, stats) =>{
	if(err){
		console.error(err.stack || err);
		if(err.details){
			console.error(err.details);
		}
		
		return;
	}
	
	if(stats.hasErrors()){
		console.error(stats.toJson().errors);
	}else if (stats.hasWarnings()) {
    console.warn(stats.toJson().warnings);
	}else {
		var info = stats.toJson();
		if(info.hash != fileHash){
			console.log("build complete!");
			console.log(stats.toString());
			fileHash = info.hash;
		}
	
	}	
	
})
}