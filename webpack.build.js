var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

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
    // if (el.test.toString() === /\.css$/.toString()) {
    //     el.loader = ExtractTextPlugin.extract('style', 'css');
    // }
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = ExtractTextPlugin.extract('style', 'css!sass!postcss');
    }
});

config.plugins.unshift(
    //清空dist
    new CleanWebpackPlugin(['dist'], {
        // 根的绝对路径 webpack.config的地址
        "root": path.resolve(__dirname, './'),
        // 将log写到 console.
        "verbose": true,
        // 排除不删除的目录，主要用于避免删除公用的文件
        "exclude": []
    }),

    //通用模块单独打包 vendor为runtime文件，每次都会改变
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vue', 'service', 'vendor']
    }),

    //提取 require('xxx.css')
    new ExtractTextPlugin('./css/layout.[contenthash].css', {allChunks: true}),
    
    //压缩 会把autoprefixer 的browsers设为默认值，之前配置无效
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = config;
