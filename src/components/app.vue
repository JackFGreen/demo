<template>

    <div>app.vue</div>

    <div>{{msg}}</div>

    <img src="../images/logo.png">

    <div class="logo"></div>
    
</template>

<script>
    
    module.exports = {

            el: '#app',
            data: {
                msg: 'vue ok'
            }

    }
</script>

<style lang="sass">

    template {

        div {
            color: red;
        }

    }
    
</style>