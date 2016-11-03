var Vue = require('vue');
var VueRouter = require('vue-router');

require('./scss/layout.scss');

var app = require('./components/app.vue');

new Vue(app);


console.log(__dirname);

Vue.config.debug = true;//开启错误提示

var Foo = Vue.extend({
    template: '<p>tpl foo</p>'
})

var Bar = Vue.extend({
    template: '<p>tpl bar</p>'
})

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

router.start(App, '#app');





