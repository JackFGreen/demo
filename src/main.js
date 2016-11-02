var Vue = require('vue');

var app = require('./components/app.vue');

new Vue(app);

require('./scss/layout.scss');

console.log(__dirname);

Vue.config.debug = true;//开启错误提示
