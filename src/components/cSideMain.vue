<template>

    <div id="cSideMain">
        <div class="grid grid-gutter">

            <div class="grid-col grid-col-6 side-wrap">
                <c-sidebar :routes-list="childRoutes"></c-sidebar>
            </div>

            <div class="grid-col grid-col-18 main-wrap">
                <slot></slot>
                <router-view></router-view>
            </div>

        </div>
    </div>


</template>

<script>
import cSidebar from './cSidebar';
import routes from '../routes.js';

export default {
    data() {
        var _this = this;
        var path = _this.$route.path;
        var originPath = path.split('/')[1];
        var childRoutes = {};

        routes.forEach((item, i) => {
            if (item.children && Object.prototype.toString.call(item.children) === '[object Array]') {
                var reg = new RegExp(item.path);
                if (reg.test(path)) {
                    childRoutes.parent = originPath;
                    childRoutes.list = item.children;
                }
            }
        })
        return {
            childRoutes: childRoutes
        };
    },
    components: {
        cSidebar
    }

}

</script>

<style lang="scss">
@import '../scss/_global.scss';
#cSideMain {
    width: 95%;
    @extend %mg-auto;

    .side-wrap {
        position: fixed;
    }
    .main-wrap {
        margin-left: 25%;
    }
}

</style>
