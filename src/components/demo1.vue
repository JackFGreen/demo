<template>

    <div @click="test()">demo1.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.jpeg">

    <!-- <div class="logo"></div> -->

    <commom v-bind:test="msg"></commom>

</template>

<script>
require('../scss/_global.scss');
var $data = {}

    module.exports = {

            data: function() {
                return {
                    msg: 'demo1.vue ok'
                }
            },
            methods: {
                test: function() {
                    this.msg = '111';
                }
            },

            components: {
                commom: require('./common.vue')
            }

    }
</script>

<style scoped lang="sass">

        div {
            color: red;
            display: flex;
        }

</style>