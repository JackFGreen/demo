<template>

    <div @click="alert()">demo1.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.png">

    <div class="logo"></div>

</template>

<script>

    module.exports = {

            data: function() {
                msg: 'demo1.vue ok'
            },
            methods: {
                alert: function() {
                    alert('demo1');
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