<template>

<div id="dev-overview">

    <h1>开发配置</h1>
    <hr>

    <h2>webpack.dev.js</h2>
    <div class="eg-code">
        <pre>
            <code>
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var net = require('net');
var ip = require('ip');
var open = require('open');
var qrcode = require('qrcode-terminal');

var config = require('./webpack.base.js');

var port = 8888;
var localhost = ip.address();

config.plugins.push(
    // 热模块替换    .vue 文件要加上 script 标签，否则会失败
    new webpack.HotModuleReplacementPlugin(),
    // 报错不会中断 webpack
    new webpack.NoErrorsPlugin()
);

// 生成 sourceMap   sass, css, vue都要加
config.devtool = 'eval-source-map';

config.module.loaders.forEach(function(el) {
    if (el.test.toString() === /\.scss$/.toString()) {
        el.loader = 'style!css?sourceMap!postcss!sass?sourceMap';
    }
});

config.vue.loaders.scss = 'style!css?sourceMap!sass?sourceMap';

function startDev(port) {

    var startPage = 'http://' + localhost + ':' + port + '/';

    // 开启 souceMap后，图片 bg: url() 相对路径会指向 （chrome:blob or chrome:devtools），需要设置 publicPath 指向 localhost
    // https://github.com/webpack/style-loader/blob/master/README.md
    config.output.publicPath = startPage;

    config.entry.app.unshift(
        // 热加载
        'webpack-dev-server/client?' + startPage,
        // 热替换
        'webpack/hot/dev-server'
    );

    // 配置 devServer
    new WebpackDevServer(webpack(config), {
        historyApiFallback: true,
        // 开启热替换参数
        hot: true,
        stats: {
            // 不显示杂七杂八的一大堆 chunks 信息
            chunks: false,
            // 显示颜色
            colors: true
        }
    }).listen(port, function(err, stats) {

        if (err) throw err;

        console.log('\n Listening at ' + startPage);

        qrcode.generate(startPage, { small: true });

        open(startPage, 'chrome');

    });
}

// 检测端口是否被占用
function checkPort(port, callback) {
    // 创建服务并监听该端口
    var server = net.createServer().listen(port)

    // 执行这块代码说明端口未被占用
    server.on('listening', function() {
        // 关闭服务
        server.close();
        // 控制台输出信息
        console.log('\n The port ' + port + ' is available');

        typeof callback === 'function' && callback(port);
    })

    server.on('error', function(err) {
        // 端口已经被使用
        if (err.code === 'EADDRINUSE') {
            port++;
            console.log('\n The port ' + port + ' is occupied, changing to a new port ' + port);

            checkPort(port, callback);
        }
    })
}

checkPort(port, startDev);
            </code>
        </pre>
    </div>

</div>


</template>

<script>

var  $data = {

}

module.exports = {
    data: function() {

        return $data;
    }
}

</script>

<style lang="scss">
#dev-overview {

}
</style>
