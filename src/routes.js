
module.exports = {

    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/index'));
            }, './pages/index');
        }
    },

    '/webpack-vue': {
        name: 'webpack-vue',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/webpack-vue'));
            }, './pages/webpack-vue');
        }
    }

};
