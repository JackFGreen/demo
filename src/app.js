var VueRouter = require('vue-router');
var Vue = require('vue');
var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

require('./scss/layout');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');

console.log(router);