var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.module.loaders.forEach(function(el) {
    if (/css$/.test(el.loader)) {
        el.loader = ExtractTextPlugin.extract('style-loader', 'css-loader');
    }
    if (/sass$/.test(el.loader)) {
        el.loader = ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader');
    }
});

//提取入口文件中 require(xxx.scss)
config.plugins.push(new ExtractTextPlugin('./css/layout.[contenthash].css'));

//压缩
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

module.exports = config;