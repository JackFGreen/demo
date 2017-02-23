<template>

    <div id="page-index">
        {{example}}
        <p @click="test()">路由列表</p>
        <input type="text" v-model="filterText">

        <router-link v-for="obj in filterRoutes" :to="obj.path">{{obj.name}}</router-link>
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
        /*        example: function() {
                    // 只有 filterText 改变才改变
                    return Date.now() + this.filterText
                },*/
        example: {
            cache: false,
            get: function() {
                // 实时改变，不包括DOM
                return Date.now() + this.filterText
            }
        },
        filterRoutes: function() {
            var _this = this;
            var reg = new RegExp(_this.filterText, 'i');

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
a {
    display: block;
    line-height: 30px;
}
</style>
