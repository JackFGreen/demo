var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //入口文件
    entry: [
        path.resolve(__dirname, './src/main')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: '[name].[hash].js'
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.scss'],
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
            loader: 'style!css?sourceMap'
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.scss$/,
            // loader: 'style!css!sass'
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap')
        }, {
            test: /\.(png|gif|jpe?g)$/,
            loader: 'url',
            query: {
                // mimetype: 'image/png',
                limit: '8192',
                name: 'images/[name].[hash].[ext]'
            }
        }]

    },

    vue: {
        loaders: {
            scss: 'style!css?sourceMap!sass?sourceMap'
        }
    },

    autoprefixer: {
        // ["last 2 versions","> 0.03%","Firefox >= 20","ie 8"]
        browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 10"]
    },

    plugins: [
        //提取require(xxx.scss)
        new ExtractTextPlugin('layout.[contenthash].css'),
        //通用模块单独打包
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),

        //生成入口文件并引入js文件
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html')
        })
    ]
};
