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

//生成sourceMap
// config.devtool = 'eval-source-map';

config.module.loaders.forEach(function(el) {
    if (/sass/.test(el.loader)) {
        el.loader = 'style!css?sourceMap!sass';
    }
});

// console.log(config.vue.loaders.scss);
// config.vue.loaders.scss = 'style!css?sourceMap!sass?sourceMap';
// console.log(config.vue.loaders.scss);

console.log(config);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;

new WebpackDevServer(webpack(config), {
    hot: true,
    stats: {
        color: true,
        chunks: false
    }
}).listen(port, localhost, function(err) {

    qrcode.generate(startPage, {small: true });

    if (!/192\.168/.test(localhost)) {

        open(startPage, 'chrome');
    }
});



