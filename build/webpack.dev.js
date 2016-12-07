var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var ip = require('ip');
var open = require('open');
var qrcode = require('qrcode-terminal');

var config = require('./webpack.config.js');

var port = 8888;
var localhost = ip.address();

var startPage = 'http://' + localhost + ':' + port + '/';

//开启 souceMap url() 图片相对路径会指向 （chrome:blob or chrome:devtools），需要设置 publicPath
//https://github.com/webpack/style-loader/blob/master/README.md
config.output.publicPath = startPage;

config.entry.app.unshift(
    'webpack-dev-server/client?' + startPage, //热加载
    'webpack/hot/dev-server' //热替换
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

module.exports = config;

// var dev_proxy = '';

new WebpackDevServer(webpack(config), {
    // proxy: {
    //     '**': {
    //         ignorePath: true,
    //         changeOrigin: true,
    //         secure: false,
    //         target: dev_proxy
    //     }
    // },
    historyApiFallback: true,
    hot: true,
    stats: {
        chunks: false,
        colors: true
    }
}).listen(port, function(err, stats) {

    if (err) throw err;

    console.log('\n Listening at ' + startPage);

    qrcode.generate(startPage, { small: true });

    if (!/(192\.168)|(10\.6)/.test(localhost)) {

        open(startPage, 'chrome');
    }

});
