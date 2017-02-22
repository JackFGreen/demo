var App = Vue.use(VueRouter).extend({});
var router = new VueRouter();
var routes = require('./routes');

// var $ = require('jquery');

// $('body').html('app.js');

require('./scss/ionicons/ionicons.scss');
require('./scss/_global.scss');
require('./scss/layout');

import ajax from './service/ajax.js';

window.ajax = ajax;

router.map(routes).redirect({'*': '/index'}).afterEach(function(arg) {
    document.title = arg.to.name;
}).start(App, '#app');
