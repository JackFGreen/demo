export default [{
    path: '/css-secret',
    name: 'css-secret',
    component: function(resolve) {
        require.ensure([], function() {
            resolve(require('./pages/css-secret/css-secret'));
        }, './pages/css-secret/css-secret');
    },
    children: [{
            path: 'cs1',
            name: '引言',
            component(resolve) {
                require.ensure([], () => {
                    resolve(require('./pages/css-secret/cs1/cs1.vue'));
                }, './pages/css-secret/cs1/cs1.vue');
            },
            children: [{
                    path: 'cs1-1',
                    name: 'web 标准：是敌是友',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs1/cs1-1.vue'));
                        }, './pages/css-secret/cs1/cs1-1.vue');
                    }
                },
                {
                    path: 'cs1-2',
                    name: 'css 编码技巧',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs1/cs1-2.vue'));
                        }, './pages/css-secret/cs1/cs1-2.vue');
                    }
                }
            ]
        },
        {
            path: 'cs2',
            name: '背景与边框',
            component(resolve) {
                require.ensure([], () => {
                    resolve(require('./pages/css-secret/cs2/cs2.vue'));
                }, './pages/css-secret/cs2/cs2.vue');
            },
            children: [{
                    path: 'cs2-1',
                    name: '半透明边框',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs2/cs2-1.vue'));
                        }, './pages/css-secret/cs2/cs2-1.vue');
                    }
                },
                {
                    path: 'cs2-2',
                    name: '多重边框',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs2/cs2-2.vue'));
                        }, './pages/css-secret/cs2/cs2-2.vue');
                    }
                },
                {
                    path: 'cs2-3',
                    name: '灵活的背景定位',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs2/cs2-3.vue'));
                        }, './pages/css-secret/cs2/cs2-3.vue');
                    }
                },
                {
                    path: 'cs2-4',
                    name: '边框内圆角',
                    component(resolve) {
                        require.ensure([], () => {
                            resolve(require('./pages/css-secret/cs2/cs2-4.vue'));
                        }, './pages/css-secret/cs2/cs2-4.vue');
                    }
                }
            ]
        }
    ]
}];