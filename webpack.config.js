const path = require("path");

module.exports = {
	entry: ["./js/main.js", "./js/index.js"],
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
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
			}
		]
	},
	externals: {
		"jquery": "jQuery"
	}
}
