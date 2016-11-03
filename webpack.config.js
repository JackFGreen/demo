var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: ['./src/main'],
    output: {
        path: './dist',
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', 'scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {

        }
    },
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
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('common',  'common.js')
    ]
};
