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
                resolve(require('./pages/demo1'));
            }, './pages/demo1');
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
