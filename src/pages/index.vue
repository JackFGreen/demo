<template>

    <div id="page-index">
        <p @click="test()">路由列表</p>
        <input type="text" v-model="filterText">

        <ul>
            <li v-for="obj in filterRoutes">
                <router-link :to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
const routes = require('../routes');

export default {
    data() {
        const hideReg = /^(\*|\/|\/index|\/not\-found)$/; // 过滤不显示的路由
        const routesArr = routes.filter((item, index) => {
            return !hideReg.test(item.path);
        });

        return {
            routesArr,
            filterText: ''
        }
    },
    computed: {
        filterRoutes: function() {
            var _this = this;
            var reg = new RegExp(_this.filterText);

            return _this.routesArr.filter(function(item) {
                return reg.test(item.name);
            });
        }
    },
    methods: {
        test() {
            console.log(this.example)
        }
    }
}
</script>

<style scoped lang="scss">
#page-index {
    padding: 0 5%;
}
a {
    display: block;
    line-height: 30px;
}
</style>
