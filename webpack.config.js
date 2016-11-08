var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer({}, {}).listen(8888);

module.exports = {
    //入口文件
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',//热加载
        './src/main'
    ],
    output: {
        path: './dist',
        publicPath: '',
        filename: '[name].[hash].js',//入口文件
        chunkFilename: '[name].[chunkhash].js'//其他文件
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {

        }
    },
    //生成sourceMap
    devtool: 'eval-source-map',

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?{browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 10"]}'
                // loader: 'style!css!autoprefixer?{browsers: ["last 2 versions","> 0.03%","Firefox >= 20","ie 8"]}'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url?mimetype=image/png&limit=8192&name=images/[name].[hash].[ext]'
        }]

    },

    vue: {
        loaders: {
            scss: 'style!css!sass?sourceMap'
        }
    },

    plugins: [
        //通用模块单独打包
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),
        //生成入口文件并引入js文件
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: './index.html'
        })
    ]
};
