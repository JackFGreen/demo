var routeRequire = function(sourceFrom, sourceTo) {
    sourceTo = typeof sourceTo === 'undefined' ? sourceFrom : sourceTo;
    console.log(sourceFrom);
    console.log(sourceTo);
    return function(resolve) {
        require.ensure([], function() {
            resolve(require(sourceFrom));
        }, sourceTo);
    }
}
console.log(routeRequire('./components/index'));
module.exports = {

    '/index': {
        name: '主页',
        // component: routeRequire('./components/index')
        component: function(resolve) {
            console.log(this)
            console.log(resolve)
            require.ensure([], function () {
                resolve(require('./components/index'));
            }, './components/index');
        }
    },

    '/demo1': {
        name: 'Demo-1',
        // component: routeRequire('./components/demo1')
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo1'));
            }, './components/demo1');
        }
    },

    '/demo2': {
        name: 'Demo-2',
        // component: routeRequire('./components/demo2')
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/demo2'));
            }, './components/demo2');
        }
    },

    '/common': {
        name: 'common',
        // component: routeRequire('./components/common')
        component: function(resolve) {
            require.ensure([], function () {
                resolve(require('./components/common'));
            }, './components/common');
        }
    }


}