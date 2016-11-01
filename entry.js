// document.getElementById('app').innerHTML = 'entry.js bundle success'

require('./first.js');

require('./src/src.js');

require('./style.css');

var Vue = require('vue');

new Vue({
    el: '#app',
    data: {
        msg: 'msg12'
    }
});