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
    return postcss;
};

module.exports = {
    //入口文件
    entry: [
        path.resolve(__dirname, './src/app')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js',
            'jquery': 'jquery/dist/jquery.min'
        }
    },

    //引用的外部文件不打包
    externals: {
        // 'vue': 'vue/dist/vue.min.js',
        // 'vue-router': 'vue-router/dist/vue-router.min.js'
        // 'jquery': 'window.jquery'
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
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

    //vue加配置
    vue: {
        loaders: {
            scss: 'style!css!sass'
        },
        postcss: getpostcss()
    },

    postcss: getpostcss(),

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),

        //生成入口文件并引入js, css等文件
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.html'),
            favicon: path.resolve(__dirname, 'src/images/favicon1.ico'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
