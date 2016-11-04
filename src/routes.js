module.exports = {

    '/index': {
        name: 'index',
        component: function(resolve) {
            require.ensure(['./components/index'], function (require) {
                require(['./components/index'], resolve);
            }, './components/index');
        }
    },

    '/demo1': {
        name: 'demo1',
        component: function(resolve) {
            require.ensure(['./components/demo1'], function (require) {
                require(['./components/demo1'], resolve);
            }, './components/demo1');
        }
    },

    '/demo2': {
        name: 'demo2',
        component: function(resolve) {
            require.ensure(['./components/demo2'], function (require) {
                require(['./components/demo2'], resolve);
            }, './components/demo2');
        }
    }

/*    '/index': {
        name: 'index',
        component: function(resolve) {
            require(['./components/index'], resolve);
        }
    },

    '/demo1': {
        name: 'demo1',
        component: function(resolve) {
            require(['./components/demo1'], resolve);
        }
    },

    '/demo2': {
        name: 'demo2',
        component: function(resolve) {
            require(['./components/demo2'], resolve);
        }
    }
*/
/*    '/index': {
        name: 'index',
        component: require('./components/index')
    },

    '/demo1': {
        name: 'demo1',
        component: require('./components/demo1')
    },

    '/demo2': {
        name: 'demo2',
        component: require('./components/demo2')
    }*/

}