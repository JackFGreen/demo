var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// var webpackDevMiddleware = require("webpack-dev-middleware");
// var app = require('express')();

var ip = require('ip');
var open = require('open');
var qrcode = require('qrcode-terminal');

var config = require('./webpack.config.js');

var port = 8888;
var localhost = ip.address();
var startPage = 'http://' + localhost + ':' + port;

config.output.publicPath = startPage + '/';

config.entry.app.unshift(
    'webpack-dev-server/client?' + startPage + '/', //自动刷新
    'webpack/hot/dev-server' //热模块替换
);
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    //报错不会中断webpack
    new webpack.NoErrorsPlugin()
);

//生成sourceMap   sass, css, vue都要加
config.devtool = 'eval-source-map';

config.module.loaders.forEach(function(el) {
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = 'style!css?sourceMap!postcss!sass?sourceMap';
    }
});

config.vue.loaders.scss = 'style!css?sourceMap!sass?sourceMap';

/*config.devServer = {
    historyApiFallback: true,
    // hot: true,
    stats: {
        // color: true,
        chunks: false
    },
    host: localhost,
    port: port,
    proxy: {
        '*': startPage // 用于转发api数据，但webpack自己提供的并不太好用
    }
};*/

module.exports = config;

var compiler = webpack(config);

/*app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: {
        color: true,
        chunks: false
    },
    host: localhost,
    port: port,
    proxy: {
        '*': startPage // 用于转发api数据，但webpack自己提供的并不太好用
    }
}));*/

var server = new WebpackDevServer(compiler, {
    // noInfo: true,
    // host: localhost,
    // port: port,
    // proxy: {
    //     '*': startPage // 用于转发api数据，但webpack自己提供的并不太好用
    // },
    historyApiFallback: true,
    hot: true,
    stats: {
        color: true,
        chunks: false
    }
}).listen(port, localhost, function(err) {

    console.log('\n Listening at ' + startPage);

    qrcode.generate(startPage, { small: true });

    if (!/(192\.168)|(10\.6)/.test(localhost)) {

        open(startPage, 'chrome');
    }
});
