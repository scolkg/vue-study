const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

// 웹팩 컨피그 기본은 이 4개이다.
module.exports = {
	entry: {
		appname: './main.js',
	},
	module: {
		rules: [{
			
		}],
	},
	plugins: [

	],
	output: {
		//filename: 'appname.js',
		filename: '[name].js',
		path: './dist',

	},
};

module.exports = {
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.vue'], // 확장자 안넣어줘도 알아서 인식.
	},
	entry: {
		appname: path.join(__dirname, 'main.js'),
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
		},{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader',
			]
		}],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	output: {
		//filename: 'appname.js', 이렇게 써도 되고 [name]쓰면 알아서 들어간다.
		filename: 'app.js', 
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist',	// webpack-dev-server 는 메모리에 publicPath/app.js 를 저장한다~ 그래서 실제 파일이 생기지 않는다.
	},
};