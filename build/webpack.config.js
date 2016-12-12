var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var getpostcss = function() {
    var postcss = [
        autoprefixer()
    ];
    return postcss;
};

module.exports = {
    //入口文件
    entry: {
        app: [path.resolve(__dirname, '../src/app')]
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].[hash:7].js',
        chunkFilename: '[name].[chunkhash:7].js'
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
        // 'jquery': 'jquery'
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
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.(png|gif|jpe?g)(\?.*)?$/,
            loaders: [
                'url?limit=8192&name=images/[name].[hash:7].[ext]',
                'image-webpack'
            ]
        }, {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 8192,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },

    imageWebpackLoader: {
        mozjpeg: {
            progressive: true,
            quality: 65
        },
        pngquant: {
            quality: "65-90",
            speed: 4
        },
        gifsicle: {
            interlaced: true,
            colors: 64,
            optimizationLevel: 3
        }
    },

    //vue加配置
    vue: {
        loaders: {
            scss: 'style!css?-autoprefixer!sass'
        },
        postcss: getpostcss()
    },

    postcss: getpostcss(),

    plugins: [
        // 全局引用 不需要require
        new webpack.ProvidePlugin({
            Vue: 'vue',
            VueRouter: 'vue-router',
            $: 'jquery'
        }),

        //生成入口文件并引入js, css等文件
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            favicon: path.resolve(__dirname, '../src/images/favicon.ico'),
            chunksSortMode: 'dependency', //按依赖顺序引入
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
