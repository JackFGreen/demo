<template>

    <div @click="alert()">demo2.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.jpeg">

    <div class="logo"></div>

</template>

<script>
require('../service/service');

// var $ = require('jquery');

console.log($)
$('.logo').click(function(event) {
    alert(1)
});

    module.exports = {

            data: function() {
                return {}
            },
            methods: {
                alert: function() {
                    alert('demo2.vue');
                }
            }

    }
</script>

<style scoped lang="scss">
        div {
            color: #ccc;
            display: flex;
        }

        .logo {
            width: 50px;
            height: 50px;
        }

</style>