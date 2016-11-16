var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var ip = require('ip');
var open = require('open');
var qrcode = require('qrcode-terminal');

var port = 8888;
var localhost = ip.address();
var startPage = 'http://' + localhost + ':' + port;

config.entry.unshift(
    'webpack-dev-server/client?' + startPage +'/',//自动刷新
    'webpack/hot/dev-server' //热模块替换
);

//生成sourceMap
config.devtool = 'eval-source-map';

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
    open(startPage);
});



