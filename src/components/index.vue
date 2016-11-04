<template>

    <p>home</p>

    <a v-link="{ path: '/demo1'}">demo1</a>
    <a v-link="{ path: '/demo2'}">demo2</a>


    <common></common>

</template>

<script type="text/javascript">
var common = require('./common');

var routes = require('../routes');
console.log(routes);

var $data = {
    routes: routes
};

module.exports = {

    data: function() {

        return $data;
    },

    components: {
        common
    }
}

</script>