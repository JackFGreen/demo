<template>
    
    <p>home</p>

    <a v-link></a>

    <common></common>

</template>

<script type="text/javascript">
var common = require('./common.vue');

var routes = require('../routes.js');
console.log(routes);

var $data = {};

module.exports = {

    data: function() {

        for (var k in routes) {
            // console.log(k);
        }

        return $data;
    },

    components: {
        common
    }
}
    
</script>