<template>

    <div id="page-index">
        <p @click="test()">路由列表</p>
        <input type="text" v-model="filterText">

        <ul>
            <li v-for="obj in filterRoutes">
                <router-link :to="obj.path">{{obj.name}}</router-link>
            </li>
        </ul>
        <p>dpr: {{dpr}}</p>
        <p>width: {{width}}</p>
        <p>height: {{height}}</p>
    </div>

</template>

<script>
const routes = require('../routes');

export default {
    data() {
        // 过滤不显示的路由
        const hideReg = /^(\*|\/|\/index|\/not\-found)$/;
        const routesArr = routes.filter((item, index) => {
            return !hideReg.test(item.path);
        });

        return {
            dpr: window.devicePixelRatio,
            width: window.innerWidth,
            height: window.innerHeight,
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

<style lang="scss">
#page-index {
    padding: 0 5%;
    a {
        display: block;
        line-height: 30px;
    }
    li {
        border: 1px solid #000;
        margin: 5px 0;
    }
}
</style>
