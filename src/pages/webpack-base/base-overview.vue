<template>

<div id="base-overview">

    <h2>基本配置</h2>

    <h3>package.json</h3>
    <div class="eg-code">
        <pre>
            <code>
{
  "name": "demo",
  "version": "0.0.1",
  "description": "webpack",
  "repository": {
    "type": "git",
    "url": "git"
  },
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    // 开发时 npm 命令
    "dev": "node build/webpack.dev.js",

    // 编译时 npm 命令
    "build": "node build/webpack.build.js"
  },
  "author": "demo",
  "license": "MIT",
  "dependencies": {
    "vue": "^1.0.26",
    "vue-router": "^0.7.13"
  },
  "devDependencies": {
    // css 加前缀
    "autoprefixer": "^6.5.1",

    // 编译 es6 到 es5
    "babel-core": "^6.8.0",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.8.0",
    "babel-preset-es2015": "^6.6.0",
    "babel-runtime": "^6.0.0",

    // 清理文件
    "clean-webpack-plugin": "^0.1.14",

    // 处理 css
    "css-loader": "^0.25.0",

    // 提取文件
    "extract-text-webpack-plugin": "^1.0.1",

    // 处理文件
    "file-loader": "^0.9.0",

    // 将打包文件引入 html
    "html-webpack-plugin": "^2.24.1",

    // 压缩图片
    "image-webpack-loader": "^3.0.0",

    // 获取 ip
    "ip": "^1.1.4",

    // 监听端口
    "net": "^1.0.2",

    // sass
    "node-sass": "^3.10.1",

    // 打开浏览器
    "open": "0.0.5",

    // postcss
    "postcss-loader": "^1.1.1",

    // 终端生成二维码
    "qrcode-terminal": "^0.11.0",

    // 处理 sass
    "sass-loader": "^4.0.2",

    // 处理 css
    "style-loader": "^0.13.1",

    // 处理 url
    "url-loader": "^0.5.7",

    // vue 热加载
    "vue-hot-reload-api": "^1.3.3",

    // 处理 html
    "vue-html-loader": "^1.0.0",

    // 处理 .vue 文件
    "vue-loader": "^8.5.4",

    // 处理 css
    "vue-style-loader": "^1.0.0",

    // webpack
    "webpack": "^1.13.3",

    // webpack 开发服务
    "webpack-dev-server": "^1.16.2"
  }
}
            </code>
        </pre>
    </div>

    <h3>webpack.base.js</h3>
    <div class="eg-code">
        <pre>
            <code>
// 引入 npm 包
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

// postcss 配置 autoprefixer
// autoprefixer 浏览器兼容参数可放在 browserslist 文件中
// browserslist 和 package.json 同级，postcss 会自动扫描
// browserslist 文件内容   e.g.
        #浏览器兼容列表
        Android 4.1
        iOS 7.1
        Chrome > 31
        ff > 31
        ie >= 10

var getpostcss = function() {
    var postcss = [
        autoprefixer()
    ];
    return postcss;
};

module.exports = {
    //入口文件
    entry: {
        // 配置打包后的文件为 app.js，默认为 bundle.js
        app: [path.resolve(__dirname, '../src/app')]
    },

    output: {
        // 打包后文件路径
        path: path.resolve(__dirname, '../dist'),
        // 引入的文件路径，e.g. link | src = http://cdn.com
        publicPath: '',
        // 打包后的文件名，对应 entry  e.g. app.1234567.js
        filename: '[name].[hash:7].js',
        // app 以外的文件名    e.g. vue 按需加载后打包的文件
        chunkFilename: '[name].[chunkhash:7].js'
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要 module.js
        extensions: ['', '.js', '.vue', '.scss'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        // 默认 require 的不是 .min文件
        alias: {
            // 'jquery': 'jquery/dist/jquery.min',
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js'
        }
    },

    // 引用的外部文件不打包
    // externals 对象的 key 是给 require 时用的，e.g. require('react')，对象的value表示的是如何在 global（即window）中访问到该对象
    externals: {
        // 'jquery': 'jquery'
    },

    module: {
        // loader 执行顺序从右往左，先执行的放最右边
        // vue-loader 可简写为 vue，-loader 可省略
        // 字符串写法时多个 loader 用 ! 连接     e.g. loader: 'style!css'
        // 数组写法时 loader 改为 loaders      e.g. loaders: ['style', 'css']
        // 单个 loader 参数可用内联写法，或用 query 配置
        loaders: [{
            test: /\.vue$/,
            // 处理.vue
            loader: 'vue'
        }, {
            test: /\.js$/,
            // 处理 es6
            loader: 'babel',
            // 排除不需要处理的文件夹
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            // 处理 html
            loader: 'vue-html'
        }, {
            test: /\.css$/,
            // 处理 css，配置 postcss 加前缀
            loader: 'style!css!postcss'
        }, {
            test: /\.scss$/,
            // 处理 sass，配置 postcss 加前缀
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.(png|gif|jpe?g)(\?.*)?$/,
            // 处理图片，小于 8192k 的文件用 base64，处理后的文件打包到 dist/images/
            // 压缩图片
            loaders: [
                'url?limit=8192&name=images/[name].[hash:7].[ext]',
                'image-webpack'
            ]
        }, {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            // 处理字体
            loader: 'url',
            query: {
                limit: 8192,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },

    // 压缩图片
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

    // .vue 文件另加配置
    vue: {
        loaders: {
            // 处理 scss，禁用 css-loader 默认的 autoprefixer，build 时 uglify 会覆盖掉自定义的 autoprefixer 浏览器兼容参数
            scss: 'style!css?-autoprefixer!sass'
        },
        // .vue 调用 postcss 配置
        postcss: getpostcss()
    },

    // 其他 .css | .sass 文件调用 postcss 配置
    postcss: getpostcss(),

    plugins: [
        // 全局引用 不需要 require
        // e.g.
        // var $ = require('jquery') => $.extend();
        // var Vue = require('vue') => Vue.use(VueRouter);
        new webpack.ProvidePlugin({
            // $: 'jquery',
            Vue: 'vue',
            VueRouter: 'vue-router'
        }),

        //生成入口文件并引入js, css等文件
        new HtmlWebpackPlugin({
            // 配置 index.html title
            title: 'demo',
            // 配置文件名
            filename: 'index.html',
            // 配置文件模板
            template: path.resolve(__dirname, '../index.html'),
            // 配置favicon
            favicon: path.resolve(__dirname, '../src/images/favicon.ico'),
            // 按依赖顺序引入
            chunksSortMode: 'dependency',
            // 压缩选项
            minify: {
                // 去掉注释
                removeComments: true,
                // 去掉空格
                collapseWhitespace: true,
                // 去掉引号
                removeAttributeQuotes: true
            }
        })
    ]
};
            </code>
        </pre>
    </div>

</div>


</template>

<script>

export default {
    data() {
        return {}
    }
}

</script>

<style lang="scss">
#base-overview {

}
</style>
