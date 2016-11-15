
module.exports = {

    '/index': {
        name: '主页',
        component: function(resolve) {
            require.ensure(['./components/index'], function (require) {
                require(['./components/index'], resolve);
            }, 'components/index');
        }
    },

    '/demo1': {
        name: 'Demo-1',
        component: function(resolve) {
            require.ensure(['./components/demo1'], function (require) {
                require(['./components/demo1'], resolve);
            }, 'components/demo1');
        }
    },

    '/demo2': {
        name: 'Demo-2',
        component: function(resolve) {
            require.ensure(['./components/demo2'], function (require) {
                require(['./components/demo2'], resolve);
            }, 'components/demo2');
        }
    },

    '/common': {
        name: 'common',
        component: function(resolve) {
            require.ensure(['./components/common'], function (require) {
                require(['./components/common'], resolve);
            }, 'components/common');
        }
    }


}