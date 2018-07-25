module.exports = {
	entry: ['@babel/polyfill', './assets/js/main.js'],
	output: {
		path: __dirname,
		filename: './dist/js/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
		],
	},
};