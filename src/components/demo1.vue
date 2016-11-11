<template>

    <div @click="alert()">demo1.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.jpeg">

    <!-- <div class="logo"></div> -->

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
                alert: function() {
                    alert('demo1');
                }
            }

    }
</script>

<style scoped lang="sass">

        div {
            color: red;
            display: flex;
        }

</style>