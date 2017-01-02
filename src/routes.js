
module.exports = {

    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/index'));
            }, './pages/index');
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

    '/webpack-vue': {
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/webpack-vue'));
            }, './pages/webpack-vue');
        },
        // 子路由
        subRoutes: {
            '/base-overview': {
                name: 'overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-base/base-overview'));
                    }, './pages/webpack-base/base-overview');
                }
            },

            '/dev-overview': {
                name: 'overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-dev/dev-overview'));
                    }, './pages/webpack-dev/dev-overview');
                }
            },

            '/build-overview': {
                name: 'overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-build/build-overview'));
                    }, './pages/webpack-build/build-overview');
                }
            }

        }
    }

};
