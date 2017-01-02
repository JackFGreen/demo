<template>

<div id="build-overview">

    <h1>编译配置</h1>
    <hr>

    <h2>webpack.build.js</h2>
    <div class="eg-code">
        <pre>
            <code>
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

// 配置 CommonsChunkPlugin 单独打包的文件，打包后为 lib.js，不会合并到 app.js
config.entry.lib = [
    // 'jquery',
    'vue',
    'vue-router'
];

// 配置其他自定义文件
/*config.entry.service = [
    path.resolve(__dirname, '../src/service/test.js')
];*/

// 将 app.js 的 hash 改为 chunckhash，dev 环境不能用 chunckhash
// hash 计算整个项目，一个文件改动后 hash 就会改变
// chunckhash 计算单个文件，只改变对应修改的文件
// 如果文件内引入了 css，js || css 改变，chunckhash 也会改变
// http://www.cnblogs.com/ihardcoder/p/5623411.html
config.output.filename = '[name].[chunkhash:7].js';

// 配置生产环境 cdn 路径
// config.output.publicPath = '//cdn.com/demo/';

// 配置 ExtractTextPlugin，提取 css
// 同样禁用 css-loader 默认的 autoprefixer，不然自定义的会失效
config.module.loaders.forEach(function(el) {
    if (el.test.toString() === /\.css$/.toString()) {
        el.loader = ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss');
    }
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!sass');
    }
});

config.plugins.unshift(
    // 清空 dist
    new CleanWebpackPlugin(['dist'], {
        // 根的绝对路径
        "root": path.resolve(__dirname, '../'),
        // 将 log 写到 console.
        "verbose": true,
        // 排除不删除的目录，主要用于避免删除公用的文件
        "exclude": []
    }),

    // 通用模块单独打包 manifest 为 runtime 文件，里面包含了每个文件的 hash，每次打包都会改变，所以单独打包
    // htmlWebpackPlugin 会根据 names 配置 从右到左 依次将打包后的文件插入 index.html，如果 service 依赖于 lib ，需要把 service 放到 lib 前， e.g. service 为 Vue.direcitve，lib 为 vue
    new webpack.optimize.CommonsChunkPlugin({
        // names: ['service', 'lib', 'manifest'],
        names: ['lib', 'manifest'],
        //默认加 hash
        filename: '[name].[chunkhash:7].js'
    }),

    //提取 require('xxx.css')
    // allChunks=true  同时require 和 import 会重复
    // a.vue => @import 'a.css' 不会提取
    // (b.css && c.css) => @import 'a.css'  extract.css => a.css+b.css+c.css
    // (a.vue && b.vue) => require('a.css') 只提取1份 + (b.css && c.css) => @import 'a.css'  只提取1份 = extract.css => a.css*2+b.css+c.css

    // new ExtractTextPlugin('css/layout.[contenthash:7].css'),
    // 将 css 提取到目录后会有问题
    // dev         bg: url(../images/bg.jpg)
    // build       bg: url(images/bg.jpg) => dist/css/images/bg.jpg
    // https://github.com/webpack/extract-text-webpack-plugin/issues/27

    // 直接提取到 dist/ 下
    new ExtractTextPlugin('layout.[contenthash:7].css'),

/*    new ExtractTextPlugin('layout.[contenthash:7].css', {
        allChunks : true
    }),*/

    // 压缩 会把 autoprefixer 的 browsers 设为默认值，之前配置无效 
    // 禁用配置 css?-autoprefixer
    // https://github.com/postcss/autoprefixer/issues/660
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = config;

webpack(config, function(err, stats) {

    if (err) throw err;

    process.stdout.write(stats.toString({
        chunks: false,
        colors: true
    }));
});
            </code>
        </pre>
    </div>

</div>


</template>

<script>

var  $data = {

}

module.exports = {
    data: function() {

        return $data;
    }
}

</script>

<style lang="scss">
#build-overview {

}
</style>
