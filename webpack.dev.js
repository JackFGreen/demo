var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');


config.entry.unshift(
    'webpack-dev-server/client?http://localhost:8080/',//自动刷新
    'webpack/hot/dev-server' //热模块替换
);

//生成sourceMap
config.devtool = 'eval-source-map';

config.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
    hot: true,
    stats: {
        color: true,
        chunks: false
    }
}).listen(8888);



module.exports = config;
