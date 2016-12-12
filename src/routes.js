
module.exports = {

    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./pages/index'));
            }, './pages/index');
        }
    }

};
