var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');
