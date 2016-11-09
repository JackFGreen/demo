var VueRouter = require('vue-router');
var Vue = require('vue').use(VueRouter);
var App = Vue.extend({});
var router = new VueRouter();
var routes = require('./routes');

require('./scss/layout');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');

console.log(router)