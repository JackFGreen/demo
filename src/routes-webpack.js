export default [
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
    }

];
