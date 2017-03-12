module.exports = [
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
            require.ensure([], function() {
                resolve(require('./pages/test'));
            }, './pages/test');
        }
    },

    /**
     * webpack-vue start
     */
    {
        path: '/webpack-vue',
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./pages/webpack-vue/webpack-vue'));
            }, './pages/webpack-vue/webpack-vue');
        },
        // 子路由
        children: [
            {
                path: 'base-overview',
                name: 'base-overview',
                component: function(resolve) {
                    require.ensure([], function() {
                        resolve(require('./pages/webpack-vue/base-overview'));
                    }, './pages/webpack-vue/base-overview');
                }
            },

            {
                path: 'dev-overview',
                name: 'dev-overview',
                component: function(resolve) {
                    require.ensure([], function() {
                        resolve(require('./pages/webpack-vue/dev-overview'));
                    }, './pages/webpack-vue/dev-overview');
                }
            },

            {
                path: 'build-overview',
                name: 'build-overview',
                component: function(resolve) {
                    require.ensure([], function() {
                        resolve(require('./pages/webpack-vue/build-overview'));
                    }, './pages/webpack-vue/build-overview');
                }
            }

        ]
    },
    /**
     * webpack-vue end
     */

    /**
     * css-secret start
     */
    {
        path: '/css-secret',
        name: 'css-secret',
        component: function(resolve) {
            require.ensure([], function() {
                resolve(require('./pages/css-secret/css-secret'));
            }, './pages/css-secret/css-secret');
        },
        children: [
            {
                path: 'cs1',
                name: 'cs1',
                component(resolve) {
                    require.ensure([], () => {
                        resolve(require('./pages/css-secret/cs1.vue'));
                    }, './pages/css-secret/cs1.vue');
                }
            }
        ]
    },
    /**
     * css-secret end
     */

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
