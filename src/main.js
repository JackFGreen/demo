var Vue = require('vue');
var VueRouter = require('vue-router');
var routes = require('./routes');

Vue.use(VueRouter);

var App = Vue.extend({});
var router = new VueRouter();

require('./scss/layout');

router.map(routes);

router.redirect({
    '*': '/index'
});

router.start(App, '#app');

console.log(App);
console.log(router);
console.log(routes);



