var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

require('./scss/ionicons/ionicons.scss');
require('./scss/_global.scss');
require('./scss/layout');

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');
