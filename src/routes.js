
module.exports = {

    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/index'));
            }, 'components/index');
        }
    },

    '/demo1': {
        name: 'Demo-1',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo1'));
            }, 'components/demo1');
        }
    },

    '/demo2': {
        name: 'Demo-2',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo2'));
            }, 'components/demo2');
        }
    },

    '/common': {
        name: 'common',
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/common'));
            }, 'components/common');
        }
    }


}