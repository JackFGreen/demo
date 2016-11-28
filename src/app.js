// var Vue = require('vue');
// var VueRouter = require('vue-router');
var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

// var $ = require('jquery');

// $('body').html('app.js');

require('./scss/layout');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');