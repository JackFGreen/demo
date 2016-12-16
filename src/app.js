var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

var rem = require('../src/service/rem.js');

rem();

require('./scss/ionicons/ionicons.scss');
require('./scss/layout');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');

console.log('test chunhash');
