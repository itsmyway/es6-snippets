module.exports = {
	entry: "./js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "main.bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	externals: {
		"jquery": "jQuery"
	}
}
