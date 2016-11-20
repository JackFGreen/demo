var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.entry = {
    vue: [
        'vue',
        'vue-router',
        path.resolve(__dirname, './src/service/service')
    ],
    service: [
        path.resolve(__dirname, './src/service/service1')
    ],
    app: [path.resolve(__dirname, './src/app')]
};

config.output.filename = '[name].[chunkhash].js';

config.module.loaders.forEach(function(el) {
    if (el.test.toString() === /\.css$/.toString()) {
        el.loader = ExtractTextPlugin.extract('style', 'css');
    }
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = ExtractTextPlugin.extract('style', 'css!sass!postcss');
    }
});

config.plugins.unshift(
    //通用模块单独打包
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vue', 'service', 'vendor']
    }),
    //提取入口文件中 require(xxx.scss)
    new ExtractTextPlugin('./css/layout.[contenthash].css'),
    //压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = config;
