export default [
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
    }
];
