<template>

    <p>home</p>

    <a v-for="obj in routes" href="#!{{obj.fullPath}}">{{obj.name}}</a>

    <img src="../images/t1.gif">
    <img src="../images/t3.jpg">

    <div class="test-bg"></div>

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
.test-bg {
    width: 200px;
    height: 200px;
    background: url(../images/t4.jpg) no-repeat;
    background-size: 100%;
    display: flex;
}

</style>
