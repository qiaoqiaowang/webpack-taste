
exports = module.exports = function(options){
	console.log("hello webpack");

const webpack = require("webpack");

const config = require("./webpack.config.js");
console.log(config);

const compiler = webpack(config, (err, stats) =>{
	if(err){
		console.error(err.stack || err);
		if(err.details){
			console.error(err.details);
		}
		
		return;
	}
	var info = stats.toJson();
	if(stats.hasErrors()){
		console.error(info.errors);
	}
		
	if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }	
	
});

const watching =  compiler.watch({
	aggregateTimeout: 300,
	poll: 1000
}, (err, stats)=>{
	if (stats.hasErrors()) {
                    console.log('ERROR start ==============================================================');
                    console.log(stats.toString());
                    console.log('ERROR end   ==============================================================');
                } else {
                    console.log(stats.toString());
                }
})


}