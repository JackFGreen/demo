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
        path: '/test',
        name: 'test',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/test'));
            }, './pages/test');
        }
    },

    {
        path: '/webpack-vue',
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/webpack-vue'));
            }, './pages/webpack-vue');
        },
        // 子路由
        children: [
            {
                path: 'base-overview',
                name: 'base-overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-base/base-overview'));
                    }, './pages/webpack-base/base-overview');
                }
            },

            {
                path: 'dev-overview',
                name: 'dev-overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-dev/dev-overview'));
                    }, './pages/webpack-dev/dev-overview');
                }
            },

            {
                path: 'build-overview',
                name: 'build-overview',
                component: function(resolve) {
                    require.ensure([], function () {
                        resolve(require('./pages/webpack-build/build-overview'));
                    }, './pages/webpack-build/build-overview');
                }
            }

        ]
    },
    {
        path: '/',
        redirect: '/index'
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
        redirect: '/index'
    }


];
