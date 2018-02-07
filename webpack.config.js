var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require("path");
const fs = require('fs');

const extractSass = new ExtractTextPlugin({
    filename: 'dist/sassStyles.bundle.css',
    allChunks: true
});

const extractCSS = new ExtractTextPlugin({
    filename: "dist/cssStyles.bundle.css",
    allChunks: true
});

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
		"sliderEntry": './js/slider.js',
    "pageNavEntry": './js/pageNav.js',
    "htabsEntry": './js/htabs.js'
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
      },
      { // regular css files
        test: /\.css$/,
        loader: extractCSS.extract(['css-loader?sourceMap']),
        //include: __dirname + '/css'
        include: path.resolve(__dirname, 'css'),
        // options: {
        //   includePath: "./css/variables.css"
        // }
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: extractSass.extract(['css-loader?sourceMap', 'sass-loader?sourceMap'])
      }
		]
	},
  plugins: [
    extractCSS,
    extractSass
    // new ExtractTextPlugin({ // define where to save the file
    //   filename: 'dist/[name].bundle.css',
    //   allChunks: true,
    // }),
  ],
	externals: {
		"jquery": "jQuery"
	},
	target: "node",
	node: {
  	fs: "empty"
	}
}
