<template>

    <div @click="alert()">demo2.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.png">

    <div class="logo"></div>

</template>

<script>

require('../service/service');

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

<style scoped lang="sass">

        div {
            color: #ccc;
            display: flex;
        }

        .logo {
            width: 50px;
            height: 50px;
        }

</style>