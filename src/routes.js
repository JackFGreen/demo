import routesWebpack from './routes-webpack'
import routesSecret from './routes-cssSecret'

var routes = [
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

routes = routesWebpack.concat(routesSecret.concat(routes));

export default routes;
