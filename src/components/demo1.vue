<template>

    <div @click="change()">demo1.vue</div>

    <div @click="callChild()">{{test.msg}}</div>

    <img src="../images/logo.jpeg">

    <div class="logo"></div>

    <common v-bind:test="test"></common>

</template>

<script>
var common = require('./common.vue');

    var $data = {
        test: {
            msg: 'demo1.vue ok'
        }
    }

    module.exports = {

            data: function() {
                return $data;
            },
            methods: {
                change: function() {
                    $data.test.msg = '111';
                },

                callChild: function() {
                    common.methods.change(function(){

                        console.log($data.test);

                    });

                }

            },

            components: {
                common: common
            }

    }
</script>

<style scoped lang="scss">
        div {
            color: red;
            display: flex;
        }

</style>