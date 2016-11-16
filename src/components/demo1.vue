<template>

    <div @click="test()">demo1.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.jpeg">

    <div class="logo"></div>

    <commom v-bind:test="msg"></commom>

</template>

<script>
    require('../scss/_global.scss');

    var $data = {
        msg: {
            msg: 'demo1.vue ok'
        }
    }

    module.exports = {

            data: function() {
                return $data;
            },
            methods: {
                test: function() {
                    $data.msg = '111';
                }
            },

            components: {
                commom: require('./common.vue')
            }

    }
</script>

<style scoped lang="scss">

        div {
            color: red;
            display: flex;
        }

</style>