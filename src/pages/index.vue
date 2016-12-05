<template>

    <p>home</p>

    <a v-for="obj in routes" href="#!{{obj.fullPath}}">{{obj.name}}</a>

    <img src="../images/t3.jpg">

</template>

<script type="text/javascript">
var routes = require('../routes');
console.log(routes)

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