module.exports = [
    // index
    {
        path: '/index',
        name: '主页',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./pages/index'));
            }, './pages/index');
        }
    },
    {
        path: '/',
        redirect: '/index'
    },

    // demo
    {
        path: '/demo1',
        name: 'demo1',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/demo1'));
            }, './components/demo1');
        }
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/demo2'));
            }, './components/demo2');
        }
    },
    {
        path: '/demo3',
        name: 'demo3',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/demo3'));
            }, './components/demo3');
        }
    },
    {
        path: '/demo4',
        name: 'demo4',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/demo4'));
            }, './components/demo4');
        }
    },

    {
        path: '/svg',
        name: 'svg',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/svg'));
            }, './components/svg');
        }
    },

    {
        path: '/test',
        name: 'test',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/test'));
            }, './components/test');
        }
    },

    {
        path: '/webpack-vue',
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/webpack-vue'));
            }, './components/webpack-vue');
        }
    },

    {
        path: '/webpack-sourceMap',
        name: 'webpack-sourceMap',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./components/webpack-sourceMap'));
            }, './components/webpack-sourceMap');
        }
    },

    // 404
    {
        path: '/not-found',
        name: '404',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./pages/not-found'));
            }, './pages/not-found');
        }
    },
    {
        path: '*',
        redirect: '/not-found'
    }


];
