
module.exports = {

    //打包成单独具名文件可配置文件夹
    //./components/index.xxx.js
    //./components/demo1.xxx.js
    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/index'));
            }, './pages/index');
        }
    },

    '/demo1': {
        name: 'Demo1',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo1'));
            }, './components/demo1');
        }
    },

    '/demo2': {
        name: 'Demo2',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo2'));
            }, './components/demo2');
        }
    },

    '/demo3': {
        name: 'Demo3',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo3'));
            }, './components/demo3');
        }
    },

    '/demo4': {
        name: 'grid',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo4'));
            }, './components/demo4');
        }
    },

    '/svg': {
        name: 'svg',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/svg'));
            }, './components/svg');
        }
    },

    '/test': {
        name: 'test',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/test'));
            }, './pages/test');
        }
    },

    '/common': {
        name: 'common',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/common'));
            }, './components/common');
        }
    },

    '/webpack-vue': {
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/webpack-vue'));
            }, './pages/webpack-vue');
        }
    },

    '/webpack-sourceMap': {
        name: 'webpack-sourceMap',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/webpack-sourceMap'));
            }, './pages/webpack-sourceMap');
        }
    }

    //打包成单独的文件  1.xxx.js  2.xxx.js
    /*'/index': {
        name: '主页',
        component: function(resolve) {
            require(['./components/index'], resolve);
        }
    },

    '/demo1': {
        name: 'Demo-1',
        component: function(resolve) {
            require(['./components/demo1'], resolve);
        }
    },

    '/demo2': {
        name: 'Demo-2',
        component: function(resolve) {
            require(['./components/demo2'], resolve);
        }
    },

    '/common': {
        name: 'common',
        component: function(resolve) {
            require(['./components/common'], resolve);
        }
    }*/

    //所有文件打包成1个
    /*'/index': {
        name: '主页',
        component: require('./components/index')
    },

    '/demo1': {
        name: 'Demo-1',
        component: require('./components/demo1')
    },

    '/demo2': {
        name: 'Demo-2',
        component: require('./components/demo2')
    },

    '/common': {
        name: 'common',
        component: require('./components/common')
    }*/



};
