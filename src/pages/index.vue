<template>

    <h2>routes list</h2>

    <ul>
        <li v-for="obj in routes">
            <h3>
                <a href="#!{{obj.fullPath}}">{{obj.name}}</a>
            </h3>
        </li>
    </ul>
    
</template>

<script type="text/javascript">
var routes = require('../routes');

var $data = {
    routes: {}
};

module.exports = {

    data: function() {
        var i = 0, j, k;
        var arr = ['/index'];//过滤不显示的路由

        for (j in routes) {
            $data.routes[j] = routes[j];
        }

        for (; i < arr.length; i++) {
            
            for (k in $data.routes) {
                arr[i] === k && delete $data.routes[k];
            }

        }

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
