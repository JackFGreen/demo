webpackJsonp([3,23],{25:function(e,n){e.exports=function(e,n,r,t){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),r&&(a._scopeId=r),t){var i=a.computed||(a.computed={});Object.keys(t).forEach(function(e){var n=t[e];i[e]=function(){return n}})}return{esModule:o,exports:s,options:a}}},41:function(e,n,r){r(42);var t=r(25)(r(44),r(45),null,null);e.exports=t.exports},42:function(e,n,r){var t=r(43);"string"==typeof t&&(t=[[e.id,t,""]]);r(24)(t,{});t.locals&&(e.exports=t.locals)},43:function(e,n,r){n=e.exports=r(23)(),n.push([e.id,"",""])},44:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},45:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c||n;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"page-dev-overview"}},[r("h2",[e._v("开发配置")]),e._v(" "),r("h3",[e._v("webpack.dev.js")]),e._v(" "),r("div",{staticClass:"eg-code"},[r("pre",[e._v("\n            "),r("code",[e._v("\nvar webpack = require('webpack');\nvar WebpackDevServer = require('webpack-dev-server');\n\nvar net = require('net');\nvar ip = require('ip');\nvar open = require('open');\nvar qrcode = require('qrcode-terminal');\n\nvar config = require('./webpack.base.js');\n\nvar port = 8888;\nvar localhost = ip.address();\n\nconfig.plugins.push(\n    // 热模块替换    .vue 文件要加上 script 标签，否则会失败\n    new webpack.HotModuleReplacementPlugin(),\n    // 报错不会中断 webpack\n    new webpack.NoErrorsPlugin()\n);\n\n// 生成 sourceMap   sass, css, vue都要加\nconfig.devtool = 'eval-source-map';\n\nconfig.module.loaders.forEach(function(el) {\n    if (el.test.toString() === /\\.scss$/.toString()) {\n        el.loader = 'style!css?sourceMap!postcss!sass?sourceMap';\n    }\n});\n\nconfig.vue.loaders.scss = 'style!css?sourceMap!sass?sourceMap';\n\nfunction startDev(port) {\n\n    var startPage = 'http://' + localhost + ':' + port + '/';\n\n    // 开启 souceMap后，图片 bg: url() 相对路径会指向 （chrome:blob or chrome:devtools），需要设置 publicPath 指向 localhost\n    // https://github.com/webpack/style-loader/blob/master/README.md\n    config.output.publicPath = startPage;\n\n    config.entry.app.unshift(\n        // 热加载\n        'webpack-dev-server/client?' + startPage,\n        // 热替换\n        'webpack/hot/dev-server'\n    );\n\n    // 配置 devServer\n    new WebpackDevServer(webpack(config), {\n        historyApiFallback: true,\n        // 开启热替换参数\n        hot: true,\n        stats: {\n            // 不显示杂七杂八的一大堆 chunks 信息\n            chunks: false,\n            // 显示颜色\n            colors: true\n        }\n    }).listen(port, function(err, stats) {\n\n        if (err) throw err;\n\n        console.log('\\n Listening at ' + startPage);\n\n        qrcode.generate(startPage, { small: true });\n\n        open(startPage, 'chrome');\n\n    });\n}\n\n// 检测端口是否被占用\nfunction checkPort(port, callback) {\n    // 创建服务并监听该端口\n    var server = net.createServer().listen(port)\n\n    // 执行这块代码说明端口未被占用\n    server.on('listening', function() {\n        // 关闭服务\n        server.close();\n        // 控制台输出信息\n        console.log('\\n The port ' + port + ' is available');\n\n        typeof callback === 'function' && callback(port);\n    })\n\n    server.on('error', function(err) {\n        // 端口已经被使用\n        if (err.code === 'EADDRINUSE') {\n            port++;\n            console.log('\\n The port ' + port + ' is occupied, changing to a new port ' + port);\n\n            checkPort(port, callback);\n        }\n    })\n}\n\ncheckPort(port, startDev);\n            ")]),e._v("\n        ")])])])}]}}});