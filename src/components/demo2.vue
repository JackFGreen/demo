<template>

    <div @click="alert()">demo2.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.png">

    <div class="logo"></div>

</template>

<script>

    module.exports = {

            data: function() {
                msg: 'demo2.vue'
            },
            methods: {
                alert: function() {
                    alert('demo2.vue');
                }
            }

    }
</script>

<style lang="sass">

        div {
            color: red;
            display: flex;
        }

</style>