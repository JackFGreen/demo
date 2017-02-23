import routes from'./routes';

const router = new VueRouter({routes});

// var $ = require('jquery');

// $('body').html('app.js');

require('./scss/ionicons/ionicons.scss');
require('./scss/_global.scss');
require('./scss/layout');

import ajax from './service/ajax.js';

window.ajax = ajax;


Vue.use(VueRouter);

const App = new Vue({
    router
}).$mount('#app');
