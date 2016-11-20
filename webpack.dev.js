var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var ip = require('ip');
var open = require('open');
var qrcode = require('qrcode-terminal');

var config = require('./webpack.config.js');

var port = 8888;
var localhost = ip.address();
var startPage = 'http://' + localhost + ':' + port;

config.entry.unshift(
    'webpack-dev-server/client?' + startPage +'/',//自动刷新
    'webpack/hot/dev-server' //热模块替换
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

//生成sourceMap
config.devtool = 'eval-source-map';

config.module.loaders.forEach(function(el) {
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = 'style!css?sourceMap!sass?sourceMap!postcss';
    }
});

config.vue.loaders.scss = 'style!css?sourceMap!sass?sourceMap';

module.exports = config;

new WebpackDevServer(webpack(config), {
    hot: true,
    // historyApiFallback: false,
    stats: {
        color: true,
        chunks: false
    }
}).listen(port, localhost, function(err) {

    qrcode.generate(startPage, {small: true });

    if (!/(192\.168)|(10\.6)/.test(localhost)) {

        open(startPage, 'chrome');
    }
});



