var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var getpostcss = function() {
    var postcss = [
        autoprefixer({
            browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 10"]
        })
    ];
    console.log(postcss);
    return postcss;
};

module.exports = {
    //入口文件
    entry: [
        path.resolve(__dirname, './src/app')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: 'cdn.com',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js'
        }
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass!postcss'
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
            scss: 'style!css!sass'
        },
        postcss: getpostcss()
    },

    postcss: getpostcss(),

    // autoprefixer: {
    //     browsers: browsers
    // },

    plugins: [
        //生成入口文件并引入js文件
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
