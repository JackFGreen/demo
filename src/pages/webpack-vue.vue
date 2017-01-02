<template>

    <div id="webpack-vue">
        <div class="grid grid-gutter">

            <div class="grid-col grid-col-6">
                <side-bar></side-bar>
            </div>

            <div class="grid-col grid-col-18">
                <main class="main">

                    <router-view></router-view>

                </main>
            </div>

        </div>
    </div>


</template>

<script>
var sideBar = require('../components/side-bar.vue');

module.exports = {
    data: function() {
        return {};
    },
    components: {
        sideBar
    }

}
</script>

<style lang="scss">
@import '../scss/_global.scss';

#webpack-vue {
    width: 95%;
    @extend %mg-0-auto;

    .main {
        
    }
}


</style>
