// version 1
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const rendererConfig = {

	target: 'node',
	devtool: 'inline-source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						// exclude: "/node_modules/",
						options: {
							// context: path.resolve(__dirname, 'src')
							// projectReferences: true
						}
					}
				]
			}
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, '..'), // must be placed before 'node modules'
			'node_modules'
		],
		extensions: [
			'.ts',
			'.js',
			'.xml'
		],
		alias: {
			// CUSTOM PACKAGES:
		   // 'modules': path.resolve(__dirname, '../'),
		   "@utilities": path.resolve(__dirname, './src'),

			"enterprise-architecture-modeling-standard": path.resolve(__dirname, '../enterprise-architecture-modeling-standard/')
		   },
		plugins: [new TsconfigPathsPlugin()]
	},
	entry: {
		"lib": './src/import.ts' //,
		// "blunt-test": '../test/blunt-test.ts',
		// "test": '../test/test.ts'
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	stats: {

		/*
		 * usedExports: true,
		 * reasons: false,
		 * maxModules: 100
		 */
	},
	watchOptions: {

		/*
		 * ignored: /node_modules/,
		 * poll: 1000 // check for changes every second
		 */

	},
	externals: [nodeExternals()]
};

// rendererConfig.target = webpackTargetElectronRenderer(rendererConfig);

module.exports = [rendererConfig];
