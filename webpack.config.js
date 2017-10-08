const path = require("path");
const fs = require('fs');

module.exports = {
	//entry: ["./js/main.js", "./js/index.js"],
	entry: {
		"indexEntry": './js/index.js',
		"mainEntry": './js/main.js',
		"ajaxEntry": './js/ajax.js',
		"sandboxEntry": './js/sandbox.js',
		"algosEntry": './js/algos.js',
		"generator": './js/sillygenerator.js',
		"tree": './js/treetraverse.js',
		"sliderEntry": './js/slider.js'
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$/,
				// Skip any files outside of your project's `src` directory
				include: [
					path.resolve(__dirname, "src")
				],
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
        test: /\.json$/,
        use: 'json-loader'
      }
		]
	},
	externals: {
		"jquery": "jQuery"
	},
	target: "node",
	node: {
  	fs: "empty"
	}
}
