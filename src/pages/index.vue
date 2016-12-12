<template>

    <p>home</p>

    <a v-for="obj in routes" href="#!{{obj.fullPath}}">{{obj.name}}</a>

</template>

<script type="text/javascript">
var routes = require('../routes');

var $data = {
    routes: routes
};

module.exports = {

    data: function() {

        return $data;
    }
}

</script>

<style scoped lang="scss">
a {
    display: block;
    line-height: 30px;
}

</style>
