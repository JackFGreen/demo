<template>
    <div id="webpack-vue">

        <c-side-main>
            <main class="main">
                <h1>webpack-vue</h1>
                <p>一些配置说明</p>
                <hr>
                <router-view></router-view>
            </main>
        </c-side-main>

    </div>
</template>

<script>
import cSideMain from '../../components/cSideMain';

export default {
    data() {
        return {};
    },
    //     beforeRouteEnter (to, from, next) {

    //     // 在渲染该组件的对应路由被 confirm 前调用
    //     // 不！能！获取组件实例 `this`
    //     // 因为当钩子执行前，组件实例还没被创建
    //   },
    // beforeRouteUpdate(to, from, next) {
    //     console.log(to, from);
    //     next()
    //     // 在当前路由改变，但是改组件被复用时调用
    //     // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    //     // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    //     // 可以访问组件实例 `this`
    // },
    //   beforeRouteLeave (to, from, next) {
    //     // 导航离开该组件的对应路由时调用
    //     // 可以访问组件实例 `this`
    //   },
    components: {
        cSideMain
    }

}
</script>

<style lang="scss">
@import '../../scss/_global.scss';
#webpack-vue {
    // width: 95%;
    // @extend %mg-auto;
    // .main {}

    // .side-wrap {
    //     position: fixed;
    // }

    // .cont-wrap {
    //     margin-left: 25%;
    // }

}
</style>
