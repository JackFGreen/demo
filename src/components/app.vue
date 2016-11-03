<template>

    <div @click="alert()">app.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.png">

    <div class="logo"></div>

</template>

<script>

    module.exports = {

            el: '#app',
            data: {
                msg: 'vue ok1'
            },
            methods: {
                alert: function() {
                    alert(1);
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